import{n as b,s as p}from"./scheduler.b3c879a1.js";const t=[];function d(o,l=b){let i;const n=new Set;function r(e){if(p(o,e)&&(o=e,i)){const c=!t.length;for(const s of n)s[1](),t.push(s,o);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function u(e){r(e(o))}function _(e,c=b){const s=[e,c];return n.add(s),n.size===1&&(i=l(r,u)||b),e(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_8ayseu)==null?void 0:f.base)??"/slick-portfolio-svelte";var a;const k=((a=globalThis.__sveltekit_8ayseu)==null?void 0:a.assets)??h;export{k as a,h as b,d as w};
