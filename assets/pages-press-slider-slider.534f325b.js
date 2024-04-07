import{P as e}from"./press-slider.6acaef62.js";import{_ as t,M as l,o as a,c as n,d as o,w as s,l as i,e as u,t as c}from"./index-a6ed3ec5.js";import"./touch.bcbb2f5b.js";import"./unit.99aa2e92.js";const g=t({i18n:{"zh-CN":{title1:"基础用法",title2:"双滑块",title3:"指定选择范围",title4:"禁用",title5:"指定步长",customStyle:"自定义样式",customButton:"自定义按钮",text:"当前值：",vertical:"垂直方向"},"en-US":{title1:"Basic Usage",title2:"Dual thumb mode",title3:"Range",title4:"Disabled",title5:"Step size",customStyle:"Custom Style",customButton:"Custom Button",text:"Current value: ",vertical:"Vertical"}},components:{PressSlider:e,PressToast:l},data:()=>({sectionStyle:"margin: 12px 16px",valueMap:{basic:"50",range:[10,50],maxAndMin:50,customStyle:50,customButton:30},dragValue:50}),methods:{onChange(e){console.log("[onChange] val: ",e),this.onGTip(`${this.t("text")}${e.toString()}`)},onDrag(e){console.log("[onDrag] val: ",e),this.onGTip(`drag: ${e}`),this.dragValue=e}}},[["render",function(e,t,l,g,r,h){const v=i("PressSlider"),d=i("demo-block"),y=i("press-slider");return a(),n("div",{class:"demo-wrap"},[o(d,{title:e.t("basicUsage"),"section-style":r.sectionStyle},{default:s((()=>[o(v,{value:r.valueMap.basic,onChange:h.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),o(d,{title:e.t("title2"),"section-style":r.sectionStyle},{default:s((()=>[o(v,{value:r.valueMap.range,range:"",onChange:h.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),o(d,{title:e.t("title3"),"section-style":r.sectionStyle},{default:s((()=>[o(v,{min:-50,max:50,value:r.valueMap.maxAndMin,onChange:h.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),o(d,{title:e.t("title4"),"section-style":r.sectionStyle},{default:s((()=>[o(v,{disabled:"",value:r.valueMap.basic,onChange:h.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),o(d,{title:e.t("title5"),"section-style":r.sectionStyle},{default:s((()=>[o(v,{step:10,value:r.valueMap.basic,onChange:h.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),o(d,{title:e.t("customStyle"),"section-style":r.sectionStyle},{default:s((()=>[o(v,{"bar-height":"4px","active-color":"#ee0a24",value:r.valueMap.customStyle,onChange:h.onChange},null,8,["value","onChange"])])),_:1},8,["title","section-style"]),o(d,{title:e.t("customButton"),"section-style":r.sectionStyle},{default:s((()=>[o(v,{"use-button-slot":"",value:r.dragValue,onChange:h.onChange,onDrag:h.onDrag},{button:s((()=>[u("div",{class:"custom-button"},c(r.dragValue),1)])),_:1},8,["value","onChange","onDrag"])])),_:1},8,["title","section-style"]),o(d,{title:e.t("vertical"),"section-style":r.sectionStyle},{default:s((()=>[u("div",{style:{height:"150px"}},[o(y,{value:"50",vertical:"",onChange:h.onChange},null,8,["onChange"]),o(y,{value:r.valueMap.range,range:"",vertical:"","custom-style":"margin-left: 100px;",onChange:h.onChange},null,8,["value","onChange"])])])),_:1},8,["title","section-style"])])}],["__scopeId","data-v-413a76cf"]]);export{g as default};
