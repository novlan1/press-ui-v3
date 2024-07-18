import{P as e}from"./press-popup-plus.974d6763.js";import{P as t}from"./press-icon-plus.43efdcdd.js";import{u as o}from"./utils.bb2d8d10.js";import{v as n}from"./validator.84caa8d5.js";import{t as i}from"./press-transition.e8aeacc8.js";import{_ as r,o as s,c as a,f as c,w as l,h as p,n as d,r as u,F as f,v as m,z as h,x as g,e as v,t as y,i as b,j as w,y as x}from"./index-43eb3ea0.js";import{P as O}from"./press-button.1db29ede.js";import{P as C}from"./press-picker-plus.4b0079fa.js";import{P as k}from"./press-cell.a0845ac7.js";import{P,a as j}from"./press-grid-item.d2950fba.js";import{P as S}from"./press-switch.3a23dc52.js";import"./press-overlay.4c76514c.js";import"./press-component.181873fd.js";import"./style.0f94ff97.js";import"./add-unit.0c57c089.js";import"./press-info.68d3dd51.js";import"./version.7ee5c281.js";import"./press-loading-plus.e7ffc3ab.js";import"./press-loading.bae3cb19.js";import"./button.49122d4f.js";import"./number.df2f0694.js";import"./parent-map.b443f4cc.js";import"./index.a21f0567.js";import"./link.82331220.js";import"./event.1c00601d.js";import"./support-passive.bc409298.js";import"./relation.8b10893c.js";var A="top",E="bottom",L="right",D="left",T="auto",_=[A,E,L,D],V="start",W="end",B="clippingParents",I="viewport",M="popper",H="reference",z=_.reduce((function(e,t){return e.concat([t+"-"+V,t+"-"+W])}),[]),R=[].concat(_,[T]).reduce((function(e,t){return e.concat([t,t+"-"+V,t+"-"+W])}),[]),$=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function G(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function q(e){return e instanceof U(e).Element||e instanceof Element}function N(e){return e instanceof U(e).HTMLElement||e instanceof HTMLElement}function F(e){return"undefined"!=typeof ShadowRoot&&(e instanceof U(e).ShadowRoot||e instanceof ShadowRoot)}const X={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},i=t.elements[e];N(i)&&G(i)&&(Object.assign(i.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],i=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});N(n)&&G(n)&&(Object.assign(n.style,r),Object.keys(i).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};function Y(e){return e.split("-")[0]}var J=Math.max,K=Math.min,Q=Math.round;function Z(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function ee(){return!/^((?!chrome|android).)*safari/i.test(Z())}function te(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var n=e.getBoundingClientRect(),i=1,r=1;t&&N(e)&&(i=e.offsetWidth>0&&Q(n.width)/e.offsetWidth||1,r=e.offsetHeight>0&&Q(n.height)/e.offsetHeight||1);var s=(q(e)?U(e):window).visualViewport,a=!ee()&&o,c=(n.left+(a&&s?s.offsetLeft:0))/i,l=(n.top+(a&&s?s.offsetTop:0))/r,p=n.width/i,d=n.height/r;return{width:p,height:d,top:l,right:c+p,bottom:l+d,left:c,x:c,y:l}}function oe(e){var t=te(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function ne(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&F(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ie(e){return U(e).getComputedStyle(e)}function re(e){return["table","td","th"].indexOf(G(e))>=0}function se(e){return((q(e)?e.ownerDocument:e.document)||window.document).documentElement}function ae(e){return"html"===G(e)?e:e.assignedSlot||e.parentNode||(F(e)?e.host:null)||se(e)}function ce(e){return N(e)&&"fixed"!==ie(e).position?e.offsetParent:null}function le(e){for(var t=U(e),o=ce(e);o&&re(o)&&"static"===ie(o).position;)o=ce(o);return o&&("html"===G(o)||"body"===G(o)&&"static"===ie(o).position)?t:o||function(e){var t=/firefox/i.test(Z());if(/Trident/i.test(Z())&&N(e)&&"fixed"===ie(e).position)return null;var o=ae(e);for(F(o)&&(o=o.host);N(o)&&["html","body"].indexOf(G(o))<0;){var n=ie(o);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return o;o=o.parentNode}return null}(e)||t}function pe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function de(e,t,o){return J(e,K(t,o))}function ue(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function fe(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}function me(e){return e.split("-")[1]}var he={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ge(e){var t,o=e.popper,n=e.popperRect,i=e.placement,r=e.variation,s=e.offsets,a=e.position,c=e.gpuAcceleration,l=e.adaptive,p=e.roundOffsets,d=e.isFixed,u=s.x,f=void 0===u?0:u,m=s.y,h=void 0===m?0:m,g="function"==typeof p?p({x:f,y:h}):{x:f,y:h};f=g.x,h=g.y;var v=s.hasOwnProperty("x"),y=s.hasOwnProperty("y"),b=D,w=A,x=window;if(l){var O=le(o),C="clientHeight",k="clientWidth";if(O===U(o)&&"static"!==ie(O=se(o)).position&&"absolute"===a&&(C="scrollHeight",k="scrollWidth"),i===A||(i===D||i===L)&&r===W)w=E,h-=(d&&O===x&&x.visualViewport?x.visualViewport.height:O[C])-n.height,h*=c?1:-1;if(i===D||(i===A||i===E)&&r===W)b=L,f-=(d&&O===x&&x.visualViewport?x.visualViewport.width:O[k])-n.width,f*=c?1:-1}var P,j=Object.assign({position:a},l&&he),S=!0===p?function(e,t){var o=e.x,n=e.y,i=t.devicePixelRatio||1;return{x:Q(o*i)/i||0,y:Q(n*i)/i||0}}({x:f,y:h},U(o)):{x:f,y:h};return f=S.x,h=S.y,c?Object.assign({},j,((P={})[w]=y?"0":"",P[b]=v?"0":"",P.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+h+"px)":"translate3d("+f+"px, "+h+"px, 0)",P)):Object.assign({},j,((t={})[w]=y?h+"px":"",t[b]=v?f+"px":"",t.transform="",t))}var ve={passive:!0};var ye={left:"right",right:"left",bottom:"top",top:"bottom"};function be(e){return e.replace(/left|right|bottom|top/g,(function(e){return ye[e]}))}var we={start:"end",end:"start"};function xe(e){return e.replace(/start|end/g,(function(e){return we[e]}))}function Oe(e){var t=U(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Ce(e){return te(se(e)).left+Oe(e).scrollLeft}function ke(e){var t=ie(e),o=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+i+n)}function Pe(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:N(e)&&ke(e)?e:Pe(ae(e))}function je(e,t){var o;void 0===t&&(t=[]);var n=Pe(e),i=n===(null==(o=e.ownerDocument)?void 0:o.body),r=U(n),s=i?[r].concat(r.visualViewport||[],ke(n)?n:[]):n,a=t.concat(s);return i?a:a.concat(je(ae(s)))}function Se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ae(e,t,o){return t===I?Se(function(e,t){var o=U(e),n=se(e),i=o.visualViewport,r=n.clientWidth,s=n.clientHeight,a=0,c=0;if(i){r=i.width,s=i.height;var l=ee();(l||!l&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:a+Ce(e),y:c}}(e,o)):q(t)?function(e,t){var o=te(e,!1,"fixed"===t);return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}(t,o):Se(function(e){var t,o=se(e),n=Oe(e),i=null==(t=e.ownerDocument)?void 0:t.body,r=J(o.scrollWidth,o.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=J(o.scrollHeight,o.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-n.scrollLeft+Ce(e),c=-n.scrollTop;return"rtl"===ie(i||o).direction&&(a+=J(o.clientWidth,i?i.clientWidth:0)-r),{width:r,height:s,x:a,y:c}}(se(e)))}function Ee(e,t,o,n){var i="clippingParents"===t?function(e){var t=je(ae(e)),o=["absolute","fixed"].indexOf(ie(e).position)>=0&&N(e)?le(e):e;return q(o)?t.filter((function(e){return q(e)&&ne(e,o)&&"body"!==G(e)})):[]}(e):[].concat(t),r=[].concat(i,[o]),s=r[0],a=r.reduce((function(t,o){var i=Ae(e,o,n);return t.top=J(i.top,t.top),t.right=K(i.right,t.right),t.bottom=K(i.bottom,t.bottom),t.left=J(i.left,t.left),t}),Ae(e,s,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Le(e){var t,o=e.reference,n=e.element,i=e.placement,r=i?Y(i):null,s=i?me(i):null,a=o.x+o.width/2-n.width/2,c=o.y+o.height/2-n.height/2;switch(r){case A:t={x:a,y:o.y-n.height};break;case E:t={x:a,y:o.y+o.height};break;case L:t={x:o.x+o.width,y:c};break;case D:t={x:o.x-n.width,y:c};break;default:t={x:o.x,y:o.y}}var l=r?pe(r):null;if(null!=l){var p="y"===l?"height":"width";switch(s){case V:t[l]=t[l]-(o[p]/2-n[p]/2);break;case W:t[l]=t[l]+(o[p]/2-n[p]/2)}}return t}function De(e,t){void 0===t&&(t={});var o=t,n=o.placement,i=void 0===n?e.placement:n,r=o.strategy,s=void 0===r?e.strategy:r,a=o.boundary,c=void 0===a?B:a,l=o.rootBoundary,p=void 0===l?I:l,d=o.elementContext,u=void 0===d?M:d,f=o.altBoundary,m=void 0!==f&&f,h=o.padding,g=void 0===h?0:h,v=ue("number"!=typeof g?g:fe(g,_)),y=u===M?H:M,b=e.rects.popper,w=e.elements[m?y:u],x=Ee(q(w)?w:w.contextElement||se(e.elements.popper),c,p,s),O=te(e.elements.reference),C=Le({reference:O,element:b,strategy:"absolute",placement:i}),k=Se(Object.assign({},b,C)),P=u===M?k:O,j={top:x.top-P.top+v.top,bottom:P.bottom-x.bottom+v.bottom,left:x.left-P.left+v.left,right:P.right-x.right+v.right},S=e.modifiersData.offset;if(u===M&&S){var D=S[i];Object.keys(j).forEach((function(e){var t=[L,E].indexOf(e)>=0?1:-1,o=[A,E].indexOf(e)>=0?"y":"x";j[e]+=D[o]*t}))}return j}function Te(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function _e(e){return[A,L,E,D].some((function(t){return e[t]>=0}))}const Ve={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,i=o.offset,r=void 0===i?[0,0]:i,s=R.reduce((function(e,o){return e[o]=function(e,t,o){var n=Y(e),i=[D,A].indexOf(n)>=0?-1:1,r="function"==typeof o?o(Object.assign({},t,{placement:e})):o,s=r[0],a=r[1];return s=s||0,a=(a||0)*i,[D,L].indexOf(n)>=0?{x:a,y:s}:{x:s,y:a}}(o,t.rects,r),e}),{}),a=s[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=s}};function We(e,t,o){void 0===o&&(o=!1);var n,i,r=N(t),s=N(t)&&function(e){var t=e.getBoundingClientRect(),o=Q(t.width)/e.offsetWidth||1,n=Q(t.height)/e.offsetHeight||1;return 1!==o||1!==n}(t),a=se(t),c=te(e,s,o),l={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(r||!r&&!o)&&(("body"!==G(t)||ke(a))&&(l=(n=t)!==U(n)&&N(n)?{scrollLeft:(i=n).scrollLeft,scrollTop:i.scrollTop}:Oe(n)),N(t)?((p=te(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):a&&(p.x=Ce(a))),{x:c.left+l.scrollLeft-p.x,y:c.top+l.scrollTop-p.y,width:c.width,height:c.height}}function Be(e){var t=new Map,o=new Set,n=[];function i(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var n=t.get(e);n&&i(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||i(e)})),n}var Ie={placement:"bottom",modifiers:[],strategy:"absolute"};function Me(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function He(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,n=void 0===o?[]:o,i=t.defaultOptions,r=void 0===i?Ie:i;return function(e,t,o){void 0===o&&(o=r);var i,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ie,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,p={state:a,setOptions:function(o){var i="function"==typeof o?o(a.options):o;d(),a.options=Object.assign({},r,a.options,i),a.scrollParents={reference:q(e)?je(e):e.contextElement?je(e.contextElement):[],popper:je(t)};var s,l,u=function(e){var t=Be(e);return $.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}((s=[].concat(n,a.options.modifiers),l=s.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))));return a.orderedModifiers=u.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,n=void 0===o?{}:o,i=e.effect;if("function"==typeof i){var r=i({state:a,name:t,instance:p,options:n}),s=function(){};c.push(r||s)}})),p.update()},forceUpdate:function(){if(!l){var e=a.elements,t=e.reference,o=e.popper;if(Me(t,o)){a.rects={reference:We(t,le(o),"fixed"===a.options.strategy),popper:oe(o)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var i=a.orderedModifiers[n],r=i.fn,s=i.options,c=void 0===s?{}:s,d=i.name;"function"==typeof r&&(a=r({state:a,options:c,name:d,instance:p})||a)}else a.reset=!1,n=-1}}},update:(i=function(){return new Promise((function(e){p.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){d(),l=!0}};if(!Me(e,t))return p;function d(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(o).then((function(e){!l&&o.onFirstUpdate&&o.onFirstUpdate(e)})),p}}var ze=He({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,n=e.options,i=n.scroll,r=void 0===i||i,s=n.resize,a=void 0===s||s,c=U(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&l.forEach((function(e){e.addEventListener("scroll",o.update,ve)})),a&&c.addEventListener("resize",o.update,ve),function(){r&&l.forEach((function(e){e.removeEventListener("scroll",o.update,ve)})),a&&c.removeEventListener("resize",o.update,ve)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=Le({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,n=o.gpuAcceleration,i=void 0===n||n,r=o.adaptive,s=void 0===r||r,a=o.roundOffsets,c=void 0===a||a,l={placement:Y(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ge(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ge(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},X,Ve,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var i=o.mainAxis,r=void 0===i||i,s=o.altAxis,a=void 0===s||s,c=o.fallbackPlacements,l=o.padding,p=o.boundary,d=o.rootBoundary,u=o.altBoundary,f=o.flipVariations,m=void 0===f||f,h=o.allowedAutoPlacements,g=t.options.placement,v=Y(g),y=c||(v===g||!m?[be(g)]:function(e){if(Y(e)===T)return[];var t=be(e);return[xe(e),t,xe(t)]}(g)),b=[g].concat(y).reduce((function(e,o){return e.concat(Y(o)===T?function(e,t){void 0===t&&(t={});var o=t,n=o.placement,i=o.boundary,r=o.rootBoundary,s=o.padding,a=o.flipVariations,c=o.allowedAutoPlacements,l=void 0===c?R:c,p=me(n),d=p?a?z:z.filter((function(e){return me(e)===p})):_,u=d.filter((function(e){return l.indexOf(e)>=0}));0===u.length&&(u=d);var f=u.reduce((function(t,o){return t[o]=De(e,{placement:o,boundary:i,rootBoundary:r,padding:s})[Y(o)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:o,boundary:p,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):o)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,C=!0,k=b[0],P=0;P<b.length;P++){var j=b[P],S=Y(j),W=me(j)===V,B=[A,E].indexOf(S)>=0,I=B?"width":"height",M=De(t,{placement:j,boundary:p,rootBoundary:d,altBoundary:u,padding:l}),H=B?W?L:D:W?E:A;w[I]>x[I]&&(H=be(H));var $=be(H),G=[];if(r&&G.push(M[S]<=0),a&&G.push(M[H]<=0,M[$]<=0),G.every((function(e){return e}))){k=j,C=!1;break}O.set(j,G)}if(C)for(var U=function(e){var t=b.find((function(t){var o=O.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},q=m?3:1;q>0;q--){if("break"===U(q))break}t.placement!==k&&(t.modifiersData[n]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name,i=o.mainAxis,r=void 0===i||i,s=o.altAxis,a=void 0!==s&&s,c=o.boundary,l=o.rootBoundary,p=o.altBoundary,d=o.padding,u=o.tether,f=void 0===u||u,m=o.tetherOffset,h=void 0===m?0:m,g=De(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:p}),v=Y(t.placement),y=me(t.placement),b=!y,w=pe(v),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,C=t.rects.reference,k=t.rects.popper,P="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,j="number"==typeof P?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(O){if(r){var _,W="y"===w?A:D,B="y"===w?E:L,I="y"===w?"height":"width",M=O[w],H=M+g[W],z=M-g[B],R=f?-k[I]/2:0,$=y===V?C[I]:k[I],G=y===V?-k[I]:-C[I],U=t.elements.arrow,q=f&&U?oe(U):{width:0,height:0},N=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},F=N[W],X=N[B],Q=de(0,C[I],q[I]),Z=b?C[I]/2-R-Q-F-j.mainAxis:$-Q-F-j.mainAxis,ee=b?-C[I]/2+R+Q+X+j.mainAxis:G+Q+X+j.mainAxis,te=t.elements.arrow&&le(t.elements.arrow),ne=te?"y"===w?te.clientTop||0:te.clientLeft||0:0,ie=null!=(_=null==S?void 0:S[w])?_:0,re=M+ee-ie,se=de(f?K(H,M+Z-ie-ne):H,M,f?J(z,re):z);O[w]=se,T[w]=se-M}if(a){var ae,ce="x"===w?A:D,ue="x"===w?E:L,fe=O[x],he="y"===x?"height":"width",ge=fe+g[ce],ve=fe-g[ue],ye=-1!==[A,D].indexOf(v),be=null!=(ae=null==S?void 0:S[x])?ae:0,we=ye?ge:fe-C[he]-k[he]-be+j.altAxis,xe=ye?fe+C[he]+k[he]-be-j.altAxis:ve,Oe=f&&ye?(ke=de(we,fe,Ce=xe))>Ce?Ce:ke:de(f?we:ge,fe,f?xe:ve);O[x]=Oe,T[x]=Oe-fe}var Ce,ke;t.modifiersData[n]=T}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,n=e.name,i=e.options,r=o.elements.arrow,s=o.modifiersData.popperOffsets,a=Y(o.placement),c=pe(a),l=[D,L].indexOf(a)>=0?"height":"width";if(r&&s){var p=function(e,t){return ue("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:fe(e,_))}(i.padding,o),d=oe(r),u="y"===c?A:D,f="y"===c?E:L,m=o.rects.reference[l]+o.rects.reference[c]-s[c]-o.rects.popper[l],h=s[c]-o.rects.reference[c],g=le(r),v=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=m/2-h/2,b=p[u],w=v-d[l]-p[f],x=v/2-d[l]/2+y,O=de(b,x,w),C=c;o.modifiersData[n]=((t={})[C]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,o=e.options.element,n=void 0===o?"[data-popper-arrow]":o;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&ne(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,n=t.rects.reference,i=t.rects.popper,r=t.modifiersData.preventOverflow,s=De(t,{elementContext:"reference"}),a=De(t,{altBoundary:!0}),c=Te(s,n),l=Te(a,i,r),p=_e(c),d=_e(l);t.modifiersData[o]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":d})}}]});const Re={watch:{value:"updateLocation",placement:"updateLocation",getContainer:"updateLocation"},mounted(){this.updateLocation()},beforeDestroy(){this.destroyPopper()},methods:{createPopper(){const{wrapper:e}=this.$refs,t=this.$refs.popover.$el,o=ze(e,t,{placement:this.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},{...Ve,options:{offset:this.offset}}]});return window.addEventListener("animationend",this.updateLocation),window.addEventListener("transitionend",this.updateLocation),o},destroyPopper(){this.popper&&(window.removeEventListener("animationend",this.updateLocation),window.removeEventListener("transitionend",this.updateLocation),this.popper.destroy(),this.popper=null)},updateLocation(){this.getContainer?setTimeout((()=>{this.value&&(this.popper?this.popper.setOptions({placement:this.placement}):this.popper=this.createPopper())}),50):this.destroyPopper()}}};var $e;const Ge=r({i18n:{"zh-CN":{actions:[{text:"选项一"},{text:"选项二"},{text:"选项三"}],shortActions:[{text:"选项一"},{text:"选项二"}],actionsWithIcon:[{text:"选项一",icon:"add-o"},{text:"选项二",icon:"music-o"},{text:"选项三",icon:"more-o"}],actionsDisabled:[{text:"选项一",disabled:!0},{text:"选项二",disabled:!0},{text:"选项三"}],showIcon:"展示图标",placement:"弹出位置",darkTheme:"深色风格",lightTheme:"浅色风格",showPopover:"点击弹出气泡",actionOptions:"选项配置",customContent:"自定义内容",disableAction:"禁用选项",choosePlacement:"选择弹出位置",useGetContainer:"是否使用 getContainer"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement",useGetContainer:"Use GetContainer"}},components:{PressPopoverPlus:r({name:"PressPopoverPlus",options:{styleIsolation:"shared"},components:{PressPopup:e,PressIconPlus:t},mixins:[n,i(!1),($e={event:"touchstart",method:"onClickOutside"},{props:{closeOnClickOutside:{type:Boolean,default:!0}},data(){return{clickOutsideHandler:e=>{this.closeOnClickOutside&&!this.$el.contains(e.target)&&this[$e.method]()}}},mounted(){document.addEventListener($e.event,this.clickOutsideHandler)},beforeDestroy(){document.removeEventListener($e.event,this.clickOutsideHandler)}}),Re],props:{overlay:{type:Boolean,default:!1},trigger:{type:String,default:""},offset:{type:Array,default:()=>[0,8]},theme:{type:String,default:"light"},actions:{type:Array,default:()=>[]},placement:{type:String,default:"bottom"},getContainer:{type:[String,Function],default:""},closeOnClickAction:{type:Boolean,default:!0},zIndex:{type:Number,default:1},customStyle:{type:String,default:""},duration:{type:Number,default:200}},emits:["close","closed","input","open","opened","select","touchstart"],data:()=>({utils:o}),computed:{popoverStyle(){const{zIndex:e}=this;return`z-index: ${e}`},wrapperStyle(){const{customStyle:e}=this;return e},popupClass(){const{theme:e,placement:t,getContainer:n}=this;return o.bem2("popover",[e,t,{"custom-container":!!n}])},popupCustomClass:()=>""},mounted(){},methods:{setData(e){Object.keys(e).forEach((t=>{this[t]=e[t]}))},onClickWrapper(){"click"===this.trigger&&this.emitModelValue(!this.realModelValue)},onTouchstart(e){e.stopPropagation(),this.$emit("touchstart",e)},onClickAction(e,t){e.disabled||(this.$emit("select",e,t),this.closeOnClickAction&&this.$emit("input",!1))},onClickOutside(){this.$emit("input",!1)},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed")}}},[["render",function(e,t,o,n,i,r){const x=w("PressIconPlus"),O=w("PressPopup");return s(),a("div",{ref:"wrapper",class:d([i.utils.bem2("popover__wrapper")]),style:b(r.wrapperStyle),onClick:t[0]||(t[0]=h(((...e)=>r.onClickWrapper&&r.onClickWrapper(...e)),["stop"]))},[c(O,{ref:"popover",show:e.realModelValue,class:d([r.popupClass]),"wrap-class":r.popupCustomClass,overlay:o.overlay,position:"null",transition:"popover-zoom","lock-scroll":!1,duration:o.duration,"get-container":o.getContainer,"custom-style":r.popoverStyle,onBeforeLeave:r.onClose,onAfterLeave:r.onClosed,onBeforeEnter:r.onOpen,onAfterEnter:r.onOpened},{default:l((()=>[p("div",{class:d([i.utils.bem2("popover__arrow")])},null,2),p("div",{class:d([i.utils.bem2("popover__content")]),role:"menu"},[u(e.$slots,"default",{},(()=>[(s(!0),a(f,null,m(o.actions,((e,t)=>(s(),a("div",{key:t,class:d([i.utils.bem2("popover__action",{disabled:e.disabled,"with-icon":e.icon}),e.className]),onClick:h((o=>r.onClickAction(e,t)),["stop"])},[e.icon?(s(),g(x,{key:0,name:e.icon,"custom-class":"press-popover-action-icon"},null,8,["name"])):v("v-if",!0),p("div",{class:d([i.utils.bem2("popover__action-text"),"press-hairline--bottom"])},y(e.text),3)],10,["onClick"])))),128))]),!0)],2)])),_:3},8,["show","class","wrap-class","overlay","duration","get-container","custom-style","onBeforeLeave","onAfterLeave","onBeforeEnter","onAfterEnter"]),u(e.$slots,"reference",{},void 0,!0)],6)}],["__scopeId","data-v-558ce036"]]),PressButton:O,PressPickerPlus:C,PressPopupPlus:e,PressCell:k,PressGridItem:P,PressGrid:j,PressSwitch:S},data:()=>({show:{showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1},showPicker:!1,currentPlacement:"top",placements:["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0 0 6px;padding: 0;",useGetContainer:!1}),computed:{getContainer(){return this.useGetContainer?"body":""}},methods:{onPickerChange({value:e,index:t}){console.log("[onPickerChange]",e,t),setTimeout((()=>{this.show.placement=!0,this.currentPlacement=e}))},onSelect(e){console.log("[onSelect]",e),this.onGTip(e.text)},onOpen(){console.log("onOpen")},onClose(){console.log("onClose")},onOpened(){console.log("onOpened")},onClosed(){console.log("onClosed")}}},[["render",function(e,t,o,n,i,r){const d=w("press-switch"),u=w("press-cell"),h=w("PressButton"),g=w("PressPopoverPlus"),b=w("demo-block"),O=w("PressCell"),C=w("PressPickerPlus"),k=w("PressPopupPlus"),P=w("press-grid-item"),j=w("press-grid");return s(),a("div",{class:"demo-wrap demo-wrap--gray"},[c(u,{title:e.t("useGetContainer"),clickable:"",onClick:t[1]||(t[1]=()=>i.useGetContainer=!i.useGetContainer)},{"right-icon":l((()=>[c(d,{size:"22px",checked:i.useGetContainer,onChange:t[0]||(t[0]=()=>i.useGetContainer=!i.useGetContainer)},null,8,["checked"])])),_:1},8,["title"]),c(b,{title:e.t("basicUsage"),"header-style":i.headerStyle,"section-style":i.sectionStyle},{default:l((()=>[c(g,{modelValue:i.show.lightTheme,"onUpdate:modelValue":t[3]||(t[3]=e=>i.show.lightTheme=e),trigger:"click",actions:e.t("actions"),placement:"bottom-start","custom-style":"margin-left: 16px;","get-container":r.getContainer,onSelect:r.onSelect,onOpen:r.onOpen,onOpened:r.onOpened,onClose:r.onClose,onClosed:r.onClosed},{reference:l((()=>[c(h,{type:"primary",onClick:t[2]||(t[2]=e=>i.show.lightTheme=!i.show.lightTheme)},{default:l((()=>[x(y(e.t("lightTheme")),1)])),_:1})])),_:1},8,["modelValue","actions","get-container","onSelect","onOpen","onOpened","onClose","onClosed"]),c(g,{modelValue:i.show.darkTheme,"onUpdate:modelValue":t[5]||(t[5]=e=>i.show.darkTheme=e),trigger:"click",theme:"dark",actions:e.t("actions"),"get-container":r.getContainer,placement:"bottom","custom-style":"z-index: 1;margin-left: 16px;",onSelect:r.onSelect},{reference:l((()=>[c(h,{type:"primary",onClick:t[4]||(t[4]=e=>i.show.darkTheme=!i.show.darkTheme)},{default:l((()=>[x(y(e.t("darkTheme")),1)])),_:1})])),_:1},8,["modelValue","actions","get-container","onSelect"])])),_:1},8,["title","header-style","section-style"]),c(b,{title:e.t("placement"),"header-style":i.headerStyle,"section-style":i.sectionStyle},{default:l((()=>[c(O,{"is-link":"",title:e.t("choosePlacement"),onClick:t[6]||(t[6]=e=>{i.showPicker=!0})},null,8,["title"]),c(k,{show:i.showPicker,round:"",position:"bottom","get-container":"body","close-on-click-overlay":!0,onClose:t[8]||(t[8]=e=>i.showPicker=!1)},{default:l((()=>[p("div",{class:"demo-popover-box"},[c(g,{modelValue:i.show.placement,"onUpdate:modelValue":t[7]||(t[7]=e=>i.show.placement=e),theme:"dark",trigger:"click","z-index":1e3,"get-container":r.getContainer,actions:e.t("shortActions"),placement:i.currentPlacement,onSelect:r.onSelect},{reference:l((()=>[p("div",{class:"demo-popover-refer"})])),_:1},8,["modelValue","get-container","actions","placement","onSelect"])]),c(C,{columns:i.placements,onChange:r.onPickerChange},null,8,["columns","onChange"])])),_:1},8,["show"])])),_:1},8,["title","header-style","section-style"]),c(b,{title:e.t("actionOptions"),"header-style":i.headerStyle,"section-style":i.sectionStyle},{default:l((()=>[c(g,{modelValue:i.show.showIcon,"onUpdate:modelValue":t[10]||(t[10]=e=>i.show.showIcon=e),trigger:"click",actions:e.t("actionsWithIcon"),"get-container":r.getContainer,placement:"bottom-start","custom-style":"z-index: 2;margin-left: 16px;","z-index":1e3,onSelect:r.onSelect},{reference:l((()=>[c(h,{type:"primary",onClick:t[9]||(t[9]=e=>i.show.showIcon=!i.show.showIcon)},{default:l((()=>[x(y(e.t("showIcon")),1)])),_:1})])),_:1},8,["modelValue","actions","get-container","onSelect"]),c(g,{modelValue:i.show.disableAction,"onUpdate:modelValue":t[12]||(t[12]=e=>i.show.disableAction=e),trigger:"click","get-container":r.getContainer,actions:e.t("actionsDisabled"),"custom-style":"z-index: 2;margin-left: 16px;",onSelect:r.onSelect},{reference:l((()=>[c(h,{type:"primary",onClick:t[11]||(t[11]=e=>i.show.disableAction=!i.show.disableAction)},{default:l((()=>[x(y(e.t("disableAction")),1)])),_:1})])),_:1},8,["modelValue","get-container","actions","onSelect"])])),_:1},8,["title","header-style","section-style"]),c(b,{title:e.t("customContent"),"header-style":i.headerStyle,"section-style":i.sectionStyle},{default:l((()=>[c(g,{modelValue:i.show.customContent,"onUpdate:modelValue":t[14]||(t[14]=e=>i.show.customContent=e),trigger:"click",placement:"bottom-start","get-container":r.getContainer,"custom-style":"z-index: 1;margin-left: 16px;",onSelect:r.onSelect},{default:l((()=>[v(' <press-grid\n            square\n            clickable\n            :border="false"\n            :column-num="3"\n            custom-style="width: 240px;"\n          >\n            <press-grid-item\n              v-for="i in 6"\n              :key="i"\n              icon="photo-o"\n              :text="t(\'option\')"\n              @click="show.customContent = false"\n            />\n          </press-grid> '),c(j,{"column-num":3,"custom-style":"width: 240px;"},{default:l((()=>[(s(),a(f,null,m(6,((t,o)=>c(P,{key:o,icon:"photo-o",text:e.t("option")},null,8,["text"]))),64))])),_:1})])),reference:l((()=>[c(h,{type:"primary",onClick:t[13]||(t[13]=e=>i.show.customContent=!i.show.customContent)},{default:l((()=>[x(y(e.t("customContent")),1)])),_:1})])),_:1},8,["modelValue","get-container","onSelect"])])),_:1},8,["title","header-style","section-style"])])}],["__scopeId","data-v-f6bd85ae"]]);export{Ge as default};
