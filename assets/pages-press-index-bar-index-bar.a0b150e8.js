import{P as t}from"./press-cell.c8fe1713.js";import{_ as e,o,c as s,h as r,w as n,i,r as l,x as c,F as a,p as h,j as p,t as d,f as u,S as f,n as x,e as m}from"./index-5ce068d6.js";import{a as g}from"./color.3a05f6e0.js";import{b as y,f as T}from"./rect.b47c0dff.js";import{n as S,b as v}from"./add-unit.39434bfe.js";import{d as b,a as k}from"./press-component.7a68e6d8.js";import{h as I}from"./parent-map.b443f4cc.js";import{P as w,C as j}from"./relation.8b10893c.js";import{S as A}from"./scroll-view.d204debc.js";import"./press-icon-plus.86d78210.js";import"./style.0f94ff97.js";import"./press-info.be4091c7.js";import"./utils.29d4c09b.js";import"./link.2803ba37.js";import"./event.eea0932c.js";import"./support-passive.bc409298.js";import"./version.4c093b8d.js";const C=e({name:"PressIndexBar",options:{...b,styleIsolation:"shared"},mixins:[w(I),A],props:{sticky:{type:Boolean,default:!0},zIndex:{type:Number,default:1},highlightColor:{type:String,default:g},stickyOffsetTop:{type:Number,default:0},indexList:{type:Array,default:()=>(()=>{const t=[],e="A".charCodeAt(0);for(let o=0;o<26;o++)t.push(String.fromCharCode(e+o));return t})()},windowTop:{type:Number,default:0},...k},emits:["select"],data:()=>({activeAnchorIndex:null,showSidebar:!1,sidebar:{},curScrollTop:0}),created(){this.scrollTop=0,this.children=[]},mounted(){this.updateData()},methods:{setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},updateData(){S((()=>{null!=this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showSidebar=!!this.children.length,S((()=>{this.setRect().then((()=>{this.onScroll()}))}))}),0)}))},setRect(){return Promise.all([this.setAnchorsRect(),this.setListRect(),this.setSiderbarRect()])},setAnchorsRect(){return Promise.all(this.children.map((t=>y(t,".press-index-anchor-wrapper").then((e=>(Object.assign(t,{height:e.height,top:e.top+this.scrollTop}),t))))))},setListRect(){return y(this,".press-index-bar").then((t=>{v(t)&&Object.assign(this,{height:t.height,top:t.top+this.scrollTop})}))},setSiderbarRect(){return y(this,".press-index-bar__sidebar").then((t=>{v(t)&&(this.sidebar={height:t.height,top:t.top})}))},setDiffData({target:t,data:e}){const o={};Object.keys(e).forEach((s=>{t[s]!==e[s]&&(o[s]=e[s])})),Object.keys(o).length&&t.setData(o)},getAnchorRect:t=>y(t,".press-index-anchor-wrapper").then((t=>({height:t.height,top:t.top}))),getActiveAnchorIndex(){const{children:t,scrollTop:e}=this,{sticky:o,stickyOffsetTop:s}=this;for(let r=this.children.length-1;r>=0;r--){const n=r>0?t[r-1].height:0;if((o?n+s:this.stickyOffsetTop)+e>=t[r].top)return r}return-1},onScroll(t){t&&(t.target||t.detail)&&(this.scrollTop=t.target.scrollTop||t.detail.scrollTop);const{children:e=[],scrollTop:o}=this;if(!e.length)return;const{sticky:s,stickyOffsetTop:r,zIndex:n,highlightColor:i}=this,l=this.getActiveAnchorIndex();if(this.setDiffData({target:this,data:{activeAnchorIndex:l}}),s){let t=!1;-1!==l&&(t=e[l].top<=r+o),e.forEach(((o,s)=>{if(s===l){let l="",c=`\n              color: ${i};\n            `;t&&(l=`\n                height: ${e[s].height}px;\n              `,c=`\n                position: fixed;\n                top: ${r}px;\n                z-index: ${n};\n                color: ${i};\n              `),this.setDiffData({target:o,data:{active:!0,anchorStyle:c,wrapperStyle:l}})}else if(s===l-1){const t=e[s],r=t.top,l=`\n              position: relative;\n              transform: translate3d(0, ${(s===e.length-1?this.top:e[s+1].top)-r-t.height}px, 0);\n              z-index: ${n};\n              color: ${i};\n            `;this.setDiffData({target:o,data:{active:!0,anchorStyle:l}})}else this.setDiffData({target:o,data:{active:!1,anchorStyle:"",wrapperStyle:""}})}))}},onClick(){},onTouchMove(t){const e=this.children.length,o=t.touches[0],s=this.sidebar.height/e;let r;console.log("[onTouchMove]",o.clientY,this.sidebar.top,this.top),r=Math.floor((o.clientY+this.windowTop-this.sidebar.top)/s),console.log("[onTouchMove]",r),r<0?r=0:r>e-1&&(r=e-1),this.scrollToAnchor(r)},onTouchStop(){this.scrollToAnchorIndex=null},scrollToAnchor(t){if("number"!=typeof t||this.scrollToAnchorIndex===t)return;this.scrollToAnchorIndex=t;const e=this.children.find((e=>e.index===this.indexList[t]));void 0!==e&&(console.log("[scrollTop]",this.scrollTop),e.scrollIntoView(this.scrollTop,this.changeScrollerTop),this.$emit("select",e.index))},onClickInner(t){var e,o;const s=null==(o=null==(e=t.currentTarget)?void 0:e.dataset)?void 0:o.index;void 0!==s&&(console.log("[index]",s,this.indexList),this.scrollToAnchor(+s))},onWatchScroll(t){this.onScroll(t)},changeScrollerTop(t){const e=T("pressIndexBarWrapper");console.log("[changeScrollerTop] top",t);const o=null==document?void 0:document.querySelector(e);o&&(o.scrollTop=t)}}},[["render",function(t,e,x,m,g,y){const T=f;return o(),s("div",{class:"press-index-bar-container"},[r(T,{id:"pressIndexBarWrapper",class:"press-index-bar-wrapper",enhanced:"","scroll-with-animation":!1,"scroll-y":"","scroll-top":g.curScrollTop,onScroll:y.onWatchScroll},{default:n((()=>[i("div",{class:"press-index-bar"},[l(t.$slots,"default",{},void 0,!0)])])),_:3},8,["scroll-top","onScroll"]),g.showSidebar?(o(),s("div",{key:0,class:"press-index-bar__sidebar",onClick:e[1]||(e[1]=c(((...t)=>y.onClick&&y.onClick(...t)),["stop","prevent"])),onTouchmove:e[2]||(e[2]=c(((...t)=>y.onTouchMove&&y.onTouchMove(...t)),["stop","prevent"])),onTouchend:e[3]||(e[3]=c(((...t)=>y.onTouchStop&&y.onTouchStop(...t)),["stop"])),onTouchcancel:e[4]||(e[4]=c(((...t)=>y.onTouchStop&&y.onTouchStop(...t)),["stop","prevent"]))},[(o(!0),s(a,null,h(x.indexList,((t,r)=>(o(),s("div",{key:r,class:"press-index-bar__index",style:p("z-index: "+(x.zIndex+1)+"; color: "+(g.activeAnchorIndex===r?x.highlightColor:"")),"data-index":r,onClick:e[0]||(e[0]=c(((...t)=>y.onClickInner&&y.onClickInner(...t)),["stop"]))},d(t),13,["data-index"])))),128))],32)):u("v-if",!0)])}],["__scopeId","data-v-33cd8276"]]);const D=e({name:"PressIndexAnchor",options:{...b,styleIsolation:"shared"},mixins:[j(I,{indexKey:"tIndex"})],props:{useSlot:Boolean,index:{type:[Number,String],default:""},...k},emits:[],data:()=>({active:!1,wrapperStyle:"",anchorStyle:""}),methods:{setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},scrollIntoView(t,e){y(this,".press-index-anchor-wrapper").then((o=>{const s=t+o.top-this[I].stickyOffsetTop;null==e||e(s)}))}}},[["render",function(t,e,r,n,c,a){return o(),s("div",null,[i("div",{class:"press-index-anchor-wrapper",style:p(c.wrapperStyle)},[i("div",{class:x("press-index-anchor "+(c.active?"press-index-anchor--active press-hairline--bottom":"")),style:p(c.anchorStyle)},[r.useSlot?l(t.$slots,"default",{key:0},void 0,!0):(o(),s("span",{key:1},d(r.index),1))],6)],4)])}],["__scopeId","data-v-47bc95d8"]]);const O=function(){const t=[];for(let e=65;e<91;e++)t.push(String.fromCharCode(e));return t}();const _=e({i18n:{"zh-CN":{text:"文本",customIndexList:"自定义索引列表"},"en-US":{text:"Text",customIndexList:"Custom Index List"}},components:{PressCell:t,PressIndexBar:C,PressIndexAnchor:D},data(){let t=0;return t=44,{anchorList:O,wrapStyle:"",stickyOffsetTop:44}},mounted(){},methods:{onSelect(t){console.log("[onSelect]: ",t)}}},[["render",function(t,e,i,l,c,d){const u=m("press-index-anchor"),f=m("press-cell"),x=m("press-index-bar");return o(),s("div",{class:"demo-wrap",style:p(c.wrapStyle)},[r(x,{"sticky-offset-top":c.stickyOffsetTop,"window-top":44,onSelect:d.onSelect},{default:n((()=>[(o(!0),s(a,null,h(c.anchorList,((e,n)=>(o(),s("div",{key:n},[r(u,{index:e},null,8,["index"]),r(f,{title:t.t("text")},null,8,["title"]),r(f,{title:t.t("text")},null,8,["title"]),r(f,{title:t.t("text")},null,8,["title"])])))),128))])),_:1},8,["sticky-offset-top","onSelect"])],4)}]]);export{_ as default};