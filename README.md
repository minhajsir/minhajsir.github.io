# Dr. Minhaj Abdullah – Portfolio website

Plain HTML/CSS/JavaScript. No installs or build tools needed.

## Tabs
Minhaj · Research · Awards · Teaching · Projects · Gallery
(contact and social handles appear in the footer of every page)

## Folder layout
```
index.html          page shell
css/style.css       colours, fonts, layout
js/data.js          ALL your content: the file you will edit
js/vector.js        the leaf, laurel and icon artwork (drawn in code)
js/app.js           builds the tabs, charts, trees and flowcharts
images/minhaj.jpg   your portrait
images/art/         visual art images
images/films/       film posters
images/students/    student project images
notes/              teaching/research PDFs
```

## Adding content later (edit js/data.js)
- **Email:** fill `SITE.contact.email`.
- **Social handles:** in `SOCIALS`, fill `url` (and `handle`) for YouTube, Instagram, Medium, X. Empty ones stay hidden.
- **Film link / poster:** in `FILMS`, fill `link` and optionally `poster`.
- **Videos:** paste any YouTube link (youtu.be or youtube.com). It shows the video's thumbnail with a play button and plays on the page when clicked.
  - Films: `link` in `FILMS`.  Student videos: `link` inside `projects` of a group in `STUDENT_GROUPS`.  Extra videos: add to `VIDEOS`: `{ title, youtube: "https://youtu.be/...", note }`.
- **Online profiles:** edit `SOCIALS`. They appear in the footer, in the "Find my work elsewhere" strip, and as buttons on the Research, Awards, Teaching and Projects tabs.
- **Student projects:** add to the `projects` list inside each group of `STUDENT_GROUPS`.
- **Visual art:** copy the image to `images/art/`, then add an entry to `ART`.
- **Teaching / research notes:** copy the PDF to `notes/`, then add to `TEACHING_NOTES` or `RESEARCH_NOTES`.
- **New award:** add to `AWARDS`. The bar chart on the Awards tab updates itself.
- **New paper:** add to `JOURNALS`, `CHAPTERS` or `CONFERENCES`; the Research charts update. To place it in the research tree, add part of its title to a theme in `RESEARCH_THEMES`.

Keep a comma between entries; keep images under about 500 KB.

## Classroom slides (Teaching tab)
1. Make one folder per course inside `slides/`, e.g. `slides/Animation and VFX/`, and put your decks in it.
   Name files so they sort in teaching order: `01 Principles of animation.pdf`, `02 Timing and spacing.pdf`.
2. Run `python3 tools/make_slides.py` in the site folder. It rewrites `js/slides.js`; re-run it whenever you add slides.
   (No Python? List decks by hand in `SLIDES` in `js/data.js`, or send the file names to Claude.)
3. Upload the `slides` folder and `js/slides.js` to GitHub.
Tips: export decks to **PDF** (smaller, opens in the browser). GitHub's web upload allows 25 MB per file, so compress big images or link
large decks from Google Drive/Slides (set sharing to "Anyone with the link can view") and use that link as `link`.

## Classroom slides from Google Drive
The Teaching tab's "Classroom slides" segment reads the `SLIDES` list in `js/data.js` (one entry per PDF, grouped by course).
Each card shows a vector document icon, a Preview button (opens the deck in a pop-up) and an Open link.
To add a deck: copy its Drive link (`.../file/d/XXXX/view`) into the right course. Drive folder sharing must be
**Anyone with the link: Viewer** (never Editor) or visitors cannot see the files.

## Gallery (Google Drive images)
The Gallery tab shows every image in the `ART` list in `js/data.js` as a pinned photo on a wall. Each visit arranges
them differently and the **Shuffle the wall** button re-deals them. To add a new artwork:
1. Put the image in the Drive gallery folder (sharing: **Anyone with the link: Viewer**).
2. Right-click the image > Share > Copy link, and add a line to `ART`:
   `{ title: "My new painting", drive: "https://drive.google.com/file/d/XXXX/view", cat: "Painting" }`
   (`cat` is one of `Painting`, `Sketches`, `Digital & AI`, `Events & awards`; edit `GALLERY_CATS` to add your own.)
3. For the most reliable loading, you can instead copy the image into `images/art/` and use `src: "images/art/name.jpg"`.

## Preview on your computer
Double-click `index.html` (fonts need internet).

## Publish on GitHub Pages
1. Create a free account at github.com.
2. **+ > New repository**, name it `yourusername.github.io` (exact username), set to **Public**.
3. **Add file > Upload files**: unzip first, then drag in everything inside the `site` folder. **Commit changes**.
4. **Settings > Pages > Deploy from a branch > main > / (root) > Save**.
5. After 1–3 minutes, open `https://yourusername.github.io`.

To update later, upload a file with the same name; GitHub replaces it.
