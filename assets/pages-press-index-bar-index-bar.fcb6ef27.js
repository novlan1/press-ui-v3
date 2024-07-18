import{P as t}from"./press-cell.a0845ac7.js";import{_ as e,o,c as s,f as r,w as i,h as n,r as l,z as c,F as a,v as h,i as p,t as d,e as u,S as f,n as x,j as m}from"./index-43eb3ea0.js";import{a as g}from"./color.3a05f6e0.js";import{b as y,f as T}from"./rect.23461412.js";import{a as v}from"./validator.84caa8d5.js";import{d as S,a as b}from"./press-component.181873fd.js";import{P as k,C as I}from"./relation.8b10893c.js";import{h as j}from"./parent-map.b443f4cc.js";import"./press-icon-plus.43efdcdd.js";import"./style.0f94ff97.js";import"./add-unit.0c57c089.js";import"./press-info.68d3dd51.js";import"./utils.bb2d8d10.js";import"./link.82331220.js";import"./event.1c00601d.js";import"./support-passive.bc409298.js";import"./version.7ee5c281.js";const w=e({name:"PressIndexBar",options:{...S,styleIsolation:"shared"},mixins:[k(j)],props:{sticky:{type:Boolean,default:!0},zIndex:{type:Number,default:1},highlightColor:{type:String,default:g},stickyOffsetTop:{type:Number,default:0},indexList:{type:Array,default:()=>(()=>{const t=[],e="A".charCodeAt(0);for(let o=0;o<26;o++)t.push(String.fromCharCode(e+o));return t})()},windowTop:{type:Number,default:0},...b},emits:["select"],data:()=>({activeAnchorIndex:null,showSidebar:!1,sidebar:{},curScrollTop:0}),created(){this.scrollTop=0,this.children=[]},mounted(){this.updateData()},methods:{setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},updateData(){this.$nextTick((()=>{null!=this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showSidebar=!!this.children.length,this.$nextTick((()=>{this.setRect().then((()=>{this.onScroll()}))}))}),0)}))},setRect(){return Promise.all([this.setAnchorsRect(),this.setListRect(),this.setSiderbarRect()])},setAnchorsRect(){return Promise.all(this.children.map((t=>y(t,".press-index-anchor-wrapper").then((e=>(Object.assign(t,{height:e.height,top:e.top+this.scrollTop}),t))))))},setListRect(){return y(this,".press-index-bar").then((t=>{v(t)&&Object.assign(this,{height:t.height,top:t.top+this.scrollTop})}))},setSiderbarRect(){return y(this,".press-index-bar__sidebar").then((t=>{v(t)&&(this.sidebar={height:t.height,top:t.top})}))},setDiffData({target:t,data:e}){const o={};Object.keys(e).forEach((s=>{t[s]!==e[s]&&(o[s]=e[s])})),Object.keys(o).length&&t.setData(o)},getAnchorRect:t=>y(t,".press-index-anchor-wrapper").then((t=>({height:t.height,top:t.top}))),getActiveAnchorIndex(){const{children:t,scrollTop:e}=this,{sticky:o,stickyOffsetTop:s}=this;for(let r=this.children.length-1;r>=0;r--){const i=r>0?t[r-1].height:0;if((o?i+s:this.stickyOffsetTop)+e>=t[r].top)return r}return-1},onScroll(t){t&&(t.target||t.detail)&&(this.scrollTop=t.target.scrollTop||t.detail.scrollTop);const{children:e=[],scrollTop:o}=this;if(!e.length)return;const{sticky:s,stickyOffsetTop:r,zIndex:i,highlightColor:n}=this,l=this.getActiveAnchorIndex();if(this.setDiffData({target:this,data:{activeAnchorIndex:l}}),s){let t=!1;-1!==l&&(t=e[l].top<=r+o),e.forEach(((o,s)=>{if(s===l){let l="",c=`\n              color: ${n};\n            `;t&&(l=`\n                height: ${e[s].height}px;\n              `,c=`\n                position: fixed;\n                top: ${r}px;\n                z-index: ${i};\n                color: ${n};\n              `),this.setDiffData({target:o,data:{active:!0,anchorStyle:c,wrapperStyle:l}})}else if(s===l-1){const t=e[s],r=t.top,l=`\n              position: relative;\n              transform: translate3d(0, ${(s===e.length-1?this.top:e[s+1].top)-r-t.height}px, 0);\n              z-index: ${i};\n              color: ${n};\n            `;this.setDiffData({target:o,data:{active:!0,anchorStyle:l}})}else this.setDiffData({target:o,data:{active:!1,anchorStyle:"",wrapperStyle:""}})}))}},onClick(){},onTouchMove(t){const e=this.children.length,o=t.touches[0],s=this.sidebar.height/e;let r;console.log("[onTouchMove]",o.clientY,this.sidebar.top,this.top),r=Math.floor((o.clientY+this.windowTop-this.sidebar.top)/s),console.log("[onTouchMove]",r),r<0?r=0:r>e-1&&(r=e-1),this.scrollToAnchor(r)},onTouchStop(){this.scrollToAnchorIndex=null},scrollToAnchor(t){if("number"!=typeof t||this.scrollToAnchorIndex===t)return;this.scrollToAnchorIndex=t;const e=this.children.find((e=>e.index===this.indexList[t]));void 0!==e&&(console.log("[scrollTop]",this.scrollTop),e.scrollIntoView(this.scrollTop,this.changeScrollerTop),this.$emit("select",e.index))},onClickInner(t){var e,o;const s=null==(o=null==(e=t.currentTarget)?void 0:e.dataset)?void 0:o.index;void 0!==s&&(console.log("[index]",s,this.indexList),this.scrollToAnchor(+s))},onWatchScroll(t){this.onScroll(t)},changeScrollerTop(t){const e=T("pressIndexBarWrapper");console.log("[changeScrollerTop] top",t);const o=null==document?void 0:document.querySelector(e);o&&(o.scrollTop=t)}}},[["render",function(t,e,x,m,g,y){const T=f;return o(),s("div",{class:"press-index-bar-container"},[r(T,{id:"pressIndexBarWrapper",class:"press-index-bar-wrapper",enhanced:"","scroll-with-animation":!1,"scroll-y":"","scroll-top":g.curScrollTop,onScroll:y.onWatchScroll},{default:i((()=>[n("div",{class:"press-index-bar"},[l(t.$slots,"default",{},void 0,!0)])])),_:3},8,["scroll-top","onScroll"]),g.showSidebar?(o(),s("div",{key:0,class:"press-index-bar__sidebar",onClick:e[1]||(e[1]=c(((...t)=>y.onClick&&y.onClick(...t)),["stop","prevent"])),onTouchmove:e[2]||(e[2]=c(((...t)=>y.onTouchMove&&y.onTouchMove(...t)),["stop","prevent"])),onTouchend:e[3]||(e[3]=c(((...t)=>y.onTouchStop&&y.onTouchStop(...t)),["stop"])),onTouchcancel:e[4]||(e[4]=c(((...t)=>y.onTouchStop&&y.onTouchStop(...t)),["stop","prevent"]))},[(o(!0),s(a,null,h(x.indexList,((t,r)=>(o(),s("div",{key:r,class:"press-index-bar__index",style:p("z-index: "+(x.zIndex+1)+"; color: "+(g.activeAnchorIndex===r?x.highlightColor:"")),"data-index":r,onClick:e[0]||(e[0]=c(((...t)=>y.onClickInner&&y.onClickInner(...t)),["stop"]))},d(t),13,["data-index"])))),128))],32)):u("v-if",!0)])}],["__scopeId","data-v-69320581"]]);const A=e({name:"PressIndexAnchor",options:{...S,styleIsolation:"shared"},mixins:[I(j,{indexKey:"tIndex"})],props:{useSlot:Boolean,index:{type:[Number,String],default:""},...b},emits:[],data:()=>({active:!1,wrapperStyle:"",anchorStyle:""}),methods:{setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},scrollIntoView(t,e){y(this,".press-index-anchor-wrapper").then((o=>{const s=t+o.top-this[j].stickyOffsetTop;null==e||e(s)}))}}},[["render",function(t,e,r,i,c,a){return o(),s("div",null,[n("div",{class:"press-index-anchor-wrapper",style:p(c.wrapperStyle)},[n("div",{class:x("press-index-anchor "+(c.active?"press-index-anchor--active press-hairline--bottom":"")),style:p(c.anchorStyle)},[r.useSlot?l(t.$slots,"default",{key:0},void 0,!0):(o(),s("span",{key:1},d(r.index),1))],6)],4)])}],["__scopeId","data-v-9f1e1cf3"]]);const C=function(){const t=[];for(let e=65;e<91;e++)t.push(String.fromCharCode(e));return t}();const D=e({i18n:{"zh-CN":{text:"文本",customIndexList:"自定义索引列表"},"en-US":{text:"Text",customIndexList:"Custom Index List"}},components:{PressCell:t,PressIndexBar:w,PressIndexAnchor:A},data(){let t=0;return t=44,{anchorList:C,wrapStyle:"",stickyOffsetTop:44}},mounted(){},methods:{onSelect(t){console.log("[onSelect]: ",t)}}},[["render",function(t,e,n,l,c,d){const u=m("press-index-anchor"),f=m("press-cell"),x=m("press-index-bar");return o(),s("div",{class:"demo-wrap",style:p(c.wrapStyle)},[r(x,{"sticky-offset-top":c.stickyOffsetTop,"window-top":44,onSelect:d.onSelect},{default:i((()=>[(o(!0),s(a,null,h(c.anchorList,((e,i)=>(o(),s("div",{key:i},[r(u,{index:e},null,8,["index"]),r(f,{title:t.t("text")},null,8,["title"]),r(f,{title:t.t("text")},null,8,["title"]),r(f,{title:t.t("text")},null,8,["title"])])))),128))])),_:1},8,["sticky-offset-top","onSelect"])],4)}]]);export{D as default};
