import{P as e}from"./press-switch.50a1e5d9.js";import{P as t}from"./press-cell.09949a8d.js";import{P as l}from"./press-cell-group.51b2f9a1.js";import{P as s}from"./press-tag.09e41cc7.js";import{P as o}from"./press-icon-plus.cec3bc23.js";import{_ as i,o as a,c as r,j as n,w as c,d as u,k as d,t as h,u as p}from"./index-26897e9f.js";import"./press-loading-plus.3f0fdd35.js";import"./utils.f8cec38d.js";import"./add-unit.e5b08e9d.js";import"./press-component.5db9b2cc.js";import"./link.9c6737a1.js";import"./event.ab14895d.js";import"./support-passive.bc409298.js";import"./press-info.8af1a743.js";const y=i({i18n:{"zh-CN":{cell:"单元格",valueOnly:"只设置 value",showIcon:"展示图标",showArrow:"展示箭头",largeSize:"单元格大小",group:"分组",groupTitle:"分组标题",router:"页面跳转",urlRoute:"URL 跳转",vueRoute:"路由跳转",useSlots:"使用插槽",insetGrouped:"卡片风格",verticalCenter:"垂直居中",matchMode:"比赛模式",knockout:"淘汰赛",defaultBo1:"默认一局胜负",allowModifyAvatar:"允许比赛中修改队名队徽",getPhoneNumber:"获取参赛者手机号码",getPhoneNumberDesc:"便于发放奖励和联系参赛者，可在队员信息中查看"},"en-US":{cell:"Cell title",valueOnly:"Value only",showIcon:"Left Icon",showArrow:"Link",largeSize:"Size",group:"Group",groupTitle:"Group Title",router:"Router",urlRoute:"URL",vueRoute:"Vue Router",useSlots:"Use Slots",insetGrouped:"Inset Grouped",verticalCenter:"Vertical center",matchMode:"Match Mode",knockout:"Knockout",defaultBo1:"Default Bo1",allowModifyAvatar:"Allow modification of team info",getPhoneNumber:"Obtain player's phone number",getPhoneNumberDesc:"Distribute rewards and contact participants"}},components:{PressSwitch:e,PressCell:t,PressCellGroup:l,PressTag:s,PressIconPlus:o},data:()=>({sectionStyle:"margin: 0;background: #f7f8fa;",headerStyle:"background: #f7f8fa;",switchChecked:{1:!1,2:!1}}),methods:{onChangeSwitch(e,t){this.switchChecked[t]=e}}},[["render",function(e,t,l,s,o,i){const y=u("press-cell"),m=u("press-cell-group"),v=u("demo-block"),f=u("press-tag"),g=u("press-icon-plus"),S=u("press-switch");return a(),r("div",{class:"demo-wrap demo-wrap--gray"},[n(v,{title:e.t("basicUsage"),"header-style":o.headerStyle,"section-style":o.sectionStyle},{default:c((()=>[n(m,null,{default:c((()=>[n(y,{title:e.t("cell"),value:e.t("content")},null,8,["title","value"]),n(y,{title:e.t("cell"),value:e.t("content"),label:e.t("desc"),border:!1},null,8,["title","value","label"])])),_:1})])),_:1},8,["title","header-style","section-style"]),n(v,{title:e.t("insetGrouped"),"section-style":o.sectionStyle,"header-style":o.headerStyle},{default:c((()=>[n(m,{inset:""},{default:c((()=>[n(y,{title:e.t("cell"),value:e.t("content")},null,8,["title","value"]),n(y,{title:e.t("cell"),value:e.t("content"),label:e.t("desc")},null,8,["title","value","label"])])),_:1})])),_:1},8,["title","section-style","header-style"]),n(v,{title:e.t("largeSize"),"section-style":o.sectionStyle,"header-style":o.headerStyle},{default:c((()=>[n(y,{title:e.t("cell"),value:e.t("content"),size:"large"},null,8,["title","value"]),n(y,{title:e.t("cell"),value:e.t("content"),size:"large",label:e.t("desc")},null,8,["title","value","label"])])),_:1},8,["title","section-style","header-style"]),n(v,{title:e.t("showIcon"),"section-style":o.sectionStyle,"header-style":o.headerStyle},{default:c((()=>[n(y,{title:e.t("cell"),icon:"location-o"},null,8,["title"])])),_:1},8,["title","section-style","header-style"]),n(v,{title:e.t("showArrow"),"section-style":o.sectionStyle,"header-style":o.headerStyle},{default:c((()=>[n(y,{title:e.t("cell"),"is-link":""},null,8,["title"]),n(y,{title:e.t("cell"),value:e.t("content"),"is-link":""},null,8,["title","value"]),n(y,{title:e.t("cell"),value:e.t("content"),"is-link":"","arrow-direction":"down"},null,8,["title","value"])])),_:1},8,["title","section-style","header-style"]),n(v,{title:e.t("router"),"section-style":o.sectionStyle,"header-style":o.headerStyle},{default:c((()=>[n(y,{"is-link":"",title:e.t("cell"),"link-type":"navigateTo",url:"/pages/press/col/col"},null,8,["title"])])),_:1},8,["title","section-style","header-style"]),n(v,{title:e.t("groupTitle"),"section-style":o.sectionStyle,"header-style":o.headerStyle},{default:c((()=>[n(m,{title:`${e.t("group")}1`},{default:c((()=>[n(y,{title:e.t("cell"),value:e.t("content")},null,8,["title","value"])])),_:1},8,["title"]),n(m,{title:`${e.t("group")}2`},{default:c((()=>[n(y,{title:e.t("cell"),value:e.t("content")},null,8,["title","value"])])),_:1},8,["title"])])),_:1},8,["title","section-style","header-style"]),n(v,{title:e.t("useSlots"),"section-style":o.sectionStyle,"header-style":o.headerStyle},{default:c((()=>[n(y,{value:e.t("content"),"is-link":"","use-title-slot":!0},{title:c((()=>[d("span",{class:"press-cell-text"},h(e.t("cell")),1),n(f,{type:"danger"},{default:c((()=>[p(h(e.t("tag")),1)])),_:1})])),_:1},8,["value"]),n(y,{title:e.t("cell"),icon:"shop-o"},{"right-icon":c((()=>[n(g,{name:"search",class:"custom-icon"})])),_:1},8,["title"])])),_:1},8,["title","section-style","header-style"]),n(v,{title:e.t("verticalCenter"),"section-style":o.sectionStyle,"header-style":o.headerStyle},{default:c((()=>[n(y,{center:"",title:e.t("cell"),value:e.t("content"),label:e.t("desc")},null,8,["title","value","label"])])),_:1},8,["title","section-style","header-style"]),n(v,{title:"E-SPORT","header-style":o.headerStyle,"section-style":o.sectionStyle},{default:c((()=>[d("div",{class:"demo--e-sport-wrap"},[n(y,{title:e.t("matchMode"),value:e.t("knockout"),type:"e-sport","is-link":"",border:!1},null,8,["title","value"]),n(y,{title:e.t("wayToWin"),value:e.t("defaultBo1"),type:"e-sport","is-link":"",border:!1},null,8,["title","value"]),n(y,{title:e.t("allowModifyAvatar"),border:!1,type:"e-sport"},{"right-icon":c((()=>[n(S,{"custom-class":"press-switch--e-sport",checked:o.switchChecked[1],onChange:t[0]||(t[0]=e=>i.onChangeSwitch(e,1))},null,8,["checked"])])),_:1},8,["title"]),n(y,{title:e.t("getPhoneNumber"),label:e.t("getPhoneNumberDesc"),type:"e-sport",center:"",border:!1},{"right-icon":c((()=>[n(S,{"custom-class":"press-switch--e-sport",checked:o.switchChecked[2],onChange:t[1]||(t[1]=e=>i.onChangeSwitch(e,2))},null,8,["checked"])])),_:1},8,["title","label"])])])),_:1},8,["header-style","section-style"])])}],["__scopeId","data-v-26962c50"]]);export{y as default};