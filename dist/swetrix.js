!function(t,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((t="undefined"!=typeof globalThis?globalThis:t||self).swetrix={})}(this,function(n){"use strict";function o(t){return(t=location.search.match(t))&&t[2]||void 0}function e(){return location.pathname||""}var i=function(){return(i=Object.assign||function(t){for(var o,n=1,e=arguments.length;n<e;n++)for(var i in o=arguments[n])Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);return t}).apply(this,arguments)},a=/[?&](ref|source|utm_source)=([^?&]+)/,r=/[?&](utm_campaign)=([^?&]+)/,c=/[?&](utm_medium)=([^?&]+)/,s="http://localhost:5005/log",u=(t.prototype.track=function(t){this.canTrack()&&(t=i({pid:this.projectID},t),this.submitCustom(t))},t.prototype.trackPageViews=function(t){if(this.canTrack()){if(this.pageData)return this.pageData.actions;var o=setInterval(this.trackPathChange,1e3),n=e();this.pageData={path:n,actions:{stop:function(){return clearInterval(o)}}},this.trackPage(n)}},t.prototype.trackPathChange=function(){var t;this.pageData&&(t=e(),this.pageData.path!==t&&this.trackPage(t))},t.prototype.trackPage=function(t){this.pageData&&(this.pageData.path=t,t={pid:this.projectID,lc:void 0!==navigator.languages?navigator.languages[0]:navigator.language,tz:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){return}}(),ref:document.referrer||void 0,so:o(a),me:o(c),ca:o(r),pg:t},this.submitData(t))},t.prototype.debug=function(t){var o;null!==(o=this.options)&&void 0!==o&&o.debug&&console.log("[Analytics]",t)},t.prototype.canTrack=function(){var t,o;return"undefined"==typeof window?(this.debug("Tracking disabled: script does not run in browser environment."),!1):null!==(t=this.options)&&void 0!==t&&t.respectDNT&&"1"===(null===(o=window.navigator)||void 0===o?void 0:o.doNotTrack)?(this.debug("Tracking disabled: respecting user's 'Do Not Track' preference."),!1):!!(null!==(o=this.options)&&void 0!==o&&o.debug||"localhost"!==(null===location||void 0===location?void 0:location.hostname)&&"127.0.0.1"!==(null===location||void 0===location?void 0:location.hostname)&&""!==(null===location||void 0===location?void 0:location.hostname))&&(null===navigator||void 0===navigator||!navigator.webdriver||(this.debug("Tracking disabled: navigation is automated by WebDriver."),!1))},t.prototype.submitData=function(t){return fetch(s,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})},t.prototype.submitCustom=function(t){return fetch(s+"/custom",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})},t);function t(t,o){this.projectID=t,this.options=o,this.pageData=null}n.LIB_INSTANCE=null,n.init=function(t,o){return n.LIB_INSTANCE||(n.LIB_INSTANCE=new u(t,o)),n.LIB_INSTANCE},n.track=function(t){n.LIB_INSTANCE&&n.LIB_INSTANCE.track(t)},n.trackViews=function(t){n.LIB_INSTANCE&&n.LIB_INSTANCE.trackPageViews(t)},Object.defineProperty(n,"__esModule",{value:!0})});
