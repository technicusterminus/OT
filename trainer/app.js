(() => {
  "use strict";
  const FRAGEN = window.FRAGEN || [];
  const MODULE = window.MODULE || {};
  const KEY = "ot62443-trainer-v1";
  const LEITNER_TAGE = [0, 1, 3, 7, 14]; // Fach 1..5
  const DAY = 86400000;

  // ---------- Speicher ----------
  function leer() { return { stats: {}, kartei: {}, pruefungen: [] }; }
  function laden() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.stats && s.kartei) return Object.assign(leer(), s);
    } catch (e) { /* Speicher nicht verfügbar */ }
    return leer();
  }
  let state = laden();
  function speichern() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignorieren */ }
  }

  function werten(id, richtig) {
    const s = state.stats[id] || (state.stats[id] = { r: 0, f: 0, zuletzt: null });
    richtig ? s.r++ : s.f++;
    s.zuletzt = richtig;
  }
  function karteiWerten(id, richtig) {
    const k = state.kartei[id] || { fach: 1, due: 0 };
    k.fach = richtig ? Math.min(5, k.fach + 1) : 1;
    k.due = Date.now() + LEITNER_TAGE[k.fach - 1] * DAY;
    state.kartei[id] = k;
  }

  // ---------- Helfer ----------
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function mischen(a) {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
    return b;
  }
  const gleich = (a, b) => a.length === b.length && a.every((x) => b.includes(x));
  const quote = (s) => (s.r + s.f ? Math.round((100 * s.r) / (s.r + s.f)) : null);

  // ---------- Navigation ----------
  document.querySelectorAll("nav button").forEach((b) =>
    b.addEventListener("click", () => zeige(b.dataset.view)));
  function zeige(view) {
    document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
    document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + view));
    if (view === "start") renderStart();
    if (view === "kartei") renderKartei();
    if (view === "statistik") renderStatistik();
    window.scrollTo(0, 0);
  }

  // ---------- Start ----------
  function modulStats(m) {
    const fr = FRAGEN.filter((q) => q.modul === m);
    let r = 0, f = 0, gesehen = 0;
    fr.forEach((q) => { const s = state.stats[q.id]; if (s) { r += s.r; f += s.f; gesehen++; } });
    return { anzahl: fr.length, gesehen, quote: quote({ r, f }) };
  }
  function renderStart() {
    $("#pool-info").textContent = `${FRAGEN.length} Fragen in ${Object.keys(MODULE).length} Modulen.`;
    $("#module-overview").innerHTML = Object.entries(MODULE).map(([m, name]) => {
      const s = modulStats(m);
      const pct = Math.round((100 * s.gesehen) / (s.anzahl || 1));
      return `<div class="mod"><b>${m}</b> ${esc(name)}<div class="muted small">${s.gesehen}/${s.anzahl} gesehen · Quote ${s.quote ?? "–"}${s.quote != null ? " %" : ""}</div><div class="bar"><span style="width:${pct}%"></span></div></div>`;
    }).join("");
  }
  $("#btn-export").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `62443-fortschritt-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  });
  $("#inp-import").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    file.text().then((t) => {
      try {
        const s = JSON.parse(t);
        if (!s.stats || !s.kartei) throw new Error("Format");
        state = Object.assign(leer(), s); speichern(); renderStart(); alert("Import erfolgreich.");
      } catch (err) { alert("Datei ist kein gültiger Fortschritts-Export."); }
    });
    e.target.value = "";
  });
  $("#btn-reset").addEventListener("click", () => {
    if (confirm("Gesamten Fortschritt wirklich löschen?")) { state = leer(); speichern(); renderStart(); }
  });

  // ---------- Quiz-Engine ----------
  // mode: "sofort" (Feedback je Frage) oder "pruefung" (Auswertung am Ende)
  function quiz(container, fragen, opts) {
    const items = fragen.map((q) => ({ q, order: mischen(q.optionen.map((_, i) => i)), antwort: [], geprueft: false }));
    let idx = 0, timerId = null, ende = null;
    const multi = (q) => q.korrekt.length > 1;

    if (opts.minuten) {
      ende = Date.now() + opts.minuten * 60000;
      timerId = setInterval(() => {
        const t = $(".timer", container);
        const rest = Math.max(0, ende - Date.now());
        if (t) {
          const m = Math.floor(rest / 60000), s = Math.floor((rest % 60000) / 1000);
          t.textContent = `${m}:${String(s).padStart(2, "0")}`;
          t.classList.toggle("warn", rest < 5 * 60000);
        }
        if (rest <= 0) abgeben(true);
      }, 1000);
    }

    function render() {
      const it = items[idx], q = it.q;
      const zeigeLoesung = opts.mode === "sofort" && it.geprueft;
      const optHtml = it.order.map((oi) => {
        const checked = it.antwort.includes(oi) ? "checked" : "";
        let cls = "";
        if (zeigeLoesung) {
          if (q.korrekt.includes(oi)) cls = "ok";
          else if (it.antwort.includes(oi)) cls = "bad";
        }
        return `<label class="opt ${cls}"><input type="${multi(q) ? "checkbox" : "radio"}" name="opt" value="${oi}" ${checked} ${zeigeLoesung ? "disabled" : ""}><span>${esc(q.optionen[oi])}</span></label>`;
      }).join("");
      let fb = "";
      if (zeigeLoesung) {
        const ok = gleich(it.antwort, q.korrekt);
        fb = `<div class="feedback ${ok ? "ok" : "bad"}"><b>${ok ? "Richtig" : "Leider falsch"}.</b> ${esc(q.erklaerung)}<div class="muted small">Bezug: ${esc(q.ref)}</div></div>`;
      }
      const sofortBtns = it.geprueft
        ? `<button class="primary" data-a="weiter">${idx < items.length - 1 ? "Weiter" : "Abschließen"}</button>`
        : `<button class="primary" data-a="pruefen">Antwort prüfen</button>`;
      const pruefBtns = `<button data-a="zurueck" ${idx === 0 ? "disabled" : ""}>Zurück</button>
        <button data-a="vor" ${idx === items.length - 1 ? "disabled" : ""}>Weiter</button>
        <button class="primary" data-a="abgeben">Abgeben</button>
        <span class="muted small">${items.filter((x) => x.antwort.length).length}/${items.length} beantwortet</span>`;
      container.innerHTML = `<div class="card">
        <div class="qhead"><span>Frage ${idx + 1}/${items.length} · ${q.modul} ${esc(MODULE[q.modul] || "")} · ${"★".repeat(q.level)}</span>
        ${ende ? `<span>⏱ <span class="timer"></span></span>` : ""}</div>
        <div class="frage">${esc(q.frage)}</div>
        ${multi(q) ? `<div class="muted small">Mehrere Antworten sind richtig.</div>` : ""}
        <form>${optHtml}</form>${fb}
        <div class="row">${opts.mode === "sofort" ? sofortBtns : pruefBtns}
          <button data-a="abbrechen" class="danger">Abbrechen</button></div></div>`;
      if (ende) {
        const rest = Math.max(0, ende - Date.now());
        $(".timer", container).textContent = `${Math.floor(rest / 60000)}:${String(Math.floor((rest % 60000) / 1000)).padStart(2, "0")}`;
      }
      container.querySelectorAll("input[name=opt]").forEach((inp) => inp.addEventListener("change", () => {
        it.antwort = [...container.querySelectorAll("input[name=opt]:checked")].map((x) => +x.value);
        if (opts.mode === "pruefung") { const s = $(".row .muted", container); if (s) s.textContent = `${items.filter((x) => x.antwort.length).length}/${items.length} beantwortet`; }
      }));
      container.querySelectorAll("button[data-a]").forEach((b) => b.addEventListener("click", (e) => { e.preventDefault(); aktion(b.dataset.a); }));
    }

    function aktion(a) {
      const it = items[idx];
      if (a === "pruefen") {
        if (!it.antwort.length) return;
        it.geprueft = true;
        const ok = gleich(it.antwort, it.q.korrekt);
        werten(it.q.id, ok);
        if (opts.kartei) karteiWerten(it.q.id, ok);
        speichern(); render();
      } else if (a === "weiter") {
        if (idx < items.length - 1) { idx++; render(); } else fertig();
      } else if (a === "vor") { idx++; render(); }
      else if (a === "zurueck") { idx--; render(); }
      else if (a === "abgeben") {
        const offen = items.filter((x) => !x.antwort.length).length;
        if (offen && !confirm(`${offen} Fragen sind unbeantwortet. Trotzdem abgeben?`)) return;
        abgeben(false);
      } else if (a === "abbrechen") {
        if (confirm("Durchgang abbrechen?")) { stop(); container.innerHTML = ""; opts.onAbbruch && opts.onAbbruch(); }
      }
    }
    function stop() { if (timerId) clearInterval(timerId); timerId = null; }

    function fertig() {
      stop();
      const richtig = items.filter((x) => x.geprueft && gleich(x.antwort, x.q.korrekt)).length;
      container.innerHTML = `<div class="card"><h2>Ergebnis</h2><p><b>${richtig}/${items.length}</b> richtig (${Math.round((100 * richtig) / items.length)} %).</p>
        <div class="row"><button class="primary" data-a="neu">Neuer Durchgang</button></div></div>`;
      $("button[data-a=neu]", container).addEventListener("click", () => { container.innerHTML = ""; opts.onAbbruch && opts.onAbbruch(); });
    }

    function abgeben(zeitAbgelaufen) {
      if (!timerId && opts.minuten) return; // bereits abgegeben
      stop();
      let richtig = 0;
      const proModul = {};
      items.forEach((x) => {
        const ok = gleich(x.antwort, x.q.korrekt);
        if (ok) richtig++;
        werten(x.q.id, ok);
        const pm = proModul[x.q.modul] || (proModul[x.q.modul] = { r: 0, n: 0 });
        pm.n++; if (ok) pm.r++;
      });
      const pct = Math.round((100 * richtig) / items.length);
      const bestanden = pct >= opts.grenze;
      state.pruefungen.push({ datum: new Date().toISOString(), richtig, anzahl: items.length, pct, bestanden });
      speichern();
      const zeilen = Object.entries(proModul).sort().map(([m, v]) =>
        `<tr><td>${m} ${esc(MODULE[m] || "")}</td><td>${v.r}/${v.n}</td><td>${Math.round((100 * v.r) / v.n)} %</td></tr>`).join("");
      const review = items.map((x, i) => {
        const ok = gleich(x.antwort, x.q.korrekt);
        const fmt = (arr) => arr.length ? arr.map((oi) => esc(x.q.optionen[oi])).join("; ") : "<i>keine</i>";
        return `<details><summary>${ok ? "✅" : "❌"} ${i + 1}. ${esc(x.q.frage)}</summary>
          <p><b>Deine Antwort:</b> ${fmt(x.antwort)}<br><b>Richtig:</b> ${fmt(x.q.korrekt)}</p>
          <p>${esc(x.q.erklaerung)} <span class="muted small">(${esc(x.q.ref)})</span></p></details>`;
      }).join("");
      container.innerHTML = `<div class="card"><h2>Auswertung</h2>
        ${zeitAbgelaufen ? `<p class="fail">Zeit abgelaufen – automatisch abgegeben.</p>` : ""}
        <p><b>${richtig}/${items.length}</b> richtig = <b>${pct} %</b> → <span class="${bestanden ? "pass" : "fail"}">${bestanden ? "BESTANDEN" : "NICHT BESTANDEN"}</span> (Grenze ${opts.grenze} %)</p>
        <table><tr><th>Modul</th><th>Richtig</th><th>Quote</th></tr>${zeilen}</table>
        <h3 style="margin-top:16px">Fragen im Detail</h3><div class="review">${review}</div>
        <div class="row"><button class="primary" data-a="neu">Neue Prüfung</button></div></div>`;
      $("button[data-a=neu]", container).addEventListener("click", () => { container.innerHTML = ""; opts.onAbbruch && opts.onAbbruch(); });
    }

    render();
  }

  // ---------- Üben ----------
  $("#ueben-module").innerHTML = Object.entries(MODULE).map(([m, n]) =>
    `<label class="chip" title="${esc(n)}"><input type="checkbox" value="${m}" checked>${m}</label>`).join("");
  $("#btn-ueben-start").addEventListener("click", () => {
    const mods = [...document.querySelectorAll("#ueben-module input:checked")].map((x) => x.value);
    const level = +$("#ueben-level").value;
    const nurFalsch = $("#ueben-falsch").checked;
    let pool = FRAGEN.filter((q) => mods.includes(q.modul) && (!level || q.level === level));
    if (nurFalsch) pool = pool.filter((q) => state.stats[q.id] && state.stats[q.id].zuletzt === false);
    if (!pool.length) { alert("Keine Fragen für diese Auswahl."); return; }
    $("#ueben-setup").style.display = "none";
    quiz($("#ueben-quiz"), mischen(pool), { mode: "sofort", onAbbruch: () => { $("#ueben-setup").style.display = ""; } });
  });

  // ---------- Prüfung ----------
  $("#btn-pruefung-start").addEventListener("click", () => {
    const n = Math.min(FRAGEN.length, Math.max(5, +$("#pr-anzahl").value || 50));
    const minuten = Math.max(1, +$("#pr-minuten").value || 75);
    const grenze = Math.min(100, Math.max(1, +$("#pr-grenze").value || 70));
    // ausgewogen: reihum aus jedem Modul ziehen
    const proModul = Object.keys(MODULE).map((m) => mischen(FRAGEN.filter((q) => q.modul === m)));
    const auswahl = [];
    while (auswahl.length < n && proModul.some((l) => l.length)) {
      proModul.forEach((l) => { if (l.length && auswahl.length < n) auswahl.push(l.pop()); });
    }
    $("#pruefung-setup").style.display = "none";
    quiz($("#pruefung-quiz"), mischen(auswahl), { mode: "pruefung", minuten, grenze, onAbbruch: () => { $("#pruefung-setup").style.display = ""; } });
  });

  // ---------- Karteikasten ----------
  function fach(id) { return (state.kartei[id] && state.kartei[id].fach) || 1; }
  function faellig() {
    const now = Date.now();
    return FRAGEN.filter((q) => !state.kartei[q.id] || state.kartei[q.id].due <= now);
  }
  function renderKartei() {
    const z = [0, 0, 0, 0, 0];
    FRAGEN.forEach((q) => z[fach(q.id) - 1]++);
    $("#kartei-faecher").innerHTML = z.map((n, i) =>
      `<div class="fach"><span class="muted small">Fach ${i + 1}</span><b>${n}</b><span class="muted small">${LEITNER_TAGE[i] ? "alle " + LEITNER_TAGE[i] + " T." : "sofort"}</span></div>`).join("");
    const f = faellig().length;
    $("#btn-kartei-start").textContent = `Fällige lernen (${f})`;
    $("#btn-kartei-start").disabled = !f;
  }
  $("#btn-kartei-start").addEventListener("click", () => {
    // niedrigste Fächer zuerst, max. 20 pro Sitzung
    const pool = mischen(faellig()).sort((a, b) => fach(a.id) - fach(b.id)).slice(0, 20);
    if (!pool.length) return;
    $("#kartei-setup").style.display = "none";
    quiz($("#kartei-quiz"), pool, { mode: "sofort", kartei: true, onAbbruch: () => { $("#kartei-setup").style.display = ""; renderKartei(); } });
  });

  // ---------- Statistik ----------
  function renderStatistik() {
    const zeilen = Object.entries(MODULE).map(([m, n]) => {
      const s = modulStats(m);
      return `<tr><td>${m} ${esc(n)}</td><td>${s.gesehen}/${s.anzahl}</td><td>${s.quote ?? "–"}${s.quote != null ? " %" : ""}</td></tr>`;
    }).join("");
    const schwach = FRAGEN.map((q) => ({ q, s: state.stats[q.id] }))
      .filter((x) => x.s && x.s.f > 0)
      .sort((a, b) => (b.s.f - b.s.r) - (a.s.f - a.s.r)).slice(0, 10)
      .map((x) => `<li>${esc(x.q.frage)} <span class="muted small">(${x.s.r}× richtig, ${x.s.f}× falsch)</span></li>`).join("");
    const pr = state.pruefungen.slice(-10).reverse().map((p) =>
      `<tr><td>${new Date(p.datum).toLocaleString("de-DE")}</td><td>${p.richtig}/${p.anzahl}</td><td class="${p.bestanden ? "pass" : "fail"}">${p.pct} %</td></tr>`).join("");
    $("#stat-content").innerHTML = `<table><tr><th>Modul</th><th>Gesehen</th><th>Quote</th></tr>${zeilen}</table>
      <h3 style="margin-top:16px">Schwachstellen (Top 10)</h3>${schwach ? `<ol>${schwach}</ol>` : `<p class="muted">Noch keine Fehler – weiter so!</p>`}
      <h3>Letzte Prüfungen</h3>${pr ? `<table><tr><th>Datum</th><th>Richtig</th><th>Quote</th></tr>${pr}</table>` : `<p class="muted">Noch keine Prüfungssimulation.</p>`}`;
  }

  renderStart();
})();
