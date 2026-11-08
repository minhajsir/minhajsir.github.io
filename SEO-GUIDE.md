# SEO and social media plan for the portfolio (all free)

Goal: when recruiters, universities, festival programmers, students and collaborators search for you or your topics,
your portfolio and profiles appear, and when you share it on social media it looks great and gets clicks.

Be realistic: a brand-new site takes about 2 to 8 weeks to be indexed and several months to rank for competitive phrases.
Searches for your own name usually work within days to weeks. Nobody can guarantee rankings. Never buy links or followers.

---------------------------------------------------------------------------------------------------
## PART 1. Finish the technical setup (about 30 minutes)

What is already built into this version of the site:
- Page title, description, canonical address, and Open Graph / Twitter card tags (rich previews when you share).
- A 1200x630 share image (`images/og-image.jpg`).
- "Person" structured data (JSON-LD) listing your job, university, awards and all your profile links, which helps Google connect them.
- Plain-HTML copy of your headline, role and summary inside `index.html`, so search engines and no-JavaScript visitors always see your key text.
- `sitemap.xml`, `robots.txt`, and a friendly `404.html`.

Do these steps:

1. **Check your address.** These files are set to `https://minhajsir.github.io/`, which is the address you get when the repository
   is named exactly `minhajsir.github.io` (your GitHub username + `.github.io`). If your site lives somewhere else, run
   `python3 tools/set_site_url.py --url https://your-real-address/` or ask Claude to regenerate the files.
2. **Upload to GitHub** (Add file > Upload files, drag in): `index.html`, `sitemap.xml`, `robots.txt`, `404.html`, `tools`, the `js` folder, and `images/og-image.jpg` (drag the `images` folder). Commit.
3. **Google Search Console** (search.google.com/search-console, free):
   - Add property > **URL prefix** > paste your address (with the final `/`).
   - Choose **HTML tag**, copy the `<meta name="google-site-verification" ...>` line, paste it into `index.html` where the comment says so (remove the `<!--` and `-->` marks), commit, then click **Verify**.
   - Sitemaps > enter `sitemap.xml` > Submit.
   - URL inspection > paste your address > **Request indexing**.
4. **Bing Webmaster Tools** (bing.com/webmasters, free): sign in > **Import from Google Search Console**. Bing also feeds DuckDuckGo, Yahoo and Ecosia.
5. **Test the previews:**
   - LinkedIn Post Inspector (linkedin.com/post-inspector): paste your address, check the image and title.
   - Facebook Sharing Debugger (developers.facebook.com/tools/debug): same.
   - Rich Results Test (search.google.com/test/rich-results) and validator.schema.org: confirm the Person data is read without errors.
   - PageSpeed Insights (pagespeed.web.dev): aim for green on mobile.
6. **Keep Drive sharing on "Viewer" (never "Editor")** for the slides and gallery folders.

Known limitation: the six tabs live on one web address (tab links like `#research` are ignored by Google). Google will rank
the home page for your name and main topics, and it reads the full content, but it cannot list Research, Awards, Teaching etc.
as separate results. If you want that, ask Claude for a **multi-page version** (each tab its own page and address). It is the
single biggest upgrade after this setup.

---------------------------------------------------------------------------------------------------
## PART 2. Keywords to use everywhere (bio, titles, captions)

Use the same name everywhere: **Dr. Minhaj Abdullah** (consistency helps Google link your profiles to one person).

- Name searches: Dr Minhaj Abdullah, Minhaj Abdullah animation, Minhaj Abdullah Mahindra University, Minhaj Abdullah filmmaker
- Role searches: animation professor Hyderabad, VFX faculty India, animation and VFX lecturer, computational media faculty, AR VR Unreal Engine trainer India
- Topic searches: generative AI in animation education, AI short film India, AR VR in education research, 3D animation teaching, digital twins education
- Opportunity searches: guest lecture animation VFX, generative AI workshop filmmaking, visiting faculty animation, animation curriculum consultant, external examiner animation

Write naturally; do not stuff keywords. Put the main ones in the first line of any bio or description.

---------------------------------------------------------------------------------------------------
## PART 3. Build the link web (free "backlinks"). This matters most for ranking.

Every serious profile that links to your portfolio tells Google your site is real. Do one a day:

| Where | What to do |
|---|---|
| Mahindra University faculty page | Email the web/IT team and ask them to add your portfolio link and "Website" under your profile |
| LinkedIn | Put the portfolio in **Contact info > Website** and in the **Featured** section |
| Google Scholar | Edit profile > add **Homepage** = your portfolio; make the profile public |
| ORCID (0009-0000-2335-8038, found on your Mahindra page; confirm it is yours) | Add the portfolio under **Websites & social links** |
| IGI Global author page | Add the website if the profile allows it |
| IMDb | Complete your bio and list your films; use your portfolio link in your bio text if allowed |
| Udemy instructor bio | Add the portfolio link |
| YouTube channel | **About > Links**: portfolio first, then LinkedIn, Instagram |
| Instagram (@filminhaj) | Website field = portfolio |
| Behance and ArtStation (free) | Upload gallery art; link back to the portfolio |
| ResearchGate and Academia.edu | Create profiles; upload permitted copies of your papers; add the website |
| Medium | Publish 1 or 2 articles a month and link to the portfolio |
| FilmFreeway (free profile) | Create a filmmaker profile and a page for each film; use it for festival entries |
| Old institutions (UPES, Jagran Lakecity, etc.) | Ask if their faculty or alumni pages can link to you |

Tips: use descriptive link text such as "Dr. Minhaj Abdullah, animation and VFX portfolio", not "click here".
Add the portfolio to your email signature and to the last slide of every deck you teach.

---------------------------------------------------------------------------------------------------
## PART 4. Social media: what to post and how often

Plan 3 to 4 hours a week. Consistency beats volume.

**Four content pillars (rotate them):**
1. **Films and awards:** a 30 to 60 second clip, behind the scenes, festival news.
2. **Teaching:** one slide idea or tip from your decks; student wins.
3. **Research:** a plain-language summary of a paper or chapter, with the link.
4. **Art and process:** sketch to AI to final, painting timelapse.

**LinkedIn (your most valuable channel for jobs and collaborations)**
- Headline: `Assistant Professor | Animation, VFX & Generative AI | Award-winning filmmaker | Mahindra University`
- About: first 2 lines = who you help and what you do; add a link to the portfolio.
- Post 2 to 3 times a week. Turn your slide PDFs into **document posts (carousels)**: one deck can be 5 posts.
- Ask students to tag you; tag festivals and universities; reply to comments within a day.
- Turn on **Open to work (recruiters only)** and add roles such as Professor, Associate Professor, Head of Department, Visiting Faculty, Consultant.

**YouTube (long-lived search traffic, also appears in Google)**
- Title: `Film or topic | Short film | Dr. Minhaj Abdullah`
- First two lines of the description: what it is plus the portfolio link; then credits and festivals.
- Playlists: Short films, Student projects, Tutorials. Custom thumbnail; add chapters to long videos.

**Instagram (@filminhaj):** 3 reels or posts a week; bio `Dr. Minhaj Abdullah | Filmmaker & Professor | Animation · VFX · AI` with the link; 5 to 10 relevant hashtags.

**X (Twitter) / Threads / Facebook groups (optional):** post festival and research news, join animation, VFX and filmmaking groups in India, and answer questions.

**Hashtags (mix 3 to 5):** #Animation #VFX #GenerativeAI #AIFilmmaking #ShortFilm #AugmentedReality #UnrealEngine #MediaEducation #ComputationalMedia #HyderabadFilm

**Caption formula:** hook line, 2 lines of value, one link, 1 question to start comments.

---------------------------------------------------------------------------------------------------
## PART 5. Turn visibility into jobs, projects and opportunities

**Academic jobs:** create alerts (title: professor, associate professor, head of department, visiting faculty; keywords: animation, VFX, media, computational media, game design) on LinkedIn Jobs, Naukri, Indeed, foundit, Academic Positions, jobs.ac.uk, HigherEdJobs and Times Higher Education Unijobs. Also check career pages of design and media schools directly.

**Research and funding:** watch call-for-papers lists (WikiCFP), IGI Global calls for chapters, ACM SIGGRAPH, and funding calls from ICSSR, DST and AICTE.

**Films:** submit to festivals through FilmFreeway and Festhome (profiles are free; only entry fees cost money). Use laurel images in posts and add each win to `AWARDS` in `js/data.js`.

**Talks, workshops, consulting:** pitch guest lectures, workshops and curriculum consulting to colleges, startups and ed-tech companies.

**Weekly outreach habit:** send 5 short, personal messages a week.

*Template: guest lecture / workshop*
> Subject: Guest lecture on generative AI in animation and VFX
> Dear Prof. [Name], I am Dr. Minhaj Abdullah, Assistant Professor at Mahindra University, working on animation, VFX and generative AI (portfolio: [link]). I would be glad to offer a free 60-minute session for your students on [topic], based on my award-winning AI short film work. Would a date in [month] suit you? Warm regards, Minhaj

*Template: festival or collaboration*
> Hello [Name], I am a filmmaker and professor (portfolio: [link]). My short film [title] won Best Short Film at [festival]. I would love to share a screening link with you, and I am open to collaborations on AI-assisted animation. Thank you for your time.

*Template: recruiter or institution*
> Dear [Name], I am writing to explore faculty opportunities in animation, VFX and computational media. I have 20 years of industry and teaching experience, a Ph.D. in Computer Science, and [one concrete result]. My portfolio is here: [link]. I would be happy to share my CV.

---------------------------------------------------------------------------------------------------
## PART 6. Weekly routine, monthly routine, and a 90-day plan

**Weekly (3 to 4 hours):** Monday: LinkedIn post. Wednesday: video or reel. Friday: reply to comments, send 5 outreach messages, apply to 1 to 3 opportunities.

**Monthly:** publish 1 article (Medium or LinkedIn); add new work to `data.js` (a film, student project, award, artwork); check Search Console; refresh your LinkedIn Featured section.

**Days 1 to 7:** finish Part 1; update LinkedIn, YouTube, Instagram, Scholar, ORCID links (Part 3).
**Days 8 to 30:** the remaining profiles; 3 LinkedIn posts a week; 2 YouTube uploads; email your university web team; 15 outreach messages.
**Days 31 to 60:** publish 2 articles; submit 2 festivals; start the carousel series from your slides; review Search Console queries and use the real search phrases in your captions.
**Days 61 to 90:** ask Claude for the multi-page version if impressions are growing; collect testimonials from students or colleagues and add them to the site; repeat the best-performing post types.

---------------------------------------------------------------------------------------------------
## PART 7. How to tell it is working

Track once a week in a simple sheet:
- Search Console: total impressions, clicks, and the top 10 search queries (Performance report).
- Is your address showing in Google? Search `site:yourusername.github.io`.
- Google your name and the role phrases from Part 2; note your position.
- LinkedIn: profile views and search appearances; YouTube: views and watch time; Instagram: reach.
- Real-world results: messages received, interviews, invitations, festival acceptances.

If nothing is indexed after 2 weeks, re-check: the placeholder address is replaced, the sitemap is submitted, Search Console shows the page as "Indexed", and `robots.txt` still says `Allow: /`.

---------------------------------------------------------------------------------------------------
## Free tools used in this plan
Google Search Console, Bing Webmaster Tools, Google Rich Results Test, validator.schema.org, PageSpeed Insights, LinkedIn Post Inspector,
Facebook Sharing Debugger, Google Trends and Google autocomplete (keyword ideas), Canva free (post graphics), FilmFreeway (free profile).
Optional free analytics: GoatCounter or Google Analytics 4 (paste its small script into `index.html` before `</head>`).

Optional paid upgrade (not needed to start): a custom domain such as minhajabdullah.com (about the price of a few coffees a year).
It makes the address professional and portable; connect it under GitHub Settings > Pages > Custom domain, then rerun
`python3 tools/set_site_url.py --url https://www.yourdomain.com/`.
