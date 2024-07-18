import{P as t}from"./press-notice-bar.0d6d4f5d.js";import{_ as e,o as l,c as o,f as s,w as i,j as c,e as n}from"./index-43eb3ea0.js";import"./press-icon-plus.43efdcdd.js";import"./style.0f94ff97.js";import"./add-unit.0c57c089.js";import"./validator.84caa8d5.js";import"./press-info.68d3dd51.js";import"./utils.bb2d8d10.js";import"./press-component.181873fd.js";import"./version.7ee5c281.js";import"./rect.23461412.js";import"./event.1c00601d.js";import"./support-passive.bc409298.js";const r=e({i18n:{"zh-CN":{text:"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",mode:"通知栏模式",content:"内容",wrapable:"多行展示",shortText:"技术是开发它的人的共同灵魂。",scrollable:"滚动播放",customStyle:"自定义样式",verticalScroll:"垂直滚动",customSpeed:"自定义滚动速率"},"en-US":{text:"Technology is the common soul of the people who developed it.",mode:"Mode",content:"Content",wrapable:"Wrapable",shortText:"Some short text.",customStyle:"Custom Style",scrollable:"Scrollable",verticalScroll:"Vertical Scroll",customSpeed:"Speed"}},components:{PressNoticeBar:t},data:()=>({sectionStyle:"margin:0;"}),methods:{onClose(t){console.log("[onClose] val",t)}}},[["render",function(t,e,r,a,p,m){const d=c("press-notice-bar"),u=c("demo-block");return l(),o("div",{class:"demo-wrap"},[s(u,{title:t.t("basicUsage"),"section-style":p.sectionStyle},{default:i((()=>[s(d,{scrollable:"","left-icon":"volume-o",text:t.t("text")},null,8,["text"])])),_:1},8,["title","section-style"]),s(u,{title:t.t("scrollable"),"section-style":p.sectionStyle},{default:i((()=>[n(" 文字较短时，通过设置 scrollable 属性开启滚动播放 "),s(d,{scrollable:"",text:t.t("shortText")},null,8,["text"]),n(" 文字较长时，通过禁用 scrollable 属性关闭滚动播放 "),s(d,{scrollable:!1,text:t.t("text")},null,8,["text"])])),_:1},8,["title","section-style"]),s(u,{title:t.t("wrapable"),"section-style":p.sectionStyle},{default:i((()=>[s(d,{wrapable:"",scrollable:!1,text:t.t("text")},null,8,["text"])])),_:1},8,["title","section-style"]),s(u,{title:t.t("mode"),"section-style":p.sectionStyle},{default:i((()=>[n(" closeable 模式，在右侧显示关闭按钮 "),s(d,{mode:"closeable",text:t.t("shortText"),onClose:m.onClose},null,8,["text","onClose"]),n(" link 模式，在右侧显示链接箭头 "),s(d,{mode:"link",text:t.t("shortText")},null,8,["text"])])),_:1},8,["title","section-style"]),s(u,{title:t.t("customStyle"),"section-style":p.sectionStyle},{default:i((()=>[s(d,{color:"#1989fa",background:"#ecf9ff","left-icon":"info-o",text:t.t("shortText")},null,8,["text"])])),_:1},8,["title","section-style"]),s(u,{title:t.t("customSpeed"),"section-style":p.sectionStyle},{default:i((()=>[s(d,{text:t.t("shortText"),speed:100,scrollable:"","left-icon":"https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"},null,8,["text"])])),_:1},8,["title","section-style"])])}]]);export{r as default};
