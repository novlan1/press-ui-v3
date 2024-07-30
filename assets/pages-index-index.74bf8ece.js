import{_ as e,d as n,a as t,o,c as i,r as a,n as l,g as s,b as r,P as c,u,e as d,f as p,h as g,w as v,i as h,j as m,k as _,l as y,s as f,L as E,D as S,m as O,t as C,F as b,p as N,q as L,S as P}from"./index-ea4fd344.js";import{l as w}from"./little-loader.a4dfa947.js";import{c as I}from"./index.21924a3a.js";var k,M={},T={},V={};
/*! *****************************************************************************
  	Copyright (c) Microsoft Corporation.
  
  	Permission to use, copy, modify, and/or distribute this software for any
  	purpose with or without fee is hereby granted.
  
  	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  	PERFORMANCE OF THIS SOFTWARE.
  	***************************************************************************** */
(k=V).__assign=function(){return k.__assign=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},k.__assign.apply(this,arguments)},k.__awaiter=function(e,n,t,o){return new(t||(t=Promise))((function(i,a){function l(e){try{r(o.next(e))}catch(n){a(n)}}function s(e){try{r(o.throw(e))}catch(n){a(n)}}function r(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,s)}r((o=o.apply(e,n||[])).next())}))},k.__generator=function(e,n){var t,o,i,a,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!((i=(i=l.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){l.label=a[1];break}if(6===a[0]&&l.label<i[1]){l.label=i[1],i=a;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(a);break}i[2]&&l.ops.pop(),l.trys.pop();continue}a=n.call(e,l)}catch(s){a=[6,s],o=0}finally{t=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},k.__rest=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},k.__spreadArray=function(e,n,t){if(t||2===arguments.length)for(var o,i=0,a=n.length;i<a;i++)!o&&i in n||(o||(o=Array.prototype.slice.call(n,0,i)),o[i]=n[i]);return e.concat(o||Array.prototype.slice.call(n))};var x={};Object.defineProperty(x,"__esModule",{value:!0});var D=w;x.loadCSS=function(e){for(var n,t=!0,o=document.getElementsByTagName("link"),i=0;i<o.length;i++)(null===(n=o[i])||void 0===n?void 0:n.href)&&-1!==o[i].href.indexOf(e)&&(t=!1);if(t){var a=document.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=e,document.getElementsByTagName("head")[0].appendChild(a)}},x.loadJS=function(e){return new Promise((function(n){D.loader(e,(function(){n(1)}))}))};var A={};Object.defineProperty(A,"__esModule",{value:!0}),A.insertHtml=function(e){var n,t=e.id,o=e.content,i=document.getElementById(t);null===(n=null==i?void 0:i.parentNode)||void 0===n||n.removeChild(i);var a=document.createElement("div");a.id=t,a.style.display="none",a.innerHTML=o,document.getElementsByTagName("body")[0].appendChild(a)},A.insertStyle=function(e){var n,t=e.id,o=e.content,i=document.getElementById(t);null===(n=null==i?void 0:i.parentNode)||void 0===n||n.removeChild(i);var a=document.createElement("style");a.id=t,a.type="text/css",a.innerHTML=o,document.getElementsByTagName("head")[0].appendChild(a)};var U={};Object.defineProperty(U,"__esModule",{value:!0});var B={LINE:"line",WRAP:"v-console-custom-tab",URL_INPUT_ID:"vConsolePluginInput",URL_JUMP_BUTTON:"vConsolePluginUrlJumpButton",GO_BACK_BUTTON:"vConsolePluginGoBackButton",PLUGIN_NAME_PREFIX:"__vc_plug_",PLUGIN_VERSION_NAME:"version_performance",PLUGIN_SIMPLE_VERSION_NAME:"simple_version"},R='<div class="'.concat(B.LINE,'"> </div>'),G="\n.".concat(B.WRAP," {\n  padding: 12px 16px 30px;\n  user-select: auto;\n}\n\n.").concat(B.WRAP," .").concat(B.LINE," {\n  line-height: 20px;\n  padding: 5px 0;\n  color: var(--VC-PURPLE, #6467f0);\n  word-break: break-all;\n  user-select: auto;\n}\n\n.").concat(B.WRAP," textarea {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  color: #323233;\n  line-height: inherit;\n  text-align: left;\n  background-color: transparent;\n  resize: none;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  margin-bottom: 10px;\n  height: 60px;\n  padding: 4px;\n  line-height: 16px;\n  font-size: 13px;\n  user-select: auto;\n}\n\n.").concat(B.WRAP," textarea:focus {\n  outline: none;\n}\n\n.").concat(B.WRAP," button {\n  height: 30px;\n  line-height: 1.2;\n  text-align: center;\n  border-radius: 2px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #07c160;\n  border: 1px solid #07c160;\n  font-size: 14px;\n  padding: 0 12px;\n  margin-right: 10px;\n}\n\n.vc-cmd,\n.vc-cmd-input {\n  user-select: auto !important;\n}\n\n#").concat(B.URL_INPUT_ID," {\n  user-select: auto !important;\n}\n");U.AEGIS_PERFORMANCE_KEY="__AEGIS_PERFORMANCE",U.AEGIS_PERFORMANCE_LIST=[{key:"dnsLookup",label:"Aegis DNS 查询"},{key:"tcp",label:"Aegis TCP 链接"},{key:"ttfb",label:"Aegis SSL 建连"},{key:"contentDownload",label:"Aegis contentDownload"},{key:"resourceDownload",label:"Aegis resourceDownload"},{key:"domParse",label:"Aegis DOM解析"},{key:"firstScreenTiming",label:"Aegis 首屏耗时"}],U.BUILD_LIST=[{key:"time",label:"Build Time"},{key:"author",label:"Build Author"},{key:"branch",label:"Build Branch"},{key:"netEnv",label:"Build Net Env"}],U.BUILD_NAME_MAP={build:"_vConsoleBuildInfo",commit:"_vConsoleCommitInfo"},U.COMMIT_LIST=[{key:"message",label:"Last Commit Message"},{key:"author",label:"Last Commit Author"},{key:"date",label:"Last Commit Time"},{key:"hash",label:"Last Commit Hash"}],U.DEBUG_CGI_ENV={KEY:"tip_debug_cgi_env",PROD:"prod",TEST:"test"},U.EMPTY_LINE=R,U.V_CONSOLE_DOM=B,U.V_CONSOLE_NO_DELAY={KEY:"vConsole_no_delay",VALUE:"1"},U.V_CONSOLE_STYLE_CONTENT=G,U.V_CONSOLE_URL="https://image-1251917893.file.myqcloud.com/igame/npm/vconsole%403.15.1/vconsole.min.js";var j={};Object.defineProperty(j,"__esModule",{value:!0});var Y,$=V,K=U;function q(e){var n;Y=(null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.value)||""}function F(){Y&&(location.href=Y)}function W(){var e,n;history.go(-1),null===(n=null===(e=window.vConsole)||void 0===e?void 0:e.hide)||void 0===n||n.call(e)}function J(e){var n,t,o,i,a,l,s,r,c,u,d,p,g,v,h,m,_,y,f='<div class="'.concat(K.V_CONSOLE_DOM.WRAP,'">');f+=(c=performance.timing||{},u=(null===(r=null===(s=performance)||void 0===s?void 0:s.wx)||void 0===r?void 0:r.timeOrigin)||c.fetchStart,d=c.domainLookupEnd-c.domainLookupStart,p=c.connectEnd-c.connectStart,g=c.responseStart-c.requestStart,v=c.responseEnd-c.responseStart,h=c.domContentLoadedEventStart-c.responseEnd,m=c.domLoading-u,_=c.loadEventEnd-u,y=c.domComplete-c.domInteractive,[{value:d,label:"DNS连接耗时"},{value:p,label:"TCP连接耗时"},{value:g,label:"后端响应时间"},{value:v,label:"HTML页面下载时间"},{value:h,label:"DOM时间"},{value:y,label:"解析DOM树耗时"},{value:m,label:"首次加载耗时"},{value:_,label:"整页耗时"}]).map((function(e){var n=e.label,t=e.value;return'<div class="'.concat(K.V_CONSOLE_DOM.LINE,'">').concat(n,"：").concat(+(+t).toFixed(2),"ms </div>")})).concat(K.EMPTY_LINE).concat((o=window[K.BUILD_NAME_MAP.build]||{},i=window[K.BUILD_NAME_MAP.commit]||{},a=K.BUILD_LIST.map((function(e){var n=e.key,t=e.label;return'<div class="'.concat(K.V_CONSOLE_DOM.LINE,'">').concat(t,": ").concat(o[n]||"","</div>")})),l=K.COMMIT_LIST.map((function(e){var n=e.key,t=e.label;return'<div class="'.concat(K.V_CONSOLE_DOM.LINE,'">').concat(t,": ").concat(i[n]||"","</div>")})),$.__spreadArray($.__spreadArray($.__spreadArray($.__spreadArray([],a,!0),[K.EMPTY_LINE],!1),l,!0),[K.EMPTY_LINE,K.EMPTY_LINE],!1).join("\n"))).concat(K.EMPTY_LINE).concat((n=window[K.AEGIS_PERFORMANCE_KEY]||{},t=K.AEGIS_PERFORMANCE_LIST.map((function(e){var t,o=e.key,i=e.label;return'<div class="'.concat(K.V_CONSOLE_DOM.LINE,'">').concat(i,": ").concat(null!==(t=n[o])&&void 0!==t?t:"","</div>")})),$.__spreadArray($.__spreadArray([K.EMPTY_LINE],t,!0),[K.EMPTY_LINE],!1).join("\n"))).join("\n"),f+='\n<textarea id="'.concat(K.V_CONSOLE_DOM.URL_INPUT_ID,'" type="text" placeholder="请输入跳转路径"></textarea>\n<button id="').concat(K.V_CONSOLE_DOM.URL_JUMP_BUTTON,'">跳转</button>\n<button id="').concat(K.V_CONSOLE_DOM.GO_BACK_BUTTON,'">返回上一页</button>\n  '),e(f+="</div>")}j.initVersionPlugin=function(){var e=new VConsole.VConsolePlugin(K.V_CONSOLE_DOM.PLUGIN_VERSION_NAME,"其他信息"),n=function(e){var n=document.getElementById("".concat(K.V_CONSOLE_DOM.PLUGIN_NAME_PREFIX).concat(K.V_CONSOLE_DOM.PLUGIN_VERSION_NAME));n&&(n.innerHTML=e)};e.on("renderTab",(function(e){J(e)})),e.on("showConsole",(function(){J(n)})),e.on("show",(function(){J(n)}));var t=[];return t.push({name:"隐藏vConsole",global:!1,onClick:function(){var e;null===(e=window.vConsole)||void 0===e||e.destroy()}}),e.on("addTool",(function(e){e(t)})),e.on("show",(function(){var e,n,t;null===(e=document.getElementById(K.V_CONSOLE_DOM.URL_INPUT_ID))||void 0===e||e.addEventListener("input",q),null===(n=document.getElementById(K.V_CONSOLE_DOM.URL_JUMP_BUTTON))||void 0===n||n.addEventListener("click",F),null===(t=document.getElementById(K.V_CONSOLE_DOM.GO_BACK_BUTTON))||void 0===t||t.addEventListener("click",W)})),e.on("hide",(function(){var e,n,t;null===(e=document.getElementById(K.V_CONSOLE_DOM.URL_INPUT_ID))||void 0===e||e.removeEventListener("input",q),null===(n=document.getElementById(K.V_CONSOLE_DOM.URL_JUMP_BUTTON))||void 0===n||n.removeEventListener("click",F),null===(t=document.getElementById(K.V_CONSOLE_DOM.GO_BACK_BUTTON))||void 0===t||t.addEventListener("click",W)})),e};var z={};Object.defineProperty(z,"__esModule",{value:!0});var H=I,X=U;z.initFeedbackPlugin=function(e){void 0===e&&(e="");var n=new VConsole.VConsolePlugin("feedback","反馈");n.on("init",(function(){}));var t=window.location.href,o=navigator.userAgent,i=document.cookie,a='<div class="'.concat(X.V_CONSOLE_DOM.WRAP,'">\n<div class="').concat(X.V_CONSOLE_DOM.LINE,'">url：').concat(t,'</div>\n<div class="').concat(X.V_CONSOLE_DOM.LINE,'">uid：').concat(e,'</div>\n<div class="').concat(X.V_CONSOLE_DOM.LINE,'">ua：').concat(o,'</div>\n<div class="').concat(X.V_CONSOLE_DOM.LINE,'">cookie：').concat(i,"</div>\n  </div>\n  ");n.on("renderTab",(function(e){e(a)}));var l=[];return l.push({name:"复制用户信息",global:!1,onClick:function(){var n,a={url:t,uid:e,UA:o,cookie:i};n=JSON.stringify(a),H.clipboardWeb(n).then((function(){alert("已复制，开去粘贴吧～")})).catch((function(){alert("当前环境暂不支持复制，请长按选择复制～")}))}}),n.on("addTool",(function(e){e(l)})),n};var Q={};Object.defineProperty(Q,"__esModule",{value:!0});var Z=U;Q.initSwitchEnvPlugin=function(){var e,n=new VConsole.VConsolePlugin("switchEnv","切换环境"),t=(e=window.sessionStorage.getItem(Z.DEBUG_CGI_ENV.KEY),console.log("value",e),e===Z.DEBUG_CGI_ENV.PROD?"正式":e===Z.DEBUG_CGI_ENV.TEST?"测试":"默认"),o='<div class="'.concat(Z.V_CONSOLE_DOM.WRAP,'">\n<div class="').concat(Z.V_CONSOLE_DOM.LINE,'">当前环境：').concat(t,"</div>\n  </div>");return n.on("renderTab",(function(e){e(o)})),n.on("addTool",(function(e){var n=[];n.push({name:"测试环境",global:!1,onClick:function(){console.log("已切换为测试CGI，即将刷新页面......"),window.sessionStorage.setItem(Z.DEBUG_CGI_ENV.KEY,Z.DEBUG_CGI_ENV.TEST),setTimeout((function(){location.reload()}),1e3)}}),n.push({name:"现网环境",global:!1,onClick:function(){console.log("已切换为正式CGI，即将刷新页面......"),window.sessionStorage.setItem(Z.DEBUG_CGI_ENV.KEY,Z.DEBUG_CGI_ENV.PROD),setTimeout((function(){location.reload()}),1e3)}}),e(n)})),n};var ee={};Object.defineProperty(ee,"__esModule",{value:!0});var ne=U;ee.initLoadDelayPlugin=function(){var e=new VConsole.VConsolePlugin("loadDelay","vConsole加载延迟"),n='<div class="'.concat(ne.V_CONSOLE_DOM.WRAP,'">\n  <div class="').concat(ne.V_CONSOLE_DOM.LINE,'">当前状态：').concat(window.sessionStorage.getItem(ne.V_CONSOLE_NO_DELAY.KEY)===ne.V_CONSOLE_NO_DELAY.VALUE?"已去掉延迟":"默认","</div>\n    </div>");e.on("renderTab",(function(e){e(n)}));var t=[];return t.push({name:"去除延迟",global:!1,onClick:function(){sessionStorage.setItem(ne.V_CONSOLE_NO_DELAY.KEY,ne.V_CONSOLE_NO_DELAY.VALUE),console.log("已设置去除延迟，即将刷新页面......"),setTimeout((function(){location.reload()}),1e3)}}),t.push({name:"恢复延迟",global:!1,onClick:function(){sessionStorage.removeItem(ne.V_CONSOLE_NO_DELAY.KEY),console.log("已设置恢复延迟，即将刷新页面......"),setTimeout((function(){location.reload()}),1e3)}}),t.push({name:"刷新页面",global:!1,onClick:function(){window.location.reload()}}),e.on("addTool",(function(e){e(t)})),e};var te={};Object.defineProperty(te,"__esModule",{value:!0});var oe=U;te.initMsdkPlugin=function(){var e=new VConsole.VConsolePlugin("msdk","msdk工具"),n='<div class="'.concat(oe.V_CONSOLE_DOM.WRAP,'">\n  <div class="').concat(oe.V_CONSOLE_DOM.LINE,'">msdk工具</div>\n  </div>');e.on("renderTab",(function(e){e(n)}));var t=[];return t.push({name:"关闭页面",global:!1,onClick:function(){var e,n;null===(n=null===(e=null===window||void 0===window?void 0:window.app)||void 0===e?void 0:e.closeWebView)||void 0===n||n.call(e)}}),e.on("addTool",(function(e){e(t)})),e};var ie={},ae={};function le(e,n,t,o){if(void 0===o&&(o=""),!e)return t||"";var i=new Date;10==="".concat(e).length&&(e*=1e3),i.setTime(e);var a={"M+":i.getMonth()+1,"d+":i.getDate(),"h+":i.getHours(),"m+":i.getMinutes(),"s+":i.getSeconds(),"q+":Math.floor((i.getMonth()+3)/3),S:i.getMilliseconds()},l=/(y+)/;o&&(l=new RegExp("(?:^|(?:[^".concat(o,"y]))(y+)")));var s=n.match(l);for(var r in(null==s?void 0:s[1])&&(n=n.replace(s[1],"".concat(i.getFullYear()).slice(4-s[1].length))),a){var c=new RegExp("(".concat(r,")"));if(o&&(c=new RegExp("(?:^|(?:[^".concat(o).concat(r[0],"]))(").concat(r,")"))),null==(s=n.match(c))?void 0:s[1]){var u=s.index,d=void 0===u?0:u,p=o?d+s[0].length-s[1].length:d,g="".concat(a[r]),v=s[1].length,h=1===v?g:"00".concat(g).slice("".concat(g).length);n=n.slice(0,p)+h+n.slice(p+v)}}return o&&(n=n.replace(new RegExp(o,"g"),"")),n}Object.defineProperty(ae,"__esModule",{value:!0}),ae.dateFormat=function(e,n){return le(new Date(e).getTime(),n)},ae.timeStampFormat=le,Object.defineProperty(ie,"__esModule",{value:!0});var se=U,re=ae;function ce(e){var n=window.igameVersion,t="";if(null==n?void 0:n.version){var o="".concat(re.dateFormat(new Date(+n.version),"yyyy-MM-dd hh:mm:ss"));t='\n  <div class="'.concat(se.V_CONSOLE_DOM.LINE,'">构建时间：').concat(o||"",'</div>\n  <div class="').concat(se.V_CONSOLE_DOM.LINE,'">构建作者：').concat(n.author||"","</div>\n  ")}else t=' <div class="'.concat(se.V_CONSOLE_DOM.LINE,'">无构建信息</div>');e('<div class="'.concat(se.V_CONSOLE_DOM.WRAP,'">').concat(t,"</div>"))}ie.initVersionSimplePlugin=function(){var e=new VConsole.VConsolePlugin(se.V_CONSOLE_DOM.PLUGIN_SIMPLE_VERSION_NAME,"版本信息"),n=function(e){var n=document.getElementById("".concat(se.V_CONSOLE_DOM.PLUGIN_NAME_PREFIX).concat(se.V_CONSOLE_DOM.PLUGIN_SIMPLE_VERSION_NAME));n&&(n.innerHTML=e)};return e.on("renderTab",(function(e){ce(e)})),e.on("showConsole",(function(){ce(n)})),e.on("show",(function(){ce(n)})),e},Object.defineProperty(T,"__esModule",{value:!0});var ue=V,de=x,pe=A,ge=U,ve=j,he=z,me=Q,_e=ee,ye=te,fe=ie;function Ee(e,n){var t=new VConsole(ue.__assign({},e||{}));return t.addPlugin(ve.initVersionPlugin()),t.addPlugin(he.initFeedbackPlugin()),t.addPlugin(me.initSwitchEnvPlugin()),t.addPlugin(_e.initLoadDelayPlugin()),t.addPlugin(fe.initVersionSimplePlugin()),t.addPlugin(ye.initMsdkPlugin()),n.forEach((function(e){t.addPlugin(e())})),pe.insertStyle({id:"vConsolePluginStyle",content:ge.V_CONSOLE_STYLE_CONTENT}),window&&!window.vConsole&&(window.vConsole=t),t}T.loadVConsole=function(e,n){return void 0===e&&(e={}),void 0===n&&(n=[]),new Promise((function(t){void 0===window.VConsole?de.loadJS(ge.V_CONSOLE_URL).then((function(){t(Ee(e,n))})):t(Ee(e,n))}))},Object.defineProperty(M,"__esModule",{value:!0});var Se=T,Oe={KEY:"SHOW_V_CONSOLE",VALUE:"1"},Ce={show:!1};function be(){Se.loadVConsole().then((function(e){window.vConsole=e}))}function Ne(){Ce.show=!0,localStorage.setItem(Oe.KEY,Oe.VALUE),be()}function Le(){var e;localStorage.removeItem(Oe.KEY),Ce.show=!1,null===(e=window.vConsole)||void 0===e||e.destroy()}M.V_CONSOLE_STATE=Ce,M.checkAndShowVConsole=function(){localStorage.getItem(Oe.KEY)===Oe.VALUE&&(Ce.show=!0,be())},M.closeVConsole=Le,M.showVConsole=Ne;var Pe=M.toggleVConsole=function(){return Ce.show?Le():Ne(),Ce.show};const we="collapse";var Ie;const ke=e({name:"PressCollapse",options:{...n},mixins:[(Ie=we,{provide(){return{[Ie]:this}},data:()=>({})})],props:{value:{type:[Array,String],default:()=>[]},accordion:{type:Boolean,default:!1},border:{type:Boolean,default:!0},defaultExpandAll:{type:Boolean,default:!1},...t},watch:{value:{handler(){this.updateExpanded()}},accordion:{handler(){this.updateExpanded()}}},created(){this.children=[]},methods:{updateExpanded(){this.children.forEach((e=>{e.updateExpanded()}))},switch(e,n){const{accordion:t,value:o}=this,i=e;e=t?n?e:"":n?(o||[]).concat(e):(o||[]).filter((n=>n!==e)),n?this.$emit("open",i):this.$emit("close",i),this.$emit("change",e),this.$emit("input",e)}}},[["render",function(e,n,t,s,r,c){return o(),i("div",{class:l(e.customClass+" press-collapse "+(t.border?"press-hairline--top-bottom":""))},[a(e.$slots,"default")],2)}]]);function Me({height:e,duration:n}){return[`height: ${e};`,`transition: height ${n}ms ease-in-out 0ms, top ${n}ms ease-in-out 0ms, -webkit-transform ${n}ms ease-in-out 0ms, transform ${n}ms ease-in-out 0ms;`,"transform-origin: 50% 50% 0px;"].join("")}function Te(e,n,t){s(e,".press-collapse-item__content").then((e=>e.height)).then((o=>{!function(e,n,t,o){if(n){if(0===o){const n=0;e.animationStyle=Me({height:"auto",duration:n})}else{const n=t?300:1;e.animationStyle=Me({height:`${o}px`,duration:n}),setTimeout((()=>{e.animationStyle=Me({height:"auto",duration:0})}),n)}return}e.animationStyle=Me({height:`${o}px`,duration:1}),r((()=>{e.animationStyle=Me({height:0,duration:300})}))}(e,n,t,o)}))}const Ve={name:"PressCollapseItem",options:{...n,styleIsolation:"shared"},components:{PressCell:c},mixins:[function(e,n={}){const t=n.indexKey||"index";return{inject:{[e]:{default:null}},computed:{[t](){const n=this;return n.bindRelation(),n[e]?n[e].children.indexOf(this):null}},watch:{disableBindRelation(e){e||this.bindRelation()}},created(){},mounted(){this.bindRelation()},beforeUnmount(){this.onBeforeMount()},methods:{bindRelation(){if(!this[e]||-1!==this[e].children.indexOf(this))return;const n=[...this[e].children,this];try{this[e]}catch(t){console.log("err",t)}this[e].children=n},onBeforeMount(){var n;const t=this;t[e]&&(t[e].children=t[e].children.filter((e=>e!==t)),null==(n=null==t?void 0:t.destroyCallback)||n.call(t))}}}}(we)],props:{size:{type:String,default:""},name:{type:String,default:""},title:{type:String,default:""},value:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""},disabled:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},border:{type:Boolean,default:!0},isLink:{type:Boolean,default:!0},titleClass:{type:String,default:""},contentClass:{type:String,default:""},...t},emits:[],data(){const{defaultExpandAll:e}=this[we];return{expanded:!!e,animation:{},mounted:!1,animationStyle:e?"height: auto;":"height: 0;"}},computed:{collapseItemClass(){const{disabled:e,expanded:n}=this;return u.bem2("collapse-item__title",{disabled:e,expanded:n})},collapseItemCustomClass(){let e="";return e=this.collapseItemClass,e},wrapperClass:()=>u.bem2("collapse-item__wrapper")},mounted(){this.updateExpanded(),this.mounted=!0},methods:{updateExpanded(){if(!this[we])return;const{value:e,accordion:n}=this[we],{children:t=[]}=this[we],{name:o}=this,i=t.indexOf(this),a=null==o?i:o,l=n?e===a:(e||[]).some((e=>e===a));l!==this.expanded&&Te(this,l,this.mounted),this.expanded=l},onClick(){if(this.disabled)return;const{name:e,expanded:n}=this,t=this[we].children.indexOf(this),o=null==e?t:e;this[we].switch(o,!n)}}};function xe(e,n){_()?this.$router.push(n||e):uni.navigateTo({url:e})}const De="INDEX_SCROLL_TOP",Ae=["hor-swiper-light"],Ue=`/pages/map/map?url=${`https://apis.map.qq.com/uri/v1/marker?marker=coord:${"40.839711"},${"111.738691"};title:;addr:&referer=tip&title=查看地图`}`;function Be(){let e={vue2Uni:!1,vue2NotUni:!1,vue3Uni:!1};return e={vue2Uni:!0,vue2NotUni:!0,vue3Uni:!0},e.vue3Uni=!1,_()&&(e.vue2NotUni=!1),e}const Re={pages:[{name:"Basic Components",list:[{url:"/press/button/button",navigationStyle:""},{url:"/press/cell/cell",navigationStyle:""},{url:"/press/col/col",navigationStyle:""},{url:"/press/icon-plus/icon-plus",navigationStyle:""},{url:"/press/image/image",navigationStyle:""},{url:"/press/popup-plus/popup-plus",navigationStyle:""},{url:"/press/style/style",navigationStyle:""},{url:"/press/text/text",navigationStyle:""},{url:"/press/toast/toast",navigationStyle:""},{url:"/press/transition/transition",navigationStyle:""}]},{name:"Form Components",list:[{url:"/press/calendar/calendar",navigationStyle:""},{url:"/press/cascader/cascader",navigationStyle:""},{url:"/press/checkbox/checkbox",navigationStyle:""},{url:"/press/code-input/code-input",navigationStyle:""},{url:"/press/datetime-picker/datetime-picker",navigationStyle:""},{url:"/press/field/field",navigationStyle:""},{url:"/press/form/form",navigationStyle:""},{url:"/press/picker-plus/picker-plus",navigationStyle:""},{url:"/press/radio/radio",navigationStyle:""},{url:"/press/rate/rate",navigationStyle:""},{url:"/press/search/search",navigationStyle:""},{url:"/press/slider/slider",navigationStyle:""},{url:"/press/stepper/stepper",navigationStyle:""},{url:"/press/switch/switch",navigationStyle:""},{url:"/press/uploader/uploader",navigationStyle:""}]},{name:"Action Components",list:[{url:"/press/action-sheet/action-sheet",navigationStyle:""},{url:"/press/dialog-plus/dialog-plus",navigationStyle:""},{url:"/press/dropdown-menu/dropdown-menu",navigationStyle:""},{url:"/press/loading-plus/loading-plus",navigationStyle:""},{url:"/press/notify/notify",navigationStyle:""},{url:"/press/overlay/overlay",navigationStyle:""},{url:"/press/popover-plus/popover-plus",navigationStyle:""},{url:"/press/pull-refresh/pull-refresh",navigationStyle:""},{url:"/press/share-sheet/share-sheet",navigationStyle:""},{url:"/press/swipe-cell/swipe-cell",navigationStyle:""},{url:"/press/teleport/teleport",navigationStyle:""}]},{name:"Display Components",list:[{url:"/press/avatar/avatar",navigationStyle:""},{url:"/press/badge/badge",navigationStyle:""},{url:"/press/barcode/barcode",navigationStyle:""},{url:"/press/card/card",navigationStyle:""},{url:"/press/circle/circle",navigationStyle:""},{url:"/press/collapse/collapse",navigationStyle:""},{url:"/press/count-down/count-down",navigationStyle:""},{url:"/press/count-to/count-to",navigationStyle:""},{url:"/press/divider/divider",navigationStyle:""},{url:"/press/empty/empty",navigationStyle:""},{url:"/press/fab/fab",navigationStyle:""},{url:"/press/image-preview/image-preview",navigationStyle:""},{url:"/press/link/link",navigationStyle:""},{url:"/press/list/list",navigationStyle:""},{url:"/press/notice-bar/notice-bar",navigationStyle:""},{url:"/press/progress/progress",navigationStyle:""},{url:"/press/q-r-code/q-r-code",navigationStyle:""},{url:"/press/skeleton/skeleton",navigationStyle:""},{url:"/press/steps/steps",navigationStyle:""},{url:"/press/sticky/sticky",navigationStyle:""},{url:"/press/swiper/swiper",navigationStyle:""},{url:"/press/tag/tag",navigationStyle:""}]},{name:"Navigation Components",list:[{url:"/press/back-top/back-top",navigationStyle:""},{url:"/press/grid/grid",navigationStyle:""},{url:"/press/index-bar/index-bar",navigationStyle:""},{url:"/press/nav-bar/nav-bar",navigationStyle:""},{url:"/press/sidebar/sidebar",navigationStyle:""},{url:"/press/tab/tab",navigationStyle:""},{url:"/press/tabbar/tabbar",navigationStyle:""},{url:"/press/tree-select/tree-select",navigationStyle:""}]},{name:"ESport Components",list:[{url:"/press/area/area",navigationStyle:""},{url:"/press/dialog/dialog",navigationStyle:""},{url:"/press/icon/icon",navigationStyle:""},{url:"/press/loading/loading",navigationStyle:""},{url:"/press/pagination/pagination",navigationStyle:""},{url:"/press/picker/picker",navigationStyle:""},{url:"/press/popover/popover",navigationStyle:""},{url:"/press/popup/popup",navigationStyle:""}]}]};function Ge(){let e=Re.pages.filter((e=>e.list&&e.list.length)),n=[];return _()&&(n=Ae),e=e.map((e=>({...e,list:e.list.filter((e=>{const t=e.url.split("/"),o=t[t.length-1];return n.indexOf(o)<0}))}))),e}const je=e({i18n:{"zh-CN":{share:"分享",name:"全端兼容 高性能",detail:"Press UI 是一套易用的、灵活的、基于 uni-app 的组件库",otherAbility:"其他功能",toggleLanguage:"切换语言",toggleVConsole:"切换VConsole",launchApp:"拉起APP",otherProject:"相关项目",checkNormal:"基础",checkPure:"非 Uni App",checkVue3:"Vue3"},"en-US":{share:"Share",name:"Fully Compatible",detail:"Press UI is an easy-to-use, uni-app-based component library",otherAbility:"Other Ability",toggleLanguage:"Toggle Language",toggleVConsole:"Toggle VConsole",launchApp:"Launch App",otherProject:"Other Project",checkNormal:"Vue2 Uni App Project",checkPure:"Vue2 Not Uni App Project",checkVue3:"Vue3 Uni App Project"}},components:{PressDemoIndex:e({name:"PressDemoIndex",options:{styleIsolation:"shared"},components:{PressSection:O,PressCell:c,PressCollapse:ke,PressCollapseItem:e(Ve,[["render",function(e,n,t,s,r,c){const u=d("press-cell");return o(),i("div",{class:l(e.customClass+" press-collapse-item "+(0!==e.index?"press-hairline--top":""))},[p(" 【修改点】cell 增加 center，垂直居中 "),g(u,{size:t.size,title:t.title,"title-class":t.titleClass,icon:t.icon,value:t.value,label:t.label,"is-link":t.isLink,clickable:t.clickable,border:t.border&&r.expanded,"custom-class":c.collapseItemCustomClass,"hover-class":"press-cell--hover",center:"",onClick:c.onClick},{title:v((()=>[a(e.$slots,"title",{},void 0,!0)])),"right-icon":v((()=>[a(e.$slots,"right-icon",{},void 0,!0)])),default:v((()=>[a(e.$slots,"value",{},void 0,!0)])),_:3},8,["size","title","title-class","icon","value","label","is-link","clickable","border","custom-class","onClick"]),h("div",{class:l(c.wrapperClass),style:m(r.animationStyle)},[h("div",{class:l(["press-collapse-item__content",t.contentClass])},[a(e.$slots,"default",{},void 0,!0)],2)],6)],2)}],["__scopeId","data-v-b8e48d19"]])},mixins:[],props:{logoPic:{type:String,default:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/press-ui-full-logo.png"},slogan:{type:String,default:"全端兼容 高性能"},sloganDetail:{type:String,default:"Press UI 是一套易用的、灵活的、基于 uni-app 的组件库"},showPages:{type:Array,default:()=>[]}},data:()=>({scrollTop:0,sectionStyle:{header:"font-weight: 500;margin-bottom: 0px;",color:"#007aff"},activeNames:Array.from({length:20}).map(((e,n)=>`${n}`))}),computed:{},mounted(){this.init()},beforeDestroy(){this.onBeforeDestroy()},beforeUnmount(){this.onBeforeDestroy()},methods:{init(){this.scrollTop=+localStorage.getItem(De)||0},onBeforeDestroy(){localStorage.setItem(De,this.scrollTop)},onScroll(e){this.scrollTop=e.target.scrollTop},onToggleLanguage(){console.log("[onToggleLanguage]"),function(e){if(y())return;const n=f.get(E)||S,t=Number(!Number(n));f.set(E,t),e("正在切换语言"),window.location.reload()}(this.onGTip)},getUniqueKey:(e,n)=>`${e}-${n}`,onOpenVConsole(){Pe()},onJumpToSharePage(){xe.call(this,"/pages/share/share","/pages/press/share/share")},onChange(e){this.activeNames=e},clickComponent(e,n){console.log("item",n),"string"!=typeof e.event?xe.call(this,`/pages${e.url}`):this[e.event](e,n)},onJumpToOtherDemo(e){const{link:n,mpWeixin:t,mpQQ:o}=e;n&&(this.$toast.loading({message:"正在跳转...",forbidClick:!0,duration:300,loadingType:"spinner"}),this.onBeforeDestroy(),setTimeout((()=>{window.location.href=n}),300))},onJumpToMap(){xe.call(this,Ue)},onJumpToLaunchApp(){xe.call(this,"/pages/launch-app/launch-app","/pages/press/launch-app/launch-app")}}},[["render",function(e,n,t,a,l,s){const r=d("press-section"),c=d("PressCell"),u=d("press-collapse-item"),p=d("press-collapse"),m=P;return o(),i("div",{class:"index-page"},[g(m,{"scroll-y":"",class:"scroll-view","scroll-top":l.scrollTop,onScroll:s.onScroll},{default:v((()=>[h("div",{class:"index-page__header"},[h("img",{class:"index-page__header-bg",src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/uniui-header-bg.png",mode:"widthFix"}),h("img",{class:"index-page__header-logo",src:t.logoPic,mode:"aspectFit"},null,8,["src"]),h("div",{class:"index-page__header-content"},[h("div",{class:"index-page__header-title"},C(t.slogan),1),h("div",{class:"index-page__header-info"},[h("span",{class:"index-page__header-subtitle"},C(t.sloganDetail),1)])])]),h("div",{class:"index-page__main"},[h("div",{class:"index-page__card"},[g(p,{value:l.activeNames,"default-expand-all":"",onChange:s.onChange},{default:v((()=>[(o(!0),i(b,null,N(t.showPages,((e,n)=>(o(),L(u,{key:e.key,name:`${n}`,"is-link":!1},{title:v((()=>[g(r,{title:e.title,color:l.sectionStyle.color,type:"line",clickable:!0,"header-style":l.sectionStyle.header,active:l.activeNames.indexOf(`${n}`)>-1},null,8,["title","color","header-style","active"])])),default:v((()=>[(o(!0),i(b,null,N(e.list,((n,t)=>(o(),L(c,{key:s.getUniqueKey("nav",t),"is-link":"",title:n.title,"custom-class":"component-cell",onClick:()=>s.clickComponent(n,e)},null,8,["title","onClick"])))),128))])),_:2},1032,["name"])))),128))])),_:1},8,["value","onChange"])])])])),_:1},8,["scroll-top","onScroll"])])}],["__scopeId","data-v-722fd980"]])},mixins:[],data:()=>({pages:Ge(),isNotInUni:_(),showOtherDemoMap:Be(),helpConfig:{}}),computed:{computedPages(){const{pages:e,quickLinkList:n}=this,t=e.map(((e,n)=>{const{list:t}=e;return{key:this.getUniqueKey("section",n),title:this.getComponentTypeTitle(e),list:t.map((e=>({...e,title:this.getNavName(e)})))}}));return t.push({key:"section-otherAbility",title:this.t("otherAbility"),list:[{title:this.t("toggleLanguage"),event:"onToggleLanguage"},{title:this.t("toggleVConsole"),event:"onOpenVConsole"}]}),n.length&&t.push({key:"section-quickList",title:this.t("otherProject"),list:n.map((e=>({...e,title:e.label,event:"onJumpToOtherDemo"})))}),t},quickLinkList(){const{showOtherDemoMap:e,helpConfig:n={}}=this;let t=n.quickLinkList||[];return e.vue2Uni||(t=t.filter((e=>"vue2-uni"!==e.name))),e.vue2NotUni||(t=t.filter((e=>"vue2-not-uni"!==e.name))),e.vue3Uni||(t=t.filter((e=>"vue3-uni"!==e.name))),t}},mounted(){this.getHelpData()},beforeDestroy(){},beforeUnmount(){},methods:{getNavName(e){const n=e.url.split("/");return this.t(`titleMap.${n[n.length-1]}`)},getComponentTypeTitle(e){return this.t(`titleMap.${e.name}`)||e.name},getUniqueKey:(e,n)=>`${e}-${n}`,getHelpData(){var e;(e="https://tip-components-1251917893.cos.ap-guangzhou.myqcloud.com/rb/front-open-config__match__default__press_ui_helpe_config.json",new Promise(((n,t)=>{_()?fetch(e).then((e=>200===e.status?e.json():{})).then((e=>{n(e)})).catch((e=>{t(e)})):uni.request({url:e,data:{},method:"GET",sslVerify:!0,success:({data:e})=>{n(e)},fail:e=>{t(e)}})}))).then((e=>{this.helpConfig=e}))}}},[["render",function(e,n,t,i,a,l){const s=d("PressDemoIndex");return o(),L(s,{"show-pages":l.computedPages,slogan:e.t("name"),"slogan-detail":e.t("detail")},null,8,["show-pages","slogan","slogan-detail"])}]]);export{je as default};
