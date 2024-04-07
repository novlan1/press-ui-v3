import{_ as t,o as e,c as s,A as i,e as o,t as n,F as a,x as l,ab as r,ad as m,d as c,w as u,l as h}from"./index-a6ed3ec5.js";import{a as d,P as f}from"./press-grid-item.68fc34db.js";import"./relation.25345683.js";import"./parent-map.a476e3d9.js";function p(t,e=2){let s=`${t}`;for(;s.length<e;)s=`0${s}`;return s}const y=1e3,D=6e4,S=36e5,C=24*S;function g(t){return{days:Math.floor(t/C),hours:Math.floor(t%C/S),minutes:Math.floor(t%S/D),seconds:Math.floor(t%D/y),milliseconds:Math.floor(t%y)}}function k(t){return setTimeout(t,30)}const x=t({i18n:{"zh-CN":{millisecond:"毫秒级渲染",customStyle:"自定义样式",customFormat:"自定义格式",manualControl:"手动控制",formatWithDay:"DD 天 HH 时 mm 分 ss 秒",reset:"重置",pause:"暂停",start:"开始",finished:"倒计时结束"},"en-US":{millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss",reset:"Reset",pause:"Pause",start:"Start",finished:"Finished"}},components:{PressCountDown:t({name:"PressCountDown",props:{useSlot:Boolean,millisecond:Boolean,time:{type:Number,default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},emits:["change","finish"],data:()=>({formattedTime:"0",remain:0}),computed:{timeData(){return g(this.remain)}},watch:{time:{handler(t){const{remain:e,millisecond:s}=this;(s||Math.floor(t/1e3)!==Math.floor(e/1e3)&&Math.round(t/1e3)!==Math.round(e/1e3))&&this.reset()},immediate:!0}},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){clearTimeout(this.tid),this.tid=null},start(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause(){this.counting=!1,clearTimeout(this.tid)},reset(){this.pause(),this.remain=this.time,this.setRemain(this.remain),this.autoStart&&this.start()},tick(){this.millisecond?this.microTick():this.macroTick()},microTick(){this.tid=k((()=>{this.setRemain(this.getRemain()),0!==this.remain&&this.microTick()}))},macroTick(){this.tid=k((()=>{const t=this.getRemain();var e,s;e=t,s=this.remain,(Math.floor(e/1e3)!==Math.floor(s/1e3)||0===t)&&this.setRemain(t),0!==this.remain&&this.macroTick()}))},getRemain(){return Math.max(this.endTime-Date.now(),0)},setRemain(t){this.remain=t;const e=g(t);this.useSlot&&this.$emit("change",e),this.formattedTime=function(t,e){const{days:s}=e;let{hours:i,minutes:o,seconds:n,milliseconds:a}=e;return-1===t.indexOf("DD")?i+=24*s:t=t.replace("DD",p(s)),-1===t.indexOf("HH")?o+=60*i:t=t.replace("HH",p(i)),-1===t.indexOf("mm")?n+=60*o:t=t.replace("mm",p(o)),-1===t.indexOf("ss")?a+=1e3*n:t=t.replace("ss",p(n)),t.replace("SSS",p(a,3))}(this.format,e),0===t&&(this.pause(),this.$emit("finish"))}}},[["render",function(t,r,m,c,u,h){return e(),s("div",{class:"press-count-down"},[m.useSlot?i(t.$slots,"default",{key:0,timeData:h.timeData},(()=>[o("span",null,n(u.formattedTime),1)]),!0):(e(),s(a,{key:1},[l(n(u.formattedTime),1)],64))])}],["__scopeId","data-v-6751f132"]]),PressGrid:d,PressGridItem:f},data:()=>({time:108e6,sectionStyle:"margin: 0 12px 20px;"}),methods:{onChange(){},start(){const t=r(this,"#controlCountDown");m(t,null,"start")},pause(){const t=r(this,"#controlCountDown");m(t,null,"pause")},reset(){const t=r(this,"#controlCountDown");m(t,null,"reset")},finished(){}}},[["render",function(t,i,a,l,r,m){const d=h("press-count-down"),f=h("demo-block"),p=h("press-grid-item"),y=h("press-grid");return e(),s("div",{class:"demo-wrap"},[c(f,{title:t.t("basicUsage"),"section-style":r.sectionStyle},{default:u((()=>[c(d,{time:r.time},null,8,["time"])])),_:1},8,["title","section-style"]),c(f,{title:t.t("customFormat"),"section-style":r.sectionStyle},{default:u((()=>[c(d,{time:r.time,format:t.t("formatWithDay")},null,8,["time","format"])])),_:1},8,["title","section-style"]),c(f,{title:t.t("millisecond"),"section-style":r.sectionStyle},{default:u((()=>[c(d,{time:r.time,millisecond:"",format:"HH:mm:ss:SSS"},null,8,["time"])])),_:1},8,["title","section-style"]),c(f,{title:t.t("customStyle"),"section-style":r.sectionStyle},{default:u((()=>[c(d,{"use-slot":"",time:r.time,onChange:m.onChange},{default:u((({timeData:t})=>[o("span",{class:"item"},n(t.hours),1),o("span",{class:"item"},n(t.minutes),1),o("span",{class:"item"},n(t.seconds),1)])),_:1},8,["time","onChange"])])),_:1},8,["title","section-style"]),c(f,{title:t.t("manualControl"),"section-style":r.sectionStyle},{default:u((()=>[c(d,{id:"controlCountDown",ref:"controlCountDown",millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:m.finished},null,8,["onFinish"])])),_:1},8,["title","section-style"]),c(y,{clickable:"","column-num":3},{default:u((()=>[c(p,{text:t.t("start"),icon:"play-circle-o",onClick:m.start},null,8,["text","onClick"]),c(p,{text:t.t("pause"),icon:"pause-circle-o",onClick:m.pause},null,8,["text","onClick"]),c(p,{text:t.t("reset"),icon:"replay",onClick:m.reset},null,8,["text","onClick"])])),_:1})])}],["__scopeId","data-v-f226f18a"]]);export{x as default};
