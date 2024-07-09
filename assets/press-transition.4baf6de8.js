import{s as t}from"./utils.f8cec38d.js";import{r as e}from"./version.2049afb8.js";import{c as s,a,d as n}from"./press-component.fd531b70.js";import{_ as i,o as r,c as o,m as l,n as u,p as d,b as c}from"./index-7a15811b.js";const h={rootStyle:function(e){return t([{"-webkit-transition-duration":`${e.currentDuration}ms`,"transition-duration":`${e.currentDuration}ms`},e.display?null:"display: none",e.customStyle])}},v=(t,e)=>{const{enterClass:s,enterActiveClass:a,enterToClass:n,leaveClass:i,leaveActiveClass:r,leaveToClass:o}=e;return{enter:`press-${t}-enter press-${t}-enter-active ${s} ${a}`,"enter-to":`press-${t}-enter-to press-${t}-enter-active ${n} ${a}`,leave:`press-${t}-leave press-${t}-leave-active ${i} ${r}`,"leave-to":`press-${t}-leave-to press-${t}-leave-active ${o} ${r}`}};function m(t){return{props:{customStyle:String,show:{type:Boolean,default:t},duration:{type:[Number,Object,null],default:300},name:{type:String,default:"fade"}},data(){return{type:"",inited:!1,display:!1,dataName:this.name}},watch:{show:{handler(...t){this.observeShow(...t)}},name:{handler(t){this.dataName=t}}},mounted(){!0===this.show&&this.observeShow(!0,!1)},methods:{observeShow(t,e){t!==e&&(t?this.enter():this.leave())},enter(){const{duration:t,dataName:a}=this,n=v(a,this),i=s(t)?t.enter:t;this.status="enter",this.$emit("before-enter"),e((()=>{"enter"===this.status&&(this.$emit("enter"),this.setData({inited:!0,display:!0,classes:n.enter,currentDuration:i}),e((()=>{"enter"===this.status&&(this.transitionEnded=!1,this.setData({classes:n["enter-to"]}))})))}))},leave(){if(!this.display)return;const{duration:t,dataName:a}=this,n=v(a,this),i=s(t)?t.leave:t;this.status="leave",this.$emit("before-leave"),e((()=>{"leave"===this.status&&(this.$emit("leave"),this.setData({classes:n.leave,currentDuration:i}),e((()=>{"leave"===this.status&&(this.transitionEnded=!1,setTimeout((()=>this.onTransitionEnd()),i),this.setData({classes:n["leave-to"]}))})))}))},onTransitionEnd(){if(this.transitionEnded)return;this.transitionEnded=!0,this.$emit(`after-${this.status}`);const{show:t,display:e}=this;!t&&e&&this.setData({display:!1})}}}}const p=i({name:"PressTransition",mixins:[m(!0)],props:{overlay:{type:Boolean,default:!1},enterClass:{type:String,default:""},enterActiveClass:{type:String,default:""},enterToClass:{type:String,default:""},leaveClass:{type:String,default:""},leaveActiveClass:{type:String,default:""},leaveToClass:{type:String,default:""},...a},emits:["click","touchmove","before-enter","enter","after-enter","before-leave","leave","after-leave"],data:()=>({classes:""}),options:{...n,styleIsolation:"shared"},computed:{rootStyle(){const{currentDuration:t,display:e,customStyle:s}=this;return h.rootStyle({currentDuration:t,display:e,customStyle:s})},transitionClass(){const{customClass:t,overlay:e,classes:s}=this;return`press-transition ${s} ${t} ${e?"press-overlay":""}`}},methods:{setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},onClick(){this.$emit("click")},onTouchmove(t){this.$emit("touchmove",t)}}},[["render",function(t,e,s,a,n,i){return t.inited?(r(),o("div",{key:0,class:u(i.transitionClass),style:d(i.rootStyle),onTransitionend:e[0]||(e[0]=(...e)=>t.onTransitionEnd&&t.onTransitionEnd(...e)),onClick:e[1]||(e[1]=(...t)=>i.onClick&&i.onClick(...t)),onTouchmove:e[2]||(e[2]=(...t)=>i.onTouchmove&&i.onTouchmove(...t))},[l(t.$slots,"default",{},void 0,!0)],38)):c("v-if",!0)}],["__scopeId","data-v-7793cc98"]]);export{p as P,m as t};
