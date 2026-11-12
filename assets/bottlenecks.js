(()=>{'use strict';
const get=id=>document.getElementById(id);
const holder=get('capacity-tool');if(!holder)return;
const demand=get('demand');
const names=[get('stage-1-name'),get('stage-2-name'),get('stage-3-name')];
const capacities=[get('stage-1'),get('stage-2'),get('stage-3')];
const output=get('effective-output'),limit=get('limiting-stage'),queue=get('queue-growth'),explanation=get('calc-explanation'),meter=get('calc-meter');
const n=x=>Number(x.value),valid=x=>x.value.trim()!==''&&Number.isFinite(n(x))&&n(x)>=0;
const fmt=x=>Number.isInteger(x)?String(x):x.toFixed(1).replace(/\.0$/,'');
const update=()=>{
 if(!valid(demand)||capacities.some(x=>!valid(x))){
  limit.textContent='Enter valid rates';output.textContent='—';queue.textContent='—';meter.replaceChildren();
  explanation.textContent='Use non-negative daily arrival and stage-capacity numbers.';return;
 }
 const incoming=n(demand),caps=capacities.map(n),min=Math.min(...caps),idx=caps.findIndex(x=>x===min),
 tied=caps.map((c,i)=>c===min?i:-1).filter(i=>i>=0);
 const stepNames=names.map((x,i)=>x.value.trim()||'Step '+(i+1));
 const completed=Math.min(incoming,min),extra=Math.max(0,incoming-completed);
 output.textContent=fmt(completed);queue.textContent=extra>0?'+'+fmt(extra):'0';
 limit.textContent=incoming>min?(tied.length>1?tied.map(i=>stepNames[i]).join(' + '):stepNames[idx]):'No capacity overload';
 const top=Math.max(...caps,incoming,1);
 meter.replaceChildren();
 caps.forEach((cap,i)=>{
  const row=document.createElement('div');row.className='bar-line'+(cap===min&&incoming>min?' low':'');
  const label=document.createElement('span');label.textContent=stepNames[i];label.title=stepNames[i];
  const bg=document.createElement('div');bg.className='bar-bg';
  const fill=document.createElement('div');fill.className='bar-fill';fill.style.width=(100*cap/top)+'%';bg.append(fill);
  const number=document.createElement('b');number.textContent=fmt(cap);
  row.append(label,bg,number);meter.append(row);
 });
 explanation.textContent=incoming>min
 ? (tied.length>1?'Several steps share the lowest effective capacity: ':'The lowest-capacity stage is ')+tied.map(i=>stepNames[i]).join(', ')+'. With '+fmt(incoming)+' arriving and at most '+fmt(completed)+' completed per day, unfinished work could accumulate by approximately '+fmt(extra)+' units daily.'
 : 'At these average rates, all stages can handle the '+fmt(incoming)+' daily arrivals. If work still waits, investigate batching, schedules, variation, dependencies and missing inputs.';
};
[demand,...names,...capacities].forEach(x=>x.addEventListener('input',update));update();
})();