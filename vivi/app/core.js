/* VIVI app — nucleo: stato, router, UI helper, gamification */
(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const DAYS=['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],DAYSL=['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],MON=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
const KEY='vivi-app-v1';
const def=()=>({onboarded:false,user:null,xp:0,saved:[],liked:[],joined:[],plans:[],badges:{},recent:['Concerti jazz','Yoga all\'aperto','Aperitivo'],theme:'auto',streak:1,lastOpen:null,mapSeen:[],invited:[],log:[],notifs:[],seq:1,interests:['musica','food','arte'],filters:{when:null,dist:10,price:null,type:[]},notify:true});
let S;try{S=Object.assign(def(),JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){S=def()}
const A={S,$,$$,DAYS,DAYSL,MON,timers:[]};
A.save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
A.reset=()=>{try{localStorage.removeItem(KEY)}catch(e){};location.hash='';location.reload()};
const I=(n,s=18,c)=>icon(n,s,c),M=(v,s)=>mascot(v,s);A.I=I;A.M=M;
A.haptic=(n=8)=>{try{navigator.vibrate&&navigator.vibrate(n)}catch(e){}};
A.later=(fn,ms)=>{const t=setTimeout(fn,ms);A.timers.push(t);return t};
A.every=(fn,ms)=>{const t=setInterval(fn,ms);A.timers.push(t);return t};
A.clearTimers=()=>{A.timers.forEach(t=>{clearTimeout(t);clearInterval(t)});A.timers=[]};
/* ---- date / eventi ---- */
A.dateOf=o=>{const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()+o);return d};
A.whenLabel=e=>(e.d===0?'Oggi':e.d===1?'Domani':DAYS[A.dateOf(e.d).getDay()])+' '+e.t0.replace(/^0/,'');
A.ev=id=>EVENTS.find(e=>e.id===id);
A.isWeekend=d=>{const g=A.dateOf(d).getDay();return g===0||g===6};
A.priceLabel=e=>e.price?e.price+' euro':'Gratis';
A.xpOf=e=>CATXP[e.cat]||20;
A.fmtDist=k=>k<1?Math.round(k*1000)+'m':k.toFixed(1).replace('.',',')+'km';
A.query=(o={})=>{const f=o.filters||{},q=(o.q||'').toLowerCase().trim();
 let r=EVENTS.filter(e=>{
  if(o.cat&&e.cat!==o.cat)return false;
  if(q&&!(e.t+' '+e.place+' '+CATS[e.cat][0]+' '+e.org).toLowerCase().split(/\s+/).join(' ').includes(q)&&!q.split(/\s+/).every(w=>(e.t+' '+e.place+' '+CATS[e.cat][0]+' '+e.org).toLowerCase().includes(w)))return false;
  if(o.now&&e.d!==0)return false;
  if(f.when==='Oggi'&&e.d!==0)return false;if(f.when==='Domani'&&e.d!==1)return false;if(f.when==='Weekend'&&!A.isWeekend(e.d))return false;
  if(f.dist&&e.km>f.dist)return false;
  if(f.price==='Gratis'&&e.price)return false;if(f.price==='Fino a 10'&&e.price>10)return false;if(f.price==='Fino a 20'&&e.price>20)return false;if(f.price==='20+'&&e.price<=20)return false;
  if(f.type&&f.type.length){const ok=(e.out&&f.type.includes('out'))||(!e.out&&f.type.includes('in'));if(!ok)return false}
  return true});
 const s=o.sort||'near',k=e=>e.d*1440+(+e.t0.slice(0,2))*60+(+e.t0.slice(3));
 r.sort(s==='soon'?(a,b)=>k(a)-k(b):s==='pop'?(a,b)=>b.ppl-a.ppl:s==='free'?(a,b)=>a.price-b.price||a.km-b.km:(a,b)=>a.km-b.km);return r};
A.activeFilters=()=>{const f=S.filters;return (f.when?1:0)+(f.dist<10?1:0)+(f.price?1:0)+(f.type.length?1:0)};
/* ---- livelli ---- */
const TITLES=['Novizio','Curioso','Esploratore Urbano','Frequentatore','Animatore','Leggenda Urbana'];
A.level=x=>Math.floor(x/250)+1;A.lvTitle=l=>TITLES[Math.min(TITLES.length-1,Math.floor((l-1)/2))];
A.lvProg=x=>({lv:A.level(x),cur:x%250,need:250,pct:(x%250)/250*100});
/* ---- layer: toast, sheet, modal ---- */
A.toast=(msg,ic='check')=>{const t=document.createElement('div');t.className='toast';t.innerHTML=`<span class="ti">${I(ic,16)}</span>${msg}`;$('#layer').appendChild(t);setTimeout(()=>{t.classList.add('out');setTimeout(()=>t.remove(),300)},2200)};
A.sheet=(html,mount,o={})=>{const ov=document.createElement('div');ov.className='ov';const sh=document.createElement('div');sh.className='sheet'+(o.tall?' tall':'');sh.innerHTML=`<div class="sheet-handle"></div>${html}`;$('#layer').append(ov,sh);
 requestAnimationFrame(()=>{ov.classList.add('on');sh.classList.add('on')});
 const close=()=>{ov.classList.remove('on');sh.classList.remove('on');setTimeout(()=>{ov.remove();sh.remove()},350);o.onClose&&o.onClose()};
 ov.onclick=close;let y0=null;const h=$('.sheet-handle',sh);h.style.touchAction='none';h.onpointerdown=e=>{y0=e.clientY;h.setPointerCapture(e.pointerId)};h.onpointermove=e=>{if(y0!==null)sh.style.transform=`translateY(${Math.max(0,e.clientY-y0)}px)`;sh.style.transition='none'};h.onpointerup=e=>{sh.style.transition='';if(y0!==null&&e.clientY-y0>70)close();else sh.style.transform='';y0=null};
 sh.addEventListener('click',e=>{if(e.target.closest('[data-close]'))close()});mount&&mount(sh,close);return close};
A._q=[];A._m=false;
A.modal=(html,mount)=>{if(A._m){A._q.push([html,mount]);return}A._m=true;const ov=document.createElement('div');ov.className='ov modal-ov';const m=document.createElement('div');m.className='modal';m.innerHTML=html;ov.appendChild(m);$('#layer').appendChild(ov);requestAnimationFrame(()=>ov.classList.add('on'));
 let shut=false;const close=()=>{if(shut)return;shut=true;ov.classList.remove('on');ov.classList.add('closing');setTimeout(()=>{ov.remove();A._m=false;const n=A._q.shift();if(n)A.modal(n[0],n[1])},300)};
 ov.addEventListener('click',e=>{if(e.target===ov||e.target.closest('[data-close]'))close()});mount&&mount(m,close);return close};
/* ---- particelle ---- */
A.burst=(x,y,o={})=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const cols=o.cols||['#6845F5','#FFB7D5','#D9EF70','#A98BFF','#DCD2FF'],n=o.n||14,L=$('#layer');
 for(let i=0;i<n;i++){const p=document.createElement('i');p.className='bp';const s=o.size||(4+Math.random()*5);p.style.cssText=`left:${x}px;top:${y}px;width:${s}px;height:${s}px;background:${cols[i%cols.length]};border-radius:${Math.random()<.4?'2px':'50%'}`;L.appendChild(p);
  const a=Math.random()*Math.PI*2,r=(o.r||90)*(.4+Math.random()*.8);p.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${Math.cos(a)*r}px,${Math.sin(a)*r+(o.g||30)}px) scale(.3) rotate(${Math.random()*360}deg)`,opacity:0}],{duration:o.t||900,easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish=()=>p.remove()}};
A.burstAt=(el,o)=>{const r=el.getBoundingClientRect(),ph=$('.phone').getBoundingClientRect();A.burst(r.left-ph.left+r.width/2,r.top-ph.top+r.height/2,o)};
A.confetti=()=>{const w=$('.phone').clientWidth;A.burst(w/2,160,{n:40,r:220,g:260,t:1600,size:7})};
/* ---- notifiche ---- */
A.notify=(t,ic='bell')=>{S.notifs.unshift({t,ic,time:Date.now(),read:false});S.notifs=S.notifs.slice(0,30);A.save();const d=$('.bell-dot');if(d)d.classList.remove('hide')};
A.timeAgo=t=>{const m=Math.round((Date.now()-t)/60000);return m<1?'adesso':m<60?m+' min fa':Math.round(m/60)+' h fa'};
/* ---- XP e badge ---- */
A.award=(xp,why)=>{const before=A.level(S.xp);S.xp+=xp;A.save();
 const c=document.createElement('div');c.className='xpfloat';c.innerHTML=`${I('star',16)}<b>+${xp} XP</b><span>${why||''}</span>`;$('#layer').appendChild(c);setTimeout(()=>c.remove(),2400);
 A.haptic(20);const after=A.level(S.xp);if(after>before)A.later(()=>A.levelUp(after),900);};
A.levelUp=l=>{A.confetti();A.modal(`<div class="center col" style="align-items:center;gap:10px"><div class="lvring">${M('party',96)}</div><div class="sora" style="font:800 28px 'Sora'">Livello ${l}!</div><div class="muted">${A.lvTitle(l)}</div><button class="btn block" data-close style="margin-top:8px">Continua</button></div>`)};
A.checkBadges=()=>{BADGES.forEach(b=>{if(!S.badges[b.id]&&b.get(S)>=b.goal){S.badges[b.id]=Date.now();A.save();A.later(()=>{A.confetti();A.modal(`<div class="col" style="align-items:center;gap:8px;text-align:center"><div class="bdg-pop" style="background:var(--${b.col});color:${b.col==='viola'||b.col==='prugna'?'#fff':'var(--ink)'}">${I(b.ic,40)}</div><div class="xs violet" style="font-weight:700;letter-spacing:1px">NUOVO BADGE</div><div class="sora" style="font:800 24px 'Sora'">${b.n}</div><div class="muted sm">${b.d}</div><div class="row gap8" style="margin-top:10px;width:100%"><button class="btn sec grow" data-close>Chiudi</button><button class="btn grow" data-close data-to="/badges">Vedi badge</button></div></div>`);A.notify('Nuovo badge: '+b.n,'trophy')},600)}})};
/* ---- enhance: idrata e anima ---- */
function act(e){e.classList.add('in');if(e.dataset.count!==undefined&&!e._c){e._c=1;countUp(e,+e.dataset.count,+e.dataset.dur||1000)}if(e.dataset.w)setTimeout(()=>e.style.width=e.dataset.w,100);$$('[data-count],[data-w]',e).forEach(c=>{if(!c._c)act(c)})}
A.enhance=root=>{$$('.rv',root).forEach(e=>{const sib=[...e.parentElement.children].filter(c=>c.classList.contains('rv'));e.style.setProperty('--rd',Math.min(sib.indexOf(e),9)*70+'ms')});
 const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){act(x.target);io.unobserve(x.target)}}),{root:root.classList.contains('view')?root:null,threshold:.08});
 $$('.rv,[data-count],[data-w]',root).forEach(e=>io.observe(e))};
/* ---- tema ---- */
A.applyTheme=()=>{const r=document.documentElement;if(S.theme==='auto')delete r.dataset.theme;else r.dataset.theme=S.theme};
/* ---- router ---- */
const routes={},TABS=['home','map','plans','groups','profile'];A.route=(n,f)=>routes[n]=f;
let stack=[],cur=null,view=null,busy=false;
A.go=p=>{if(location.hash==='#'+p)render();else location.hash=p};A.replace=p=>{location.replace('#'+p)};
A.back=()=>{if(stack.length>1)history.back();else A.go('/home')};
function render(){const raw=location.hash.slice(1)||'/splash';const [path,qs]=raw.split('?');const parts=path.split('/').filter(Boolean),name=parts[0]||'splash';
 const guard=!['splash','onboarding','auth'].includes(name);
 if(guard&&(!S.onboarded||!S.user))return A.replace(S.onboarded?'/auth':'/onboarding');
 const fn=routes[name];if(!fn)return A.replace('/home');
 if(busy&&cur===raw)return;
 const isTab=TABS.includes(name);let dir='f';
 if(cur!==null){const pn=(cur.split('?')[0].split('/')[1]||''),pi=TABS.indexOf(pn),ni=TABS.indexOf(name);
  if(isTab&&pi>-1)dir=ni>pi?'f':'b';else if(stack.length>1&&stack[stack.length-2]===raw)dir='b';else dir='f'}
 if(isTab)stack=[raw];else if(stack.length>1&&stack[stack.length-2]===raw)stack.pop();else if(stack[stack.length-1]!==raw)stack.push(raw);
 const prev=cur;cur=raw;A.clearTimers();
 const out=fn(parts.slice(1),new URLSearchParams(qs||''))||{};
 const el=document.createElement('div');el.className='screen view'+(out.cls?' '+out.cls:'');el.innerHTML=out.html||'';
 const st=$('#stage');const old=view;
 if(old){old.classList.add(isTab&&TABS.includes((prev||'').split('?')[0].split('/')[1])?'vo-fade':dir==='f'?'vo-l':'vo-r');old.style.pointerEvents='none';setTimeout(()=>old.remove(),380)}
 el.classList.add(!old?'vi-fade':isTab&&TABS.includes((prev||'').split('?')[0].split('/')[1])?(dir==='f'?'vi-tr':'vi-tl'):dir==='f'?'vi-r':'vi-l');
 st.appendChild(el);view=el;A.enhance(el);out.mount&&out.mount(el);
 const tb=$('#tabbar');const t=out.tab||(isTab?name:null);tb.classList.toggle('hide',!t);
 if(t){$$('.tab',tb).forEach((b,i)=>b.classList.toggle('on',b.dataset.tab===t));moveGlow()}
 const bd=$('.bell-dot',el);if(bd)bd.classList.toggle('hide',!S.notifs.some(n=>!n.read));}
A.render=render;
function moveGlow(){const tb=$('#tabbar'),g=$('.glow',tb),on=$('.tab.on',tb);if(!on)return;g.style.transform=`translateX(${on.offsetLeft+on.offsetWidth/2-22-6}px)`}
A.moveGlow=moveGlow;
/* ---- azioni globali ---- */
A.act={};
A.act.save=(el,ev)=>{const id=el.dataset.id,i=S.saved.indexOf(id),on=i<0;if(on)S.saved.push(id);else S.saved.splice(i,1);A.save();A.haptic();
 $$(`[data-act="save"][data-id="${id}"]`).forEach(b=>{b.classList.toggle('on',on);const c=$('svg',b);if(c){c.style.fill=on?'currentColor':'none';b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop')}});
 if(on){A.burstAt(el,{n:8,r:40,cols:['#FF5C8A','#FFB7D5','#D9EF70'],size:4});A.toast('Salvato nei tuoi preferiti','bookmark');A.checkBadges()}
 el.dispatchEvent(new CustomEvent('saved',{bubbles:true}))};
A.act.like=(el)=>{const id=el.dataset.id,i=S.liked.indexOf(id),on=i<0;on?S.liked.push(id):S.liked.splice(i,1);A.save();A.haptic();el.classList.toggle('on',on);el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop');const n=$('.cnt',el);if(n)n.textContent=(+n.dataset.base)+(on?1:0);if(on)A.burstAt(el,{n:8,r:40,cols:['#FF5C8A','#FFB7D5'],size:4})};
A.act.back=()=>A.back();
A.act.copy=(el)=>{const t=location.origin+location.pathname+(el.dataset.link||'');try{navigator.clipboard.writeText(t)}catch(e){}A.toast('Link copiato','link')};
A.act.notifs=()=>{const list=S.notifs.length?S.notifs.map(n=>`<div class="nrow ${n.read?'':'unr'}"><span class="ni">${I(n.ic||'bell',18)}</span><div class="grow"><div style="font-size:14px">${n.t}</div><div class="xs muted">${A.timeAgo(n.time)}</div></div></div>`).join(''):`<div class="center col" style="align-items:center;gap:8px;padding:24px 0">${M('relax',90)}<div class="muted">Nessuna notifica</div></div>`;
 A.sheet(`<h3 class="sora" style="font:700 20px 'Sora';margin:4px 0 8px">Notifiche</h3>${list}`,null,{tall:true});S.notifs.forEach(n=>n.read=true);A.save();$$('.bell-dot').forEach(d=>d.classList.add('hide'))};
/* picker piani */
A.planPicker=id=>{const e=A.ev(id),ps=S.plans.filter(p=>p.status!=='done');
 A.sheet(`<h3 class="sora" style="font:700 20px 'Sora';margin:4px 0 4px">Aggiungi a un piano</h3><div class="muted sm" style="margin-bottom:12px">${e.t}</div>
 ${ps.map(p=>`<button class="pk" data-p="${p.id}"><span class="ci">${I('clipboard',20)}</span><div class="grow" style="text-align:left"><b class="sora" style="font:600 15px 'Sora'">${p.title}</b><div class="xs muted">${A.planDate(p)} · ${p.stops.length} tappe</div></div>${I('plus',18)}</button>`).join('')}
 <button class="btn block tall" data-new style="margin-top:10px">${I('plus',18)}Nuovo piano con questa attività</button>`,(sh,close)=>{
  sh.addEventListener('click',e2=>{const b=e2.target.closest('.pk');if(b){const p=S.plans.find(x=>x.id===b.dataset.p);if(p.stops.some(s=>s.ev===id)){A.toast('È già nel piano','check');return}p.stops.push({ev:id,time:e.t0,done:false,votes:[]});p.stops.sort((a,b)=>a.time.localeCompare(b.time));A.save();close();A.toast('Aggiunto a «'+p.title+'»','clipboard')}
   if(e2.target.closest('[data-new]')){close();setTimeout(()=>A.go('/wizard?ev='+id),200)}})})};
A.planDate=p=>{const d=new Date(p.date);return DAYS[d.getDay()]+' '+d.getDate()+' '+MON[d.getMonth()].slice(0,3)};
A.planXp=p=>p.stops.reduce((a,s)=>a+A.xpOf(A.ev(s.ev)),0)+50;
/* ---- boot ---- */
A.boot=()=>{A.applyTheme();const td=new Date().toDateString();if(S.lastOpen!==td){const y=new Date(Date.now()-864e5).toDateString();S.streak=S.lastOpen===y?S.streak+1:1;S.lastOpen=td;A.save()}
 const ap=$('#app');
 ap.addEventListener('click',e=>{const a=e.target.closest('[data-act]');if(a&&A.act[a.dataset.act]){e.preventDefault();e.stopPropagation();A.act[a.dataset.act](a,e);return}
  const t=e.target.closest('[data-to]');if(t){e.preventDefault();A.haptic(6);if(t.hasAttribute('data-close'))return A.go(t.dataset.to);t.dataset.to==='back'?A.back():A.go(t.dataset.to)}});
 /* ripple */
 ap.addEventListener('pointerdown',e=>{const b=e.target.closest('.btn,.chip');if(!b||b.classList.contains('off'))return;const r=b.getBoundingClientRect(),s=document.createElement('span');s.className='ripple';const d=Math.max(r.width,r.height)*1.6;s.style.cssText=`width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;b.appendChild(s);setTimeout(()=>s.remove(),600)});
 /* tab bar */
 $$('#tabbar .tab').forEach(b=>{const ic=icon(b.dataset.ic,24);b.insertAdjacentHTML('afterbegin',`<span class="ic">${ic}</span>`);b.addEventListener('click',()=>{A.haptic(6);const to='/'+b.dataset.tab;if(location.hash==='#'+to){view&&view.scrollTo({top:0,behavior:'smooth'})}else A.go(to)})});
 addEventListener('hashchange',render);addEventListener('online',()=>A.toast('Sei di nuovo online','check'));addEventListener('offline',()=>A.toast('Sei offline','warning'));
 if(!location.hash)location.hash='/splash';else render()};
window.A=A;
})();
