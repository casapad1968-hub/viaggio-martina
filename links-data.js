// ==================== LINKS HOTEL & LOGISTICA VIAGGIO MARTINA ====================
// Link Google Maps per hotel, parcheggi, noleggi, percorsi

const linksData = {
  1: {
    hotelGmaps: "https://maps.google.com/?q=Milano+Malpensa+Airport",
    parking: "Parcheggi Malpensa: P1 (terminal), P2 economy. Prenotare online per sconti.",
    parkingCost: "€15-20/giorno lunga sosta",
    routeGmaps: "https://www.google.com/maps/dir/Milano+Malpensa+Airport/Indira+Gandhi+International+Airport/Suvarnabhumi+Airport+Bangkok"
  },
  2: {
    hotelGmaps: "https://maps.google.com/?q=Mandarin+Hotel+Managed+by+Centre+Point+Bangkok",
    parking: "Hotel senza auto a Bangkok. Muoversi con BTS Skytrain, MRT, taxi meter, Grab/Bolt.",
    parkingCost: "N/D (senza auto)",
    routeGmaps: "https://www.google.com/maps/dir/Suvarnabhumi+Airport+Bangkok/Mandarin+Hotel+Managed+by+Centre+Point+Bangkok"
  },
  3: {
    hotelGmaps: "https://maps.google.com/?q=Mandarin+Hotel+Managed+by+Centre+Point+Bangkok",
    parking: "Tuk-tuk, BTS, barca fluviale. Dress code rigoroso al Grande Palazzo: no shorts, no canotte, no sandali.",
    parkingGmaps: [
      { name: "Grande Palazzo Reale", url: "https://maps.google.com/?q=Grand+Palace+Bangkok" },
      { name: "Wat Pho (Buddha Sdraiato)", url: "https://maps.google.com/?q=Wat+Pho+Bangkok" },
      { name: "Wat Arun (Tempio dell'Alba)", url: "https://maps.google.com/?q=Wat+Arun+Bangkok" }
    ],
    parkingCost: "Gratis (con BTS/ferry)",
    routeGmaps: "https://www.google.com/maps/dir/Mandarin+Hotel+Managed+by+Centre+Point+Bangkok/Grand+Palace+Bangkok/Wat+Pho+Bangkok/Wat+Arun+Bangkok"
  },
  4: {
    hotelGmaps: "https://maps.google.com/?q=Mandarin+Hotel+Managed+by+Centre+Point+Bangkok",
    parking: "BTS Skytrain + metro + taxi. Chatuchak chiuso lunedì: oggi MBK Center o ICONSIAM.",
    parkingGmaps: [
      { name: "MBK Center", url: "https://maps.google.com/?q=MBK+Center+Bangkok" },
      { name: "Chinatown Yaowarat", url: "https://maps.google.com/?q=Chinatown+Yaowarat+Bangkok" },
      { name: "Khao San Road", url: "https://maps.google.com/?q=Khao+San+Road+Bangkok" }
    ],
    parkingCost: "Gratis (con BTS)",
    routeGmaps: "https://www.google.com/maps/dir/Mandarin+Hotel+Managed+by+Centre+Point+Bangkok/Chatuchak+Market+Bangkok/MBK+Center+Bangkok/Chinatown+Yaowarat+Bangkok"
  },
  5: {
    hotelGmaps: "https://maps.google.com/?q=Mandarin+Hotel+Managed+by+Centre+Point+Bangkok",
    parking: "Tour organizzato al mercato galleggiante (mezza giornata). Partire presto.",
    parkingGmaps: [
      { name: "Damnoen Saduak Floating Market", url: "https://maps.google.com/?q=Damnoen+Saduak+Floating+Market" },
      { name: "ICONSIAM Mall", url: "https://maps.google.com/?q=ICONSIAM+Bangkok" }
    ],
    parkingCost: "~THB 500-1500 tour",
    routeGmaps: "https://www.google.com/maps/dir/Mandarin+Hotel+Managed+by+Centre+Point+Bangkok/Damnoen+Saduak+Floating+Market/Mandarin+Hotel+Managed+by+Centre+Point+Bangkok"
  },
  6: {
    hotelGmaps: "https://maps.google.com/?q=Hotel+Cocktail+Stay+Naha+Okinawa",
    parking: "Volo mattutino. Arrivo Naha 15:05, transfer in hotel con monorail Yui Rail.",
    parkingCost: "N/D (transfer aeroporto)",
    rentalGmaps: "https://maps.google.com/?q=Naha+Airport+Okinawa",
    rentalGmapsLabel: "Naha Airport (OKA)",
    routeGmaps: "https://www.google.com/maps/dir/Mandarin+Hotel+Managed+by+Centre+Point+Bangkok/Suvarnabhumi+Airport+Bangkok/Naha+Airport+Okinawa/Hotel+Cocktail+Stay+Naha+Okinawa"
  },
  7: {
    hotelGmaps: "https://maps.google.com/?q=Hotel+Cocktail+Stay+Naha+Okinawa",
    parking: "Monorail + autobus. Castello Shuri: in restauro parziale dopo incendio 2019.",
    parkingGmaps: [
      { name: "Castello Shuri", url: "https://maps.google.com/?q=Shuri+Castle+Naha" },
      { name: "Kokusai Dori", url: "https://maps.google.com/?q=Kokusai+Dori+Naha" },
      { name: "Makishi Public Market", url: "https://maps.google.com/?q=Makishi+Public+Market+Naha" }
    ],
    parkingCost: "¥300/h parcheggi a Shuri",
    routeGmaps: "https://www.google.com/maps/dir/Hotel+Cocktail+Stay+Naha+Okinawa/Shuri+Castle+Naha/Kokusai+Dori+Naha"
  },
  8: {
    hotelGmaps: "https://maps.google.com/?q=Hotel+Cocktail+Stay+Naha+Okinawa",
    parking: "Auto a noleggio (~¥5000/giorno) o autobus Yanbaru Express. Aquarium chiude 18:00.",
    parkingGmaps: [
      { name: "Emerald Beach", url: "https://maps.google.com/?q=Emerald+Beach+Okinawa" },
      { name: "Manza Beach", url: "https://maps.google.com/?q=Manza+Beach+Okinawa" },
      { name: "Churaumi Aquarium", url: "https://maps.google.com/?q=Churaumi+Aquarium+Okinawa" }
    ],
    parkingCost: "¥2000-3000 totale",
    routeGmaps: "https://www.google.com/maps/dir/Hotel+Cocktail+Stay+Naha+Okinawa/Emerald+Beach+Okinawa/Churaumi+Aquarium+Okinawa/Hotel+Cocktail+Stay+Naha+Okinawa"
  },
  9: {
    hotelGmaps: "https://maps.google.com/?q=Hotel+Cocktail+Stay+Naha+Okinawa",
    parking: "Bise Fukugi Tree Road: bus locale o taxi. Atmosfera villaggio tradizionale.",
    parkingGmaps: [
      { name: "Bise Fukugi Tree Road", url: "https://maps.google.com/?q=Bise+Fukugi+Tree+Road" },
      { name: "Kokusai Dori Shopping", url: "https://maps.google.com/?q=Kokusai+Dori+Naha" }
    ],
    parkingCost: "Gratis (bus locale)",
    routeGmaps: "https://www.google.com/maps/dir/Hotel+Cocktail+Stay+Naha+Okinawa/Bise+Fukugi+Tree+Road/Hotel+Cocktail+Stay+Naha+Okinawa"
  },
  10: {
    hotelGmaps: "https://maps.google.com/?q=Hotel+AreaOne+Takamatsu+City",
    parking: "Volo + bus. Takamatsu città compatta, a piedi dal porto.",
    parkingCost: "N/D (transfer aeroporto)",
    routeGmaps: "https://www.google.com/maps/dir/Hotel+Cocktail+Stay+Naha+Okinawa/Naha+Airport+Okinawa/Takamatsu+Airport/Hotel+AreaOne+Takamatsu+City"
  },
  11: {
    hotelGmaps: "https://maps.google.com/?q=Vacation+House+YOKOMBO+Naoshima",
    parking: "Traghetto Takamatsu-Naoshima Tonosho (50 min). Bici a noleggio sull'isola (¥500/giorno).",
    parkingGmaps: [
      { name: "Takamatsu Port", url: "https://maps.google.com/?q=Takamatsu+Port+Ferry+Terminal" },
      { name: "Chichu Art Museum", url: "https://maps.google.com/?q=Chichu+Art+Museum+Naoshima" },
      { name: "Yayoi Kusama Pumpkin", url: "https://maps.google.com/?q=Yayoi+Kusama+Pumpkin+Naoshima" }
    ],
    parkingCost: "Traghetto ¥1430 + bici ¥500",
    routeGmaps: "https://www.google.com/maps/dir/Hotel+AreaOne+Takamatsu+City/Takamatsu+Port+Ferry+Terminal/Vacation+House+YOKOMBO+Naoshima"
  },
  12: {
    hotelGmaps: "https://maps.google.com/?q=Kobe+Meriken+Park+Oriental+Hotel",
    parking: "Traghetto Naoshima-Himeji/Kojima + treno JR per Kobe (~2h).",
    parkingGmaps: [
      { name: "Naoshima Port", url: "https://maps.google.com/?q=Naoshima+Miyanoura+Port" },
      { name: "Kobe Port Tower", url: "https://maps.google.com/?q=Kobe+Port+Tower" },
      { name: "Nankinmachi Chinatown", url: "https://maps.google.com/?q=Nankinmachi+Chinatown+Kobe" }
    ],
    parkingCost: "Traghetto + treno ~¥3000",
    routeGmaps: "https://www.google.com/maps/dir/Vacation+House+YOKOMBO+Naoshima/Naoshima+Miyanoura+Port/Kobe+Meriken+Park+Oriental+Hotel"
  },
  13: {
    hotelGmaps: "https://maps.google.com/?q=Kobe+Meriken+Park+Oriental+Hotel",
    parking: "Kobe compatto a piedi + metro. Sake Breweries: bus o taxi.",
    parkingGmaps: [
      { name: "Hakutsuru Sake Brewery", url: "https://maps.google.com/?q=Hakutsuru+Sake+Brewery+Museum" },
      { name: "Nunobiki Herb Garden", url: "https://maps.google.com/?q=Nunobiki+Herb+Garden+Kobe" },
      { name: "Sannomiya Center", url: "https://maps.google.com/?q=Sannomiya+Kobe" }
    ],
    parkingCost: "¥1000-2000 totale",
    routeGmaps: "https://www.google.com/maps/dir/Kobe+Meriken+Park+Oriental+Hotel/Hakutsuru+Sake+Brewery+Museum/Nunobiki+Herb+Garden+Kobe/Kobe+Meriken+Park+Oriental+Hotel"
  },
  14: {
    hotelGmaps: "https://maps.google.com/?q=KOKO+HOTEL+Osaka+Namba+Sennichimae",
    parking: "JR Kobe Line: 30 min Osaka Station, poi metro a Namba.",
    parkingGmaps: [
      { name: "Dotonbori", url: "https://maps.google.com/?q=Dotonbori+Osaka" },
      { name: "Glico Sign", url: "https://maps.google.com/?q=Glico+Sign+Osaka" },
      { name: "Namba Yasaka Shrine", url: "https://maps.google.com/?q=Namba+Yasaka+Shrine" }
    ],
    parkingCost: "¥600 treno JR",
    routeGmaps: "https://www.google.com/maps/dir/Kobe+Meriken+Park+Oriental+Hotel/KOKO+HOTEL+Osaka+Namba+Sennichimae"
  },
  15: {
    hotelGmaps: "https://maps.google.com/?q=Hotel+Nikko+Kansai+Airport",
    parking: "teamLab: prenotazione obbligatoria online. Castello Osaka: a piedi da stazione Tanimachi.",
    parkingGmaps: [
      { name: "Osaka Castle", url: "https://maps.google.com/?q=Osaka+Castle" },
      { name: "teamLab Botanical Garden", url: "https://maps.google.com/?q=teamLab+Botanical+Garden+Osaka" },
      { name: "Shinsekai", url: "https://maps.google.com/?q=Shinsekai+Osaka" }
    ],
    parkingCost: "¥3000-4000 totale",
    routeGmaps: "https://www.google.com/maps/dir/KOKO+HOTEL+Osaka+Namba+Sennichimae/Osaka+Castle/teamLab+Botanical+Garden+Osaka/Hotel+Nikko+Kansai+Airport"
  },
  16: {
    hotelGmaps: "https://maps.google.com/?q=HOMES+Stay+Myeongdong+Seoul",
    parking: "Volo mattutino. AREX da Incheon: 43 min a Seoul Station, poi metro a Myeongdong.",
    parkingCost: "AREX ₩9,500",
    routeGmaps: "https://www.google.com/maps/dir/Hotel+Nikko+Kansai+Airport/Kansai+International+Airport/Incheon+International+Airport/HOMES+Stay+Myeongdong+Seoul"
  },
  17: {
    hotelGmaps: "https://maps.google.com/?q=HOMES+Stay+Myeongdong+Seoul",
    parking: "Hanbok noleggiabile in zona Gyeongbokgung (¥15-25/3h). Cambio guardia 10:00 e 14:00.",
    parkingGmaps: [
      { name: "Gyeongbokgung", url: "https://maps.google.com/?q=Gyeongbokgung+Palace+Seoul" },
      { name: "Bukchon Hanok Village", url: "https://maps.google.com/?q=Bukchon+Hanok+Village+Seoul" },
      { name: "Insadong", url: "https://maps.google.com/?q=Insadong+Seoul" },
      { name: "Gwangjang Market", url: "https://maps.google.com/?q=Gwangjang+Market+Seoul" }
    ],
    parkingCost: "¥15-25 hanbok",
    routeGmaps: "https://www.google.com/maps/dir/HOMES+Stay+Myeongdong+Seoul/Gyeongbokgung+Palace+Seoul/Bukchon+Hanok+Village+Seoul/Insadong+Seoul/HOMES+Stay+Myeongdong+Seoul"
  },
  18: {
    hotelGmaps: "https://maps.google.com/?q=HOMES+Stay+Myeongdong+Seoul",
    parking: "Metro linea 2: Hongdae-ipgu e Gangnam. Seoul Pass per illimitati.",
    parkingGmaps: [
      { name: "Hongdae", url: "https://maps.google.com/?q=Hongdae+Seoul" },
      { name: "Hangang Park", url: "https://maps.google.com/?q=Hangang+Park+Seoul" },
      { name: "COEX Mall Gangnam", url: "https://maps.google.com/?q=COEX+Mall+Gangnam" }
    ],
    parkingCost: "₩13,500 Seoul Pass 24h",
    routeGmaps: "https://www.google.com/maps/dir/HOMES+Stay+Myeongdong+Seoul/Hongdae+Seoul/Hangang+Park+Seoul/COEX+Mall+Gangnam/HOMES+Stay+Myeongdong+Seoul"
  },
  19: {
    hotelGmaps: "https://maps.google.com/?q=HOMES+Stay+Myeongdong+Seoul",
    parking: "N Seoul Tower: cabinovia da Namsan Cable Car Station (5 min).",
    parkingGmaps: [
      { name: "N Seoul Tower", url: "https://maps.google.com/?q=N+Seoul+Tower" },
      { name: "Myeongdong Shopping", url: "https://maps.google.com/?q=Myeongdong+Seoul" }
    ],
    parkingCost: "¥16,000 cabinovia + osservatorio",
    routeGmaps: "https://www.google.com/maps/dir/HOMES+Stay+Myeongdong+Seoul/N+Seoul+Tower/Myeongdong+Seoul/HOMES+Stay+Myeongdong+Seoul"
  },
  20: {
    hotelGmaps: "https://maps.google.com/?q=Incheon+International+Airport",
    parking: "AREX 13:00 da Seoul Station. Presentarsi a Incheon almeno 3h prima per voli intercontinentali.",
    parkingCost: "AREX ₩9,500",
    routeGmaps: "https://www.google.com/maps/dir/HOMES+Stay+Myeongdong+Seoul/Incheon+International+Airport"
  }
};
