import{l as e}from"./msdk.a6eb30aa.js";var t={};Object.defineProperty(t,"__esModule",{value:!0});var n=e;t.loadCSS=function(e){for(var t,n=!0,d=document.getElementsByTagName("link"),l=0;l<d.length;l++)(null===(t=d[l])||void 0===t?void 0:t.href)&&-1!==d[l].href.indexOf(e)&&(n=!1);if(n){var o=document.createElement("link");o.type="text/css",o.rel="stylesheet",o.href=e,document.getElementsByTagName("head")[0].appendChild(o)}},t.loadJS=function(e){return new Promise((function(t){n.loader(e,(function(){t(1)}))}))};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.insertHtml=function(e){var t,n=e.id,d=e.content,l=document.getElementById(n);null===(t=null==l?void 0:l.parentNode)||void 0===t||t.removeChild(l);var o=document.createElement("div");o.id=n,o.style.display="none",o.innerHTML=d,document.getElementsByTagName("body")[0].appendChild(o)},d.insertStyle=function(e){var t,n=e.id,d=e.content,l=document.getElementById(n);null===(t=null==l?void 0:l.parentNode)||void 0===t||t.removeChild(l);var o=document.createElement("style");o.id=n,o.type="text/css",o.innerHTML=d,document.getElementsByTagName("head")[0].appendChild(o)};export{d,t as l};
