# VIVI — App UI (18 schermate)

Apri `index.html` per la galleria. Ogni schermata è una pagina HTML autonoma (frame 393x852) che condivide:

- `vivi.css` — design system (palette, tipografia Sora / DM Sans, componenti, tab bar fluttuante, dark mode, reduced-motion; nessun gradiente CSS)
- `vivi.js` — `icon(name,size,color)`, mascotte SVG `mascot(variante,size)` (wave, search, party, relax, happy, sad, head), `tabbar()`, reveal con IntersectionObserver, count-up, transizioni di pagina

Nessuna emoji: tutte le icone e la mascotte sono SVG inline.
Dark mode automatica (prefers-color-scheme) oppure forzata con `?theme=dark` / `?theme=light`.
`18-stati.html#vuoto|carica|errore|conferma` apre direttamente uno stato; `05-ricerca.html#filtri` apre il pannello filtri.

| # | File | Schermata |
|---|------|-----------|
| 01 | 01-splash | Splash |
| 02 | 02-onboarding | Onboarding (3 step) |
| 03 | 03-login | Login / Registrazione |
| 04 | 04-home | Home / Scopri |
| 05 | 05-ricerca | Ricerca e filtri |
| 06 | 06-risultati | Risultati |
| 07 | 07-mappa | Mappa interattiva |
| 08 | 08-dettaglio | Dettaglio attività |
| 09 | 09-conferma-salvataggio | Conferma salvataggio |
| 10 | 10-crea-piano | Crea piano (wizard 4 step) |
| 11 | 11-timeline | Programma e timeline |
| 12 | 12-invito | Invito partecipanti |
| 13 | 13-coordinamento | Coordinamento e votazioni |
| 14 | 14-uscita-condivisa | Uscita condivisa |
| 15 | 15-piani | Piani (3 tab) |
| 16 | 16-profilo | Profilo |
| 17 | 17-badge | Badge e progressi |
| 18 | 18-stati | Vuoto / Caricamento / Errore / Conferma |

## App funzionante (`app/`)

`app/index.html` è l'applicazione vera: una single-page app (HTML/CSS/JS, nessuna build) che usa lo stesso design system.

- **Router** a hash con transizioni slide/fade e tab bar fluttuante persistente
- **Stato** salvato in `localStorage`: utente, XP, livello, badge, piani, salvati, notifiche, streak
- **Dati reali**: 16 attività filtrabili per testo, categoria, quando, distanza, prezzo, tipo; ordinamento e ricerca live
- **Flussi completi**: splash → onboarding → login/registrazione → home → ricerca/filtri → risultati → mappa → dettaglio → salva / partecipa / aggiungi a un piano
- **Piani**: wizard a 4 passi che genera il programma, timeline con tappe da completare (XP, level-up, badge, confetti), inviti con risposte simulate degli amici, coordinamento con voti, note e conferma finale
- **Profilo**: statistiche reali, interessi, tema automatico/chiaro/scuro, modifica profilo, reset
- **Micro-animazioni**: ripple sui pulsanti, esplosione di particelle su like/salva, contatori XP, toast con rimbalzo, bottom sheet trascinabili, skeleton shimmer, pin della mappa che cadono, tab bar con indicatore scorrevole, haptic (vibrazione) dove supportato; `prefers-reduced-motion` rispettato
- PWA di base (`manifest.webmanifest`, `sw.js` quando servita via http/https)

Per provarla in locale: `python3 -m http.server` dentro `vivi/` e apri `http://localhost:8000/app/`.
