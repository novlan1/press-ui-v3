import{P as e}from"./press-button.2236d5eb.js";import{i as t}from"./utils.d8f13396.js";import{l as o}from"./little-loader.a4dfa947.js";import{_ as i,o as s,c as l,h as n,w as a,F as d,p as r,e as u,i as c,v as m,t as p,f as y,q as f}from"./index-66fd861e.js";import"./press-icon-plus.a1094e70.js";import"./style.0f94ff97.js";import"./add-unit.9de8b2f7.js";import"./press-info.8563e54c.js";import"./press-component.573dfcec.js";import"./press-loading-plus.6ff974e3.js";import"./press-loading.084df768.js";import"./button.e606098b.js";import"./version.0d1ce575.js";var w={},g={},v={};!function(e){function t(o){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}({get exports(){return v},set exports(e){v=e}});var b={};function k(){return(navigator.userAgent||"").toLowerCase()}function S(){var e=k();return/iphone|ipod|ipad|Mac OS X/i.test(e)||!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}function h(){var e=k(),t=-1!==e.indexOf("micromessenger"),o=-1!==e.indexOf("wxwork"),i=-1!==e.indexOf(" qq/"),s=-1!==e.indexOf(" igameapp/"),l=-1!==e.indexOf(" gamelife/"),n=-1!==e.indexOf("android"),a=S(),d=a,r=-1!==e.indexOf(" msdk/"),u=-1!==e.indexOf(" webviewx msdk/"),c=-1!==e.indexOf(" msdk/5"),m=-1!==e.indexOf("ingame"),p=r||m,y=-1!==e.indexOf("gamehelper"),f=-1!==e.indexOf("gamehelper_20004"),w=-1!==e.indexOf("miniprogram")||"undefined"!=typeof window&&"miniprogram"===window.__wxjs_environment,g=-1!==e.indexOf("lolapp"),v=/(?:Windows Phone)/.test(e);return{isWeixin:t,isWorkWeixin:o,isQQ:i,isPvpApp:s,isTipApp:l,isAndroid:n,isIos:a,isIOS:d,isMsdk:r,isMsdkX:u,isMsdkV5:c,isSlugSdk:m,isInGame:p,isGHelper:y,isGHelper20004:f,isMiniProgram:w,isLolApp:g,isWindowsPhone:v,isSymbian:/(?:SymbianOS)/.test(e)||v,isPc:!e.match(/(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i)}}Object.defineProperty(b,"__esModule",{value:!0});b.checkNodeEnv=function(){return!("undefined"!=typeof window&&window.navigator)},b.checkUAIsIOS=S,b.getEnvUAType=h,b.initEnv=function(){return h()},Object.defineProperty(g,"__esModule",{value:!0});var M=b,_=o;function x(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var C=x(v);function O(e){if(e||(e=M.initEnv()),console.info("[closeMsdkWebview] env",e),e.isMsdkV5&&"function"==typeof window.msdkCall){window.msdkCall('{"MsdkMethod":"closeWebView"}')}else e.isMsdk?"function"==typeof window.msdkCloseWebview?(!e.isIOS||e.isIOS&&window.msdkiOSHandler)&&window.msdkCloseWebview():"function"==typeof window.msdkCallNative&&window.msdkCallNative('{"MsdkMethod":"CloseWebview"}'):e.isSlugSdk&&window.customBrowserInterface&&window.customBrowserInterface.closeWebview()}var W=function(e){var t,o;void 0===e&&(e=!0);var i=M.getEnvUAType(),s=i.isSlugSdk,l=i.isMsdkV5,n=i.isMsdk,a=i.isMsdkX,d=i.isAndroid;if(s){if("object"===C.default(window.customBrowserInterface)){var r=e?"hideUi":"showUi";window.customBrowserInterface[r]()}}else if(l){var u=JSON.stringify({MsdkMethod:"setFullScreen",isFullScreen:!!e});setTimeout((function(){var e,t;d?null===(e=window.msdkCall)||void 0===e||e.call(window,u):window.WebViewJavascriptBridge?null===(t=window.msdkCall)||void 0===t||t.call(window,u):document.addEventListener("WebViewJavascriptBridgeReady",(function(){var e;null===(e=window.msdkCall)||void 0===e||e.call(window,u)}),!1)}),100)}else if(n&&!a){var c=JSON.stringify({MsdkMethod:"WGSetFullScreen",isFullScreen:!!e});d?null===(t=window.msdkCall)||void 0===t||t.call(window,"WGSetFullScreen",c):window.WebViewJavascriptBridge?null===(o=window.msdkCall)||void 0===o||o.call(window,"WGSetFullScreen",c):document.addEventListener("WebViewJavascriptBridgeReady",(function(){var e;null===(e=window.msdkCall)||void 0===e||e.call(window,"WGSetFullScreen",c)}),!1)}};g.addMsdkNativeCallbackListener=function(e){var t=M.initEnv();t.isMsdk&&!t.isMsdkV5&&("function"==typeof window.setMsdkCallback?window.setMsdkCallback(e):"function"==typeof window.msdkAddNativeCallbackObserver&&window.msdkAddNativeCallbackObserver(e))},g.callJsBrowserAdapter=function(){return new Promise((function(e){var t=M.initEnv();t.isMsdkV5?_.loader("https://image-1251917893.file.myqcloud.com/igame/common/js/msdkJsAdapterV5.js",(function(){e(!0)})):t.isMsdk?t.isMsdkX?_.loader("https://image-1251917893.file.myqcloud.com/igame/common/js/msdkJsAdapterV3_embedded.js",(function(){e(!0)})):_.loader("https://image-1251917893.file.myqcloud.com/igame/common/js/msdkJsAdapterV3.js",(function(){e(!0)})):t.isSlugSdk&&_.loader("https://tiem-cdn.qq.com/slugteam/sdk/browser_adapt.js",(function(){e(!0)}))}))},g.callJsReSetFullScreen=function(){W(!1)},g.callJsSetFullScreen=W,g.closeMsdkWebview=O,g.closeWebView=function(){console.log("[closeWebView] call close webview");var e=M.initEnv();e.isMsdk?O():e.isSlugSdk?window.customBrowserInterface&&window.customBrowserInterface.closeWebview():(window.location.href="about:blank",console.log("[closeWebView] call close webview failed"))},g.removeMsdkNativeCallbackListener=function(e){var t=M.initEnv();t.isMsdk&&!t.isMsdkV5&&"function"==typeof window.msdkRemoveNativeCallbackObserver&&window.msdkRemoveNativeCallbackObserver(e)},g.sendToMsdkNative=function(e){void 0===e&&(e="");var t=M.initEnv();t.isMsdk&&!t.isMsdkV5?"function"==typeof window.msdkCallNative?window.msdkCallNative(e):"function"==typeof window.msdkCall&&window.msdkCall("WGSendMessageToNative",'{"MsdkMethod":"WGSendMessageToNative","MsgData":"'.concat(e,'"}')):t.isAndroid?confirm(e):t.isIOS&&(window.location.href=encodeURIComponent(e))},Object.defineProperty(w,"__esModule",{value:!0});var j=g,I=b;function P(e,t){void 0===window.customBrowserInterface?j.callJsBrowserAdapter().then((function(){var o;null===(o=window.customBrowserInterface)||void 0===o||o.openMiniProgram(e,t)})):window.customBrowserInterface.openMiniProgram(e,t)}var A=w.launchMiniProgramInGame=function(e){var t=e.appId,o=void 0===t?"":t,i=e.path,s=void 0===i?"":i,l=e.type,n=void 0===l?0:l,a=e.isWxMp,d=void 0===a||a;if(I.initEnv().isSlugSdk)return P(o,s);var r={};r=d?{MsdkMethod:"WGLaunchMiniApp",userName:o,path:s,type:n}:{MsdkMethod:"WGLaunchQQMiniApp",miniProgramAppid:o,miniProgramPath:s,type:n};var u=JSON.stringify(r);void 0===window.msdkShare?j.callJsBrowserAdapter().then((function(){window.msdkShare(u)})):window.msdkShare(u)};w.launchMiniProgramInSlugSdk=P;const B=i({i18n:{"zh-CN":{type:"按钮类型",size:"按钮尺寸",icon:"图标按钮",loading:"加载状态",disabled:"禁用状态",shape:"按钮形状",default:"默认按钮",primary:"主要按钮",info:"信息按钮",danger:"危险按钮",warning:"警告按钮",large:"大号按钮",normal:"普通按钮",small:"小型按钮",mini:"迷你按钮",plain:"朴素按钮",square:"方形按钮",round:"圆形按钮",hairline:"细边框",hairlineButton:"细边框按钮",loadingText:"加载中...",router:"页面导航",urlRoute:"URL 跳转",vueRoute:"路由跳转",customColor:"自定义颜色",pure:"单色按钮",gradient:"渐变色按钮",blockElement:"块级元素"},"en-US":{type:"Type",size:"Size",icon:"Icon",loading:"Loading",disabled:"Disabled",shape:"Shape",default:"Default",primary:"Primary",info:"Info",danger:"Danger",warning:"Warning",large:"Large",normal:"Normal",small:"Small",mini:"Mini",plain:"Plain",square:"Square",round:"Round",hairline:"Hairline",hairlineButton:"Hairline",loadingText:"Loading...",router:"Router",urlRoute:"URL",vueRoute:"Vue Router",customColor:"Custom Color",pure:"Pure",gradient:"Gradient",blockElement:"Block Element"}},components:{PressButton:e},data:()=>({customStyle:"margin-right: 16px;"}),onReady(){},methods:{onLaunchMp(e){console.log("[launchMiniProgramInGame]"),A({appId:"wx99c1c10a389e7433",isWxMp:!e})},onClick(e){console.log(e)},onVibrateLong(){t()||uni.vibrateLong({success(){console.log("success")},fail(){console.log("fail")}})},onVibrateShort(){navigator.vibrate(1e3),t()||uni.vibrateLong({success(){console.log("success")},fail(){console.log("fail")}})}}},[["render",function(e,t,o,i,w,g){const v=u("press-button"),b=u("demo-block");return s(),l("div",{class:"demo-wrap"},[n(b,{title:e.t("type")},{default:a((()=>[c("div",{class:"demo-button-row"},[n(v,{type:"default","custom-style":w.customStyle,onClick:g.onClick},{default:a((()=>[m(p(e.t("default")),1)])),_:1},8,["custom-style","onClick"]),n(v,{type:"primary","custom-style":`${w.customStyle}`,onClick:g.onVibrateShort},{default:a((()=>[m(p(e.t("primary")),1)])),_:1},8,["custom-style","onClick"]),n(v,{type:"info",onClick:g.onVibrateLong},{default:a((()=>[m(p(e.t("info")),1)])),_:1},8,["onClick"])]),c("div",{class:"demo-button-row"},[n(v,{type:"warning","custom-style":w.customStyle,onClick:g.onLaunchMp},{default:a((()=>[m(p(e.t("warning")),1)])),_:1},8,["custom-style","onClick"]),n(v,{type:"danger",onClick:t[0]||(t[0]=e=>g.onLaunchMp(1))},{default:a((()=>[m(p(e.t("danger")),1)])),_:1})])])),_:1},8,["title"]),n(b,{title:e.t("plain")},{default:a((()=>[c("div",{class:"demo-button-row"},[n(v,{plain:"",type:"default","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("plain")),1)])),_:1},8,["custom-style"]),n(v,{plain:"",type:"primary","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("plain")),1)])),_:1},8,["custom-style"])]),n(v,{plain:"",type:"info"},{default:a((()=>[m(p(e.t("plain")),1)])),_:1})])),_:1},8,["title"]),n(b,{title:e.t("hairline")},{default:a((()=>[n(v,{plain:"",hairline:"",type:"primary","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("hairlineButton")),1)])),_:1},8,["custom-style"]),n(v,{plain:"",hairline:"",type:"info"},{default:a((()=>[m(p(e.t("hairlineButton")),1)])),_:1})])),_:1},8,["title"]),n(b,{title:e.t("disabled")},{default:a((()=>[c("div",{class:"demo-button-row"},[n(v,{disabled:"",type:"primary","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("disabled")),1)])),_:1},8,["custom-style"]),n(v,{disabled:"",type:"info","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("disabled")),1)])),_:1},8,["custom-style"])]),n(v,{disabled:"",type:"primary","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("disabled")),1)])),_:1},8,["custom-style"])])),_:1},8,["title"]),n(b,{title:e.t("loading")},{default:a((()=>[n(v,{loading:"",type:"primary","custom-style":w.customStyle},null,8,["custom-style"]),n(v,{loading:"",type:"primary","loading-type":"spinner","custom-style":w.customStyle},null,8,["custom-style"]),n(v,{loading:"",type:"info","loading-text":e.t("loadingText")},null,8,["loading-text"])])),_:1},8,["title"]),n(b,{title:e.t("shape")},{default:a((()=>[n(v,{square:"",type:"primary","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("square")),1)])),_:1},8,["custom-style"]),n(v,{round:"",type:"info"},{default:a((()=>[m(p(e.t("round")),1)])),_:1})])),_:1},8,["title"]),n(b,{title:e.t("icon")},{default:a((()=>[n(v,{icon:"star-o",type:"primary","custom-style":w.customStyle},null,8,["custom-style"]),n(v,{icon:"star-o",type:"primary","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("button")),1)])),_:1},8,["custom-style"]),n(v,{icon:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar-transparent-2.png"},{default:a((()=>[m(p(e.t("button")),1)])),_:1})])),_:1},8,["title"]),n(b,{title:e.t("size")},{default:a((()=>[c("div",{class:"demo-button-row"},[n(v,{type:"primary",size:"large"},{default:a((()=>[m(p(e.t("large")),1)])),_:1})]),n(v,{type:"primary",size:"normal","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("normal")),1)])),_:1},8,["custom-style"]),n(v,{type:"primary",size:"small","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("small")),1)])),_:1},8,["custom-style"]),n(v,{type:"primary",size:"mini"},{default:a((()=>[m(p(e.t("mini")),1)])),_:1})])),_:1},8,["title"]),n(b,{title:e.t("blockElement")},{default:a((()=>[n(v,{type:"primary",block:""},{default:a((()=>[m(p(e.t("blockElement")),1)])),_:1})])),_:1},8,["title"]),n(b,{title:e.t("customColor")},{default:a((()=>[n(v,{color:"#7232dd","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("pure")),1)])),_:1},8,["custom-style"]),n(v,{color:"#7232dd",plain:"","custom-style":w.customStyle},{default:a((()=>[m(p(e.t("pure")),1)])),_:1},8,["custom-style"]),n(v,{color:"linear-gradient(to right, #4bb0ff, #6149f6)"},{default:a((()=>[m(p(e.t("gradient")),1)])),_:1})])),_:1},8,["title"]),(s(),l(d,null,r([0,1,2],((e,t)=>n(b,{key:t,title:1===t?"E-SPORT-DISABLE":2===t?"E-SPORT-LOADING":"E-SPORT"},{default:a((()=>[c("div",{class:"demo-button-row"},[y(" :size=\"{width: '136px', height: '36px'}\" "),n(v,{type:"e-sport-primary",disabled:1===t,loading:2===t,"custom-style":w.customStyle},{default:a((()=>[m(" primary ")])),_:2},1032,["disabled","loading","custom-style"]),n(v,{type:"e-sport-primary-bg",disabled:1===t,loading:2===t,"custom-style":w.customStyle},{default:a((()=>[m(" primary-bg ")])),_:2},1032,["disabled","loading","custom-style"])]),c("div",{class:"demo-button-row"},[n(v,{type:"e-sport-primary-bg-lg",disabled:1===t,loading:2===t,"custom-style":w.customStyle},{default:a((()=>[m(" primary-bg-lg ")])),_:2},1032,["disabled","loading","custom-style"])]),c("div",{class:"demo-button-row"},[n(v,{type:"e-sport-primary-bg-xl",disabled:1===t,loading:2===t,"custom-style":w.customStyle},{default:a((()=>[m(" primary-bg-xl ")])),_:2},1032,["disabled","loading","custom-style"])]),c("div",{class:"demo-button-row"},[n(v,{type:"e-sport-secondary",disabled:1===t,loading:2===t,"custom-style":w.customStyle,size:{width:"136px",height:"36px"}},{default:a((()=>[m(" secondary ")])),_:2},1032,["disabled","loading","custom-style"]),y(" 线框的loader图片是透明的，没效果，直接隐藏 "),2!==t?(s(),f(v,{key:0,type:"e-sport-border",disabled:1===t,loading:2===t,"custom-style":w.customStyle,size:{width:"136px",height:"36px"}},{default:a((()=>[m(" border ")])),_:2},1032,["disabled","loading","custom-style"])):y("v-if",!0)])])),_:2},1032,["title"]))),64))])}],["__scopeId","data-v-90e89349"]]);export{B as default};
