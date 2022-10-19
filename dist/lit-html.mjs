/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const e=window,i=e.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,n=`lit$${(Math.random()+"").slice(9)}$`,o="?"+n,l=`<${o}>`,h=document,r=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,a=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,c=/>/g,u=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),_=/'/g,v=/"/g,p=/^(?:script|style|textarea|title)$/i,g=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),m=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),y=new WeakMap,H=h.createTreeWalker(h,129,null,!1),E=(t,e)=>{const i=t.length-1,o=[];let h,$=2===e?"<svg>":"",g=a;for(let e=0;e<i;e++){const i=t[e];let s,m,f=-1,y=0;for(;y<i.length&&(g.lastIndex=y,m=g.exec(i),null!==m);)y=g.lastIndex,g===a?"!--"===m[1]?g=A:void 0!==m[1]?g=c:void 0!==m[2]?(p.test(m[2])&&(h=RegExp("</"+m[2],"g")),g=u):void 0!==m[3]&&(g=u):g===u?">"===m[0]?(g=null!=h?h:a,f=-1):void 0===m[1]?f=-2:(f=g.lastIndex-m[2].length,s=m[1],g=void 0===m[3]?u:'"'===m[3]?v:_):g===v||g===_?g=u:g===A||g===c?g=a:(g=u,h=void 0);const H=g===u&&t[e+1].startsWith("/>")?" ":"";$+=g===a?i+l:f>=0?(o.push(s),i.slice(0,f)+"$lit$"+i.slice(f)+n+H):i+n+(-2===f?(o.push(void 0),e):H)}const m=$+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(m):m,o]};class x{constructor({strings:t,_$litType$:e},s){let l;this.parts=[];let h=0,$=0;const a=t.length-1,A=this.parts,[c,u]=E(t,e);if(this.el=x.createElement(c,s),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(l=H.nextNode())&&A.length<a;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const e of l.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(n)){const i=u[$++];if(t.push(e),void 0!==i){const t=l.getAttribute(i.toLowerCase()+"$lit$").split(n),e=/([.?@])?(.*)/.exec(i);A.push({type:1,index:h,name:e[2],strings:t,ctor:"."===e[1]?C:"?"===e[1]?M:"@"===e[1]?S:b})}else A.push({type:6,index:h})}for(const e of t)l.removeAttribute(e)}if(p.test(l.tagName)){const t=l.textContent.split(n),e=t.length-1;if(e>0){l.textContent=i?i.emptyScript:"";for(let i=0;i<e;i++)l.append(t[i],r()),H.nextNode(),A.push({type:2,index:++h});l.append(t[e],r())}}}else if(8===l.nodeType)if(l.data===o)A.push({type:2,index:h});else{let t=-1;for(;-1!==(t=l.data.indexOf(n,t+1));)A.push({type:7,index:h}),t+=n.length-1}h++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function P(t,e,i=t,s){var n,o,l,h;if(e===m)return e;let $=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const a=d(e)?void 0:e._$litDirective$;return(null==$?void 0:$.constructor)!==a&&(null===(o=null==$?void 0:$._$AO)||void 0===o||o.call($,!1),void 0===a?$=void 0:($=new a(t),$._$AT(t,i,s)),void 0!==s?(null!==(l=(h=i)._$Co)&&void 0!==l?l:h._$Co=[])[s]=$:i._$Cl=$),void 0!==$&&(e=P(t,$._$AS(t,e.values),$,s)),e}class N{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(i,!0);H.currentNode=n;let o=H.nextNode(),l=0,$=0,a=s[0];for(;void 0!==a;){if(l===a.index){let e;2===a.type?e=new T(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new I(o,this,t)),this.u.push(e),a=s[++$]}l!==(null==a?void 0:a.index)&&(o=H.nextNode(),l++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{constructor(t,e,i,s){var n;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),d(t)?t===f||null==t||""===t?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==m&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>$(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==f&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=x.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new N(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=y.get(t.strings);return void 0===e&&y.set(t.strings,e=new x(t)),e}k(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new T(this.O(r()),this.O(r()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class b{constructor(t,e,i,s,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=P(this,t,e,0),o=!d(t)||t!==this._$AH&&t!==m,o&&(this._$AH=t);else{const s=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=P(this,s[i+l],e,l),h===m&&(h=this._$AH[l]),o||(o=!d(h)||h!==this._$AH[l]),h===f?t=f:t!==f&&(t+=(null!=h?h:"")+n[l+1]),this._$AH[l]=h}o&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class C extends b{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}const w=i?i.emptyScript:"";class M extends b{constructor(){super(...arguments),this.type=4}j(t){t&&t!==f?this.element.setAttribute(this.name,w):this.element.removeAttribute(this.name)}}class S extends b{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=P(this,t,e,0))&&void 0!==i?i:f)===m)return;const s=this._$AH,n=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==f&&(s===f||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class I{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const B=e.litHtmlPolyfillSupport;null==B||B(x,T),(null!==(t=e.litHtmlVersions)&&void 0!==t?t:e.litHtmlVersions=[]).push("2.4.0");const Z=(t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let l=o._$litPart$;if(void 0===l){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=l=new T(e.insertBefore(r(),t),t,void 0,null!=i?i:{})}return l._$AI(t),l};export{g as html,Z as renderer};
