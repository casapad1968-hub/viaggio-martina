// ==================== DAY FLAGS ====================
// Mappa bandiera per ogni giorno in base al paese
const dayFlags = {
  1: '✈️', 2: '🇹🇭', 3: '🇹🇭', 4: '🇹🇭', 5: '🇹🇭',  // Bangkok
  6: '🇯🇵', 7: '🇯🇵', 8: '🇯🇵', 9: '🇯🇵',  // Okinawa
  10: '🇯🇵', 11: '🇯🇵', 12: '🇯🇵', 13: '🇯🇵', 14: '🇯🇵', 15: '🇯🇵',  // Shikoku/Kobe/Osaka
  16: '🇰🇷', 17: '🇰🇷', 18: '🇰🇷', 19: '🇰🇷', 20: '🇰🇷'  // Seoul
};

// Kanji-sottotitoli per ogni fase
const phaseKanji = {
  phase1: 'タイ • Thailandia',
  phase2: '沖縄 • Okinawa',
  phase3: '日本本土 • Honshū & Shikoku',
  phase4: '大阪 • Osaka',
  phase5: '韓国 • Corea'
};

const phaseColors = {
  phase1: '#8B0000',  // Rosso scuro cinese - Thailandia
  phase2: '#0EA5E9',  // Blu oceano - Okinawa
  phase3: '#C9A84C',  // Oro - Shikoku/Kobe
  phase4: '#FF6B6B',  // Corallo - Osaka
  phase5: '#2C2C2C'   // Nero - Corea
};

const phaseNames = {
  phase1: 'Bangkok',
  phase2: 'Okinawa',
  phase3: 'Shikoku & Kobe',
  phase4: 'Osaka',
  phase5: 'Seul'
};

const phaseIcons = {
  phase1: '🇹🇭',
  phase2: '🏝️',
  phase3: '🏯',
  phase4: '🍣',
  phase5: '🌸'
};

// ==================== STATE ====================
var activePhase = 'all';
var expandedDay = null;
var checklist = {};

try { checklist = JSON.parse(localStorage.getItem('martina2026_checklist')) || {}; } catch(e) { checklist = {}; }

// ==================== TAB NAVIGATION ====================
function switchTab(tab) {
  ['home','itinerary','map','info'].forEach(function(t) {
    var btn = document.getElementById('tab-' + t);
    if (btn) btn.className = 'tab-btn' + (t === tab ? ' active' : '');
  });
  ['home','itinerary','map','info'].forEach(function(t) {
    var nav = document.getElementById('nav-' + t);
    if (nav) nav.className = 'nav-btn' + (t === tab ? ' active' : '');
  });
  ['home','itinerary','map','info'].forEach(function(t) {
    var p = document.getElementById('panel-' + t);
    if (p) p.style.display = (t === tab) ? '' : 'none';
  });

  if (tab === 'map' && !window._leafletMap) {
    setTimeout(function() { initMap(); }, 100);
  }
  if (tab === 'map' && window._leafletMap) {
    setTimeout(function() { window._leafletMap.invalidateSize(); }, 200);
  }
  if (tab === 'itinerary') {
    setTimeout(function() { renderDayGrid(); }, 50);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== COUNTDOWN ====================
function updateCountdown() {
  var target = new Date('2026-07-18T21:15:00+02:00');
  var now = new Date();
  var diff = target - now;

  var el = document.getElementById('countdown-label');
  var dEl = document.getElementById('cd-days');
  var hEl = document.getElementById('cd-hours');
  var mEl = document.getElementById('cd-mins');

  if (diff <= 0) {
    el.textContent = '🎉 IN VIAGGIO! 頑張って!';
    dEl.textContent = '🌸'; hEl.textContent = '🌸'; mEl.textContent = '🌸';
    return;
  }

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  el.textContent = 'Partenza: 18 Lug 2026, ore 21:15 da MXP ✈️';
  dEl.textContent = days;
  hEl.textContent = String(hours).padStart(2, '0');
  mEl.textContent = String(mins).padStart(2, '0');
}

// ==================== PHASE PILLS ====================
function renderPhasePills() {
  var container = document.getElementById('phase-pills');
  if (!container) return;
  container.innerHTML = '';

  var allBtn = document.createElement('button');
  allBtn.className = 'phase-pill' + (activePhase === 'all' ? ' active' : '');
  if (activePhase === 'all') allBtn.style.backgroundColor = '#8B0000';
  allBtn.textContent = '🌸 Tutti';
  allBtn.onclick = function() { filterPhase('all'); };
  container.appendChild(allBtn);

  var phases = ['phase1','phase2','phase3','phase4','phase5'];
  phases.forEach(function(pid) {
    var btn = document.createElement('button');
    btn.className = 'phase-pill' + (activePhase === pid ? ' active' : '');
    if (activePhase === pid) btn.style.backgroundColor = phaseColors[pid];
    btn.textContent = phaseIcons[pid] + ' ' + phaseNames[pid];
    btn.onclick = function() { filterPhase(pid); };
    container.appendChild(btn);
  });
}

function filterPhase(pid) {
  activePhase = (activePhase === pid) ? 'all' : pid;
  expandedDay = null;
  renderPhasePills();
  renderDayGrid();
  backToDayGrid();
}

// ==================== HOME PHASES ====================
function renderHomePhases() {
  var container = document.getElementById('home-phases');
  if (!container) return;
  container.innerHTML = '';

  phasesData.forEach(function(p) {
    var div = document.createElement('div');
    div.className = 'home-phase';
    div.onclick = function() {
      activePhase = p.id;
      switchTab('itinerary');
      renderPhasePills();
      renderDayGrid();
    };
    div.innerHTML = '<div class="home-phase-icon">' + p.icon + '</div>' +
      '<div class="home-phase-text">' +
        '<div class="home-phase-title">' + p.title + '</div>' +
        '<div class="home-phase-sub">Giorni ' + p.days + ' — ' + p.desc + '</div>' +
      '</div>' +
      '<div class="home-phase-arrow">›</div>';
    container.appendChild(div);
  });
}

// ==================== DAY GRID ====================
function renderDayGrid() {
  var container = document.getElementById('day-grid');
  if (!container) return;
  container.innerHTML = '';

  var filtered = itineraryData;
  if (activePhase !== 'all') {
    filtered = itineraryData.filter(function(d) { return d.phaseId === activePhase; });
  }

  filtered.forEach(function(d) {
    var idx = itineraryData.indexOf(d);
    var color = phaseColors[d.phaseId] || '#8B0000';
    var flag = dayFlags[d.day] || '🌸';

    var tile = document.createElement('div');
    tile.className = 'day-tile';
    tile.onclick = function() { selectDayByIdx(idx); };

    var bg = document.createElement('div');
    bg.className = 'day-tile-bg';
    // Gradient based on phase
    bg.style.background = 'linear-gradient(135deg, ' + color + 'CC 0%, ' + color + '99 100%), repeating-linear-gradient(45deg, transparent 0, transparent 18px, rgba(201,168,76,0.08) 18px, rgba(201,168,76,0.08) 19px)';
    tile.appendChild(bg);

    var overlay = document.createElement('div');
    overlay.className = 'day-tile-overlay';
    tile.appendChild(overlay);

    // Flag in top-right corner
    var flagEl = document.createElement('div');
    flagEl.className = 'day-tile-flag';
    flagEl.textContent = flag;
    tile.appendChild(flagEl);

    var content = document.createElement('div');
    content.className = 'day-tile-content';
    content.innerHTML = '<div class="day-tile-num">⛩️ Giorno ' + d.day + '</div><div class="day-tile-title">' + d.title + '</div>';
    tile.appendChild(content);

    container.appendChild(tile);
  });
}

function selectDayByIdx(idx) {
  var d = itineraryData[idx];
  if (!d) return;

  var area = document.getElementById('day-detail-area');
  if (!area) return;

  var color = phaseColors[d.phaseId] || '#8B0000';
  var flag = dayFlags[d.day] || '🌸';
  var kanjiSubtitle = phaseKanji[d.phaseId] || '';

  var html = '<button class="day-back-btn" onclick="backToDayGrid()">‹ Torna ai giorni</button>';
  html += '<div class="day-card expanded">';

  // Header bar
  html += '<div class="day-header" style="cursor:default;border-bottom:1px solid rgba(201,168,76,0.2)">';
  html += '<span class="day-badge" style="background:' + color + '">G' + d.day + '</span>';
  html += '<div class="day-info">';
  html += '<div class="day-title">' + flag + ' ' + d.title + '</div>';
  html += '<div class="day-meta">' + d.date + ' • ' + d.region + '</div>';
  html += '</div>';
  html += '</div>';

  // Close bar
  html += '<div class="day-close-bar">';
  html += '<button class="day-close-btn" onclick="backToDayGrid()">✕ Chiudi</button>';
  html += '<a href="' + d.gmaps + '" target="_blank" rel="noopener" class="day-gmaps-btn">🗺️ Google Maps</a>';
  html += '</div>';

  // Kanji subtitle
  html += '<div class="day-kanji-subtitle">' + kanjiSubtitle + '</div>';

  // Content
  html += '<div class="day-detail-inner">' + renderDayContent(d) + '</div>';
  html += '</div>';

  // Bottom back button
  html += '<div style="text-align:center;padding:18px 0 8px">';
  html += '<button onclick="backToDayGrid()" style="background:linear-gradient(135deg,#8B0000,#5C0A0A);color:#FFF8E7;border:1px solid #C9A84C;border-radius:12px;padding:12px 28px;font-size:13px;font-weight:700;font-family:Georgia,serif;cursor:pointer;box-shadow:0 2px 8px rgba(139,0,0,0.3);letter-spacing:1px">‹ Torna ai giorni</button>';
  html += '</div>';

  var grid = document.getElementById('day-grid');
  if (grid) grid.style.display = 'none';
  var pills = document.getElementById('phase-pills');
  if (pills) pills.style.display = 'none';
  area.innerHTML = html;
  area.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToDayGrid() {
  var area = document.getElementById('day-detail-area');
  if (area) area.innerHTML = '';
  var grid = document.getElementById('day-grid');
  if (grid) grid.style.display = '';
  var pills = document.getElementById('phase-pills');
  if (pills) pills.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

var renderDaysList = renderDayGrid;
var populateDaySelector = renderDayGrid;

function renderDayContent(d) {
  var links = linksData[d.day] || {};

  var routeUrl = links.routeGmaps || d.gmaps;
  var routeLabel = links.routeGmaps ? '🗾 PERCORSO SU GOOGLE MAPS' : '🗾 APRI SU GOOGLE MAPS';

  var hotelHTML = d.hotel;
  if (links.hotelGmaps) {
    hotelHTML = '<a href="' + links.hotelGmaps + '" target="_blank" rel="noopener" style="color:#8B0000;font-weight:700">' + d.hotel + '</a>';
  }

  var rentalHTML = '';
  if (links.rentalGmaps || links.rentalReturnGmaps) {
    rentalHTML = '<div style="background:rgba(201,168,76,0.08);padding:10px;border-radius:8px;border:1px solid rgba(201,168,76,0.25);font-size:11px;margin-bottom:10px">';
    if (links.rentalGmaps) rentalHTML += '🚗 <strong>Transfer/Pickup:</strong> <a href="' + links.rentalGmaps + '" target="_blank" style="color:#8B0000;font-weight:700">' + (links.rentalGmapsLabel || 'Google Maps') + '</a><br>';
    if (links.rentalReturnGmaps) rentalHTML += '🔑 <strong>Drop-off:</strong> <a href="' + links.rentalReturnGmaps + '" target="_blank" style="color:#8B0000;font-weight:700">' + (links.rentalReturnGmapsLabel || 'Google Maps') + '</a>';
    rentalHTML += '</div>';
  }

  var parkingHTML = '';
  if (links.parking) {
    parkingHTML = '<div class="detail-box"><div class="detail-title">🅿️ Logistica & Spostamenti</div><div class="detail-text">' + links.parking + '</div>';
    if (links.parkingCost) parkingHTML += '<div style="margin-top:6px;font-size:10px;color:#888">💵 Costo: <strong>' + links.parkingCost + '</strong></div>';
    if (links.parkingGmaps && links.parkingGmaps.length > 0) {
      parkingHTML += '<div style="margin-top:8px">';
      links.parkingGmaps.forEach(function(p) {
        parkingHTML += '<a href="' + p.url + '" target="_blank" style="display:flex;align-items:center;gap:4px;font-size:11px;color:#8B0000;font-weight:700;margin:3px 0;padding:2px 0">📍 ' + p.name + '</a>';
      });
      parkingHTML += '</div>';
    }
    parkingHTML += '</div>';
  }

  var transferHTML = '';
  if (d.transferInfo) {
    transferHTML = '<details style="background:rgba(139,0,0,0.04);padding:10px;border-radius:8px;border:1px solid rgba(139,0,0,0.15);margin-bottom:10px"><summary style="font-size:11px;font-weight:700;color:#8B0000;cursor:pointer">🚗 Indicazioni Transfert</summary><div style="font-size:11px;line-height:1.6;color:#555;margin-top:8px">' + d.transferInfo + '</div></details>';
  }

  var foodItems = '';
  if (d.food) {
    d.food.forEach(function(f) { foodItems += '<div class="food-item"><span class="food-dot">❀</span>' + f + '</div>'; });
  }
  var marketItems = '';
  if (d.supermarkets) {
    d.supermarkets.forEach(function(s) { marketItems += '<span class="market-tag">' + s + '</span> '; });
  }

  var html = '';

  // Stats grid
  html += '<div class="stats-grid">';
  html += '<div class="stat-box"><div class="stat-label">Distanza</div><div class="stat-value terracotta">🚗 ' + d.km + ' km</div></div>';
  html += '<div class="stat-box"><div class="stat-label">Tempo</div><div class="stat-value" style="font-size:11px">⏱️ ' + d.time + '</div></div>';
  html += '<div class="stat-box"><div class="stat-label">Alba</div><div class="stat-value sage">🌅 ' + d.sunrise + '</div></div>';
  html += '<div class="stat-box"><div class="stat-label">Tramonto</div><div class="stat-value coral">🌇 ' + d.sunset + '</div></div>';
  html += '</div>';

  // Timezone
  html += '<div class="tz-bar">⏰ <strong>Fuso orario:</strong> ' + d.fuso + '</div>';

  // Route button
  html += '<a href="' + routeUrl + '" target="_blank" rel="noopener" class="route-btn">' + routeLabel + '</a>';

  // Description
  html += '<div class="detail-box"><div class="detail-title">🎌 Programma del giorno</div><div class="detail-text">' + d.desc + '</div></div>';

  html += parkingHTML;
  html += rentalHTML;
  html += transferHTML;

  // Food & Markets
  html += '<div class="food-grid">';
  html += '<div class="food-box food-sage"><div class="food-title sage">🍜 Cibo & Ristoranti</div>' + foodItems + '</div>';
  html += '<div class="food-box food-gold"><div class="food-title gold">🛒 Supermercati & Store</div>' + marketItems + '</div>';

  // Bonus
  var bonusItems = '';
  if (d.bonus) {
    d.bonus.forEach(function(b) { bonusItems += '<div style="padding:4px 0">✨ ' + b + '</div>'; });
  }
  if (bonusItems) {
    html += '<div class="food-box" style="margin-top:8px;background:#FFF8E7;border:1px solid rgba(201,168,76,0.3);grid-column:1/-1"><div class="food-title" style="color:#8B6914">🌟 Da non perdere</div>' + bonusItems + '</div>';
  }
  html += '</div>';

  // Hotel
  html += '<div class="hotel-row">🏨 <strong>Alloggio:</strong> ' + hotelHTML + '</div>';

  return html;
}

// ==================== CHECKLIST ====================
function initChecklist() {
  renderChecklistList('checklist-docs', checklistData.docs, 'docs');
  renderChecklistList('checklist-parks', checklistData.parks, 'parks');
  renderChecklistList('checklist-food', checklistData.food, 'food');
  updateChecklistProgress();
}

function renderChecklistList(containerId, items, category) {
  var container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  items.forEach(function(item, i) {
    var key = category + '_' + i;
    var checked = checklist[key] === true;
    var li = document.createElement('li');
    li.className = 'checklist-item' + (checked ? ' done' : '');
    li.innerHTML = '<input type="checkbox" id="' + key + '"' + (checked ? ' checked' : '') + '><label for="' + key + '"' + (checked ? ' style="text-decoration:line-through;opacity:0.5"' : '') + '>' + item + '</label>';
    li.querySelector('input').onchange = function() {
      checklist[key] = this.checked;
      localStorage.setItem('martina2026_checklist', JSON.stringify(checklist));
      initChecklist();
    };
    container.appendChild(li);
  });
}

function updateChecklistProgress() {
  var total = checklistData.docs.length + checklistData.parks.length + checklistData.food.length;
  var done = 0;
  for (var k in checklist) { if (checklist[k] === true) done++; }
  var el = document.getElementById('checklist-progress');
  if (el) el.textContent = done + '/' + total + ' completati';
}

function resetChecklist() {
  if (confirm('Cancellare tutta la checklist?')) {
    checklist = {};
    localStorage.removeItem('martina2026_checklist');
    initChecklist();
  }
}

// ==================== MAP ====================
// Coordinate di tutte le tappe (fornite nella richiesta)
var mapStops = [
  { day: 1, label: "Milano (Partenza)", lat: 45.4642, lng: 9.1900, phase: "phase1" },
  { day: 1, label: "Delhi (Scalo)", lat: 28.6139, lng: 77.2090, phase: "phase1" },
  { day: 2, label: "Bangkok", lat: 13.7563, lng: 100.5018, phase: "phase1" },
  { day: 6, label: "Okinawa / Naha", lat: 26.3344, lng: 127.6850, phase: "phase2" },
  { day: 10, label: "Takamatsu", lat: 34.3405, lng: 134.0433, phase: "phase3" },
  { day: 11, label: "Naoshima", lat: 34.4905, lng: 133.9944, phase: "phase3" },
  { day: 12, label: "Kobe", lat: 34.6901, lng: 135.1956, phase: "phase3" },
  { day: 14, label: "Osaka", lat: 34.6937, lng: 135.5023, phase: "phase4" },
  { day: 16, label: "Seul", lat: 37.5665, lng: 126.9780, phase: "phase5" },
  { day: 20, label: "Milano (Ritorno)", lat: 45.4642, lng: 9.1900, phase: "phase5" }
];

function initMap() {
  var mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') {
    if (mapEl) mapEl.style.display = 'none';
    var fb = document.getElementById('map-fallback');
    if (fb) fb.style.display = 'block';
    return;
  }

  try {
    var map = L.map('map').setView([35, 90], 4);
    window._leafletMap = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 19
    }).addTo(map);

    // Phase routes (color-coded)
    var phases = ['phase1','phase2','phase3','phase4','phase5'];
    phases.forEach(function(pid) {
      var points = mapStops.filter(function(s) { return s.phase === pid; });
      if (points.length >= 2) {
        var latlngs = points.map(function(p) { return [p.lat, p.lng]; });
        L.polyline(latlngs, { color: phaseColors[pid], weight: 4, opacity: 0.75, dashArray: pid === 'phase1' || pid === 'phase5' ? null : '8, 6' }).addTo(map);
      }
    });

    // Full route (subtle, behind colored phase routes)
    var allLatlngs = mapStops.map(function(s) { return [s.lat, s.lng]; });
    L.polyline(allLatlngs, { color: '#2C2C2C', weight: 1.5, opacity: 0.25, dashArray: '4, 8' }).addTo(map);

    // Markers
    mapStops.forEach(function(stop, idx) {
      var color = phaseColors[stop.phase];
      var icon = L.divIcon({
        className: '',
        html: '<div style="background:' + color + ';color:#FFF8E7;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;border:2px solid #C9A84C;box-shadow:0 2px 8px rgba(139,0,0,0.4);font-family:Georgia,serif">' + (idx + 1) + '</div>',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });
      L.marker([stop.lat, stop.lng], { icon: icon }).addTo(map).bindPopup('<strong>Tappa ' + (idx + 1) + '</strong><br>' + stop.label);
    });

    map.fitBounds(allLatlngs, { padding: [50, 50] });
  } catch(e) {
    console.warn('Map failed:', e);
    mapEl.style.display = 'none';
    var fb = document.getElementById('map-fallback');
    if (fb) fb.style.display = 'block';
  }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function() {
  updateCountdown();
  setInterval(updateCountdown, 60000);
  switchTab('home');
  renderHomePhases();
  renderPhasePills();
  renderDayGrid();
  initChecklist();
});
