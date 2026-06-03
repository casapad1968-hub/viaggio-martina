// ==================== CHECKLIST DATA ====================
const checklistData = {
  docs: [
    "Passaporto con validità residua >6 mesi (controllare scadenza)",
    "Voli internazionali salvati offline (MXP-BKK, BKK-OKA, OKA-TAK, KIX-ICN, ICN-MXP)",
    "Prenotazioni hotel stampate/salvataggio PDF",
    "Assicurazione medica di viaggio (mondo asiatico)",
    "Carta di credito per hotel e cauzioni",
    "Documenti auto/clima se necessari (noleggio)",
    "Numeri di emergenza consolati italiani (Bangkok, Tokyo, Seul)"
  ],
  parks: [
    "Scaricare Google Maps offline per Thailandia, Giappone, Corea",
    "App utili: Grab/Bolt (SE Asia), Japan Travel, KakaoMetro (Corea)",
    "eSIM / SIM locale per connessione in 3 paesi",
    "Adattatore prese (Giappone A, Corea C/F, Thailandia A/B/C)",
    "Farmacia viaggio: antidolorifici, fermenti lattici, repellente insetti",
    "Crema solare 50+ (sole equatoriali forti in Asia)"
  ],
  food: [
    "Snack e acqua sempre nel bagaglio (caldo + camminate)",
    "Salviette umidificate e disinfettante mani",
    "Borraccia termica (ricaricabile ovunque, Asia sicura)",
    "App di traduzione menu (Google Lens)",
    "Verificare allergie/intolleranze in caratteri locali",
    "Alloggiare anche 1-2 pasti tipici street food al giorno"
  ]
};

// ==================== PHASES DATA ====================
const phasesData = [
  { id: "phase1", title: "1. Italia → Bangkok", days: "1 - 5", icon: "✈️", km: "0", desc: "Volo Milano-Bangkok e 4 giorni nella capitale thailandese." },
  { id: "phase2", title: "2. Okinawa", days: "6 - 9", icon: "🏝️", km: "0", desc: "L'isola tropicale giapponese: spiagge, castello Shuri e Churaumi." },
  { id: "phase3", title: "3. Shikoku & Kobe", days: "10 - 13", icon: "🏯", km: "0", desc: "Takamatsu, l'isola d'arte di Naoshima, Kobe e il manzo." },
  { id: "phase4", title: "4. Osaka & Volo", days: "14 - 15", icon: "🍣", km: "0", desc: "Osaka: Dotonbori, castello, teamLab e kushikatsu." },
  { id: "phase5", title: "5. Seoul & Rientro", days: "16 - 20", icon: "🌸", km: "0", desc: "Seul: palazzi, K-food, Hongdae, N Seoul Tower e volo di rientro." }
];

// ==================== STATE ====================
let state = {
  selectedDay: 0,
  activePhase: "all",
  checklist: JSON.parse(localStorage.getItem('martina2026_checklist')) || {}
};
