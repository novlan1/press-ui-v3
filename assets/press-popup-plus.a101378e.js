import{P as e}from"./press-icon-plus.6056b7b8.js";import{P as s}from"./press-overlay.7697f181.js";import{t}from"./press-transition.959f973d.js";import{u as o}from"./utils.527a09c0.js";import{s as n}from"./style.0f94ff97.js";import{d as a,a as l}from"./press-component.d8ea5855.js";import{_ as r,o as i,c as p,h as c,l as u,n as d,p as y,m as f,j as m}from"./index-38a6aa88.js";const C={popupStyle:function(e){return n([{"z-index":e.zIndex,"-webkit-transition-duration":`${e.currentDuration}ms`,"transition-duration":`${e.currentDuration}ms`},e.display?null:"display: none",e.customStyle])}};const h=r({name:"PressPopupPlus",options:{...a,styleIsolation:"shared"},components:{PressIconPlus:e,PressOverlay:s},mixins:[t(!1),function({ref:e,afterPortal:s}={}){return{props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted(){this.getContainer&&this.portal()},methods:{portal(){const{getContainer:t}=this,o=e?this.$refs[e]:this.$el;let n;var a;t?n="string"==typeof(a=t)?document.querySelector(a):a():this.$parent&&(n=this.$parent.$el),n&&n!==o.parentNode&&n.appendChild(o),s&&s.call(this)}}}}({afterPortal(){}})],props:{enterClass:{type:String,default:""},enterActiveClass:{type:String,default:""},enterToClass:{type:String,default:""},leaveClass:{type:String,default:""},leaveActiveClass:{type:String,default:""},leaveToClass:{type:String,default:""},closeIconClass:{type:String,default:""},round:Boolean,closeable:Boolean,customStyle:{type:String,default:""},overlayStyle:{type:String,default:""},transition:{type:String,default:""},zIndex:{type:Number,default:100},overlay:{type:Boolean,default:!0},closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},closeOnClickOverlay:{type:Boolean,default:!0},position:{type:String,default:"center"},safeAreaInsetBottom:{type:Boolean,default:!0},safeAreaInsetTop:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},...l,wrapClass:{type:String,default:""}},emits:["close","click-overlay","before-enter","enter","after-enter","before-leave","leave","after-leave"],data:()=>({classes:""}),computed:{innerWrapClass(){return`press-popup-plus ${this.wrapClass}`},popupClass(){const{position:e,round:s,safeAreaInsetBottom:t,safeAreaInsetTop:n,customClass:a,classes:l}=this;return`${o.bem2("popup",[e,{round:s,safe:t,safeTop:n}])} ${l} ${a}`},popupStyle(){const{zIndex:e,currentDuration:s,display:t,customStyle:o}=this;return C.popupStyle({zIndex:e,currentDuration:s,display:t,customStyle:o})},innerCloseIconClass(){const{closeIconClass:e,closeIconPosition:s}=this;return`press-popup__close-icon press-popup__close-icon--${s} ${e} `},innerCloseIconCustomClass:()=>""},watch:{transition:{handler(){this.observeClass()}},position:{handler(){this.observeClass()}}},created(){this.observeClass()},methods:{setData(e){Object.keys(e).forEach((s=>{this[s]=e[s]}))},onClickCloseIcon(){this.$emit("close")},onClickOverlay(){this.$emit("click-overlay"),this.closeOnClickOverlay&&this.$emit("close")},observeClass(){const{transition:e,position:s,duration:t}=this,o={dataName:e||s};"none"===e?(o.duration=0,this.originDuration=t):null!=this.originDuration&&(o.duration=this.originDuration),this.setData(o)}}},[["render",function(e,s,t,o,n,a){const l=m("press-overlay"),r=m("press-icon-plus");return i(),p("div",{class:d(a.innerWrapClass)},[t.overlay?(i(),c(l,{key:0,show:e.show,"z-index":t.zIndex,"custom-style":t.overlayStyle,duration:e.duration,"lock-scroll":t.lockScroll,onClick:a.onClickOverlay},null,8,["show","z-index","custom-style","duration","lock-scroll","onClick"])):u("v-if",!0),e.inited?(i(),p("div",{key:1,class:d(a.popupClass),style:y(a.popupStyle),onTransitionend:s[0]||(s[0]=(...s)=>e.onTransitionEnd&&e.onTransitionEnd(...s))},[f(e.$slots,"default",{},void 0,!0),t.closeable?(i(),c(r,{key:0,name:t.closeIcon,class:d(a.innerCloseIconClass),"custom-class":a.innerCloseIconCustomClass,onClick:a.onClickCloseIcon},null,8,["name","class","custom-class","onClick"])):u("v-if",!0)],38)):u("v-if",!0)],2)}],["__scopeId","data-v-c48df486"]]);export{h as P};
