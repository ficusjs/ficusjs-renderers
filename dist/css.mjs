function css(e,...t){const n=e.raw;let c="",o=1;const r=arguments.length;let s,l;for(;o<r;)s=n[o-1],l=t[o-1],c+=s+l,o++;return c+=n[n.length-1],function(e){const t=document.createElement("style");return t.appendChild(document.createTextNode(e)),t}(c)}export{css};
//# sourceMappingURL=css.mjs.map
