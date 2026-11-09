/* VIVI app — dati */
window.CATS={musica:['Musica','music'],arte:['Arte','brush'],sport:['Sport','run'],food:['Food','fork'],teatro:['Teatro','masks'],foto:['Foto','camera'],aperitivo:['Aperitivo','wine'],shopping:['Shopping','bag'],natura:['Natura','leaf']};
window.CATXP={musica:45,arte:30,food:25,sport:30,teatro:35,foto:25,aperitivo:20,shopping:15,natura:25};
/* d = giorni da oggi, t = orario, out = all'aperto */
window.EVENTS=[
{id:'ev1',t:'Jazz al Magazzino',cat:'musica',place:'Magazzino Sul Po',km:1.0,d:1,t0:'21:30',dur:'3h',price:0,ppl:45,vid:8,col:'viola',org:'Associazione Jazz Torino',out:false,desc:'Una serata dedicata al jazz dal vivo con artisti locali e internazionali. Atmosfera intima, drink e buona musica sulle rive del Po.'},
{id:'ev2',t:'DJ Set Rooftop',cat:'musica',place:'Edit Torino',km:2.1,d:2,t0:'23:00',dur:'4h',price:15,ppl:120,vid:2,col:'rosa',org:'Rooftop Collective',out:true,desc:'Sunset e notte sul tetto della città: house, groove e una vista che non dimenticherai.'},
{id:'ev3',t:'Concerto acustico',cat:'musica',place:'sPAZIO211',km:3.2,d:3,t0:'19:00',dur:'2h',price:8,ppl:30,vid:1,col:'lilla',org:'sPAZIO211',desc:'Voce e chitarra in un club raccolto. Posti limitati, consigliato arrivare presto.'},
{id:'ev4',t:'Karaoke Night',cat:'musica',place:'Bar Madera',km:1.4,d:0,t0:'21:00',dur:'3h',price:0,ppl:25,vid:0,col:'lime',org:'Bar Madera',desc:'Microfono aperto, amici e canzoni stonate. Si canta tutti, nessun giudizio.'},
{id:'ev5',t:'Orchestra Sinfonica',cat:'musica',place:'Auditorium RAI',km:1.8,d:2,t0:'20:30',dur:'2h',price:20,ppl:200,vid:2,col:'rosa',org:'Orchestra RAI',desc:'Un programma romantico per grande orchestra nel cuore della città.'},
{id:'ev6',t:'Mostra Van Gogh',cat:'arte',place:'GAM Torino',km:1.2,d:0,t0:'15:00',dur:'1h 30m',price:12,ppl:60,vid:3,col:'lav',org:'GAM Torino',desc:'Un percorso immersivo tra i capolavori di Van Gogh, con installazioni multimediali.'},
{id:'ev7',t:'Mostra fotografica',cat:'foto',place:'Galleria Moderna',km:1.2,d:0,t0:'16:00',dur:'1h',price:0,ppl:18,vid:3,col:'lav',org:'Galleria Moderna',desc:'Scatti contemporanei sulla vita urbana, con incontro con gli autori.'},
{id:'ev8',t:'Yoga al parco',cat:'sport',place:'Parco Valentino',km:0.8,d:1,t0:'09:00',dur:'1h',price:0,ppl:12,vid:1,col:'lime',org:'Yoga Valentino',out:true,desc:'Una lezione di yoga all\'alba tra gli alberi. Porta il tuo tappetino.'},
{id:'ev9',t:'Corsa sul Po',cat:'sport',place:'Murazzi',km:1.1,d:3,t0:'07:30',dur:'1h',price:0,ppl:40,vid:0,col:'lime',org:'Run Torino',out:true,desc:'Corsa di gruppo lungo il fiume, ritmo easy per tutti.'},
{id:'ev10',t:'Festival Street Food',cat:'food',place:'Piazza Castello',km:0.9,d:2,t0:'12:00',dur:'8h',price:0,ppl:300,vid:5,col:'lav',org:'Street Food Italia',out:true,desc:'Cucina di strada da tutta Italia: assaggi, musica e tavolate in piazza.'},
{id:'ev11',t:'Ramen & sake',cat:'food',place:'Ramen Bar',km:0.8,d:0,t0:'19:00',dur:'1h 30m',price:18,ppl:20,vid:1,col:'rosa',org:'Ramen Bar',desc:'Cena giapponese con degustazione di sake abbinati.'},
{id:'ev12',t:'Aperitivo al tramonto',cat:'aperitivo',place:'Bar Aurora',km:0.3,d:0,t0:'18:30',dur:'1h',price:10,ppl:24,vid:4,col:'viola',org:'Bar Aurora',out:true,desc:'Spritz e stuzzichini con vista sul fiume, mentre il sole scende.'},
{id:'ev13',t:'Notte dei Musei',cat:'arte',place:'Centro storico',km:0.5,d:2,t0:'21:00',dur:'4h',price:0,ppl:150,vid:6,col:'rosa',org:'Città di Torino',desc:'Musei aperti di notte con ingresso gratuito e visite guidate a sorpresa.'},
{id:'ev14',t:'Teatro Carignano',cat:'teatro',place:'Piazza Carignano',km:0.7,d:1,t0:'20:45',dur:'2h',price:25,ppl:90,vid:0,col:'lilla',org:'Teatro Stabile',desc:'Una commedia brillante nel teatro più elegante della città.'},
{id:'ev15',t:'Passeggiata a Superga',cat:'natura',place:'Basilica di Superga',km:4.0,d:1,t0:'10:00',dur:'3h',price:0,ppl:16,vid:2,col:'lime',org:'Trekking Torino',out:true,desc:'Una camminata panoramica con vista sulle Alpi e picnic finale.'},
{id:'ev16',t:'Mercatino vintage',cat:'shopping',place:'Balôn',km:2.2,d:2,t0:'10:00',dur:'6h',price:0,ppl:70,vid:0,col:'rosa',org:'Balôn',out:true,desc:'Caccia al tesoro tra abiti, dischi e oggetti d\'altri tempi.'}
];
window.FRIENDS=[
{id:'sofia',n:'Sofia',u:'@sofia_to',c:'c-rosa',xp:2100,together:3},
{id:'marco',n:'Marco',u:'@marco_torino',c:'c-lime',xp:980,together:5},
{id:'elena',n:'Elena',u:'@elena.art',c:'c-lav',xp:750,together:2},
{id:'luca',n:'Luca',u:'@luca_jazz',c:'c-lilla',xp:620,together:1},
{id:'giulia',n:'Giulia',u:'@giulia_b',c:'c-rosa',xp:430,together:0}
];
window.BADGES=[
{id:'planner',n:'Pianificatore',ic:'clipboard',col:'lime',goal:1,d:'Crea il tuo primo piano',get:s=>s.plans.length},
{id:'collector',n:'Collezionista',ic:'heart',col:'rosa',goal:3,d:'Salva 3 attività',get:s=>s.saved.length},
{id:'social',n:'Social',ic:'users',col:'lime',goal:3,d:'Invita 3 amici',get:s=>s.invited.length},
{id:'cartografo',n:'Cartografo',ic:'map',col:'lav',goal:5,d:'Scopri 5 luoghi sulla mappa',get:s=>s.mapSeen.length},
{id:'streak',n:'Streak 3',ic:'flame',col:'viola',goal:3,d:'Apri VIVI 3 giorni di fila',get:s=>s.streak},
{id:'explorer',n:'Explorer',ic:'star',col:'lime',goal:3,d:'Completa 3 tappe',get:s=>s.log.length},
{id:'musicfan',n:'Music Fan',ic:'music',col:'rosa',goal:2,d:'Completa 2 tappe di musica',get:s=>s.log.filter(l=>l.cat==='musica').length},
{id:'artlover',n:'Art Lover',ic:'brush',col:'lav',goal:2,d:'Completa 2 tappe di arte o foto',get:s=>s.log.filter(l=>l.cat==='arte'||l.cat==='foto').length},
{id:'night',n:'Nottambulo',ic:'moon',col:'prugna',goal:1,d:'Completa una tappa dopo le 21',get:s=>s.log.filter(l=>l.night).length},
{id:'finisher',n:'Finisher',ic:'trophy',col:'viola',goal:1,d:'Completa un intero piano',get:s=>s.plans.filter(p=>p.status==='done').length},
{id:'legend',n:'Leggenda Urbana',ic:'diamond',col:'lilla',goal:15,d:'Completa 15 tappe',get:s=>s.log.length}
];
