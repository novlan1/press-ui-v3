import{_ as t,o as e,c as i,m as s,e as a,t as o,F as n,k as r}from"./index-38a6aa88.js";function m(t,e=2){let i=`${t}`;for(;i.length<e;)i=`0${i}`;return i}const h=1e3,c=6e4,d=36e5,l=24*d;function u(t){return{days:Math.floor(t/l),hours:Math.floor(t%l/d),minutes:Math.floor(t%d/c),seconds:Math.floor(t%c/h),milliseconds:Math.floor(t%h)}}function f(t){return setTimeout(t,30)}const p=t({name:"PressCountDown",props:{useSlot:Boolean,millisecond:Boolean,time:{type:Number,default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},emits:["change","finish"],data:()=>({formattedTime:"0",remain:0}),computed:{timeData(){return u(this.remain)}},watch:{time:{handler(t){const{remain:e,millisecond:i}=this;(i||Math.floor(t/1e3)!==Math.floor(e/1e3)&&Math.round(t/1e3)!==Math.round(e/1e3))&&this.reset()},immediate:!0}},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){clearTimeout(this.tid),this.tid=null},start(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause(){this.counting=!1,clearTimeout(this.tid)},reset(){this.pause(),this.remain=this.time,this.setRemain(this.remain),this.autoStart&&this.start()},tick(){this.millisecond?this.microTick():this.macroTick()},microTick(){this.tid=f((()=>{this.setRemain(this.getRemain()),0!==this.remain&&this.microTick()}))},macroTick(){this.tid=f((()=>{const t=this.getRemain();var e,i;e=t,i=this.remain,(Math.floor(e/1e3)!==Math.floor(i/1e3)||0===t)&&this.setRemain(t),0!==this.remain&&this.macroTick()}))},getRemain(){return Math.max(this.endTime-Date.now(),0)},setRemain(t){this.remain=t;const e=u(t);this.useSlot&&this.$emit("change",e),this.formattedTime=function(t,e){const{days:i}=e;let{hours:s,minutes:a,seconds:o,milliseconds:n}=e;return-1===t.indexOf("DD")?s+=24*i:t=t.replace("DD",m(i)),-1===t.indexOf("HH")?a+=60*s:t=t.replace("HH",m(s)),-1===t.indexOf("mm")?o+=60*a:t=t.replace("mm",m(a)),-1===t.indexOf("ss")?n+=1e3*o:t=t.replace("ss",m(o)),t.replace("SSS",m(n,3))}(this.format,e),0===t&&(this.pause(),this.$emit("finish"))}}},[["render",function(t,m,h,c,d,l){return e(),i("div",{class:"press-count-down"},[h.useSlot?s(t.$slots,"default",{key:0,timeData:l.timeData},(()=>[a("span",null,o(d.formattedTime),1)]),!0):(e(),i(n,{key:1},[r(o(d.formattedTime),1)],64))])}],["__scopeId","data-v-25902a7e"]]);export{p as P};
