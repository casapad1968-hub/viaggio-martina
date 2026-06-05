# 🌸 Viaggio Martina 2026

Sito web interattivo per il viaggio di **Martina & Riccardo** in **Thailandia 🇹🇭**, **Giappone 🇯🇵** e **Corea del Sud 🇰🇷** dal **18 Luglio al 6 Agosto 2026**.

**🔗 Sito live:** https://casapad1968-hub.github.io/viaggio-martina/

> 📌 Questo progetto è un **prototipo di riferimento** — è il "modello zero" del servizio **Diario di Viaggio Interattivo**.
> Dimostra funzionalità, stile e struttura dati che verranno poi parametrizzati per i clienti.

---

## 🎨 Stile Orientale

- **Palette**: rosso cinese (#8B0000), oro (#C9A84C), corallo sakura (#FF6B6B), nero inchiostro (#2C2C2C)
- **Font titoli**: Georgia serif (calligrafico)
- **Decorazioni**: sakura 🌸, ventagli ⛩️, kanji sottotitoli
- **Card**: bordi sottili rosso/oro, ombra leggera

## ✨ Funzionalità

- **Countdown** in tempo reale alla partenza (18 Lug 2026)
- **4 tab**: Home / Itinerario / Mappa / Info
- **Mappa interattiva** con tutte le tappe (Leaflet + OpenStreetMap)
- **5 fasi** con filtro: Bangkok → Okinawa → Shikoku/Kobe → Osaka → Seul
- **Checklist** persistente in localStorage
- **PWA**: aggiungibile alla schermata Home del telefono
- **100% responsive** (ottimizzato per mobile)
- **Illustrazioni SVG** uniche per ogni giorno del viaggio (20 illustrazioni manga)

## 🗺️ Tappe

| # | Date | Località | Hotel |
|---|------|----------|-------|
| 1 | 18/07 | Milano → Bangkok | (in volo) |
| 2-5 | 19-22/07 | Bangkok 🇹🇭 | Mandarin Hotel (€244,22) |
| 6-9 | 23-26/07 | Okinawa 🇯🇵 | Hotel Cocktail Stay (€265,67) |
| 10 | 27/07 | Takamatsu 🇯🇵 | Hotel AreaOne (€39,38) |
| 11 | 28/07 | Naoshima 🇯🇵 | YOKOMBO (€189,86) |
| 12-13 | 29-30/07 | Kobe 🇯🇵 | Meriken Park Oriental (€192,95) |
| 14 | 31/07 | Osaka 🇯🇵 | KOKO Hotel Namba (€83,37) |
| 15 | 01/08 | Osaka (KIX) 🇯🇵 | Hotel Nikko Kansai (€116,90) |
| 16-19 | 02-05/08 | Seoul 🇰🇷 | HOMES Stay Myeongdong (€352,32) |
| 20 | 06/08 | Seoul → Milano | (in volo) |

**Totale hotel: €1.484,67**

## 📁 Struttura

```
viaggio-martina/
├── index.html          # Pagina principale (stile orientale)
├── itinerary-data.js   # 20 giorni: voli, hotel, attività, costi
├── links-data.js       # Link Google Maps hotel, percorsi, parcheggi
├── data.js             # Checklist, fasi, stats
├── app.js              # Logica app (tab, mappa Leaflet, countdown, SVG)
├── manifest.json       # PWA manifest
├── icon.svg            # Icona app (sakura)
├── photos/             # Foto del viaggio (placeholder)
└── README.md
```

## 🛠️ Stack tecnico

- **Frontend puro**: HTML5 + CSS3 + Vanilla JS (zero framework, zero build)
- **Mappe**: [Leaflet](https://leafletjs.com/) + OpenStreetMap
- **PWA**: Web App Manifest
- **Hosting**: GitHub Pages
- **Persistenza**: localStorage (per checklist)

## 🚀 Sviluppo locale

```bash
cd viaggio-martina
python3 -m http.server 8000
# Apri http://localhost:8000
```

## 📜 Licenza & Privacy

Progetto privato/portfolio. Le foto in `photos/` sono personali e non vengono pubblicate nel sito pubblico — restano come archivio locale per Martina & Riccardo.

---

🌸 Buon viaggio, Martina! 🌸
