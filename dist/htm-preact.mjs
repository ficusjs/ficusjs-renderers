var e,n,t,o,r,u,i={},c=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,n){for(var t in n)e[t]=n[t];return e}function f(e){var n=e.parentNode;n&&n.removeChild(e)}function a(n,t,o){var r,u,i,c={};for(i in t)"key"==i?r=t[i]:"ref"==i?u=t[i]:c[i]=t[i];if(arguments.length>2&&(c.children=arguments.length>3?e.call(arguments,2):o),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===c[i]&&(c[i]=n.defaultProps[i]);return p(n,c,r,u,null)}function p(e,o,r,u,i){var c={type:e,props:o,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++t:i};return null!=n.vnode&&n.vnode(c),c}function h(e){return e.children}function d(e,n){this.props=e,this.context=n}function v(e,n){if(null==n)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?v(e):null}function y(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return y(e)}}function m(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!g.__r++||u!==n.debounceRendering)&&((u=n.debounceRendering)||r)(g)}function g(){for(var e;g.__r=o.length;)e=o.sort((function(e,n){return e.__v.__b-n.__v.__b})),o=[],e.some((function(e){var n,t,o,r,u,i;e.__d&&(u=(r=(n=e).__v).__e,(i=n.__P)&&(t=[],(o=s({},r)).__v=r.__v+1,P(i,r,o,n.__n,void 0!==i.ownerSVGElement,null!=r.__h?[u]:null,t,null==u?v(r):u,r.__h),D(t,r),r.__e!=u&&y(r)))}))}function k(e,n,t,o,r,u,F,N,L,W){var q,I,O,R,$,B,j,G=o&&o.__k||c,V=G.length;for(t.__k=[],q=0;q<n.length;q++)if(null!=(R=t.__k[q]=null==(R=n[q])||"boolean"==typeof R?null:"string"==typeof R||"number"==typeof R||"bigint"==typeof R?p(null,R,null,null,R):Array.isArray(R)?p(h,{children:R},null,null,null):R.__b>0?p(R.type,R.props,R.key,null,R.__v):R)){if(R.__=t,R.__b=t.__b+1,null===(O=G[q])||O&&R.key==O.key&&R.type===O.type)G[q]=void 0;else for(I=0;I<V;I++){if((O=G[I])&&R.key==O.key&&R.type===O.type){G[I]=void 0;break}O=null}P(e,R,O=O||i,r,u,F,N,L,W),$=R.__e,(I=R.ref)&&O.ref!=I&&(j||(j=[]),O.ref&&j.push(O.ref,null,R),j.push(I,R.__c||$,R)),null!=$?(null==B&&(B=$),"function"==typeof R.type&&null!=R.__k&&R.__k===O.__k?R.__d=L=b(R,L,e):L=C(e,R,O,G,$,L),W||"option"!==t.type?"function"==typeof t.type&&(t.__d=L):e.value=""):L&&O.__e==L&&L.parentNode!=e&&(L=v(O))}for(t.__e=B,q=V;q--;)null!=G[q]&&("function"==typeof t.type&&null!=G[q].__e&&G[q].__e==t.__d&&(t.__d=v(o,q+1)),U(G[q],G[q]));if(j)for(q=0;q<j.length;q++)T(j[q],j[++q],j[++q])}function b(e,n,t){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,n="function"==typeof r.type?b(r,n,t):C(t,r,r,e.__k,r.__e,n));return n}function C(e,n,t,o,r,u){var i,c,F;if(void 0!==n.__d)i=n.__d,n.__d=void 0;else if(null==t||r!=u||null==r.parentNode)e:if(null==u||u.parentNode!==e)e.appendChild(r),i=null;else{for(c=u,F=0;(c=c.nextSibling)&&F<o.length;F+=2)if(c==r)break e;e.insertBefore(r,u),i=u}return void 0!==i?i:r.nextSibling}function x(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||F.test(n)?t:t+"px"}function H(e,n,t,o,r){var u;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||x(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||x(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])u=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+u]=t,t?o||e.addEventListener(n,u?S:E,u):e.removeEventListener(n,u?S:E,u);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function E(e){this.l[e.type+!1](n.event?n.event(e):e)}function S(e){this.l[e.type+!0](n.event?n.event(e):e)}function P(e,t,o,r,u,i,c,F,N){var L,W,q,I,O,R,$,B,j,G,V,z=t.type;if(void 0!==t.constructor)return null;null!=o.__h&&(N=o.__h,F=t.__e=o.__e,t.__h=null,i=[F]),(L=n.__b)&&L(t);try{e:if("function"==typeof z){if(B=t.props,j=(L=z.contextType)&&r[L.__c],G=L?j?j.props.value:L.__:r,o.__c?$=(W=t.__c=o.__c).__=W.__E:("prototype"in z&&z.prototype.render?t.__c=W=new z(B,G):(t.__c=W=new d(B,G),W.constructor=z,W.render=A),j&&j.sub(W),W.props=B,W.state||(W.state={}),W.context=G,W.__n=r,q=W.__d=!0,W.__h=[]),null==W.__s&&(W.__s=W.state),null!=z.getDerivedStateFromProps&&(W.__s==W.state&&(W.__s=s({},W.__s)),s(W.__s,z.getDerivedStateFromProps(B,W.__s))),I=W.props,O=W.state,q)null==z.getDerivedStateFromProps&&null!=W.componentWillMount&&W.componentWillMount(),null!=W.componentDidMount&&W.__h.push(W.componentDidMount);else{if(null==z.getDerivedStateFromProps&&B!==I&&null!=W.componentWillReceiveProps&&W.componentWillReceiveProps(B,G),!W.__e&&null!=W.shouldComponentUpdate&&!1===W.shouldComponentUpdate(B,W.__s,G)||t.__v===o.__v){W.props=B,W.state=W.__s,t.__v!==o.__v&&(W.__d=!1),W.__v=t,t.__e=o.__e,t.__k=o.__k,t.__k.forEach((function(e){e&&(e.__=t)})),W.__h.length&&c.push(W);break e}null!=W.componentWillUpdate&&W.componentWillUpdate(B,W.__s,G),null!=W.componentDidUpdate&&W.__h.push((function(){W.componentDidUpdate(I,O,R)}))}W.context=G,W.props=B,W.state=W.__s,(L=n.__r)&&L(t),W.__d=!1,W.__v=t,W.__P=e,L=W.render(W.props,W.state,W.context),W.state=W.__s,null!=W.getChildContext&&(r=s(s({},r),W.getChildContext())),q||null==W.getSnapshotBeforeUpdate||(R=W.getSnapshotBeforeUpdate(I,O)),V=null!=L&&L.type===h&&null==L.key?L.props.children:L,k(e,Array.isArray(V)?V:[V],t,o,r,u,i,c,F,N),W.base=t.__e,t.__h=null,W.__h.length&&c.push(W),$&&(W.__E=W.__=null),W.__e=!1}else null==i&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=w(o.__e,t,o,r,u,i,c,N);(L=n.diffed)&&L(t)}catch(e){t.__v=null,(N||null!=i)&&(t.__e=F,t.__h=!!N,i[i.indexOf(F)]=null),n.__e(e,t,o)}}function D(e,t){n.__c&&n.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){n.__e(e,t.__v)}}))}function w(n,t,o,r,u,c,F,N){var L,W,q,I=o.props,O=t.props,R=t.type,$=0;if("svg"===R&&(u=!0),null!=c)for(;$<c.length;$++)if((L=c[$])&&(L===n||(R?L.localName==R:3==L.nodeType))){n=L,c[$]=null;break}if(null==n){if(null===R)return document.createTextNode(O);n=u?document.createElementNS("http://www.w3.org/2000/svg",R):document.createElement(R,O.is&&O),c=null,N=!1}if(null===R)I===O||N&&n.data===O||(n.data=O);else{if(c=c&&e.call(n.childNodes),W=(I=o.props||i).dangerouslySetInnerHTML,q=O.dangerouslySetInnerHTML,!N){if(null!=c)for(I={},$=0;$<n.attributes.length;$++)I[n.attributes[$].name]=n.attributes[$].value;(q||W)&&(q&&(W&&q.__html==W.__html||q.__html===n.innerHTML)||(n.innerHTML=q&&q.__html||""))}if(function(e,n,t,o,r){var u;for(u in t)"children"===u||"key"===u||u in n||H(e,u,null,t[u],o);for(u in n)r&&"function"!=typeof n[u]||"children"===u||"key"===u||"value"===u||"checked"===u||t[u]===n[u]||H(e,u,n[u],t[u],o)}(n,O,I,u,N),q)t.__k=[];else if($=t.props.children,k(n,Array.isArray($)?$:[$],t,o,r,u&&"foreignObject"!==R,c,F,c?c[0]:o.__k&&v(o,0),N),null!=c)for($=c.length;$--;)null!=c[$]&&f(c[$]);N||("value"in O&&void 0!==($=O.value)&&($!==n.value||"progress"===R&&!$)&&H(n,"value",$,I.value,!1),"checked"in O&&void 0!==($=O.checked)&&$!==n.checked&&H(n,"checked",$,I.checked,!1))}return n}function T(e,t,o){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,o)}}function U(e,t,o){var r,u;if(n.unmount&&n.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||T(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){n.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&U(r[u],t,"function"!=typeof e.type);o||null==e.__e||f(e.__e),e.__e=e.__d=void 0}function A(e,n,t){return this.constructor(e,t)}function M(t,o,r){var u,c,F;n.__&&n.__(t,o),c=(u="function"==typeof r)?null:r&&r.__k||o.__k,F=[],P(o,t=(!u&&r||o).__k=a(h,null,[t]),c||i,i,void 0!==o.ownerSVGElement,!u&&r?[r]:c?null:o.firstChild?e.call(o.childNodes):null,F,!u&&r?r:c?c.__e:o.firstChild,u),D(F,t)}e=c.slice,n={__e:function(e,n){for(var t,o,r;n=n.__;)if((t=n.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return t.__E=t}catch(n){e=n}throw e}},t=0,d.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(s({},t),this.props)),e&&s(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),m(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},d.prototype.render=h,o=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0;var N,L=[],W=n.__b,q=n.__r,I=n.diffed,O=n.__c,R=n.unmount;function te(){L.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(re),e.__H.__h.forEach(ue),e.__H.__h=[]}catch(t){e.__H.__h=[],n.__e(t,e.__v)}})),L=[]}n.__b=function(e){W&&W(e)},n.__r=function(e){q&&q(e);var n=e.__c.__H;n&&(n.__h.forEach(re),n.__h.forEach(ue),n.__h=[])},n.diffed=function(e){I&&I(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==L.push(t)&&N===n.requestAnimationFrame||((N=n.requestAnimationFrame)||function(e){var n,_=function(){clearTimeout(t),$&&cancelAnimationFrame(n),setTimeout(e)},t=setTimeout(_,100);$&&(n=requestAnimationFrame(_))})(te))},n.__c=function(e,t){t.some((function(e){try{e.__h.forEach(re),e.__h=e.__h.filter((function(e){return!e.__||ue(e)}))}catch(o){t.some((function(e){e.__h&&(e.__h=[])})),t=[],n.__e(o,e.__v)}})),O&&O(e,t)},n.unmount=function(e){R&&R(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(re)}catch(e){n.__e(e,t.__v)}};var $="function"==typeof requestAnimationFrame;function re(e){"function"==typeof e.__c&&e.__c()}function ue(e){e.__c=e.__()}var ce=function(e,n,t,o){var r;n[0]=0;for(var u=1;u<n.length;u++){var i=n[u++],c=n[u]?(n[0]|=i?1:2,t[n[u++]]):n[++u];3===i?o[0]=c:4===i?o[1]=Object.assign(o[1]||{},c):5===i?(o[1]=o[1]||{})[n[++u]]=c:6===i?o[1][n[++u]]+=c+"":i?(r=e.apply(c,ce(e,c,t,["",null])),o.push(r),c[0]?n[0]|=2:(n[u-2]=0,n[u]=r)):o.push(c)}return o},B=new Map,j=function(e){var n=B.get(this);return n||(n=new Map,B.set(this,n)),(n=ce(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,o=1,r="",u="",i=[0],l=function(e){1===o&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,r):3===o&&(e||r)?(i.push(3,e,r),o=2):2===o&&"..."===r&&e?i.push(4,e,0):2===o&&r&&!e?i.push(5,0,!0,r):o>=5&&((r||!e&&5===o)&&(i.push(o,0,r,t),o=6),e&&(i.push(o,e,0,t),o=6)),r=""},c=0;c<e.length;c++){c&&(1===o&&l(),l(c));for(var F=0;F<e[c].length;F++)n=e[c][F],1===o?"<"===n?(l(),i=[i],o=3):r+=n:4===o?"--"===r&&">"===n?(o=1,r=""):r=n+r[0]:u?n===u?u="":r+=n:'"'===n||"'"===n?u=n:">"===n?(l(),o=1):o&&("="===n?(o=5,t=r,r=""):"/"===n&&(o<5||">"===e[c][F+1])?(l(),3===o&&(i=i[0]),o=i,(i=i[0]).push(2,0,o),o=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(l(),o=2):r+=n),3===o&&"!--"===r&&(o=4,i=i[0])}return l(),i}(e)),n),arguments,[])).length>1?n:n[0]}.bind(a);export{j as html,M as renderer};