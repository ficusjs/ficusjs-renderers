function createStyle(e){const t=document.createElement("style");return t.appendChild(document.createTextNode(e)),t}function css(e,...t){const n=e.raw;let c="",r=1;const o=arguments.length;let l,s;for(;r<o;)l=n[r-1],s=t[r-1],c+=l+s,r++;return c+=n[n.length-1],createStyle(c)}export{css};
//# sourceMappingURL=css.mjs.map
