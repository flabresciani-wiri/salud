window.DownloadAppWidget=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){var o=n(3),i=function(e){for(var t="".concat(e,"="),n=document.cookie.split(";"),o=0;o<n.length;o+=1){for(var i=n[o];" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return null},r=function(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var r,a,c="; expires=".concat(i.toGMTString()),l="";o("samesite")&&(l="; SameSite=None; Secure"),document.cookie="".concat(e,"=;expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/;"),document.cookie="".concat(e,"=").concat(t,"; ").concat(c,"; path=/; domain=").concat((r=window.location.hostname,a=r.split(".")[0],r.slice(a.length+1))).concat(l)};e.exports={read:i,createOrUpdate:r,updateCookiesOnClose:function(e){if(e){if(e.widgetClosedCookie){var t=parseInt(i(e.widgetClosedCookie),10);r(e.widgetClosedCookie,isNaN(t)?1:t+1,e.cookieExpirationDays)}e.widgetLastClosedCookie&&r(e.widgetLastClosedCookie,Date.now(),e.cookieExpirationDays)}},reset:function(e){e&&e.reset&&(e.widgetClosedCookie&&r(e.widgetClosedCookie,0,e.cookieExpirationDays),e.widgetLastClosedCookie&&r(e.widgetLastClosedCookie,"",e.cookieExpirationDays))}}},function(e,t){var n=function(e,t){!function(e,t){var n=e.category,o=e.label;"undefined"!=typeof meli_ga&&meli_ga("send",{hitType:"event",eventCategory:n,eventAction:t.toUpperCase(),eventLabel:o,nonInteraction:"show"===t})}(e.analytics,t),function(e,t){var n=e.events,o=e.experiments,i=e.event_data;if("undefined"!=typeof melidata){var r=n[t],a={};"event"===r.type?melidata("createEventTrack",a):melidata("createViewTrack",a),melidata("withPath",r.path,a),melidata("withData",i,a);for(var c=0;c<o.length;c+=1)melidata("withExperiment",o[c].experiment,o[c].id,a);melidata("sendTrack",a)}}(e.melidata,t)};e.exports=function(e,t){"complete"===document.readyState?n(e,t):window.addEventListener("load",(function(){n(e,t)}))}},function(e,t,n){var o=n(0).updateCookiesOnClose,i=n(1);function r(e){for(var t=1;t<arguments.length;t+=1){var n=arguments[t];for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])}return e}var a=function(e,t){for(var n=0;n<e.length;n+=1)t(e[n],n,e)},c=function(e,t){var n=Object.keys(e);a(n,(function(n){var o=e[n];t(n,o)}))},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=document.createElement(e.tagName||"div");if(e.innerText&&(t.innerText=e.innerText),e.classNames&&a(e.classNames,(function(e,n){t.className+="".concat(n?" ":"").concat(e)})),e.style){var n="";c(e.style,(function(e,t){"flex"===t&&(n+="".concat(e,": -webkit-flex; ")),n+="".concat(e,": ").concat(t,"; ")})),t.style.cssText=n}return e.attributes&&c(e.attributes,(function(e,n){t[e]=n})),e.onClickHandler&&t.addEventListener("click",e.onClickHandler),e.children&&a(e.children,(function(e){return t.insertBefore(e,null)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t},s=function(e){var t,n=(t=e.icon)?l({tagName:"img",attributes:{src:t},style:{"margin-right":"6px","max-height":"1.5em",position:"relative",top:"1px",height:"18px"}}):null;return{children:[].concat(n?[n]:[]).concat(e.innerText?[document.createTextNode(e.innerText)]:[]),innerText:null,innerHTML:e.closeIcon||null}};e.exports={element:l,link:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=l(r(e,s(e),{tagName:"a",style:r(e.style,{"text-decoration":"none"}),onClickHandler:function(){i(e.tracking,e.linkId),e.onClick&&e.onClick()}}));return t.href=e.href,t},close:function(e){return l(r(e,s(e),{tagName:"button",onClickHandler:function(){i(e.tracking,"close"),o(e.cookies),e.onClick&&e.onClick()}}))},assign:r}},function(e,t){e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.querySelector("meta[name=browser-support]");if(!n||!e)return t;var o=new RegExp("\\b".concat(e,"=(true|false)\\b"),"g"),i=o.exec(n.content);return i?JSON.parse(i[1]):t}},,,,function(e,t,n){e.exports=n(8)},function(e,t,n){var o=n(2),i=o.element,r=o.link,a=o.close,c=n(9).getStyles,l=n(0).reset,s=n(1);e.exports=function(e){l(e.cookies),s(e.tracks,"show");var t,n=c(e),o=i({style:n.container}),d=function(){o.parentNode.removeChild(o),t&&document.removeEventListener("focusin",t)};if(e.close){var u=a({closeIcon:e.closeIcon,style:n.closeCross,onClick:d,cookies:e.cookies,tracking:e.tracks});o.appendChild(u)}var p=r({style:n.title,innerText:e.title,href:e.downloadButtonAction,tracking:e.tracks,onClick:d,linkId:"download"});o.appendChild(p);var f=i({style:n.buttonsContainer});o.appendChild(f);var g=r({innerText:e.downloadButtonText,style:n.downloadButton,href:e.downloadButtonAction,tracking:e.tracks,icon:e.downloadButtonIcon,onClick:d,linkId:"download"});if(f.appendChild(g),e.closeButtonAction){var x=a({innerText:e.closeButtonText,style:n.closeButton,elementToRemove:o,cookies:e.cookies,tracking:e.tracks,icon:e.closeButtonIcon,onClick:d});f.appendChild(x)}document.body.appendChild(o),t=function(e){"INPUT"===e.target.tagName&&d()},document.addEventListener("focusin",t)}},function(e,t,n){var o=n(10).getMapColor,i=n(11),r=i.contrastMapping,a=i.codeMapping,c=n(12),l=n(2).assign,s=o(a,r),d={"border-radius":"6px","font-size":"14px","font-weight":"600",display:"flex","justify-content":"center","align-items":"center",flex:"1 1 0%"};e.exports={getStyles:function(e){var t,n,o,i="horizontally"===e.stacked,r="white"!==e.backgroundColor?{}:{"box-shadow":"0 -8px 16px 0 rgba(0,0,0,0.1)"};return{container:l({position:"fixed","z-index":1e3,bottom:"0px",left:"0px",right:"0px","background-color":s(e.backgroundColor),padding:"16px"},r),closeCross:{float:"right","font-size":"24px","background-color":"transparent",padding:"0",border:"none","line-height":"20px",position:"relative",left:"5px",top:"-5px"},title:l({"font-weight":"600","font-size":e.titleFontSize,color:s(e.backgroundColor,!0),"line-height":"24px"},c),buttonsContainer:{"margin-top":"16px",display:"flex","flex-direction":i?"row-reverse":"column"},downloadButton:l({border:"none","background-color":s(e.downloadButtonBackgroundColor),color:s(e.downloadButtonBackgroundColor,!0),"flex-shrink":0,"white-space":"nowrap",padding:i?"6px 8px 8px":"7px 8px 9px"},c,d),closeButton:l((t={border:"none","background-color":s(e.closeButtonBackgroundColor),color:s(e.closeButtonBackgroundColor,!0),padding:"6px 8px 8px"},n="margin-".concat(i?"right":"top"),o="12px",n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t),c,d)}}}},function(e,t){e.exports={getMapColor:function(e,t){return function(n){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e[n])return n;var i=o?t[n]:n;return e[i]}}}},function(e,t){e.exports={codeMapping:{black:"#333333",white:"#FFF",blue:"#3483fa",yellow:"#ffd100",blackWithTransparency:"rgba(0, 0, 0, 0.8)",whiteWithTransparency:"rgba(255, 255, 255, 0.2)",blueWithTransparency:"rgba(65, 137, 230, 0.15)"},contrastMapping:{black:"white",white:"blackWithTransparency",blue:"white",yellow:"blackWithTransparency",whiteWithTransparency:"white",blueWithTransparency:"blue"}}},function(e,t){e.exports={"font-family":"Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif","-webkit-font-smoothing":"antialiased"}}]);