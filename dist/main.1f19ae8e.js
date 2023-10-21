// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/flagsmith/index.js":[function(require,module,exports) {
var define;
var global = arguments[3];
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).flagsmith={})}(this,(function(t){"use strict";var e={};Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,a=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){a=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i={getItem:function(t,e){return i.multiGet([t]).then((function(t){return t[0][1]})).then((function(t){return e&&e(null,t),t})).catch((function(t){return e&&e(t,null),t}))},setItem:function(t,e,n){return i.multiSet([[t,e]]).then((function(t){return n&&n(null,t),t})).catch((function(t){return n&&n(t,null),t}))},getAllKeys:function(t){return Promise.resolve(Object.keys(localStorage)).then((function(e){return t&&t(null,e),e})).catch((function(e){return t&&t(e,null),e}))},removeItem:function(t,e){return i.multiRemove([t]).then((function(){e&&e(null)})).catch((function(t){e&&e(t,null)}))},clear:function(){return new Promise((function(t){window.localStorage.clear(),t()}))},multiGet:function(t){return new Promise((function(e){e(t.reduce((function(t,e){return t.concat([[e,localStorage.getItem(e)]])}),[]))}))},multiSet:function(t){return new Promise((function(e,i){var a=[];return t.forEach((function(t){var e=n(t,2),i=e[0],r=e[1];try{localStorage.setItem(i,r)}catch(t){a.push(t)}})),a.length>0?i(a):e()}))},multiRemove:function(t){return new Promise((function(e){t.forEach((function(t){return window.localStorage.removeItem(t)})),e()}))},flushGetRequests:function(){console.warn("AsyncStorage.flushGetRequests: Not supported on `web`")}},a=e.default=i,r=function(){return r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},r.apply(this,arguments)};function o(t,e,n){if(n||2===arguments.length)for(var i,a=0,r=e.length;a<r;a++)!i&&a in e||(i||(i=Array.prototype.slice.call(e,0,a)),i[a]=e[a]);return t.concat(i||Array.prototype.slice.call(e))}var s,l,u=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var i,a,r;if(Array.isArray(e)){if((i=e.length)!=n.length)return!1;for(a=i;0!=a--;)if(!t(e[a],n[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((i=(r=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(a=i;0!=a--;)if(!Object.prototype.hasOwnProperty.call(n,r[a]))return!1;for(a=i;0!=a--;){var o=r[a];if(!t(e[o],n[o]))return!1}return!0}return e!=e&&n!=n};!function(t){t.NONE="NONE",t.DEFAULT_FLAGS="DEFAULT_FLAGS",t.CACHE="CACHE",t.SERVER="SERVER"}(s||(s={}));var c,g=null,h="BULLET_TRAIN_DB",f="BULLET_TRAIN_EVENT",d="https://edge.api.flagsmith.com/api/v1/",v=function(t){return"Attempted to "+t+" a user before calling flagsmith.init. Call flagsmith.init first, if you wish to prevent it sending a request for flags, call init with preventFetch:true."},p="flagsmith_value_",y="flagsmith_enabled_",m="flagsmith_trait_",S=function(){function t(t){var e=this;this._trigger=null,this._triggerLoadingState=null,this.timestamp=null,this.isLoading=!1,this.eventSource=null,this.getJSON=function(t,n,i){var a=e,r=a.environmentID,o=a.headers,s={method:n||"GET",body:i,headers:{"x-environment-key":"".concat(r)}};return n&&"GET"!==n&&(s.headers["Content-Type"]="application/json; charset=utf-8"),o&&Object.assign(s.headers,o),l||console.error("Flagsmith: fetch is undefined, please specify a fetch implementation into flagsmith.init to support SSR."),l(t,s).then((function(i){var a,r=null===(a=i.headers)||void 0===a?void 0:a.get("x-flagsmith-document-updated-at");if(r)try{var o=parseFloat(r);if(isNaN(o))throw"Failed to parse x-flagsmith-document-updated-at";e.timestamp=o}catch(t){e.log(t,"Failed to parse x-flagsmith-document-updated-at",r)}return e.log("Fetch response: "+i.status+" "+(n||"GET")+0+t),i.text().then((function(t){var e=t;try{e=JSON.parse(t)}catch(t){}return i.status&&i.status>=200&&i.status<300?e:Promise.reject(e)}))})).catch((function(t){throw console.error("Flagsmith: Fetch error: "+t),new Error("Flagsmith: Fetch error:"+t)}))},this.getFlags=function(t,n){var i=e,a=i.onChange,o=i.onError,l=i.identity,c=i.api,g=!1;e.log("Get Flags"),e.isLoading=!0,e.loadingState.isFetching||e.setLoadingState(r(r({},e.loadingState),{isFetching:!0}));var h=function(t){var n=t.flags,i=t.traits;e.isLoading=!1,l&&(e.withTraits=null);var o={},c={};i=i||[],(n=n||[]).forEach((function(t){o[t.feature.name.toLowerCase().replace(/ /g,"_")]={id:t.feature.id,enabled:t.enabled,value:t.feature_state_value}})),i.forEach((function(t){c[t.trait_key.toLowerCase().replace(/ /g,"_")]=t.trait_value})),e.oldFlags=r({},e.flags);var g=u(e.flags,o),h=u(e.traits,c);if(e.flags=o,e.traits=c,e.updateStorage(),e.datadogRum)try{if(e.datadogRum.trackTraits){var f={};Object.keys(e.traits).map((function(t){f[m+t]=e.getTrait(t)}));var d=r(r(r({},e.datadogRum.client.getUser()),{id:e.datadogRum.client.getUser().id||e.identity}),f);e.log("Setting Datadog user",d),e.datadogRum.client.setUser(d)}}catch(t){console.error(t)}if(e.dtrum)try{var v={javaDouble:{},date:{},shortString:{},javaLongOrObject:{}};Object.keys(e.flags).map((function(t){b(v,p+t,e.getValue(t,{},!0)),b(v,y+t,e.hasFeature(t,!0))})),Object.keys(e.traits).map((function(t){b(v,m+t,e.getTrait(t))})),e.log("Sending javaLongOrObject traits to dynatrace",v.javaLongOrObject),e.log("Sending date traits to dynatrace",v.date),e.log("Sending shortString traits to dynatrace",v.shortString),e.log("Sending javaDouble to dynatrace",v.javaDouble),e.dtrum.sendSessionProperties(v.javaLongOrObject,v.date,v.shortString,v.javaDouble)}catch(t){console.error(t)}a&&a(e.oldFlags,{isFromServer:!0,flagsChanged:!g,traitsChanged:!h},e._loadedState(s.SERVER))};return l?Promise.all([e.withTraits?e.getJSON(c+"identities/","POST",JSON.stringify({identifier:l,traits:Object.keys(e.withTraits).map((function(t){return{trait_key:t,trait_value:e.withTraits[t]}})).filter((function(t){return void 0!==t.trait_value||(e.log("Warning - attempted to set an undefined trait value for key",t.trait_key),!1)}))})):e.getJSON(c+"identities/?identifier="+encodeURIComponent(l))]).then((function(n){e.withTraits=null,h(n[0]),t&&!g&&(g=!0,t())})).catch((function(t){var e=t.message;o&&o(new Error(e))})):Promise.all([e.getJSON(c+"flags/")]).then((function(e){h({flags:e[0],traits:void 0}),t&&!g&&(g=!0,t())})).catch((function(t){n&&!g&&(g=!0,n(t)),o&&o(t)}))},this.analyticsFlags=function(){var t=e.api;if(e.evaluationEvent&&e.evaluationEvent[e.environmentID])return e.evaluationEvent&&0!==Object.getOwnPropertyNames(e.evaluationEvent).length&&0!==Object.getOwnPropertyNames(e.evaluationEvent[e.environmentID]).length?e.getJSON(t+"analytics/flags/","POST",JSON.stringify(e.evaluationEvent[e.environmentID])).then((function(t){var n=e.getState();e.evaluationEvent||(e.evaluationEvent={}),e.evaluationEvent[e.environmentID]={},e.setState(r(r({},n),{evaluationEvent:e.evaluationEvent})),e.updateEventStorage()})).catch((function(t){e.log("Exception fetching evaluationEvent",t)})):void 0},this.datadogRum=null,this.loadingState={isLoading:!0,isFetching:!0,error:null,source:s.NONE},this.canUseStorage=!1,this.analyticsInterval=null,this.api=null,this.cacheFlags=!1,this.ts=null,this.enableAnalytics=!1,this.enableLogs=!1,this.environmentID="",this.evaluationEvent=null,this.flags=null,this.getFlagInterval=null,this.headers=null,this.initialised=!1,this.oldFlags=null,this.onChange=null,this.onError=null,this.identity=null,this.ticks=null,this.timer=null,this.traits=null,this.dtrum=null,this.withTraits=null,this.cacheOptions={ttl:0,skipAPI:!1},this.evaluateFlag=function(t,n){if(e.datadogRum&&(e.datadogRum.client.addFeatureFlagEvaluation?(e.log("Sending feature flag evaluation to Datadog",t,n),"VALUE"===n?e.datadogRum.client.addFeatureFlagEvaluation(p+t,e.getValue(t,{},!0)):e.datadogRum.client.addFeatureFlagEvaluation(y+t,e.hasFeature(t,!0))):console.error("Flagsmith: Your datadog RUM client does not support the function addFeatureFlagEvaluation, please update it.")),e.enableAnalytics){if(!e.evaluationEvent)return;e.evaluationEvent[e.environmentID]||(e.evaluationEvent[e.environmentID]={}),void 0===e.evaluationEvent[e.environmentID][t]&&(e.evaluationEvent[e.environmentID][t]=0),e.evaluationEvent[e.environmentID][t]+=1}e.updateEventStorage()},this.getValue=function(t,n,i){var a=e.flags&&e.flags[t.toLowerCase().replace(/ /g,"_")],r=null;if(a&&(r=a.value),i||e.evaluateFlag(t,"VALUE"),null==n?void 0:n.json)try{return null===r?(e.log("Tried to parse null flag as JSON: "+t),n.fallback):JSON.parse(r)}catch(t){return n.fallback}return r},this.getTrait=function(t){return e.traits&&e.traits[t.toLowerCase().replace(/ /g,"_")]},this.getAllTraits=function(){return e.traits},this.setTrait=function(t,n){if(e.api){var i={};return i[t]=n,e.setTraits(i)}console.error(v("setTrait"))},this.setTraits=function(t){if(e.api){if(t&&"object"==typeof t||console.error("Expected object for flagsmith.setTraits"),e.withTraits=r(r({},e.withTraits||{}),t),e.identity)return e.initialised?e.getFlags():void 0;e.log("Set traits prior to identifying",e.withTraits)}else console.error(v("setTraits"))},this.hasFeature=function(t,n){var i=e.flags&&e.flags[t.toLowerCase().replace(/ /g,"_")],a=!1;return i&&i.enabled&&(a=!0),n||e.evaluateFlag(t,"ENABLED"),a},l=t.fetch?t.fetch:"undefined"!=typeof fetch?fetch:null===global||void 0===global?void 0:global.fetch,this.canUseStorage="undefined"!=typeof window||!!t.browserlessStorage,this.log("Constructing flagsmith instance "+t),t.eventSource&&(c=t.eventSource),t.AsyncStorage&&(g=t.AsyncStorage)}return t.prototype.init=function(t){var e=this,n=t.environmentID,i=t.api,a=void 0===i?d:i,o=t.headers,u=t.onChange,v=t.cacheFlags,p=t.datadogRum,y=t.onError,m=t.defaultFlags,S=t.fetch,_=t.preventFetch,E=t.enableLogs,b=t.enableDynatrace,w=t.enableAnalytics,F=t.realtime,O=t.eventSourceUrl,I=void 0===O?"https://realtime.flagsmith.com/":O,C=t.AsyncStorage,L=t.identity,A=t.traits,T=t.state,j=t.cacheOptions,D=t.angularHttpClient,P=t._trigger;return t._triggerLoadingStateChange,new Promise((function(t,i){var d,O;e.environmentID=n,e.api=a,e.headers=o,e.getFlagInterval=null,e.analyticsInterval=null;var N="Wrong Flagsmith Configuration: preventFetch is true and no defaulFlags provided";if(e.onChange=function(t,n,i){e.setLoadingState(i),u&&u(t,n,e.loadingState),e._trigger&&(e.log("trigger called"),e._trigger())},e._trigger=P||e._trigger,e.onError=y?function(t){e.setLoadingState(r(r({},e.loadingState),{isFetching:!1,isLoading:!1,error:t})),t instanceof Error?y(t):y(new Error(t))}:null,e.identity=L,e.withTraits=A,e.enableLogs=E||!1,e.cacheOptions=j?{skipAPI:!!j.skipAPI,ttl:j.ttl||0}:e.cacheOptions,!e.cacheOptions.ttl&&e.cacheOptions.skipAPI&&console.warn("Flagsmith: you have set a cache ttl of 0 and are skipping API calls, this means the API will not be hit unless you clear local storage."),S&&(l=S),e.enableAnalytics=w||!1,e.flags=Object.assign({},m)||{},e.initialised=!0,e.ticks=1e4,Object.keys(e.flags).length&&(e.loadingState=r(r({},e.loadingState),{isLoading:!1,source:s.DEFAULT_FLAGS})),F&&"undefined"!=typeof window){var R=I+"sse/environments/"+n+"/stream";c?e.eventSource||(e.log("Creating event source with url "+R),e.eventSource=new c(R),e.eventSource.addEventListener("environment_updated",(function(t){var n;try{n=JSON.parse(t.data).updated_at}catch(t){e.log("Could not parse sse event",t)}n?!e.timestamp||n>e.timestamp?e.isLoading?e.log("updated_at is new, but flags are loading",t.data,e.timestamp):(e.log("updated_at is new, fetching flags",t.data,e.timestamp),e.getFlags()):e.log("updated_at is outdated, skipping get flags",t.data,e.timestamp):e.log("No updated_at received, fetching flags",t)}))):e.log("Error, EventSource is undefined")}if(e.log("Initialising with properties",{environmentID:n,api:a,headers:o,onChange:u,cacheFlags:v,onError:y,defaultFlags:m,preventFetch:_,enableLogs:E,enableAnalytics:w,AsyncStorage:g,identity:L,traits:A,_trigger:P,state:T,angularHttpClient:D},e),e.timer=e.enableLogs?(new Date).valueOf():null,C&&(g=C),e.cacheFlags=void 0!==g&&!!v,e.setState(T),!n)throw i("Please specify a environment id"),"Please specify a environment id";if(p&&(e.datadogRum=p),b&&("undefined"==typeof dtrum?console.error("You have attempted to enable dynatrace but dtrum is undefined, please check you have the Dynatrace RUM JavaScript API installed."):e.dtrum=dtrum),D&&(l=function(t,e){var n=e.headers,i=e.method,a=e.body;return new Promise((function(e){switch(i){case"GET":return D.get(t,{headers:n}).subscribe((function(t){e({ok:!0,text:function(){return Promise.resolve(t)}})}));case"POST":case"PUT":return D.post(t,a,{headers:n}).subscribe((function(t){e({ok:!0,text:function(){return Promise.resolve(t)}})}))}}))}),g&&e.canUseStorage&&g.getItem(f).then((function(t){if(t)try{e.evaluationEvent=JSON.parse(t)}catch(t){e.evaluationEvent={}}else e.evaluationEvent={};return e.analyticsInterval=setInterval(e.analyticsFlags,e.ticks),!0})),e.enableAnalytics&&(e.analyticsInterval&&clearInterval(e.analyticsInterval),g&&e.canUseStorage&&g.getItem(f,(function(t,n){if(n){var i=JSON.parse(n);i[e.environmentID]&&(T=e.getState(),e.log("Retrieved events from cache",n),e.setState(r(r({},T),{evaluationEvent:i[e.environmentID]})))}return!0}))),v)g&&e.canUseStorage&&g.getItem(h,(function(n,a){var r,o,l;if(a)try{var u=JSON.parse(a),c=!1;if(u&&u.api===e.api&&u.environmentID===e.environmentID){var g=!0;e.identity&&u.identity!==e.identity&&(e.log("Ignoring cache,  identity has changed from "+u.identity+" to "+e.identity),g=!1),e.cacheOptions.ttl&&(!u.ts||(new Date).valueOf()-u.ts>e.cacheOptions.ttl)&&u.ts&&(e.log("Ignoring cache, timestamp is too old ts:"+u.ts+" ttl: "+e.cacheOptions.ttl+" time elapsed since cache: "+((new Date).valueOf()-u.ts)+"ms"),g=!1),g&&(c=!0,e.setState(u),e.log("Retrieved flags from cache",u))}if(e.flags){var h=!(_||e.cacheOptions.skipAPI&&c);null===(r=e.onChange)||void 0===r||r.call(e,null,{isFromServer:!1,flagsChanged:!0,traitsChanged:!!e.traits},e._loadedState(s.CACHE,h)),e.oldFlags=e.flags,t(!0),e.cacheOptions.skipAPI&&c&&e.log("Skipping API, using cache"),h&&e.getFlags()}else _?t(!0):e.getFlags(t,i)}catch(t){e.log("Exception fetching cached logs",t)}else _?(m?null===(o=e.onChange)||void 0===o||o.call(e,null,{isFromServer:!1,flagsChanged:!0,traitsChanged:!!e.traits},e._loadedState(s.DEFAULT_FLAGS)):e.flags?null===(l=e.onChange)||void 0===l||l.call(e,null,{isFromServer:!1,flagsChanged:!0,traitsChanged:!!e.traits},e._loadedState(s.DEFAULT_FLAGS)):y(N),t(!0)):e.getFlags(t,i);return!0}));else if(_){if(m)null===(d=e.onChange)||void 0===d||d.call(e,null,{isFromServer:!1,flagsChanged:!0,traitsChanged:!!e.traits},e._loadedState(s.CACHE));else if(e.flags){var k=null;0===Object.keys(e.flags).length&&(k=N),null===(O=e.onChange)||void 0===O||O.call(e,null,{isFromServer:!1,flagsChanged:!0,traitsChanged:!!e.traits},e._loadedState(k,s.DEFAULT_FLAGS))}t(!0)}else e.getFlags(t,i)})).catch((function(t){e.log("Error during initialisation ",t),y&&y(t)}))},t.prototype._loadedState=function(t,e,n){return void 0===t&&(t=null),void 0===n&&(n=!1),{error:t,isFetching:n,isLoading:!1,source:e}},t.prototype.getAllFlags=function(){return this.flags},t.prototype.identify=function(t,e){return this.identity=t,this.log("Identify: "+this.identity),e&&(this.withTraits=r(r({},this.withTraits||{}),e)),this.initialised?this.getFlags():Promise.resolve()},t.prototype.getState=function(){return{api:this.api,environmentID:this.environmentID,flags:this.flags,identity:this.identity,ts:this.ts,traits:this.traits,evaluationEvent:this.evaluationEvent}},t.prototype.setState=function(t){t&&(this.initialised=!0,this.api=t.api||this.api||d,this.environmentID=t.environmentID||this.environmentID,this.flags=t.flags||this.flags,this.identity=t.identity||this.identity,this.traits=t.traits||this.traits,this.evaluationEvent=t.evaluationEvent||this.evaluationEvent,this.log("setState called",this))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.enableLogs&&console.log.apply(this,o(["FLAGSMITH:",(new Date).valueOf()-(this.timer||0),"ms"],t,!0))},t.prototype.updateStorage=function(){if(this.cacheFlags){this.ts=(new Date).valueOf();var t=JSON.stringify(this.getState());this.log("Setting storage",t),g.setItem(h,t)}},t.prototype.updateEventStorage=function(){if(this.enableAnalytics){var t=JSON.stringify(this.getState().evaluationEvent);this.log("Setting event storage",t),g.setItem(f,t)}},t.prototype.setLoadingState=function(t){var e;u(t,this.loadingState)||(this.loadingState=r({},t),this.log("Loading state changed",t),null===(e=this._triggerLoadingState)||void 0===e||e.call(this))},t.prototype.logout=function(){return this.identity=null,this.traits=null,this.initialised?this.getFlags():Promise.resolve()},t.prototype.startListening=function(t){void 0===t&&(t=1e3),this.getFlagInterval&&clearInterval(this.getFlagInterval),this.getFlagInterval=setInterval(this.getFlags,t)},t.prototype.stopListening=function(){this.getFlagInterval&&(clearInterval(this.getFlagInterval),this.getFlagInterval=null)},t.prototype.getSegments=function(){},t}();function _(t){var e=t.fetch,n=t.AsyncStorage,i=t.eventSource;return new S({fetch:e,AsyncStorage:n,eventSource:i})}var E,b=function(t,e,n){var i="shortString",a=!0;"number"==typeof n&&(i="javaDouble",a=!1),t[i]=t[i]||{},t[i][e]=a?n+"":n},w=(E=function(t,e){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},E(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}E(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),F=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},O=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,a,r=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(t){a={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},I=function(t,e,n){if(n||2===arguments.length)for(var i,a=0,r=e.length;a<r;a++)!i&&a in e||(i||(i=Array.prototype.slice.call(e,0,a)),i[a]=e[a]);return t.concat(i||Array.prototype.slice.call(e))},C=function(t){function e(){return t.call(this,"EventSource not available.\nConsider loading an EventSource polyfill and making it available globally as EventSource, or passing one in as eventSourceClass to the ReconnectingEventSource constructor.")||this}return w(e,t),e}(Error),L=function(){function t(t,e){var n=this;if(this.CONNECTING=0,this.OPEN=1,this.CLOSED=2,this._configuration=null!=e?Object.assign({},e):void 0,this.withCredentials=!1,this._eventSource=null,this._lastEventId=null,this._timer=null,this._listeners={open:[],error:[],message:[]},this.url=t.toString(),this.readyState=this.CONNECTING,this.max_retry_time=3e3,this.eventSourceClass=globalThis.FlagsmithEventSource,null!=this._configuration&&(this._configuration.lastEventId&&(this._lastEventId=this._configuration.lastEventId,delete this._configuration.lastEventId),this._configuration.max_retry_time&&(this.max_retry_time=this._configuration.max_retry_time,delete this._configuration.max_retry_time),this._configuration.eventSourceClass&&(this.eventSourceClass=this._configuration.eventSourceClass,delete this._configuration.eventSourceClass)),null==this.eventSourceClass||"function"!=typeof this.eventSourceClass)throw new C;this._onevent_wrapped=function(t){n._onevent(t)},this._start()}return t.prototype.dispatchEvent=function(t){throw new Error("Method not implemented.")},t.prototype._start=function(){var t,e,n=this,i=this.url;this._lastEventId&&(-1===i.indexOf("?")?i+="?":i+="&",i+="lastEventId="+encodeURIComponent(this._lastEventId)),this._eventSource=new this.eventSourceClass(i,this._configuration),this._eventSource.onopen=function(t){n._onopen(t)},this._eventSource.onerror=function(t){n._onerror(t)},this._eventSource.onmessage=function(t){n.onmessage(t)};try{for(var a=F(Object.keys(this._listeners)),r=a.next();!r.done;r=a.next()){var o=r.value;this._eventSource.addEventListener(o,this._onevent_wrapped)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}},t.prototype._onopen=function(t){0===this.readyState&&(this.readyState=1,this.onopen(t))},t.prototype._onerror=function(t){var e=this;if(1===this.readyState&&(this.readyState=0,this.onerror(t)),this._eventSource){this._eventSource.close(),this._eventSource=null;var n=Math.round(this.max_retry_time*Math.random());this._timer=setTimeout((function(){return e._start()}),n)}},t.prototype._onevent=function(t){var e,n;t&&t.lastEventId&&(this._lastEventId=t.lastEventId);var i=this._listeners[t.type];if(null!=i)try{for(var a=F(I([],O(i),!1)),r=a.next();!r.done;r=a.next()){r.value.call(this,t)}}catch(t){e={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}"message"===t.type&&this.onmessage(t)},t.prototype.onopen=function(t){},t.prototype.onerror=function(t){},t.prototype.onmessage=function(t){},t.prototype.close=function(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._eventSource&&(this._eventSource.close(),this._eventSource=null),this.readyState=2},t.prototype.addEventListener=function(t,e,n){null==this._listeners[t]&&(this._listeners[t]=[],null!=this._eventSource&&this._eventSource.addEventListener(t,this._onevent_wrapped));var i=this._listeners[t];i.includes(e)||(this._listeners[t]=I(I([],O(i),!1),[e],!1))},t.prototype.removeEventListener=function(t,e,n){var i=this._listeners[t];this._listeners[t]=i.filter((function(t){return t!==e}))},t}();globalThis.FlagsmithEventSource="undefined"!=typeof EventSource?EventSource:null;var A=function(t,e){return e=e||{},new Promise((function(n,i){var a=new XMLHttpRequest,r=[],o=[],s={},l=function(){return{ok:2==(a.status/100|0),statusText:a.statusText,status:a.status,url:a.responseURL,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},clone:l,headers:{keys:function(){return r},entries:function(){return o},get:function(t){return s[t.toLowerCase()]},has:function(t){return t.toLowerCase()in s}}}};for(var u in a.open(e.method||"get",t,!0),a.onload=function(){a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(t,e,n){r.push(e=e.toLowerCase()),o.push([e,n]),s[e]=s[e]?s[e]+","+n:n})),n(l())},a.onerror=i,a.withCredentials="include"==e.credentials,e.headers)a.setRequestHeader(u,e.headers[u]);a.send(e.body||null)}))},T=_({AsyncStorage:a,fetch:A,eventSource:L});"undefined"!=typeof window&&(window.flagsmith=T);t.createFlagsmithInstance=function(){return _({AsyncStorage:a,fetch:A,eventSource:L})},t.default=T,Object.defineProperty(t,"__esModule",{value:!0})}));


},{}],"main.js":[function(require,module,exports) {
"use strict";

var _flagsmith = _interopRequireDefault(require("flagsmith"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var environmentID = 'QjgYur4LQTwe5HpvbvhpzK';
_flagsmith.default.init({
  environmentID: environmentID,
  identity: 'flagsmith_sample_user',
  traits: {
    age: 21,
    country: 'England'
  },
  // these will add to the user's existing traits
  onChange: function onChange(oldFlags, params) {
    //Occurs whenever flags are changed

    var isFromServer = params.isFromServer; //determines if the update came from the server or local cached storage

    //Set a trait against the Identity
    _flagsmith.default.setTrait('favourite_colour', 'blue'); //This save the trait against the user, it can be queried with flagsmith.getTrait

    //Check for a feature
    if (_flagsmith.default.hasFeature('my_power_user_feature')) {
      myPowerUserFeature();
    }

    //Check for a trait
    if (!_flagsmith.default.getTrait('accepted_cookie_policy')) {
      showCookiePolicy();
    }

    //Or, use the value of a feature
    var myPowerUserFeature = _flagsmith.default.getValue('my_power_user_feature');

    //Check whether value has changed
    var myPowerUserFeatureOld = oldFlags['my_power_user_feature'] && oldFlags['my_power_user_feature'].value;
    if (myPowerUserFeature !== myPowerUserFeatureOld) {}
  }
});
},{"flagsmith":"../node_modules/flagsmith/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57191" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map