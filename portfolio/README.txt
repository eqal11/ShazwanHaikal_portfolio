PORTFOLIO FOLDER — Mohamad Shazwan Haikal

FILES
  index.html   -> main page structure
  style.css    -> all styling
  script.js    -> project/certificate data + all interactivity

PUT YOUR ACTUAL FILES IN THESE EXACT LOCATIONS (names must match exactly,
including capital letters and spaces):

assets/cv/
  Mohamad-Shazwan-Haikal-CV.pdf

assets/certificates/
  web-gis-development.jpg
  grab-geostars.jpg
  bigquery-gis.jpg
  supermap-basic-training.jpg
  talent-competency-management.jpg
  microsoft-excel.jpg

assets/projects/lenggong/
  lc-15.png
  lc20.png
  lc-25.png
  changemap-15-25.png
  Simulate2030&2035.png
  2025-4-geosite.png

assets/projects/ev-charging/
  main_dashboard.png
  interactive_map.png
  Station_information.png
  search_filter_interface.png
  geolocation.png
  routing_result.png

assets/projects/datacentre/
  input_criteria_layer.png
  reclassified_layer.png
  AHP.png
  final_output.png

assets/projects/agb/
  field data collection.jpg   (note the spaces in this filename)
  methodology.png
  Biomass_analysis.png
  Biomass_Distribution_Map.png

assets/projects/poi/
  main_interface.png
  poi_map.png
  add_edit_poi.png
  Database.png

assets/projects/sarawak-wind/
  input_data_visualization.jpg
  wind_speed_map.jpg
  wind_direction_vizualization.png
  final_output.png

IMAGES DISPLAY UNCROPPED
  Every image on the site (project thumbnails, gallery photos, certificate
  previews, lightbox) uses object-fit: contain, not cover. This means the
  full original screenshot always shows — nothing is zoomed or cut off.
  Images are letterboxed on a dark background if their aspect ratio does
  not match the card, which is expected.

IF AN IMAGE DOESN'T SHOW UP
  1. Check the filename matches exactly (case-sensitive on some systems,
     and "field data collection.jpg" has spaces — keep them).
  2. Hard refresh the browser (Ctrl+Shift+R) — browsers cache aggressively.
  3. Don't open index.html directly via double-click on some browsers —
     instead run a local server from this folder:
       python -m http.server
     then open http://localhost:8000

HOW TO ADD/EDIT PROJECTS OR CERTS LATER
  Open script.js — the PROJECTS and CERTS arrays near the top hold all the
  text and image paths. Edit them directly; the page rebuilds itself from
  that data automatically.
