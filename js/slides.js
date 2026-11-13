/* Written automatically by tools/make_slides.py. You can also leave this empty
   and list your slides by hand in SLIDES (js/data.js). */
const SLIDES_AUTO = [];

/* Add the computational-media projects after the portfolio has rendered. */
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
  var filters = document.getElementById("pfilters");
  var personal = panel && panel.querySelector('[data-g="personal"]');
  if (!panel || !filters || !personal) return;

  var escapeHtml = function (value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  };

  var filterButton = document.createElement("button");
  filterButton.type = "button";
  filterButton.setAttribute("data-group", "computational");
  filterButton.setAttribute("aria-pressed", "false");
  filterButton.textContent = "Computational projects";
  var studentButton = filters.querySelector('[data-group="student"]');
  filters.insertBefore(filterButton, studentButton ? studentButton.nextSibling : filters.firstChild);

  var section = document.createElement("section");
  section.className = "wrap block";
  section.setAttribute("data-g", "computational");
  section.innerHTML = '<h3 style="margin-bottom:1.2rem">Computational media projects</h3>' +
    '<div class="cards">' + projects.map(function (project) {
      var title = escapeHtml(project.title);
      return '<article class="leafcard cm-project-card">' +
        '<a class="cm-project-image" href="' + escapeHtml(project.url) + '" aria-label="Open project: ' + title + '">' +
          '<img src="' + escapeHtml(project.image) + '" alt="" loading="lazy">' +
        '</a>' +
        '<h4><a href="' + escapeHtml(project.url) + '">' + title + '</a></h4>' +
        '<p>' + escapeHtml(project.description) + '</p>' +
        '<a class="cm-project-open" href="' + escapeHtml(project.url) + '">Explore project <span aria-hidden="true">→</span></a>' +
      '</article>';
    }).join("") + '</div>';
  personal.parentNode.insertBefore(section, personal);

  filterButton.addEventListener("click", function () {
    filters.querySelectorAll("button").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button === filterButton));
    });
    panel.querySelectorAll("[data-g]").forEach(function (group) {
      group.hidden = group.getAttribute("data-g") !== "computational";
    });
  });
});
