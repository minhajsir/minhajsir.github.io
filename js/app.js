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
    var chip = function (k, l) { return '<button type="button" data-group="' + k + '" aria-pressed="' + (k === "all") + '">' + esc(l) + "</button>"; };
    return head("From first sketch to final cut.", "Student films, immersive builds and personal ventures, with videos you can play right here.",
        VEC.reel("art") ) .replace('<div class="phead-art">', '<div class="phead-art" style="color:inherit">') +
      profs(["instagram", "imdb"]) +
      '<section class="wrap block" style="padding-top:0"><div class="filters" id="pfilters" role="group" aria-label="Filter projects">' +
        chip("all", "Everything") + chip("student", "Student work") + "</div>" +
        '<div data-g="student"><h3 style="margin-bottom:1.2rem">Student work</h3>' + pipeSection() + '<div class="groups" style="margin-top:1.4rem">' + groups + "</div>" +
          '<p class="highlight">' + esc(STUDENT_HIGHLIGHT) + "</p></div></section>";
  }
