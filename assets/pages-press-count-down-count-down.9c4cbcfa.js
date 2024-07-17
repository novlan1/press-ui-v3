import{P as t}from"./press-count-down.23d71649.js";import{a as s,P as e}from"./press-grid-item.a026f54b.js";import{a as o,b as i}from"./index.d215085d.js";import{_ as n,o as l,c as a,d as m,w as r,j as c,e as u,t as d}from"./index-38a6aa88.js";import"./style.0f94ff97.js";import"./add-unit.9c7267ae.js";import"./validator.59469ea1.js";import"./press-component.d8ea5855.js";import"./relation.25345683.js";import"./parent-map.dcad3672.js";import"./press-icon-plus.6056b7b8.js";import"./press-info.ad2fbb52.js";import"./utils.527a09c0.js";import"./link.12eb845c.js";const p=n({i18n:{"zh-CN":{millisecond:"毫秒级渲染",customStyle:"自定义样式",customFormat:"自定义格式",manualControl:"手动控制",formatWithDay:"DD 天 HH 时 mm 分 ss 秒",reset:"重置",pause:"暂停",start:"开始",finished:"倒计时结束"},"en-US":{millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss",reset:"Reset",pause:"Pause",start:"Start",finished:"Finished"}},components:{PressCountDown:t,PressGrid:s,PressGridItem:e},data:()=>({time:108e6,sectionStyle:"margin: 0 12px 20px;"}),methods:{onChange(){},start(){const t=o(this,"#controlCountDown");i(t,null,"start")},pause(){const t=o(this,"#controlCountDown");i(t,null,"pause")},reset(){const t=o(this,"#controlCountDown");i(t,null,"reset")},finished(){}}},[["render",function(t,s,e,o,i,n){const p=c("press-count-down"),f=c("demo-block"),y=c("press-grid-item"),C=c("press-grid");return l(),a("div",{class:"demo-wrap"},[m(f,{title:t.t("basicUsage"),"section-style":i.sectionStyle},{default:r((()=>[m(p,{time:i.time},null,8,["time"])])),_:1},8,["title","section-style"]),m(f,{title:t.t("customFormat"),"section-style":i.sectionStyle},{default:r((()=>[m(p,{time:i.time,format:t.t("formatWithDay")},null,8,["time","format"])])),_:1},8,["title","section-style"]),m(f,{title:t.t("millisecond"),"section-style":i.sectionStyle},{default:r((()=>[m(p,{time:i.time,millisecond:"",format:"HH:mm:ss:SSS"},null,8,["time"])])),_:1},8,["title","section-style"]),m(f,{title:t.t("customStyle"),"section-style":i.sectionStyle},{default:r((()=>[m(p,{"use-slot":"",time:i.time,onChange:n.onChange},{default:r((({timeData:t})=>[u("span",{class:"item"},d(t.hours),1),u("span",{class:"item"},d(t.minutes),1),u("span",{class:"item"},d(t.seconds),1)])),_:1},8,["time","onChange"])])),_:1},8,["title","section-style"]),m(f,{title:t.t("manualControl"),"section-style":i.sectionStyle},{default:r((()=>[m(p,{id:"controlCountDown",ref:"controlCountDown",millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:n.finished},null,8,["onFinish"])])),_:1},8,["title","section-style"]),m(C,{clickable:"","column-num":3},{default:r((()=>[m(y,{text:t.t("start"),icon:"play-circle-o",onClick:n.start},null,8,["text","onClick"]),m(y,{text:t.t("pause"),icon:"pause-circle-o",onClick:n.pause},null,8,["text","onClick"]),m(y,{text:t.t("reset"),icon:"replay",onClick:n.reset},null,8,["text","onClick"])])),_:1})])}],["__scopeId","data-v-ade6297c"]]);export{p as default};
