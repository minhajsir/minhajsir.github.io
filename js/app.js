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
  };
  document.head.appendChild(script);
})();
