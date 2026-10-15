/* Vector art, drawn in code so it stays crisp at any size. Exposes window.VEC. */
(function (w) {
  "use strict";
  var PAL = ["#d9edc8", "#bcdca3", "#98c87d", "#73b05f", "#468546"];
  var NS = 'xmlns="http://www.w3.org/2000/svg"';

  function rng(seed) {
    var s = seed % 2147483647; if (s <= 0) s += 2147483646;
    return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  }
  function leafD(l, wd) {
    return "M0 0C" + (l * .2) + " " + (-wd) + " " + (l * .7) + " " + (-wd * .9) + " " + l + " 0C" +
      (l * .7) + " " + (wd * .9) + " " + (l * .2) + " " + wd + " 0 0Z";
  }
  function fx(n) { return n.toFixed(1); }

  /* shared builder: collects markup and a bounding box so each svg fits its art exactly */
  function builder() {
    var bb = [1e9, 1e9, -1e9, -1e9], out = "";
    function upd(x, y) { bb[0] = Math.min(bb[0], x); bb[1] = Math.min(bb[1], y); bb[2] = Math.max(bb[2], x); bb[3] = Math.max(bb[3], y); }
    return {
      raw: function (s) { out += s; },
      pt: upd,
      leaf: function (x, y, ang, l, wd, fill, vein) {
        var r = ang * Math.PI / 180, c = Math.cos(r), sn = Math.sin(r);
        upd(x, y); upd(x + c * l, y + sn * l);
        upd(x + c * l * .5 - sn * wd, y + sn * l * .5 + c * wd);
        upd(x + c * l * .5 + sn * wd, y + sn * l * .5 - c * wd);
        out += '<g transform="translate(' + fx(x) + " " + fx(y) + ") rotate(" + fx(ang) + ')"><path d="' + leafD(l, wd) + '" fill="' + fill + '"/>' +
          '<path d="M0 0L' + fx(l * .9) + ' 0" stroke="' + vein + '" stroke-width="' + Math.max(.8, l / 48).toFixed(2) + '" stroke-linecap="round" opacity=".5" fill="none"/></g>';
      },
      done: function (cls, pad) {
        pad = pad == null ? 6 : pad;
        var vb = fx(bb[0] - pad) + " " + fx(bb[1] - pad) + " " + fx(bb[2] - bb[0] + pad * 2) + " " + fx(bb[3] - bb[1] + pad * 2);
        return "<svg " + NS + ' class="' + (cls || "") + '" viewBox="' + vb + '" aria-hidden="true" focusable="false">' + out + "</svg>";
      }
    };
  }

  /* a leafy branch growing from (0,0) along a gentle curve */
  function branch(o, cls) {
    o = o || {};
    var L = o.len || 320, b = o.bend == null ? -60 : o.bend, n = o.n || 9, ll = o.leaf || 62, r = rng(o.seed || 7), pal = o.pal || PAL;
    var B = builder(), P1x = L * .5, P1y = b * 1.7, P2x = L, P2y = b, ang = 0;
    B.pt(0, 0); B.pt(L, b);
    B.raw('<path d="M0 0Q' + P1x + " " + P1y + " " + P2x + " " + P2y + '" fill="none" stroke="' + (o.stem || "#5f8f52") + '" stroke-width="' + (o.sw || 3) + '" stroke-linecap="round"/>');
    for (var i = 0; i < n; i++) {
      var t = (i + 1) / (n + .6), u = 1 - t;
      var x = u * u * 0 + 2 * u * t * P1x + t * t * P2x, y = 2 * u * t * P1y + t * t * P2y;
      var dx = 2 * u * P1x + 2 * t * (P2x - P1x), dy = 2 * u * P1y + 2 * t * (P2y - P1y);
      ang = Math.atan2(dy, dx) * 180 / Math.PI;
      var side = i % 2 ? 1 : -1, size = ll * (1 - t * .5) * (.85 + r() * .3);
      B.leaf(x, y, ang + side * (46 + r() * 20), size, size * .34, pal[Math.floor(r() * pal.length)], pal[4]);
    }
    B.leaf(P2x, P2y, ang, ll * .55, ll * .19, pal[2], pal[4]);
    return B.done(cls);
  }

  /* laurel wreath: leaves along two arcs that open at the top */
  function laurel(o, cls) {
    o = o || {};
    var R = o.r || 70, n = o.n || 10, ll = o.leaf || 26, r = rng(o.seed || 11), pal = o.pal || PAL;
    var B = builder();
    for (var s = -1; s <= 1; s += 2) {
      for (var i = 0; i < n; i++) {
        var th = (18 + i * (140 / n)) * Math.PI / 180;
        var x = s * R * Math.sin(th), y = R * Math.cos(th);
        var tang = Math.atan2(-Math.sin(th), s * Math.cos(th)) * 180 / Math.PI;
        var size = ll * (1 - i / (n * 1.8));
        B.leaf(x, y, tang + 32, size, size * .36, pal[(i + (s > 0 ? 1 : 0)) % 4 + 1], pal[4]);
        B.leaf(x, y, tang - 32, size * .85, size * .3, pal[(i + 2) % 4 + 1], pal[4]);
      }
    }
    return B.done(cls, 4);
  }

  /* small logo mark: two leaves */
  function mark(cls) {
    return "<svg " + NS + ' class="' + (cls || "") + '" viewBox="0 0 40 40" aria-hidden="true" focusable="false">' +
      '<path d="M20 36C8 30 6 16 10 6c10 2 16 10 10 30z" fill="#73b05f"/><path d="M20 36C32 30 34 18 30 10c-9 1-15 9-10 26z" fill="#2f6b3e"/>' +
      '<path d="M20 36V14" stroke="#fbfaf5" stroke-width="1.6" stroke-linecap="round" opacity=".7"/></svg>';
  }

  /* film reel, drawn flat */
  function reel(cls) {
    var holes = "", i;
    for (i = 0; i < 6; i++) {
      var a = i * Math.PI / 3;
      holes += '<circle cx="' + fx(50 + 26 * Math.cos(a)) + '" cy="' + fx(50 + 26 * Math.sin(a)) + '" r="9" fill="#fbfaf5"/>';
    }
    return "<svg " + NS + ' class="' + (cls || "") + '" viewBox="0 0 100 100" aria-hidden="true" focusable="false">' +
      '<circle cx="50" cy="50" r="46" fill="#468546"/><circle cx="50" cy="50" r="46" fill="none" stroke="#2f6b3e" stroke-width="3"/>' +
      holes + '<circle cx="50" cy="50" r="7" fill="#fbfaf5"/><circle cx="50" cy="50" r="2.6" fill="#468546"/></svg>';
  }

  /* wave divider that fills with `fill` */
  function wave(fill, flip, cls) {
    return "<svg " + NS + ' class="' + (cls || "") + '" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" focusable="false"' +
      (flip ? ' style="transform:scaleY(-1)"' : "") + '><path d="M0 40C180 80 360 0 600 24S1000 76 1200 44 1380 10 1440 28V80H0z" fill="' + fill + '"/></svg>';
  }

  var ICONS = {
    camera: '<rect x="3" y="7" width="18" height="12" rx="2.5"/><circle cx="12" cy="13" r="3.4"/><path d="M8 7l1.5-2.2h5L16 7"/>',
    book: '<path d="M3 5.5C5.3 4.4 8.3 4.6 12 6.6c3.7-2 6.7-2.2 9-1.1v13c-2.3-1.1-5.3-.9-9 1.1-3.7-2-6.7-2.2-9-1.1z"/><path d="M12 6.6v13"/>',
    flask: '<path d="M9 3h6M10 3v6l-5.4 9.4A1.6 1.6 0 0 0 6 21h12a1.6 1.6 0 0 0 1.4-2.6L14 9V3"/><path d="M7.4 15h9.2"/>',
    laurel: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5.2A3 3 0 0 0 8 10M16 6h2.8A3 3 0 0 1 16 10M12 13v4M9 20h6M10 17h4"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.2 1.1 2.2h5c0-1 .4-1.7 1.1-2.2A6 6 0 0 0 12 3z"/>',
    script: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h7"/>',
    board: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 12h18M12 4v16"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    wave: '<path d="M3 12h2l2-5 3 10 3-8 2 3h6"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2-.5-1 0-2 1.3-2H17a4 4 0 0 0 4-4c0-5-4-10-9-10z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
    sparkle: '<path d="M11 3l1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8z"/><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    brush: '<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M13 8l3 3"/>',
    headset: '<path d="M3 10c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2h-4l-1.5-2h-3L9 17H5c-1.1 0-2-.9-2-2z"/>',
    graduate: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6"/>',
    tools: '<path d="M14.5 6.5a4 4 0 0 0-5 5L3.5 17.5a1.8 1.8 0 0 0 2.5 2.5l6-6a4 4 0 0 0 5-5l-2.5 2.5-2-.5-.5-2z"/>',
    people: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.4 2.7-6 6-6s6 2.6 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M16.5 14.2c2.6 0 4.5 2 4.5 4.8"/>',
    arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',
    play: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M4 7l8 6 8-6"/>',
    pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 11v6M8 7.6v.1M12 17v-6M12 13c0-1.5 1-2.2 2.3-2.2S17 11.5 17 13v4"/>',
    youtube: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9.3v5.4l4.7-2.7z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.3 6.8v.1"/>',
    medium: '<circle cx="8" cy="12" r="4.5"/><ellipse cx="16" cy="12" rx="2" ry="4.3"/><path d="M21 8v8"/>',
    shuffle: '<path d="M3 7h3c4 0 5 10 9 10h6M3 17h3c1.6 0 2.7-1.6 3.7-3.4M13.3 9.4C14.3 8 15.4 7 17 7h4M18 4l3 3-3 3M18 14l3 3-3 3"/>',
    faculty: '<path d="M3 10l9-5 9 5"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
    scholar: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6"/>',
    igi: '<path d="M3 5.5C5.3 4.4 8.3 4.6 12 6.6c3.7-2 6.7-2.2 9-1.1v13c-2.3-1.1-5.3-.9-9 1.1-3.7-2-6.7-2.2-9-1.1z"/><path d="M12 6.6v13"/>',
    imdb: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    udemy: '<path d="M7 4v8a5 5 0 0 0 10 0V4"/><path d="M4 20h16"/>',
    x: '<path d="M4 4l16 16M20 4L4 20"/>'
  };
  function icon(name, cls) {
    return "<svg " + NS + ' class="ico ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (ICONS[name] || "") + "</svg>";
  }

  var TONES = [["#e4f1d6", "#3f7d4a", "#c9e3b0"], ["#d3e8bf", "#2f6b3e", "#b4d99a"], ["#f6e6b8", "#8a6416", "#ecd28e"], ["#cfe9d6", "#2c6b4c", "#a9d6b7"], ["#eaf3c8", "#587a2a", "#d4e6a0"]];
  /* a little document icon with a folded corner and a glyph in the middle */
  function deckIcon(glyph, toneIdx, label) {
    var t = TONES[toneIdx % TONES.length];
    return "<svg " + NS + ' class="deckico" viewBox="0 0 64 78" aria-hidden="true" focusable="false">' +
      '<path d="M8 3h34l18 18v50a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z" fill="' + t[0] + '"/>' +
      '<path d="M42 3v13a5 5 0 0 0 5 5h13z" fill="' + t[2] + '"/>' +
      '<g transform="translate(17 24) scale(1.2)" fill="none" stroke="' + t[1] + '" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[glyph] || ICONS.book) + "</g>" +
      '<rect x="12" y="58" width="26" height="10" rx="5" fill="' + t[1] + '"/><text x="25" y="65.8" text-anchor="middle" font-family="Figtree,Arial,sans-serif" font-size="7" font-weight="700" fill="#fff">' + (label || "PDF") + "</text></svg>";
  }

  w.VEC = { deckIcon: deckIcon, branch: branch, laurel: laurel, mark: mark, reel: reel, wave: wave, icon: icon };
})(window);
