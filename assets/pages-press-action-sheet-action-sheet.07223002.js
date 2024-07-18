import{P as t}from"./press-action-sheet.cc1f8857.js";import{P as e}from"./press-cell.a0845ac7.js";import{_ as o,o as s,c as i,F as n,v as l,f as p,w as c,j as a,x as r,h,t as m}from"./index-43eb3ea0.js";import"./press-icon-plus.43efdcdd.js";import"./style.0f94ff97.js";import"./add-unit.0c57c089.js";import"./validator.84caa8d5.js";import"./press-info.68d3dd51.js";import"./utils.bb2d8d10.js";import"./press-component.181873fd.js";import"./press-popup-plus.974d6763.js";import"./press-overlay.4c76514c.js";import"./press-transition.e8aeacc8.js";import"./version.7ee5c281.js";import"./press-loading-plus.e7ffc3ab.js";import"./button.49122d4f.js";import"./link.82331220.js";import"./event.1c00601d.js";import"./support-passive.bc409298.js";const u=o({i18n:{"zh-CN":{custom:"自定义",option1:"选项一",option2:"选项二",option3:"选项三",subname:"描述信息",showCancel:"展示取消按钮",buttonText:"弹出菜单",customPanel:"自定义面板",description:"这是一段描述信息",optionStatus:"选项状态",coloredOption:"着色选项",disabledOption:"禁用选项",showDescription:"展示描述信息",wxOpen:"微信开放能力",qqOpen:"QQ开放能力",alipayOpen:"支付宝开放能力",mpOpen:"小程序开放能力",getUserInfo:"获取用户信息"},"en-US":{custom:"Custom",option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description",wxOpen:"Wechat Open API",qqOpen:"QQ Open API",alipayOpen:"Alipay Open API",mpOpen:"Mini Program Open API",getUserInfo:"Get User Info"}},components:{PressActionSheet:t,PressCell:e},data(){return{demoList:[{title:this.t("basicUsage"),list:[{title:this.t("check"),type:"basic"}]},{title:this.t("custom"),list:[{title:this.t("optionStatus"),type:"status"},{title:this.t("showCancel"),type:"cancel"},{title:this.t("showDescription"),type:"description"},{title:this.t("customPanel"),type:"title"}]}],show:!1,showCustom:!1,cancelText:"",description:"",title:"",curActions:[]}},computed:{actions(){return[{name:this.t("option1")},{name:this.t("option2")},{name:this.t("option3"),subname:this.t("subname"),openType:"share"}]}},mounted(){this.curActions=this.actions},methods:{onShowActionSheet(t){const e=[{name:this.t("coloredOption"),color:"#ee0a24"},{loading:!0},{name:this.t("disabledOption"),disabled:!0}],o=[{name:this.t("getUserInfo"),color:"#07c160",openType:"getUserInfo"}];let s="",i="",n=[],l="";switch(t){case"title":return void(this.showCustom=!0);case"basic":n=this.actions;break;case"wxOpen":n=o,l=this.t("title");break;case"status":n=e;break;case"cancel":n=this.actions,s=this.t("cancel");break;case"description":n=this.actions,i=this.t("description")}this.show=!0,this.cancelText=s,this.description=i,this.curActions=n,this.title=l},onClose(){this.show=!1,this.showCustom=!1},onSelect(t){console.log("onSelect.e",t)},onGetUserInfo(t){console.log("onGetUserInfo.e",t)}}},[["render",function(t,e,o,u,d,w){const C=a("press-cell"),O=a("demo-block"),S=a("press-action-sheet");return s(),i("div",{class:"demo-wrap"},[(s(!0),i(n,null,l(d.demoList,((t,e)=>(s(),r(O,{key:e,title:t.title},{default:c((()=>[(s(!0),i(n,null,l(t.list,(t=>(s(),r(C,{key:t.title,title:t.title,"is-link":"",onClick:e=>w.onShowActionSheet(t.type)},null,8,["title","onClick"])))),128))])),_:2},1032,["title"])))),128)),p(S,{show:d.show,actions:d.curActions,"cancel-text":d.cancelText,description:d.description,title:d.title,onClose:w.onClose,onSelect:w.onSelect,onGetuserinfo:w.onGetUserInfo,onCancel:w.onClose},null,8,["show","actions","cancel-text","description","title","onClose","onSelect","onGetuserinfo","onCancel"]),p(S,{show:d.showCustom,title:t.t("title"),onClose:w.onClose,onSelect:w.onSelect,onCancel:w.onClose},{default:c((()=>[h("div",{style:{padding:"16px"}},m(t.t("content")),1)])),_:1},8,["show","title","onClose","onSelect","onCancel"])])}]]);export{u as default};
