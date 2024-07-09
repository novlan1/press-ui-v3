import{P as t}from"./press-slider.f6265841.js";import{P as e}from"./press-toast.66948507.js";import{_ as l,o as n,c as a,j as s,w as o,d as i,k as u,t as r}from"./index-7a15811b.js";import"./utils.f8cec38d.js";import"./add-unit.e5b08e9d.js";import"./touch.bcbb2f5b.js";import"./version.2049afb8.js";import"./rect.d9533e17.js";import"./unit.bd2dd6ed.js";import"./press-component.fd531b70.js";import"./press-icon-plus.eb48dd73.js";import"./press-info.b7012b43.js";import"./press-loading-plus.1f19fb52.js";import"./press-overlay.90919dc1.js";import"./press-transition.4baf6de8.js";import"./dialog-mixin.972593d2.js";import"./component-handler.0dac4a4b.js";const c=l({i18n:{"zh-CN":{title1:"基础用法",title2:"双滑块",title3:"指定选择范围",title4:"禁用",title5:"指定步长",customStyle:"自定义样式",customButton:"自定义按钮",text:"当前值：",vertical:"垂直方向"},"en-US":{title1:"Basic Usage",title2:"Dual thumb mode",title3:"Range",title4:"Disabled",title5:"Step size",customStyle:"Custom Style",customButton:"Custom Button",text:"Current value: ",vertical:"Vertical"}},components:{PressSlider:t,PressToast:e},data:()=>({sectionStyle:"margin: 12px 16px",valueMap:{basic:"50",range:[10,50],maxAndMin:50,customStyle:50,customButton:30},dragValue:50}),methods:{onChange(t){console.log("[onChange] val: ",t),this.onGTip(`${this.t("text")}${t.toString()}`)},onDrag(t){console.log("[onDrag] val: ",t),this.onGTip(`drag: ${t}`),this.dragValue=t}}},[["render",function(t,e,l,c,g,p){const m=i("PressSlider"),h=i("demo-block"),d=i("press-slider");return n(),a("div",{class:"demo-wrap"},[s(h,{title:t.t("basicUsage"),"section-style":g.sectionStyle},{default:o((()=>[s(m,{value:g.valueMap.basic,onChange:p.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),s(h,{title:t.t("title2"),"section-style":g.sectionStyle},{default:o((()=>[s(m,{value:g.valueMap.range,range:"",onChange:p.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),s(h,{title:t.t("title3"),"section-style":g.sectionStyle},{default:o((()=>[s(m,{min:-50,max:50,value:g.valueMap.maxAndMin,onChange:p.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),s(h,{title:t.t("title4"),"section-style":g.sectionStyle},{default:o((()=>[s(m,{disabled:"",value:g.valueMap.basic,onChange:p.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),s(h,{title:t.t("title5"),"section-style":g.sectionStyle},{default:o((()=>[s(m,{step:10,value:g.valueMap.basic,onChange:p.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),s(h,{title:t.t("customStyle"),"section-style":g.sectionStyle},{default:o((()=>[s(m,{"bar-height":"4px","active-color":"#ee0a24",value:g.valueMap.customStyle,onChange:p.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),s(h,{title:t.t("customButton"),"section-style":g.sectionStyle},{default:o((()=>[s(m,{"use-button-slot":"",value:g.dragValue,onChange:p.onChange,onDrag:p.onDrag},{button:o((()=>[u("div",{class:"custom-button"},r(g.dragValue),1)])),_:1},8,["value","onChange","onDrag"])])),_:1},8,["title","section-style"]),s(h,{title:t.t("vertical"),"section-style":g.sectionStyle},{default:o((()=>[u("div",{style:{height:"150px"}},[s(d,{value:"50",vertical:"",onChange:p.onChange},null,8,["onChange"]),s(d,{value:g.valueMap.range,range:"",vertical:"","custom-style":"margin-left: 100px;",onChange:p.onChange},null,8,["value","onChange"])])])),_:1},8,["title","section-style"])])}],["__scopeId","data-v-eff8390e"]]);export{c as default};