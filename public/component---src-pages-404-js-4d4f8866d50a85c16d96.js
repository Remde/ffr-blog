(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bl7J:function(t,e,n){"use strict";var o=n("q1tI"),a=n.n(o),r=(n("Wbzz"),n("p3AD"),n("RMg3"));e.a=function(t){t.location,t.title;var e,o=t.children;return"undefined"!=typeof window&&n("SR+s")('a[href*="#projects-section"]'),e=a.a.createElement(r.a,null),a.a.createElement("div",{style:{fontFamily:"Roboto Condensed"}},a.a.createElement("header",null,e),a.a.createElement("main",null,o))}},"SR+s":function(t,e,n){(function(o){var a,r;n("hEkN"),n("a1Th"),n("h7Nl"),n("Btvt"),n("8+KV"),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),o=this;do{for(e=n.length;0<=--e&&n.item(e)!==o;);}while(e<0&&(o=o.parentElement));return o}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var o=(new Date).getTime(),a=Math.max(0,16-(o-t)),r=window.setTimeout((function(){e(o+a)}),a);return t=o+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),r=void 0!==o?o:"undefined"!=typeof window?window:this,void 0===(a=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},o=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(e=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=e&&e<=31||127==e||0===a&&48<=e&&e<=57||1===a&&48<=e&&e<=57&&45===i?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},a=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(e,n,o){0===e&&document.body.focus(),o||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,n))},i=function(e,n,o,a){if(n.emitEvents&&"function"==typeof t.CustomEvent){var r=new CustomEvent(e,{bubbles:!0,detail:{anchor:o,toggle:a}});document.dispatchEvent(r)}};return function(c,u){var s,l,d,m,f={cancelScroll:function(t){cancelAnimationFrame(m),m=null,t||i("scrollCancel",s)},animateScroll:function(o,c,u){f.cancelScroll();var l=n(s||e,u||{}),h="[object Number]"===Object.prototype.toString.call(o),p=h||!o.tagName?null:o;if(h||p){var v=t.pageYOffset;l.header&&!d&&(d=document.querySelector(l.header));var w,g,y,E,S,b,A,O,C=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(d),M=h?o:function(e,n,o,r){var i=0;if(e.offsetParent)for(;i+=e.offsetTop,e=e.offsetParent;);return i=Math.max(i-n-o,0),r&&(i=Math.min(i,a()-t.innerHeight)),i}(p,C,parseInt("function"==typeof l.offset?l.offset(o,c):l.offset,10),l.clip),q=M-v,F=a(),I=0,L=(w=q,y=(g=l).speedAsDuration?g.speed:Math.abs(w/1e3*g.speed),g.durationMax&&y>g.durationMax?g.durationMax:g.durationMin&&y<g.durationMin?g.durationMin:parseInt(y,10));0===t.pageYOffset&&t.scrollTo(0,0),A=o,O=l,h||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:A.id},document.title,A===document.documentElement?"#top":"#"+A.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?r(o,Math.floor(M),!1):(i("scrollStart",l,o,c),f.cancelScroll(!0),t.requestAnimationFrame((function e(n){var a,u,s;E||(E=n),I+=n-E,b=v+q*(u=S=1<(S=0===L?0:I/L)?1:S,"easeInQuad"===(a=l).easing&&(s=u*u),"easeOutQuad"===a.easing&&(s=u*(2-u)),"easeInOutQuad"===a.easing&&(s=u<.5?2*u*u:(4-2*u)*u-1),"easeInCubic"===a.easing&&(s=u*u*u),"easeOutCubic"===a.easing&&(s=--u*u*u+1),"easeInOutCubic"===a.easing&&(s=u<.5?4*u*u*u:(u-1)*(2*u-2)*(2*u-2)+1),"easeInQuart"===a.easing&&(s=u*u*u*u),"easeOutQuart"===a.easing&&(s=1- --u*u*u*u),"easeInOutQuart"===a.easing&&(s=u<.5?8*u*u*u*u:1-8*--u*u*u*u),"easeInQuint"===a.easing&&(s=u*u*u*u*u),"easeOutQuint"===a.easing&&(s=1+--u*u*u*u*u),"easeInOutQuint"===a.easing&&(s=u<.5?16*u*u*u*u*u:1+16*--u*u*u*u*u),a.customEasing&&(s=a.customEasing(u)),s||u),t.scrollTo(0,Math.floor(b)),function(e,n){var a=t.pageYOffset;if(e==n||a==n||(v<n&&t.innerHeight+a)>=F)return f.cancelScroll(!0),r(o,n,h),i("scrollStop",l,o,c),!(m=E=null)}(b,M)||(m=t.requestAnimationFrame(e),E=n)})))}}},h=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(l=e.target.closest(c))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(s.ignore)&&l.hostname===t.location.hostname&&l.pathname===t.location.pathname&&/#/.test(l.href)){var n,a;try{n=o(decodeURIComponent(l.hash))}catch(e){n=o(l.hash)}if("#"===n){if(!s.topOnEmptyHash)return;a=document.documentElement}else a=document.querySelector(n);(a=a||"#top"!==n?a:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(s),f.animateScroll(a,l))}},p=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(o(history.state.anchor)))||f.animateScroll(e,null,{updateURL:!1})}};return f.destroy=function(){s&&(document.removeEventListener("click",h,!1),t.removeEventListener("popstate",p,!1),f.cancelScroll(),m=d=l=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),s=n(e,u||{}),d=s.header?document.querySelector(s.header):null,document.addEventListener("click",h,!1),s.updateURL&&s.popstate&&t.addEventListener("popstate",p,!1)}(),f}}(r)}.apply(e,[]))||(t.exports=a)}).call(this,n("yLpj"))},hEkN:function(t,e,n){"use strict";n("OGtf")("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},w2l6:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return c}));var o=n("q1tI"),a=n.n(o),r=n("Bl7J"),i=n("vrFN");e.default=function(t){var e=t.data,n=t.location,o=e.site.siteMetadata.title;return a.a.createElement(r.a,{location:n,title:o},a.a.createElement(i.a,{title:"404: Not Found"}),a.a.createElement("h1",null,"Not Found"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))};var c="1097489062"}}]);
//# sourceMappingURL=component---src-pages-404-js-4d4f8866d50a85c16d96.js.map