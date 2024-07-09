import{P as s}from"./press-icon-plus.eb48dd73.js";import{P as e}from"./press-overlay.90919dc1.js";import{t}from"./press-transition.4baf6de8.js";import{s as o,u as n}from"./utils.f8cec38d.js";import{d as a,a as l}from"./press-component.fd531b70.js";import{_ as r,o as i,c,a as p,b as u,n as d,p as y,m as f,d as m}from"./index-7a15811b.js";const C={popupStyle:function(s){return o([{"z-index":s.zIndex,"-webkit-transition-duration":`${s.currentDuration}ms`,"transition-duration":`${s.currentDuration}ms`},s.display?null:"display: none",s.customStyle])}};const v=r({name:"PressPopupPlus",options:{...a,styleIsolation:"shared"},components:{PressIconPlus:s,PressOverlay:e},mixins:[t(!1)],props:{enterClass:{type:String,default:""},enterActiveClass:{type:String,default:""},enterToClass:{type:String,default:""},leaveClass:{type:String,default:""},leaveActiveClass:{type:String,default:""},leaveToClass:{type:String,default:""},closeIconClass:{type:String,default:""},round:Boolean,closeable:Boolean,customStyle:{type:String,default:""},overlayStyle:{type:String,default:""},transition:{type:String,default:""},zIndex:{type:Number,default:100},overlay:{type:Boolean,default:!0},closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},closeOnClickOverlay:{type:Boolean,default:!0},position:{type:String,default:"center"},safeAreaInsetBottom:{type:Boolean,default:!0},safeAreaInsetTop:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},...l,wrapClass:{type:String,default:""}},emits:["close","click-overlay","before-enter","enter","after-enter","before-leave","leave","after-leave"],data:()=>({classes:""}),computed:{innerWrapClass(){return`press-popup-plus ${this.wrapClass}`},popupClass(){const{position:s,round:e,safeAreaInsetBottom:t,safeAreaInsetTop:o,customClass:a,classes:l}=this;return`${n.bem2("popup",[s,{round:e,safe:t,safeTop:o}])} ${l} ${a}`},popupStyle(){const{zIndex:s,currentDuration:e,display:t,customStyle:o}=this;return C.popupStyle({zIndex:s,currentDuration:e,display:t,customStyle:o})},innerCloseIconClass(){const{closeIconClass:s,closeIconPosition:e}=this;return`press-popup__close-icon press-popup__close-icon--${e} ${s} `},innerCloseIconCustomClass:()=>""},watch:{transition:{handler(){this.observeClass()}},position:{handler(){this.observeClass()}}},created(){this.observeClass()},methods:{setData(s){Object.keys(s).forEach((e=>{this[e]=s[e]}))},onClickCloseIcon(){this.$emit("close")},onClickOverlay(){this.$emit("click-overlay"),this.closeOnClickOverlay&&this.$emit("close")},observeClass(){const{transition:s,position:e,duration:t}=this,o={dataName:s||e};"none"===s?(o.duration=0,this.originDuration=t):null!=this.originDuration&&(o.duration=this.originDuration),this.setData(o)}}},[["render",function(s,e,t,o,n,a){const l=m("press-overlay"),r=m("press-icon-plus");return i(),c("div",{class:d(a.innerWrapClass)},[t.overlay?(i(),p(l,{key:0,show:s.show,"z-index":t.zIndex,"custom-style":t.overlayStyle,duration:s.duration,"lock-scroll":t.lockScroll,onClick:a.onClickOverlay},null,8,["show","z-index","custom-style","duration","lock-scroll","onClick"])):u("v-if",!0),s.inited?(i(),c("div",{key:1,class:d(a.popupClass),style:y(a.popupStyle),onTransitionend:e[0]||(e[0]=(...e)=>s.onTransitionEnd&&s.onTransitionEnd(...e))},[f(s.$slots,"default",{},void 0,!0),t.closeable?(i(),p(r,{key:0,name:t.closeIcon,class:d(a.innerCloseIconClass),"custom-class":a.innerCloseIconCustomClass,onClick:a.onClickCloseIcon},null,8,["name","class","custom-class","onClick"])):u("v-if",!0)],38)):u("v-if",!0)],2)}],["__scopeId","data-v-f493f1e6"]]);export{v as P};