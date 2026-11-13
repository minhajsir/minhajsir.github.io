# Hyderabad Sky: data-driven art

Three live artworks painted by today's weather and air quality. The data is fetched from the free Open-Meteo APIs (no API key), and every colour and movement is mapped from a real number. Built for the B.Tech Computational Media course.

**Live demo:** `https://<your-username>.github.io/hyderabad-sky/`

## The three pieces

| Piece | What the data controls |
|---|---|
| **Sky** | Hour of day sets the sky colours and the sun or moon position. Cloud cover sets the number of clouds and how grey the sky is. Wind drives cloud drift. Rain adds raindrops. AQI adds a brown haze. |
| **Wind field** | Wind direction and speed steer 900 particles. Temperature sets the colour (cool blue to warm red). AQI darkens and browns the mood. |
| **Air bloom** | AQI category sets the colour, PM2.5 sets the number of floating specks, wind speed sets how fast the rings breathe. |

## Features

- Live data for Hyderabad, plus Delhi, Mumbai, Chennai, Bengaluru and Kolkata for comparison
- **Play mode:** untick "Use live data" and drag sliders to see how each value changes the art, even when offline
- Falls back to sample values if the network fails
- Refreshes every 15 minutes; **Save PNG** button
- One HTML file, no libraries, no build step

## Data sources and licence

- Weather: [Open-Meteo.com](https://open-meteo.com/) (CC BY 4.0), free for non-commercial use
- Air quality: Open-Meteo Air Quality API, based on CAMS ENSEMBLE data from the Copernicus Atmosphere Monitoring Service. Open-Meteo asks for attribution to both, which the page footer provides. Check their terms before any commercial use.

## Run locally

Open `index.html` in a browser (it needs an internet connection for live data), or run `python -m http.server 8000`.

## Deploy on GitHub Pages

Push the files, then **Settings > Pages > Deploy from a branch > main, / (root)**.

## Student exercises

- **Easy:** add a city to the `CITIES` list, or change the colour mapping for temperature.
- **Easy:** change the AQI colour table to match the Indian National AQI bands.
- **Medium:** add humidity as fog that blurs the Charminar silhouette.
- **Medium:** fetch hourly data and animate a whole day in 30 seconds.
- **Hard:** compare two cities side by side in one artwork, with a "data postcard" caption explaining each mapping.

## Teaching note

Ask students to write a one-line "data-to-visual map" for every piece, for example "PM2.5 becomes number of specks". Mapping data to a visual variable and justifying the choice is the core skill.

## License

MIT, see [LICENSE](LICENSE).
