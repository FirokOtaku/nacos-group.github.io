import{i as V}from"./index.PDhEm6KS.js";window.dataLayer=window.dataLayer||[];function I(){dataLayer.push(arguments)}I("js",new Date);I("config","G-0YDFJ7LX7F");(function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?e3a5cec56ef8619cf9d7c2abebd509e3";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)})();(function(t,e,n,o,s){t[o]=t[o]||[];var c=e.getElementsByTagName(n)[0],r=e.createElement(n);r.async=!0,r.id="beacon-aplus",r.setAttribute("exparams","userid=&aplus&sidx=aplusSidex&ckx=aplusCkx"),r.src="//g.alicdn.com/alilog/mlog/aplus_v2.js",r.crossorigin="anonymous",c.parentNode.insertBefore(r,c)})(window,document,"script","aplus_queue");(function(t){var e=t.createElement("script");e.type="text/javascript",e.async=!0,e.src="//g.alicdn.com/aes/??tracker/3.3.4/index.js,tracker-plugin-pv/3.0.5/index.js,tracker-plugin-event/3.0.0/index.js,tracker-plugin-autolog/3.0.3/index.js,tracker-plugin-survey/3.0.3/index.js,tracker-plugin-jserror/3.0.3/index.js,tracker-plugin-resourceError/3.0.3/index.js",e.onload=function(){window.location.hostname==="nacos.io"&&(window.AES_CONFIG=window.AES_CONFIG||{env:"prod"},window.aes=new AES({pid:"e7WQkK",user_type:6}),window.AESPluginAutologConfig={exposure:"auto"},window.AEMPluginInstances=[aes.use(AESPluginPV,window.AESPluginPVConfig||{enableHistory:!0}),aes.use(AESPluginEvent,window.AESPluginEventConfig||{}),aes.use(AESPluginSurvey,window.AESPluginEventConfig||{}),aes.use(AESPluginAutolog,window.AESPluginAutologConfig||{}),aes.use(AESPluginJSError,window.AESPluginJSError||{}),aes.use(AESPluginResourceError,window.AESPluginResourceError||{})])},setTimeout(function(){t.getElementsByTagName("body")[0].appendChild(e)},800)})(document);const W="modulepreload",X=function(t){return"/"+t},k={},K=function(e,n,o){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(r=>{if(r=X(r),r in k)return;k[r]=!0;const u=r.endsWith(".css"),i=u?'[rel="stylesheet"]':"";if(!!o)for(let a=c.length-1;a>=0;a--){const d=c[a];if(d.href===r&&(!u||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":W,u||(h.as="script",h.crossOrigin=""),h.href=r,document.head.appendChild(h),u)return new Promise((a,d)=>{h.addEventListener("load",a),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})}))}return s.then(()=>e()).catch(c=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=c,window.dispatchEvent(r),!r.defaultPrevented)throw c})};class G extends HTMLElement{ifscroll;constructor(){super(),this.ifscroll=!1,window.addEventListener("scroll",this.handleScroll)}handleScroll=()=>{window.innerWidth<=800||(window.scrollY>=100&&!this.ifscroll&&(this.ifscroll=!0,this.classList.add("bg-gray-14/[0.84]")),window.scrollY<=100&&this.ifscroll&&(this.ifscroll=!1,this.classList.remove("bg-gray-14/[0.84]")))}}customElements.define("my-layout",G);class J extends HTMLElement{constructor(){super();const e=this.querySelector('[role="tablist"]');this.tabs=[...e.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.tabs.forEach((n,o)=>{n.addEventListener("click",s=>{s.preventDefault();const c=e.querySelector("[aria-selected]");s.currentTarget!==c&&this.switchTab(s.currentTarget,o)}),n.addEventListener("keydown",s=>{const c=this.tabs.indexOf(s.currentTarget),r=s.key==="ArrowLeft"?c-1:s.key==="ArrowRight"?c+1:s.key==="Home"?0:s.key==="End"?this.tabs.length-1:null;r!==null&&this.tabs[r]&&(s.preventDefault(),this.switchTab(this.tabs[r],r))})})}switchTab(e,n){if(!e)return;this.tabs.forEach(s=>{s.removeAttribute("aria-selected"),s.setAttribute("tabindex","-1")}),this.panels.forEach(s=>{s.hidden=!0});const o=this.panels[n];o&&(o.hidden=!1),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true"),e.focus()}}customElements.define("starlight-tabs",J);const Q="astro:before-preparation",z="astro:after-preparation",Z="astro:before-swap",ee="astro:after-swap",te=t=>document.dispatchEvent(new Event(t));class N extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(e,n,o,s,c,r,u,i,f){super(e,n),this.from=o,this.to=s,this.direction=c,this.navigationType=r,this.sourceElement=u,this.info=i,this.newDocument=f,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class ne extends N{formData;loader;constructor(e,n,o,s,c,r,u,i,f){super(Q,{cancelable:!0},e,n,o,s,c,r,u),this.formData=i,this.loader=f.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class oe extends N{direction;viewTransition;swap;constructor(e,n,o){super(Z,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument),this.direction=e.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function se(t,e,n,o,s,c,r,u){const i=new ne(t,e,n,o,s,c,window.document,r,u);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(te(z),i.navigationType!=="traverse"&&S({scrollX,scrollY}))),i}async function re(t,e,n){const o=new oe(t,e,n);return document.dispatchEvent(o),o.swap(),o}const ie=history.pushState.bind(history),v=history.replaceState.bind(history),S=t=>{history.state&&(history.scrollRestoration="manual",v({...history.state,...t},""))},x=!!document.startViewTransition,P=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),_=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let T,p,A=!1,q;const C=t=>document.dispatchEvent(new Event(t)),F=()=>C("astro:page-load"),ae=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},w="data-astro-transition-persist",B="data-astro-transition",j="data-astro-transition-fallback";let D,b=0;history.state?(b=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):P()&&(v({index:b,scrollX,scrollY},""),history.scrollRestoration="manual");const ce=(t,e)=>{let n=!1,o=!1;return(...s)=>{if(n){o=!0;return}t(...s),n=!0,setTimeout(()=>{o&&(o=!1,t(...s)),n=!1},e)}};async function le(t,e){try{const n=await fetch(t,e),s=(n.headers.get("content-type")??"").split(";",1)[0].trim();return s!=="text/html"&&s!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:s}}catch{return null}}function $(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function ue(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const s of e.attributes){if(s.name==="src"){const c=new Promise(r=>{o.onload=o.onerror=r});t=t.then(()=>c)}o.setAttribute(s.name,s.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const U=(t,e,n,o,s)=>{const c=_(e,t),r=document.title;document.title=o;let u=!1;if(t.href!==location.href&&!s)if(n.history==="replace"){const i=history.state;v({...n.state,index:i.index,scrollX:i.scrollX,scrollY:i.scrollY},"",t.href)}else ie({...n.state,index:++b,scrollX:0,scrollY:0},"",t.href);if(T=t,c||(scrollTo({left:0,top:0,behavior:"instant"}),u=!0),s)scrollTo(s.scrollX,s.scrollY);else{if(t.hash){history.scrollRestoration="auto";const i=history.state;location.href=t.href,history.state||v(i,"")}else u||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=r};function de(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${w}="${n.getAttribute(w)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(s=>{["load","error"].forEach(c=>o.addEventListener(c,s)),document.head.append(o)}))}return e}async function R(t,e,n,o){const s=(a,d)=>{const g=a.getAttribute(w),E=g&&d.head.querySelector(`[${w}="${g}"]`);if(E)return E;if(a.matches("link[rel=stylesheet]")){const y=a.getAttribute("href");return d.head.querySelector(`link[rel=stylesheet][href="${y}"]`)}return null},c=()=>{const a=document.activeElement;if(a?.closest(`[${w}]`)){if(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement){const d=a.selectionStart,g=a.selectionEnd;return{activeElement:a,start:d,end:g}}return{activeElement:a}}else return{activeElement:null}},r=({activeElement:a,start:d,end:g})=>{a&&(a.focus(),(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement)&&(a.selectionStart=d,a.selectionEnd=g))},u=a=>{const d=document.documentElement,g=[...d.attributes].filter(({name:l})=>(d.removeAttribute(l),l.startsWith("data-astro-")));[...a.newDocument.documentElement.attributes,...g].forEach(({name:l,value:m})=>d.setAttribute(l,m));for(const l of document.scripts)for(const m of a.newDocument.scripts)if(!l.src&&l.textContent===m.textContent||l.src&&l.type===m.type&&l.src===m.src){m.dataset.astroExec="";break}for(const l of Array.from(document.head.children)){const m=s(l,a.newDocument);m?m.remove():l.remove()}document.head.append(...a.newDocument.head.children);const E=document.body,y=c();document.body.replaceWith(a.newDocument.body);for(const l of E.querySelectorAll(`[${w}]`)){const m=l.getAttribute(w),L=document.querySelector(`[${w}="${m}"]`);L&&L.replaceWith(l)}r(y)};async function i(a){function d(l){const m=l.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const g=document.getAnimations();document.documentElement.setAttribute(j,a);const y=document.getAnimations().filter(l=>!g.includes(l)&&!d(l));return Promise.all(y.map(l=>l.finished))}if(!A)document.documentElement.setAttribute(B,t.direction),o==="animate"&&await i("old");else throw new DOMException("Transition was skipped");const f=document.title,h=await re(t,p,u);U(h.to,h.from,e,f,n),C(ee),o==="animate"&&!A&&i("new").then(()=>q())}async function Y(t,e,n,o,s){if(!P()||location.origin!==n.origin){location.href=n.href;return}const c=s?"traverse":o.history==="replace"?"replace":"push";if(c!=="traverse"&&S({scrollX,scrollY}),_(e,n)&&n.hash){U(n,e,o,document.title,s);return}const r=await se(e,n,t,c,o.sourceElement,o.info,o.formData,u);if(r.defaultPrevented){location.href=n.href;return}async function u(i){const f=i.to.href,h={};if(i.formData){h.method="POST";const g=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=g?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const a=await le(f,h);if(a===null){i.preventDefault();return}if(a.redirected&&(i.to=new URL(a.redirected)),D??=new DOMParser,i.newDocument=D.parseFromString(a.html,a.mediaType),i.newDocument.querySelectorAll("noscript").forEach(g=>g.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const d=de(i.newDocument);d.length&&await Promise.all(d)}if(A=!1,x)p=document.startViewTransition(async()=>await R(r,o,s));else{const i=(async()=>{await new Promise(f=>setTimeout(f)),await R(r,o,s,$())})();p={updateCallbackDone:i,ready:i,finished:new Promise(f=>q=f),skipTransition:()=>{A=!0}}}p.ready.then(async()=>{await ue(),F(),ae()}),p.finished.then(()=>{document.documentElement.removeAttribute(B),document.documentElement.removeAttribute(j)}),await p.ready}async function M(t,e){await Y("forward",T,new URL(t,location.href),e??{})}function me(t){if(!P()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>b?"forward":"back";b=n,Y(o,T,new URL(location.href),{},e)}const O=()=>{S({scrollX,scrollY})};{(x||$()!=="none")&&(T=new URL(location.href),addEventListener("popstate",me),addEventListener("load",F),"onscrollend"in window?addEventListener("scrollend",O):addEventListener("scroll",ce(O,350),{passive:!0}));for(const t of document.scripts)t.dataset.astroExec=""}function fe(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function H(t){return t.dataset.astroReload!==void 0}(x||fe()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,s=new URL(o,location.href).origin;H(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||s!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),M(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||H(e))return;const n=e,o=t.submitter,s=new FormData(n,o);let c=o?.getAttribute("formaction")??n.action??location.pathname;const r=o?.getAttribute("formmethod")??n.method;if(r==="dialog")return;const u={sourceElement:o??n};if(r==="get"){const i=new URLSearchParams(s),f=new URL(c);f.search=i.toString(),c=f.toString()}else u.formData=s;t.preventDefault(),M(c,u)}),V({prefetchAll:!0}));const he={appId:"1QV814950M",apiKey:"7445da3dec050d45d29f3fe93ed45af3",indexName:"nacos"};class ge extends HTMLElement{constructor(){super(),window.addEventListener("DOMContentLoaded",async()=>{const{default:e}=await K(()=>import("./index.cKmeBkv1.js"),__vite__mapDeps([])),n={...he,container:"sl-doc-search"};try{const o=JSON.parse(this.dataset.translations||"{}");Object.assign(n,o)}catch{}e(n)})}}customElements.define("sl-doc-search",ge);class we extends HTMLElement{constructor(){super()}}customElements.define("navbar-component",we);let pe=class extends HTMLElement{constructor(){super();const e=document.querySelectorAll("input[data-switch]")[0],n=document.querySelectorAll("div[data-switch]")[0];e.addEventListener("click",()=>{this.toggleLanguage()}),n.addEventListener("click",()=>{this.toggleLanguage()})}toggleLanguage=()=>{/^(\/en).+/.test(window?.location?.pathname)?window.location.pathname=window.location.pathname.replace("/en/","/"):window.location.pathname=window.location.pathname.replace("/","/en/")}};customElements.define("toggle-content",pe);class Ee extends HTMLElement{menuButton=this.querySelector("button");constructor(){super(),this.menuButton.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",n=>this.closeOnEscape(n))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.menuButton.focus())}}customElements.define("mobile-menu-button",Ee);class ye extends HTMLElement{constructor(){super();const e=this.getAttribute("data-trigger"),n=this.querySelector(".toggle-dropdown"),o=this.querySelector("svg[data-updown]");e==="click"?this.addEventListener("click",()=>{n&&n.classList.toggle("toggle-dropdown-active"),document.body.classList.toggle("overflow-hidden"),Array.from(o?.classList||[]).includes("toggle-trigger-up")?this.toggleDown(o):this.toggleUp(o)}):e==="hover"&&(this.addEventListener("mouseenter",()=>{n&&n.classList.add("toggle-dropdown-active"),this.toggleUp(o)}),this.addEventListener("mouseleave",()=>{n&&n.classList.remove("toggle-dropdown-active"),this.toggleDown(o)}))}toggleUp=e=>{e?.classList.remove("toggle-trigger-down"),e?.classList.add("toggle-trigger-up")};toggleDown=e=>{e?.classList.remove("toggle-trigger-up"),e?.classList.add("toggle-trigger-down")}}customElements.define("toggle-component",ye);class be extends HTMLElement{constructor(){super()}}customElements.define("docs-menu",be);class ve extends HTMLElement{constructor(){super();const e=this.parentElement;this.querySelector(".dropdown-overlay").addEventListener("mouseenter",()=>{e.classList.remove("toggle-dropdown-active"),e.classList.add("toggle-dropdown-notactive")})}}customElements.define("community-menu",ve);export{K as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
