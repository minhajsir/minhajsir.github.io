# Heritage Hunt: Charminar and Golconda

A short puzzle game about two landmarks of Hyderabad. Each puzzle you solve unlocks facts that are saved in your "heritage journal". Built for the B.Tech Computational Media course.

**Live demo:** `https://<your-username>.github.io/heritage-hunt/`

## The three levels

| Level | Puzzle | What you learn |
|---|---|---|
| 1. Rebuild the Charminar | A 3 by 3 sliding-tile puzzle with a drawn Charminar | Who built it, why, and what it is made of |
| 2. Hunt in Golconda Fort | A hidden-object scene with five spots (with hints and a clap sound) | Diamonds, the Fateh Darwaza, the fort's size, Bala Hissar and the acoustics |
| 3. Put history in order | Arrange four events with arrows | A timeline from the Qutb Shahi dynasty to the 1889 clocks |

## Features

- 12 short facts, collected in a journal at the bottom of the page
- Sliding puzzle always starts solvable (it is shuffled by legal moves from the solved state)
- The clap spot in Level 2 plays a clap with a delayed echo, a nod to the fort's famous acoustics
- Works with mouse, touch and keyboard (tiles and arrows are real buttons)
- All artwork is drawn in SVG inside the single HTML file; no libraries or images to download

## Sources and accuracy

Facts come from public sources, including the Wikipedia pages for Charminar and Golconda, Telangana Tourism, and travel and heritage guides. Details vary between sources (for example the length of the 1687 siege and Charminar's height, which this game avoids), and some accounts, such as the plague story and the Koh-i-Noor's origin, are traditions rather than settled history. Where a fact is uncertain, the game says "many accounts", "traditionally" or "is said to". Please verify against Telangana Tourism and the Archaeological Survey of India before using the facts in teaching.

## Run locally

Open `index.html` in a browser, or run `python -m http.server 8000`.

## Deploy on GitHub Pages

Push the files, then **Settings > Pages > Deploy from a branch > main, / (root)**.

## Student exercises

- **Easy:** add a fact to `FACTS` and a new hidden spot to the Golconda scene.
- **Easy:** change the sliding puzzle to 4 by 4 (change the 3s and the `SOLVED` list).
- **Medium:** add a timer and a best-score saved in `localStorage`.
- **Medium:** add a Level 4 matching game that pairs monuments with facts.
- **Hard:** replace the drawn Charminar with a photograph the student has permission to use, and add a Telugu or Hindi language switch.

## Teaching note

Ask students to cite a second source for every fact and rewrite any uncertain fact with careful wording. Evaluating sources is as important as building the game.

## License

MIT, see [LICENSE](LICENSE).
