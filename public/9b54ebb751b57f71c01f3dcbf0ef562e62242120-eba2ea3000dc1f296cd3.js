(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0mN4":function(e,t,i){"use strict";i("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,i){"use strict";i("f3/d"),i("0mN4"),i("7HQ6"),i("q1tI"),i("9eSz"),i("p3AD")},"7HQ6":function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=","width":50,"height":50,"src":"/static/4f27694bd7811d13157e5e488ad64f43/99438/profile-pic.jpg","srcSet":"/static/4f27694bd7811d13157e5e488ad64f43/99438/profile-pic.jpg 1x,\\n/static/4f27694bd7811d13157e5e488ad64f43/aba1d/profile-pic.jpg 1.5x,\\n/static/4f27694bd7811d13157e5e488ad64f43/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"Fernando Remde","summary":"computer engineering student always looking to improve"},"social":{"twitter":"fernandoremde"}}}}}')},"9eSz":function(e,t,i){"use strict";i("rGqo"),i("yt8O"),i("Btvt"),i("XfO3"),i("EK0E"),i("INYr"),i("0mN4");var a=i("TqRt");t.__esModule=!0,t.default=void 0;var r,s=a(i("PJYZ")),n=a(i("VbXa")),o=a(i("8OQS")),d=a(i("pVnL")),l=a(i("q1tI")),c=a(i("17x9")),u=function(e){var t=(0,d.default)({},e),i=t.resolutions,a=t.sizes,r=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},A=function(e){var t=e.media;return!!t&&(m&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,i=e.fixed;return g(t||i).src},g=function(e){if(m&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(A);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},M=Object.create({}),L=function(e){var t=u(e),i=f(t);return M[i]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,w=new WeakMap;function I(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,r=e.media,s=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:s}),l.default.createElement("source",{media:r,srcSet:i,sizes:s}))}))}function y(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function j(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function N(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function S(e,t){var i=e.srcSet,a=e.srcSetWebp,r=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:i)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var E=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return i&&(i.observe(e),w.set(e,t)),function(){i.unobserve(e),w.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+l+n+o+i+a+t+s+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},D=l.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,r=e.generateSources,s=e.spreadProps,n=e.ariaHidden,o=l.default.createElement(x,(0,d.default)({ref:t,src:i},s,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),o):o})),x=l.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":f,sizes:i,srcSet:a,src:r},g,{onLoad:n,onError:c,ref:t,loading:u,draggable:A,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=m&&L(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!p&&h&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||m&&(p||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=l.default.createRef(),i.placeholderRef=t.placeholderRef||l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,s.default)(i)),i.handleRef=i.handleRef.bind((0,s.default)(i)),i}(0,n.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:L(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=L(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),i=f(t),M[i]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,M=e.fluid,L=e.fixed,p=e.backgroundColor,m=e.durationFadeIn,h=e.Tag,w=e.itemProp,y=e.loading,S=e.draggable,E=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,d.default)({opacity:E?1:0,transition:C?"opacity "+m+"ms":"none"},o),v="boolean"==typeof p?"lightgray":p,T={transitionDelay:m+"ms"},Y=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&T,{},o,{},A),B={title:t,alt:this.state.isVisible?"":i,style:Y,className:f,itemProp:w};if(M){var R=M,k=g(M);return l.default.createElement(h,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},l.default.createElement(h,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),v&&l.default.createElement(h,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&T)}),k.base64&&l.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:B,imageVariants:R,generateSources:N}),k.tracedSVG&&l.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:B,imageVariants:R,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,I(R),l.default.createElement(x,{alt:i,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:y,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,d.default)({alt:i,title:t,loading:y},k,{imageVariants:R}))}}))}if(L){var Z=L,G=g(L),P=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},s);return"inherit"===s.display&&delete P.display,l.default.createElement(h,{className:(a||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},v&&l.default.createElement(h,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:v,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},C&&T)}),G.base64&&l.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:B,imageVariants:Z,generateSources:N}),G.tracedSVG&&l.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:B,imageVariants:Z,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,I(Z),l.default.createElement(x,{alt:i,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:y,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,d.default)({alt:i,title:t,loading:y},G,{imageVariants:Z}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});C.propTypes={resolutions:z,sizes:v,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([v,c.default.arrayOf(v)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=C;t.default=T},"9koT":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0ibWFpbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDUgNDUiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNzQ3YzgxO30uY2xzLTJ7ZmlsbDojZjdmN2Y3O308L3N0eWxlPjwvZGVmcz48dGl0bGU+bWFpbDwvdGl0bGU+PGNpcmNsZSBpZD0iRWxsaXBzZV8xIiBkYXRhLW5hbWU9IkVsbGlwc2UgMSIgY2xhc3M9ImNscy0xIiBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiLz48ZyBpZD0ibWFpbC0yIj48ZyBpZD0iR3JvdXBfMiIgZGF0YS1uYW1lPSJHcm91cCAyIj48ZyBpZD0iR3JvdXBfMSIgZGF0YS1uYW1lPSJHcm91cCAxIj48cGF0aCBpZD0iUGF0aF8xIiBkYXRhLW5hbWU9IlBhdGggMSIgY2xhc3M9ImNscy0yIiBkPSJNMzYuMzksMTMuNDQsMjcuNywyMi4wN2w4LjY5LDguNjNhMi41NSwyLjU1LDAsMCwwLC4yNS0xLjA4VjE0LjUyQTIuNTIsMi41MiwwLDAsMCwzNi4zOSwxMy40NFoiLz48L2c+PC9nPjxnIGlkPSJHcm91cF80IiBkYXRhLW5hbWU9Ikdyb3VwIDQiPjxnIGlkPSJHcm91cF8zIiBkYXRhLW5hbWU9Ikdyb3VwIDMiPjxwYXRoIGlkPSJQYXRoXzIiIGRhdGEtbmFtZT0iUGF0aCAyIiBjbGFzcz0iY2xzLTIiIGQ9Ik0zNC4xMiwxMkgxMC41MmEyLjUyLDIuNTIsMCwwLDAtMS4wOC4yNUwyMC41NCwyMy4zYTIuNTIsMi41MiwwLDAsMCwzLjU2LDBsMTEuMS0xMUEyLjU1LDIuNTUsMCwwLDAsMzQuMTIsMTJaIi8+PC9nPjwvZz48ZyBpZD0iR3JvdXBfNiIgZGF0YS1uYW1lPSJHcm91cCA2Ij48ZyBpZD0iR3JvdXBfNSIgZGF0YS1uYW1lPSJHcm91cCA1Ij48cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgY2xhc3M9ImNscy0yIiBkPSJNOC4yNSwxMy40NEEyLjUyLDIuNTIsMCwwLDAsOCwxNC41MnYxNS4xYTIuNTUsMi41NSwwLDAsMCwuMjUsMS4wOGw4LjY5LTguNjNaIi8+PC9nPjwvZz48ZyBpZD0iR3JvdXBfOCIgZGF0YS1uYW1lPSJHcm91cCA4Ij48ZyBpZD0iR3JvdXBfNyIgZGF0YS1uYW1lPSJHcm91cCA3Ij48cGF0aCBpZD0iUGF0aF80IiBkYXRhLW5hbWU9IlBhdGggNCIgY2xhc3M9ImNscy0yIiBkPSJNMjYuNTIsMjMuMjVsLTEuMjMsMS4yM2E0LjE5LDQuMTksMCwwLDEtNS45MywwbC0xLjIzLTEuMjNMOS40NCwzMS44OGEyLjQyLDIuNDIsMCwwLDAsMS4wOC4yNmgyMy42YTIuNDIsMi40MiwwLDAsMCwxLjA4LS4yNloiLz48L2c+PC9nPjwvZz48L3N2Zz4="},AaZk:function(e,t,i){e.exports={about:"social-module--about--1hT7w",center:"social-module--center--1s38T",link:"social-module--link--3FrnA"}},DmWS:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iZ2l0aHViIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NS4wMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM3NDdjODE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5naXQ8L3RpdGxlPjxwYXRoIGlkPSJsb2dvLTIiIGNsYXNzPSJjbHMtMSIgZD0iTTIyLjUsMEEyMi4zLDIyLjMsMCwwLDAsMCwyMi4xMUgwYTIyLjE2LDIyLjE2LDAsMCwwLDE1LjM4LDIxYzEuMTMuMjEsMS41NC0uNDgsMS41NC0xLjA3czAtMS45MSwwLTMuNzVjLTYuMjUsMS4zMy03LjU4LTMtNy41OC0zYTUuODQsNS44NCwwLDAsMC0yLjUtMy4yM2MtMi0xLjM3LjE2LTEuMzUuMTYtMS4zNUE0LjczLDQuNzMsMCwwLDEsMTAuNDIsMzNjMiwzLjM4LDUuMjYsMi40LDYuNTUsMS44NGE0LjY5LDQuNjksMCwwLDEsMS40Mi0zYy01LS41NS0xMC4yNS0yLjQ1LTEwLjI1LTEwLjkyQTguNDUsOC40NSwwLDAsMSwxMC40NiwxNWE3Ljc1LDcuNzUsMCwwLDEsLjItNS44NXMxLjg4LS41OSw2LjE5LDIuMjdhMjEuNDcsMjEuNDcsMCwwLDEsMTEuMjUsMGM0LjI3LTIuODYsNi4xNi0yLjI3LDYuMTYtMi4yN0E4LDgsMCwwLDEsMzQuNDgsMTUsOC41Miw4LjUyLDAsMCwxLDM2Ljc5LDIxYzAsOC40OS01LjI2LDEwLjM2LTEwLjI3LDEwLjlBNS4yNiw1LjI2LDAsMCwxLDI4LDM2YzAsMi45NSwwLDUuMzMsMCw2cy40LDEuMjcsMS41NSwxLjA1QTIyLjA5LDIyLjA5LDAsMCwwLDQ1LDIyLjExLDIyLjMsMjIuMywwLDAsMCwyMi41LDBaIi8+PC9zdmc+"},EK0E:function(e,t,i){"use strict";var a,r=i("dyZX"),s=i("CkkT")(0),n=i("KroJ"),o=i("Z6vF"),d=i("czNK"),l=i("ZD67"),c=i("0/R4"),u=i("s5qY"),A=i("s5qY"),f=!r.ActiveXObject&&"ActiveXObject"in r,g=o.getWeak,M=Object.isExtensible,L=l.ufstore,p=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},m={get:function(e){if(c(e)){var t=g(e);return!0===t?L(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(u(this,"WeakMap"),e,t)}},h=e.exports=i("4LiD")("WeakMap",p,m,l,!0,!0);A&&f&&(d((a=l.getConstructor(p,"WeakMap")).prototype,m),o.NEED=!0,s(["delete","has","get","set"],(function(e){var t=h.prototype,i=t[e];n(t,e,(function(t,r){if(c(t)&&!M(t)){this._f||(this._f=new a);var s=this._f[e](t,r);return"set"==e?this:s}return i.call(this,t,r)}))})))},INYr:function(e,t,i){"use strict";var a=i("XKFU"),r=i("CkkT")(6),s="findIndex",n=!0;s in[]&&Array(1)[s]((function(){n=!1})),a(a.P+a.F*n,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i("nGyu")(s)},NO0K:function(e,t,i){"use strict";i("tUrg");var a=i("q1tI"),r=i.n(a),s=(i("Wbzz"),i("AaZk")),n=i.n(s),o=i("DmWS"),d=i.n(o),l=i("p54K"),c=i.n(l),u=i("9koT"),A=i.n(u);t.a=function(){return r.a.createElement("div",{className:n.a.about,id:"social-section"},r.a.createElement("div",{className:n.a.link},r.a.createElement("a",{href:"https://github.com/Remde"},r.a.createElement("img",{className:n.a.center,src:d.a,alt:"Github"}))),r.a.createElement("div",{className:n.a.link},r.a.createElement("a",{href:"mailto:ffremde@gmail.com"},r.a.createElement("img",{className:n.a.center,src:A.a,alt:"Email"}))),r.a.createElement("div",{className:n.a.link},r.a.createElement("a",{href:"https://www.linkedin.com/in/fernando-remde-291a641a6/"},r.a.createElement("img",{className:n.a.center,src:c.a,alt:"LinkedIn"}))))}},UNbL:function(e,t,i){e.exports={footer:"footer-module--footer--2r2aa",text:"footer-module--text--LiK13"}},"W/9C":function(e,t,i){"use strict";var a=i("q1tI"),r=i.n(a),s=(i("Wbzz"),i("UNbL")),n=i.n(s);t.a=function(){return r.a.createElement("div",{className:n.a.footer},r.a.createElement("div",{className:n.a.text},"A website made by Fernando Ferreira Remde © | ffremde@gmail.com | Porto Alegre, Brazil"))}},ZD67:function(e,t,i){"use strict";var a=i("3Lyj"),r=i("Z6vF").getWeak,s=i("y3w9"),n=i("0/R4"),o=i("9gX7"),d=i("SlkY"),l=i("CkkT"),c=i("aagx"),u=i("s5qY"),A=l(5),f=l(6),g=0,M=function(e){return e._l||(e._l=new L)},L=function(){this.a=[]},p=function(e,t){return A(e.a,(function(e){return e[0]===t}))};L.prototype={get:function(e){var t=p(this,e);if(t)return t[1]},has:function(e){return!!p(this,e)},set:function(e,t){var i=p(this,e);i?i[1]=t:this.a.push([e,t])},delete:function(e){var t=f(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,i,s){var l=e((function(e,a){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=a&&d(a,i,e[s],e)}));return a(l.prototype,{delete:function(e){if(!n(e))return!1;var i=r(e);return!0===i?M(u(this,t)).delete(e):i&&c(i,this._i)&&delete i[this._i]},has:function(e){if(!n(e))return!1;var i=r(e);return!0===i?M(u(this,t)).has(e):i&&c(i,this._i)}}),l},def:function(e,t,i){var a=r(s(t),!0);return!0===a?M(e).set(t,i):a[e._i]=i,e},ufstore:M}},p54K:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM3NDdjODE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5saW5rZWRpbjwvdGl0bGU+PGcgaWQ9ImxrZG4iPjxwYXRoIGlkPSJsaW5rZWRpbi0yIiBjbGFzcz0iY2xzLTEiIGQ9Ik0yMi41LDBBMjIuNSwyMi41LDAsMSwwLDQ1LDIyLjUsMjIuNSwyMi41LDAsMCwwLDIyLjUsMFpNMTYsMzRIMTAuNDhWMTcuNTNIMTZaTTEzLjIyLDE1LjI4aDBhMi44NiwyLjg2LDAsMSwxLS4yOS01LjcxaC4zNmEyLjg2LDIuODYsMCwxLDEsLjM2LDUuN1pNMzUuNzIsMzRIMzAuMjRWMjUuMTljMC0yLjIxLS43OS0zLjcyLTIuNzctMy43MmEzLDMsMCwwLDAtMi44MiwyLDMuNzUsMy43NSwwLDAsMC0uMTgsMS4zM1YzNEgxOXMuMDgtMTQuOTQsMC0xNi40OWg1LjQ4djIuMzRhNS40Miw1LjQyLDAsMCwxLDQuOTQtMi43MmMzLjYxLDAsNi4zMSwyLjM1LDYuMzEsNy40MloiLz48L2c+PC9zdmc+"},tUrg:function(e,t,i){"use strict";i("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=9b54ebb751b57f71c01f3dcbf0ef562e62242120-eba2ea3000dc1f296cd3.js.map