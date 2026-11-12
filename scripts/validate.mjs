import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root=process.cwd();
const pages=['index.html','r/find-the-bottleneck/index.html','r/before-adding-ai/index.html','r/vibecoded-app-launch/index.html','r/ai-concepts-field-guide/index.html'];
const failures=[];
const check=(ok,msg)=>{if(!ok)failures.push(msg)};
for(const f of pages){
 const abs=path.join(root,f);check(fs.existsSync(abs),'Missing page: '+f);
 if(!fs.existsSync(abs))continue;
 const html=fs.readFileSync(abs,'utf8');
 check((html.match(/<h1(?:\s|>)/gi)||[]).length===1,f+': expected exactly one H1');
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  let url=match[1];
  if(/^(?:https?:|mailto:|tel:|data:)/i.test(url))continue;
  const [target,fragment]=url.split('#',2);
  if(!target){
   if(fragment)check(ids.has(fragment),f+': missing anchor '+fragment);
   continue;
  }
  if(/^javascript:/i.test(target)){failures.push(f+': unsafe URL');continue;}
  const resolved=path.resolve(path.dirname(abs),decodeURIComponent(target));
  check(resolved.startsWith(root+path.sep)||resolved===root,f+': path escapes project: '+url);
  check(fs.existsSync(resolved),f+': missing local link: '+url);
  if(fragment&&path.resolve(abs)===resolved)check(ids.has(fragment),f+': missing anchor '+fragment);
 }
}
for(const script of ['assets/site.js','assets/bottlenecks.js']){
 try{execFileSync('node',['--check',script],{cwd:root,stdio:'pipe'})}
 catch(err){failures.push(script+': JavaScript syntax invalid: '+err.message)}
}
const main=fs.readFileSync('index.html','utf8');
check(main.includes('./r/find-the-bottleneck/'),'Homepage does not link to new guide');
check((main.match(/data-category="/g)||[]).length===1,'Homepage must list one published resource');
check(main.includes('id="resource-search"'),'Homepage search missing');
const guide=fs.readFileSync('r/find-the-bottleneck/index.html','utf8');
for(const id of ['capacity-tool','demand','stage-1','stage-2','stage-3','limiting-stage','queue-growth','effective-output','calc-meter','progress-number','progress','progress-fill']){
 check(guide.includes('id="'+id+'"'),'Bottleneck guide missing component '+id);
}
check((guide.match(/class="check"/g)||[]).length===9,'Expected nine diagnosis checklist controls');
for(const f of ['downloads/find-the-bottleneck.md','downloads/process-measurement-template.csv','assets/bottlenecks.css','assets/bottlenecks.js'])check(fs.existsSync(f),'Missing companion file: '+f);
const sitemap=fs.readFileSync('sitemap.xml','utf8');check(sitemap.includes('/r/find-the-bottleneck/'),'Sitemap missing guide');
for(const f of pages.slice(2))check(fs.readFileSync(f,'utf8').includes('name="robots" content="noindex,follow"'),f+': draft page should be noindex');
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('PASS: 5 pages, local links, anchors, companion files, published catalog, JS syntax, and interactions');
