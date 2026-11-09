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
