import{_ as o,o as t,c as n,e as s,d as i,w as e,h as l,l as c,j as r,t as p,k as a,S as u}from"./index-38a6aa88.js";import{P as m}from"./press-cell.331e86fe.js";import{P as C}from"./press-popup.d46dd0c2.js";import{s as d}from"./index.d215085d.js";import{P as h}from"./press-icon-plus.6056b7b8.js";import"./link.12eb845c.js";import"./utils.527a09c0.js";import"./add-unit.9c7267ae.js";import"./validator.59469ea1.js";import"./style.0f94ff97.js";import"./press-component.d8ea5855.js";import"./event.5310d546.js";import"./support-passive.bc409298.js";import"./press-button.900fb7de.js";import"./press-loading-plus.d5f0d0fb.js";import"./press-loading.49821fab.js";import"./button.ac8ab533.js";import"./system.3ebd09ca.js";import"./function.1b6443db.js";import"./press-info.ad2fbb52.js";const S="press-picker-functional",P={ASYNC_NORMAL:"async-normal",ASYNC_PROMISE:"async-promise"};function w({t:o,type:t,onTip:n,onGShowLoading:s}){return new Promise((i=>{s(o("asyncConfirm"),{mask:!0,duration:3e3}),setTimeout((()=>{"confirm"===t?(n(o("asyncConfirmSuccess")),i(!0)):(i(!1),n(o("asyncConfirmFail")))}),500)}))}let y;const f=o({i18n:{"zh-CN":{wayToWin:"决胜方式",SomeContent:"一些内容",SomeScrollContent:"一些可以滚动的内容",controlledPopup:"受控组件",functional:"函数式调用",check:"查看",closeIcon:"关闭图标",customStyle:"自定义样式",buttonSlot:"使用插槽",cancelIcon:"取消图标",noCloseOrCancel:"没有关闭/取消",plainButtonConfirm:"线框按钮",disabledButton:"禁用状态",horizontal:"横版",asyncClose:"异步关闭",asyncConfirm:"异步确认中...",asyncConfirmSuccess:"异步确认后可以关闭",asyncConfirmFail:"异步确认后禁止关闭",useWay:"使用方式",notPromiseFunction:"Not Promise",promiseFunction:"Promise"},"en-US":{wayToWin:"Bo Number",SomeContent:"Some Content",controlledPopup:"Controlled Popup",functional:"Functional Mode",check:"Check",customStyle:"Custom Style",buttonSlot:"Use Slot",closeIcon:"Close Ion",cancelIcon:"Cancel Icon",noCloseOrCancel:"No Close Or Cancel",plainButtonConfirm:"Plain Button",disabledButton:"Disabled Button",horizontal:"Horizontal Version",asyncClose:"Async Close",asyncConfirm:"Async Confirm ...",asyncConfirmSuccess:"Async Confirm Success",asyncConfirmFail:"Async Confirm Fail",useWay:"Use Way",notPromiseFunction:"Not Promise",promiseFunction:"Promise"}},components:{PressCell:m,PressPopup:C,PressIconPlus:h},data(){y=this;const o={title:this.t("wayToWin"),popupTitleBtn:this.t("confirm"),isCrossSlab:!1,isShowpopuoClose:!1,showBackArrow:!1,isBorderBtn:!1,disabledButton:!1,customStyle:"",onConfirm:()=>{this.curPicker.show=!1},onCancel:()=>{this.curPicker.show=!1}};return{type:"",customStyle:"",popupOptions:{normal:{isShowpopuoClose:!0},cancel:{showBackArrow:!0},noClose:{},hor:{popupTitleBtn:"",isCrossSlab:!0,isShowpopuoClose:!0,customStyle:""},borderBtn:{isShowpopuoClose:!0,isBorderBtn:!0},disabledButton:{isShowpopuoClose:!0,disabledButton:!0}},commonOptions:o,curPicker:{...o},pressPickerFunctionalData:{},PRESS_PICKER_ID:S,showControlledPopup:!1,showSlotPopup:!1,TYPE_MAP:P}},computed:{},methods:{onShowPopup(o){this.onGHideToast(),this.type=o,"disabledButton"===o&&setTimeout((()=>{this.curPicker.disabledButton=!1}),3e3),this.curPicker={...this.commonOptions,...this.popupOptions[o],show:!0}},onTip(o){this.onGTip(o)},onShowFunctionalPicker(){d.call(this,{context:this,selector:`#${S}`,title:this.t("wayToWin"),button:this.t("confirm"),horizontal:!1,closeIcon:!1,arrowIcon:!0,borderButton:!1,customStyle:""}).then((()=>{this.onTip("confirm")})).catch((()=>{this.onTip("cancel")}))},onConfirm(){this.onTip("confirm")},onCancel(){this.onTip("cancel")},onShowControlledPopup(){this.showControlledPopup=!0},onShowAsyncClosePopup(o){this.type=o,this.curPicker={...this.commonOptions,isShowpopuoClose:!0,show:!0}},asyncConfirm:()=>y.type===P.ASYNC_PROMISE?w({t:y.t,type:"confirm",onTip:y.onTip,onGShowLoading:y.onGShowLoading}):y.type!==P.ASYNC_NORMAL||(y.onTip("Can Close"),!0),asyncCancel:()=>y.type===P.ASYNC_PROMISE?w({t:y.t,type:"cancel",onTip:y.onTip,onGShowLoading:y.onGShowLoading}):y.type!==P.ASYNC_NORMAL||(y.onTip("Can not close"),!1)}},[["render",function(o,m,C,d,h,S){const P=r("press-cell"),w=r("demo-block"),y=r("PressPopup"),f=r("PressIconPlus"),k=u,b=r("press-popup");return t(),n("div",{class:"demo-wrap"},[s("div",null,[i(w,{title:o.t("basicUsage")},{default:e((()=>[i(P,{title:o.t("closeIcon"),"is-link":"",onClick:m[0]||(m[0]=o=>S.onShowPopup("normal"))},null,8,["title"]),i(P,{title:o.t("cancelIcon"),"is-link":"",onClick:m[1]||(m[1]=o=>S.onShowPopup("cancel"))},null,8,["title"]),i(P,{title:o.t("noCloseOrCancel"),"is-link":"",onClick:m[2]||(m[2]=o=>S.onShowPopup("noClose"))},null,8,["title"])])),_:1},8,["title"]),i(w,{title:o.t("customStyle")},{default:e((()=>[i(P,{title:o.t("plainButtonConfirm"),"is-link":"",onClick:m[3]||(m[3]=o=>S.onShowPopup("borderBtn"))},null,8,["title"]),i(P,{title:o.t("disabledButton"),"is-link":"",onClick:m[4]||(m[4]=o=>S.onShowPopup("disabledButton"))},null,8,["title"]),i(P,{title:o.t("horizontal"),"is-link":"",onClick:m[5]||(m[5]=o=>S.onShowPopup("hor"))},null,8,["title"]),i(P,{title:o.t("buttonSlot"),"is-link":"",onClick:m[6]||(m[6]=o=>h.showSlotPopup=!0)},null,8,["title"])])),_:1},8,["title"]),i(w,{title:o.t("asyncClose")},{default:e((()=>[i(P,{title:o.t("notPromiseFunction"),"is-link":"",onClick:m[7]||(m[7]=o=>S.onShowAsyncClosePopup(h.TYPE_MAP.ASYNC_NORMAL))},null,8,["title"]),i(P,{title:o.t("promiseFunction"),"is-link":"",onClick:m[8]||(m[8]=o=>S.onShowAsyncClosePopup(h.TYPE_MAP.ASYNC_PROMISE))},null,8,["title"])])),_:1},8,["title"]),i(w,{title:o.t("useWay")},{default:e((()=>[i(P,{title:o.t("controlledPopup"),"is-link":"",onClick:S.onShowControlledPopup},null,8,["title","onClick"]),i(P,{title:o.t("functional"),"is-link":"",onClick:S.onShowFunctionalPicker},null,8,["title","onClick"])])),_:1},8,["title"])]),h.curPicker.show?(t(),l(y,{key:0,"is-showpopup-close":h.curPicker.isShowpopuoClose,"show-back-arrow":h.curPicker.showBackArrow,"is-cross-slab":h.curPicker.isCrossSlab,"is-border-btn":h.curPicker.isBorderBtn,"disabled-button":h.curPicker.disabledButton,"width-number":54,"custom-style":h.curPicker.customStyle,"popup-title":h.curPicker.title,"popup-title-btn":h.curPicker.popupTitleBtn,"async-confirm":S.asyncConfirm,"async-close":S.asyncCancel,onOnConfirm:h.curPicker.onConfirm,onOnCancel:h.curPicker.onCancel},{default:e((()=>[s("div",{class:"content"},p(o.t("SomeContent")),1)])),_:1},8,["is-showpopup-close","show-back-arrow","is-cross-slab","is-border-btn","disabled-button","custom-style","popup-title","popup-title-btn","async-confirm","async-close","onOnConfirm","onOnCancel"])):c("v-if",!0),i(y,{"is-show":h.showSlotPopup,onConfirm:m[9]||(m[9]=o=>h.showSlotPopup=!1),onCancel:m[10]||(m[10]=o=>h.showSlotPopup=!1)},{icon:e((()=>[i(f,{name:"gem-o",size:"22px"})])),title:e((()=>[s("div",null,[a(p(o.t("wayToWin"))+" ",1),i(f,{name:"like-o",size:"16"})])])),button:e((()=>[i(f,{name:"setting-o",size:"22px"})])),default:e((()=>[s("div",{class:"content"},p(o.t("SomeContent")),1)])),_:1},8,["is-show"]),i(y,{"is-show":h.showControlledPopup,button:o.t("confirm"),title:o.t("controlledPopup"),onConfirm:m[11]||(m[11]=o=>h.showControlledPopup=!1),onCancel:m[12]||(m[12]=o=>h.showControlledPopup=!1)},{default:e((()=>[s("div",{class:"content"},p(o.t("SomeContent")),1)])),_:1},8,["is-show","button","title"]),i(b,{id:h.PRESS_PICKER_ID,ref:h.PRESS_PICKER_ID,mode:"functional"},{default:e((()=>[i(k,{"scroll-y":"",style:{maxHeight:"200px",padding:"0 20px"}},{default:e((()=>[s("div",{class:"content__inner"},p(o.t("SomeScrollContent")),1),s("div",{class:"content__inner"},p(o.t("SomeScrollContent")),1),s("div",{class:"content__inner"},p(o.t("SomeScrollContent")),1)])),_:1})])),_:1},8,["id"])])}],["__scopeId","data-v-27117671"]]);export{f as default};
