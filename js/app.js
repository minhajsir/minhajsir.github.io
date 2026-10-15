/* Builds every tab from the content in js/data.js. You normally do not need to edit this file. */
(function () {
  "use strict";

  var TABS = [
    { id: "minhaj", label: "Minhaj" },
    { id: "research", label: "Research" },
    { id: "awards", label: "Awards" },
    { id: "teaching", label: "Teaching" },
    { id: "projects", label: "Projects" },
    { id: "gallery", label: "Gallery" }
  ];

  /* ---------- helpers ---------- */
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var link = function (href, text, cls) {
    return href
      ? '<a ' + (cls ? 'class="' + cls + '" ' : "") + 'href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(text) + "</a>"
      : '<span class="t">' + esc(text) + "</span>";
  };
  var I = function (n, c) { return VEC.icon(n, c); };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var NOWD = new Date(), NOWY = NOWD.getFullYear() + NOWD.getMonth() / 12;

  function head(title, lead, art) {
    return '<header class="phead wrap"><div><h2>' + esc(title) + "</h2><p>" + esc(lead) + '</p></div><div class="phead-art">' + art + "</div></header>";
  }
  function empty(title, text) { return '<div class="empty"><strong>' + esc(title) + "</strong>" + esc(text) + "</div>"; }
  function rowsHtml(items) { return '<ul class="rows">' + items.join("") + "</ul>"; }
  function row(main, sub, meta) {
    return '<li><div class="main">' + main + (sub ? '<span class="sub">' + esc(sub) + "</span>" : "") + "</div>" +
      (meta ? '<div class="meta">' + esc(meta) + "</div>" : "") + "</li>";
  }
  function split(title, body, sub) {
    return '<div class="split"><h3>' + esc(title) + (sub ? "<small>" + esc(sub) + "</small>" : "") + "</h3><div>" + body + "</div></div>";
  }
  function hbar(label, sub, value, max, delay) {
    return '<div class="hbar"><span class="hl">' + esc(label) + (sub ? "<small>" + esc(sub) + "</small>" : "") + '</span><div class="track"><div class="fill" style="--w:' +
      Math.round(value / max * 100) + "%;--d:" + (delay || 0) + 's"></div></div><span class="hv">' + value + "</span></div>";
  }
  var ARROW = '<svg viewBox="0 0 38 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12h32M26 4l8 8-8 8"/></svg>';

  /* YouTube: thumbnail + play button; click swaps in the real player */
  function ytId(v) { var m = String(v || "").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : ""; }
  function lite(id, title) {
    return '<div class="liteBox"><button type="button" class="lite" data-yt="' + id + '" data-title="' + esc(title) + '" aria-label="Play video: ' + esc(title) + '">' +
      '<img src="https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg" alt="" loading="lazy" onerror="this.onerror=null;this.src=\'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg\'">' +
      '<span class="play" aria-hidden="true"></span></button>' +
      '<a class="yt-open" href="https://www.youtube.com/watch?v=' + id + '" target="_blank" rel="noopener">Open on YouTube</a></div>';
  }
  /* buttons that link to my profiles on other sites (names come from SOCIALS) */
  function profs(names) {
    var out = names.map(function (n) {
      var s = SOCIALS.filter(function (x) { return x.name === n && x.url; })[0];
      return s ? '<a class="btn ghost" href="' + esc(s.url) + '" target="_blank" rel="noopener">' + I(s.name) + esc(s.label) + "</a>" : "";
    }).join("");
    return out ? '<div class="wrap profs">' + out + "</div>" : "";
  }

  /* a tree whose branches open and close */
  function tree(rootLabel, branches, openFirst) {
    return '<div class="tree"><div class="t-root">' + esc(rootLabel) + '</div><ul class="t-branches">' +
      branches.map(function (b, i) {
        var open = openFirst ? i === 0 : true;
        return '<li class="t-branch"><button type="button" class="t-node" aria-expanded="' + open + '">' + esc(b.label) +
          " <small>" + b.leaves.length + "</small>" + I("plus") + '</button><div class="t-leaves"' + (open ? "" : " hidden") + ">" + b.leaves.join("") + "</div></li>";
      }).join("") + "</ul></div>";
  }
  function wireTrees(root) {
    $$(".t-node", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var open = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", String(!open));
        b.nextElementSibling.hidden = open;
      });
    });
  }

  /* ================= MINHAJ ================= */
  var GANTT = [];

  function hero() {
    return '<section class="wrap hero">' +
      '<div class="hero-art a">' + VEC.branch({ len: 360, bend: -50, n: 10, leaf: 70, seed: 5 }) + "</div>" +
      '<div class="hero-art b">' + VEC.branch({ len: 380, bend: -70, n: 11, leaf: 70, seed: 21 }) + "</div>" +
      '<div class="hero-copy"><h1>' + esc(SITE.headline) + "</h1>" +
        '<p class="who">' + esc(SITE.name) + "</p>" +
        '<p class="role">' + esc(SITE.role) + "</p>" +
        '<p class="where">' + esc(SITE.org) + "</p>" +
        '<p class="lede">' + esc(SITE.lede) + "</p>" +
        '<div class="actions"><a class="btn" href="#research">' + I("flask") + 'Explore my research</a><a class="btn ghost" href="#awards">' + I("laurel") + "See the awards</a></div>" +
      "</div>" +
      '<div class="portrait"><div class="p-disc"></div><div class="p-dots"></div>' +
        '<div class="p-arch"><img src="images/minhaj.jpg" width="900" height="1350" alt="Portrait of ' + esc(SITE.name) + '"></div>' +
        '<div class="p-leaf a">' + VEC.branch({ len: 190, bend: -30, n: 7, leaf: 48, seed: 9 }) + "</div>" +
        '<div class="p-leaf b">' + VEC.branch({ len: 170, bend: -30, n: 6, leaf: 46, seed: 14 }) + "</div>" +
      "</div></section>";
  }

  function segments() {
    var pubCount = JOURNALS.length + CHAPTERS.length;
    var featured = AWARDS.filter(function (a) { return a.featured; });
    var roles = function (list) {
      return '<div class="mini">' + list.map(function (r) {
        return '<article><div class="when">' + esc(r.when) + "</div><div><h6>" + esc(r.role) + '</h6><p class="org">' + esc(r.org) + "</p><ul>" +
          r.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div></article>";
      }).join("") + "</div>";
    };
    var defs = [
      { icon: "graduate", title: "Teaching and academic leadership",
        teaser: "Assistant Professor at Mahindra University, after UPES, Jagran Lakecity University and Virtual Voyage. I lead programs and run the AR/VR & Unreal Engine Laboratory.",
        body: roles(ACADEMIC_ROLES) + '<a class="go" href="#teaching">See courses, textbooks and tutorials</a>' },
      { icon: "camera", title: "Film and industry production",
        teaser: "Twenty years in studios as technical director, production head and consultant: 250 short films, six web series and teams of up to twenty animators.",
        body: roles(INDUSTRY_ROLES) + '<a class="go" href="#projects">See projects</a>' },
      { icon: "flask", title: "Research and publications",
        teaser: pubCount + " journal papers and book chapters (Scopus-indexed chapters on AI, AR/VR and digital twins), plus conference presentations.",
        body: "<h5>Journal papers</h5><ul class=\"plain\">" + JOURNALS.map(function (j) { return "<li>" + esc(j.title) + (j.year ? " (" + esc(j.year) + ")" : "") + "</li>"; }).join("") + "</ul>" +
          "<h5>Book chapters</h5><ul class=\"plain\">" + CHAPTERS.map(function (j) { return "<li>" + esc(j.title) + "</li>"; }).join("") + "</ul>" +
          '<a class="go" href="#research">Open the research tree and links</a>' },
      { icon: "laurel", title: "Awards and festivals",
        teaser: "Best Short Film wins and official selections from 2024 to 2026, plus teaching honours and jury work.",
        body: "<ul class=\"plain\">" + featured.map(function (a) { return "<li><strong>" + esc(a.year) + ":</strong> " + esc(a.title) + ", " + esc(a.org) + "</li>"; }).join("") + "</ul>" +
          '<a class="go" href="#awards">See every award on the timeline chart</a>' },
      { icon: "book", title: "Education and credentials",
        teaser: "Ph.D. in Computer Science (2023), with certifications from IIT Roorkee, DeepLearning.AI, Adobe and LinkedIn Learning.",
        body: "<h5>Education</h5><ul class=\"plain\">" + EDUCATION.map(function (e) { return "<li>" + esc(e.title) + ", " + esc(e.org) + " (" + esc(e.when) + ")</li>"; }).join("") + "</ul>" +
          "<h5>Certifications</h5><ul class=\"plain\">" + CERTIFICATIONS.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>" },
      { icon: "tools", title: "Craft and tools",
        teaser: "From Maya, Blender and Unreal Engine 5 to Nuke, After Effects, Figma and generative AI tools.",
        body: '<dl class="kv">' + TOOLS.map(function (t) { return "<dt>" + esc(t.cat) + "</dt><dd>" + esc(t.list) + "</dd>"; }).join("") + "</dl>" },
      { icon: "people", title: "Service and community",
        teaser: "Examiner, workshop expert, festival jury member and regular writer on animation and gaming.",
        body: '<ul class="plain">' + SERVICE.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>" +
          "<h5>Writing</h5><p>Regular blogs on animation and gaming for Daily Hunt, Entrepreneur Asia, Medium.com and EdgeMet Aversity.</p>" }
    ];
    return '<div class="segs">' + defs.map(function (d, i) {
      return '<article class="seg" id="seg' + i + '"><div class="seg-head"><div class="seg-ico">' + I(d.icon) + "</div><div><h4>" + esc(d.title) + "</h4><p>" + esc(d.teaser) + "</p></div>" +
        '<button type="button" class="more" aria-expanded="false" aria-controls="segb' + i + '"><span>More</span>' + I("plus") + "</button></div>" +
        '<div class="seg-body" id="segb' + i + '"><div><div class="seg-inner">' + d.body + "</div></div></div></article>";
    }).join("") + "</div>";
  }

  function ganttSection() {
    var all = ACADEMIC_ROLES.map(function (r) { return Object.assign({ kind: "academic" }, r); })
      .concat(INDUSTRY_ROLES.map(function (r) { return Object.assign({ kind: "industry" }, r); }));
    all.sort(function (a, b) { return b.from - a.from; });
    GANTT = all;
    var A = 2003, B = 2027, span = B - A, ticks = [2005, 2010, 2015, 2020, 2025];
    var axis = ticks.map(function (t) { return '<span style="left:' + ((t - A) / span * 100) + '%">' + t + "</span>"; }).join("");
    var lines = ticks.map(function (t) { return '<i style="left:' + ((t - A) / span * 100) + '%"></i>'; }).join("");
    var rows = all.map(function (r, i) {
      var to = r.to == null ? NOWY : r.to;
      return '<button type="button" class="grow" data-i="' + i + '" aria-pressed="' + (i === 0) + '"><span class="glabel">' + esc(r.role) + "<small>" + esc(r.org) + '</small></span>' +
        '<span class="gtrack"><span class="gbar ' + r.kind + '" style="left:' + ((r.from - A) / span * 100) + "%;width:" + ((to - r.from) / span * 100) + "%;--d:" + (i * .07) + 's"></span></span></button>';
    }).join("");
    return '<section class="wrap block"><h3>Twenty years on one timeline</h3><p class="sub">Select any bar to read about that role.</p>' +
      '<div class="leafcard"><div class="legend"><span><i style="--c:var(--leaf-4)"></i>Academic roles</span><span><i style="--c:var(--gold)"></i>Industry roles</span></div>' +
      '<div class="gwrap"><div class="gaxis"><span class="lab"></span><div class="gt">' + axis + '</div></div><div class="gticks">' + lines + "</div>" + rows + "</div>" +
      '<div class="gdetail" id="gdetail" aria-live="polite"></div></div></section>';
  }
  function showRole(i) {
    var r = GANTT[i];
    $("#gdetail").innerHTML = "<h4>" + esc(r.role) + "</h4><p class=\"when\">" + esc(r.org) + ", " + esc(r.when) + "</p><ul>" +
      r.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
    $$(".grow").forEach(function (b) { b.setAttribute("aria-pressed", String(+b.getAttribute("data-i") === i)); });
  }

  function flowSection() {
    var nodes = FLOW.map(function (f, i) {
      return '<a class="fnode" href="#' + f.tab + '"><div class="fi">' + I(f.icon) + "</div><h4>" + esc(f.title) + "</h4><p>" + esc(f.text.replace("{courses}", MOOCS.length)) + '</p><span class="go">Explore</span></a>' +
        (i < FLOW.length - 1 ? '<div class="farrow">' + ARROW + "</div>" : "");
    }).join("");
    var loop = '<svg viewBox="0 0 1000 44" preserveAspectRatio="none" fill="none" stroke="currentColor" stroke-width="2.4" stroke-dasharray="3 8" stroke-linecap="round" aria-hidden="true"><path d="M940 0C940 40 880 40 820 40H180C120 40 60 40 60 0"/><path d="M52 12L60 0l8 12" stroke-dasharray="none"/></svg>';
    return '<section class="wrap block"><h3>How the work feeds itself</h3><p class="sub">Each part of my practice sends something to the next. Select a step to dive in.</p>' +
      '<div class="flow">' + nodes + "</div>" +
      '<div class="floop">' + loop + "Finished films return to the classroom as case studies and starting points.</div></section>";
  }

  function minhajPanel() {
    return hero() +
      '<section class="wrap short"><div><h3>The short version</h3>' + SITE.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
        '<aside class="leafcard now"><h4><span class="pulse"></span>Right now</h4><ul>' + NOW_DOING.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul></aside></section>" +
      '<section class="wrap" aria-labelledby="seg-h"><h3 id="seg-h" class="sr">The details, one segment at a time</h3>' + segments() + "</section>" +
      '<section class="wrap elsewhere"><h3>Find my work elsewhere</h3><ul class="chips">' + SOCIALS.filter(function (x) { return x.url; }).map(function (x) {
        return '<li><a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + I(x.name) + esc(x.label) + "</a></li>";
      }).join("") + "</ul></section>" +
      '<div class="wash-wrap" style="margin-top:3.5rem">' + VEC.wave("#f1f7e8", false, "wavebar") + '<div class="wash">' + ganttSection() + flowSection() + "</div>" + VEC.wave("#f1f7e8", true, "wavebar") + "</div>";
  }

  /* ================= RESEARCH ================= */
  function researchPanel() {
    var POOL = JOURNALS.map(function (x) { return Object.assign({ kind: "Journal paper" }, x); })
      .concat(CHAPTERS.map(function (x) { return Object.assign({ kind: "Book chapter" }, x); }))
      .concat(CONFERENCES.map(function (x) { return Object.assign({ kind: "Conference" }, x); }));
    var find = function (sub) { return POOL.filter(function (p) { return p.title.indexOf(sub) > -1; })[0]; };
    var branches = RESEARCH_THEMES.map(function (t) {
      var leaves = t.find.map(find).filter(Boolean).map(function (p) {
        var meta = [p.kind, p.year].filter(Boolean).join(", ");
        var titleHtml = p.link ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>" : esc(p.title);
        return '<div class="t-leaf long">' + titleHtml + "<small>" + esc(meta) + (p.venue && p.kind !== "Conference" && p.venue.indexOf("Book chapter") !== 0 ? ", " + esc(p.venue) : "") + "</small></div>";
      });
      return { label: t.label, leaves: leaves };
    });

    // bars by type
    var typeBars = hbar("Journal papers", "", JOURNALS.length, 6, 0) +
      hbar("Book chapters", "2 in production", CHAPTERS.length, 6, .1) +
      hbar("Conference talks", "", CONFERENCES.length, 6, .2);

    // columns by year
    var yrs = {}, put = function (list, k) {
      list.forEach(function (x) { if (x.year) { yrs[x.year] = yrs[x.year] || { j: 0, b: 0, c: 0 }; yrs[x.year][k]++; } });
    };
    put(JOURNALS, "j"); put(CHAPTERS, "b"); put(CONFERENCES, "c");
    var y0 = Math.min.apply(null, Object.keys(yrs)), y1 = Math.max.apply(null, Object.keys(yrs)), cols = "", labels = "", max = 1;
    for (var y = y0; y <= y1; y++) { var e = yrs[y] || { j: 0, b: 0, c: 0 }; max = Math.max(max, e.j + e.b + e.c); }
    for (var yy = y0; yy <= y1; yy++) {
      var d = yrs[yy] || { j: 0, b: 0, c: 0 }, n = d.j + d.b + d.c, p = n / max * 82;
      var segs = [["j", d.j], ["b", d.b], ["c", d.c]].filter(function (s) { return s[1] > 0; }).map(function (s) {
        return '<div class="seg2 c-' + s[0] + '" style="--c:' + s[1] + '"></div>';
      }).join("");
      cols += '<div class="ccol" title="' + yy + ': ' + n + '"><div class="zone">' + (n ? '<div class="stack" style="--p:' + p + "%;--d:" + ((yy - y0) * .08) + 's">' + segs + '</div><span class="num" style="--p:' + p + '%">' + n + "</span>" : "") + "</div></div>";
      labels += "<span>" + yy + "</span>";
    }

    return head("Curiosity, cultivated.", "Papers, chapters and talks on generative AI, immersive media and 3D learning.",
        VEC.branch({ len: 230, bend: -60, n: 8, leaf: 56, seed: 33 }, "art") + I("flask")) +
      profs(["scholar", "igi"]) +
      '<section class="wrap block"><div class="two">' +
        '<div class="leafcard"><h3 class="chart-title">Output by kind</h3><p class="chart-note">Everything listed on this page.</p>' + typeBars + "</div>" +
        '<div class="leafcard"><h3 class="chart-title">Output by year</h3><p class="chart-note">Items with a year; undated chapters are not counted.</p>' +
          '<div class="cchart">' + cols + '</div><div class="cl">' + labels + '</div>' +
          '<div class="clegend"><span><i class="c-j" style="background:var(--c1)"></i>Journal</span><span><i class="c-b" style="background:var(--c1)"></i>Chapter</span><span><i class="c-c" style="background:var(--c1)"></i>Conference</span></div></div>' +
      "</div></section>" +
      '<section class="wrap block"><h3>Research tree</h3><p class="sub">Three themes grow from one question: how should people learn and create with new media? Open a branch to see its papers.</p>' +
        '<div id="rtree">' + tree("Research", branches, true) + "</div></section>" +
      '<section class="wrap">' +
        split("Journal papers", rowsHtml(JOURNALS.map(function (x) { return row(link(x.link, x.title), x.venue, x.year); }))) +
        split("Book chapters", rowsHtml(CHAPTERS.map(function (x) { return row(link(x.link, x.title), x.venue, x.year); })), "Scopus indexed") +
        split("Conference presentations", rowsHtml(CONFERENCES.map(function (x) { return row(link(x.link, x.title), x.venue, x.year); }))) +
        split("Research notes", RESEARCH_NOTES.length
          ? rowsHtml(RESEARCH_NOTES.map(function (n) { return row(link(n.link, n.title), n.note); }))
          : empty("Research notes coming soon", "Short write-ups and working notes will be posted here.")) +
      "</section>";
  }

  /* ================= AWARDS ================= */
  var TYPE_LABEL = { award: "Awards", selection: "Selections", academic: "Teaching and jury" };
  var AW = { type: "all", year: null };

  function awardsPanel() {
    var years = [];
    AWARDS.forEach(function (a) { var y = a.year || "Earlier"; if (years.indexOf(y) < 0) years.push(y); });
    years.sort(function (a, b) { if (a === "Earlier") return 1; if (b === "Earlier") return -1; return a - b; });
    var counts = years.map(function (y) {
      var o = { y: y, award: 0, selection: 0, academic: 0 };
      AWARDS.forEach(function (a) { if ((a.year || "Earlier") === y) o[a.type]++; });
      return o;
    });
    var max = Math.max.apply(null, counts.map(function (c) { return c.award + c.selection + c.academic; }));
    var cols = counts.map(function (c, i) {
      var n = c.award + c.selection + c.academic, p = n / max * 82;
      var segs = ["award", "selection", "academic"].filter(function (t) { return c[t]; }).map(function (t) {
        return '<div class="seg2 c-' + t + '" style="--c:' + c[t] + '"></div>';
      }).join("");
      return '<button type="button" class="cbtn" data-year="' + esc(c.y) + '" aria-pressed="false" aria-label="' + esc(c.y) + ": " + n + ' entries"><div class="ccol"><div class="zone"><div class="stack" style="--p:' + p + "%;--d:" + (i * .07) + 's">' + segs + '</div><span class="num" style="--p:' + p + '%">' + n + "</span></div></div></button>";
    }).join("");
    var labels = counts.map(function (c) { return "<span>" + esc(c.y) + "</span>"; }).join("");

    var films = FILMS.map(function (f, i) {
      var yid = ytId(f.link);
      if (yid) {
        return '<article class="film">' + lite(yid, f.title) + "<h4>" + esc(f.title) + (f.year || f.kind ? "<span>" + esc([f.kind, f.year].filter(Boolean).join(", ")) + "</span>" : "") + "</h4>" +
          (f.note ? "<p>" + esc(f.note) + "</p>" : "") + "</article>";
      }
      var art = (f.poster ? '<img class="poster" src="' + esc(f.poster) + '" alt="Poster for ' + esc(f.title) + '" loading="lazy">' : VEC.branch({ len: 120, bend: -30, n: 5, leaf: 34, seed: 40 + i * 7 }, "sprig") + "<b>" + esc(f.title) + "</b>");
      return '<article class="film"><div class="card-art" style="--h:' + (88 + ((i * 23) % 50)) + '">' + art + "</div>" +
        "<h4>" + esc(f.title) + (f.year || f.kind ? "<span>" + esc([f.kind, f.year].filter(Boolean).join(", ")) + "</span>" : "") + "</h4>" +
        (f.note ? "<p>" + esc(f.note) + "</p>" : "") +
        (f.link ? '<a class="watch" href="' + esc(f.link) + '" target="_blank" rel="noopener">Watch the film</a>' : "") + "</article>";
    }).join("");

    var btn = function (key, label) {
      return '<button type="button" data-filter="' + key + '" aria-pressed="' + (key === "all") + '">' + (key !== "all" ? '<span class="dot ' + key + '"></span>' : "") + esc(label) + "</button>";
    };
    return head("Frames that found their audience.", "Festival wins, selections and teaching honours from 2006 to 2026.",
        VEC.laurel({ r: 62, n: 9, leaf: 30, seed: 3 }, "art") + I("laurel")) +
      profs(["imdb", "instagram"]) +
      '<section class="wrap block"><div class="leafcard"><h3 class="chart-title">Recognition by year</h3>' +
        '<p class="chart-note">Each bar counts the entries listed for that year. Select a bar to filter the list below.</p>' +
        '<div class="cchart" id="awchart">' + cols + '</div><div class="cl">' + labels + "</div>" +
        '<div class="clegend"><span><i class="c-award" style="background:var(--c1)"></i>Awards</span><span><i class="c-selection" style="background:var(--c1)"></i>Selections</span><span><i class="c-academic" style="background:var(--c1)"></i>Teaching and jury</span></div></div></section>' +
      '<section class="wrap block"><h3>The films</h3><p class="sub">Select a thumbnail to play the film right here.</p><div class="films">' + films + "</div></section>" +
      '<section class="wrap block"><h3>Every award and selection</h3><p class="sub" id="awsum"></p>' +
        '<div class="filters" role="group" aria-label="Filter recognition">' + btn("all", "All") + btn("award", "Awards") + btn("selection", "Selections") + btn("academic", "Teaching and jury") + "</div>" +
        '<div id="awards-list"></div></section>';
  }
  function renderAwards() {
    var list = AWARDS.filter(function (a) {
      return (AW.type === "all" || a.type === AW.type) && (!AW.year || (a.year || "Earlier") === AW.year);
    });
    var ys = [];
    list.forEach(function (a) { var y = a.year || "Earlier"; if (ys.indexOf(y) < 0) ys.push(y); });
    ys.sort(function (a, b) { if (a === "Earlier") return 1; if (b === "Earlier") return -1; return b - a; });
    $("#awards-list").innerHTML = ys.map(function (y) {
      var items = list.filter(function (a) { return (a.year || "Earlier") === y; }).map(function (a) {
        return '<div class="entry"><span class="dot ' + a.type + '" title="' + esc(TYPE_LABEL[a.type]) + '"></span><div><h4>' + esc(a.title) + "</h4>" +
          ((a.org || a.film) ? "<p>" + esc(a.org) + (a.org && a.film ? " &middot; " : "") + (a.film ? '<span class="film">' + esc(a.film) + "</span>" : "") + "</p>" : "") + "</div></div>";
      }).join("");
      return '<section class="yr"><h3>' + esc(y) + "</h3><div>" + items + "</div></section>";
    }).join("") || empty("Nothing here", "No entries match these filters.");
    $("#awsum").textContent = list.length + " of " + AWARDS.length + " entries shown" + (AW.year ? " for " + AW.year : "") + ".";
    $("#awchart").parentNode.classList.toggle("dim", !!AW.year);
    $$("#awchart .cbtn").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-year") === AW.year)); });
    $$("#p-awards .filters button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === AW.type)); });
  }

  /* ================= TEACHING ================= */
  function slideGroups() {
    var all = (typeof SLIDES !== "undefined" ? SLIDES : []).concat(typeof SLIDES_AUTO !== "undefined" ? SLIDES_AUTO : []), map = {}, out = [];
    all.forEach(function (g) {
      if (!map[g.course]) { map[g.course] = { course: g.course, decks: [] }; out.push(map[g.course]); }
      map[g.course].decks = map[g.course].decks.concat(g.decks || []);
    });
    return out.filter(function (g) { return g.decks.length; });
  }
  function driveId(l) { var m = String(l || "").match(/drive\.google\.com\/file\/d\/([\w-]+)/); return m ? m[1] : ""; }
  function fileType(d) {
    if (d.type) return d.type;
    var u = String(d.link || "").toLowerCase();
    if (driveId(u)) return "PDF";
    if (u.indexOf("docs.google.com/presentation") > -1) return "Slides";
    var ext = u.split("?")[0].split("#")[0].split(".").pop();
    return ext === "pptx" || ext === "ppt" ? "PPTX" : ext === "pdf" ? "PDF" : ext === "key" ? "Keynote" : "Link";
  }
  function previewUrl(d) {
    var id = driveId(d.link), t = fileType(d);
    if (id) return "https://drive.google.com/file/d/" + id + "/preview";
    if (/docs\.google\.com\/presentation/.test(d.link)) return d.link.replace(/\/(edit|view|pub)[^]*$/, "/embed");
    if (t === "PDF") return d.link;
    if (t === "PPTX") {
      var abs = ""; try { abs = new URL(d.link, location.href).href; } catch (e) {}
      if (/^https?:/i.test(abs) && !/localhost|127\.0\.0\.1/.test(abs)) return "https://view.officeapps.live.com/op/embed.aspx?src=" + encodeURIComponent(abs);
    }
    return "";
  }
  var COURSE_ICON = { "User-Centered Design": "palette", "Research Methodology": "flask", "Media Production": "camera", "Media Psychology": "people", "Game Design": "headset", "Computer Graphics": "layers", "Computational Media": "tools", "Optimization Techniques": "wave", "Generative AI": "sparkle", "SDMC": "graduate" };
  var DECKS = [], DK = { course: "all", q: "" };
  function slidesHtml() {
    var groups = slideGroups();
    if (!groups.length) return empty("Classroom slides coming soon", "Lecture decks will be listed here by course.");
    DECKS = [];
    groups.forEach(function (g, gi) { g.decks.forEach(function (d) { DECKS.push({ course: g.course, tone: gi, d: d }); }); });
    var chips = '<button type="button" class="dchip" data-course="all" aria-pressed="true">All <small>' + DECKS.length + "</small></button>" +
      groups.map(function (g) { return '<button type="button" class="dchip" data-course="' + esc(g.course) + '" aria-pressed="false">' + esc(g.course) + " <small>" + g.decks.length + "</small></button>"; }).join("");
    var cards = DECKS.map(function (x, i) {
      var t = fileType(x.d), pv = previewUrl(x.d);
      return '<article class="deck" data-i="' + i + '" data-course="' + esc(x.course) + '" data-q="' + esc((x.course + " " + x.d.title + " " + (x.d.note || "")).toLowerCase()) + '">' +
        '<div class="deck-ico">' + VEC.deckIcon(COURSE_ICON[x.course] || "book", x.tone, t === "Slides" ? "SLIDES" : t.toUpperCase()) + "</div>" +
        '<div class="deck-body"><h5>' + esc(x.d.title) + "</h5><p>" + esc(x.course) + (x.d.note ? " &middot; " + esc(x.d.note) : "") + "</p>" +
        '<div class="deck-act">' + (pv ? '<button type="button" class="dprev" data-i="' + i + '">Preview</button>' : "") +
        '<a class="act" href="' + esc(x.d.link) + '" target="_blank" rel="noopener"' + (t === "PPTX" || t === "Keynote" ? " download" : "") + ">" + (t === "PPTX" || t === "Keynote" ? "Download" : "Open") + "</a></div></div></article>";
    }).join("");
    var folder = typeof SLIDES_FOLDER !== "undefined" && SLIDES_FOLDER ? '<a class="act" href="' + esc(SLIDES_FOLDER) + '" target="_blank" rel="noopener">Browse the whole folder on Google Drive</a>' : "";
    return '<div class="dchips" id="dchips" role="group" aria-label="Filter slides by course">' + chips + '</div>' +
      '<div class="slidebar"><label class="sr" for="slq">Search classroom slides</label><input id="slq" type="search" placeholder="Search ' + DECKS.length + ' decks by course or topic"><span id="slcount" aria-live="polite"></span>' + folder + "</div>" +
      '<div class="decks" id="decks">' + cards + '</div><p class="pnote" id="slnone" hidden>No decks match that search.</p>';
  }
  function teachingPanel() {
    var branches = CURRICULUM.map(function (c) {
      return { label: c.label, leaves: c.items.map(function (x) { return '<span class="t-leaf">' + esc(x) + "</span>"; }) };
    });
    var plat = {}; MOOCS.forEach(function (m) { plat[m.platform] = (plat[m.platform] || 0) + 1; });
    var nPlat = Object.keys(plat).length, topPlat = Math.max.apply(null, Object.keys(plat).map(function (k) { return plat[k]; })), topAll = Math.max(MOOCS.length, TEXTBOOKS.length);
    var bars = hbar("Online courses", "Across " + nPlat + " platforms", MOOCS.length, topAll, 0) + hbar("Textbooks", "Authored and co-written", TEXTBOOKS.length, topAll, .1);
    var bars2 = Object.keys(plat).sort(function (a, b) { return plat[b] - plat[a]; }).map(function (k, i) { return hbar(k, "", plat[k], topPlat, i * .1); }).join("");
    var notes = TEACHING_NOTES.length
      ? rowsHtml(TEACHING_NOTES.map(function (n) { return row(link(n.link, n.title), n.note, n.course); }))
      : empty("Teaching notes coming soon", "Lecture notes and handouts will be posted here.");
    return head("Planting skills that outlast the software.", "Two decades of teaching animation, VFX and computational media, in classrooms and online.",
        VEC.branch({ len: 230, bend: -50, n: 8, leaf: 56, seed: 61 }, "art") + I("book")) +
      profs(["udemy", "faculty"]) +
      '<section class="wrap block"><h3>What I teach</h3><p class="sub">Four branches, from drawing a first frame to teaching machines to help. Select a branch to open or close it.</p>' +
        '<div class="leafcard">' + tree("Courses", branches, false) + "</div></section>" +
      '<section class="wrap block"><div class="two">' +
        '<div class="leafcard"><h3 class="chart-title">Teaching content I have built</h3><p class="chart-note">Counts from the lists below.</p>' + bars + "</div>" +
        '<div class="leafcard"><h3 class="chart-title">Online courses by platform</h3><p class="chart-note">Where learners find them.</p>' + bars2 + "</div></div></section>" +
      '<section class="wrap block" id="slides"><h3>Classroom slides</h3><p class="sub">Lecture decks for the courses I teach. Pick a course, search by topic, or select Preview to flip through a deck without leaving this page.</p>' + slidesHtml() + "</section>" +
      '<section class="wrap">' +
        split("Online tutorials", rowsHtml(MOOCS.map(function (m) { return row(link(m.link, m.title), "", m.platform); })), "Courses I developed") +
        split("Textbooks", rowsHtml(TEXTBOOKS.map(function (t) { return row(link(t.link, t.title), t.meta); })), "Authored and co-written") +
        split("Teaching notes", notes) +
        split("AR/VR & Unreal Engine Laboratory", "<p>I manage the laboratory at Mahindra University: Meta Quest set-up and training, testing and presenting student AR, VR and Unreal Engine projects, and equipment for workshops, exhibitions and institutional events.</p>") +
      "</section>";
  }

  /* ================= PROJECTS ================= */
  function embedUrl(v) {
    var s = String(v || "").trim(), m;
    if ((m = s.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return "https://player.vimeo.com/video/" + m[1];
    if ((m = s.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/))) return "https://www.youtube-nocookie.com/embed/" + m[1];
    if (/^[\w-]{11}$/.test(s)) return "https://www.youtube-nocookie.com/embed/" + s;
    return "";
  }
  function pipeSection() {
    return '<div class="leafcard"><h3 class="chart-title">The student film pipeline</h3><p class="chart-note">How a BTCM VFX short film travels from idea to festival. Select a stage.</p>' +
      '<div class="pipe">' + PIPELINE.map(function (s, i) {
        return '<button type="button" class="pstep" data-i="' + i + '" aria-pressed="' + (i === 0) + '"><span class="pi">' + I(s.icon) + "</span>" + esc(s.title) + "</button>";
      }).join("") + '</div><div class="pdetail" id="pdetail" aria-live="polite"></div></div>';
  }
  function projectsPanel() {
    var groups = STUDENT_GROUPS.map(function (g) {
      var vids = g.projects.filter(function (p) { return ytId(p.link); }), other = g.projects.filter(function (p) { return !ytId(p.link); });
      var projects = (vids.length ? '<div class="vgrid">' + vids.map(function (p) {
          return '<div class="vitem">' + lite(ytId(p.link), p.title) + "<h5>" + esc(p.title) + "</h5>" + (p.note ? "<p>" + esc(p.note) + "</p>" : "") + "</div>";
        }).join("") + "</div>" : "") +
        (other.length ? '<div class="proj">' + rowsHtml(other.map(function (p) { return row(link(p.link, p.title), p.note, p.by); })) + "</div>" : "") +
        (g.projects.length ? "" : '<p class="pnote" style="margin:1rem 0 0">Project links will be added here.</p>');
      return '<article class="leafcard group"><div><h4>' + esc(g.title) + '</h4><span class="who">' + esc(g.who) + "</span></div><div><p style=\"margin:0\">" + esc(g.text) + "</p>" + projects + "</div></article>";
    }).join("");
    var personal = PERSONAL.map(function (p) {
      return '<article class="leafcard"><h4>' + (p.link ? link(p.link, p.title) : esc(p.title)) + "</h4>" + (p.when ? '<span class="when">' + esc(p.when) + "</span>" : "") + "<p>" + esc(p.text) + "</p></article>";
    }).join("");
    var hub = [];
    FILMS.forEach(function (f) { if (ytId(f.link)) hub.push({ id: ytId(f.link), title: f.title, tag: "Short film" }); });
    VIDEOS.forEach(function (v) { var id = ytId(v.youtube); if (id) hub.push({ id: id, title: v.title, tag: v.note || "Video" }); });
    var vids = hub.map(function (v) {
      return '<article class="video">' + lite(v.id, v.title) + "<h4>" + esc(v.title) + "</h4><p>" + esc(v.tag) + "</p></article>";
    }).join("");
    var chip = function (k, l) { return '<button type="button" data-group="' + k + '" aria-pressed="' + (k === "all") + '">' + esc(l) + "</button>"; };
    return head("From first sketch to final cut.", "Student films, immersive builds and personal ventures, with videos you can play right here.",
        VEC.reel("art") ) .replace('<div class="phead-art">', '<div class="phead-art" style="color:inherit">') +
      profs(["instagram", "imdb"]) +
      '<section class="wrap block" style="padding-top:0"><div class="filters" id="pfilters" role="group" aria-label="Filter projects">' +
        chip("all", "Everything") + chip("student", "Student work") + chip("personal", "Personal projects") + chip("videos", "Videos") + "</div>" +
        '<div data-g="student"><h3 style="margin-bottom:1.2rem">Student work</h3>' + pipeSection() + '<div class="groups" style="margin-top:1.4rem">' + groups + "</div>" +
          '<p class="highlight">' + esc(STUDENT_HIGHLIGHT) + "</p></div></section>" +
      '<section class="wrap block" data-g="personal"><h3 style="margin-bottom:1.2rem">Personal projects</h3><div class="cards">' + personal + "</div></section>" +
      '<section class="wrap block" data-g="videos"><h3 style="margin-bottom:1.2rem">Videos</h3>' +
        (vids ? '<div class="videos">' + vids + "</div>" : empty("Videos coming soon", "Films, showreels and lecture videos will play here.")) +
        (SOCIALS.filter(function (s) { return s.name === "youtube" && s.url; }).map(function (s) { return '<p class="pnote" style="margin-top:1rem">More on <a href="' + esc(s.url) + '" target="_blank" rel="noopener">YouTube</a>.</p>'; }).join("")) + "</section>";
  }

  /* ================= GALLERY ================= */
  var GL = { cat: "all", seed: Math.floor(Math.random() * 1e6) + 1, list: [] };
  function rngSeed(seed) { var s = seed % 2147483647 || 1; return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
  function artId(a) {
    var v = String(a.drive || ""), m = v.match(/\/d\/([\w-]+)/) || v.match(/[?&]id=([\w-]+)/);
    return m ? m[1] : (/^[\w-]{20,}$/.test(v) ? v : "");
  }
  function artThumb(a, w) { var id = artId(a); return id ? "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + w : (a.src || ""); }
  function artAlt(a) { var id = artId(a); return id ? "https://lh3.googleusercontent.com/d/" + id + "=w" + 1200 : ""; }
  function galleryPanel() {
    var icons = ["brush", "script", "layers", "image", "camera", "board"];
    var chips = ART_MEDIUMS.map(function (m, i) { return "<li>" + I(icons[i % icons.length]) + esc(m) + "</li>"; }).join("");
    var head2 = head("A sketchbook in bloom.", "Paintings, sketches, digital experiments and a few moments from the road, pinned up in no particular order.",
      VEC.branch({ len: 230, bend: -40, n: 8, leaf: 56, seed: 81 }, "art") + I("palette"));
    if (!ART.length) {
      return head2 + '<section class="wrap block" style="padding-top:0"><ul class="chips mediums">' + chips + "</ul>" +
        '<div class="frames" aria-hidden="true"><div class="fr">' + I("brush") + "</div><div class=\"fr\">" + I("image") + "</div><div class=\"fr\">" + I("palette") + "</div></div>" +
        empty("The gallery is in bloom", "Paintings, sketches and illustrations will appear here.") + "</section>";
    }
    var cats = GALLERY_CATS.filter(function (c) { return ART.some(function (a) { return a.cat === c; }); });
    var chip = function (k, l, n) { return '<button type="button" class="dchip" data-gcat="' + esc(k) + '" aria-pressed="' + (k === "all") + '">' + esc(l) + " <small>" + n + "</small></button>"; };
    var folder = typeof GALLERY_FOLDER !== "undefined" && GALLERY_FOLDER ? '<a class="act" href="' + esc(GALLERY_FOLDER) + '" target="_blank" rel="noopener">See the full folder on Google Drive</a>' : "";
    return head2 +
      '<section class="wrap block" style="padding-top:0"><ul class="chips mediums">' + chips + "</ul>" +
      '<div class="gtools"><div class="dchips" id="gchips" role="group" aria-label="Filter artwork">' + chip("all", "Everything", ART.length) +
        cats.map(function (c) { return chip(c, c, ART.filter(function (a) { return a.cat === c; }).length); }).join("") + '</div>' +
        '<button type="button" class="btn ghost" id="shuffle">' + I("shuffle") + "Shuffle the wall</button></div>" +
      '<div class="gcount"><span id="gcount" aria-live="polite"></span>' + folder + "</div>" +
      '<div class="collage-wrap" id="cwrap">' +
        [[3, "left:-34px", 0, 5], [30, "right:-40px", 1, 17], [58, "left:-30px", 0, 29], [86, "right:-34px", 1, 41]].map(function (z) {
          return '<div class="cw-sprig" style="top:' + z[0] + "%;" + z[1] + (z[2] ? ";transform:scaleX(-1)" : "") + '">' + VEC.branch({ len: 130, bend: -34, n: 6, leaf: 38, seed: z[3] }) + "</div>";
        }).join("") + '<div class="collage" id="collage"></div></div></section>';
  }
  function renderCollage() {
    var r = rngSeed(GL.seed), pick = function (a, b) { return a + r() * (b - a); };
    var items = [];
    ART.forEach(function (a, i) { if (GL.cat === "all" || a.cat === GL.cat) items.push(i); });
    for (var k = items.length - 1; k > 0; k--) { var j = Math.floor(r() * (k + 1)), t = items[k]; items[k] = items[j]; items[j] = t; }
    GL.list = items;
    var tapes = ["var(--leaf-2)", "var(--gold-soft)", "var(--leaf-3)", "#f3d9d0"];
    $("#collage").innerHTML = items.map(function (i, n) {
      var a = ART[i], w = pick(84, 100), alt = artAlt(a);
      var style = "--r:" + pick(-3.4, 3.4).toFixed(2) + "deg;--mt:" + pick(0, 2.2).toFixed(2) + "rem;--w:" + w.toFixed(1) + "%;--ml:" + pick(0, 100 - w).toFixed(1) + "%;--tp:" + pick(18, 62).toFixed(0) + "%;--ta:" + pick(-9, 9).toFixed(1) + "deg;--tc:" + tapes[Math.floor(r() * tapes.length)] + ";--d:" + Math.min(n * 0.05, 1.2).toFixed(2) + "s";
      return '<figure class="pol" style="' + style + '"><button type="button" class="pol-btn" data-n="' + n + '" aria-label="Open artwork: ' + esc(a.title) + '">' +
        '<img src="' + esc(artThumb(a, 700)) + '" alt="' + esc(a.title) + '" loading="lazy"' + (alt ? " onerror=\"this.onerror=null;this.src='" + alt + "'\"" : "") + "></button>" +
        "<figcaption>" + esc(a.title) + '</figcaption><i class="tape" aria-hidden="true"></i></figure>';
    }).join("");
    $("#gcount").textContent = items.length + (items.length === 1 ? " piece" : " pieces") + " on the wall";
  }

  /* ================= FOOTER ================= */
  function footer() {
    var c = SITE.contact, contact = "", social = "";
    if (c.email) contact += '<li><a href="mailto:' + esc(c.email) + '">' + I("mail") + esc(c.email) + "</a></li>";
    if (c.location) contact += '<li><a href="https://www.google.com/maps/search/' + encodeURIComponent(c.location) + '" target="_blank" rel="noopener">' + I("pin") + esc(c.location) + "</a></li>";
    SOCIALS.forEach(function (s) {
      if (s.url) social += '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + I(s.name) + esc(s.handle || s.label) + "</a></li>";
    });
    return VEC.wave("#1f4a2c", false, "wavebar") +
      '<div class="foot-art">' + VEC.branch({ len: 360, bend: -60, n: 10, leaf: 70, seed: 91, pal: ["#e9f2df", "#cfe6bb", "#b3d89b", "#98c87d", "#73b05f"], stem: "#cfe6bb" }) + "</div>" +
      '<div class="wrap foot-in"><div><h4>' + esc(SITE.name) + "</h4><p>" + esc(SITE.headline) + " Open to collaborations, guest lectures, festival screenings and student projects.</p></div>" +
      "<div><h4>Contact</h4><ul>" + (contact || "<li>Details coming soon</li>") + "</ul></div>" +
      "<div><h4>Find me online</h4><ul class=\"cols2\">" + (social || "<li>Details coming soon</li>") + "</ul></div></div>" +
      '<div class="wrap foot-note"><span>&copy; ' + NOWD.getFullYear() + " " + esc(SITE.name) + '</span><a href="#top" id="totop">Back to top</a></div>';
  }

  /* ================= BUILD ================= */
  var builders = { minhaj: minhajPanel, research: researchPanel, awards: awardsPanel, teaching: teachingPanel, projects: projectsPanel, gallery: galleryPanel };
  var main = $("#main"), tabsEl = $("#tabs");

  $("#brand").innerHTML = VEC.mark() + "<span>" + esc(SITE.shortName) + "</span>";
  TABS.forEach(function (t) {
    tabsEl.insertAdjacentHTML("beforeend", '<a href="#' + t.id + '" data-tab="' + t.id + '">' + esc(t.label) + "</a>");
    main.insertAdjacentHTML("beforeend", '<section class="panel" id="p-' + t.id + '" hidden aria-label="' + esc(t.label) + '">' + builders[t.id]() + "</section>");
  });
  $("#foot").innerHTML = footer();
  $("#totop").addEventListener("click", function (e) { e.preventDefault(); window.scrollTo({ top: 0 }); });

  /* interactions */
  $$(".more").forEach(function (b) {
    b.addEventListener("click", function () {
      var seg = b.closest(".seg"), open = !seg.classList.contains("open");
      seg.classList.toggle("open", open);
      b.setAttribute("aria-expanded", String(open));
      b.firstChild.textContent = open ? "Show less" : "More";
    });
  });
  $$(".grow").forEach(function (b) { b.addEventListener("click", function () { showRole(+b.getAttribute("data-i")); }); });
  showRole(0);
  wireTrees(document);

  AW.year = null;
  renderAwards();
  $$("#p-awards .filters button[data-filter]").forEach(function (b) {
    b.addEventListener("click", function () { AW.type = b.getAttribute("data-filter"); renderAwards(); });
  });
  $$("#awchart .cbtn").forEach(function (b) {
    b.addEventListener("click", function () {
      var y = b.getAttribute("data-year"); AW.year = AW.year === y ? null : y; renderAwards();
    });
  });

  function showStage(i) {
    var s = PIPELINE[i];
    $("#pdetail").innerHTML = "<h4>" + (i + 1) + ". " + esc(s.title) + "</h4><p>" + esc(s.text) + "</p>";
    $$(".pstep").forEach(function (b) { b.setAttribute("aria-pressed", String(+b.getAttribute("data-i") === i)); });
  }
  $$(".pstep").forEach(function (b) { b.addEventListener("click", function () { showStage(+b.getAttribute("data-i")); }); });
  showStage(0);

  $$("#pfilters button").forEach(function (b) {
    b.addEventListener("click", function () {
      var g = b.getAttribute("data-group");
      $$("#pfilters button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      $$("#p-projects [data-g]").forEach(function (sec) { sec.hidden = !(g === "all" || sec.getAttribute("data-g") === g); });
    });
  });

  /* tabs */
  var first = true;
  function show() {
    var id = location.hash.replace("#", "");
    if (id === "top") id = "minhaj";
    if (!builders[id]) id = "minhaj";
    TABS.forEach(function (t) {
      var on = t.id === id, panel = $("#p-" + t.id), a = $('[data-tab="' + t.id + '"]', tabsEl);
      panel.hidden = !on;
      panel.classList.remove("go");
      if (on) { a.setAttribute("aria-current", "page"); } else { a.removeAttribute("aria-current"); }
      if (on) {
        requestAnimationFrame(function () { requestAnimationFrame(function () { panel.classList.add("go"); }); });
        if (!first) { try { a.scrollIntoView({ inline: "center", block: "nearest" }); } catch (e) {} }
      }
    });
    document.title = (id === "minhaj" ? "" : TABS.filter(function (t) { return t.id === id; })[0].label + " | ") + SITE.name + " | Animation, VFX, AI & Computational Media";
    if (!first) { window.scrollTo(0, 0); main.focus({ preventScroll: true }); }
    first = false;
  }
  window.addEventListener("hashchange", show);
  show();

  /* classroom slides: filter, search, preview */
  var slq = $("#slq");
  if (slq) {
    var applyDecks = function () {
      var q = DK.q, shown = 0;
      $$("#decks .deck").forEach(function (c) {
        var ok = (DK.course === "all" || c.getAttribute("data-course") === DK.course) && (!q || c.getAttribute("data-q").indexOf(q) > -1);
        c.hidden = !ok; if (ok) shown++;
      });
      $("#slcount").textContent = (q || DK.course !== "all") ? shown + " shown" : "";
      $("#slnone").hidden = shown > 0;
    };
    slq.addEventListener("input", function () { DK.q = slq.value.trim().toLowerCase(); applyDecks(); });
    $$(".dchip").forEach(function (b) {
      b.addEventListener("click", function () {
        DK.course = b.getAttribute("data-course");
        $$(".dchip").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        applyDecks();
      });
    });
    var dlg = $("#deckdlg");
    $$(".dprev").forEach(function (b) {
      b.addEventListener("click", function () {
        var x = DECKS[+b.getAttribute("data-i")];
        $("#dd-title").textContent = x.course + ": " + x.d.title;
        $("#dd-open").href = x.d.link;
        $("#dd-frame").src = previewUrl(x.d);
        if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
      });
    });
    var closeDeck = function () { dlg.close(); };
    dlg.addEventListener("close", function () { $("#dd-frame").removeAttribute("src"); });
    $(".dd-close", dlg).addEventListener("click", closeDeck);
    dlg.addEventListener("click", function (e) { if (e.target === dlg) closeDeck(); });
  }

  /* play YouTube thumbnails in place */
  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest(".lite") : null;
    if (!b) return;
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + b.getAttribute("data-yt") + "?autoplay=1&rel=0";
    f.title = b.getAttribute("data-title") || "Video";
    f.allow = "autoplay; accelerometer; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    b.parentNode.classList.add("playing");
    b.replaceWith(f);
  });

  /* gallery wall + lightbox */
  var lb = $("#lightbox"), LBI = 0;
  function showArt(n) {
    if (!GL.list.length) return;
    LBI = (n + GL.list.length) % GL.list.length;
    var a = ART[GL.list[LBI]], img = $("img", lb), alt = artAlt(a);
    img.onerror = alt ? function () { img.onerror = null; img.src = alt; } : null;
    img.src = artThumb(a, 2000); img.alt = a.title;
    $(".lb-cap", lb).textContent = [a.title, a.cat, a.medium, a.year].filter(Boolean).join(" · ") + (a.caption ? ". " + a.caption : "") + "   (" + (LBI + 1) + " of " + GL.list.length + ")";
    $$(".lb-nav", lb).forEach(function (b) { b.hidden = GL.list.length < 2; });
  }
  if ($("#collage")) {
    renderCollage();
    $("#collage").addEventListener("click", function (e) {
      var b = e.target.closest(".pol-btn"); if (!b) return;
      showArt(+b.getAttribute("data-n"));
      if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
    });
    $("#shuffle").addEventListener("click", function () { GL.seed = Math.floor(Math.random() * 1e6) + 1; renderCollage(); });
    $$("#gchips .dchip").forEach(function (b) {
      b.addEventListener("click", function () {
        GL.cat = b.getAttribute("data-gcat");
        $$("#gchips .dchip").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        renderCollage();
      });
    });
    $(".lb-nav.prev", lb).addEventListener("click", function () { showArt(LBI - 1); });
    $(".lb-nav.next", lb).addEventListener("click", function () { showArt(LBI + 1); });
    lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") showArt(LBI - 1); if (e.key === "ArrowRight") showArt(LBI + 1); });
  }
  $(".lb-close", lb).addEventListener("click", function () { lb.close(); });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
})();
