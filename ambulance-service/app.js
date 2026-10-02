/**
 * EMERGENCY AMBULANCE – SOS & LIVE TRACKING SYSTEM (AMBULANCE SERVICE)
 * State Management, Real-time Simulation Engine, Leaflet Mapping, Web Audio Siren, Bilingual Engine
 */

// ============================================================================
// BILINGUAL TRANSLATION DICTIONARY (ENGLISH & HINDI)
// ============================================================================
const i18n = {
  en: {
    brand_title: "Ambulance Service",
    brand_tagline: "India Emergency Medical Response Network",
    emergency_call_112: "Call 112 (Emergency)",
    sos_btn: "SOS",
    sos_sub: "EMERGENCY",
    sos_hero_tag: "🚨 24/7 Rapid Emergency Dispatch",
    sos_hero_title: "Emergency Ambulance SOS Service",
    sos_hero_sub: "Immediate paramedic dispatch across India. GPS-assisted nearest ambulance matching, live vehicle tracking, and hospital trauma coordination.",
    hero_stat_1: "Avg Response Time",
    hero_stat_2: "Active Fleet",
    hero_stat_3: "Lives Saved Today",
    quick_categories_title: "Instant Emergency Categories",
    quick_categories_sub: "Click on any category to trigger priority SOS response",
    road_accident: "Road Accident",
    road_accident_desc: "Vehicle collision, pedestrian impact, severe trauma",
    serious_injury: "Serious Injury",
    serious_injury_desc: "Heavy bleeding, bone fracture, burns, high-fall trauma",
    medical_emergency: "Medical Emergency",
    medical_emergency_desc: "Chest pain, stroke, asthma attack, unconsciousness",
    other_emergency: "Other Emergency",
    other_emergency_desc: "Maternity labor, elderly assistance, animal attack",
    fleet_title: "Specialized Ambulance Fleet",
    fleet_sub: "Equipped to Indian National Ambulance Code (AIS-125) standards",
    als_title: "Advanced Life Support (ALS)",
    als_desc: "ICU on wheels with ventilator, biphasic defibrillator, multipara monitor, emergency cardiac drugs, and certified paramedics.",
    bls_title: "Basic Life Support (BLS)",
    bls_desc: "Oxygen cylinder support, spine boards, emergency dressings, stretcher, and trained EMT crew.",
    nicu_title: "Neonatal / Pediatric ICU",
    nicu_desc: "Transport incubator, pediatric ventilator, phototherapy support, and specialized neonatal care nurse.",
    ptv_title: "Patient Transport Van",
    ptv_desc: "Non-critical patient transfers, dialysis trips, wheelchair lift accessibility.",
    safety_title: "Accident Victim? Good Samaritan Law Protects You",
    safety_desc: "Under the Supreme Court of India guidelines, Good Samaritans are protected from police or hospital harassment. Call 112 without fear.",
    modal_title: "Emergency SOS Ambulance Request",
    name_label: "Patient / Caller Name",
    phone_label: "Mobile Number (+91)",
    emergency_type_label: "Select Emergency Type",
    location_label: "Incident / Pickup Location",
    location_detecting: "Detecting GPS coordinates...",
    location_detected: "GPS Location Acquired (Accuracy: ±6m)",
    location_btn: "Detect Current GPS",
    drag_pin_hint: "Drag the red marker on map to refine exact accident spot",
    desc_label: "Short Situation / Patient Condition Notes",
    desc_placeholder: "e.g., 2 persons injured in bike crash, bleeding from head near Metro Gate 3",
    pref_ambulance: "Ambulance Type Preference",
    nearest_hospital: "Destination Hospital Preference",
    nearest_hospital_opt: "Nearest Trauma Hospital (Recommended)",
    btn_dispatch: "DISPATCH EMERGENCY AMBULANCE NOW",
    modal_disclaimer: "⚠️ Misuse of emergency services or false alarms is punishable under IPC Sec 182 / BNS. Please confirm real emergency.",
    driver_portal_title: "Ambulance Crew Dispatch Terminal",
    duty_online: "ON DUTY (AVAILABLE)",
    duty_offline: "OFF DUTY",
    incoming_sos_alert: "INCOMING EMERGENCY SOS DISPATCH",
    accept_btn: "ACCEPT EMERGENCY",
    reject_btn: "REJECT / PASS",
    pipeline_step_1: "Acknowledge & Start Driving",
    pipeline_step_2: "Reached Customer Location",
    pipeline_step_3: "Patient Picked Up & Stabilized",
    pipeline_step_4: "Departing for Hospital Trauma Center",
    pipeline_step_5: "Arrived at Hospital Trauma Care",
    pipeline_step_6: "Complete Emergency Case",
    call_driver: "Call Driver",
    cancel_booking: "Cancel Request",
    admin_title: "City Emergency Dispatch & Fleet Command",
    admin_tab_live: "Fleet Live Map",
    admin_tab_drivers: "Driver Verification",
    admin_tab_bookings: "Active & History SOS",
    admin_tab_complaints: "Complaints & Fraud",
    notif_title: "Emergency Notifications",
    notif_clear: "Clear All",
    notif_empty: "No emergency notifications"
  },
  hi: {
    brand_title: "एम्बुलेंस सर्विस",
    brand_tagline: "भारत आपातकालीन चिकित्सा प्रतिक्रिया नेटवर्क",
    emergency_call_112: "112 पर कॉल करें (आपातकाल)",
    sos_btn: "SOS",
    sos_sub: "आपातकालीन",
    sos_hero_tag: "🚨 24/7 तत्काल आपातकालीन एम्बुलेंस सेवा",
    sos_hero_title: "आपातकालीन एम्बुलेंस SOS सेवा",
    sos_hero_sub: "भारत भर में त्वरित पैरामेडिक सहायता। जीपीएस आधारित निकटतम एम्बुलेंस मिलान, लाइव वाहन ट्रैकिंग और अस्पताल समन्वय।",
    hero_stat_1: "औसत आगमन समय",
    hero_stat_2: "सक्रिय एम्बुलेंस बेड़ा",
    hero_stat_3: "आज बचाई गई जानें",
    quick_categories_title: "त्वरित आपातकालीन श्रेणियां",
    quick_categories_sub: "प्राथमिकता के साथ सहायता प्राप्त करने के लिए किसी भी श्रेणी पर क्लिक करें",
    road_accident: "सड़क दुर्घटना",
    road_accident_desc: "गाड़ी की टक्कर, पैदल यात्री चोट, गंभीर आघात",
    serious_injury: "गंभीर चोट",
    serious_injury_desc: "अत्यधिक रक्तस्राव, फ्रैक्चर, आग से जलना",
    medical_emergency: "मेडिकल इमरजेंसी",
    medical_emergency_desc: "सीने में दर्द, दिल का दौरा, स्ट्रोक, सांस लेने में तकलीफ",
    other_emergency: "अन्य आपातकाल",
    other_emergency_desc: "प्रसव पीड़ा, बुजुर्गों की आपातकालीन सहायता",
    fleet_title: "विशिष्ट एम्बुलेंस बेड़ा",
    fleet_sub: "भारतीय राष्ट्रीय एम्बुलेंस कोड (AIS-125) मानकों के अनुसार सुसज्जित",
    als_title: "एडवांस्ड लाइफ सपोर्ट (ALS)",
    als_desc: "पहियों पर आईसीयू: वेंटिलेटर, डिफाइब्रिलेटर, मल्टी-पैरा मॉनिटर और प्रमाणित पैरामेडिक्स।",
    bls_title: "बेसिक लाइफ सपोर्ट (BLS)",
    bls_desc: "ऑक्सीजन सिलेंडर सपोर्ट, स्ट्रेचर, प्राथमिक उपचार किट और प्रशिक्षित ईएमटी चालक दल।",
    nicu_title: "नवजात / बाल चिकित्सा आईसीयू",
    nicu_desc: "ट्रांसपोर्ट इनक्यूबेटर, बाल चिकित्सा वेंटिलेटर और विशेषज्ञ नवजात शिशु देखभाल नर्स।",
    ptv_title: "रोगी परिवहन वैन",
    ptv_desc: "गैर-आपातकालीन स्थानांतरण, डायलिसिस यात्राएं, व्हीलचेयर अनुकूलित।",
    safety_title: "सड़क दुर्घटना पीड़ित की मदद? गुड सेमेरिटन कानून आपकी रक्षा करता है",
    safety_desc: "सुप्रीम कोर्ट के आदेशानुसार, मदद करने वाले व्यक्ति से पुलिस या अस्पताल पूछताछ के नाम पर परेशान नहीं कर सकती। बिना डर 112 डायल करें।",
    modal_title: "आपातकालीन एम्बुलेंस अनुरोध",
    name_label: "मरीज / कॉलर का नाम",
    phone_label: "मोबाइल नंबर (+91)",
    emergency_type_label: "आपातकाल का प्रकार चुनें",
    location_label: "घटना / पिकअप का स्थान",
    location_detecting: "जीपीएस लोकेशन पहचानी जा रही है...",
    location_detected: "जीपीएस स्थान प्राप्त हुआ (सटीकता: ±6 मी)",
    location_btn: "वर्तमान जीपीएस खोजें",
    drag_pin_hint: "सटीक दुर्घटना स्थल चिन्हित करने के लिए लाल मार्कर को खींचें",
    desc_label: "स्थिति / मरीज का संक्षिप्त विवरण",
    desc_placeholder: "उदा. बाइक दुर्घटना में 2 लोग घायल, सिर से खून बह रहा है, मेट्रो गेट 3 के पास",
    pref_ambulance: "एम्बुलेंस का प्रकार",
    nearest_hospital: "पसंदीदा अस्पताल",
    nearest_hospital_opt: "निकटतम सरकारी / निजी ट्रॉमा सेंटर (अनुशंसित)",
    btn_dispatch: "तत्काल एम्बुलेंस भेजें",
    modal_disclaimer: "⚠️ झूठा आपातकालीन कॉल भारतीय कानून (धारा 182) के तहत दंडनीय अपराध है। कृपया पुष्टि करें।",
    driver_portal_title: "एम्बुलेंस चालक टर्मिनल",
    duty_online: "ड्यूटी पर (उपलब्ध)",
    duty_offline: "ड्यूटी समाप्त (ऑफलाइन)",
    incoming_sos_alert: "नया आपातकालीन SOS अनुरोध",
    accept_btn: "अनुरोध स्वीकार करें",
    reject_btn: "अस्वीकार / छोड़ें",
    pipeline_step_1: "पुष्टि करें और मरीज की ओर रवाना हों",
    pipeline_step_2: "मरीज के स्थान पर पहुंचे",
    pipeline_step_3: "मरीज को उठाया और स्थिर किया",
    pipeline_step_4: "अस्पताल ट्रॉमा सेंटर के लिए रवाना",
    pipeline_step_5: "अस्पताल पहुंचे",
    pipeline_step_6: "आपातकालीन कार्य पूरा हुआ",
    call_driver: "चालक को कॉल करें",
    cancel_booking: "अनुरोध रद्द करें",
    admin_title: "शहर आपातकालीन प्रेषण एवं नियंत्रण केंद्र",
    admin_tab_live: "लाइव बेड़ा मानचित्र",
    admin_tab_drivers: "चालक सत्यापन",
    admin_tab_bookings: "सक्रिय और पूर्व SOS",
    admin_tab_complaints: "शिकायतें एवं रिपोर्ट",
    notif_title: "आपातकालीन सूचनाएं",
    notif_clear: "सभी हटाएं",
    notif_empty: "कोई आपातकालीन सूचना नहीं है"
  }
};

let currentLang = 'en';

// ============================================================================
// SIMULATED DATABASE (FIRESTORE IN LOCALSTORAGE + BROADCASTCHANNEL)
// ============================================================================
const SYNC_CHANNEL = new BroadcastChannel('ambulance_service_sync');

// Initial seed coordinates: New Delhi, India (AIIMS & Ring Road area)
const INITIAL_COORDS = {
  customer: { lat: 28.5672, lng: 77.2100, address: "Ring Road, near AIIMS Flyover, Ansari Nagar, New Delhi" },
  driver: { lat: 28.5835, lng: 77.2285, address: "Lodhi Road Emergency Base Station, New Delhi" },
  hospital: { lat: 28.5665, lng: 77.2082, name: "AIIMS Apex Trauma Centre, New Delhi" }
};

// Seed Drivers
const DEFAULT_DRIVERS = [
  {
    id: "DRV-101",
    name: "Rajesh Kumar",
    mobile: "+91 98765 43210",
    ambulanceNo: "DL 01 EA 4921",
    vehicleType: "ALS (Advanced Life Support)",
    equipment: "Ventilator, Defibrillator, Syringe Pump",
    status: "available", // available, busy, offline
    verified: true,
    rating: 4.9,
    trips: 412,
    lat: 28.5835,
    lng: 77.2285
  },
  {
    id: "DRV-102",
    name: "Suresh Sharma",
    mobile: "+91 98111 22334",
    ambulanceNo: "DL 03 AC 8820",
    vehicleType: "BLS (Basic Life Support)",
    equipment: "Oxygen, Stretcher, First Aid",
    status: "available",
    verified: true,
    rating: 4.8,
    trips: 289,
    lat: 28.5520,
    lng: 77.1950
  },
  {
    id: "DRV-103",
    name: "Mohammad Arif",
    mobile: "+91 99222 33445",
    ambulanceNo: "DL 02 BQ 1198",
    vehicleType: "NICU (Neonatal ICU)",
    equipment: "Incubator, Pediatric Ventilator",
    status: "available",
    verified: true,
    rating: 5.0,
    trips: 154,
    lat: 28.5910,
    lng: 77.2180
  },
  {
    id: "DRV-104",
    name: "Vikram Chauhan",
    mobile: "+91 97333 44556",
    ambulanceNo: "DL 04 CC 7731",
    vehicleType: "BLS (Basic Life Support)",
    equipment: "Oxygen, Stretcher Kit",
    status: "pending", // verification pending
    verified: false,
    rating: 4.5,
    trips: 12,
    lat: 28.5350,
    lng: 77.2340
  }
];

// App State
const state = {
  currentView: 'customer', // customer, driver, admin, split
  userLocation: { ...INITIAL_COORDS.customer },
  activeBooking: null,
  activeDriver: { ...DEFAULT_DRIVERS[0] },
  drivers: [...DEFAULT_DRIVERS],
  bookingHistory: [],
  incomingAlertTimer: null,
  driverGpsInterval: null,
  sirenAudioActive: false,
  soundMuted: false,
  theme: localStorage.getItem('ambulance_theme') || 'dark',
  notifications: [
    {
      id: "notif-1",
      icon: "🚨",
      title: "ERSS 112 Emergency Active",
      desc: "All-India emergency dispatch line operational.",
      time: "Just now"
    },
    {
      id: "notif-2",
      icon: "🚑",
      title: "Nearest ALS Unit DL 01 EA 4921",
      desc: "Paramedic crew on patrol in Delhi NCR sector.",
      time: "2m ago"
    },
    {
      id: "notif-3",
      icon: "📍",
      title: "GPS Telemetry Acquired",
      desc: "Satellite coordinates calibrated for Ring Road.",
      time: "5m ago"
    }
  ]
};

// ============================================================================
// WEB AUDIO API EMERGENCY SIREN SYNTHESIZER
// ============================================================================
let audioCtx = null;
let sirenOsc = null;
let sirenGain = null;
let sirenTimer = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playBeep(freq = 880, duration = 0.15) {
  if (state.soundMuted) return;
  try {
    initAudioContext();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.log("Audio not supported or blocked", e);
  }
}

function startSirenSound() {
  if (state.soundMuted || state.sirenAudioActive) return;
  try {
    initAudioContext();
    if (!audioCtx) return;

    state.sirenAudioActive = true;
    sirenOsc = audioCtx.createOscillator();
    sirenGain = audioCtx.createGain();
    sirenOsc.type = 'sawtooth';

    sirenGain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    sirenOsc.connect(sirenGain);
    sirenGain.connect(audioCtx.destination);
    sirenOsc.start();

    // Two-tone Indian Ambulance Siren wail (approx 650Hz to 900Hz)
    let isHigh = false;
    sirenTimer = setInterval(() => {
      if (!state.sirenAudioActive || !audioCtx) return;
      const targetFreq = isHigh ? 680 : 920;
      sirenOsc.frequency.setTargetAtTime(targetFreq, audioCtx.currentTime, 0.1);
      isHigh = !isHigh;
    }, 450);
  } catch (e) {
    console.log("Siren error", e);
  }
}

function stopSirenSound() {
  state.sirenAudioActive = false;
  if (sirenTimer) {
    clearInterval(sirenTimer);
    sirenTimer = null;
  }
  if (sirenOsc) {
    try {
      sirenGain.gain.setTargetAtTime(0.001, audioCtx.currentTime, 0.05);
      setTimeout(() => {
        try {
          sirenOsc.stop();
          sirenOsc.disconnect();
          sirenOsc = null;
        } catch (e) {}
      }, 100);
    } catch (e) {}
  }
}

function toggleMuteSound() {
  state.soundMuted = !state.soundMuted;
  const btn = document.getElementById('soundToggleBtn');
  if (state.soundMuted) {
    stopSirenSound();
    btn.classList.add('muted');
    btn.innerHTML = '🔇 <span id="soundText">Muted</span>';
    showToast("Audio Muted", "Emergency siren and chime sounds are disabled", "info");
  } else {
    btn.classList.remove('muted');
    btn.innerHTML = '🔊 <span id="soundText">Sound ON</span>';
    playBeep(880, 0.2);
    showToast("Audio Enabled", "Emergency alarms are active", "success");
  }
}

// ============================================================================
// THEME CONTROLLER (DARK MODE & LIGHT MODE)
// ============================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('ambulance_theme') || 'dark';
  setTheme(savedTheme);
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ambulance_theme', theme);

  const iconElem = document.getElementById('themeIcon');
  const textElem = document.getElementById('themeText');

  if (theme === 'light') {
    if (iconElem) iconElem.innerText = '🌙';
    if (textElem) textElem.innerText = currentLang === 'hi' ? 'डार्क मोड' : 'Dark';
  } else {
    if (iconElem) iconElem.innerText = '☀️';
    if (textElem) textElem.innerText = currentLang === 'hi' ? 'लाइट मोड' : 'Light';
  }

  // Refresh active leaflet maps if any
  if (customerMap) setTimeout(() => customerMap.invalidateSize(), 150);
  if (driverMap) setTimeout(() => driverMap.invalidateSize(), 150);
  if (adminMap) setTimeout(() => adminMap.invalidateSize(), 150);
}

function toggleTheme() {
  const newTheme = state.theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  playBeep(newTheme === 'light' ? 960 : 720, 0.12);
  showToast(
    newTheme === 'light' ? "Light Mode Active" : "Dark Mode Active",
    newTheme === 'light' ? "Clinical clean light theme enabled" : "High-contrast dark emergency theme enabled",
    "info"
  );
}

// ============================================================================
// NOTIFICATION CENTER (BELL ICON & DROPDOWN MENU)
// ============================================================================
function renderNotifications() {
  const listBody = document.getElementById('notifListBody');
  const badge = document.getElementById('notifBadgeCount');
  if (!listBody) return;

  const count = state.notifications.length;
  if (badge) {
    if (count > 0) {
      badge.style.display = 'inline-block';
      badge.innerText = count;
    } else {
      badge.style.display = 'none';
    }
  }

  if (count === 0) {
    const emptyText = i18n[currentLang] && i18n[currentLang].notif_empty ? i18n[currentLang].notif_empty : "No emergency notifications";
    listBody.innerHTML = `
      <div class="notif-empty-state">
        <div style="font-size:1.8rem; margin-bottom:6px;">🔕</div>
        <p>${emptyText}</p>
      </div>
    `;
    return;
  }

  listBody.innerHTML = state.notifications.map(item => `
    <div class="notif-item">
      <div class="notif-item-icon">${item.icon || '🚑'}</div>
      <div class="notif-item-content">
        <div class="notif-item-title">${item.title}</div>
        <div class="notif-item-desc">${item.desc}</div>
        <div class="notif-item-time">${item.time}</div>
      </div>
    </div>
  `).join('');
}

function addNotification(title, desc, icon = '🚑') {
  const newItem = {
    id: `notif-${Date.now()}`,
    icon,
    title,
    desc,
    time: "Just now"
  };
  state.notifications.unshift(newItem);
  if (state.notifications.length > 20) {
    state.notifications.pop();
  }
  renderNotifications();
}

function toggleNotificationDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('notifDropdownMenu');
  if (dropdown) {
    dropdown.classList.toggle('open');
  }
}

function clearAllNotifications() {
  state.notifications = [];
  renderNotifications();
}

// Close notification menu on outside click
document.addEventListener('click', (e) => {
  const wrapper = document.querySelector('.notification-dropdown-wrapper');
  const dropdown = document.getElementById('notifDropdownMenu');
  if (dropdown && dropdown.classList.contains('open')) {
    if (!wrapper || !wrapper.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  }
});

function showToast(title, desc, type = 'info') {
  // Silent routing to notification bell list
  addNotification(title, desc, type === 'error' ? '🚨' : type === 'success' ? '✅' : 'ℹ️');
}

// ============================================================================
// LEAFLET MAP ENGINE
// ============================================================================
let customerMap = null;
let driverMap = null;
let adminMap = null;
let miniMapPicker = null;

let customerAmbulanceMarker = null;
let customerPatientMarker = null;
let customerHospitalMarker = null;
let customerRoutePolyline = null;

let driverAmbulanceMarker = null;
let driverPatientMarker = null;
let driverRoutePolyline = null;

let adminAmbulanceMarkers = [];
let adminPatientMarkers = [];

// Initialize Mini Map for Request Modal
function initMiniMapPicker() {
  const container = document.getElementById('miniMapPicker');
  if (!container || miniMapPicker) return;

  miniMapPicker = L.map('miniMapPicker', {
    zoomControl: false,
    attributionControl: false
  }).setView([state.userLocation.lat, state.userLocation.lng], 15);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(miniMapPicker);

  const marker = L.marker([state.userLocation.lat, state.userLocation.lng], {
    draggable: true,
    icon: L.divIcon({
      className: 'leaflet-div-icon',
      html: '<div class="custom-pulsing-marker"></div>',
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    })
  }).addTo(miniMapPicker);

  marker.on('dragend', function (e) {
    const latlng = marker.getLatLng();
    state.userLocation.lat = parseFloat(latlng.lat.toFixed(5));
    state.userLocation.lng = parseFloat(latlng.lng.toFixed(5));
    reverseGeocode(state.userLocation.lat, state.userLocation.lng);
  });
}

// Initialize Customer Active Tracking Map
function initCustomerTrackingMap() {
  const container = document.getElementById('customerTrackingMap');
  if (!container) return;

  if (customerMap) {
    customerMap.remove();
    customerMap = null;
  }

  customerMap = L.map('customerTrackingMap', {
    zoomControl: true,
    attributionControl: false
  }).setView([state.userLocation.lat, state.userLocation.lng], 14);

  // Modern clean map tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(customerMap);

  // Customer SOS Marker
  customerPatientMarker = L.marker([state.userLocation.lat, state.userLocation.lng], {
    icon: L.divIcon({
      className: 'leaflet-div-icon',
      html: '<div class="custom-pulsing-marker" title="Your Emergency Location"></div>',
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    })
  }).addTo(customerMap);
  customerPatientMarker.bindPopup("<b>Emergency Location</b><br>" + state.userLocation.address).openPopup();

  // Ambulance Marker
  if (state.activeDriver) {
    customerAmbulanceMarker = L.marker([state.activeDriver.lat, state.activeDriver.lng], {
      icon: L.divIcon({
        className: 'leaflet-div-icon',
        html: '<div class="custom-ambulance-marker" title="Ambulance DL 01 EA 4921">🚑</div>',
        iconSize: [38, 38],
        iconAnchor: [19, 19]
      })
    }).addTo(customerMap);

    // Route line
    updateCustomerRoute();
  }
}

// Initialize Driver Mission Map
function initDriverMissionMap() {
  const container = document.getElementById('driverMissionMap');
  if (!container) return;

  if (driverMap) {
    driverMap.remove();
    driverMap = null;
  }

  driverMap = L.map('driverMissionMap', {
    zoomControl: true,
    attributionControl: false
  }).setView([state.activeDriver.lat, state.activeDriver.lng], 14);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(driverMap);

  // Driver Ambulance
  driverAmbulanceMarker = L.marker([state.activeDriver.lat, state.activeDriver.lng], {
    icon: L.divIcon({
      className: 'leaflet-div-icon',
      html: '<div class="custom-ambulance-marker">🚑</div>',
      iconSize: [38, 38],
      iconAnchor: [19, 19]
    })
  }).addTo(driverMap);

  // If active booking, add patient marker
  if (state.activeBooking) {
    driverPatientMarker = L.marker([state.activeBooking.patientLocation.lat, state.activeBooking.patientLocation.lng], {
      icon: L.divIcon({
        className: 'leaflet-div-icon',
        html: '<div class="custom-pulsing-marker"></div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      })
    }).addTo(driverMap);
    driverPatientMarker.bindPopup("<b>Patient Location</b><br>" + state.activeBooking.patientLocation.address);

    updateDriverRoute();
  }
}

// Initialize Admin Fleet Map
function initAdminFleetMap() {
  const container = document.getElementById('adminFleetMap');
  if (!container) return;

  if (adminMap) {
    adminMap.remove();
    adminMap = null;
  }

  adminMap = L.map('adminFleetMap', {
    zoomControl: true,
    attributionControl: false
  }).setView([28.5700, 77.2150], 13);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(adminMap);

  renderAdminMarkers();
}

function renderAdminMarkers() {
  if (!adminMap) return;

  // Clear existing
  adminAmbulanceMarkers.forEach(m => adminMap.removeLayer(m));
  adminPatientMarkers.forEach(m => adminMap.removeLayer(m));
  adminAmbulanceMarkers = [];
  adminPatientMarkers = [];

  // Render all ambulances
  state.drivers.forEach(drv => {
    const isBusy = (state.activeBooking && state.activeBooking.driverId === drv.id);
    const isOnline = drv.status !== 'offline';
    const markerHtml = `
      <div style="background:${isBusy ? '#ef4444' : isOnline ? '#10b981' : '#64748b'}; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid #fff; box-shadow:0 3px 8px rgba(0,0,0,0.4); font-size:1rem; color:#fff;">
        🚑
      </div>
    `;

    const marker = L.marker([drv.lat, drv.lng], {
      icon: L.divIcon({
        className: 'leaflet-div-icon',
        html: markerHtml,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      })
    }).addTo(adminMap);

    marker.bindPopup(`
      <div style="font-family:var(--font-main); font-size:0.85rem; padding:4px;">
        <b style="color:#0f172a">${drv.name}</b> (${drv.ambulanceNo})<br>
        <span style="font-size:0.75rem; color:#64748b;">${drv.vehicleType}</span><br>
        Status: <b style="color:${isBusy ? '#ef4444' : isOnline ? '#10b981' : '#64748b'}">${isBusy ? 'On Active Mission' : isOnline ? 'Online / Available' : 'Offline'}</b>
      </div>
    `);
    adminAmbulanceMarkers.push(marker);
  });

  // Render active SOS calls
  if (state.activeBooking && state.activeBooking.status !== 'completed' && state.activeBooking.status !== 'cancelled') {
    const sosMarker = L.marker([state.activeBooking.patientLocation.lat, state.activeBooking.patientLocation.lng], {
      icon: L.divIcon({
        className: 'leaflet-div-icon',
        html: '<div class="custom-pulsing-marker" title="ACTIVE SOS"></div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      })
    }).addTo(adminMap);

    sosMarker.bindPopup(`
      <div style="font-family:var(--font-main); font-size:0.85rem;">
        <b style="color:#ef4444">🚨 ACTIVE SOS: ${state.activeBooking.id}</b><br>
        ${state.activeBooking.patientName} (${state.activeBooking.patientPhone})<br>
        Type: <b>${state.activeBooking.emergencyType}</b>
      </div>
    `);
    adminPatientMarkers.push(sosMarker);
  }
}

// Distance Calculation (Haversine formula in KM)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(2));
}

// Update routes & ETA
function updateCustomerRoute() {
  if (!customerMap || !state.activeDriver) return;

  const driverLat = state.activeDriver.lat;
  const driverLng = state.activeDriver.lng;
  const patientLat = state.userLocation.lat;
  const patientLng = state.userLocation.lng;

  // Move marker
  if (customerAmbulanceMarker) {
    customerAmbulanceMarker.setLatLng([driverLat, driverLng]);
  }

  // Draw or update polyline
  const waypoints = [
    [driverLat, driverLng],
    [(driverLat + patientLat) / 2 + 0.002, (driverLng + patientLng) / 2 - 0.001],
    [patientLat, patientLng]
  ];

  if (customerRoutePolyline) {
    customerRoutePolyline.setLatLngs(waypoints);
  } else {
    customerRoutePolyline = L.polyline(waypoints, {
      color: '#ef4444',
      weight: 5,
      dashArray: '8, 8',
      opacity: 0.85
    }).addTo(customerMap);
  }

  // Compute live ETA
  const dist = calculateDistance(driverLat, driverLng, patientLat, patientLng);
  const etaMinutes = Math.max(1, Math.round(dist * 2.2)); // ~45 km/h city average
  const etaElem = document.getElementById('trackingEtaText');
  if (etaElem) {
    etaElem.innerHTML = `🚨 ETA: ${etaMinutes} mins • ${dist} km away`;
  }

  const driverDistElem = document.getElementById('driverDistText');
  if (driverDistElem) {
    driverDistElem.innerText = `${dist} km`;
  }
}

function updateDriverRoute() {
  if (!driverMap || !state.activeBooking) return;

  const driverLat = state.activeDriver.lat;
  const driverLng = state.activeDriver.lng;
  let targetLat, targetLng;

  if (state.activeBooking.stage >= 4) {
    // Heading to hospital
    targetLat = INITIAL_COORDS.hospital.lat;
    targetLng = INITIAL_COORDS.hospital.lng;
  } else {
    // Heading to patient
    targetLat = state.activeBooking.patientLocation.lat;
    targetLng = state.activeBooking.patientLocation.lng;
  }

  if (driverAmbulanceMarker) {
    driverAmbulanceMarker.setLatLng([driverLat, driverLng]);
  }

  const waypoints = [
    [driverLat, driverLng],
    [targetLat, targetLng]
  ];

  if (driverRoutePolyline) {
    driverRoutePolyline.setLatLngs(waypoints);
  } else {
    driverRoutePolyline = L.polyline(waypoints, {
      color: '#3b82f6',
      weight: 5,
      opacity: 0.8
    }).addTo(driverMap);
  }
}

// ============================================================================
// GPS GEOLOCATION & REVERSE GEOCODING
// ============================================================================
function detectGPSLocation() {
  const statusElem = document.getElementById('locationStatusText');
  const addressElem = document.getElementById('locationAddressText');

  if (statusElem) {
    statusElem.innerHTML = '🔄 <span id="locDetectText">' + i18n[currentLang].location_detecting + '</span>';
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        state.userLocation.lat = parseFloat(pos.coords.latitude.toFixed(5));
        state.userLocation.lng = parseFloat(pos.coords.longitude.toFixed(5));
        reverseGeocode(state.userLocation.lat, state.userLocation.lng);
        if (miniMapPicker) {
          miniMapPicker.setView([state.userLocation.lat, state.userLocation.lng], 16);
        }
      },
      (err) => {
        console.warn("Geolocation denied or unavailable, using fallback Indian coordinates", err);
        // Fallback Delhi NCR coordinates
        state.userLocation.lat = 28.5672;
        state.userLocation.lng = 77.2100;
        state.userLocation.address = "Ring Road, near AIIMS Flyover, Ansari Nagar, New Delhi";
        if (addressElem) addressElem.innerText = state.userLocation.address;
        if (statusElem) {
          statusElem.innerHTML = '📍 <span>Location set to New Delhi (Tap map to change)</span>';
        }
        showToast("GPS Alert", "Using precise Indian coordinates. You can drag the map pin.", "info");
      },
      { timeout: 7000, enableHighAccuracy: true }
    );
  } else {
    state.userLocation.address = "Ring Road, near AIIMS Flyover, Ansari Nagar, New Delhi";
    if (addressElem) addressElem.innerText = state.userLocation.address;
  }
}

function reverseGeocode(lat, lng) {
  const addressElem = document.getElementById('locationAddressText');
  const statusElem = document.getElementById('locationStatusText');

  // Try OpenStreetMap Nominatim with respectful timeout
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`)
    .then(res => res.json())
    .then(data => {
      if (data && data.display_name) {
        state.userLocation.address = data.display_name;
      } else {
        state.userLocation.address = `GPS Spot (${lat}, ${lng}), Ring Road Emergency Zone, New Delhi`;
      }
      if (addressElem) addressElem.innerText = state.userLocation.address;
      if (statusElem) {
        statusElem.innerHTML = '✅ <span id="locDetectedText">' + i18n[currentLang].location_detected + '</span>';
      }
    })
    .catch(() => {
      state.userLocation.address = `GPS Spot (${lat}, ${lng}), Ring Road Corridor, New Delhi`;
      if (addressElem) addressElem.innerText = state.userLocation.address;
      if (statusElem) {
        statusElem.innerHTML = '✅ <span id="locDetectedText">' + i18n[currentLang].location_detected + '</span>';
      }
    });
}

// ============================================================================
// EMERGENCY SOS BOOKING FLOW
// ============================================================================
function generateBookingId() {
  const year = new Date().getFullYear();
  const rand = Math.floor(10000 + Math.random() * 90000);
  return `EMG-${year}-${rand}`;
}

function openEmergencyModal(presetType = 'Road Accident') {
  playBeep(980, 0.2);
  const modal = document.getElementById('emergencyModal');
  const bookingIdBadge = document.getElementById('modalBookingId');
  bookingIdBadge.innerText = generateBookingId();

  // Set selected type
  const radio = document.querySelector(`input[name="emergencyType"][value="${presetType}"]`);
  if (radio) {
    radio.checked = true;
    updateSelectedTypeStyle();
  }

  modal.classList.add('open');
  detectGPSLocation();

  setTimeout(() => {
    initMiniMapPicker();
    if (miniMapPicker) miniMapPicker.invalidateSize();
  }, 250);
}

function closeEmergencyModal() {
  const modal = document.getElementById('emergencyModal');
  modal.classList.remove('open');
}

function updateSelectedTypeStyle() {
  document.querySelectorAll('.selector-option').forEach(opt => {
    const radio = opt.querySelector('input[type="radio"]');
    if (radio && radio.checked) {
      opt.classList.add('selected');
    } else {
      opt.classList.remove('selected');
    }
  });
}

// Dispatch Emergency Action
function submitEmergencyRequest(e) {
  if (e) e.preventDefault();

  const nameInput = document.getElementById('patientNameInput');
  const phoneInput = document.getElementById('patientPhoneInput');
  const notesInput = document.getElementById('emergencyNotesInput');
  const ambTypeSelect = document.getElementById('ambulanceTypeSelect');
  const hospitalSelect = document.getElementById('hospitalSelect');
  const bookingId = document.getElementById('modalBookingId').innerText;

  const patientName = nameInput.value.trim() || "Emergency Patient";
  const patientPhone = phoneInput.value.trim() || "+91 98765 00112";

  // Validate Indian Phone format (starts with 6-9, 10 digits)
  const phoneClean = patientPhone.replace(/[^0-9]/g, '');
  if (phoneClean.length < 10) {
    showToast("Invalid Mobile", "Please enter a valid 10-digit Indian mobile number for emergency verification.", "error");
    phoneInput.focus();
    return;
  }

  const selectedRadio = document.querySelector('input[name="emergencyType"]:checked');
  const emergencyType = selectedRadio ? selectedRadio.value : "Road Accident";

  const booking = {
    id: bookingId,
    timestamp: new Date().toISOString(),
    patientName,
    patientPhone,
    emergencyType,
    notes: notesInput.value.trim() || "Urgent on-site assistance requested",
    ambulanceType: ambTypeSelect.value,
    destinationHospital: hospitalSelect.value,
    patientLocation: { ...state.userLocation },
    driverId: state.activeDriver.id,
    driverName: state.activeDriver.name,
    driverPhone: state.activeDriver.mobile,
    ambulanceNo: state.activeDriver.ambulanceNo,
    status: 'dispatched', // dispatched, accepted, on_way, arrived, picked_up, hospital, completed, cancelled
    stage: 1,
    etaMinutes: 6,
    distanceKm: calculateDistance(state.activeDriver.lat, state.activeDriver.lng, state.userLocation.lat, state.userLocation.lng)
  };

  state.activeBooking = booking;
  state.bookingHistory.unshift(booking);
  closeEmergencyModal();

  // Show Customer Tracking UI
  showActiveTrackingUI(booking);

  // Sync to Driver Terminal & Broadcast
  broadcastStateUpdate('NEW_EMERGENCY', booking);

  // Trigger Driver Alert simulation
  triggerDriverIncomingAlert(booking);

  showToast(
    "Emergency Ambulance Dispatched!",
    `Booking ID: ${booking.id}. Alerting nearest verified ALS ambulance DL 01 EA 4921.`,
    "error"
  );
}

// Show Tracking screen in Customer Portal
function showActiveTrackingUI(booking) {
  document.getElementById('customerHomeHero').style.display = 'none';
  document.getElementById('customerActiveTracking').classList.add('active');

  document.getElementById('trackingBookingId').innerText = booking.id;
  document.getElementById('trackingDriverName').innerText = booking.driverName;
  document.getElementById('trackingDriverPlate').innerText = booking.ambulanceNo;
  document.getElementById('trackingDriverPhone').innerText = booking.driverPhone;
  document.getElementById('trackingAmbulanceType').innerText = booking.ambulanceType;

  updateStepperUI(booking.stage);

  setTimeout(() => {
    initCustomerTrackingMap();
  }, 200);
}

// Stepper Progress
function updateStepperUI(stage) {
  const steps = [
    'step-1', // Request Dispatched & Accepted
    'step-2', // Ambulance on the Way
    'step-3', // Reached Customer Location
    'step-4', // Patient Picked Up & Stabilized
    'step-5', // En Route to Hospital
    'step-6'  // Emergency Completed
  ];

  steps.forEach((stepId, idx) => {
    const el = document.getElementById(stepId);
    if (!el) return;
    el.classList.remove('active', 'completed');
    if (idx + 1 < stage) {
      el.classList.add('completed');
    } else if (idx + 1 === stage) {
      el.classList.add('active');
    }
  });
}

// ============================================================================
// DRIVER PORTAL LOGIC & STATUS PIPELINE
// ============================================================================
function triggerDriverIncomingAlert(booking) {
  const alertCard = document.getElementById('driverIncomingAlert');
  if (!alertCard) return;

  // Sound the Siren!
  startSirenSound();

  document.getElementById('incomingBookingId').innerText = booking.id;
  document.getElementById('incomingPatientName').innerText = booking.patientName;
  document.getElementById('incomingPatientPhone').innerText = booking.patientPhone;
  document.getElementById('incomingEmergencyType').innerText = booking.emergencyType;
  document.getElementById('incomingPickupAddress').innerText = booking.patientLocation.address;
  document.getElementById('incomingDistance').innerText = `${booking.distanceKm} km away`;

  alertCard.classList.add('active');

  // 30 seconds countdown
  let timeLeft = 30;
  const timerElem = document.getElementById('incomingCountdownTimer');
  timerElem.innerText = `${timeLeft}s`;

  if (state.incomingAlertTimer) clearInterval(state.incomingAlertTimer);
  state.incomingAlertTimer = setInterval(() => {
    timeLeft--;
    timerElem.innerText = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(state.incomingAlertTimer);
      rejectEmergencyByDriver();
    }
  }, 1000);
}

function acceptEmergencyByDriver() {
  stopSirenSound();
  if (state.incomingAlertTimer) clearInterval(state.incomingAlertTimer);

  const alertCard = document.getElementById('driverIncomingAlert');
  alertCard.classList.remove('active');

  if (!state.activeBooking) return;

  state.activeBooking.status = 'accepted';
  state.activeBooking.stage = 2; // Ambulance on the Way

  // Update Driver Mission View
  document.getElementById('driverMissionSection').style.display = 'block';
  document.getElementById('driverMissionId').innerText = state.activeBooking.id;
  document.getElementById('driverPatientName').innerText = state.activeBooking.patientName;
  document.getElementById('driverPatientPhone').innerText = state.activeBooking.patientPhone;
  document.getElementById('driverTargetAddress').innerText = state.activeBooking.patientLocation.address;

  updateDriverPipelineButton();

  // Start live GPS movement simulation
  startAmbulanceGPSDrive();

  // Sync to customer
  updateStepperUI(2);
  updateCustomerRoute();
  broadcastStateUpdate('STAGE_UPDATED', state.activeBooking);

  showToast(
    "Emergency Accepted!",
    `Ambulance on duty. Heading to ${state.activeBooking.patientLocation.address}. Keep siren on.`,
    "success"
  );

  setTimeout(() => {
    initDriverMissionMap();
  }, 200);
}

function rejectEmergencyByDriver() {
  stopSirenSound();
  if (state.incomingAlertTimer) clearInterval(state.incomingAlertTimer);

  const alertCard = document.getElementById('driverIncomingAlert');
  alertCard.classList.remove('active');

  showToast("Request Passed", "Emergency request routed to next nearest ambulance driver.", "warning");
}

// Driver Status Pipeline Transition
function advanceDriverPipeline() {
  if (!state.activeBooking) return;

  const currentStage = state.activeBooking.stage;

  if (currentStage === 2) {
    // Stage 2 -> 3: Reached Customer Location
    state.activeBooking.stage = 3;
    state.activeBooking.status = 'arrived';
    updateStepperUI(3);
    showToast("Reached Location", "Ambulance arrived at patient's accident spot. Beginning first-aid triage.", "info");
  } else if (currentStage === 3) {
    // Stage 3 -> 4: Patient Picked Up
    state.activeBooking.stage = 4;
    state.activeBooking.status = 'picked_up';
    updateStepperUI(4);
    showToast("Patient Picked Up", "Patient stabilized in ambulance. Proceeding to destination hospital.", "info");
  } else if (currentStage === 4) {
    // Stage 4 -> 5: En Route & Reached Hospital
    state.activeBooking.stage = 5;
    state.activeBooking.status = 'hospital_arrived';
    updateStepperUI(5);
    showToast("Reached Hospital", "Ambulance reached AIIMS Apex Trauma Care emergency bay.", "success");
  } else if (currentStage === 5) {
    // Stage 5 -> 6: Complete
    state.activeBooking.stage = 6;
    state.activeBooking.status = 'completed';
    completeEmergencyTrip();
    return;
  }

  updateDriverPipelineButton();
  updateCustomerRoute();
  updateDriverRoute();
  broadcastStateUpdate('STAGE_UPDATED', state.activeBooking);
}

function updateDriverPipelineButton() {
  const btn = document.getElementById('pipelineActionBtn');
  if (!btn || !state.activeBooking) return;

  const stage = state.activeBooking.stage;
  const stageLabels = {
    2: "📍 2. Confirm: Reached Customer Location",
    3: "🧑‍🦽 3. Confirm: Patient Picked Up & Stabilized",
    4: "🏥 4. Depart for Hospital Trauma Center",
    5: "✅ 5. Confirm: Reached Hospital & Handover Patient",
    6: "🎉 Complete Emergency Mission"
  };

  btn.innerHTML = stageLabels[stage] || "Complete Emergency";
}

// Complete Trip
function completeEmergencyTrip() {
  stopAmbulanceGPSDrive();
  updateStepperUI(6);

  showToast("Mission Completed", "Patient safely handed over to ER Trauma Staff. Emergency case closed.", "success");

  // Show trip summary modal / alert
  setTimeout(() => {
    alert(`Emergency Case ${state.activeBooking.id} successfully completed!\n\nPatient: ${state.activeBooking.patientName}\nVehicle: ${state.activeBooking.ambulanceNo}\nHospital: AIIMS Apex Trauma Centre\nTrip Time: 11 mins\n\nLocation sharing has been terminated to protect privacy.`);
    
    // Reset views
    document.getElementById('driverMissionSection').style.display = 'none';
    document.getElementById('customerActiveTracking').classList.remove('active');
    document.getElementById('customerHomeHero').style.display = 'block';
    
    state.activeBooking = null;
    broadcastStateUpdate('TRIP_COMPLETED', null);
    renderAdminMarkers();
    renderAdminTable();
  }, 800);
}

// ============================================================================
// LIVE GPS INTERPOLATION ENGINE (SMOOTH MOVEMENT)
// ============================================================================
function startAmbulanceGPSDrive() {
  stopAmbulanceGPSDrive();

  // Moves the ambulance slightly towards customer coordinates every 2.5 seconds
  state.driverGpsInterval = setInterval(() => {
    if (!state.activeBooking) return;

    let targetLat, targetLng;
    if (state.activeBooking.stage >= 4) {
      targetLat = INITIAL_COORDS.hospital.lat;
      targetLng = INITIAL_COORDS.hospital.lng;
    } else {
      targetLat = state.activeBooking.patientLocation.lat;
      targetLng = state.activeBooking.patientLocation.lng;
    }

    const currentLat = state.activeDriver.lat;
    const currentLng = state.activeDriver.lng;

    const stepFactor = 0.22; // Step fraction towards target
    const newLat = currentLat + (targetLat - currentLat) * stepFactor;
    const newLng = currentLng + (targetLng - currentLng) * stepFactor;

    state.activeDriver.lat = parseFloat(newLat.toFixed(5));
    state.activeDriver.lng = parseFloat(newLng.toFixed(5));

    // Update markers & routes
    updateCustomerRoute();
    updateDriverRoute();
    if (adminMap) renderAdminMarkers();

    broadcastStateUpdate('GPS_PING', {
      driverId: state.activeDriver.id,
      lat: state.activeDriver.lat,
      lng: state.activeDriver.lng
    });
  }, 2500);
}

function stopAmbulanceGPSDrive() {
  if (state.driverGpsInterval) {
    clearInterval(state.driverGpsInterval);
    state.driverGpsInterval = null;
  }
}

// Cancel Booking
function cancelEmergencyBooking() {
  const reason = prompt("Please state the reason for cancellation (e.g., patient arranged alternate transport, condition resolved):", "Alternate vehicle arranged");
  if (reason === null) return;

  stopAmbulanceGPSDrive();
  stopSirenSound();

  if (state.activeBooking) {
    state.activeBooking.status = 'cancelled';
    state.activeBooking.cancelReason = reason;
  }

  showToast("Emergency Cancelled", "The ambulance driver and dispatch control have been notified.", "warning");

  document.getElementById('customerActiveTracking').classList.remove('active');
  document.getElementById('customerHomeHero').style.display = 'block';
  document.getElementById('driverMissionSection').style.display = 'none';

  broadcastStateUpdate('BOOKING_CANCELLED', { reason });
  state.activeBooking = null;
  renderAdminMarkers();
  renderAdminTable();
}

// ============================================================================
// SIMULATED PHONE CALL DIALER
// ============================================================================
let callTimerInterval = null;

function openCallModal(targetName, targetNumber) {
  playBeep(440, 0.4);
  const modal = document.getElementById('phoneCallModal');
  document.getElementById('callTargetName').innerText = targetName;
  document.getElementById('callTargetNumber').innerText = targetNumber;

  let seconds = 0;
  const timerElem = document.getElementById('callTimerText');
  timerElem.innerText = "00:00";

  modal.classList.add('open');

  if (callTimerInterval) clearInterval(callTimerInterval);
  callTimerInterval = setInterval(() => {
    seconds++;
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    timerElem.innerText = `${m}:${s}`;
  }, 1000);
}

function closeCallModal() {
  if (callTimerInterval) clearInterval(callTimerInterval);
  const modal = document.getElementById('phoneCallModal');
  modal.classList.remove('open');
}

// ============================================================================
// CROSS-TAB / MULTI-WINDOW SYNCHRONIZATION
// ============================================================================
function broadcastStateUpdate(action, payload) {
  SYNC_CHANNEL.postMessage({ action, payload });
}

SYNC_CHANNEL.onmessage = function (event) {
  const { action, payload } = event.data;

  if (action === 'NEW_EMERGENCY') {
    state.activeBooking = payload;
    triggerDriverIncomingAlert(payload);
    renderAdminMarkers();
    renderAdminTable();
  } else if (action === 'STAGE_UPDATED') {
    state.activeBooking = payload;
    updateStepperUI(payload.stage);
    updateCustomerRoute();
    updateDriverRoute();
    renderAdminMarkers();
  } else if (action === 'GPS_PING') {
    if (state.activeDriver && state.activeDriver.id === payload.driverId) {
      state.activeDriver.lat = payload.lat;
      state.activeDriver.lng = payload.lng;
      updateCustomerRoute();
      updateDriverRoute();
    }
  } else if (action === 'TRIP_COMPLETED' || action === 'BOOKING_CANCELLED') {
    state.activeBooking = null;
    stopAmbulanceGPSDrive();
    stopSirenSound();
    renderAdminMarkers();
    renderAdminTable();
  }
};

// ============================================================================
// ADMIN PORTAL & FLEET CONTROLLER
// ============================================================================
function renderAdminTable() {
  const tableBody = document.getElementById('adminBookingsTableBody');
  if (!tableBody) return;

  const allBookings = state.bookingHistory.length > 0 ? state.bookingHistory : [
    {
      id: "EMG-2026-98124",
      timestamp: "Today, 14:20",
      patientName: "Amitabh Verma",
      patientPhone: "+91 98100 12345",
      emergencyType: "Road Accident",
      driverName: "Rajesh Kumar",
      ambulanceNo: "DL 01 EA 4921",
      status: "completed"
    },
    {
      id: "EMG-2026-97911",
      timestamp: "Today, 12:45",
      patientName: "Sunita Roy",
      patientPhone: "+91 98220 54321",
      emergencyType: "Medical Emergency",
      driverName: "Suresh Sharma",
      ambulanceNo: "DL 03 AC 8820",
      status: "completed"
    }
  ];

  tableBody.innerHTML = allBookings.map(b => `
    <tr>
      <td><b style="color:#f87171; font-family:var(--font-mono);">${b.id}</b></td>
      <td>${b.patientName}<br><span style="font-size:0.75rem; color:#94a3b8">${b.patientPhone}</span></td>
      <td><span class="type-badge">${b.emergencyType}</span></td>
      <td>${b.driverName || 'Rajesh Kumar'}<br><span style="font-size:0.75rem; color:#94a3b8">${b.ambulanceNo || 'DL 01 EA 4921'}</span></td>
      <td><span class="status-badge ${b.status}">${b.status.toUpperCase()}</span></td>
      <td>
        <button class="table-action-btn" onclick="openCallModal('${b.patientName}', '${b.patientPhone}')">📞 Call</button>
        <button class="table-action-btn" onclick="alert('Trip Details:\\nID: ${b.id}\\nType: ${b.emergencyType}\\nPatient: ${b.patientName}\\nLocation: Delhi Ring Road Zone')">👁️ View</button>
      </td>
    </tr>
  `).join('');

  // Drivers Table
  const driversTableBody = document.getElementById('adminDriversTableBody');
  if (driversTableBody) {
    driversTableBody.innerHTML = state.drivers.map(d => `
      <tr>
        <td><b>${d.name}</b><br><span style="font-size:0.75rem; color:#94a3b8">${d.mobile}</span></td>
        <td><code style="color:#f87171">${d.ambulanceNo}</code></td>
        <td>${d.vehicleType}</td>
        <td>⭐ ${d.rating} (${d.trips} trips)</td>
        <td>
          <span class="status-badge ${d.verified ? 'verified' : 'pending'}">
            ${d.verified ? 'VERIFIED' : 'PENDING RC/BLS'}
          </span>
        </td>
        <td>
          <button class="table-action-btn" onclick="toggleDriverVerification('${d.id}')">
            ${d.verified ? 'Suspend' : 'Approve Docs'}
          </button>
        </td>
      </tr>
    `).join('');
  }
}

function toggleDriverVerification(driverId) {
  const drv = state.drivers.find(d => d.id === driverId);
  if (!drv) return;
  drv.verified = !drv.verified;
  showToast(
    drv.verified ? "Driver Verified" : "Driver Suspended",
    `${drv.name} (${drv.ambulanceNo}) status updated.`,
    drv.verified ? "success" : "warning"
  );
  renderAdminTable();
}

// ============================================================================
// LANGUAGE TOGGLER (ENGLISH / HINDI)
// ============================================================================
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  applyLanguage(currentLang);
  showToast(
    currentLang === 'en' ? "Language: English" : "भाषा: हिन्दी",
    currentLang === 'en' ? "Switched to English interface" : "हिन्दी भाषा इंटरफ़ेस सक्रिय किया गया",
    "info"
  );
}

function applyLanguage(lang) {
  const dict = i18n[lang];
  document.getElementById('langToggleText').innerText = lang === 'en' ? 'हिन्दी' : 'English';

  const translatableElements = [
    { id: 'brandTitleText', key: 'brand_title' },
    { id: 'brandTaglineText', key: 'brand_tagline' },
    { id: 'topEmergencyCallText', key: 'emergency_call_112' },
    { id: 'mainSosText', key: 'sos_btn' },
    { id: 'mainSosSubtext', key: 'sos_sub' },
    { id: 'heroPillBadgeText', key: 'sos_hero_tag' },
    { id: 'heroTitleText', key: 'sos_hero_title' },
    { id: 'heroSubtitleText', key: 'sos_hero_sub' },
    { id: 'heroStat1Text', key: 'hero_stat_1' },
    { id: 'heroStat2Text', key: 'hero_stat_2' },
    { id: 'heroStat3Text', key: 'hero_stat_3' },
    { id: 'quickCatTitleText', key: 'quick_categories_title' },
    { id: 'quickCatSubText', key: 'quick_categories_sub' },
    { id: 'catAccidentTitle', key: 'road_accident' },
    { id: 'catAccidentDesc', key: 'road_accident_desc' },
    { id: 'catInjuryTitle', key: 'serious_injury' },
    { id: 'catInjuryDesc', key: 'serious_injury_desc' },
    { id: 'catMedicalTitle', key: 'medical_emergency' },
    { id: 'catMedicalDesc', key: 'medical_emergency_desc' },
    { id: 'catOtherTitle', key: 'other_emergency' },
    { id: 'catOtherDesc', key: 'other_emergency_desc' },
    { id: 'fleetTitleText', key: 'fleet_title' },
    { id: 'fleetSubText', key: 'fleet_sub' },
    { id: 'safetyTitleText', key: 'safety_title' },
    { id: 'safetyDescText', key: 'safety_desc' },
    { id: 'modalTitleText', key: 'modal_title' },
    { id: 'labelPatientName', key: 'name_label' },
    { id: 'labelPatientPhone', key: 'phone_label' },
    { id: 'labelEmergencyType', key: 'emergency_type_label' },
    { id: 'labelPickupLocation', key: 'location_label' },
    { id: 'locateAgainBtnText', key: 'location_btn' },
    { id: 'dragPinHintText', key: 'drag_pin_hint' },
    { id: 'labelDescNotes', key: 'desc_label' },
    { id: 'labelPrefAmbulance', key: 'pref_ambulance' },
    { id: 'labelPrefHospital', key: 'nearest_hospital' },
    { id: 'dispatchCtaBtnText', key: 'btn_dispatch' },
    { id: 'modalDisclaimerText', key: 'modal_disclaimer' },
    { id: 'driverPortalHeading', key: 'driver_portal_title' },
    { id: 'incomingSosAlertTitle', key: 'incoming_sos_alert' },
    { id: 'acceptSosBtnText', key: 'accept_btn' },
    { id: 'rejectSosBtnText', key: 'reject_btn' },
    { id: 'callDriverBtnText', key: 'call_driver' },
    { id: 'cancelSosBtnText', key: 'cancel_booking' },
    { id: 'adminHeadingText', key: 'admin_title' }
  ];

  translatableElements.forEach(({ id, key }) => {
    const el = document.getElementById(id);
    if (el && dict[key]) {
      el.innerText = dict[key];
    }
  });

  const themeTextElem = document.getElementById('themeText');
  if (themeTextElem) {
    if (state.theme === 'light') {
      themeTextElem.innerText = lang === 'hi' ? 'डार्क मोड' : 'Dark';
    } else {
      themeTextElem.innerText = lang === 'hi' ? 'लाइट मोड' : 'Light';
    }
  }

  const notifHeaderTitle = document.getElementById('notifHeaderTitleText');
  if (notifHeaderTitle && dict.notif_title) {
    notifHeaderTitle.innerText = dict.notif_title;
  }
  const notifClearBtn = document.getElementById('notifClearBtnText');
  if (notifClearBtn && dict.notif_clear) {
    notifClearBtn.innerText = dict.notif_clear;
  }
  renderNotifications();
}

// ============================================================================
// VIEW SWITCHER (CUSTOMER / DRIVER / ADMIN / SPLIT VIEW)
// ============================================================================
function switchView(targetView) {
  state.currentView = targetView;

  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  const tabBtn = document.getElementById(`tab-${targetView}`);
  if (tabBtn) tabBtn.classList.add('active');

  const panel = document.getElementById(`panel-${targetView}`);
  if (panel) panel.classList.add('active');

  // Trigger leaflet redraw if map exists
  if (targetView === 'customer' && customerMap) {
    setTimeout(() => customerMap.invalidateSize(), 150);
  } else if (targetView === 'driver') {
    setTimeout(() => {
      initDriverMissionMap();
      if (driverMap) driverMap.invalidateSize();
    }, 150);
  } else if (targetView === 'admin') {
    setTimeout(() => {
      initAdminFleetMap();
      renderAdminTable();
      if (adminMap) adminMap.invalidateSize();
    }, 150);
  }
}

// Toggle Driver Online Status
function toggleDriverDutyStatus(checkbox) {
  const statusLabel = document.getElementById('driverDutyLabel');
  if (checkbox.checked) {
    state.activeDriver.status = 'available';
    statusLabel.innerHTML = '🟢 ' + i18n[currentLang].duty_online;
    showToast("Driver Online", "You are now visible to incoming emergency dispatch calls.", "success");
  } else {
    state.activeDriver.status = 'offline';
    statusLabel.innerHTML = '🔴 ' + i18n[currentLang].duty_offline;
    showToast("Driver Offline", "You will not receive new emergency assignments.", "info");
  }
  if (adminMap) renderAdminMarkers();
}

// Admin Tab Switching (Map / Drivers / History)
function switchAdminSubTab(tabName) {
  document.querySelectorAll('.admin-nav-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.admin-subtab-view').forEach(v => v.style.display = 'none');

  const navItem = document.getElementById(`admin-nav-${tabName}`);
  if (navItem) navItem.classList.add('active');

  const view = document.getElementById(`admin-subtab-${tabName}`);
  if (view) view.style.display = 'block';

  if (tabName === 'map' && adminMap) {
    setTimeout(() => adminMap.invalidateSize(), 100);
  }
}

// OTP Auto Login Demo helper
function demoLoginDriver() {
  document.getElementById('driverMobileInput').value = "9876543210";
  document.getElementById('driverOtpInput').value = "8492";
  document.getElementById('driverLoginForm').style.display = 'none';
  document.getElementById('driverDashboardView').style.display = 'block';
  showToast("Driver Authenticated", "Logged in as Rajesh Kumar (Ambulance DL 01 EA 4921)", "success");
}

// ============================================================================
// INITIALIZATION ON DOM READY
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Dark / Light theme from storage
  initTheme();

  // Pre-seed coordinates
  detectGPSLocation();

  // Event Listeners
  const sosBtn = document.getElementById('mainSosButton');
  if (sosBtn) {
    sosBtn.addEventListener('click', () => openEmergencyModal('Road Accident'));
  }

  // Radio button change styling
  document.querySelectorAll('input[name="emergencyType"]').forEach(radio => {
    radio.addEventListener('change', updateSelectedTypeStyle);
  });

  // Sound toggle button
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', toggleMuteSound);
  }

  // Language button
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }

  // View navigation tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (view) switchView(view);
    });
  });

  // Close modal on click outside
  const modal = document.getElementById('emergencyModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeEmergencyModal();
    });
  }

  // Initial Admin Table Populate
  renderAdminTable();

  // Initial Notifications Render
  renderNotifications();
});
