import{G as t,H as e,af as o,V as s,aP as n,_ as i,o as r,c as l,d as c,w as a,e as h,z as d,a5 as p,F as u,g as f,I as x,t as g,j as T,S as y,B as m,a as S,k as v}from"./index-ed1f827b.js";import{a as b}from"./color.3a05f6e0.js";import{P as k,C as I}from"./relation.25345683.js";import{h as w}from"./parent-map.a476e3d9.js";const A=i({name:"PressIndexBar",options:{...t,styleIsolation:"shared"},mixins:[k(w)],props:{sticky:{type:Boolean,default:!0},zIndex:{type:Number,default:1},highlightColor:{type:String,default:b},stickyOffsetTop:{type:Number,default:0},indexList:{type:Array,default:()=>(()=>{const t=[],e="A".charCodeAt(0);for(let o=0;o<26;o++)t.push(String.fromCharCode(e+o));return t})()},windowTop:{type:Number,default:0},...e},emits:["select"],data:()=>({activeAnchorIndex:null,showSidebar:!1,sidebar:{},curScrollTop:0}),created(){this.scrollTop=0,this.children=[]},mounted(){this.updateData()},methods:{setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},updateData(){this.$nextTick((()=>{null!=this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showSidebar=!!this.children.length,this.$nextTick((()=>{this.setRect().then((()=>{this.onScroll()}))}))}),0)}))},setRect(){return Promise.all([this.setAnchorsRect(),this.setListRect(),this.setSiderbarRect()])},setAnchorsRect(){return Promise.all(this.children.map((t=>o(t,".press-index-anchor-wrapper").then((e=>(Object.assign(t,{height:e.height,top:e.top+this.scrollTop}),t))))))},setListRect(){return o(this,".press-index-bar").then((t=>{s(t)&&Object.assign(this,{height:t.height,top:t.top+this.scrollTop})}))},setSiderbarRect(){return o(this,".press-index-bar__sidebar").then((t=>{s(t)&&(this.sidebar={height:t.height,top:t.top})}))},setDiffData({target:t,data:e}){const o={};Object.keys(e).forEach((s=>{t[s]!==e[s]&&(o[s]=e[s])})),Object.keys(o).length&&t.setData(o)},getAnchorRect:t=>o(t,".press-index-anchor-wrapper").then((t=>({height:t.height,top:t.top}))),getActiveAnchorIndex(){const{children:t,scrollTop:e}=this,{sticky:o,stickyOffsetTop:s}=this;for(let n=this.children.length-1;n>=0;n--){const i=n>0?t[n-1].height:0;if((o?i+s:this.stickyOffsetTop)+e>=t[n].top)return n}return-1},onScroll(t){t&&(t.target||t.detail)&&(this.scrollTop=t.target.scrollTop||t.detail.scrollTop);const{children:e=[],scrollTop:o}=this;if(!e.length)return;const{sticky:s,stickyOffsetTop:n,zIndex:i,highlightColor:r}=this,l=this.getActiveAnchorIndex();if(this.setDiffData({target:this,data:{activeAnchorIndex:l}}),s){let t=!1;-1!==l&&(t=e[l].top<=n+o),e.forEach(((o,s)=>{if(s===l){let l="",c=`\n              color: ${r};\n            `;t&&(l=`\n                height: ${e[s].height}px;\n              `,c=`\n                position: fixed;\n                top: ${n}px;\n                z-index: ${i};\n                color: ${r};\n              `),this.setDiffData({target:o,data:{active:!0,anchorStyle:c,wrapperStyle:l}})}else if(s===l-1){const t=e[s],n=t.top,l=`\n              position: relative;\n              transform: translate3d(0, ${(s===e.length-1?this.top:e[s+1].top)-n-t.height}px, 0);\n              z-index: ${i};\n              color: ${r};\n            `;this.setDiffData({target:o,data:{active:!0,anchorStyle:l}})}else this.setDiffData({target:o,data:{active:!1,anchorStyle:"",wrapperStyle:""}})}))}},onClick(){},onTouchMove(t){const e=this.children.length,o=t.touches[0],s=this.sidebar.height/e;let n;console.log("[onTouchMove]",o.clientY,this.sidebar.top,this.top),n=Math.floor((o.clientY+this.windowTop-this.sidebar.top)/s),console.log("[onTouchMove]",n),n<0?n=0:n>e-1&&(n=e-1),this.scrollToAnchor(n)},onTouchStop(){this.scrollToAnchorIndex=null},scrollToAnchor(t){if("number"!=typeof t||this.scrollToAnchorIndex===t)return;this.scrollToAnchorIndex=t;const e=this.children.find((e=>e.index===this.indexList[t]));void 0!==e&&(console.log("[scrollTop]",this.scrollTop),e.scrollIntoView(this.scrollTop,this.changeScrollerTop),this.$emit("select",e.index))},onClickInner(t){var e,o;const s=null==(o=null==(e=t.currentTarget)?void 0:e.dataset)?void 0:o.index;void 0!==s&&(console.log("[index]",s,this.indexList),this.scrollToAnchor(+s))},onWatchScroll(t){this.onScroll(t)},changeScrollerTop(t){const e=n("pressIndexBarWrapper");console.log("[changeScrollerTop] top",t);const o=null==document?void 0:document.querySelector(e);o&&(o.scrollTop=t)}}},[["render",function(t,e,o,s,n,i){const m=y;return r(),l("div",{class:"press-index-bar-container"},[c(m,{id:"pressIndexBarWrapper",class:"press-index-bar-wrapper",enhanced:"","scroll-with-animation":!1,"scroll-y":"","scroll-top":n.curScrollTop,onScroll:i.onWatchScroll},{default:a((()=>[h("div",{class:"press-index-bar"},[d(t.$slots,"default",{},void 0,!0)])])),_:3},8,["scroll-top","onScroll"]),n.showSidebar?(r(),l("div",{key:0,class:"press-index-bar__sidebar",onClick:e[1]||(e[1]=p(((...t)=>i.onClick&&i.onClick(...t)),["stop","prevent"])),onTouchmove:e[2]||(e[2]=p(((...t)=>i.onTouchMove&&i.onTouchMove(...t)),["stop","prevent"])),onTouchend:e[3]||(e[3]=p(((...t)=>i.onTouchStop&&i.onTouchStop(...t)),["stop"])),onTouchcancel:e[4]||(e[4]=p(((...t)=>i.onTouchStop&&i.onTouchStop(...t)),["stop","prevent"]))},[(r(!0),l(u,null,f(o.indexList,((t,s)=>(r(),l("div",{key:s,class:"press-index-bar__index",style:x("z-index: "+(o.zIndex+1)+"; color: "+(n.activeAnchorIndex===s?o.highlightColor:"")),"data-index":s,onClick:e[0]||(e[0]=p(((...t)=>i.onClickInner&&i.onClickInner(...t)),["stop"]))},g(t),13,["data-index"])))),128))],32)):T("v-if",!0)])}],["__scopeId","data-v-bec0c430"]]);const C=i({name:"PressIndexAnchor",options:{...t,styleIsolation:"shared"},mixins:[I(w,{indexKey:"tIndex"})],props:{useSlot:Boolean,index:{type:[Number,String],default:""},...e},emits:[],data:()=>({active:!1,wrapperStyle:"",anchorStyle:""}),methods:{setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},scrollIntoView(t,e){o(this,".press-index-anchor-wrapper").then((o=>{const s=t+o.top-this[w].stickyOffsetTop;null==e||e(s)}))}}},[["render",function(t,e,o,s,n,i){return r(),l("div",null,[h("div",{class:"press-index-anchor-wrapper",style:x(n.wrapperStyle)},[h("div",{class:m("press-index-anchor "+(n.active?"press-index-anchor--active press-hairline--bottom":"")),style:x(n.anchorStyle)},[o.useSlot?d(t.$slots,"default",{key:0},void 0,!0):(r(),l("span",{key:1},g(o.index),1))],6)],4)])}],["__scopeId","data-v-c9941fe9"]]);const D=function(){const t=[];for(let e=65;e<91;e++)t.push(String.fromCharCode(e));return t}();const O=i({i18n:{"zh-CN":{text:"文本",customIndexList:"自定义索引列表"},"en-US":{text:"Text",customIndexList:"Custom Index List"}},components:{PressCell:S,PressIndexBar:A,PressIndexAnchor:C},data(){let t=0;return t=44,{anchorList:D,wrapStyle:"",stickyOffsetTop:44}},mounted(){},methods:{onSelect(t){console.log("[onSelect]: ",t)}}},[["render",function(t,e,o,s,n,i){const h=v("press-index-anchor"),d=v("press-cell"),p=v("press-index-bar");return r(),l("div",{class:"demo-wrap",style:x(n.wrapStyle)},[c(p,{"sticky-offset-top":n.stickyOffsetTop,"window-top":44,onSelect:i.onSelect},{default:a((()=>[(r(!0),l(u,null,f(n.anchorList,((e,o)=>(r(),l("div",{key:o},[c(h,{index:e},null,8,["index"]),c(d,{title:t.t("text")},null,8,["title"]),c(d,{title:t.t("text")},null,8,["title"]),c(d,{title:t.t("text")},null,8,["title"])])))),128))])),_:1},8,["sticky-offset-top","onSelect"])],4)}]]);export{O as default};
