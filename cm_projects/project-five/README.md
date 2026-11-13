# Air Calligraphy

Write in the air with your index finger. A webcam tracks your hand in the browser; slow movements make thick brush strokes and quick flicks make thin ones. Turn on symmetry to draw rangoli-style patterns with 2 to 12 copies of every stroke. Built for the B.Tech Computational Media course.

**Live demo:** `https://<your-username>.github.io/air-calligraphy/`

## How it works

| Idea | How it is done |
|---|---|
| Hand tracking | MediaPipe Hand Landmarker (tasks-vision) finds 21 points on your hand in each video frame, all inside the browser |
| Pen up and down | Index finger out with the other three folded means draw; open hand or fist means lift. The pose must hold for 2 frames, which stops flicker |
| Smooth strokes | The fingertip position is smoothed, then curves are drawn between the midpoints of successive points, so shaky tracking becomes flowing lines |
| Pressure from speed | Finger speed (pixels per millisecond) is smoothed and mapped to width: slow is thick, fast is thin, like a real brush |
| Symmetry | Every curve is rotated around the centre of the canvas N times, and can also be mirrored |

## Features

- Hand mode (webcam) and mouse or touch mode, so it works without a camera too
- Symmetry: off, 2, 4, 6, 8 or 12-fold, with an optional mirror for kaleidoscope patterns
- Brush size and pressure-effect sliders, five colours plus rainbow ink, cream or night paper
- Undo, clear, and Save PNG
- Camera pictures stay in your browser and are never uploaded. The hand-tracking code and model are downloaded from jsDelivr and Google storage

## Run locally

The camera needs a secure page, so open it through a local server rather than a file: `python -m http.server 8000`, then visit http://localhost:8000. It also works on GitHub Pages.

## Deploy on GitHub Pages

Push the files, then **Settings > Pages > Deploy from a branch > main, / (root)**.

## Troubleshooting

- **The camera does not start:** allow camera access in the browser, and use https or localhost. Mouse mode keeps working.
- **Strokes lag or jump:** improve the lighting, keep your hand fully in view, and close other camera apps.
- **Pen lifts by accident:** hold your fingers clearly folded, and keep your palm facing the camera.

## Student exercises

- **Easy:** add colours, or change the maximum and minimum brush width.
- **Easy:** change the gesture, for example pinch (thumb tip and index tip close) to draw.
- **Medium:** add a calligraphy "nib angle" so strokes are thicker in one direction.
- **Medium:** add a gesture to clear the canvas, such as a closed fist held for two seconds.
- **Hard:** record each stroke as data, then replay the drawing as an animation or export it as SVG.

## Teaching note

Ask students to plot finger speed against stroke width and explain why they chose the mapping. Compare the effect of raw tracking with the smoothed path, to show why filtering matters in sensor-driven art.

## License

MIT, see [LICENSE](LICENSE).
