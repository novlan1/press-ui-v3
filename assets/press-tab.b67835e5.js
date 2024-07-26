import{_ as t,o as e,c as s,h as i,w as l,i as a,r as n,n as o,j as r,f as d,F as c,p as h,v as u,t as p,q as b,e as f,S as m}from"./index-66fd861e.js";import{P as y}from"./press-info.8563e54c.js";import{P as g}from"./press-sticky.5fc3d7e8.js";import{t as v}from"./touch.bcbb2f5b.js";import{r as T,g as C}from"./version.0d1ce575.js";import{g as x,b as S}from"./rect.8d61e06e.js";import{b as $,n as k}from"./add-unit.9de8b2f7.js";import{P as w,C as I}from"./relation.8b10893c.js";import{u as _}from"./utils.d8f13396.js";import{s as N}from"./style.0f94ff97.js";import{d as j,a as z}from"./press-component.573dfcec.js";import{d as B}from"./parent-map.b443f4cc.js";const P={tabClass:function(t,e){const s=["tab-class"];return t&&s.push("tab-active-class"),e&&s.push("press-ellipsis"),s.join(" ")},tabStyle:function(t){const e=t.active?t.titleActiveColor:t.titleInactiveColor,s=t.scrollable&&t.ellipsis;return"card"===t.type?N({"border-color":t.color,"background-color":!t.disabled&&t.active?t.color:null,color:e||(t.disabled||t.active?null:t.color),"flex-basis":s?88/t.swipeThreshold+"%":null}):N({color:e,"flex-basis":s?88/t.swipeThreshold+"%":null})},trackStyle:function(t){return t.animated?N({left:-100*t.currentIndex+"%","transition-duration":`${t.duration}s`,"-webkit-transition-duration":`${t.duration}s`}):""},lineStyle:function(t){const e=_.addUnit(t.lineWidth);return N({width:e,transform:`translateX(${t.lineOffsetLeft}px)`,"-webkit-transform":`translateX(${t.lineOffsetLeft}px)`,"background-color":t.color,height:-1!==t.lineHeight?_.addUnit(t.lineHeight):null,"border-radius":-1!==t.lineHeight?_.addUnit(t.lineHeight):null,"transition-duration":t.skipTransition?null:`${t.duration}s`,"-webkit-transition-duration":t.skipTransition?null:`${t.duration}s`})},navStyle:function(t,e){return N({"border-color":"card"===e&&t?t:null})}};const A=t({name:"PressTabs",options:{...j,styleIsolation:"shared"},components:{PressInfo:y,PressSticky:g},mixins:[v,w(B)],props:{...z,navClass:{type:String,default:""},tabClass:{type:String,default:""},tabActiveClass:{type:String,default:""},lineClass:{type:String,default:""},sticky:{type:Boolean,default:!1},border:{type:Boolean,default:!1},swipeable:{type:Boolean,default:!1},titleActiveColor:{type:String,default:""},titleInactiveColor:{type:String,default:""},color:{type:String,default:""},animated:{type:Boolean,default:!1},lineWidth:{type:[Number,String,null],default:40},lineHeight:{type:[Number,String,null],default:-1},active:{type:[Number,String,null],default:0},type:{type:String,default:"line"},ellipsis:{type:Boolean,default:!0},duration:{type:Number,default:.3},zIndex:{type:Number,default:1},swipeThreshold:{type:Number,default:5},offsetTop:{type:Number,default:0},lazyRender:{type:Boolean,default:!0},extraClassPrefix:{type:String,default:""},mode:{type:String,default:""},useTitleSlot:{type:Boolean,default:!1}},emits:["scroll","disabled","click","input","change"],data:()=>({tabs:[],scrollLeft:0,scrollable:!1,currentIndex:0,container:null,skipTransition:!0,scrollWithAnimation:!1,lineOffsetLeft:0,computed:P,utils:_}),computed:{tabsClass(){const{type:t,customClass:e,mode:s}=this,i="hor"===s,l="e-sport"===s;return`${this.bem3("tabs",[t,{hor:i,"e-sport":l}])} ${e}`},tabsWrapClass(){const{scrollable:t,type:e,border:s}=this;return`${this.bem3("tabs__wrap",{scrollable:t})} ${"line"===e&&s?this.bem3("hairline--top-bottom"):""}`},tabScrollClass(){const{type:t}=this;return this.bem3("tabs__scroll",[t])},theNavClass(){const{type:t,ellipsis:e,navClass:s}=this,i=`${s} nav-class`;return`${this.bem3("tabs__nav",[t,{complete:!e}])} ${i}`},navStyle(){const{color:t,type:e}=this;return P.navStyle(t,e)},lineStyle(){const{color:t,lineOffsetLeft:e,lineHeight:s,skipTransition:i,duration:l,lineWidth:a}=this;return P.lineStyle({color:t,lineOffsetLeft:e,lineHeight:s,skipTransition:i,duration:l,lineWidth:a})},trackClass(){const{animated:t}=this;return`${this.bem3("tabs__track",[{animated:t}])}`},trackStyle(){const{duration:t,currentIndex:e,animated:s}=this;return P.trackStyle({duration:t,currentIndex:e,animated:s})},realEllipsis(){return this.scrollable&&this.ellipsis}},watch:{animated:{handler(){this.children.forEach(((t,e)=>t.updateRender(e===this.currentIndex,this)))}},lineWidth:{handler(){this.resize()}},active:{handler(t){t!==this.getCurrentName()&&this.setCurrentIndexByName(t)}},swipeThreshold:{handler(t){this.setData({scrollable:this.children.length>t||!this.ellipsis})}}},created(){this.children=[]},mounted(){T((()=>{this.swiping=!0,this.container=()=>this.$refs.pressTabs,this.updateTabs(),this.resize(),this.scrollIntoView()})),this.$nextTick((()=>{this.resize()}))},methods:{bem3(t,e){return _.bem3(t,e,this.extraClassPrefix)},getTabClass(t,e){const{currentIndex:s,ellipsis:i,tabClass:l,tabActiveClass:a}=this,n=`${a} tab-active-class`,o=`${l} tab-class`;return`${this.bem3("tab",{active:e===s,disabled:t.disabled||!1,complete:!i})} ${this.bem3("ellipsis")} ${o} ${e===s?n:""}`},getSlotTabClass(t){return this.getTabClass(this.tabs[t]||{},t)},getTabStyle(t,e){const{type:s,color:i,active:l,currentIndex:a,realEllipsis:n,titleActiveColor:o,titleInactiveColor:r,swipeThreshold:d}=this,c=n?88/d+"%":null;return N("card"===s?{borderColor:i,backgroundColor:!t.disabled&&l?i:null,color:(e===a?o:r)||(t.disabled||l?null:i),flexBasis:c}:{color:e===a?o:r,flexBasis:c})},setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},updateTabs(){const{children:t=[]}=this;this.tabs=t.map((t=>({title:t.title,index:t.index,disabled:t.disabled,info:t.info,dot:t.dot,titleStyle:t.titleStyle}))),this.scrollable=t.length>this.swipeThreshold||!this.ellipsis,this.setCurrentIndexByName(this.active||this.getCurrentName())},trigger(t,e){const{currentIndex:s}=this,i=e||this.children[s];$(i)&&this.$emit(t,{index:i.index,name:i.getComputedName(),title:i.title})},onTap(t){const e=+t.currentTarget.dataset.index,s=this.children[e];s.disabled?this.trigger("disabled",s):(this.setCurrentIndex(e),k((()=>{this.trigger("click")})))},setCurrentIndexByName(t){const{children:e=[]}=this,s=e.filter((e=>e.getComputedName()===t));s.length&&this.setCurrentIndex(s[0].index)},setCurrentIndex(t){const{children:e=[]}=this;if(!$(t)||t>=e.length||t<0)return;if(C(this,(()=>{e.forEach(((e,s)=>{const i=s===t;i===e.active&&e.initialled||e.updateRender(i,this)}))})),t===this.currentIndex)return;const s=null!==this.currentIndex;this.setData({currentIndex:t}),T((()=>{this.resize(),this.scrollIntoView()})),k((()=>{this.trigger("input"),s&&this.trigger("change")}))},getCurrentName(){const t=this.children[this.currentIndex];if(t)return t.getComputedName()},resize(){if("line"!==this.type)return;const{currentIndex:t,ellipsis:e,skipTransition:s}=this;Promise.all([x(this,".press-tab"),S(this,".press-tabs__line")]).then((([i=[],l])=>{const a=i[t];if(null==a)return;let n=i.slice(0,t).reduce(((t,e)=>t+e.width),0);n+=(a.width-l.width)/2+(e?0:8),this.setData({lineOffsetLeft:n}),this.swiping=!0,s&&k((()=>{this.setData({skipTransition:!1})}))})).catch((t=>{console.log("err",t)}))},scrollIntoView(){const{currentIndex:t,scrollable:e,scrollWithAnimation:s}=this;e&&Promise.all([x(this,".press-tab"),S(this,".press-tabs__nav")]).then((([e,i])=>{const l=e[t],a=e.slice(0,t).reduce(((t,e)=>t+e.width),0);this.setData({scrollLeft:a-(i.width-l.width)/2}),s||k((()=>{this.setData({scrollWithAnimation:!0})}))})).catch((t=>{console.log("error",t)}))},onTouchScroll(t){this.$emit("scroll",t)},onTouchStart(t){this.swipeable&&(this.swiping=!0,this.touchStart(t))},onTouchMove(t){this.swipeable&&this.swiping&&this.touchMove(t)},onTouchEnd(){if(!this.swipeable||!this.swiping)return;const{direction:t,deltaX:e,offsetX:s}=this;if("horizontal"===t&&s>=50){const t=this.getAvailableTab(e);-1!==t&&this.setCurrentIndex(t)}this.swiping=!1},getAvailableTab(t){const{tabs:e,currentIndex:s}=this,i=t>0?-1:1;for(let l=i;s+l<e.length&&s+l>=0;l+=i){const t=s+l;if(t>=0&&t<e.length&&e[t]&&!e[t].disabled)return t}return-1},getTabKey:(t,e)=>`${t.title||""} - ${e} -${t.index}`}},[["render",function(t,y,g,v,T,C){const x=f("press-info"),S=m,$=f("press-sticky");return e(),s("div",{ref:"pressTabs",class:o(C.tabsClass)},[i($,{disabled:!g.sticky,"z-index":g.zIndex,"offset-top":g.offsetTop,container:T.container,onScroll:C.onTouchScroll},{default:l((()=>[a("div",{class:o(C.tabsWrapClass)},[n(t.$slots,"nav-left",{},void 0,!0),i(S,{"scroll-x":T.scrollable,"scroll-with-animation":T.scrollWithAnimation,"scroll-left":T.scrollLeft,class:o(C.tabScrollClass),style:r(g.color?"border-color: "+g.color:"")},{default:l((()=>[a("div",{class:o(C.theNavClass),style:r(C.navStyle)},["line"===g.type?(e(),s("div",{key:0,class:o([`${C.bem3("tabs__line")} ${g.lineClass}`]),style:r(C.lineStyle)},null,6)):d("v-if",!0),g.useTitleSlot?(e(),s(c,{key:1},[T.tabs.length>0?(e(),s("div",{key:0,class:o([`${C.getSlotTabClass(0)}`]),"data-index":0,onClick:y[0]||(y[0]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-0",{},void 0,!0)],2)):d("v-if",!0),T.tabs.length>1?(e(),s("div",{key:1,class:o([`${C.getSlotTabClass(1)}`]),"data-index":1,onClick:y[1]||(y[1]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-1",{},void 0,!0)],2)):d("v-if",!0),T.tabs.length>2?(e(),s("div",{key:2,class:o([`${C.getSlotTabClass(2)}`]),"data-index":2,onClick:y[2]||(y[2]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-2",{},void 0,!0)],2)):d("v-if",!0),T.tabs.length>3?(e(),s("div",{key:3,class:o([`${C.getSlotTabClass(3)}`]),"data-index":3,onClick:y[3]||(y[3]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-3",{},void 0,!0)],2)):d("v-if",!0),T.tabs.length>4?(e(),s("div",{key:4,class:o([`${C.getSlotTabClass(4)}`]),"data-index":4,onClick:y[4]||(y[4]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-4",{},void 0,!0)],2)):d("v-if",!0),T.tabs.length>5?(e(),s("div",{key:5,class:o([`${C.getSlotTabClass(5)}`]),"data-index":5,onClick:y[5]||(y[5]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-5",{},void 0,!0)],2)):d("v-if",!0),T.tabs.length>6?(e(),s("div",{key:6,class:o([`${C.getSlotTabClass(6)}`]),"data-index":6,onClick:y[6]||(y[6]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-6",{},void 0,!0)],2)):d("v-if",!0),T.tabs.length>7?(e(),s("div",{key:7,class:o([`${C.getSlotTabClass(7)}`]),"data-index":7,onClick:y[7]||(y[7]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-7",{},void 0,!0)],2)):d("v-if",!0),T.tabs.length>8?(e(),s("div",{key:8,class:o([`${C.getSlotTabClass(8)}`]),"data-index":8,onClick:y[8]||(y[8]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-8",{},void 0,!0)],2)):d("v-if",!0),T.tabs.length>9?(e(),s("div",{key:9,class:o([`${C.getSlotTabClass(9)}`]),"data-index":9,onClick:y[9]||(y[9]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-9",{},void 0,!0)],2)):d("v-if",!0),T.tabs.length>10?(e(),s("div",{key:10,class:o([`${C.getSlotTabClass(10)}`]),"data-index":10,onClick:y[10]||(y[10]=(...t)=>C.onTap&&C.onTap(...t))},[n(t.$slots,"title-10",{},void 0,!0)],2)):d("v-if",!0)],64)):(e(!0),s(c,{key:2},h(T.tabs,((t,i)=>(e(),s("div",{key:C.getTabKey(t,i),"data-index":i,class:o([`${C.getTabClass(t,i)}`]),style:r([`${C.getTabStyle(t,i)}`]),onClick:y[11]||(y[11]=(...t)=>C.onTap&&C.onTap(...t))},[a("div",{class:o([`${C.bem3("tab__text")}`,g.ellipsis?"press-ellipsis":""]),style:r(t.titleStyle)},[u(p(t.title)+" ",1),null!==t.info||t.dot?(e(),b(x,{key:0,info:t.info,dot:t.dot,"custom-class":"press-tab__title__info"},null,8,["info","dot"])):d("v-if",!0)],6)],14,["data-index"])))),128))],6)])),_:3},8,["scroll-x","scroll-with-animation","scroll-left","class","style"]),n(t.$slots,"nav-right",{},void 0,!0)],2)])),_:3},8,["disabled","z-index","offset-top","container","onScroll"]),a("div",{class:o([`${C.bem3("tabs__content")}`]),onTouchstart:y[12]||(y[12]=(...t)=>C.onTouchStart&&C.onTouchStart(...t)),onTouchmove:y[13]||(y[13]=(...t)=>C.onTouchMove&&C.onTouchMove(...t)),onTouchend:y[14]||(y[14]=(...t)=>C.onTouchEnd&&C.onTouchEnd(...t)),onTouchcancel:y[15]||(y[15]=(...t)=>C.onTouchEnd&&C.onTouchEnd(...t))},[a("div",{class:o(C.trackClass),style:r(C.trackStyle)},[n(t.$slots,"default",{},void 0,!0)],6)],34)],2)}],["__scopeId","data-v-7237b830"]]);const W=t({name:"PressTab",mixins:[I(B)],options:{...j,styleIsolation:"shared"},props:{...z,dot:{type:Boolean,default:!1},info:{type:[String,Number,null],default:""},title:{type:[String,Number,null],default:""},disabled:{type:Boolean,default:!1},titleStyle:{type:String,default:""},name:{type:[String,Number,null],default:""},extraClassPrefix:{type:String,default:""},sortIndex:{type:Number,default:0}},emits:[],data:()=>({active:!1,shouldShow:!1,shouldRender:!1,initialled:!1,utils:_}),computed:{tabClass(){const{active:t,customClass:e=""}=this;return`${this.bem3("tab__pane",{active:t,inactive:!t})} ${e}`}},watch:{dot:{handler(){this.update()}},info:{handler(){this.update()}},title:{handler(){this.update()}},disabled:{handler(){this.update()}},titleStyle:{handler(){this.update()}}},created(){},mounted(){this.update()},methods:{bem3(t,e){return _.bem3(t,e,this.extraClassPrefix)},getComputedName(){return""!==this.name?this.name:this.index},updateRender(t,e){this.initialled=this.initialled||t,this.active=t,this.shouldRender=this.initialled||!e.lazyRender,this.shouldShow=t||e.animated},update(){this[B]&&(this[B].updateTabs(),T((()=>{this[B].resize()})))},destroyCallback(){this[B].updateTabs(),this.$nextTick((()=>{this[B].resize()}))}}},[["render",function(t,i,l,c,h,u){return e(),s("div",{class:o([u.bem3("tab__pane-wrapper")])},[a("div",{class:o(u.tabClass),style:r(h.shouldShow?"":"display: none;")},[h.shouldRender?n(t.$slots,"default",{key:0},void 0,!0):d("v-if",!0)],6)],2)}],["__scopeId","data-v-f2e5d9ff"]]);export{A as P,W as a};
