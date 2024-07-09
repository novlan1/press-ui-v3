import{P as t}from"./press-notice-bar.259ad2d4.js";import{_ as e,o as l,c as o,j as s,w as c,d as n,b as i}from"./index-7a15811b.js";import"./press-icon-plus.eb48dd73.js";import"./utils.f8cec38d.js";import"./add-unit.e5b08e9d.js";import"./press-info.b7012b43.js";import"./press-component.fd531b70.js";import"./version.2049afb8.js";import"./rect.d9533e17.js";import"./event.fe25d607.js";import"./support-passive.bc409298.js";const r=e({i18n:{"zh-CN":{text:"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",mode:"通知栏模式",content:"内容",wrapable:"多行展示",shortText:"技术是开发它的人的共同灵魂。",scrollable:"滚动播放",customStyle:"自定义样式",verticalScroll:"垂直滚动",customSpeed:"自定义滚动速率"},"en-US":{text:"Technology is the common soul of the people who developed it.",mode:"Mode",content:"Content",wrapable:"Wrapable",shortText:"Some short text.",customStyle:"Custom Style",scrollable:"Scrollable",verticalScroll:"Vertical Scroll",customSpeed:"Speed"}},components:{PressNoticeBar:t},data:()=>({sectionStyle:"margin:0;"}),methods:{onClose(t){console.log("[onClose] val",t)}}},[["render",function(t,e,r,a,p,m){const d=n("press-notice-bar"),u=n("demo-block");return l(),o("div",{class:"demo-wrap"},[s(u,{title:t.t("basicUsage"),"section-style":p.sectionStyle},{default:c((()=>[s(d,{scrollable:"","left-icon":"volume-o",text:t.t("text")},null,8,["text"])])),_:1},8,["title","section-style"]),s(u,{title:t.t("scrollable"),"section-style":p.sectionStyle},{default:c((()=>[i(" 文字较短时，通过设置 scrollable 属性开启滚动播放 "),s(d,{scrollable:"",text:t.t("shortText")},null,8,["text"]),i(" 文字较长时，通过禁用 scrollable 属性关闭滚动播放 "),s(d,{scrollable:!1,text:t.t("text")},null,8,["text"])])),_:1},8,["title","section-style"]),s(u,{title:t.t("wrapable"),"section-style":p.sectionStyle},{default:c((()=>[s(d,{wrapable:"",scrollable:!1,text:t.t("text")},null,8,["text"])])),_:1},8,["title","section-style"]),s(u,{title:t.t("mode"),"section-style":p.sectionStyle},{default:c((()=>[i(" closeable 模式，在右侧显示关闭按钮 "),s(d,{mode:"closeable",text:t.t("shortText"),onClose:m.onClose},null,8,["text","onClose"]),i(" link 模式，在右侧显示链接箭头 "),s(d,{mode:"link",text:t.t("shortText")},null,8,["text"])])),_:1},8,["title","section-style"]),s(u,{title:t.t("customStyle"),"section-style":p.sectionStyle},{default:c((()=>[s(d,{color:"#1989fa",background:"#ecf9ff","left-icon":"info-o",text:t.t("shortText")},null,8,["text"])])),_:1},8,["title","section-style"]),s(u,{title:t.t("customSpeed"),"section-style":p.sectionStyle},{default:c((()=>[s(d,{text:t.t("shortText"),speed:100,scrollable:"","left-icon":"https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"},null,8,["text"])])),_:1},8,["title","section-style"])])}]]);export{r as default};