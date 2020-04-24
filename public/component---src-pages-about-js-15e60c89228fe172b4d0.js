(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2AaB":function(e,t,n){e.exports={projects:"projects-module--projects--3D_x8",projectsItem:"projects-module--projectsItem--3MeO1",projectsItemText:"projects-module--projectsItemText--fb5A4"}},"2NES":function(e,t,n){e.exports={welcomeSection:"welcomepage-module--welcomeSection--1GYiW",mainText:"welcomepage-module--mainText--mtwKK",subText:"welcomepage-module--subText--35ELO"}},"3XHS":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return p}));var a=n("q1tI"),o=n.n(a),r=(n("Wbzz"),n("6Gk8"),n("Bl7J")),i=n("vrFN"),c=(n("p3AD"),n("RMg3")),l=(n("oL5R"),n("lKmJ"),n("NO0K")),s=n("W/9C"),u=n("RnOJ"),m=n.n(u),d=function(){return o.a.createElement("div",{className:m.a.aboutPage},o.a.createElement("div",{className:m.a.aboutContainer},o.a.createElement("p",null,"My name is Fernando Remde and I'm a student from Brazil. I am currently enrolled in computer engineering at UFRGS (Porto Alegre - RS). My goal with this page is to create a hub where I can gather references, host and showcase my projects, as well as learn throughout the whole process of developing and deploying."),o.a.createElement("p",null,"This site was developed with HTML, CSS, JavaScript and React, and the static pages built locally with Gatsby. The build files were sent to my Linux remote server using Git and deployed with nginx webserver. You can find the code at my ",o.a.createElement("a",{href:"https://github.com/Remde"},"Github repository.")),o.a.createElement("p",null,"You can also find me at ",o.a.createElement("a",{href:"https://www.twitter.com/fernandoremde"},"Twitter"),", ",o.a.createElement("a",{href:"https://www.facebook.com/fernando.remde"},"Facebook"),", ",o.a.createElement("a",{href:"https://www.last.fm/user/nandoremde"},"Last.fm"),", as well as on the image links below, which you have probably already seen."),o.a.createElement("p",null,"Thanks for visiting.")))},p=(t.default=function(e){var t=e.data,n=e.location,a=t.site.siteMetadata.title;t.allMarkdownRemark.edges;return o.a.createElement(r.a,{location:n,title:a},o.a.createElement(i.a,{title:"Home"}),o.a.createElement(c.a,null),o.a.createElement(d,null),o.a.createElement(l.a,null),o.a.createElement(s.a,null))},"2785444898")},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a);n("Wbzz"),n("p3AD"),n("RMg3");t.a=function(e){e.location,e.title;var t=e.children;return"undefined"!=typeof window&&n("SR+s")('a[href*="#projects-section"]'),o.a.createElement("div",{style:{fontFamily:"Roboto Condensed"}},o.a.createElement("main",null,t))}},RnOJ:function(e,t,n){e.exports={aboutPage:"about-module--aboutPage--3ZPKt",aboutContainer:"about-module--aboutContainer--1PbA5"}},"SR+s":function(e,t,n){(function(a){var o,r;n("hEkN"),n("a1Th"),n("h7Nl"),n("Btvt"),n("8+KV"),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),a=this;do{for(t=n.length;0<=--t&&n.item(t)!==a;);}while(t<0&&(a=a.parentElement));return a}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var a=(new Date).getTime(),o=Math.max(0,16-(a-e)),r=window.setTimeout((function(){t(a+o)}),o);return e=a+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==a?a:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,o=-1,r="",i=n.charCodeAt(0);++o<a;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+r},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t,n,a){0===t&&document.body.focus(),a||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},i=function(t,n,a,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:a,toggle:o}});document.dispatchEvent(r)}};return function(c,l){var s,u,m,d,p={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||i("scrollCancel",s)},animateScroll:function(a,c,l){p.cancelScroll();var u=n(s||t,l||{}),f="[object Number]"===Object.prototype.toString.call(a),h=f||!a.tagName?null:a;if(f||h){var w=e.pageYOffset;u.header&&!m&&(m=document.querySelector(u.header));var E,g,v,b,y,S,I,A,j=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(m),N=f?a:function(t,n,a,r){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-a,0),r&&(i=Math.min(i,o()-e.innerHeight)),i}(h,j,parseInt("function"==typeof u.offset?u.offset(a,c):u.offset,10),u.clip),x=N-w,T=o(),O=0,C=(E=x,v=(g=u).speedAsDuration?g.speed:Math.abs(E/1e3*g.speed),g.durationMax&&v>g.durationMax?g.durationMax:g.durationMin&&v<g.durationMin?g.durationMin:parseInt(v,10));0===e.pageYOffset&&e.scrollTo(0,0),I=a,A=u,f||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:I.id},document.title,I===document.documentElement?"#top":"#"+I.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?r(a,Math.floor(N),!1):(i("scrollStart",u,a,c),p.cancelScroll(!0),e.requestAnimationFrame((function t(n){var o,l,s;b||(b=n),O+=n-b,S=w+x*(l=y=1<(y=0===C?0:O/C)?1:y,"easeInQuad"===(o=u).easing&&(s=l*l),"easeOutQuad"===o.easing&&(s=l*(2-l)),"easeInOutQuad"===o.easing&&(s=l<.5?2*l*l:(4-2*l)*l-1),"easeInCubic"===o.easing&&(s=l*l*l),"easeOutCubic"===o.easing&&(s=--l*l*l+1),"easeInOutCubic"===o.easing&&(s=l<.5?4*l*l*l:(l-1)*(2*l-2)*(2*l-2)+1),"easeInQuart"===o.easing&&(s=l*l*l*l),"easeOutQuart"===o.easing&&(s=1- --l*l*l*l),"easeInOutQuart"===o.easing&&(s=l<.5?8*l*l*l*l:1-8*--l*l*l*l),"easeInQuint"===o.easing&&(s=l*l*l*l*l),"easeOutQuint"===o.easing&&(s=1+--l*l*l*l*l),"easeInOutQuint"===o.easing&&(s=l<.5?16*l*l*l*l*l:1+16*--l*l*l*l*l),o.customEasing&&(s=o.customEasing(l)),s||l),e.scrollTo(0,Math.floor(S)),function(t,n){var o=e.pageYOffset;if(t==n||o==n||(w<n&&e.innerHeight+o)>=T)return p.cancelScroll(!0),r(a,n,f),i("scrollStop",u,a,c),!(d=b=null)}(S,N)||(d=e.requestAnimationFrame(t),b=n)})))}}},f=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(u=t.target.closest(c))&&"a"===u.tagName.toLowerCase()&&!t.target.closest(s.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var n,o;try{n=a(decodeURIComponent(u.hash))}catch(t){n=a(u.hash)}if("#"===n){if(!s.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(s),p.animateScroll(o,u))}},h=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(a(history.state.anchor)))||p.animateScroll(t,null,{updateURL:!1})}};return p.destroy=function(){s&&(document.removeEventListener("click",f,!1),e.removeEventListener("popstate",h,!1),p.cancelScroll(),d=m=u=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),s=n(t,l||{}),m=s.header?document.querySelector(s.header):null,document.addEventListener("click",f,!1),s.updateURL&&s.popstate&&e.addEventListener("popstate",h,!1)}(),p}}(r)}.apply(t,[]))||(e.exports=o)}).call(this,n("yLpj"))},hEkN:function(e,t,n){"use strict";n("OGtf")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},"iU/c":function(e,t,n){e.exports=n.p+"static/projectImg-11908c42ef6998841e4e704905890386.png"},lKmJ:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),i=n("2AaB"),c=n.n(i),l=n("iU/c"),s=n.n(l);t.a=function(){return o.a.createElement("div",{className:c.a.projects,id:"projects"},o.a.createElement("div",{className:c.a.projectsItem},o.a.createElement(r.Link,{to:"/"},o.a.createElement("img",{src:s.a,alt:"Project 1"})),o.a.createElement("div",{className:c.a.projectsItemText},o.a.createElement("h2",null,"website and blog"),o.a.createElement("p",null,"fernandoremde.com is an open source responsive website made with the React framework and the static pages are built using Gatsby."))),o.a.createElement("div",{className:c.a.projectsItem},o.a.createElement(r.Link,{to:"/"},o.a.createElement("img",{src:s.a,alt:"Project 1"})),o.a.createElement("div",{className:c.a.projectsItemText},o.a.createElement("h2",null,"note player"),o.a.createElement("p",null,"BTOWEEN is a music player made with Java in which you can specify musical notes in the key of C and it plays back to you."))),o.a.createElement("div",{className:c.a.projectsItem},o.a.createElement(r.Link,{to:"/"},o.a.createElement("img",{src:s.a,alt:"Project 1"})),o.a.createElement("div",{className:c.a.projectsItemText},o.a.createElement("h2",null,"project title"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec bibendum nulla. Nulla nulla nunc, elementum pharetra blandit ut, ornare in ex. In hac habitasse platea dictumst."))),o.a.createElement("div",{className:c.a.projectsItem},o.a.createElement(r.Link,{to:"/"},o.a.createElement("img",{src:s.a,alt:"Project 1"})),o.a.createElement("div",{className:c.a.projectsItemText},o.a.createElement("h2",null,"project title"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nibh diam, vel venenatis leo sodales eget. Vestibulum a magna dui. Nunc efficitur et dolor eu imperdiet."))))}},oL5R:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),i=n("2NES"),c=n.n(i);t.a=function(){return o.a.createElement("div",{className:c.a.welcomeSection},o.a.createElement("div",{className:c.a.welcomeText},o.a.createElement("h1",{className:c.a.mainText},"fernando remde"),o.a.createElement("p",{className:c.a.subText},"a portfolio website. I also write ",o.a.createElement(r.Link,{to:"/blog"},"here"),".")))}}}]);
//# sourceMappingURL=component---src-pages-about-js-15e60c89228fe172b4d0.js.map