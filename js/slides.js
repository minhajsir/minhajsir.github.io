/* Written automatically by tools/make_slides.py. You can also leave this empty
   and list your slides by hand in SLIDES (js/data.js). */
const SLIDES_AUTO = [];

/* Computational-media projects displayed in the Projects panel. */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var projects = [
    {
      title: "Rangoli and Kolam Generator",
      description: "Generate symmetric, seed-based rangoli and kolam-inspired patterns and download them as print-ready SVGs.",
      image: "cm_projects/project-one/thumbnail.png",
      url: "cm_projects/project-one/index.html"
    },
    {
      title: "Hyderabad Sky: data-driven art",
      description: "Explore live artworks shaped by Hyderabad weather and air-quality data.",
      image: "cm_projects/project-two/thumbnail.png",
      url: "cm_projects/project-two/index.html"
    },
    {
      title: "Game of Life Sonifier",
      description: "Draw Conway’s Game of Life patterns and hear live cells become a musical sequence.",
      image: "cm_projects/project-three/thumbnail.png",
      url: "cm_projects/project-three/index.html"
    },
    {
      title: "Heritage Hunt: Charminar and Golconda",
      description: "Solve interactive puzzles and uncover facts about two Hyderabad landmarks.",
      image: "cm_projects/project-four/thumbnail.png",
      url: "cm_projects/project-four/index.html"
    },
    {
      title: "Air Calligraphy",
      description: "Create expressive, symmetrical drawings with hand-tracking or mouse and touch controls.",
      image: "cm_projects/project-five/thumbnail.png",
      url: "cm_projects/project-five/index.html"
    },
    {
      title: "Generative Art Gallery",
      description: "Make reproducible flow fields, L-system trees and Julia sets, then save the artworks as PNGs.",
      image: "cm_projects/project-six/thumbnail.png",
      url: "cm_projects/project-six/index.html"
    }
  ];

  var panel = document.getElementById("p-projects");
  if (!panel) return;

  var filters = document.getElementById("pfilters");
  var student = panel.querySelector('[data-g="student"]');
  if (!filters || !student) return;

  var escapeHtml = function (value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  };

  var computational = panel.querySelector('[data-g="computational"]');
  if (!computational) {
    computational = document.createElement("section");
    computational.className = "wrap block cm-projects-section";
    computational.setAttribute("data-g", "computational");
    computational.innerHTML = '<h3>Computational media projects</h3>' +
      '<div class="cards cm-projects-grid">' + projects.map(function (project) {
        var title = escapeHtml(project.title);
        var url = escapeHtml(project.url);
        return '<article class="leafcard cm-project-card">' +
          '<a class="cm-project-image" href="' + url + '" aria-label="Open project: ' + title + '">' +
            '<img src="' + escapeHtml(project.image) + '" alt="" loading="lazy">' +
          '</a>' +
          '<div class="cm-project-copy"><h4><a href="' + url + '">' + title + '</a></h4>' +
          '<p>' + escapeHtml(project.description) + '</p>' +
          '<a class="cm-project-open" href="' + url + '">Explore project <span aria-hidden="true">→</span></a></div>' +
        '</article>';
      }).join("") + '</div>';
    student.parentNode.insertBefore(computational, student.nextSibling);
  }

  /* Keep the project filter focused on the two available views. */
  filters.innerHTML =
    '<button type="button" data-group="student" aria-pressed="true">Student work</button>' +
    '<button type="button" data-group="computational" aria-pressed="false">Computational projects</button>';

  /* Start with student work visible; selecting a filter shows that view only. */
  computational.hidden = true;
  filters.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function () {
      var selected = button.getAttribute("data-group");
      filters.querySelectorAll("button").forEach(function (item) {
        item.setAttribute("aria-pressed", String(item === button));
      });
      student.hidden = selected !== "student";
      computational.hidden = selected !== "computational";
    });
  });

  /* Match the portfolio's paper, foliage, rounded-card visual language. */
  var style = document.createElement("style");
  style.textContent =
    '.cm-projects-section > h3{font-size:clamp(1.6rem,3vw,2.2rem);margin-bottom:1.2rem}' +
    '.cm-projects-grid{grid-template-columns:repeat(auto-fill,minmax(260px,1fr));align-items:stretch}' +
    '.cm-project-card{display:flex;flex-direction:column;gap:.8rem;padding:1rem;background:#fff;border-radius:26px 6px 26px 6px;transition:transform .25s,border-color .25s}' +
    '.cm-project-card:hover{transform:translateY(-4px);border-color:var(--leaf-4)}' +
    '.cm-project-image{display:block;aspect-ratio:16/9;overflow:hidden;border-radius:20px 5px 20px 5px;background:var(--leaf-1)}' +
    '.cm-project-image img{width:100%;height:100%;object-fit:cover;transition:transform .4s}' +
    '.cm-project-card:hover .cm-project-image img{transform:scale(1.035)}' +
    '.cm-project-copy{display:flex;flex:1;flex-direction:column;align-items:flex-start}' +
    '.cm-project-copy h4{font-size:1.25rem;margin:.1rem 0 .45rem}' +
    '.cm-project-copy h4 a{color:var(--forest);text-decoration:none}' +
    '.cm-project-copy h4 a:hover{text-decoration:underline;text-decoration-color:var(--leaf-3)}' +
    '.cm-project-copy p{color:var(--muted);font-size:.98rem;line-height:1.5;margin:0 0 1rem}' +
    '.cm-project-open{margin-top:auto;display:inline-flex;align-items:center;gap:.4rem;font-weight:600;text-decoration:none}' +
    '.cm-project-open span{transition:transform .2s}' +
    '.cm-project-open:hover span{transform:translateX(3px)}' +
    '@media(prefers-reduced-motion:reduce){.cm-project-card,.cm-project-image img,.cm-project-open span{transition:none}}';
  document.head.appendChild(style);
});
