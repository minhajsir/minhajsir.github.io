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

  var projects = [
    {
      title: "Rangoli and Kolam Generator",
      image: "cm_projects/project-one/thumbnail.png",
      url: "cm_projects/project-one/index.html",
      description: "Generate symmetric rangoli and kolam-inspired patterns from a seed number, then download them as print-ready SVG files. Built for the B.Tech Computational Media course."
    },
    {
      title: "Hyderabad Sky: data-driven art",
      image: "cm_projects/project-two/thumbnail.png",
      url: "cm_projects/project-two/index.html",
      description: "Three live artworks painted by today's weather and air quality. The data is fetched from the free Open-Meteo APIs (no API key), and every colour and movement is mapped from a real number."
    },
    {
      title: "Game of Life Sonifier",
      image: "cm_projects/project-three/thumbnail.png",
      url: "cm_projects/project-three/index.html",
      description: "Conway's Game of Life that you can hear. A playhead sweeps across the grid like a music sequencer, and every live cell it touches plays a note."
    },
    {
      title: "Heritage Hunt: Charminar and Golconda",
      image: "cm_projects/project-four/thumbnail.png",
      url: "cm_projects/project-four/index.html",
      description: "A short puzzle game about two landmarks of Hyderabad. Each puzzle you solve unlocks facts that are saved in your heritage journal. Built for the B.Tech Computational Media course."
    },
    {
      title: "Air Calligraphy",
      image: "cm_projects/project-five/thumbnail.png",
      url: "cm_projects/project-five/index.html",
      description: "Write in the air with your index finger. A webcam tracks your hand in the browser; slow movements make thick brush strokes and quick flicks make thin ones. Turn on symmetry to draw rangoli-style patterns."
    },
    {
      title: "Generative Art Gallery",
      image: "cm_projects/project-six/thumbnail.png",
      url: "cm_projects/project-six/index.html",
      description: "A small gallery of algorithmic artworks built with p5.js. Pick a piece, change the seed, and save the result as a PNG. Built as the first project of the B.Tech Computational Media course."
    }
  ];

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

    var style = document.createElement("style");
    style.textContent = ".tech-project-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:1.2rem}.tech-project-card{overflow:hidden;padding:0!important}.tech-project-card img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:var(--leaf-1,#edf3e6)}.tech-project-card .tech-project-copy{padding:1rem 1.1rem 1.2rem}.tech-project-card h4{margin:0 0 .55rem}.tech-project-card p{margin:0 0 1rem}.tech-project-card .tech-project-link{display:inline-flex;align-items:center;gap:.35rem;font-weight:700;color:var(--leaf-5,#1f4a2c);text-decoration:none}.tech-project-card .tech-project-link:hover{text-decoration:underline}";
    document.head.appendChild(style);

    if (technicalSection) {
      var cards = document.createElement("div");
      cards.className = "tech-project-grid";
      cards.innerHTML = projects.map(function (project) {
        return '<article class="leafcard tech-project-card"><a href="' + project.url + '" target="_blank" rel="noopener" aria-label="Open ' + project.title + '"><img src="' + project.image + '" alt="' + project.title + ' thumbnail" loading="lazy"></a><div class="tech-project-copy"><h4>' + project.title + '</h4><p>' + project.description + '</p><a class="tech-project-link" href="' + project.url + '" target="_blank" rel="noopener">Open project <span aria-hidden="true">↗</span></a></div></article>';
      }).join("");
      var oldCards = technicalSection.nextElementSibling;
      if (oldCards) oldCards.replaceWith(cards);
    }
  };
  document.head.appendChild(script);
})();
