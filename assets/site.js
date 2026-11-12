(()=>{'use strict';
const root=document.documentElement;
const theme=document.getElementById('theme-toggle');
if(theme){
 const refresh=()=>theme.setAttribute('aria-label',root.dataset.theme==='light'?'Switch to dark mode':'Switch to light mode');
 refresh();
 theme.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';try{localStorage.setItem('a2-resources-theme',root.dataset.theme)}catch(e){}refresh()});
}
document.querySelectorAll('.brand-logo').forEach(img=>img.addEventListener('error',()=>{
 img.style.display='none';const fallback=img.parentElement.querySelector('.brand-fallback');if(fallback)fallback.style.display='inline'
}));
const search=document.getElementById('resource-search');
if(search){
 const cards=[...document.querySelectorAll('.tile[data-category]')];
 const filters=[...document.querySelectorAll('[data-filter]')];
 const count=document.getElementById('visible-count'),empty=document.getElementById('empty-state');
 let selected='all';
 const apply=()=>{
  const q=search.value.toLocaleLowerCase().trim();let n=0;
  cards.forEach(card=>{const ok=(selected==='all'||card.dataset.category===selected)&&card.dataset.search.includes(q);card.hidden=!ok;if(ok)n++});
  if(count)count.textContent=String(n);if(empty)empty.hidden=n>0;
 };
 search.addEventListener('input',apply);
 filters.forEach(btn=>btn.addEventListener('click',()=>{
  selected=btn.dataset.filter;
  filters.forEach(x=>x.setAttribute('aria-pressed',String(x===btn)));
  apply()
 }));
}
const guide=document.querySelector('[data-guide]');
if(guide){
 const checks=[...guide.querySelectorAll('.check')],key='a2-resources-progress:'+guide.dataset.guide;
 let saved=[];try{const v=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(v))saved=v}catch(e){}
 checks.forEach((c,i)=>{c.checked=saved.includes(i)});
 const tally=document.getElementById('progress-number'),progress=document.getElementById('progress'),fill=document.getElementById('progress-fill');
 const update=()=>{
  const done=checks.reduce((n,c)=>n+(c.checked?1:0),0);
  if(tally)tally.textContent=done+' / '+checks.length;
  if(progress)progress.setAttribute('aria-valuenow',String(done));
  if(fill)fill.style.width=(done/checks.length*100)+'%';
  try{localStorage.setItem(key,JSON.stringify(checks.flatMap((c,i)=>c.checked?[i]:[])))}catch(e){}
 };
 checks.forEach(c=>c.addEventListener('change',update));
 document.getElementById('reset-guide')?.addEventListener('click',()=>{checks.forEach(c=>c.checked=false);update()});
 document.getElementById('print-guide')?.addEventListener('click',()=>window.print());
 update();
}
})();