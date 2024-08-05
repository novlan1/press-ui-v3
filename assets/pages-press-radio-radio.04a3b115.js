import{P as a,a as e}from"./press-radio-group.e4bf7cd7.js";import{P as t}from"./press-cell.c8fe1713.js";import{P as l}from"./press-cell-group.0af51f59.js";import{_ as o,o as i,c as s,h as n,w as u,e as c,v as r,t as d,i as m}from"./index-5ce068d6.js";import"./press-icon-plus.86d78210.js";import"./style.0f94ff97.js";import"./add-unit.39434bfe.js";import"./press-info.be4091c7.js";import"./utils.29d4c09b.js";import"./press-component.7a68e6d8.js";import"./version.4c093b8d.js";import"./relation.8b10893c.js";import"./parent-map.b443f4cc.js";import"./parent.59fa8a22.js";import"./link.2803ba37.js";import"./event.eea0932c.js";import"./support-passive.bc409298.js";const p=o({i18n:{"zh-CN":{radio:"单选框",text1:"未选中禁用",text2:"选中且禁用",withCell:"与 Cell 组件一起使用",horizontal:"水平排列",customIcon:"自定义图标",customColor:"自定义颜色",customShape:"自定义形状",customIconSize:"自定义大小",disableLabel:"禁用文本点击"},"en-US":{radio:"Radio",text1:"Disabled",text2:"Disabled and checked",withCell:"Inside a Cell",horizontal:"Hrizontal",customIcon:"Custom Icon",customColor:"Custom Color",customShape:"Custom Shape",customIconSize:"Custom Icon Size",disableLabel:"Disable label click"}},components:{PressRadio:a,PressRadioGroup:e,PressCell:t,PressCellGroup:l},data:()=>({valueMap:{basic:"a",horizontal:"a",disabled:"a",square:"a",customStyle:"a",customSize:"a",customIcon:"a",labelDisabled:"a",cell:"1"},icon:{normal:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png",active:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png"}}),methods:{onChange(a,e){console.log("onChange.val",a),this.valueMap[e]=a}}},[["render",function(a,e,t,l,o,p){const h=c("press-radio"),v=c("press-radio-group"),f=c("demo-block"),b=c("press-cell"),g=c("press-cell-group");return i(),s("div",{class:"demo-wrap"},[n(f,{title:a.t("basicUsage")},{default:u((()=>[n(v,{value:o.valueMap.basic,onChange:e[0]||(e[0]=a=>p.onChange(a,"basic"))},{default:u((()=>[n(h,{name:"a"},{default:u((()=>[r(d(a.t("radio"))+" 1 ",1)])),_:1}),n(h,{name:"b"},{default:u((()=>[r(d(a.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),n(f,{title:a.t("horizontal")},{default:u((()=>[n(v,{value:o.valueMap.horizontal,direction:"horizontal",onChange:e[1]||(e[1]=a=>p.onChange(a,"horizontal"))},{default:u((()=>[n(h,{name:"a"},{default:u((()=>[r(d(a.t("radio"))+" 1 ",1)])),_:1}),n(h,{name:"b"},{default:u((()=>[r(d(a.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),n(f,{title:a.t("disabled")},{default:u((()=>[n(v,{value:o.valueMap.disabled,disabled:"",onChange:e[2]||(e[2]=a=>p.onChange(a,"disabled"))},{default:u((()=>[n(h,{name:"a"},{default:u((()=>[r(d(a.t("radio"))+" 1 ",1)])),_:1}),n(h,{name:"b"},{default:u((()=>[r(d(a.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),n(f,{title:a.t("customShape")},{default:u((()=>[n(v,{value:o.valueMap.square,onChange:e[3]||(e[3]=a=>p.onChange(a,"square"))},{default:u((()=>[n(h,{name:"a",shape:"square"},{default:u((()=>[r(d(a.t("radio"))+" 1 ",1)])),_:1}),n(h,{name:"b",shape:"square"},{default:u((()=>[r(d(a.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),n(f,{title:a.t("customColor")},{default:u((()=>[n(v,{value:o.valueMap.customStyle,onChange:e[4]||(e[4]=a=>p.onChange(a,"customStyle"))},{default:u((()=>[n(h,{name:"a","checked-color":"#07c160"},{default:u((()=>[r(d(a.t("radio"))+" 1 ",1)])),_:1}),n(h,{name:"b","checked-color":"#07c160"},{default:u((()=>[r(d(a.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),n(f,{title:a.t("customIconSize")},{default:u((()=>[n(v,{value:o.valueMap.customSize,onChange:e[5]||(e[5]=a=>p.onChange(a,"customSize"))},{default:u((()=>[n(h,{name:"a","icon-size":"24px"},{default:u((()=>[r(d(a.t("radio"))+" 1 ",1)])),_:1}),n(h,{name:"b","icon-size":"24px"},{default:u((()=>[r(d(a.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),n(f,{title:a.t("customIcon")},{default:u((()=>[n(v,{value:o.valueMap.customIcon,onChange:e[6]||(e[6]=a=>p.onChange(a,"customIcon"))},{default:u((()=>[n(h,{name:"a","use-icon-slot":""},{icon:u((()=>[m("img",{class:"img",src:"a"===o.valueMap.customIcon?o.icon.active:o.icon.normal},null,8,["src"])])),default:u((()=>[r(d(a.t("radio"))+" 1 ",1)])),_:1}),n(h,{name:"b","use-icon-slot":""},{icon:u((()=>[m("img",{class:"img",src:"b"===o.valueMap.customIcon?o.icon.active:o.icon.normal},null,8,["src"])])),default:u((()=>[r(d(a.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),n(f,{title:a.t("disableLabel")},{default:u((()=>[n(v,{value:o.valueMap.labelDisabled,onChange:e[7]||(e[7]=a=>p.onChange(a,"labelDisabled"))},{default:u((()=>[n(h,{name:"a","label-disabled":""},{default:u((()=>[r(d(a.t("radio"))+" 1 ",1)])),_:1}),n(h,{name:"b","label-disabled":""},{default:u((()=>[r(d(a.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),n(f,{title:a.t("withCell"),"section-style":"margin: 0;"},{default:u((()=>[n(v,{value:o.valueMap.cell,onChange:e[10]||(e[10]=a=>p.onChange(a,"cell"))},{default:u((()=>[n(g,null,{default:u((()=>[n(b,{title:`${a.t("radio")} 1`,clickable:"","data-name":"1",onClick:e[8]||(e[8]=a=>o.valueMap.cell="1")},{"right-icon":u((()=>[n(h,{name:"1"})])),_:1},8,["title"]),n(b,{title:`${a.t("radio")} 2`,clickable:"","data-name":"2",onClick:e[9]||(e[9]=a=>o.valueMap.cell="2")},{"right-icon":u((()=>[n(h,{name:"2"})])),_:1},8,["title"])])),_:1})])),_:1},8,["value"])])),_:1},8,["title"])])}],["__scopeId","data-v-1b9d62fd"]]);export{p as default};