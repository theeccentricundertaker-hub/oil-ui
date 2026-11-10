"""Genera vivi-single.html: tutta l'app in un solo file (CSS e JS incorporati)."""
import pathlib
here=pathlib.Path(__file__).parent; root=here.parent
r=lambda p:(p).read_text()
css=r(root/'vivi.css')+'\n'+r(here/'app.css')
js='\n'.join(r(p) for p in [root/'vivi.js',here/'data.js',here/'core.js',here/'views1.js',here/'views2.js'])
html=f'''<title>VIVI</title>
<meta name="description" content="VIVI, la tua città prende vita">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>{css}</style>
<div class="phone" id="app">
  <div id="stage"></div>
  <nav class="tabbar hide" id="tabbar" aria-label="Navigazione principale"><span class="glow"></span>
    <button class="tab" data-tab="home" data-ic="home">Scopri</button><button class="tab" data-tab="map" data-ic="map">Mappa</button><button class="tab" data-tab="plans" data-ic="clipboard">Piani</button><button class="tab" data-tab="groups" data-ic="users">Gruppi</button><button class="tab" data-tab="profile" data-ic="profile">Profilo</button>
  </nav>
  <div id="layer"></div>
</div>
<script>{js}</script>
<script>A.boot()</script>
'''
(here/'vivi-single.html').write_text(html)
print(len(html)//1024,'KB')
