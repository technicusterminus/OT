(() => {
  "use strict";
  const FRAGEN = window.FRAGEN || [];
  const MODULE = window.MODULE || {};
  const STUFEN = window.STUFEN || {};
  const MEISTER_SERIE = 2; // so oft in Folge richtig = gemeistert
  const REIF_QUOTE = 90;   // Simulations-Ziel für "prüfungsreif"
  const PFADE = window.PFADE || { alle: { name: "Alle Module", module: null } };
  const pfadModule = (key) => (PFADE[key] && PFADE[key].module) || Object.keys(MODULE);
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
    const s = state.stats[id] || (state.stats[id] = { r: 0, f: 0, zuletzt: null, serie: 0 });
    richtig ? s.r++ : s.f++;
    s.zuletzt = richtig;
    s.serie = richtig ? (s.serie || 0) + 1 : 0;
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
    if (view === "stufen") renderStufen();
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
    const neuItem = (q) => ({ q, order: mischen(q.optionen.map((_, i) => i)), antwort: [], geprueft: false });
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
        <div class="qhead"><span>${opts.meister ? `Gemeistert ${opts.meister.fortschritt()} · ` : ""}Frage ${idx + 1}/${items.length} · ${q.modul} ${esc(MODULE[q.modul] || "")} · ${"★".repeat(q.level)}</span>
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
        if (opts.meister && !istGemeistert(it.q.id)) {
          // falsch: bald wiederholen; richtig, aber noch nicht gemeistert: später erneut
          const pos = ok ? items.length : Math.min(items.length, idx + 4);
          items.splice(pos, 0, neuItem(it.q));
        }
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
      if (opts.meister) { opts.meister.fertig(); return; }
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
      state.pruefungen.push({ datum: new Date().toISOString(), richtig, anzahl: items.length, pct, bestanden, stufe: opts.stufe || null });
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

  // ---------- Stufen ----------
  function istGemeistert(id) { const s = state.stats[id]; return !!s && (s.serie || 0) >= MEISTER_SERIE; }
  function stufeIds(key) {
    const st = STUFEN[key];
    if (!st) return [];
    if (!st.themen) return FRAGEN.map((q) => q.id);
    return [...new Set(st.themen.flatMap((t) => t.fragen))];
  }
  const fragenVon = (ids) => ids.map((id) => FRAGEN.find((q) => q.id === id)).filter(Boolean);
  function stufeStatus(key) {
    const ids = stufeIds(key);
    const gem = ids.filter(istGemeistert).length;
    const sims = state.pruefungen.filter((p) => p.stufe === key);
    const letzte2 = sims.slice(-2);
    const simOk = letzte2.length === 2 && letzte2.every((p) => p.pct >= REIF_QUOTE);
    const vorausOk = STUFEN[key].voraussetzung.every((v) => stufeStatus(v).reif);
    return { ids, gem, pct: ids.length ? Math.round((100 * gem) / ids.length) : 0, sims, simOk, vorausOk,
      reif: gem === ids.length && ids.length > 0 && simOk && (key !== "expert" || vorausOk) };
  }
  function simAuswahl(key, n) {
    const st = STUFEN[key];
    const gruppen = st.themen ? st.themen.map((t) => mischen(t.fragen)) : Object.keys(MODULE).map((m) => mischen(FRAGEN.filter((q) => q.modul === m).map((q) => q.id)));
    const gewaehlt = new Set();
    while (gewaehlt.size < n && gruppen.some((g) => g.length)) {
      gruppen.forEach((g) => { while (g.length && gewaehlt.size < n) { const id = g.pop(); if (!gewaehlt.has(id)) { gewaehlt.add(id); break; } } });
    }
    return fragenVon([...gewaehlt]);
  }
  function renderStufen() {
    $("#stufen-liste").innerHTML = Object.entries(STUFEN).map(([key, st]) => {
      const s = stufeStatus(key);
      const themen = (st.themen || []).map((t) => {
        const g = t.fragen.filter(istGemeistert).length;
        const p = Math.round((100 * g) / t.fragen.length);
        return `<div class="thema"><span>${t.id} ${esc(t.name)}</span><span class="muted small">${g}/${t.fragen.length}</span><div class="bar"><span style="width:${p}%"></span></div></div>`;
      }).join("");
      const sims = s.sims.slice(-3).map((p) => `<span class="${p.pct >= REIF_QUOTE ? "pass" : "fail"}">${p.pct} %</span>`).join(" · ") || "–";
      const voraus = st.voraussetzung.length
        ? `<p class="small">Voraussetzung: ${st.voraussetzung.map((v) => `${esc(STUFEN[v].kurz)} ${stufeStatus(v).reif ? "✅" : "⏳"}`).join(", ")}</p>` : "";
      const n = Math.min(50, s.ids.length);
      return `<div class="card stufe">
        <div class="stufe-kopf"><h3>${esc(st.name)}</h3><span class="badge ${s.reif ? "ok" : ""}">${s.reif ? "PRÜFUNGSREIF" : s.pct + " % gemeistert"}</span></div>
        <p class="muted small">${esc(st.hinweis)}</p>${voraus}
        <div class="bar big"><span style="width:${s.pct}%"></span></div>
        <p class="small">Gemeistert: <b>${s.gem}/${s.ids.length}</b> Fragen · Letzte Simulationen: ${sims} · Ziel: 2× ≥ ${REIF_QUOTE} %</p>
        ${themen ? `<details><summary>Themen (${st.themen.length})</summary><div class="themen">${themen}</div></details>` : ""}
        <div class="row">
          <button class="primary" data-meister="${key}" ${s.gem === s.ids.length ? "disabled" : ""}>Meistermodus (${s.ids.length - s.gem} offen)</button>
          <button data-sim="${key}" data-n="${n}">Simulation (${n} Fragen, ${Math.round(n * 1.5)} min)</button>
        </div></div>`;
    }).join("");
    document.querySelectorAll("[data-meister]").forEach((b) => b.addEventListener("click", () => meistern(b.dataset.meister)));
    document.querySelectorAll("[data-sim]").forEach((b) => b.addEventListener("click", () => {
      const key = b.dataset.sim, n = +b.dataset.n;
      $("#stufen-setup").style.display = "none";
      quiz($("#stufen-quiz"), mischen(simAuswahl(key, n)), { mode: "pruefung", minuten: Math.round(n * 1.5), grenze: REIF_QUOTE, stufe: key,
        onAbbruch: () => { $("#stufen-setup").style.display = ""; renderStufen(); } });
    }));
  }
  function meistern(key) {
    const ids = stufeIds(key);
    const offen = mischen(fragenVon(ids.filter((id) => !istGemeistert(id))));
    if (!offen.length) return;
    $("#stufen-setup").style.display = "none";
    const zurueck = () => { $("#stufen-quiz").innerHTML = ""; $("#stufen-setup").style.display = ""; renderStufen(); };
    quiz($("#stufen-quiz"), offen, {
      mode: "sofort",
      meister: {
        fortschritt: () => `${ids.filter(istGemeistert).length}/${ids.length}`,
        fertig: () => {
          const g = ids.filter(istGemeistert).length;
          $("#stufen-quiz").innerHTML = `<div class="card"><h2>${g === ids.length ? "🎯 100 % gemeistert" : "Runde beendet"}</h2>
            <p>${esc(STUFEN[key].name)}: <b>${g}/${ids.length}</b> Fragen gemeistert.</p>
            <p class="muted">${g === ids.length ? "Jetzt zweimal die Stufen-Simulation mit ≥ " + REIF_QUOTE + " % bestehen." : "Weiter, bis alle Fragen gemeistert sind."}</p>
            <div class="row"><button class="primary" id="btn-meister-zurueck">Zur Stufenübersicht</button></div></div>`;
          $("#btn-meister-zurueck").addEventListener("click", zurueck);
        },
      },
      onAbbruch: zurueck,
    });
  }

  // ---------- Üben ----------
  $("#ueben-module").innerHTML = Object.entries(MODULE).map(([m, n]) =>
    `<label class="chip" title="${esc(n)}"><input type="checkbox" value="${m}" checked>${m}</label>`).join("");
  document.querySelectorAll(".pfad-select").forEach((sel) => {
    sel.innerHTML = Object.entries(PFADE).map(([k, p]) => `<option value="${k}">${esc(p.name)}</option>`).join("");
  });
  $("#ueben-pfad").addEventListener("change", (e) => {
    const mods = pfadModule(e.target.value);
    document.querySelectorAll("#ueben-module input").forEach((c) => { c.checked = mods.includes(c.value); });
  });
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
    const n = Math.max(5, +$("#pr-anzahl").value || 50);
    const minuten = Math.max(1, +$("#pr-minuten").value || 75);
    const grenze = Math.min(100, Math.max(1, +$("#pr-grenze").value || 70));
    // ausgewogen: reihum aus jedem Modul ziehen
    const proModul = pfadModule($("#pr-pfad").value).map((m) => mischen(FRAGEN.filter((q) => q.modul === m)));
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
