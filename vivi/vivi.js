/* VIVI — icone SVG, mascotte SVG, tab bar fluttuante, animazioni condivise */
(function(){
const ICONS={
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
heart:'<path d="M12 20s-7.5-4.6-9.2-9.3C1.6 7.4 3.8 4 7.2 4c2 0 3.6 1.1 4.8 2.9C13.200 5.100 14.800 4 16.800 4c3.400 0 5.600 3.400 4.400 6.700C19.500 15.400 12 20 12 20z"/>',
bookmark:'<path d="M6 3h12v18l-6-4.500L6 21z"/>',
share:'<path d="M12 15V3M8 7l4-4 4 4"/><path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>',
bell:'<path d="M6 16v-5a6 6 0 1112 0v5l2 2H4z"/><path d="M10 21h4"/>',
back:'<path d="M15 5l-7 7 7 7"/>',right:'<path d="M9 5l7 7-7 7"/>',down:'<path d="M5 9l7 7 7-7"/>',
arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
play:'<circle cx="12" cy="12" r="9"/><path d="M10 8.500l5 3.500-5 3.500z" fill="currentColor"/>',
tri:'<path d="M7 4.500v15l13-7.500z" fill="currentColor"/>',
pin:'<path d="M12 21s7-6.200 7-11.500A7 7 0 005 9.500C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/>',
calendar:'<rect x="3.500" y="5" width="17" height="15.500" rx="3"/><path d="M3.500 10h17M8 3v4M16 3v4"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.500 2"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.400 3.600-7 8-7s8 2.600 8 7"/>',
users:'<circle cx="9" cy="8" r="3.500"/><path d="M2.500 20c0-3.600 2.900-6 6.500-6s6.500 2.400 6.500 6"/><circle cx="17" cy="9" r="2.600"/><path d="M17.500 14.200c2.500.3 4 2.200 4 5.300"/>',
profile:'<circle cx="12" cy="12" r="9.500"/><circle cx="12" cy="10" r="3"/><path d="M6.500 18.200c1.200-2.200 3.200-3.200 5.500-3.200s4.300 1 5.500 3.200"/>',
filters:'<path d="M3 7h10M17 7h4M3 17h4M11 17h10"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
check:'<path d="M5 12.500l4.500 4.500L19 7.500"/>',
star:'<path d="M12 3l2.700 5.600 6.100.9-4.400 4.300 1 6.100L12 17l-5.400 2.900 1-6.100L3.200 9.500l6.100-.9z"/>',
flame:'<path d="M12 3c.5 3-1.500 4.500-3 6.500C7.700 11.300 7 12.700 7 14.500a5 5 0 0010 0c0-2-1-3.400-2-4.500 0 1.600-.7 2.400-1.600 2.700.6-3-.6-6.600-1.400-9.700z"/>',
plus:'<path d="M12 5v14M5 12h14"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
home:'<path d="M3.500 11L12 3.500 20.500 11V20a1 1 0 01-1 1H15v-6H9v6H4.500a1 1 0 01-1-1z"/>',
map:'<path d="M9 4L3.500 6v14L9 18l6 2 5.500-2V4L15 6z"/><path d="M9 4v14M15 6v14"/>',
clipboard:'<rect x="5" y="4.500" width="14" height="17" rx="3"/><rect x="9" y="2.500" width="6" height="4" rx="1.500"/><path d="M9 12h6M9 16h4"/>',
comment:'<path d="M4 6a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3h-6.500L6 20v-4a3 3 0 01-2-3z"/>',
music:'<path d="M9 18V5l11-2v13"/><circle cx="6.500" cy="18" r="2.500"/><circle cx="17.500" cy="16" r="2.500"/>',
brush:'<path d="M20 4c-5 1-9 5-10.500 9.500l2.500 2.500C16.500 14.500 19 9 20 4z"/><path d="M9.500 13.500c-2.500-.5-4.500 1-4.500 3.500 0 1.500-.8 2.500-2 3 3 1 6.500.5 7.500-2.500"/>',
run:'<circle cx="15" cy="4.500" r="2"/><path d="M9 21l3-6-3-2.500 2-5 4 2 3 3M7 11l3-3M12 15l3 2 1 4"/>',
fork:'<path d="M6 3v8a3 3 0 003 0V3M7.500 3v18M17 21V3c-2.500 1.500-3.500 5-3.500 8H17"/>',
masks:'<path d="M3 5h11v7a5.500 5.500 0 01-11 0z"/><path d="M6.500 9h.01M10.500 9h.01M6.500 12.500c1 1 3 1 4 0"/><path d="M14 8h7v6a4.500 4.500 0 01-7.500 3.300"/>',
camera:'<path d="M3.500 8a2 2 0 012-2h2l1.500-2h6l1.500 2h2a2 2 0 012 2v10a2 2 0 01-2 2h-13a2 2 0 01-2-2z"/><circle cx="12" cy="13" r="3.800"/>',
bolt:'<path d="M13 2.500L5 13.500h6l-1 8 8-11h-6z"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.500V5M12 19v2.500M2.500 12H5M19 12h2.500M5.300 5.300l1.800 1.800M16.900 16.900l1.800 1.800M5.300 18.700l1.800-1.800M16.900 7.100l1.800-1.800"/>',
sunset:'<path d="M5 17a7 7 0 0114 0"/><path d="M12 6v3M5 10l2 2M19 10l-2 2M2.500 20.500h19"/>',
moon:'<path d="M20 14.500A8.500 8.500 0 019.500 4 8.500 8.500 0 1020 14.500z"/>',
stars:'<path d="M12 3l1.500 3.500L17 8l-3.500 1.500L12 13l-1.500-3.500L7 8l3.500-1.500z"/><path d="M18 14l.8 1.700 1.700.8-1.700.8L18 19l-.8-1.700-1.700-.8 1.700-.8zM6 15l.6 1.400L8 17l-1.400.6L6 19l-.6-1.400L4 17l1.400-.6z"/>',
monitor:'<rect x="3" y="4" width="18" height="12" rx="2.500"/><path d="M8 20h8M12 16v4"/>',
wine:'<path d="M7 3h10l-.8 6.500a4.200 4.200 0 01-8.400 0z"/><path d="M12 13.700V21M8.500 21h7"/>',
bag:'<path d="M5 8h14l-1 12.500H6z"/><path d="M9 8V6.500a3 3 0 016 0V8"/>',
leaf:'<path d="M5 19c0-8 4-14 15-15 0 10-5 15-12 15"/><path d="M5 19c3-5 6-7.500 10-9"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7.500l8 5.500 8-5.500"/>',
lock:'<rect x="5" y="10.500" width="14" height="10" rx="3"/><path d="M8 10.500V8a4 4 0 018 0v2.500"/>',
eye:'<path d="M2 12s3.500-6.500 10-6.500S22 12 22 12s-3.500 6.500-10 6.500S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
eyeoff:'<path d="M2 12s3.500-6.500 10-6.500S22 12 22 12s-3.500 6.500-10 6.500S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M3 3l18 18"/>',
link:'<path d="M10 14a4.500 4.500 0 006.400 0l3-3a4.500 4.500 0 00-6.400-6.400l-1 1"/><path d="M14 10a4.500 4.500 0 00-6.400 0l-3 3a4.500 4.500 0 006.400 6.400l1-1"/>',
pencil:'<path d="M4 20l1-4L16.500 4.500a2 2 0 013 3L8 19z"/><path d="M14.500 6.500l3 3"/>',
trophy:'<path d="M7 4h10v5a5 5 0 01-10 0z"/><path d="M7 6H4a3 3 0 003 4M17 6h3a3 3 0 01-3 4M12 14v4M8 21h8M9 18h6"/>',
target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.200" fill="currentColor"/>',
thumb:'<path d="M7 11v9H4v-9zM7 11l4-8c1.700 0 2.500 1.300 2 3l-.7 3H19a2 2 0 012 2.300l-1.200 6.500A2 2 0 0117.800 20H7"/>',
send:'<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',
refresh:'<path d="M20 11a8 8 0 00-14-4.500L4 9M4 4v5h5M4 13a8 8 0 0014 4.500L20 15M20 20v-5h-5"/>',
door:'<path d="M14 4H7a2 2 0 00-2 2v12a2 2 0 002 2h7M10 12h11M17 8l4 4-4 4"/>',
help:'<circle cx="12" cy="12" r="9.500"/><path d="M9.500 9.500a2.500 2.500 0 114 2c-1 .7-1.500 1.200-1.500 2.500M12 17.500h.01"/>',
tag:'<path d="M3 12V4.500A1.500 1.500 0 014.500 3H12l9 9-8.500 8.500z"/><circle cx="8" cy="8" r="1.300" fill="currentColor"/>',
cup:'<path d="M4 8h13v6a5 5 0 01-5 5H9a5 5 0 01-5-5z"/><path d="M17 10h1.500a2.500 2.500 0 010 5H17M8 3v2M12 3v2"/>',
crosshair:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
checkc:'<circle cx="12" cy="12" r="9.500"/><path d="M7.500 12.500l3 3 6-6.500"/>',
xc:'<circle cx="12" cy="12" r="9.500"/><path d="M9 9l6 6M15 9l-6 6"/>',
diamond:'<path d="M6 4h12l4 5-10 12L2 9z"/><path d="M2 9h20M9 4l-2 5 5 12 5-12-2-5"/>',
party:'<path d="M4 20l4-12 8 8z"/><path d="M14 4v2M19 7l-1.500 1.500M20 12h-2M10 3.500l.5 1.500"/>',
video:'<rect x="3" y="6" width="13" height="12" rx="3"/><path d="M16 10.500l5-3v9l-5-3z"/>',
warning:'<path d="M12 3.500L22 20H2z"/><path d="M12 10v4.500M12 17.500h.01"/>',
dots:'<circle cx="5" cy="12" r="1.500" fill="currentColor"/><circle cx="12" cy="12" r="1.500" fill="currentColor"/><circle cx="19" cy="12" r="1.500" fill="currentColor"/>',
hand:'<path d="M8 12V6a1.500 1.500 0 013 0v5M11 11V4.500a1.500 1.500 0 013 0V11M14 11V6a1.500 1.500 0 013 0v7c0 4.500-2.500 8-7 8-3 0-4.500-1.500-6-4l-1.500-3a1.500 1.500 0 012.500-1.500L8 14"/>',
rocket:'<path d="M14 4c3.500-1 6-1 6-1s0 2.500-1 6l-6 6-5-5z"/><path d="M9 14l-5 1 3 3M10 15l-1 5 3-3M15 9h.01"/>',
route:'<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 17V9a3 3 0 013-3h6M18 7v8a3 3 0 01-3 3H8"/>',
theme:'<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 000 18z" fill="currentColor"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'
};
const fix=s=>s.replace(/(\d+\.\d)0+(?=\D)/g,'$1');
function icon(name,size=24,color){
  const p=ICONS[name]||ICONS.star;
  const filled=/-f$/.test(name);
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color||'currentColor'}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}
/* icona piena (stati attivi): stessa forma con fill */
function iconFill(name,size=24,color){return icon(name,size,color).replace('fill="none"','fill="'+(color||'currentColor')+'"');}

/* ---------- Mascotte VIVI ---------- */
function mascot(v='wave',size=100){
  const P='#251C35',V='#6845F5',L='#DCD2FF',T='#7FD8E6';
  const arm=(d,w)=>`<g${w||''}><path d="${d}" fill="none" stroke="${P}" stroke-width="11" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${V}" stroke-width="6.500" stroke-linecap="round"/></g>`;
  const hand=(x,y)=>`<circle cx="${x}" cy="${y}" r="4.800" fill="${L}" stroke="${P}" stroke-width="2"/>`;
  const head=v==='head';
  const happy=v==='party'||v==='happy'||v==='relax';
  const worried=v==='sad';
  const look=v==='search'?2.200:0;
  const eye=(cx)=> happy
    ? `<path d="M${cx-7} 52Q${cx} 43 ${cx+7} 52" fill="none" stroke="${P}" stroke-width="3" stroke-linecap="round"/>`
    : `<ellipse cx="${cx}" cy="50" rx="7.500" ry="9" fill="#fff" stroke="${P}" stroke-width="2"/><circle cx="${cx+look}" cy="51" r="5.300" fill="${T}"/><circle cx="${cx+look}" cy="51" r="3" fill="${P}"/><circle cx="${cx+look+2}" cy="48.500" r="1.800" fill="#fff"/><circle cx="${cx+look-1.500}" cy="53.500" r=".9" fill="#FFB7D5"/>`;
  const brows=worried?`<path d="M42 38l14 4M86 38l-14 4" stroke="${P}" stroke-width="2.800" stroke-linecap="round"/>`:v==='search'?`<path d="M72 38l12-3" stroke="${P}" stroke-width="2.800" stroke-linecap="round"/>`:'';
  const mouth=v==='party'?`<path d="M54 65Q64 80 74 65Q64 69 54 65z" fill="${P}" stroke="${P}" stroke-width="2" stroke-linejoin="round"/><path d="M59 72Q64 76 69 72Q64 70 59 72z" fill="#FF8DB5"/>`
    :worried?`<path d="M57 70Q64 64 71 70" fill="none" stroke="${P}" stroke-width="2.400" stroke-linecap="round"/>`
    :`<path d="M55 65Q61 71.500 67 66Q70 64 73 61.500" fill="none" stroke="${P}" stroke-width="2.400" stroke-linecap="round"/>`;
  const tail=`<g><path d="M82 120C42 136 6 108 12 72C17 42 56 34 64 58C69 74 50 86 40 74" fill="none" stroke="${P}" stroke-width="31" stroke-linecap="round"/><path d="M82 120C42 136 6 108 12 72C17 42 56 34 64 58C69 74 50 86 40 74" fill="none" stroke="${V}" stroke-width="24" stroke-linecap="round"/><path d="M82 120C42 136 6 108 12 72C17 42 56 34 64 58C69 74 50 86 40 74" fill="none" stroke="${L}" stroke-width="24" stroke-dasharray="9 17" opacity=".45"/><path d="M52 84C46 82 42 78 40 74" fill="none" stroke="${L}" stroke-width="22" stroke-linecap="round"/><path d="M12 74C14 52 34 40 58 44" fill="none" stroke="#5535D0" stroke-width="5" stroke-linecap="round" opacity=".55"/></g>`;
  const body=`<path d="M44 118C42 92 52 80 64 80S86 92 84 118z" fill="${V}" stroke="${P}" stroke-width="2.500" stroke-linejoin="round"/><ellipse cx="64" cy="102" rx="10" ry="15" fill="${L}"/>`;
  const feet=`<ellipse cx="51" cy="122" rx="12" ry="6.500" fill="${V}" stroke="${P}" stroke-width="2.500"/><ellipse cx="77" cy="122" rx="12" ry="6.500" fill="${V}" stroke="${P}" stroke-width="2.500"/><ellipse cx="47" cy="123" rx="4" ry="2.400" fill="${L}"/><ellipse cx="73" cy="123" rx="4" ry="2.400" fill="${L}"/>`;
  const ears=`<path d="M36 40L33 9L59 27z" fill="${V}" stroke="${P}" stroke-width="2.500" stroke-linejoin="round"/><path d="M39 33L37 17L50 27z" fill="${L}"/><path d="M33 9L30 1L38 6z" fill="${P}" stroke="${P}" stroke-width="1.500" stroke-linejoin="round"/><path d="M92 40L95 9L69 27z" fill="${V}" stroke="${P}" stroke-width="2.500" stroke-linejoin="round"/><path d="M89 33L91 17L78 27z" fill="${L}"/><path d="M95 9L98 1L90 6z" fill="${P}" stroke="${P}" stroke-width="1.500" stroke-linejoin="round"/>`;
  const face=`<ellipse cx="64" cy="52" rx="31" ry="26" fill="${V}" stroke="${P}" stroke-width="2.500"/><path d="M64 28l4.500 8-4.500 6-4.500-6z" fill="${L}" opacity=".8"/><ellipse cx="64" cy="65" rx="17" ry="11" fill="${L}"/><ellipse cx="42" cy="62" rx="6" ry="4" fill="#FFB7D5" opacity=".6"/><ellipse cx="86" cy="62" rx="6" ry="4" fill="#FFB7D5" opacity=".6"/>${brows}${eye(51)}${eye(77)}<path d="M60.500 58.500h7l-3.500 4z" fill="${P}" stroke="${P}" stroke-width="1.500" stroke-linejoin="round"/>${mouth}`;
  let arms='',top='',extra='';
  if(v==='wave'){arms=arm('M47 88Q41 100 45 110')+hand(45,110)+`<g class="m-wave">${arm('M81 88Q101 84 99 60')}${hand(99,60)}</g>`;}
  else if(v==='search'){arms=arm('M47 88Q41 100 45 110')+hand(45,110);top=arm('M81 88Q103 72 84 40')+hand(84,38);}
  else if(v==='party'){arms=arm('M47 88Q24 76 27 50')+hand(27,49)+arm('M81 88Q104 76 101 50')+hand(101,49);extra=`<path d="M12 20l2 5 5 2-5 2-2 5-2-5-5-2 5-2zM112 14l1.500 3.500 3.500 1.500-3.500 1.500-1.500 3.500-1.500-3.500-3.500-1.500 3.500-1.500z" fill="#D9EF70" stroke="${P}" stroke-width="1.200" stroke-linejoin="round"/>`;}
  else {arms=arm('M47 88Q48 102 60 105')+hand(60,105)+arm('M81 88Q80 102 68 105')+hand(68,105);}
  if(worried) extra=`<path d="M100 36q5 7 0 10q-5-3 0-10z" fill="${T}" stroke="${P}" stroke-width="1.500"/>`;
  let inner;
  if(head) inner=ears+face;
  else {
    inner=tail+body+feet+arms+ears+face+top+extra;
    if(v==='relax') inner=tail+body+feet+arms+ears+face+`<path d="M24 124C44 138 88 138 106 120" fill="none" stroke="${P}" stroke-width="30" stroke-linecap="round"/><path d="M24 124C44 138 88 138 106 120" fill="none" stroke="${V}" stroke-width="23" stroke-linecap="round"/><path d="M24 124C44 138 88 138 106 120" fill="none" stroke="${L}" stroke-width="23" stroke-dasharray="8 16" opacity=".45"/>`;
    if(v==='party') inner=`<g transform="translate(0,-5)">${inner}</g>`;
  }
  const vb=head?'24 0 80 84':'-6 -4 132 148';
  const [,,w,h]=vb.split(' ').map(Number);
  return `<svg width="${Math.round(size*w/h)}" height="${size}" viewBox="${vb}" role="img" aria-label="VIVI, la mascotte">${inner}</svg>`;
}
window.icon=icon;window.iconFill=iconFill;window.mascot=mascot;

/* ---------- Tab bar fluttuante ---------- */
const TABS=[['scopri','Scopri','home','04-home.html'],['mappa','Mappa','map','07-mappa.html'],['piani','Piani','clipboard','15-piani.html'],['gruppi','Gruppi','users','14-uscita-condivisa.html'],['profilo','Profilo','profile','16-profilo.html']];
window.tabbar=function(active){
  const host=document.querySelector('.phone');if(!host||!active)return;
  const idx=TABS.findIndex(t=>t[0]===active);
  const nav=document.createElement('nav');nav.className='tabbar';nav.setAttribute('aria-label','Navigazione principale');
  nav.innerHTML='<span class="glow"></span>'+TABS.map(t=>`<a class="tab${t[0]===active?' on':''}" href="${t[3]}" data-go="${t[3]}"><span class="ic">${t[0]===active?iconFill(t[2],24).replace(/fill="currentColor"/,'fill="currentColor" fill-opacity=".18"'):icon(t[2],24)}</span>${t[1]}</a>`).join('');
  host.appendChild(nav);
  const glow=nav.querySelector('.glow'),tabs=nav.querySelectorAll('.tab');
  const place=i=>{const t=tabs[i];glow.style.transform=`translateX(${t.offsetLeft+t.offsetWidth/2-22-6}px)`;};
  let prev=idx;try{const p=sessionStorage.getItem('vivi-tab');if(p!==null)prev=+p;sessionStorage.setItem('vivi-tab',idx);}catch(e){}
  glow.style.transition='none';place(prev);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{glow.style.transition='';place(idx);}));
};

/* ---------- Idratazione + comportamento ---------- */
function hydrate(root=document){
  root.querySelectorAll('i[data-i]').forEach(e=>{const n=e.dataset.i;e.innerHTML=n.endsWith('+')?iconFill(n.slice(0,-1),+e.dataset.s||20,e.dataset.c):icon(n,+e.dataset.s||20,e.dataset.c);e.removeAttribute('data-i');});
  root.querySelectorAll('span[data-m]').forEach(e=>{e.innerHTML=mascot(e.dataset.m,+e.dataset.s||80);e.removeAttribute('data-m');});
}
window.hydrate=hydrate;
window.countUp=function(el,to,dur=1200,fmt){
  const t0=performance.now(),f=fmt||(v=>String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g,'.'));
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=f(to);return;}
  const step=t=>{const p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=f(to*e);if(p<1)requestAnimationFrame(step);};
  requestAnimationFrame(step);
};
function activate(el){
  el.classList.add('in');
  if(el.dataset.count!==undefined&&!el._c){el._c=1;countUp(el,+el.dataset.count,+el.dataset.dur||1200);}
  el.querySelectorAll('[data-count]').forEach(c=>{if(!c._c){c._c=1;countUp(c,+c.dataset.count,+c.dataset.dur||1200);}});
  el.querySelectorAll('[data-w]').forEach(b=>setTimeout(()=>b.style.width=b.dataset.w,150));
  if(el.dataset.w)setTimeout(()=>el.style.width=el.dataset.w,150);
}
function reveal(){
  const els=[...document.querySelectorAll('.rv')];
  els.forEach(e=>{const sibs=[...e.parentElement.children].filter(c=>c.classList.contains('rv'));e.style.setProperty('--rd',Math.min(sibs.indexOf(e),8)*80+'ms');});
  const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){activate(x.target);io.unobserve(x.target);}}),{threshold:.12}):null;
  els.forEach(e=>io?io.observe(e):activate(e));
  /* contatori e barre fuori da .rv */
  document.querySelectorAll('[data-count]:not(.rv *):not(.rv),[data-w]:not(.rv *):not(.rv)').forEach(e=>{
    if(io){const o=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){activate(x.target);o.unobserve(x.target);}}),{threshold:.1});o.observe(e);}else activate(e);});
}
function behaviors(){
  /* gruppi di pill: singola o multipla selezione */
  document.querySelectorAll('[data-single]').forEach(g=>g.addEventListener('click',e=>{const c=e.target.closest('.chip,[data-opt]');if(!c||!g.contains(c))return;g.querySelectorAll('.chip,[data-opt]').forEach(x=>x.classList.remove('on'));c.classList.add('on');g.dispatchEvent(new CustomEvent('pick',{detail:c}));}));
  document.querySelectorAll('[data-multi]').forEach(g=>g.addEventListener('click',e=>{const c=e.target.closest('.chip,[data-opt]');if(!c||!g.contains(c))return;c.classList.toggle('on');g.dispatchEvent(new CustomEvent('pick',{detail:c}));}));
  /* like / salva */
  document.querySelectorAll('.like').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();b.classList.remove('on');void b.offsetWidth;b.classList.toggle('on',!b._on);b._on=!b._on;const n=b.querySelector('.cnt');if(n&&n.dataset.base){n.textContent=(+n.dataset.base+(b._on?1:0));}}));
  /* navigazione con slide */
  document.addEventListener('click',e=>{
    const a=e.target.closest('[data-go]');if(!a)return;
    const url=a.dataset.go;if(!url||url==='#')return;
    e.preventDefault();const s=document.querySelector('.screen');
    if(matchMedia('(prefers-reduced-motion:reduce)').matches||!s){location.href=url;return;}
    s.classList.add('leaving');setTimeout(()=>location.href=url,280);
  });
  /* toggle password */
  document.querySelectorAll('[data-eye]').forEach(b=>b.addEventListener('click',()=>{const i=document.querySelector(b.dataset.eye);const sh=i.type==='password';i.type=sh?'text':'password';b.innerHTML=icon(sh?'eyeoff':'eye',18);}));
}
const q=new URLSearchParams(location.search).get('theme');
if(q==='dark'||q==='light')document.documentElement.dataset.theme=q;
document.addEventListener('DOMContentLoaded',()=>{hydrate();behaviors();reveal();});
})();
