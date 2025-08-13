# FreshaStay PMS (Smoobu x Fresha)

Un Property Management System pentru închirieri (gen Smoobu) cu look&feel modern inspirat de Fresha. Aplicație Expo (React Native) pentru iOS (și Android), ușor de extins și publicat.

## Funcționalități cheie (MVP)
- Dashboard: ocupare, venit, ADR, sosiri/plecări azi
- Calendar multi-proprietate (timeline simplificat)
- Rezervări: listă, căutare, detaliu, adăugare rezervare
- Proprietăți: listă, detaliu, statistici rapide
- Inbox unificat (mesaje) – mock pentru Airbnb, Booking, Vrbo
- Taskuri/Housekeeping – status, asignare, termene
- Analytics – KPI de bază
- Setări – canale, plăți, template-uri auto mesaje (placeholder)

## Stack
- Expo SDK 51 + React Native 0.74
- React Navigation (tabs + stack)
- TypeScript
- Zustand pentru state simplu
- Dayjs pentru date

## Rulare locală
1. Instalează Node 18+ și `npm`/`yarn`.
2. În directorul proiectului:
```bash
npm install
npm run start
```
3. iOS:
   - Varianta rapidă: scanează QR în aplicația „Expo Go” pe iPhone.
   - Varianta nativă: pe macOS cu Xcode instalat: `npm run ios`.

## Build iOS (TestFlight/App Store)
- Creează cont Expo + Apple Developer.
- Instalează CLI: `npm i -g eas-cli`
- Configurează credențiale: `eas login` și `eas build:configure`
- Rulează build: `eas build -p ios`

Config suplimentar: `eas.json` inclus. Schimbă `bundleIdentifier` în `app.json`.

## Structură
- `App.tsx` – container root
- `src/navigation` – rute, tab bar, stack
- `src/screens` – ecrane principale
- `src/components` – UI reuse
- `src/theme` – culori, spațiere
- `src/state` – store Zustand
- `src/data` – mock-uri

## Backend
MVP-ul folosește mock-uri locale. Recomandare: Supabase/Firebase pentru auth, baze de date, storage. Puncte de integrare lăsate în `src/state/store.ts` și `src/screens/SettingsScreen.tsx`.

## Notă
Acest repo oferă un MVP funcțional și extensibil. Design inspirat de Fresha (stil modern, carduri, titluri mari), fără a copia elemente proprietare.