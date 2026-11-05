(() => {
  "use strict";
  const FRAGEN = window.FRAGEN || [];
  const MODULE = window.MODULE || {};
  const STUFEN = window.STUFEN || {};
  const POOL = new Set(window.PRUEFUNGSPOOL || []); // nur in Simulationen
  const KEY = "ot62443-trainer-v1";
  const DAY = 86400000;
  // Wiederholungsabstände je Fach (Tage). Fach 0 = neu/falsch, sofort fällig.
  const INTERVALL = [0, 1, 3, 7, 14, 30];
  const MEISTER_FACH = 2;        // gemeistert = an zwei verschiedenen Tagen richtig
  const REIF_QUOTE = 90;         // Simulation gesamt
  const REIF_POOL = 80;          // Anteil Prüfungspool in der Simulation
  const SITZUNG_MAX = 20, SITZUNG_NEU = 10;
  const MODUL_DATEI = {
    M01: "01-ot-grundlagen.md", M02: "02-normenreihe-rollen.md", M03: "03-grundkonzepte.md",
    M04: "04-security-level-fr.md", M05: "05-risikobeurteilung-3-2.md", M06: "06-systemanforderungen-3-3.md",
    M07: "07-betreiber-2-1-2-3.md", M08: "08-dienstleister-2-4.md", M09: "09-produkt-4-1-4-2.md",
    M10: "10-zertifizierung-praxis.md", M11: "11-risk-assessment-vertiefung.md", M12: "12-design-vertiefung.md",
    M13: "13-betrieb-wartung.md",
  };

  // ---------- Speicher ----------
  function leer() { return { stats: {}, pruefungen: [], aktiveStufe: "fundamentals", version: 2 }; }
  function laden() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.stats) {
        const st = Object.assign(leer(), s);
        if (!s.version) { // Migration v1: Serien-Zählung gilt nicht als Abstand-Wiederholung
          Object.values(st.stats).forEach((x) => { x.fach = 0; x.faellig = 0; });
          delete st.kartei; st.version = 2;
        }
        return st;
      }
    } catch (e) { /* Speicher nicht verfügbar */ }
    return leer();
  }
  let state = laden();
  function speichern() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignorieren */ } }

  const tagStart = (t) => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };
  // Wertet eine Antwort aus. Fortschritt im Fach gibt es nur, wenn die Frage fällig war:
  // mehrfaches Richtig am selben Tag zählt nicht als Wiederholung mit Abstand.
  function werten(id, richtig, jetzt = Date.now()) {
    const s = state.stats[id] || (state.stats[id] = { r: 0, f: 0, zuletzt: null, fach: 0, faellig: 0 });
    richtig ? s.r++ : s.f++;
    s.zuletzt = richtig;
    if (!richtig) { s.fach = 0; s.faellig = jetzt; return; }
    if ((s.fach || 0) === 0 || jetzt >= (s.faellig || 0)) {
      s.fach = Math.min(INTERVALL.length - 1, (s.fach || 0) + 1);
      s.faellig = tagStart(jetzt) + INTERVALL[s.fach] * DAY;
    }
  }
  const stat = (id) => state.stats[id] || null;
  const istGemeistert = (id) => { const s = stat(id); return !!s && (s.fach || 0) >= MEISTER_FACH && s.zuletzt === true; };
  const istFaellig = (id, jetzt = Date.now()) => { const s = stat(id); return !s || (s.fach || 0) === 0 || jetzt >= (s.faellig || 0); };
  const istNeu = (id) => !stat(id);

  // ---------- Helfer ----------
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function mischen(a) {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
    return b;
  }
  const gleich = (a, b) => a.length === b.length && a.every((x) => b.includes(x));
  const quote = (r, n) => (n ? Math.round((100 * r) / n) : null);
  const datumKurz = (t) => new Date(t).toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit" });

  // ---------- Quiz-Engine ----------
  // mode "sofort": Feedback je Frage · mode "pruefung": Auswertung am Ende
  // opts.lernen: falsche Fragen kommen in derselben Sitzung nach 3 Fragen wieder
  function quiz(container, fragen, opts) {
    const neuItem = (q) => ({ q, order: mischen(q.optionen.map((_, i) => i)), antwort: [], geprueft: false });
    const items = fragen.map(neuItem);
    let idx = 0, timerId = null, ende = null;
    const multi = (q) => q.korrekt.length > 1;
    const zeit = () => { const rest = Math.max(0, ende - Date.now()); return `${Math.floor(rest / 60000)}:${String(Math.floor((rest % 60000) / 1000)).padStart(2, "0")}`; };

    if (opts.minuten) {
      ende = Date.now() + opts.minuten * 60000;
      timerId = setInterval(() => {
        const t = $(".timer", container);
        if (t) { t.textContent = zeit(); t.classList.toggle("warn", ende - Date.now() < 5 * 60000); }
        if (Date.now() >= ende) abgeben(true);
      }, 1000);
    }

    // Feedback zu jeder relevanten Option: gewählte Optionen und übersehene richtige
    function optionsFeedback(q, antwort) {
      return q.optionen.map((_, oi) => {
        const gewaehlt = antwort.includes(oi), richtig = q.korrekt.includes(oi);
        if (!gewaehlt && !richtig) return "";
        const art = richtig ? (gewaehlt ? "ok" : "fehlt") : "bad";
        const label = { ok: "✔ richtig gewählt", fehlt: "○ übersehen", bad: "✘ falsch gewählt" }[art];
        return `<li class="fb-${art}"><b>${label}:</b> ${esc(q.optionen[oi])}<br><span class="muted">${esc(q.feedback[oi] || "")}</span></li>`;
      }).join("");
    }

    function render() {
      const it = items[idx], q = it.q;
      const zeigeLoesung = opts.mode === "sofort" && it.geprueft;
      const optHtml = it.order.map((oi) => {
        let cls = "";
        if (zeigeLoesung) cls = q.korrekt.includes(oi) ? "ok" : it.antwort.includes(oi) ? "bad" : "";
        return `<label class="opt ${cls}"><input type="${multi(q) ? "checkbox" : "radio"}" name="opt" value="${oi}" ${it.antwort.includes(oi) ? "checked" : ""} ${zeigeLoesung ? "disabled" : ""}><span>${esc(q.optionen[oi])}</span></label>`;
      }).join("");
      let fb = "";
      if (zeigeLoesung) {
        const ok = gleich(it.antwort, q.korrekt);
        fb = `<div class="feedback ${ok ? "ok" : "bad"}"><b>${ok ? "Richtig." : "Nicht ganz."}</b> ${esc(q.erklaerung)}
          <ul class="fb-liste">${optionsFeedback(q, it.antwort)}</ul>
          <div class="muted small">Bezug: ${esc(q.ref)}${opts.lernen && !ok ? " · kommt in dieser Runde noch einmal" : ""}</div></div>`;
      }
      const sofortBtns = it.geprueft
        ? `<button class="primary" data-a="weiter">${idx < items.length - 1 ? "Weiter" : "Abschließen"}</button>`
        : `<button class="primary" data-a="pruefen">Antwort prüfen</button>`;
      const pruefBtns = `<button data-a="zurueck" ${idx === 0 ? "disabled" : ""}>Zurück</button>
        <button data-a="vor" ${idx === items.length - 1 ? "disabled" : ""}>Weiter</button>
        <button class="primary" data-a="abgeben">Abgeben</button>
        <span class="muted small zaehler">${items.filter((x) => x.antwort.length).length}/${items.length} beantwortet</span>`;
      container.innerHTML = `<div class="card">
        <div class="qhead"><span>${opts.kopf ? esc(opts.kopf()) + " · " : ""}Frage ${idx + 1}/${items.length} · ${q.modul} · ${"★".repeat(q.level)}</span>
        ${ende ? `<span>⏱ <span class="timer">${zeit()}</span></span>` : ""}</div>
        <div class="frage">${esc(q.frage)}</div>
        ${multi(q) ? `<div class="muted small">Mehrere Antworten sind richtig.</div>` : ""}
        <form>${optHtml}</form>${fb}
        <div class="row">${opts.mode === "sofort" ? sofortBtns : pruefBtns}
          <button data-a="abbrechen" class="danger">Abbrechen</button></div></div>`;
      container.querySelectorAll("input[name=opt]").forEach((inp) => inp.addEventListener("change", () => {
        it.antwort = [...container.querySelectorAll("input[name=opt]:checked")].map((x) => +x.value);
        const z = $(".zaehler", container); if (z) z.textContent = `${items.filter((x) => x.antwort.length).length}/${items.length} beantwortet`;
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
        if (opts.lernen && !ok) items.splice(Math.min(items.length, idx + 4), 0, neuItem(it.q));
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
        if (confirm("Durchgang abbrechen?")) { stop(); container.innerHTML = ""; opts.onEnde && opts.onEnde(); }
      }
    }
    function stop() { if (timerId) clearInterval(timerId); timerId = null; }

    function fertig() {
      stop();
      const beantwortet = items.filter((x) => x.geprueft);
      const richtig = beantwortet.filter((x) => gleich(x.antwort, x.q.korrekt)).length;
      const extra = opts.fertigText ? opts.fertigText() : "";
      container.innerHTML = `<div class="card"><h2>Runde beendet</h2>
        <p><b>${richtig}/${beantwortet.length}</b> Antworten richtig (${quote(richtig, beantwortet.length) ?? 0} %).</p>${extra}
        <div class="row"><button class="primary" data-a="neu">Zurück</button></div></div>`;
      $("button[data-a=neu]", container).addEventListener("click", () => { container.innerHTML = ""; opts.onEnde && opts.onEnde(); });
    }

    function abgeben(zeitAbgelaufen) {
      if (opts.minuten && !timerId) return; // bereits abgegeben
      stop();
      let richtig = 0, poolR = 0, poolN = 0;
      const proGruppe = {};
      items.forEach((x) => {
        const ok = gleich(x.antwort, x.q.korrekt);
        if (ok) richtig++;
        if (POOL.has(x.q.id)) { poolN++; if (ok) poolR++; } else werten(x.q.id, ok);
        const g = opts.gruppeVon ? opts.gruppeVon(x.q.id) : x.q.modul;
        const pg = proGruppe[g] || (proGruppe[g] = { r: 0, n: 0 }); pg.n++; if (ok) pg.r++;
      });
      const pct = quote(richtig, items.length), pctPool = quote(poolR, poolN);
      const bestanden = pct >= opts.grenze;
      state.pruefungen.push({ datum: new Date(Date.now()).toISOString(), richtig, anzahl: items.length, pct, pctPool, poolN, bestanden, stufe: opts.stufe || null });
      speichern();
      const zeilen = Object.entries(proGruppe).sort().map(([g, v]) =>
        `<tr><td>${esc(g)}</td><td>${v.r}/${v.n}</td><td>${quote(v.r, v.n)} %</td></tr>`).join("");
      const review = items.map((x, i) => {
        const ok = gleich(x.antwort, x.q.korrekt);
        return `<details><summary>${ok ? "✅" : "❌"} ${i + 1}. ${esc(x.q.frage)}${POOL.has(x.q.id) ? ' <span class="badge klein">Prüfungspool</span>' : ""}</summary>
          <p>${esc(x.q.erklaerung)} <span class="muted small">(${esc(x.q.ref)})</span></p>
          <ul class="fb-liste">${optionsFeedback(x.q, x.antwort)}</ul></details>`;
      }).join("");
      container.innerHTML = `<div class="card"><h2>Auswertung</h2>
        ${zeitAbgelaufen ? `<p class="fail">Zeit abgelaufen – automatisch abgegeben.</p>` : ""}
        <p><b>${richtig}/${items.length}</b> richtig = <b>${pct} %</b> → <span class="${bestanden ? "pass" : "fail"}">${bestanden ? "BESTANDEN" : "NICHT BESTANDEN"}</span> (Grenze ${opts.grenze} %)</p>
        ${poolN ? `<p>Davon <b>Prüfungspool</b> (unbekannte Fragen): <b>${poolR}/${poolN} = ${pctPool} %</b> <span class="muted small">– misst, ob du Gelerntes auf neue Fälle übertragen kannst. Ziel ≥ ${REIF_POOL} %.</span></p>` : ""}
        <table><tr><th>${opts.gruppeVon ? "Thema" : "Modul"}</th><th>Richtig</th><th>Quote</th></tr>${zeilen}</table>
        <h3 style="margin-top:16px">Fragen im Detail</h3><div class="review">${review}</div>
        <div class="row"><button class="primary" data-a="neu">Zurück</button></div></div>`;
      $("button[data-a=neu]", container).addEventListener("click", () => { container.innerHTML = ""; opts.onEnde && opts.onEnde(); });
    }

    render();
  }

  // ---------- Stufen-Logik ----------
  const aktiv = () => (STUFEN[state.aktiveStufe] ? state.aktiveStufe : "fundamentals");
  const fragenVon = (ids) => ids.map((id) => FRAGEN.find((q) => q.id === id)).filter(Boolean);
  function gruppen(key) { // Syllabus-Themen; beim Expert die Module
    const st = STUFEN[key];
    if (st && st.themen) return st.themen;
    return Object.entries(MODULE).map(([m, n]) => ({ id: m, name: n, fragen: FRAGEN.filter((q) => q.modul === m).map((q) => q.id) }));
  }
  const alleIds = (key) => [...new Set(gruppen(key).flatMap((t) => t.fragen))];
  const lernIds = (key) => alleIds(key).filter((id) => !POOL.has(id));
  const poolIds = (key) => alleIds(key).filter((id) => POOL.has(id));
  const gruppeVon = (key) => (id) => { const g = gruppen(key).find((t) => t.fragen.includes(id)); return g ? `${g.id} ${g.name}` : id; };
  function stufeStatus(key) {
    const ids = lernIds(key);
    const gem = ids.filter(istGemeistert).length;
    const sims = state.pruefungen.filter((p) => p.stufe === key);
    const letzte2 = sims.slice(-2);
    const simOk = letzte2.length === 2 && letzte2.every((p) => p.pct >= REIF_QUOTE && (p.pctPool == null || p.pctPool >= REIF_POOL))
      && tagStart(Date.parse(letzte2[0].datum)) !== tagStart(Date.parse(letzte2[1].datum));
    const vorausOk = STUFEN[key].voraussetzung.every((v) => stufeStatus(v).reif);
    const faellig = ids.filter((id) => !istNeu(id) && istFaellig(id)).length;
    const neu = ids.filter(istNeu).length;
    const naechste = ids.map((id) => stat(id)).filter((s) => s && s.fach > 0).map((s) => s.faellig).sort((a, b) => a - b)[0];
    const faecher = [0, 0, 0, 0, 0, 0]; ids.forEach((id) => { faecher[(stat(id) && stat(id).fach) || 0]++; });
    return { ids, gem, pct: quote(gem, ids.length) || 0, sims, simOk, vorausOk, faellig, neu, naechste, faecher,
      reif: gem === ids.length && ids.length > 0 && simOk && (key !== "expert" || vorausOk) };
  }
  // Simulation: kompletter Prüfungspool der Stufe + Lernfragen ausgewogen über die Themen
  function simAuswahl(key, n) {
    const pool = mischen(poolIds(key)).slice(0, Math.max(0, n));
    const gew = new Set(pool);
    const gruppenPools = gruppen(key).map((g) => mischen(g.fragen.filter((id) => !POOL.has(id))));
    while (gew.size < n && gruppenPools.some((p) => p.length)) {
      gruppenPools.forEach((p) => { while (p.length && gew.size < n) { const id = p.pop(); if (!gew.has(id)) { gew.add(id); break; } } });
    }
    return mischen(fragenVon([...gew]));
  }
  const simGroesse = (key) => Math.min(50, alleIds(key).length);
  // Lernrunde: fällige Wiederholungen zuerst (niedrige Fächer vorn), dann begrenzt neue Fragen
  function lernRunde(key) {
    const ids = lernIds(key);
    const wieder = mischen(ids.filter((id) => !istNeu(id) && istFaellig(id))).sort((a, b) => (stat(a).fach || 0) - (stat(b).fach || 0));
    const neu = mischen(ids.filter(istNeu));
    const runde = wieder.slice(0, SITZUNG_MAX);
    runde.push(...neu.slice(0, Math.min(SITZUNG_NEU, SITZUNG_MAX - runde.length)));
    return fragenVon(runde);
  }
  const stufeModule = (key) => [...new Set(fragenVon(alleIds(key)).map((q) => q.modul))].sort();

  // ---------- Stufenwahl ----------
  const sel = $("#aktive-stufe");
  sel.innerHTML = Object.entries(STUFEN).map(([k, s]) => `<option value="${k}">${esc(s.name)}</option>`).join("");
  sel.value = aktiv();
  sel.addEventListener("change", () => waehleStufe(sel.value));
  function waehleStufe(key) {
    state.aktiveStufe = key; speichern(); sel.value = key;
    document.querySelectorAll("[id$=-quiz]").forEach((q) => { q.innerHTML = ""; });
    document.querySelectorAll("[id$=-setup]").forEach((s) => { s.style.display = ""; });
    renderUebenSetup(); renderPruefungSetup();
    const offen = document.querySelector("nav button.active");
    zeige(offen ? offen.dataset.view : "start");
  }

  // ---------- Navigation ----------
  document.querySelectorAll("nav button").forEach((b) => b.addEventListener("click", () => zeige(b.dataset.view)));
  function zeige(view) {
    document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
    document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + view));
    document.querySelectorAll(".stufe-name").forEach((e) => { e.textContent = STUFEN[aktiv()].name; });
    if (view === "start") renderStart();
    if (view === "statistik") renderStatistik();
    if (view === "stufen") renderStufen();
    window.scrollTo(0, 0);
  }

  // ---------- Start = Dashboard der aktiven Stufe ----------
  function gruppenBalken(key) {
    return gruppen(key).map((t) => {
      const ids = t.fragen.filter((id) => !POOL.has(id));
      const g = ids.filter(istGemeistert).length;
      return `<div class="thema"><span>${t.id} ${esc(t.name)}</span><span class="muted small">${g}/${ids.length}</span><div class="bar"><span style="width:${quote(g, ids.length) || 0}%"></span></div></div>`;
    }).join("");
  }
  function renderStart() {
    const key = aktiv(), st = STUFEN[key], s = stufeStatus(key), n = simGroesse(key);
    const sims = s.sims.slice(-3).map((p) => `<span class="${p.pct >= REIF_QUOTE && (p.pctPool == null || p.pctPool >= REIF_POOL) ? "pass" : "fail"}">${p.pct} %${p.pctPool != null ? ` (Pool ${p.pctPool} %)` : ""}</span>`).join(" · ") || "–";
    const voraus = st.voraussetzung.length
      ? `<p class="small">Empfohlene Voraussetzung: ${st.voraussetzung.map((v) => `${esc(STUFEN[v].kurz)} ${stufeStatus(v).reif ? "✅" : "⏳"}`).join(", ")}</p>` : "";
    const module = stufeModule(key).map((m) => `<li><a href="../katalog/${MODUL_DATEI[m] || ""}">${m} ${esc(MODULE[m] || "")}</a></li>`).join("");
    const lernbar = s.faellig + Math.min(s.neu, SITZUNG_NEU);
    const faecher = s.faecher.map((z, i) => `<div class="fach"><span class="muted small">${i === 0 ? "neu/falsch" : "Fach " + i}</span><b>${z}</b><span class="muted small">${i === 0 ? "sofort" : INTERVALL[i] + " T."}</span></div>`).join("");
    $("#start-stufe").innerHTML = `<div class="card stufe">
      <div class="stufe-kopf"><h2>${esc(st.name)}</h2><span class="badge ${s.reif ? "ok" : ""}">${s.reif ? "PRÜFUNGSREIF" : s.pct + " % gemeistert"}</span></div>
      <p class="muted small">${esc(st.hinweis)}</p>${voraus}
      <div class="bar big"><span style="width:${s.pct}%"></span></div>
      <p class="small">Gemeistert: <b>${s.gem}/${s.ids.length}</b> Lernfragen (an zwei verschiedenen Tagen richtig) · Prüfungspool: ${poolIds(key).length} Fragen nur in Simulationen</p>
      <p class="small">Heute: <b>${s.faellig}</b> Wiederholungen fällig · <b>${s.neu}</b> neue Fragen offen${!lernbar && s.naechste ? ` · nächste Wiederholung ${datumKurz(s.naechste)}` : ""}</p>
      <div class="row">
        <button class="primary" id="btn-lernen" ${lernbar ? "" : "disabled"}>Täglich lernen (${Math.min(SITZUNG_MAX, lernbar)})</button>
        <button id="btn-sim">Simulation (${n} Fragen, ${Math.round(n * 1.5)} min)</button>
      </div>
      <p class="small">Letzte Simulationen: ${sims}</p>
      <details class="small"><summary>Wann ist eine Stufe prüfungsreif?</summary>
        <ul><li>Alle Lernfragen gemeistert: jede an <b>zwei verschiedenen Tagen</b> richtig (Wiederholung mit zeitlichem Abstand).</li>
        <li>Die letzten zwei Simulationen an <b>verschiedenen Tagen</b> mit ≥ ${REIF_QUOTE} % gesamt <b>und</b> ≥ ${REIF_POOL} % im Prüfungspool.</li>
        <li>Prüfungspool-Fragen siehst du nur in Simulationen. Sie testen, ob du Gelerntes auf neue Fälle übertragen kannst. Nach der Auswertung kennst du sie – darum zählen Simulationen an verschiedenen Tagen.</li></ul></details>
      </div>
      <div class="card"><h3>Lernkartei</h3><div class="faecher">${faecher}</div>
        <p class="muted small">Richtig, wenn fällig → ein Fach weiter (längerer Abstand). Falsch → zurück auf „neu/falsch“.</p></div>
      <div class="card"><h3>${st.themen ? "Themen" : "Module"} (${gruppen(key).length})</h3><div class="themen">${gruppenBalken(key)}</div></div>
      <div class="card"><h3>Lernmaterial für diese Stufe</h3><ul class="small">${module}</ul>
        <p class="small"><a href="../katalog/14-musterloesung-talsperre.md">Musterlösung Übungsfall „Talsperre Süd“</a></p></div>`;
    $("#btn-lernen").addEventListener("click", () => lernen(key));
    $("#btn-sim").addEventListener("click", () => simulation(key, n, Math.round(n * 1.5), REIF_QUOTE, "#start"));
  }
  function lernen(key) {
    const runde = lernRunde(key);
    if (!runde.length) return;
    $("#start-setup").style.display = "none";
    quiz($("#start-quiz"), runde, {
      mode: "sofort", lernen: true,
      kopf: () => { const s = stufeStatus(key); return `Gemeistert ${s.gem}/${s.ids.length}`; },
      fertigText: () => { const s = stufeStatus(key); return `<p>${esc(STUFEN[key].name)}: <b>${s.gem}/${s.ids.length}</b> gemeistert.</p>
        <p class="muted">${s.faellig + s.neu ? "Es gibt noch fällige oder neue Fragen – eine weitere Runde ist möglich." : "Für heute ist alles erledigt. Richtig beantwortete Fragen kommen nach dem Wiederholungsabstand wieder."}</p>`; },
      onEnde: () => { $("#start-setup").style.display = ""; renderStart(); },
    });
  }
  function simulation(key, n, minuten, grenze, ort) {
    $(ort + "-setup").style.display = "none";
    quiz($(ort + "-quiz"), simAuswahl(key, n), { mode: "pruefung", minuten, grenze, stufe: key, gruppeVon: gruppeVon(key),
      onEnde: () => { $(ort + "-setup").style.display = ""; if (ort === "#start") renderStart(); } });
  }

  $("#btn-export").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `62443-fortschritt-${new Date().toISOString().slice(0, 10)}.json`;
    a.click(); URL.revokeObjectURL(a.href);
  });
  $("#inp-import").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    file.text().then((t) => {
      try {
        const s = JSON.parse(t);
        if (!s.stats) throw new Error("Format");
        localStorage.setItem(KEY, JSON.stringify(s)); state = laden(); speichern(); waehleStufe(aktiv()); alert("Import erfolgreich.");
      } catch (err) { alert("Datei ist kein gültiger Fortschritts-Export."); }
    });
    e.target.value = "";
  });
  $("#btn-reset").addEventListener("click", () => {
    if (confirm("Gesamten Fortschritt wirklich löschen?")) { const k = aktiv(); state = leer(); state.aktiveStufe = k; speichern(); waehleStufe(k); }
  });

  // ---------- Alle Stufen ----------
  function renderStufen() {
    $("#stufen-liste").innerHTML = Object.entries(STUFEN).map(([key, st]) => {
      const s = stufeStatus(key), ist = key === aktiv();
      return `<div class="card stufe ${ist ? "aktiv" : ""}">
        <div class="stufe-kopf"><h3>${esc(st.name)}</h3><span class="badge ${s.reif ? "ok" : ""}">${s.reif ? "PRÜFUNGSREIF" : s.pct + " % gemeistert"}</span></div>
        <p class="muted small">${esc(st.hinweis)}</p>
        <div class="bar big"><span style="width:${s.pct}%"></span></div>
        <p class="small">${s.gem}/${s.ids.length} Lernfragen gemeistert · ${poolIds(key).length} im Prüfungspool · ${gruppen(key).length} ${st.themen ? "Themen" : "Module"}</p>
        <div class="row">${ist ? `<span class="badge">Aktive Stufe</span>` : `<button class="primary" data-wahl="${key}">Diese Stufe lernen</button>`}</div></div>`;
    }).join("");
    document.querySelectorAll("[data-wahl]").forEach((b) => b.addEventListener("click", () => { waehleStufe(b.dataset.wahl); zeige("start"); }));
  }

  // ---------- Üben (freies Üben, ohne Prüfungspool) ----------
  function renderUebenSetup() {
    $("#ueben-themen").innerHTML = gruppen(aktiv()).map((t) =>
      `<label class="chip" title="${esc(t.name)}"><input type="checkbox" value="${t.id}" checked>${t.id} ${esc(t.name)}</label>`).join("");
  }
  $("#btn-ueben-start").addEventListener("click", () => {
    const gew = [...document.querySelectorAll("#ueben-themen input:checked")].map((x) => x.value);
    const ids = new Set(gruppen(aktiv()).filter((t) => gew.includes(t.id)).flatMap((t) => t.fragen).filter((id) => !POOL.has(id)));
    const level = +$("#ueben-level").value;
    let pool = fragenVon([...ids]).filter((q) => !level || q.level === level);
    if ($("#ueben-falsch").checked) pool = pool.filter((q) => stat(q.id) && stat(q.id).zuletzt === false);
    if (!pool.length) { alert("Keine Fragen für diese Auswahl."); return; }
    $("#ueben-setup").style.display = "none";
    quiz($("#ueben-quiz"), mischen(pool), { mode: "sofort", onEnde: () => { $("#ueben-setup").style.display = ""; } });
  });

  // ---------- Prüfung ----------
  function renderPruefungSetup() {
    const key = aktiv(), n = simGroesse(key);
    $("#pr-anzahl").value = n; $("#pr-anzahl").max = alleIds(key).length;
    $("#pr-minuten").value = Math.round(n * 1.5);
    $("#pr-info").textContent = `Enthält alle ${poolIds(key).length} Prüfungspool-Fragen dieser Stufe (unbekannte Fragen), aufgefüllt mit Lernfragen aus allen ${gruppen(key).length} ${STUFEN[key].themen ? "Themen" : "Modulen"}.`;
  }
  $("#btn-pruefung-start").addEventListener("click", () => {
    const n = Math.max(5, +$("#pr-anzahl").value || 50);
    const minuten = Math.max(1, +$("#pr-minuten").value || 75);
    const grenze = Math.min(100, Math.max(1, +$("#pr-grenze").value || 70));
    simulation(aktiv(), n, minuten, grenze, "#pruefung");
  });

  // ---------- Statistik ----------
  function renderStatistik() {
    const key = aktiv();
    const zeilen = gruppen(key).map((t) => {
      const ids = t.fragen.filter((id) => !POOL.has(id));
      let r = 0, f = 0, gesehen = 0;
      ids.forEach((id) => { const s = stat(id); if (s) { r += s.r; f += s.f; gesehen++; } });
      const qq = quote(r, r + f);
      return `<tr><td>${t.id} ${esc(t.name)}</td><td>${ids.filter(istGemeistert).length}/${ids.length}</td><td>${gesehen}</td><td>${qq ?? "–"}${qq != null ? " %" : ""}</td></tr>`;
    }).join("");
    const ids = new Set(lernIds(key));
    const schwach = FRAGEN.filter((q) => ids.has(q.id)).map((q) => ({ q, s: stat(q.id) }))
      .filter((x) => x.s && x.s.f > 0).sort((a, b) => (b.s.f - b.s.r) - (a.s.f - a.s.r)).slice(0, 10)
      .map((x) => `<li>${esc(x.q.frage)} <span class="muted small">(${x.s.r}× richtig, ${x.s.f}× falsch)</span></li>`).join("");
    const pr = state.pruefungen.filter((p) => p.stufe === key).slice(-10).reverse().map((p) =>
      `<tr><td>${new Date(p.datum).toLocaleString("de-DE")}</td><td>${p.richtig}/${p.anzahl}</td><td class="${p.pct >= REIF_QUOTE ? "pass" : "fail"}">${p.pct} %</td><td class="${p.pctPool == null || p.pctPool >= REIF_POOL ? "pass" : "fail"}">${p.pctPool ?? "–"}${p.pctPool != null ? " %" : ""}</td></tr>`).join("");
    $("#stat-content").innerHTML = `<table><tr><th>${STUFEN[key].themen ? "Thema" : "Modul"}</th><th>Gemeistert</th><th>Gesehen</th><th>Quote</th></tr>${zeilen}</table>
      <h3 style="margin-top:16px">Schwachstellen (Top 10)</h3>${schwach ? `<ol>${schwach}</ol>` : `<p class="muted">Noch keine Fehler in dieser Stufe.</p>`}
      <h3>Letzte Simulationen dieser Stufe</h3>${pr ? `<table><tr><th>Datum</th><th>Richtig</th><th>Gesamt</th><th>Pool</th></tr>${pr}</table>` : `<p class="muted">Noch keine Simulation.</p>`}`;
  }

  // Testschnittstelle (nur lesend/zeitgesteuert, für automatisierte Tests)
  window.__trainer = { werten, istGemeistert, stufeStatus, lernIds, poolIds, get state() { return state; } };

  renderUebenSetup();
  renderPruefungSetup();
  zeige("start");
})();
