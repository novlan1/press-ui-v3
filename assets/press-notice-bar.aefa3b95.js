import{_ as t,o as s,c as o,n as e,j as i,q as a,r as n,i as r,v as l,t as c,f as m,F as u,w as d,h,e as p,al as f}from"./index-64b5aeb5.js";import{P as y}from"./press-icon-plus.d8bee82b.js";import{r as C}from"./version.e043cae6.js";import{b}from"./rect.8c325831.js";import{i as g,u as k}from"./utils.28df66fa.js";import{s as w}from"./style.0f94ff97.js";import{d as I,a as _}from"./press-component.6d1ba0d0.js";import{g as v}from"./event.c5c037f6.js";const S={rootStyle:function(t){return w({color:t.color,"background-color":t.backgroundColor,background:t.background})}};const $=t({name:"PressNoticeBar",options:{...I,styleIsolation:"shared"},components:{PressIconPlus:y},props:{text:{type:String,default:""},mode:{type:String,default:""},url:{type:String,default:""},openType:{type:String,default:"navigate"},delay:{type:Number,default:1},speed:{type:Number,default:60},scrollable:{type:Boolean,default:!1},leftIcon:{type:String,default:""},color:{type:String,default:""},backgroundColor:{type:String,default:""},background:{type:String,default:""},wrapable:Boolean,..._},emits:["close","click"],data:()=>({show:!0,duration:0,animationDuration:0,contentWidth:0,translateX:0,isNotInUni:g()}),computed:{noticeBarClass(){const{mode:t,wrapable:s,customClass:o}=this;return`${o} ${k.bem2("notice-bar",{withicon:t,wrapable:s})}`},noticeBarStyle(){const{color:t,backgroundColor:s,background:o}=this;return S.rootStyle({color:t,backgroundColor:s,background:o})},animationStyle(){const{animationDuration:t,delay:s,translateX:o}=this;return[`transform: translateX(${o}px);`,`transition: -webkit-transform ${t}ms linear ${s}ms, transform ${t}ms linear ${s}ms;`,"transform-origin: 50% 50% 0px;"].join(" ")},leftIconClass:()=>"press-notice-bar__left-icon",leftIconCustomClass:()=>"",rightIconClass:()=>"press-notice-bar__right-icon",rightIconCustomClass:()=>""},watch:{text:{handler(){this.init()}},speed:{handler(){this.init()}}},created(){},mounted(){this.init()},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){this.timer&&clearTimeout(this.timer)},init(){C((()=>{Promise.all([b(this,".press-notice-bar__content"),b(this,".press-notice-bar__wrap")]).then((t=>{const[s,o]=t,{speed:e,scrollable:i}=this;if(null!=s&&null!=o&&s.width&&o.width&&!1!==i&&(i||o.width<s.width)){const t=(o.width+s.width)/e*1e3;this.wrapWidth=o.width,this.contentWidth=s.width,this.duration=t,this.scroll(!0)}}))}))},scroll(t=!1){this.timer&&clearTimeout(this.timer),this.timer=null,this.translateX=t?0:this.wrapWidth,this.animationDuration=0,C((()=>{this.translateX=-this.contentWidth,this.animationDuration=this.duration})),this.timer=setTimeout((()=>{this.scroll()}),this.duration)},onClickIcon(t){"closeable"===this.mode&&(this.timer&&clearTimeout(this.timer),this.timer=null,this.show=!1,this.$emit("close",v(t)))},onClick(t){this.$emit("click",t)}}},[["render",function(t,y,C,b,g,k){const w=p("PressIconPlus"),I=f;return s(),o("div",{class:"press-notice-bar-index"},[g.show?(s(),o("div",{key:0,class:e(k.noticeBarClass),style:i(k.noticeBarStyle),onClick:y[0]||(y[0]=(...t)=>k.onClick&&k.onClick(...t))},[C.leftIcon?(s(),a(w,{key:0,name:C.leftIcon,class:e([k.leftIconClass]),"custom-class":k.leftIconCustomClass},null,8,["name","class","custom-class"])):n(t.$slots,"left-icon",{key:1},void 0,!0),r("div",{class:"press-notice-bar__wrap"},[r("div",{class:e("press-notice-bar__content "+(!1!==C.scrollable||C.wrapable?"":"press-ellipsis")),style:i(k.animationStyle)},[l(c(C.text)+" ",1),C.text?m("v-if",!0):n(t.$slots,"default",{key:0},void 0,!0)],6)]),"closeable"===C.mode?(s(),a(w,{key:2,class:e([k.rightIconClass]),"custom-class":k.rightIconCustomClass,name:"cross",onClick:k.onClickIcon},null,8,["class","custom-class","onClick"])):"link"===C.mode?(s(),o(u,{key:3},[g.isNotInUni?(s(),a(w,{key:0,class:e([k.rightIconClass]),"custom-class":k.rightIconCustomClass,name:"arrow"},null,8,["class","custom-class"])):(s(),a(I,{key:1,url:C.url,"open-type":C.openType},{default:d((()=>[h(w,{class:e([k.rightIconClass]),"custom-class":k.rightIconCustomClass,name:"arrow"},null,8,["class","custom-class"])])),_:1},8,["url","open-type"]))],64)):n(t.$slots,"right-icon",{key:4},void 0,!0)],6)):m("v-if",!0)])}],["__scopeId","data-v-121f298f"]]);export{$ as P};
