/*! For license information please see component---src-pages-nosotres-js-05b9f81c6e88f2b885d9.js.LICENSE.txt */
"use strict";(self.webpackChunkintercambios_transorganicos=self.webpackChunkintercambios_transorganicos||[]).push([[766],{5706:function(e,t,r){var n=r(8812),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return n.isMemo(e)?c:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var s=i(t),m=i(r),h=0;h<c.length;++h){var v=c[h];if(!(a[v]||n&&n[v]||m&&m[v]||s&&s[v])){var b=p(r,v);try{u(t,v,b)}catch(g){}}}}return t}},165:function(e,t){var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case a:case s:case c:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case h:case m:case i:return e;default:return t}}case o:return t}}}function C(e){return E(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=i,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=h,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(e){return C(e)||E(e)===l},t.isConcurrentMode=C,t.isContextConsumer=function(e){return E(e)===u},t.isContextProvider=function(e){return E(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return E(e)===p},t.isFragment=function(e){return E(e)===a},t.isLazy=function(e){return E(e)===h},t.isMemo=function(e){return E(e)===m},t.isPortal=function(e){return E(e)===o},t.isProfiler=function(e){return E(e)===s},t.isStrictMode=function(e){return E(e)===c},t.isSuspense=function(e){return E(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===s||e===c||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===i||e.$$typeof===u||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===S||e.$$typeof===v)},t.typeOf=E},8812:function(e,t,r){e.exports=r(165)},435:function(e,t,r){var n=r(7294);t.Z=function(e){return n.createElement("svg",{viewBox:"0 0 500 500",className:"circlePath"},n.createElement("defs",null,n.createElement("path",{d:"M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250",id:"textcircle"},n.createElement("animateTransform",{attributeName:"transform",begin:"0s",dur:"30s",type:"rotate",from:"0 250 250",to:"360 250 250",repeatCount:"indefinite"}))),n.createElement("text",{dy:"70",textLength:"1220",fill:e.textColor,"font-size":"4em"},n.createElement("textPath",{href:"#textcircle"},e.text)))}},6179:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(7294),o=(r(5444),r(5866)),a=r(435);function c(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=r(1721),l=r(8812),f=r(5706),p=r.n(f);function d(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var y=n.createContext();var m={initialChunks:{}},h="PENDING",v="REJECTED";var b=function(e){return e};function g(e){var t=e.defaultResolveComponent,r=void 0===t?b:t,o=e.render,a=e.onLoad;function f(e,t){void 0===t&&(t={});var f=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),b={};function g(e){return t.cacheKey?t.cacheKey(e):f.resolve?f.resolve(e):"static"}function S(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!(0,l.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return p()(o,a,{preload:!0}),a}var E,C,x=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:g(r)},d(!r.__chunkExtractor||f.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(f.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(f.chunkName(r))),i(n)):(!1!==t.ssr&&(f.isReady&&f.isReady(r)||f.chunkName&&m.initialChunks[f.chunkName(r)])&&n.loadSync(),n)}(0,u.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=g(e);return s({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var n=r.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===v&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return g(this.props)},n.getCache=function(){return b[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),b[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;a&&setTimeout((function(){a(e.state.result,e.props)}))},n.loadSync=function(){if(this.state.loading)try{var e=S(f.requireSync(this.props),this.props,k);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:f.resolve(this.props),chunkName:f.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=S(t,e.props,{Loadable:k});e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},n.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,c(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=f.requireAsync(r)).status=h,this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:f.resolve(e.props),chunkName:f.chunkName(e.props),error:t?t.message:t}),n.status=v}))),n},n.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,a=(e.__chunkExtractor,c(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,u=i.error,l=i.loading,f=i.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===h)throw this.loadAsync();if(u)throw u;var p=n||t.fallback||null;return l?p:o({fallback:p,result:f,options:t,props:s({},a,{ref:r})})},r}(n.Component),w=(C=function(e){return n.createElement(y.Consumer,null,(function(t){return n.createElement(E,Object.assign({__chunkExtractor:t},e))}))},(E=x).displayName&&(C.displayName=E.displayName+"WithChunkExtractor"),C),k=n.forwardRef((function(e,t){return n.createElement(w,Object.assign({forwardedRef:t},e))}));return k.displayName="Loadable",k.preload=function(e){f.requireAsync(e)},k.load=function(e){return f.requireAsync(e)},k}return{loadable:f,lazy:function(e,t){return f(e,s({},t,{suspense:!0}))}}}var S=g({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return n.createElement(t,r)}}),E=S.loadable,C=S.lazy,x=g({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),w=x.loadable,k=x.lazy;var $=E;$.lib=w,C.lib=k;var N=$((function(){return Promise.all([r.e(532),r.e(377)]).then(r.bind(r,9377))})),_=function(){return n.createElement(o.Z,null,n.createElement("div",{className:"teamText"},n.createElement("div",{className:"circlePathContainer"},n.createElement(a.Z,{text:"Nuestro • Equipo • ",textColor:"#242424"}))),n.createElement("div",{className:"nosotres"},n.createElement(N,null)))}}}]);
//# sourceMappingURL=component---src-pages-nosotres-js-05b9f81c6e88f2b885d9.js.map