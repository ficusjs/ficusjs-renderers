var umap=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const e=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,t=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,n=/<[a-z][^>]+$/i,r=/>[^<>]*$/,l=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,o=/\s+$/,isNode=(e,t)=>0<t--&&(n.test(e[t])||!r.test(e[t])&&isNode(e,t)),regular=(e,n,r)=>t.test(n)?e:`<${n}${r.replace(o,"")}></${n}>`;const{isArray:s}=Array,{indexOf:a,slice:i}=[],diffable=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e;
/*! (c) Andrea Giammarchi - ISC */
var c=function(e){var t="fragment",n="template",r="content"in create(n)?function(e){var t=create(n);return t.innerHTML=e,t.content}:function(e){var r=create(t),l=create(n),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var s=RegExp.$1;l.innerHTML="<table>"+e+"</table>",o=l.querySelectorAll(s)}else l.innerHTML=e,o=l.childNodes;return append(r,o),r};return function(e,t){return("svg"===t?createSVG:r)(e)};function append(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function create(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function createSVG(e){var n=create(t),r=create("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",append(n,r.firstChild.childNodes),n}}(document);const reducePath=({childNodes:e},t)=>e[t],createPath=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.push(a.call(n.childNodes,e)),n=(e=n).parentNode;return t},{createTreeWalker:u,importNode:d}=document,p=1!=d.length,f=p?(e,t,n)=>d.call(document,c(e,t,n),!0):c,h=p?e=>u.call(document,e,129,null,!1):e=>u.call(document,e,129),diff=(e,t,n)=>((e,t,n,r,l)=>{const o=n.length;let s=t.length,a=o,i=0,c=0,u=null;for(;i<s||c<a;)if(s===i){const t=a<o?c?r(n[c-1],-0).nextSibling:r(n[a-c],0):l;for(;c<a;)e.insertBefore(r(n[c++],1),t)}else if(a===c)for(;i<s;)u&&u.has(t[i])||e.removeChild(r(t[i],-1)),i++;else if(t[i]===n[c])i++,c++;else if(t[s-1]===n[a-1])s--,a--;else if(t[i]===n[a-1]&&n[c]===t[s-1]){const l=r(t[--s],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[i++],-1).nextSibling),e.insertBefore(r(n[--a],1),l),t[s]=n[a]}else{if(!u){u=new Map;let e=c;for(;e<a;)u.set(n[e],e++)}if(u.has(t[i])){const l=u.get(t[i]);if(c<l&&l<a){let o=i,d=1;for(;++o<s&&o<a&&u.get(t[o])===l+d;)d++;if(d>l-c){const o=r(t[i],0);for(;c<l;)e.insertBefore(r(n[c++],1),o)}else e.replaceChild(r(n[c++],1),r(t[i++],-1))}else i++}else e.removeChild(r(t[i++],-1))}return n})(e.parentNode,t,n,diffable,e),handleAttribute=(e,t)=>"ref"===t?(e=>t=>{"function"==typeof t?t(e):t.current=e})(e):"aria"===t?(e=>t=>{for(const n in t){const r="role"===n?n:"aria-"+n,l=t[n];null==l?e.removeAttribute(r):e.setAttribute(r,l)}})(e):".dataset"===t?(({dataset:e})=>t=>{for(const n in t){const r=t[n];null==r?delete e[n]:e[n]=r}})(e):"."===t.slice(0,1)?((e,t)=>n=>{e[t]=n})(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const l=s(t)?t:[t,!1];n!==l[0]&&(n&&e.removeEventListener(r,n,l[1]),(n=l[0])&&e.addEventListener(r,n,l[1]))}})(e,t):((e,t)=>{let n,r=!0;const l=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(l),r=!0):(l.value=t,r&&(e.setAttributeNodeNS(l),r=!1)))}})(e,t);function handlers(e){const{type:t,path:n}=e,r=n.reduceRight(reducePath,this);return"node"===t?(e=>{let t,n,r=[];const anyContent=l=>{switch(typeof l){case"string":case"number":case"boolean":t!==l&&(t=l,n?n.textContent=l:n=document.createTextNode(l),r=diff(e,r,[n]));break;case"object":case"undefined":if(null==l){t!=l&&(t=l,r=diff(e,r,[]));break}if(s(l)){t=l,0===l.length?r=diff(e,r,[]):"object"==typeof l[0]?r=diff(e,r,l):anyContent(String(l));break}"ELEMENT_NODE"in l&&t!==l&&(t=l,r=diff(e,r,11===l.nodeType?i.call(l.childNodes):[l]))}};return anyContent})(r):"attr"===t?handleAttribute(r,e.name):(e=>{let t;return n=>{t!=n&&(t=n,e.textContent=null==n?"":n)}})(r)}const m=umap(new WeakMap),g=/^(?:plaintext|script|style|textarea|title|xmp)$/i,mapTemplate=(t,n)=>{const r=((t,n,r)=>{const o=[],{length:s}=t;for(let r=1;r<s;r++){const l=t[r-1];o.push(e.test(l)&&isNode(t,r)?l.replace(e,((e,t,l)=>`${n}${r-1}=${l||'"'}${t}${l?"":'"'}`)):`${l}\x3c!--${n}${r-1}--\x3e`)}o.push(t[s-1]);const a=o.join("").trim();return r?a:a.replace(l,regular)})(n,"isµ","svg"===t),o=f(r,t),s=h(o),a=[],i=n.length-1;let c=0,u="isµ"+c;for(;c<i;){const e=s.nextNode();if(!e)throw"bad template: "+r;if(8===e.nodeType)e.textContent===u&&(a.push({type:"node",path:createPath(e)}),u="isµ"+ ++c);else{for(;e.hasAttribute(u);)a.push({type:"attr",path:createPath(e),name:e.getAttribute(u)}),e.removeAttribute(u),u="isµ"+ ++c;g.test(e.tagName)&&e.textContent.trim()===`\x3c!--${u}--\x3e`&&(e.textContent="",a.push({type:"text",path:createPath(e)}),u="isµ"+ ++c)}}return{content:o,nodes:a}},mapUpdates=(e,t)=>{const{content:n,nodes:r}=m.get(t)||m.set(t,mapTemplate(e,t)),l=d.call(document,n,!0);return{content:l,updates:r.map(handlers,l)}},unroll=(e,{type:t,template:n,values:r})=>{const{length:l}=r;unrollValues(e,r,l);let{entry:o}=e;o&&o.template===n&&o.type===t||(e.entry=o=((e,t)=>{const{content:n,updates:r}=mapUpdates(e,t);return{type:e,template:t,content:n,updates:r,wire:null}})(t,n));const{content:s,updates:a,wire:c}=o;for(let e=0;e<l;e++)a[e](r[e]);return c||(o.wire=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return n?t[0]:e;const r=i.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}})(s))},unrollValues=({stack:e},t,n)=>{for(let r=0;r<n;r++){const n=t[r];n instanceof Hole?t[r]=unroll(e[r]||(e[r]={stack:[],entry:null,wire:null}),n):s(n)?unrollValues(e[r]||(e[r]={stack:[],entry:null,wire:null}),n,n.length):e[r]=null}n<e.length&&e.splice(n)};function Hole(e,t,n){this.type=e,this.template=t,this.values=n}const{create:v,defineProperties:y}=Object,tag=e=>{const t=umap(new WeakMap);return y(((t,...n)=>new Hole(e,t,n)),{for:{value(n,r){const l=t.get(n)||t.set(n,v(null));return l[r]||(l[r]=(t=>(n,...r)=>unroll(t,{type:e,template:n,values:r}))({stack:[],entry:null,wire:null}))}},node:{value:(t,...n)=>unroll({stack:[],entry:null,wire:null},{type:e,template:t,values:n}).valueOf()}})},w=umap(new WeakMap),b=tag("html");function renderer(e,t){((e,t)=>{const n="function"==typeof t?t():t,r=w.get(e)||w.set(e,{stack:[],entry:null,wire:null}),l=n instanceof Hole?unroll(r,n):n;l!==r.wire&&(r.wire=l,e.textContent="",e.appendChild(l.valueOf()))})(t,e)}tag("svg");export{b as html,renderer};
