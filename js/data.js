/* =====================================================================
   YOUR PORTFOLIO CONTENT
   Everything on the website comes from this file. To add a film, a video,
   a student project or an artwork, copy one of the entries, paste it below
   the last one (keep the comma between entries) and change the text.
   Empty text ("") is fine: the site simply leaves that part out.
   ===================================================================== */

const SITE = {
  name: "Dr. Minhaj Abdullah",
  shortName: "Minhaj Abdullah",
  role: "Assistant Professor of Animation, VFX, AI & Computational Media",
  org: "School of Digital Media and Communication, Mahindra University, Hyderabad",
  lede: "I teach, research and direct films where animation meets generative AI and immersive media, after twenty years in studios and classrooms.",

  about: [
    "I am an Assistant Professor at the School of Digital Media and Communication, Mahindra University. I teach Animation & VFX, Computer Graphics, Generative AI, Computational Media and AR/VR, and I run the AR/VR & Unreal Engine Laboratory.",
    "Before academia I worked in production. As head of a digital film unit I wrote and directed 250 short films and six web series, and I supervised animation teams for clients in India and the USA. My AI-driven and immersive films have won recognition at national and international festivals.",
    "I also write: peer-reviewed papers, Scopus-indexed book chapters on AI, AR/VR and digital-twin education, and textbooks for NCERT and commercial publishers."
  ],

  competencies: [
    "Academic leadership and curriculum design",
    "Animation and VFX pedagogy",
    "Generative AI in education",
    "AR / VR / XR and Unreal Engine",
    "Computational media and computer graphics",
    "Research and Scopus publications",
    "Student mentorship and portfolio development",
    "Film direction and production",
    "Industry-academia partnerships",
    "Digital content and lab management"
  ],

  headline: "Growing stories, one frame at a time.",

  contact: {
    email: "",                       // add your email, e.g. "name@example.com"
    location: "Hyderabad, India"
  }
};

/* ---------- SOCIAL HANDLES (shown in the footer of every page) ----------
   Fill in the url (and optionally the handle text). Empty ones stay hidden. */
const SOCIALS = [
  { name: "faculty",   label: "Faculty page", handle: "Mahindra University", url: "https://www.mahindrauniversity.edu.in/faculty/minhaj-abdullah/" },
  { name: "linkedin",  label: "LinkedIn",     handle: "LinkedIn",            url: "https://in.linkedin.com/in/minhajabdullah" },
  { name: "scholar",   label: "Google Scholar", handle: "Google Scholar",    url: "https://scholar.google.com/citations?user=AI7XAYkAAAAJ&hl=en" },
  { name: "igi",       label: "IGI Global",   handle: "IGI Global",          url: "https://www.igi-global.com/affiliate/minhaj-abdullah/519321" },
  { name: "imdb",      label: "IMDb",         handle: "IMDb",                url: "https://www.imdb.com/name/nm9855530/" },
  { name: "udemy",     label: "Udemy",        handle: "Udemy",               url: "https://www.udemy.com/user/minhajabdullah/" },
  { name: "instagram", label: "Instagram",    handle: "@filminhaj",          url: "https://www.instagram.com/filminhaj/" },
  { name: "youtube",   label: "YouTube",      handle: "", url: "" },
  { name: "medium",    label: "Medium",       handle: "", url: "" }
];

/* ---------- FILMS (title cards on the Films & Awards tab) ----------
   link   = where to watch (YouTube / Vimeo / festival page)
   poster = optional image, e.g. "images/films/uncertainty.jpg"            */
const FILMS = [
  { title: "Uncertainty", year: "2025", kind: "AI short film",
    note: "Best Short Film, Satyajit Ritwik Mrinal International Kolkata Film Festival.",
    link: "https://youtu.be/UWX7Y7XvnHI", poster: "" },
  { title: "Story of an Angel", year: "2026", kind: "Film",
    note: "Official selection, 5th Jammu Film Festival.",
    link: "https://youtu.be/MWEK7y_cWcs", poster: "" },
  { title: "The Gallery", year: "", kind: "Short film",
    note: "",
    link: "https://youtu.be/lg8ugB-jF88", poster: "" },
  { title: "Waalid", year: "2016", kind: "Film",
    note: "Special Jury Mention, Rajasthan Film Festival.",
    link: "https://www.youtube.com/watch?v=xufLaS0mWo8", poster: "" },
  { title: "Animated short film", year: "", kind: "Animated short film",
    note: "",
    link: "https://youtu.be/Ke0dthlORdc", poster: "" }
];

/* ---------- AWARDS & HONOURS ----------
   type: "award" (wins, runner-up, mentions)
         "selection" (official selections, screenings)
         "academic" (teaching awards, jury work, student wins)
   year: leave "" for items without a year (they appear under "Earlier")
   featured: true shows the item on the Home tab                           */
const AWARDS = [
  { year: "2026", type: "selection", featured: true,
    title: "Official screening",
    org: "5th Jammu Film Festival",
    film: "Uncertainty and Story of an Angel" },

  { year: "2025", type: "award", featured: true,
    title: "Best Short Film",
    org: "Satyajit Ritwik Mrinal International Kolkata Film Festival",
    film: "Uncertainty (AI short film)" },
  { year: "2025", type: "award",
    title: "Runner-up, Category B (Short Film 5–10 min)",
    org: "Frame for Change Film Festival, organised by Cinema for a Cause & Lifeplus Enterprises" },
  { year: "2025", type: "award",
    title: "Best in UPES Award",
    org: "Chalchitra International Film Festival" },
  { year: "2025", type: "award",
    title: "Best Short Film Award",
    org: "Wallet Film Festival" },
  { year: "2025", type: "award",
    title: "Winner, Nepal Wings International Critics Award",
    org: "" },
  { year: "2025", type: "award",
    title: "Best Short Film",
    org: "International LTUE Film Festival" },
  { year: "2025", type: "award",
    title: "Honourable Mention",
    org: "5th Cinema-King International Film Festival" },
  { year: "2025", type: "award", featured: true,
    title: "Winner, Best Short Film",
    org: "Film Fiesta National Award" },
  { year: "2025", type: "award",
    title: "Best Short Film",
    org: "Santiago International Film Festival" },

  { year: "2024", type: "selection",
    title: "Official selections",
    org: "Mumbai Independent Film Festival; Cinema of the World; Video Tape Short Film Festival" },
  { year: "2024", type: "award",
    title: "Best Short Film Award",
    org: "Divine Cinema International" },

  { year: "2022", type: "academic", featured: true,
    title: "Golden Pixels Award for Animation Teaching",
    org: "AVGC & MES Society, Pune" },

  { year: "2020", type: "academic",
    title: "Best Animation Faculty",
    org: "VEDA EDU, Pune" },
  { year: "2020", type: "academic",
    title: "Jury member",
    org: "Spandan Festival (Vaishnav University); Srijan (LNCT Group, Bhopal); portfolio assessments (Makhanlal Chaturvedi University)" },

  { year: "2016", type: "award",
    title: "Special Jury Mention",
    org: "Rajasthan Film Festival",
    film: "Waalid" },

  { year: "2015", type: "award",
    title: "Winner, Contribution in Social Media Achievement",
    org: "The Manthan Award, South Asia (DEF)",
    film: "CHAISTORIES" },

  { year: "2006", type: "academic",
    title: "ASIFA Award and nomination at 24 FPS",
    org: "Student team under my supervision",
    film: "Iqbal" },

  { year: "", type: "award",
    title: "Best Child Artist (direction)",
    org: "Kolkata International Short Film Festival" },
  { year: "", type: "selection",
    title: "Official selections",
    org: "Mumbai International Film Festival; Cinibees Film Award, Bangalore; Cinefone International Film Festival, Spain; Pocket Films, Mumbai. Featured on NDTV Prime Talkies." },
  { year: "", type: "award",
    title: "International nominations",
    org: "Edward Contest, Germany (10th position); Animate 2005, SS Music, Chennai; Seagate Technical Awards 2004" }
];

/* ---------- VISUAL ART ----------
   Put images in images/art/ and list them here (keep each under 500 KB).  */
const GALLERY_FOLDER = "https://drive.google.com/drive/folders/1H1tYogDrgnjUSsnceLWEhJyCnLJxKZ8g";

/* ---------- VISUAL ART / GALLERY ----------
   drive: paste the Google Drive share link of the image (or just its file ID). The page builds the picture from it.
   src:   or use a file in this site instead, e.g. "images/art/work-01.jpg" (fastest and most reliable).
   cat:   one of the GALLERY_CATS below; it drives the filter buttons. Keep each Drive image set to "Anyone with the link: Viewer". */
const GALLERY_CATS = ["Painting", "Sketches", "Digital & AI", "Events & awards"];
const ART = [
  { title: "Digital painting 1", drive: "1W5qtaAX6gSZxhVhTt7VzfN8VNrYTzmzF", cat: "Painting", year: "", medium: "", caption: "" },
  { title: "Digital painting 2", drive: "13w6xgaeqbBiktciQdUgaFq8HWIPoF7J1", cat: "Painting", year: "", medium: "", caption: "" },
  { title: "Digital painting 3", drive: "1UX0RxEogVuqJqrPH-wjaBfBpz-OwX5_Y", cat: "Painting", year: "", medium: "", caption: "" },
  { title: "Digital painting 4", drive: "116kEQsUAL39YtVcF-z64XAsyJ8fI4Osx", cat: "Painting", year: "", medium: "", caption: "" },
  { title: "Digital painting 5", drive: "1AJyg9ahSbB925J10CKiHfxjV1DSn6blh", cat: "Painting", year: "", medium: "", caption: "" },
  { title: "Digital painting 6", drive: "1za_DCQX00AbhTmNmsF8GPZCK0JohT7AJ", cat: "Painting", year: "", medium: "", caption: "" },
  { title: "Minhaj art 1", drive: "1u0vE92d9dwZ43u6BB_Gq8BM_Nuspjdyz", cat: "Painting", year: "", medium: "", caption: "" },
  { title: "Minhaj art 2", drive: "1Jo2pEePO_8-8Fp9JP46TsmBamwyIPX2_", cat: "Painting", year: "", medium: "", caption: "" },
  { title: "Minhaj art 3", drive: "1rQoFBxJL7tUpO92-pZogY9-haBWP1BAS", cat: "Painting", year: "", medium: "", caption: "" },
  { title: "Artwork", drive: "1hexaBviyO5hOXmm9rXRD1RL9jp9scD0g", cat: "Painting", year: "", medium: "", caption: "" },
  { title: "Sketch 1", drive: "1JSL52XbAsYdwgI-QLRZNo9v08GE68n1g", cat: "Sketches", year: "", medium: "", caption: "" },
  { title: "Sketch 2", drive: "1dNBiyjdaz8vUybA_qghN7gMKuXFNG6NT", cat: "Sketches", year: "", medium: "", caption: "" },
  { title: "Sketch 3", drive: "104OwU55HicImZtZ8YCZZhgMm_eT2pGyv", cat: "Sketches", year: "", medium: "", caption: "" },
  { title: "Sketch 4", drive: "1uZXSE2gQnDeiR9P9bx93DvKTpc2i-WJy", cat: "Sketches", year: "", medium: "", caption: "" },
  { title: "Sketch 5", drive: "1b_5k-Rqn60HnbT4gqFebc6WwgbyY9hpo", cat: "Sketches", year: "", medium: "", caption: "" },
  { title: "AI poster", drive: "1hcKrDpovBpPinEvlxj4LL9X809iaS3OF", cat: "Digital & AI", year: "", medium: "", caption: "" },
  { title: "Sketch to AI", drive: "14JdHJUUklGI4jPEo3VM1NJ47TS4OFHoZ", cat: "Digital & AI", year: "", medium: "", caption: "" },
  { title: "Digital artwork 2", drive: "1hAHJN5pazex9FOSXsfxvrGaiaPCgn_Rw", cat: "Digital & AI", year: "", medium: "", caption: "" },
  { title: "Digital artwork 4", drive: "1OlvqBYeVxoOk5uwFcmvfQQ-ZauZrw67B", cat: "Digital & AI", year: "", medium: "", caption: "" },
  { title: "Digital artwork 5", drive: "1bWWIlCQAnrcSxLnSoG9_VAiiaPs51aaC", cat: "Digital & AI", year: "", medium: "", caption: "" },
  { title: "Digital artwork 7", drive: "1fSfzRxQdYfbj8X3ypwiZ-pMah2w4i8Ra", cat: "Digital & AI", year: "", medium: "", caption: "" },
  { title: "Digital artwork 8", drive: "1kyDAodjC66UXybyZc-YLkyd8sSvXDqgt", cat: "Digital & AI", year: "", medium: "", caption: "" },
  { title: "Digital artwork 9", drive: "1VvDf1ZnPkrjQenusv1BHMeTHsJ-1Oahd", cat: "Digital & AI", year: "", medium: "", caption: "" },
  { title: "Digital artwork 10", drive: "1ORA8Tl7g12SD-nLUCS2r5xhvsctwpbWb", cat: "Digital & AI", year: "", medium: "", caption: "" },
  { title: "Panel discussion", drive: "1VwEqEGIBGRK0qVVO1oz2FlYc85gU6kXc", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Panel discussion 2", drive: "1JC69kx4TkjX6OMotU9zdNwoHMuT9xVPB", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Panel discussion 3", drive: "1dFCquRQDXW_UoOafpZij-rwNbWuI180H", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Media production", drive: "1vsVXAGKI5a4DCNFh1XXtGW7wZWH6y96Y", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Magazine launch", drive: "1-S8N730NHLkdfpQkAkgZJZOWWfFmA-KY", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Film award at UPES", drive: "1NtcMp6cU_AlNdvc6IPpAoTSN4eSs23sO", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Film award at UPES 2", drive: "1QSLkwnC7GHkrpcBOvTZWhoQXwOX8FM3T", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Winner", drive: "1AuG-j7-809kmWZ3O5fsMVR6QyjpzClCg", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Award", drive: "1Yr4_0bkCLYG4IxgpZ0wC3-l8Ei-5yLjB", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Award at Pune", drive: "1keBg2idBVGtnDmr9c_4r-4RbND1pjHI7", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "In the classroom", drive: "1pBoZjWNU7as5lkdP_YQzBIdvadaIgqiT", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Public performance", drive: "1G2g0VWkGrveDnurcOu8Hbz80unHfwzFl", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Workshop", drive: "1aHdwFwtPk253sA9cgkaUVdvxdEu1r1Yp", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "TV news", drive: "1LVb_nRWbcdit8Nc6buwFlGGIx7xLACB1", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "PhD group", drive: "1WOmh-p32zcXT9xx2KeUC7os50Dq_nycQ", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Event photo 1", drive: "1cwodz_Q675qp59FRMAqKLjN8sBmF79at", cat: "Events & awards", year: "", medium: "", caption: "" },
  { title: "Event photo 2", drive: "1XeNi410MQxoleMILX48FfmSQ_PA6HKkn", cat: "Events & awards", year: "", medium: "", caption: "" }
];

const ART_MEDIUMS = [
  "Digital and matte painting", "Character and perspective sketching", "Vector design",
  "Storyboarding", "Photography", "Clay, stop-motion and classical animation"
];

/* ---------- VIDEOS ----------
   youtube: paste a full YouTube or Vimeo link, or just the YouTube video ID. */
const VIDEOS = [
  // { title: "Showreel", youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX", note: "Short description" },
];

/* ---------- TEACHING ---------- */
const COURSES = [
  "Animation and Visual Effects", "Media Production", "Computational Media",
  "Visual Art and Design Thinking", "Generative AI", "Computer Graphics",
  "Augmented and Virtual Reality", "Metaverse, AR, VR and MR", "Data Storytelling",
  "Generative AI for Media", "C++ and Python programming"
];

const TEXTBOOKS = [
  { title: "Storyboard Artist, NCERT Textbook, Class 9", meta: "NCERT / PSSCIVE",
    link: "https://www.psscive.ac.in/storage/uploads/textbooks/pdf/english/story-board-artist-english-class-9.pdf" },
  { title: "Animation and Graphics", meta: "Textbook",
    link: "https://www.flipkart.com/textbook-animation-graphics/p/itmead0dd060fd05?pid=9789357576185" },
  { title: "Learn Generative AI: From Concepts to Projects", meta: "Textbook",
    link: "https://www.flipkart.com/learn-generative-ai-concepts-projects/p/itm4fd07ad682312?pid=9789366749600" },
  { title: "Storyboarding, Class 9 and 10 (co-writer)", meta: "NCERT / Pandit Sunder Lal Sharma Central Institute of Vocational Education",
    link: "" }
];

const MOOCS = [
  { title: "Complete 2D Animation Course in Hindi - One Go", platform: "Skillsiya", link: "https://www.skillsiya.com/courses/2DAnimation-618ea8400cf2ebf56fb2d4c5" },
  { title: "Complete 3D Animation Mastery Course in Maya", platform: "Skillsiya", link: "https://www.skillsiya.com/courses/3D-Animation-Mastery-in-Maya-64200ae1e4b0b9b4b1a8e854" },
  { title: "The Complete Motion Graphics Course In Hindi", platform: "Skillsiya", link: "https://www.skillsiya.com/courses/The-Complete-Motion-Graphic-Course-In-Hindi-629ed1150cf216084788c769" },
  { title: "Master AI Video Generation", platform: "Tutedude", link: "https://www.tutedude.com/category/aivideogen" },
  { title: "DaVinci Resolve Expert", platform: "Tutedude", link: "https://www.tutedude.com/category/davinciresolve" },
  { title: "VN Mobile Video Editing Expert", platform: "Tutedude", link: "https://www.tutedude.com/category/vnvideoediting" },
  { title: "Learn Adobe Illustrator", platform: "Udemy", link: "https://www.udemy.com/course/learn-adobe-illustrator-from-basics-to-professional-artist/" },
  { title: "Learn After Effects", platform: "Udemy", link: "https://www.udemy.com/course/visual-effects-with-adobe-aftereffects-basics-to-advance/" },
  { title: "3D Modeling & Sculpting in Autodesk Mudbox", platform: "Proalley", link: "https://www.proalley.com/course/3d-modelling-and-sculpting-with-autodesk-mudbox-training-course" },
  { title: "Lighting Essentials in Autodesk Maya", platform: "Proalley", link: "https://www.proalley.com/course/autodesk-maya-lighting-training-course" }
];

/* ---------- CLASSROOM SLIDES ----------
   Easiest: drop files into slides/<Course name>/ and run  python3 tools/make_slides.py
   Or list them by hand. `link` can be a file in this site (slides/...) or any web link
   such as a Google Slides share link.                                                   */
const SLIDES_FOLDER = "https://drive.google.com/drive/folders/11RMWRWiHlIT3553uUD7PJtGIy2pXrR4h";
const SLIDES = [
  { course: "Computational Media", decks: [
      { title: "Welcome to Python", link: "https://drive.google.com/file/d/1m3SS58PuSkWgwqkYEvONAfUOP2-a2eDr/view", note: "" },
      { title: "Learn Python", link: "https://drive.google.com/file/d/1wb7P67FlYmem0PWR3YzHMijmqRnPi7UW/view", note: "" },
      { title: "OOP and C++ course deck", link: "https://drive.google.com/file/d/1YtiBNCPYVLWMv2sDlTKymSZ38hY2LeKk/view", note: "" },
      { title: "Design thinking", link: "https://drive.google.com/file/d/18x0logvFH6OESJ0yRenLExI4R7mOe0Hy/view", note: "" },
      { title: "Design thinking use cases", link: "https://drive.google.com/file/d/1rFiGpqbmYdpeaAwCwmxixNyTNEn794oN/view", note: "" },
      { title: "Character sketch", link: "https://drive.google.com/file/d/14AHOAJ_pxSqkior8iRErDTYGm8nAvga7/view", note: "" },
      { title: "Character select", link: "https://drive.google.com/file/d/186PpPkYqFQT--xgagt_8Je9zyF8s7pgN/view", note: "" },
      { title: "Cognitive semiotics", link: "https://drive.google.com/file/d/18DCpCuxWQWqO8c8LQwzaKuagU4Ssl4Dc/view", note: "" },
      { title: "Financial freedom infographic", link: "https://drive.google.com/file/d/1rLShYkE0gqKcnYmKIxXwXizXPldSeL3_/view", note: "" }
  ] },
  { course: "Computer Graphics", decks: [
      { title: "Concepts", link: "https://drive.google.com/file/d/1QaUxgshcvLDLoScyab52Nvi9nAc2y_vs/view", note: "" },
      { title: "Computer graphics in media: concepts and applications", link: "https://drive.google.com/file/d/1K6-wbHDpVn5L2gRRmbGMcKsXNKCZeIGA/view", note: "" },
      { title: "SCAMPER", link: "https://drive.google.com/file/d/1dikdrHjuvpYDqvm7iDFvez6NbkeFdQrI/view", note: "" }
  ] },
  { course: "Game Design", decks: [
      { title: "Fundamentals", link: "https://drive.google.com/file/d/1AkYGUI-fE-0pmlvsch6TUVHUhrCW2Ohq/view", note: "" },
      { title: "The character design pipeline", link: "https://drive.google.com/file/d/19-x8yQyn7pNLTddhJhwGvO57ottP7JA-/view", note: "" },
      { title: "Game character", link: "https://drive.google.com/file/d/1WM5i9mC0_3d371Hm32lI7RIlnGAEg2EQ/view", note: "" },
      { title: "Game characters (final)", link: "https://drive.google.com/file/d/1Lx9X2CuCkDXDd8km8ilIKL79iEwOBYbX/view", note: "" },
      { title: "Intro to Unreal Engine", link: "https://drive.google.com/file/d/1916IYF2JJNGNNhjRsjX9kTJVDDiuh5te/view", note: "" }
  ] },
  { course: "Generative AI", decks: [
      { title: "Intro to AI tools", link: "https://drive.google.com/file/d/1ZniNwRVgJ8OBdIMJ1-Jqvx5gya1atZY-/view", note: "" }
  ] },
  { course: "Media Production", decks: [
      { title: "Media production", link: "https://drive.google.com/file/d/1oCbmRLc0kzvbKa0MvTgPiGgZkiKtXbXF/view", note: "" },
      { title: "Cinema grammar", link: "https://drive.google.com/file/d/1KBw0NnO3D0GBh8lsrzQ5WX3hLmZ9iRd3/view", note: "" },
      { title: "Script to screen", link: "https://drive.google.com/file/d/124VNW5X8zbgoDeY1xOwZlWF5wxNJEdkg/view", note: "" },
      { title: "Story club", link: "https://drive.google.com/file/d/1iFvKpoNAVt98ZHb2sw2YIm0BAmL4s7jP/view", note: "" },
      { title: "The Gallery", link: "https://drive.google.com/file/d/1y_qrdrFhC2U5N7e_5iaJrm39A_Zv3zeP/view", note: "" }
  ] },
  { course: "Media Psychology", decks: [
      { title: "Introduction", link: "https://drive.google.com/file/d/1vH-h1PtF3F6QSj0Yk03ual1GbTVSrgcJ/view", note: "" },
      { title: "Media effects theories", link: "https://drive.google.com/file/d/1RYDcvbRwslVbeAXIRU59RepO7feBnwau/view", note: "" },
      { title: "Media and identity formation", link: "https://drive.google.com/file/d/1kwBMz3Q9DcFIF3150290aqc6u0g2BysL/view", note: "" },
      { title: "Reimagining media through technology", link: "https://drive.google.com/file/d/1mPo0xZZ3e0KZCbJNh_B9c4QTwViTUwJX/view", note: "" }
  ] },
  { course: "Research Methodology", decks: [
      { title: "Introduction", link: "https://drive.google.com/file/d/1zw_w_oPMXUHw84H4IXk54KMF4jMKLAQl/view", note: "" },
      { title: "Class docket", link: "https://drive.google.com/file/d/1tjqDSLS9K845Xv8h2W8P8iMOfyTrckCj/view", note: "" },
      { title: "Research design blueprint", link: "https://drive.google.com/file/d/1pqBLw1EQUE4Z2cTsWbUac2ea88GJb6Mk/view", note: "" },
      { title: "Qualitative research types", link: "https://drive.google.com/file/d/10CSsb3AtIhLO9lflPjN8HfQwscMRkKhZ/view", note: "" },
      { title: "Introduction to quantitative research design", link: "https://drive.google.com/file/d/1vHLvzVqXNxXqyBgC97Y1zgsbBBKOntJd/view", note: "" },
      { title: "Conducting descriptive research", link: "https://drive.google.com/file/d/1PmaHUzJTQ3ycb6uxAeiZx0NGjtZk_0p1/view", note: "" },
      { title: "Descriptive research, chapter 3", link: "https://drive.google.com/file/d/1qY7COV8jMDFnme8qk32UxPPoh313R5nB/view", note: "" },
      { title: "HTEST", link: "https://drive.google.com/file/d/1DJjFiaPy-yssiqqeCVHHaw6XET5h3YLO/view", note: "" },
      { title: "What is SPSS", link: "https://drive.google.com/file/d/1p7N9mFj9lGFxVdVZCz0MlZyGHgepkG9Z/view", note: "" }
  ] },
  { course: "User-Centered Design", decks: [
      { title: "Principles, processes and examples", link: "https://drive.google.com/file/d/18wIBsBFY9fOR8VZHcw7WUdetnsRiJpYB/view", note: "" },
      { title: "Strategic motion design", link: "https://drive.google.com/file/d/1quSsZqFJCKHYB4ACdc6WwVtYi_Wa5APp/view", note: "" },
      { title: "Cognitive semiotics", link: "https://drive.google.com/file/d/1n2A2eOj8AtPyWSNeC1CwPASyLmmfp-NR/view", note: "" },
      { title: "Editor's desk newsroom gamification concept", link: "https://drive.google.com/file/d/1vwxprg-heCsm4D5lcxfIeurNgxY7A0Xl/view", note: "" }
  ] },
  { course: "Optimization Techniques", decks: [
      { title: "For computational media 1", link: "https://drive.google.com/file/d/1vm5SmBSZS4fVugFWJUsb942jiPHY-Lhc/view", note: "" },
      { title: "For computational media 2", link: "https://drive.google.com/file/d/1e-e0DSjF12V8XvZ-haBYUocgyktyLBVJ/view", note: "" },
      { title: "For computational media 3", link: "https://drive.google.com/file/d/189xUy-KB6QkUyddgi9iQR5GpipaKixY5/view", note: "" },
      { title: "For graphic design", link: "https://drive.google.com/file/d/1PIRoyX0mhFaL4kZPHeCOov1h9KXuMHbt/view", note: "" }
  ] },
  { course: "SDMC", decks: [
      { title: "Social media reach", link: "https://drive.google.com/file/d/1hdymCZJaQ1f8FOZ8_2rOrbnMtZK-hfpy/view", note: "" }
  ] }
];

/* Teaching notes: put PDFs in the notes/ folder and list them here.        */
const TEACHING_NOTES = [
  // { title: "Introduction to Unreal Engine 5", course: "AR/VR", note: "Week 1 lecture notes", link: "notes/unreal-intro.pdf" },
];

/* ---------- STUDENT PROJECTS ----------
   Add student work under each group's `projects` list.                     */
const STUDENT_GROUPS = [
  { title: "BTCM VFX short films",
    who: "B.Tech Computational Media",
    text: "Students take a film through the complete VFX pipeline: concept, screenplay, storyboarding, cinematography, compositing, sound design, colour grading and AI-assisted media generation. I guide their festival submissions, national and international.",
    projects: [
      { title: "B.Tech Show Reel", by: "BTCM students", link: "https://youtu.be/b3hxUrCalSY", note: "" },
      { title: "Designing games, apps, and short films", by: "BTCM students", link: "https://youtu.be/L8wPAZGReQ4", note: "" }
    ] },
  { title: "AR, VR and immersive media",
    who: "B.Tech Computational Media",
    text: "Students design and build AR, VR and immersive projects with interactive technology, UX design and digital assets, then produce demonstration videos for internship and placement portfolios. Work is tested and shown in the AR/VR & Unreal Engine Laboratory on Meta Quest headsets.",
    projects: [
      { title: "Augmented Reality EXHIBIT", by: "BTCM students", link: "https://youtu.be/bVdjvLoFJgE", note: "" }
    ] },
  { title: "Documentaries, corporate films and digital storytelling",
    who: "Bachelor of Journalism and Mass Communication",
    text: "Supervised projects across research, scripting, storyboarding, cinematography, editing and portfolio presentation, to industry standard.",
    projects: [] },
  { title: "Digital comic on Computational Media careers",
    who: "Master's students",
    text: "Postgraduate students conceived and produced a digital comic about student perspectives on Computational Media education and career pathways, combining narrative development, character design and digital illustration.",
    projects: [
      { title: "I made a comic for a programme I am not even enrolled in", by: "Master's students", link: "https://youtu.be/Iv3xh6wHvKk", note: "" }
    ] }
];

const STUDENT_HIGHLIGHT = "Earlier, a student team under my supervision won an ASIFA Award and a nomination at 24 FPS for the film “Iqbal” (2006).";

/* ---------- PERSONAL PROJECTS ---------- */
const PERSONAL = [
  { title: "Digital film unit and web series",
    when: "2012 – 2016",
    text: "As Head of the Digital Film Unit at The Boxx Studios, I wrote and directed 250 short films (over 5 lakh views) and six web series aired on Sony LIV, Hungama, Shemaroo, MX Player and Pocket Films.",
    link: "" },
  { title: "CHAISTORIES",
    when: "2015",
    text: "A social-media storytelling project that won the Manthan Award, South Asia, for Contribution in Social Media Achievement.",
    link: "" },
  { title: "SDMC YouTube channel",
    when: "2025 – present",
    text: "I started the School of Digital Media and Communication channel to publish student projects, podcasts, documentaries, interviews and event highlights, and to give students hands-on production experience.",
    link: "" },
  { title: "Writing on animation and gaming",
    when: "Ongoing",
    text: "Regular blogs on animation and gaming for Daily Hunt, Entrepreneur Asia, Medium.com and EdgeMet Aversity.",
    link: "" }
  // Add more: { title: "", when: "", text: "", link: "" },
];

/* ---------- RESEARCH ---------- */
const JOURNALS = [
  { title: "AI-driven Environmental Impact Assessment Models for Urban Development: A Review and Future Directions",
    venue: "Indian Journal of Environmental Protection, Vol. 45, Issue 7, pp. 652–660", year: "2025",
    link: "https://www.e-ijep.co.in/45-7-652-660/" },
  { title: "E-learning using Virtual Reality for Creating Three Dimensions",
    venue: "Journal of Advances and Scholarly Research in Allied Education", year: "2022", link: "" },
  { title: "Exploring the New Possibilities in Enhancing the Education Sector with 3D Animation Technology",
    venue: "Shodh Sarita (UGC-CARE)", year: "2021", link: "" },
  { title: "Animation Visual Effects at a Glance",
    venue: "IJSRED, Vol. 3, Issue 3, p. 98", year: "2020", link: "" }
];

const CHAPTERS = [
  { title: "Future Trends and Innovations in AI and AR for Academia",
    venue: "Revolutionizing Academic Research With AI and Augmented Reality", year: "2025",
    link: "https://doi.org/10.4018/979-8-3373-1414-3.ch015" },
  { title: "Unpacking the Human Experience: A Qualitative Exploration of Generative AI and Digital Twins in Education",
    venue: "Book chapter", year: "2025",
    link: "https://doi.org/10.4018/979-8-3373-4982-4.ch006" },
  { title: "Demystifying AI for Instructional Designers",
    venue: "Chapter 5, Effective Instructional Design Informed by Learning Analytics", year: "",
    link: "https://www.igi-global.com/book/effective-instructional-design-informed/344686" },
  { title: "Generational Differences in Perceiving AI Influencer Authenticity",
    venue: "Chapter 11, Understanding Generative and Cultural Context", year: "",
    link: "https://www.igi-global.com/book/understanding-generative-cultural-context/347391" },
  { title: "AI-Driven Pedagogy and Assessment in TVET",
    venue: "Chapter 3, in production", year: "", link: "" },
  { title: "Redefining the Role of Educators in Generative AI-Supported Classrooms",
    venue: "Chapter 4, in production", year: "", link: "" }
];

const CONFERENCES = [
  { title: "Research presented at the 2nd International Conference on Creativity, Innovation and Artificial Intelligence for Global Sustainability", year: "2026" },
  { title: "Technical research paper, ICMCD International Conference", year: "2021" },
  { title: "The Impact of 3D Visuals as Part of ICT in Improving Student Learning Outcomes in Indian Education",
    venue: "National Seminar on Quality Enhancement Through Outcome-Based Education", year: "" },
  { title: "Research presented at the National Conference on Learning Techniques in Artificial Intelligence", year: "" }
];

/* Research notes: short write-ups, PDFs or links.                          */
const RESEARCH_NOTES = [
  // { title: "Notes on generative AI in the animation classroom", note: "Short summary", link: "notes/ai-animation.pdf" },
];

/* ---------- EXPERIENCE (CV) ---------- */
const ACADEMIC_ROLES = [
  { role: "Assistant Professor", org: "Mahindra University, Hyderabad", when: "Apr 2025 – present", from: 2025.25, to: null,
    points: [
      "Lead and manage undergraduate media programs and curriculum delivery.",
      "Teach Animation & VFX, Media Production, Computational Media, Visual Art & Design Thinking, Generative AI, Computer Graphics, AR/VR, C++ and Python.",
      "In-charge of the AR/VR & Unreal Engine Laboratory: Meta Quest set-up, student project testing, exhibitions and workshops.",
      "Run the School's digital and social media, including the SDMC YouTube channel."
    ] },
  { role: "Assistant Professor (Selection Grade)", org: "University of Petroleum and Energy Studies, School of Modern Media", when: "Nov 2022 – Apr 2025", from: 2022.83, to: 2025.25,
    points: [
      "Taught Metaverse, AR, VR, MR, Data Storytelling and Generative AI for Media.",
      "In-charge of the AI and Media Lab.",
      "Coordinator and moderator of the Web Series Mega Conclave.",
      "Mentored student media outlets: The Viewpoint Magazine, The Voice and Newsroom."
    ] },
  { role: "Program Leader & Assistant Professor", org: "Jagran Lakecity University", when: "Aug 2019 – Sep 2022", from: 2019.6, to: 2022.7,
    points: [
      "Delivered course modules with research-informed teaching.",
      "Supported timetabling, handbooks and examination processes; invited industry experts for classes and workshops."
    ] },
  { role: "Head of Department, Film & Animation", org: "Virtual Voyage College of Media and Entertainment", when: "Apr 2018 – Mar 2019", from: 2018.25, to: 2019.2,
    points: [
      "Trained students in Maya, After Effects, Blender, Cinema 4D, Unreal and 3ds Max.",
      "Planned course competencies and brought professionals in through seminars and workshops."
    ] }
];

const INDUSTRY_ROLES = [
  { role: "Sr. Consultant, Design & Animation", org: "Visual Communication Professional", when: "Apr 2019 – Oct 2022", from: 2019.25, to: 2022.8,
    points: [
      "Managed a team of visual designers, animators and video units; led client negotiation and delivery.",
      "Developed online courses for Skillsiya, Aartoon, Edunock, EFA Academy and Aptech.",
      "Supervised a 20-animator, 2-unit production team for PRAADIS Inc. (USA)."
    ] },
  { role: "Sr. Production Head, Animation & Design", org: "The Boxx Studios Production", when: "Sep 2012 – Jun 2016", from: 2012.7, to: 2016.45,
    points: [
      "Produced corporate films, ed-tech and safety-training videos for P&G, DB Corp, Crompton Greaves, MSME, VNS Group and Delhi Public School.",
      "As Head of the Digital Film Unit, wrote and directed 250 short films and six web series."
    ] },
  { role: "Technical Director", org: "Frameboxx Animation & VFX", when: "Jun 2006 – Aug 2012", from: 2006.45, to: 2012.6,
    points: ["Directed curriculum development, student project supervision and festival and placement outcomes."] },
  { role: "Senior Faculty", org: "Maya Academy of Advanced Cinematics", when: "Jun 2004 – May 2006", from: 2004.45, to: 2006.4,
    points: ["Taught Animation Design and Visual Effects; developed curricula and advised students."] },
  { role: "Senior Faculty", org: "Arena Multimedia", when: "Aug 2003 – May 2004", from: 2003.6, to: 2004.4,
    points: ["Trained students in 3ds Max, Maya, Mudbox, ZBrush and Blender."] }
];

const EDUCATION = [
  { title: "Ph.D., Computer Science", org: "LNCT University, Bhopal", when: "2023" },
  { title: "M.Sc., Computer Science", org: "Barkatullah University, Bhopal", when: "2014" },
  { title: "B.Sc., Computer Science", org: "Barkatullah University, Bhopal", when: "2005" }
];

const TOOLS = [
  { cat: "2D/3D animation", list: "3ds Max, Maya, ZBrush, Mudbox, Blender, Unity 3D, Cinema 4D, Adobe Animate, Character Animator, OpenToonz, V-Ray, Substance Painter, Unreal Engine 5, Character Creator, MetaHumans" },
  { cat: "Visual effects", list: "Final Cut Pro, Premiere Pro, Sony Vegas Pro, Sound Forge, Audition, After Effects, Fusion, PFTrack, RealFlow, Nuke, Mocha" },
  { cat: "Digital art", list: "Scriptwriting, character and perspective sketching, vector design, digital and matte painting, photography, clay, stop-motion and classical animation, Storyboard Pro" },
  { cat: "Graphic design", list: "Photoshop, Illustrator, InDesign, Captivate, CorelDRAW, Krita, Figma" },
  { cat: "AI and emerging tech", list: "Generative AI tools for media design; AR/VR/MR platforms" },
  { cat: "Hardware", list: "Dell/Intel workstations, iMac, Wacom, Huion, DSLR and mirrorless cameras, gimbal, slider, drone, Meta Quest" }
];

const CERTIFICATIONS = [
  "Introduction to Generative AI for Software Development, DeepLearning.AI",
  "AR/VR in Unity and Blender, IIT Roorkee (2024)",
  "Adobe Multimedia Content Creation, Adobe",
  "Social Media Content and Strategy, Adobe",
  "Unreal Essential Training (2019) and Virtual Reality Foundations, LinkedIn Learning",
  "Digital Marketing Certification, “Make Intern”, IIT Mumbai",
  "DOEACC ‘O’ Level Certification, Government of India",
  "Super Specialisation in 3D Architectural Design & EPM Master in Advanced Visual Art, E-Polymath Education",
  "Advanced Filmmaking, Frameboxx Animation & VFX; Web Designing & Development, CEDMAP",
  "Intel Expert Certification"
];

const SERVICE = [
  "Member, ACM SIGGRAPH Mumbai (India) Chapter.",
  "External examination paper setter: Sage University (2017), Raja Mansingh Tomar University (2018), Jagran Lakecity University (2018).",
  "Invited expert for three-day workshops on Animation, VFX and Gaming: VISM College Gwalior, TIT Engineering College Bhopal, Maharaja Ranjit Singh College Indore, Maya Academy, Makhanlal Chaturvedi University (2018)."
];


/* ---------- RIGHT NOW (Home tab card) ---------- */
const NOW_DOING = [
  "Assistant Professor, School of Digital Media and Communication, Mahindra University",
  "In-charge of the AR/VR & Unreal Engine Laboratory",
  "Teaching Animation & VFX, Generative AI, Computer Graphics and AR/VR",
  "Running the SDMC YouTube channel for student work",
  "Presenting research at the 2026 conference on creativity, innovation and AI for sustainability"
];

/* ---------- HOW THE WORK CONNECTS (Home tab flowchart) ---------- */
const FLOW = [
  { icon: "camera", title: "Studio practice", tab: "projects",
    text: "250 short films, six web series and animation teams across India and the USA." },
  { icon: "book", title: "Classroom", tab: "teaching",
    text: "Courses, four textbooks, {courses} online courses and an AR/VR lab." },
  { icon: "flask", title: "Research", tab: "research",
    text: "Papers and chapters on AI, AR/VR and digital twins in education." },
  { icon: "laurel", title: "Films and festivals", tab: "awards",
    text: "AI-driven and immersive films recognised in India and abroad." }
];

/* ---------- RESEARCH THEMES (visual tree on the Research tab) ----------
   `find` is a piece of the title used to look the paper up above.          */
const RESEARCH_THEMES = [
  { label: "AI in education", find: [
      "Future Trends and Innovations", "Unpacking the Human Experience", "Demystifying AI",
      "AI-Driven Pedagogy", "Redefining the Role", "Learning Techniques in Artificial"] },
  { label: "3D, VR and animation in learning", find: [
      "E-learning using Virtual Reality", "Exploring the New Possibilities", "The Impact of 3D Visuals", "Animation Visual Effects"] },
  { label: "AI, media and society", find: [
      "AI-driven Environmental", "Generational Differences", "2nd International Conference"] }
];

/* ---------- WHAT I TEACH (visual tree on the Teaching tab) ---------- */
const CURRICULUM = [
  { label: "Create", items: ["Animation and Visual Effects", "Media Production", "Visual Art and Design Thinking"] },
  { label: "Compute", items: ["Computer Graphics", "Computational Media", "C++ and Python programming"] },
  { label: "Immerse", items: ["Augmented and Virtual Reality", "Metaverse, AR, VR and MR"] },
  { label: "Generate and tell", items: ["Generative AI", "Generative AI for Media", "Data Storytelling"] }
];

/* ---------- STUDENT FILM PIPELINE (flowchart on the Projects tab) ---------- */
const PIPELINE = [
  { icon: "bulb", title: "Concept", text: "An idea is pitched, questioned and shaped into a story worth telling." },
  { icon: "script", title: "Screenplay", text: "The story takes written form: structure, scenes and dialogue." },
  { icon: "board", title: "Storyboard", text: "Scenes become drawn frames, fixing the shots before the camera rolls." },
  { icon: "camera", title: "Cinematography", text: "Framing, light and camera movement are captured on set." },
  { icon: "layers", title: "Compositing", text: "Live action and VFX layers are combined into one believable image." },
  { icon: "wave", title: "Sound design", text: "Dialogue, effects and music give the picture its depth." },
  { icon: "palette", title: "Colour grading", text: "Colour is balanced and stylised so the film feels like one world." },
  { icon: "sparkle", title: "AI-assisted media", text: "Generative tools extend the toolkit for assets, ideas and experiments." },
  { icon: "flag", title: "Festival submission", text: "Finished films go out to national and international festivals, with guidance on where and how to enter." }
];
