# Game of Life Sonifier

Conway's Game of Life that you can hear. A playhead sweeps across the grid like a music sequencer, and every live cell it touches plays a note. Because the cells keep being born and dying, the music keeps evolving by itself. Built for the B.Tech Computational Media course.

**Live demo:** `https://<your-username>.github.io/life-sonifier/`

## How it maps cells to sound

| Grid | Sound |
|---|---|
| Column | Time step (sixteenth notes), played left to right |
| Row | Pitch: top rows are higher notes from the chosen scale |
| Live cell | A note that sounds when the playhead reaches its column |
| Evolution | Game of Life rules (B3/S23, wrapping edges) change the pattern as it plays |

## Features

- Draw cells with the mouse or finger; presets: Random, Glider, Acorn
- Scales: major pentatonic (Mohanam/Bhupali), minor pentatonic, Malkauns/Hindolam, Hamsadhwani, major, whole tone, in any key
- Sound options: waveform, tempo, and how often the pattern evolves (never, every 4 steps, every sweep, every 2 sweeps)
- Steady timing using the Web Audio look-ahead scheduler; a small echo and a limiter keep the sound pleasant
- At most 5 notes sound at once, so crowded columns never clip
- One HTML file, no libraries, no build step

## Run locally

Open `index.html` in a browser, or run `python -m http.server 8000`. Press **Play** first: browsers only allow sound after a click.

## Deploy on GitHub Pages

Push the files, then **Settings > Pages > Deploy from a branch > main, / (root)**.

## Student exercises

- **Easy:** add a new scale as a list of semitone steps.
- **Easy:** change the colours, or the number of rows and columns.
- **Medium:** add a "Record" button using `MediaRecorder` on a `MediaStreamDestination` node.
- **Medium:** make cell age control note length or volume.
- **Medium:** try other rules (HighLife is B36/S23) and compare how the music sounds.
- **Hard:** map the number of neighbours to pitch or to a second instrument, and let two playheads scan at different speeds.

## Teaching note

Ask students to explain, in one sentence each, why a "still life" sounds like a loop and why a glider sounds like a rising or falling line. Linking pattern behaviour to sound behaviour is the core idea.

## License

MIT, see [LICENSE](LICENSE).
