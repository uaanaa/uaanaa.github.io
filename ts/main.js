(()=>{var u=()=>{document.querySelectorAll(".codeblock-copy").forEach(t=>{let o=t.getAttribute("data-id"),i=t.textContent,n=t.getAttribute("data-copied-text");!o||t.addEventListener("click",r=>{r.preventDefault();let a=document.getElementById(o);!o||navigator.clipboard.writeText(a.textContent).then(()=>{t.textContent=n,setTimeout(()=>{t.textContent=i},1e3)}).catch(l=>{alert(l),console.log("Something went wrong",l)})},!1)})};var M=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},H=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let o=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=o+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},P=(e,t=500)=>window.getComputedStyle(e).display==="none"?H(e,t):M(e,t);function f(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{document.getElementById("main-menu").classList.contains("transiting")||(document.body.classList.toggle("show-menu"),P(document.getElementById("main-menu"),300),e.classList.toggle("is-active"))})}function C(e,t,o){var i=document.createElement(e);for(let n in t)if(n&&t.hasOwnProperty(n)){let r=t[n];n=="dangerouslySetInnerHTML"?i.innerHTML=r.__html:r===!0?i.setAttribute(n,n):r!==!1&&r!=null&&i.setAttribute(n,r.toString())}for(let n=2;n<arguments.length;n++){let r=arguments[n];r&&i.appendChild(r.nodeType==null?document.createTextNode(r.toString()):r)}return i}var p=C;var m=class{localStorageKey="StackColorScheme";currentScheme;systemPreferScheme;constructor(t){this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),this.dispatchEvent(document.documentElement.dataset.scheme),t&&this.bindClick(t),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(t){t.addEventListener("click",o=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(t){let o=new CustomEvent("onColorSchemeChange",{detail:t});window.dispatchEvent(o)}setBodyClass(){this.isDark()?document.documentElement.dataset.scheme="dark":document.documentElement.dataset.scheme="light",this.dispatchEvent(document.documentElement.dataset.scheme)}getSavedScheme(){let t=localStorage.getItem(this.localStorageKey);return t=="light"||t=="dark"||t=="auto"?t:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}},y=m;function d(e){let t;return()=>{t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>e())}}var x=".article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]",v="#TableOfContents",S="#TableOfContents li",E="active-class";function A(e,t){let o=e.querySelector("a").offsetHeight,i=e.offsetTop-t.offsetHeight/2+o/2-t.offsetTop;i<0&&(i=0),t.scrollTo({top:i,behavior:"smooth"})}function B(e){let t={};return e.forEach(o=>{let n=o.querySelector("a").getAttribute("href");n.startsWith("#")&&(t[n.slice(1)]=o)}),t}function g(e){let t=[];return e.forEach(o=>{t.push({id:o.id,offset:o.offsetTop})}),t.sort((o,i)=>o.offset-i.offset),t}function T(){let e=document.querySelectorAll(x);if(!e){console.warn("No header matched query",e);return}let t=document.querySelector(v);if(!t){console.warn("No toc matched query",v);return}let o=document.querySelectorAll(S);if(!o){console.warn("No navigation matched query",S);return}let i=g(e),n=!1;t.addEventListener("mouseenter",d(()=>n=!0)),t.addEventListener("mouseleave",d(()=>n=!1));let r,a=B(o);function l(){let b=document.documentElement.scrollTop||document.body.scrollTop,c;i.forEach(h=>{b>=h.offset-20&&(c=document.getElementById(h.id))});let s;c&&(s=a[c.id]),c&&!s?console.debug("No link found for section",c):s!==r&&(r&&r.classList.remove(E),s&&(s.classList.add(E),n||A(s,t)),r=s)}window.addEventListener("scroll",d(l));function k(){i=g(e),l()}window.addEventListener("resize",d(k))}var I="a[href]";function w(){document.querySelectorAll(I).forEach(e=>{!e.getAttribute("href").startsWith("#")||e.addEventListener("click",o=>{o.preventDefault();let i=e.getAttribute("href").substring(1),n=document.getElementById(i.replace(":","\\:"));window.history.pushState({},"",e.getAttribute("href")),scrollTo({top:n.offsetTop,behavior:"smooth"})})})}var L={init:()=>{f(),document.querySelector(".article-content")&&(w(),T()),new y(document.getElementById("dark-mode-toggle")),u()}};window.addEventListener("load",()=>{setTimeout(function(){L.init()},0)});window.Stack=L;window.createElement=p;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/