# Rangoli and Kolam Generator

Generate symmetric rangoli and kolam-inspired patterns from a seed number, then download them as print-ready SVG files. Built for the B.Tech Computational Media course.

**Live demo:** `https://<your-username>.github.io/rangoli-kolam-generator/`

## Features

- **Rangoli mode:** radial mandalas with 6, 8, 10, 12 or 16-fold rotational symmetry
- **Kolam-inspired mode:** dot-grid (pulli) designs with 4-fold or 8-fold mirror symmetry
- Seeded randomness: the same seed always gives the same pattern
- Five colour palettes, including a black-on-white "Ink on paper" option for printing
- **Download SVG** at 200 mm by 200 mm; it scales to any print size without losing quality
- One HTML file, no libraries, no build step

## How it works

1. A seeded random generator (mulberry32) makes the choices, so patterns are repeatable.
2. **Rangoli:** for each ring, one shape (petal, teardrop, dot, scallop, diamond or spoke) is chosen, then rotated N times around the centre.
3. **Kolam:** one quadrant (or one octant) of a dot grid is designed, then mirrored with SVG transforms.
4. The result is plain SVG text, so it can be saved, edited in Inkscape or printed.

## Run locally

Open `index.html` in a browser, or run `python -m http.server 8000` and visit http://localhost:8000.

## Deploy on GitHub Pages

Push the files, then go to **Settings > Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.

## Student exercises

- **Easy:** add a new palette or a new petal shape to `rangoli()`.
- **Easy:** change the number of rings or the ring spacing.
- **Medium:** add a "Download PNG" button by drawing the SVG onto a canvas.
- **Medium:** add a symmetry guide that shows the mirror lines on screen.
- **Hard:** generate a continuous-loop sikku kolam that wraps around the dots in one unbroken line.

## Cultural note

Rangoli and kolam are living traditions with regional styles and meanings. This project is an algorithmic study inspired by their geometry, not a replacement for traditional practice. Invite family members or local artists to critique your designs.

## License

MIT, see [LICENSE](LICENSE).
