# Generative Art Gallery

A small gallery of algorithmic artworks built with [p5.js](https://p5js.org/). Pick a piece, change the seed, and save the result as a PNG. Built as the first project of the B.Tech Computational Media course.

**Live demo:** `https://<your-username>.github.io/generative-art-gallery/`

## Artworks

| Piece | Idea | Concepts |
|---|---|---|
| Flow field | Particles follow angles taken from Perlin noise | noise, vectors, alpha blending |
| L-system tree | A string is rewritten by rules, then drawn by a "turtle" | grammars, recursion, stacks |
| Julia set | Fractal from iterating complex numbers; mouse changes the constant | complex numbers, pixel loops |

## Features

- Seeded randomness: the same seed always gives the same artwork
- Regenerate button and Save PNG button
- Responsive layout with automatic light and dark mode
- No build step and no dependencies to install (p5.js loads from a CDN)

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a repository named `generative-art-gallery` and push these files.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute your site is live at the URL above. Paste it into the **About** section of the repo.

## Add your own sketch

1. Write a function that returns a p5 instance-mode sketch, like `flowField(seed)` in `index.html`.
2. Use `p.randomSeed(seed)` and `p.noiseSeed(seed)` so it is reproducible.
3. Add an entry to the `SKETCHES` array with a name and a one-line description.

## Student exercises

- **Easy:** change the colour palette or particle count in the flow field.
- **Easy:** change the L-system rule or angle range and see how the tree changes.
- **Medium:** add a fourth sketch (spirograph, Voronoi, or Truchet tiles).
- **Medium:** add a slider that controls the number of L-system iterations.
- **Hard:** export a 4000 px print-quality version of any piece.

## Credits

- [p5.js](https://p5js.org/) (LGPL)
- L-system rule adapted from the classic "fractal plant" example in Lindenmayer's work

## License

MIT, see [LICENSE](LICENSE).
