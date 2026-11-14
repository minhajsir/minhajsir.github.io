/* Load the portfolio builder and apply the Projects-menu customizations after it renders. */
(function () {
  "use strict";

  // Keep the removed profiles off every rendered page, including the footer.
  for (var i = SOCIALS.length - 1; i >= 0; i--) {
    if (SOCIALS[i].name === "instagram" || SOCIALS[i].name === "imdb") SOCIALS.splice(i, 1);
  }

  // Keep the structured profile metadata in sync with the visible profile links.
  var metadata = document.querySelector('script[type="application/ld+json"]');
  if (metadata) {
    try {
      var graph = JSON.parse(metadata.textContent);
      (graph["@graph"] || []).forEach(function (item) {
        if (Array.isArray(item.sameAs)) {
          item.sameAs = item.sameAs.filter(function (url) {
            return url.indexOf("instagram.com/") === -1 && url.indexOf("imdb.com/") === -1;
          });
        }
      });
      metadata.textContent = JSON.stringify(graph);
    } catch (e) { /* Leave unrelated metadata untouched if it cannot be parsed. */ }
  }

  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/minhajsir/minhajsir.github.io@2dd88cf15f26f8c9de6e439df1512f1fc2e25fc3/js/app.js";
  script.async = false;
  script.onload = function () {
    var filters = document.getElementById("pfilters");
    if (!filters) return;

    var creative = filters.querySelector('[data-group="student"]');
    if (creative) {
      creative.textContent = "Creative projects";
      creative.click();
    }
    var technical = filters.querySelector('[data-group="personal"]');
    if (technical) technical.textContent = "Technical projects";

    var everything = filters.querySelector('[data-group="all"]');
    if (everything) everything.remove();
    var videos = filters.querySelector('[data-group="videos"]');
    if (videos) videos.remove();

    var creativeSection = document.querySelector('#p-projects [data-g="student"] h3');
    if (creativeSection) creativeSection.textContent = "Creative projects";
    var technicalSection = document.querySelector('#p-projects [data-g="personal"] h3');
    if (technicalSection) technicalSection.textContent = "Technical projects";
    var videosSection = document.querySelector('#p-projects [data-g="videos"]');
    if (videosSection) videosSection.remove();
    if (!technicalSection) return;

    var style = document.createElement("style");
    style.textContent = ".tech-project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:1.2rem}.tech-project-card{overflow:hidden;padding:0!important}.tech-project-card img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:var(--leaf-1,#edf3e6)}.tech-project-card .tech-project-copy{padding:1rem 1.1rem 1.2rem}.tech-project-card h4{margin:0 0 .55rem}.tech-project-card p{margin:0 0 1rem}.tech-project-card .tech-project-link{display:inline-flex;align-items:center;gap:.35rem;font-weight:700;color:var(--leaf-5,#1f4a2c);text-decoration:none}.tech-project-card .tech-project-link:hover{text-decoration:underline}";
    document.head.appendChild(style);

    var oldCards = technicalSection.nextElementSibling;
    var cards = document.createElement("div");
    cards.className = "tech-project-grid";
    cards.setAttribute("aria-live", "polite");
    cards.innerHTML = '<p>Loading projects…</p>';
    if (oldCards) oldCards.replaceWith(cards);

    // Discover project folders at runtime so new cm_projects folders appear automatically.
    var api = "https://api.github.com/repos/minhajsir/minhajsir.github.io/contents/";
    var encPath = function (path) { return path.split("/").map(encodeURIComponent).join("/"); };
    var escapeHtml = function (value) {
      return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
      });
    };
    var cleanMarkdown = function (text) {
      return text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`>#]/g, "").trim();
    };

    fetch(api + "cm_projects?ref=main")
      .then(function (response) {
        if (!response.ok) throw new Error("Could not list project folders");
        return response.json();
      })
      .then(function (entries) {
        var folders = entries.filter(function (entry) { return entry.type === "dir"; });
        return Promise.all(folders.map(function (folder) {
          return fetch(api + encPath(folder.path) + "?ref=main")
            .then(function (response) { if (!response.ok) throw new Error("Could not read " + folder.path); return response.json(); })
            .then(function (files) {
              var readme = files.filter(function (file) { return file.name.toLowerCase() === "readme.md"; })[0];
              var thumbnail = files.filter(function (file) { return /^thumbnail\.(png|jpe?g|webp|gif)$/i.test(file.name); })[0];
              var index = files.filter(function (file) { return file.name.toLowerCase() === "index.html"; })[0];
              if (!thumbnail || !index) return null;
              var title = folder.name.replace(/[-_]+/g, " ").replace(/\b\w/g, function (letter) { return letter.toUpperCase(); });
              var project = {
                title: title,
                image: "/" + encPath(thumbnail.path),
                url: "/" + encPath(index.path),
                description: ""
              };
              return readme
                ? fetch(readme.download_url).then(function (response) { if (!response.ok) throw new Error("Could not read project description"); return response.text(); })
                    .then(function (markdown) {
                      var lines = markdown.split(/\r?\n/).map(function (line) { return line.trim(); }).filter(Boolean);
                      if (lines[0] && /^#\s+/.test(lines[0])) title = cleanMarkdown(lines.shift().replace(/^#\s+/, ""));
                      project.title = title;
                      project.description = lines.slice(0, 2).map(cleanMarkdown).filter(Boolean).join(" ");
                      return project;
                    })
                : project;
            });
        }));
      })
      .then(function (projects) {
        projects = projects.filter(Boolean);
        if (!projects.length) {
          cards.innerHTML = '<p>No projects with an index.html and thumbnail were found in cm_projects.</p>';
          return;
        }
        cards.innerHTML = projects.map(function (project) {
          return '<article class="leafcard tech-project-card"><a href="' + escapeHtml(project.url) + '" target="_blank" rel="noopener" aria-label="Open ' + escapeHtml(project.title) + '"><img src="' + escapeHtml(project.image) + '" alt="' + escapeHtml(project.title) + ' thumbnail" loading="lazy"></a><div class="tech-project-copy"><h4>' + escapeHtml(project.title) + '</h4><p>' + escapeHtml(project.description) + '</p><a class="tech-project-link" href="' + escapeHtml(project.url) + '" target="_blank" rel="noopener">Open project <span aria-hidden="true">↗</span></a></div></article>';
        }).join("");
      })
      .catch(function () {
        cards.innerHTML = '<p>Projects could not be loaded right now. Please try again later.</p>';
      });
  };
  document.head.appendChild(script);
})();
