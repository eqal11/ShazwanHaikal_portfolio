/* =========================================================
   DATA
   ========================================================= */
const PROJECTS = [
  {
    id: "lenggong",
    title: "Assessing Land Cover Changes and Future Land Cover Prediction in Lenggong Geopark Using GIS Analysis",
    year: "2026",
    categoryLabel: "GIS Analysis / Remote Sensing / Spatial Modelling",
    categories: ["gis", "remote-sensing", "spatial-analysis"],
    tools: ["Google Earth Engine", "QGIS", "MOLUSCE", "GIS", "Satellite Imagery"],
    description: "Multi-temporal land cover analysis of Lenggong Geopark using satellite imagery from 2015–2025, followed by GIS-based modelling to predict future land cover scenarios and examine development pressure surrounding UNESCO Geosites.",
    role: "Sole researcher for this Final Year Project: designed the methodology, processed all imagery and produced the analysis and thematic maps under academic supervision.",
    methodology: ["Multi-temporal land cover classification", "Satellite imagery processing", "Land cover change analysis", "Future land cover prediction", "Buffer zone analysis around UNESCO Geosites", "Thematic map production"],
    outputs: ["Classified land cover maps for 2015, 2020 and 2025", "Land cover change map", "2030 land cover prediction map", "Geosite buffer / development pressure analysis"],
    learned: "Applying multi-temporal classification and CA-Markov style prediction (via MOLUSCE) to a real conservation landscape, and translating the results into planning-relevant outputs.",
    links: {},
    gallery: [
      { label: "2015 Land Cover Classification", caption: "Classified satellite imagery representing six major land cover classes.", src: "assets/projects/lenggong/lc-15.png" },
      { label: "2020 Land Cover Classification", caption: "Mid-period classification showing land cover shifts.", src: "assets/projects/lenggong/lc20.png" },
      { label: "2025 Land Cover Classification", caption: "Most recent classification used as the modelling baseline.", src: "assets/projects/lenggong/lc-25.png" },
      { label: "Land Cover Change Map", caption: "Change detection between classification years.", src: "assets/projects/lenggong/changemap-15-25.png" },
      { label: "2030 & 2035 Prediction Map", caption: "Modelled future land cover scenario.", src: "assets/projects/lenggong/Simulate2030&2035.png" },
      { label: "Geosite Buffer Analysis", caption: "Development pressure analysis around UNESCO Geosites.", src: "assets/projects/lenggong/2025-4-geosite.png" }
    ]
  },
  {
    id: "ev-charging",
    title: "Web GIS Dashboard for EV Charging Station Monitoring",
    year: "2025",
    location: "Johor Bahru",
    categoryLabel: "Web GIS / Interactive Mapping / Spatial Database",
    categories: ["web-gis", "gis", "data-visualization"],
    tools: ["Leaflet.js", "HTML", "CSS", "JavaScript", "Bootstrap 5", "MySQL", "PHP", "OpenStreetMap"],
    description: "Designed and developed an interactive Web GIS dashboard integrating a dataset of 108 EV charging stations for spatial monitoring, visualization, search, and route-based location analysis.",
    role: "Designed and built the full dashboard for Web-Based GIS coursework, from database schema to the interactive map interface.",
    methodology: ["Spatial database design in MySQL", "Leaflet.js map integration with OpenStreetMap base layers", "Station search and filter logic", "Geolocation and nearest-station calculation", "Routing to selected station"],
    outputs: ["Interactive map of 108 EV charging stations", "Search and filter interface", "Nearest station and routing feature"],
    learned: "Connecting a spatial database to a Leaflet front end, and handling geolocation-based interactions on a live map.",
    links: { "Go to Site": "https://eqal11.github.io/EV-Charger-Dashboard/" },
    gallery: [
      { label: "Main Dashboard", caption: "Overview of the EV charging station dashboard.", src: "assets/projects/ev-charging/main_dashboard.png" },
      { label: "Interactive Map", caption: "Leaflet-based map of 108 charging stations.", src: "assets/projects/ev-charging/interactive_map.png" },
      { label: "Station Information", caption: "Detail popup for a selected charging station.", src: "assets/projects/ev-charging/Station_information.png" },
      { label: "Search / Filter Interface", caption: "Filtering stations by criteria.", src: "assets/projects/ev-charging/search_filter_interface.png" },
      { label: "Geolocation / Nearest Station", caption: "Locating the nearest station to the user.", src: "assets/projects/ev-charging/geolocation.png" },
      { label: "Routing Result", caption: "Route generated to the selected station.", src: "assets/projects/ev-charging/routing_result.png" }
    ]
  },
  {
    id: "datacentre",
    title: "GIS-Based Data Centre Site Selection",
    year: "2025",
    categoryLabel: "Spatial Analysis / MCDM / AHP / Suitability Analysis",
    categories: ["spatial-analysis", "gis"],
    tools: ["QGIS", "GIS", "MCDM", "AHP"],
    description: "Applied Multi-Criteria Decision Making and Analytical Hierarchy Process to evaluate spatial suitability for data centre development using multiple geographic criteria.",
    role: "Carried out the criteria selection, weighting and overlay analysis for this coursework project.",
    methodology: ["Criteria selection", "Standardization / reclassification of input layers", "AHP pairwise comparison for criteria weighting", "Weighted overlay analysis"],
    outputs: ["Reclassified suitability layers", "Final site suitability map for data centre development"],
    learned: "Structuring a defensible AHP weighting scheme and combining it with GIS overlay analysis to support a siting decision.",
    links: {},
    gallery: [
      { label: "Input Criteria Layers", caption: "Geographic criteria used in the analysis.", src: "assets/projects/datacentre/input_criteria_layer.png" },
      { label: "Reclassified Layers", caption: "Standardized criteria layers.", src: "assets/projects/datacentre/reclassified_layer.png" },
      { label: "Weighted Overlay (AHP)", caption: "Combined suitability surface.", src: "assets/projects/datacentre/AHP.png" },
      { label: "Final Suitability Map", caption: "Ranked site suitability output.", src: "assets/projects/datacentre/final_output.png" }
    ]
  },
  {
    id: "agb",
    title: "GIS Training Camp 2 — Above-Ground Biomass Estimation",
    year: "2025",
    categoryLabel: "Remote Sensing / GIS / Environmental Analysis",
    categories: ["remote-sensing", "environmental"],
    tools: ["GIS", "Remote Sensing", "Allometric Equations"],
    description: "Field and remote sensing-based assessment of above-ground biomass in the UTM Recreational Forest, combining field measurements, allometric equations, spatial analysis and thematic mapping.",
    role: "Participated in field data collection and contributed to the biomass estimation and mapping workflow.",
    methodology: ["Field data collection", "Allometric equation application", "Biomass estimation", "Spatial analysis", "Web-based visualization of results"],
    outputs: ["Biomass distribution map", "Web-based visualization of results"],
    learned: "Linking field-measured tree parameters to allometric biomass models and presenting the results spatially.",
    links: {},
    gallery: [
      { label: "Field Data Collection", caption: "Collecting tree measurements in the UTM Recreational Forest.", src: "assets/projects/agb/field data collection.jpg" },
      { label: "Methodology / Workflow", caption: "Overview of the biomass estimation workflow.", src: "assets/projects/agb/methodology.png" },
      { label: "Biomass Analysis", caption: "Applying allometric equations to field data.", src: "assets/projects/agb/Biomass_analysis.png" },
      { label: "Biomass Distribution Map", caption: "Spatial distribution of estimated biomass.", src: "assets/projects/agb/Biomass_Distribution_Map.png" }
    ]
  },
  {
    id: "poi",
    title: "Web GIS Application Development — POI System",
    year: "2025",
    categoryLabel: "Web GIS / Database / Spatial Data Management",
    categories: ["web-gis"],
    tools: ["PHP", "MySQL", "Bootstrap", "Leaflet.js"],
    description: "Developed a Web GIS application for managing and visualizing flora and fauna point-of-interest data with spatial database functionality.",
    role: "Built the application end to end, including the spatial database and the map-based management interface.",
    methodology: ["Spatial database design for POI records", "CRUD interface for flora and fauna data", "Leaflet-based POI visualization"],
    outputs: ["Interactive POI map", "Add / edit interface for POI records"],
    learned: "Managing spatial data through a full CRUD workflow rather than static mapping alone.",
    links: {},
    gallery: [
      { label: "Main Interface", caption: "Landing view of the POI Web GIS application.", src: "assets/projects/poi/main_interface.png" },
      { label: "POI Map", caption: "Flora and fauna points of interest on the map.", src: "assets/projects/poi/poi_map.png" },
      { label: "Add / Edit POI Interface", caption: "Form for managing POI records.", src: "assets/projects/poi/add_edit_poi.png" },
      { label: "Database / Management Interface", caption: "Backend view of stored spatial data.", src: "assets/projects/poi/Database.png" }
    ]
  },
  {
    id: "wind-sarawak",
    title: "Monitoring Wind Speed and Direction in Sarawak",
    year: "2025",
    categoryLabel: "Environmental Data Analysis / Remote Sensing / Geospatial Visualization",
    categories: ["environmental", "remote-sensing", "data-visualization"],
    tools: ["GIS", "Remote Sensing", "Environmental Data"],
    description: "Analysed wind speed and wind direction patterns in Sarawak using environmental and spatial data to visualize geographic variation and identify spatial patterns.",
    role: "Processed the environmental dataset and produced the wind speed and direction visualizations for this non-imaging remote sensing project.",
    methodology: ["Environmental and spatial data processing", "Wind speed mapping", "Wind direction vector visualization"],
    outputs: ["Wind speed distribution map", "Wind direction vector visualization", "Analytical summary chart"],
    learned: "Representing directional environmental data spatially using vector symbology.",
    links: {},
    gallery: [
      { label: "Input Data Visualization", caption: "Environmental dataset used for the analysis.", src: "assets/projects/sarawak-wind/input_data_visualization.jpg" },
      { label: "Wind Speed Map", caption: "Spatial distribution of wind speed across Sarawak.", src: "assets/projects/sarawak-wind/wind_speed_map.jpg" },
      { label: "Wind Direction Visualization", caption: "Vector-based wind direction pattern.", src: "assets/projects/sarawak-wind/wind_direction_vizualization.png" },
      { label: "Final Analytical Output", caption: "Summary chart of findings.", src: "assets/projects/sarawak-wind/final_output.png" }
    ]
  }
];

const CERTS = [
  {name:'Web GIS Development', year:'2026', tags:['2026','web-gis'], file:'assets/certificates/webGIS_shazwan_UDEMY.jpg'},
  {name:'Grab GeoStars', year:'2025', tags:['2025','gis'], file:'assets/certificates/GrabGeoStars_shazwan.pdf'},
  {name:'Getting Started with BigQuery GIS for Data Analysts — Google Cloud', year:'2026', tags:['2026','data','gis'], file:'assets/certificates/Coursera_BigQueryGIS.pdf'},
  {name:'SuperMap Basic Training', year:'2026', tags:['2026','gis'], file:'assets/certificates/supermap-basic-training.pdf'},
  {name:'Talent & Competency Management Course', year:'2026', tags:['2026','other'], file:'assets/certificates/talent-competency-management.pdf'},
  {name:'Master Microsoft Excel: Apply, Analyze & Visualize Data', year:'2026', tags:['2026','other'], file:'assets/certificates/Coursera_excel.pdf'}
];

/* =========================================================
   NAV
   ========================================================= */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  document.getElementById('backtotop').classList.toggle('show', window.scrollY > 500);
});
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const mobileClose = document.getElementById('mobile-close');
function openMenu(){ mobileMenu.classList.add('open'); overlay.classList.add('open'); }
function closeMenu(){ mobileMenu.classList.remove('open'); overlay.classList.remove('open'); }
hamburger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.querySelectorAll('#mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));

const navLinks = document.querySelectorAll('[data-nav]');
const sections = ['home','about','skills','experience','projects','achievements','contact'].map(id => document.getElementById(id));
window.addEventListener('scroll', () => {
  let current = sections[0].id;
  sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 140) current = sec.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});

document.getElementById('backtotop').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* =========================================================
   HERO MAP (decorative)
   ========================================================= */
const heroMap = L.map('hero-map', {zoomControl:false, attributionControl:true, dragging:false, scrollWheelZoom:false, doubleClickZoom:false, boxZoom:false, keyboard:false}).setView([4.2, 108.5], 5.2);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution:'&copy; OpenStreetMap contributors &copy; CARTO', maxZoom:12
}).addTo(heroMap);
const decorMarkers = [[3.14,101.69],[1.49,103.74],[5.41,100.33],[5.97,116.07],[2.19,102.25]];
decorMarkers.forEach(c => {
  L.circleMarker(c, {radius:5, color:'#4fd8e8', weight:1.5, fillColor:'#4fd8e8', fillOpacity:0.55}).addTo(heroMap);
});

/* =========================================================
   IMAGE HELPERS
   Images always render UNCROPPED (object-fit: contain) so the
   full original screenshot is visible, letterboxed on a dark panel.
   ========================================================= */
function fullImg(src, alt){
  return `<img src="${encodeURI(src)}" alt="${String(alt).replace(/"/g,'&quot;')}"
            style="width:100%; height:100%; object-fit:contain; object-position:center; background:#0c1521; display:block;"
            loading="lazy">`;
}

/* =========================================================
   RENDER PROJECT CARDS
   ========================================================= */
const grid = document.getElementById('projects-grid');
function renderProjects(list){
  grid.innerHTML = list.map((p) => `
    <div class="project-card reveal in" data-id="${p.id}">
      <div class="pc-thumb">
        ${fullImg(p.gallery[0].src, p.title)}
        <div class="thumb-label">${p.gallery.length} evidence images</div>
      </div>
      <div class="pc-body">
        <div class="pc-meta"><span class="cat">${p.categoryLabel.split(' / ')[0]}</span><span>${p.year}</span></div>
        <div class="pc-title">${p.title}</div>
        <div class="pc-desc">${p.description}</div>
        <div class="pc-tools">${p.tools.map(t=>`<span>${t}</span>`).join('')}</div>
        <div class="pc-actions">
          <div class="pc-view">View Project <i class="fa-solid fa-arrow-right"></i></div>
          ${p.links && p.links['Go to Site'] ? `<a class="pc-site" href="${p.links['Go to Site']}" target="_blank" rel="noopener noreferrer">Go to Site <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (event) => {
      if(event.target.closest('a')) return;
      openModal(card.dataset.id);
    });
  });
}
renderProjects(PROJECTS);

/* filters + search */
let activeFilter = 'all', searchTerm = '';
function applyFilters(){
  let list = PROJECTS.filter(p => activeFilter==='all' || p.categories.includes(activeFilter));
  if(searchTerm.trim()){
    const q = searchTerm.toLowerCase();
    list = list.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tools.join(' ').toLowerCase().includes(q));
  }
  renderProjects(list);
}
document.querySelectorAll('#filter-tabs .filter-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#filter-tabs .filter-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilters();
  });
});
document.getElementById('project-search').addEventListener('input', e => {
  searchTerm = e.target.value; applyFilters();
});

/* =========================================================
   PROJECT MODAL
   ========================================================= */
const modalOverlay = document.getElementById('project-modal');
let currentIndex = 0;
function openModal(id){
  currentIndex = PROJECTS.findIndex(p=>p.id===id);
  fillModal(PROJECTS[currentIndex]);
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
function fillModal(p){
  document.getElementById('modal-meta').innerHTML = `<span>${p.year}</span><span>${p.categoryLabel}</span>` + (p.location? `<span>${p.location}</span>`:'');
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-overview').textContent = p.description;
  document.getElementById('modal-objective').textContent = p.description;
  document.getElementById('modal-contribution').textContent = p.role;
  document.getElementById('modal-tools').innerHTML = p.tools.map(t=>`<span class="tag">${t}</span>`).join('');
  document.getElementById('modal-outputs').innerHTML = '<ul style="padding-left:18px; color:var(--text-dim); font-size:14.5px;">' + p.outputs.map(o=>`<li>${o}</li>`).join('') + '</ul>';
  document.getElementById('modal-lessons').textContent = p.learned;
  document.getElementById('gallery-count').textContent = `(${p.gallery.length} images)`;
  document.getElementById('modal-hero').innerHTML = fullImg(p.gallery[0].src, p.title);
  document.getElementById('modal-methodology').innerHTML = p.methodology.map((m,i,arr)=>`
    <div class="method-step"><div class="dot"></div><span>${m}</span></div>${i<arr.length-1?'<div class="method-line"></div>':''}
  `).join('');
  document.getElementById('modal-gallery').innerHTML = p.gallery.map((g,i)=>`
    <div class="gallery-item" data-idx="${i}">
      <div class="gallery-thumb">${fullImg(g.src, g.label)}</div>
      <div class="gallery-caption">${String(i+1).padStart(2,'0')} — ${g.label}</div>
    </div>`).join('');
  const linksWrap = document.getElementById('modal-links-wrap');
  const linkEntries = Object.entries(p.links || {});
  if(linkEntries.length){
    linksWrap.style.display = 'block';
    document.getElementById('modal-links').innerHTML = linkEntries.map(([label,href])=>`<a href="${href}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer" style="padding:8px 14px; font-size:13px;">${label}</a>`).join('');
  } else { linksWrap.style.display = 'none'; }
  document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', ()=>openLightbox(p, parseInt(item.dataset.idx))));
}
document.getElementById('modal-close').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if(e.target===modalOverlay) closeModal(); });
document.getElementById('modal-prev').addEventListener('click', ()=>{ currentIndex = (currentIndex-1+PROJECTS.length)%PROJECTS.length; fillModal(PROJECTS[currentIndex]); document.querySelector('.modal').scrollTop=0; });
document.getElementById('modal-next').addEventListener('click', ()=>{ currentIndex = (currentIndex+1)%PROJECTS.length; fillModal(PROJECTS[currentIndex]); document.querySelector('.modal').scrollTop=0; });

/* lightbox — also shows the FULL uncropped image */
let lightboxState = null;
const lb = document.createElement('div');
lb.style.cssText = 'position:fixed; inset:0; background:rgba(4,8,13,0.94); z-index:400; display:none; align-items:center; justify-content:center; flex-direction:column;';
lb.innerHTML = `
  <button id="lb-close" style="position:absolute; top:20px; right:20px; width:40px; height:40px; border-radius:8px; border:1px solid var(--line-strong); background:var(--panel); color:var(--text);"><i class="fa-solid fa-xmark"></i></button>
  <div id="lb-image-wrap" style="width:min(88vw,900px); height:min(72vh,600px); background:var(--panel); border:1px solid var(--line-strong); border-radius:12px; display:flex; align-items:center; justify-content:center; overflow:hidden;"></div>
  <div style="margin-top:18px; text-align:center; font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--text-dim); max-width:80vw;">
    <div id="lb-counter"></div><div id="lb-caption" style="margin-top:6px; font-size:14px; color:var(--text);"></div>
  </div>
  <button id="lb-prev" style="position:absolute; left:24px; top:50%; transform:translateY(-50%); width:44px; height:44px; border-radius:50%; border:1px solid var(--line-strong); background:var(--panel); color:var(--text);"><i class="fa-solid fa-chevron-left"></i></button>
  <button id="lb-next" style="position:absolute; right:24px; top:50%; transform:translateY(-50%); width:44px; height:44px; border-radius:50%; border:1px solid var(--line-strong); background:var(--panel); color:var(--text);"><i class="fa-solid fa-chevron-right"></i></button>
`;
document.body.appendChild(lb);
function openLightbox(p, idx){
  lightboxState = {p, idx};
  renderLightbox(); lb.style.display='flex';
}
function renderLightbox(){
  const {p, idx} = lightboxState;
  document.getElementById('lb-counter').textContent = `${String(idx+1).padStart(2,'0')} / ${String(p.gallery.length).padStart(2,'0')}`;
  document.getElementById('lb-caption').textContent = `${p.gallery[idx].label} — ${p.gallery[idx].caption}`;
  document.getElementById('lb-image-wrap').innerHTML = fullImg(p.gallery[idx].src, p.gallery[idx].label);
}
document.getElementById('lb-close').addEventListener('click', ()=> lb.style.display='none');
document.getElementById('lb-prev').addEventListener('click', ()=>{ lightboxState.idx = (lightboxState.idx-1+lightboxState.p.gallery.length)%lightboxState.p.gallery.length; renderLightbox(); });
document.getElementById('lb-next').addEventListener('click', ()=>{ lightboxState.idx = (lightboxState.idx+1)%lightboxState.p.gallery.length; renderLightbox(); });
document.addEventListener('keydown', e => {
  if(lb.style.display==='flex'){
    if(e.key==='Escape') lb.style.display='none';
    if(e.key==='ArrowLeft') document.getElementById('lb-prev').click();
    if(e.key==='ArrowRight') document.getElementById('lb-next').click();
  } else if(modalOverlay.classList.contains('open') && e.key==='Escape'){
    closeModal();
  }
});

/* =========================================================
   CERTIFICATIONS
   ========================================================= */
const certGrid = document.getElementById('cert-grid');
function renderCerts(list){
  certGrid.innerHTML = list.map(c => `
    <div class="cert-card reveal in">
      <div class="cert-thumb">${fullImg(c.file, c.name)}</div>
      <div class="cert-body">
        <div class="cert-year">${c.year}</div>
        <div class="cert-name">${c.name}</div>
        <a href="${encodeURI(c.file)}" target="_blank" rel="noopener" class="cert-view"><i class="fa-solid fa-file-pdf"></i> View Proof</a>
      </div>
    </div>`).join('');
}
renderCerts(CERTS);
document.querySelectorAll('#cert-filter .filter-tab').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('#cert-filter .filter-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.cfilter;
    renderCerts(f==='all'? CERTS : CERTS.filter(c=>c.tags.includes(f)));
  });
});

/* =========================================================
   CONTACT FORM (frontend-only, mailto fallback)
   ========================================================= */
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('cf-name').value;
  const email = document.getElementById('cf-email').value;
  const msg = document.getElementById('cf-msg').value;
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
  window.location.href = `mailto:haikals2002@gmail.com?subject=${subject}&body=${body}`;
});

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* =========================================================
   ANIMATED COUNTERS
   ========================================================= */
const counters = document.querySelectorAll('[data-count]');
const counterIO = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      const el = en.target;
      const target = parseFloat(el.dataset.count);
      const decimal = el.dataset.decimal === 'true';
      let cur = 0; const dur=1100; const start=performance.now();
      function tick(t){
        const p = Math.min((t-start)/dur,1);
        cur = target*p;
        el.textContent = decimal ? cur.toFixed(2) : Math.round(cur);
        if(p<1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    }
  });
},{threshold:0.4});
counters.forEach(c=>counterIO.observe(c));
