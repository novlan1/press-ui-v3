import{_ as e,o as t,c as s,h as o,w as a,n,r as l,F as i,v as r,t as c,f as d,i as u,q as p,e as m,H as g}from"./index-66fd861e.js";import{t as f}from"./index.f68c0fc5.js";import{a as h}from"./handler-helper.33469563.js";import{a as y,b as C}from"./index.f858b165.js";import{n as S}from"./add-unit.9de8b2f7.js";import{i as v}from"./h5-handler.22e1e9ba.js";import{P as B}from"./press-popup-plus.c2e56d09.js";import{P as b}from"./press-button.2236d5eb.js";import{b as w}from"./button.e606098b.js";import{R as k,G as x}from"./color.3a05f6e0.js";import{t as O}from"./function.9f196d55.js";import{a as T,d as _}from"./press-component.573dfcec.js";import{u as j}from"./utils.d8f13396.js";import{g as P}from"./dialog-mixin.5160f0f1.js";const A={show:{type:Boolean,default:!1},title:{type:String,default:""},message:{type:String,default:""},theme:{type:String,default:"default"},useSlot:Boolean,className:{type:String,default:""},customStyle:{type:String,default:""},asyncClose:Boolean,messageAlign:{type:String,default:""},beforeClose:{type:[null,Function],default:null},overlayStyle:{type:String,default:""},useTitleSlot:Boolean,showCancelButton:Boolean,closeOnClickOverlay:Boolean,confirmButtonOpenType:{type:String,default:""},width:{type:[String,Number],default:""},zIndex:{type:Number,default:2e3},confirmButtonText:{type:String,default:f("confirm")},cancelButtonText:{type:String,default:f("cancel")},confirmButtonColor:{type:String,default:k},cancelButtonColor:{type:String,default:x},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},transition:{type:String,default:"scale"},...T};const I=e({name:"PressDialogPlus",options:{..._,styleIsolation:"shared"},components:{PressPopup:B,PressButton:b},mixins:[w,P(A)],props:A,emits:["close","confirm","cancel"],data:()=>({utils:j,loading:{confirm:!1,cancel:!1},callback:()=>{}}),watch:{dataShow:{handler(e){e||this.stopLoading()}}},methods:{onConfirm(){this.handleAction("confirm")},onCancel(){this.handleAction("cancel")},onClickOverlay(){this.close("overlay")},close(e){this.dataShow=!1,this.$nextTick((()=>{this.$emit("close",e);const{callback:t}=this;t&&t(e,this)}))},stopLoading(){this.loading.confirm=!1,this.loading.cancel=!1},handleAction(e){this.$emit(e,{dialog:this});const{dataAsyncClose:t,dataBeforeClose:s}=this;t||s?(this.loading[e]=!0,s&&O(s(e)).then((t=>{t?this.close(e):this.stopLoading()}))):this.close(e)}}},[["render",function(e,g,f,h,y,C){const S=m("press-button"),v=m("press-popup");return t(),s("div",{class:"press-dialog-index"},[o(v,{show:e.dataShow,"z-index":e.dataZIndex,overlay:e.dataOverlay,transition:e.dataTransition,"custom-class":"press-dialog press-dialog--"+e.dataTheme+" "+e.dataClassName,"custom-style":"width: "+y.utils.addUnit(e.dataWidth)+";"+e.dataCustomStyle,"overlay-style":e.dataOverlayStyle,"close-on-click-overlay":e.dataCloseOnClickOverlay,onClose:C.onClickOverlay},{default:a((()=>[e.dataTitle||e.dataUseTitleSlot?(t(),s("div",{key:0,class:n(y.utils.bem2("dialog__header",{isolated:!(e.dataMessage||e.dataUseSlot)}))},[e.dataUseTitleSlot?l(e.$slots,"title",{key:0},void 0,!0):e.dataTitle?(t(),s(i,{key:1},[r(c(e.dataTitle),1)],64)):d("v-if",!0)],2)):d("v-if",!0),e.dataUseSlot?l(e.$slots,"default",{key:1},void 0,!0):e.dataMessage?(t(),s("div",{key:2,class:n(y.utils.bem2("dialog__message",[e.dataTheme,e.dataMessageAlign,{hasTitle:e.dataTitle}]))},[u("span",{class:"press-dialog__message-text"},c(e.dataMessage),1)],2)):d("v-if",!0),(t(),s("div",{key:3,class:"press-hairline--top press-dialog__footer"},[e.dataShowCancelButton?(t(),p(S,{key:0,size:"large",loading:y.loading.cancel,class:"press-dialog__button press-hairline--right","custom-class":"press-dialog__cancel","custom-style":"color: "+e.dataCancelButtonColor,onClick:C.onCancel},{default:a((()=>[r(c(e.dataCancelButtonText),1)])),_:1},8,["loading","custom-style","onClick"])):d("v-if",!0),e.dataShowConfirmButton?(t(),p(S,{key:1,size:"large",class:"press-dialog__button",loading:y.loading.confirm,"custom-class":"press-dialog__confirm","custom-style":"color: "+e.dataConfirmButtonColor,"open-type":e.dataConfirmButtonOpenType,lang:e.lang,"business-id":e.businessId,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter,onClick:C.onConfirm,onGetuserinfo:e.onGetUserInfo,onContact:e.onContact,onGetphonenumber:e.onGetPhoneNumber,onError:e.onError,onLaunchapp:e.onLaunchApp,onOpensetting:e.onOpenSetting},{default:a((()=>[r(c(e.dataConfirmButtonText),1)])),_:1},8,["loading","custom-style","open-type","lang","business-id","session-from","send-message-title","send-message-path","send-message-img","show-message-card","app-parameter","onClick","onGetuserinfo","onContact","onGetphonenumber","onError","onLaunchapp","onOpensetting"])):d("v-if",!0)]))])),_:3},8,["show","z-index","overlay","transition","custom-class","custom-style","overlay-style","close-on-click-overlay","onClose"])])}],["__scopeId","data-v-a6de0d47"]]);let M=[];const G={show:!1,title:"",width:null,theme:"default",message:"",zIndex:100,overlay:!0,selector:"#press-dialog",className:"",asyncClose:!1,beforeClose:null,transition:"scale",customStyle:"",messageAlign:"",overlayStyle:"",confirmButtonText:f("confirm"),cancelButtonText:f("cancel"),showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,confirmButtonOpenType:""};let z=Object.assign({},G);const L=e=>(e=Object.assign(Object.assign({},z),e),new Promise(((t,s)=>{const o=e.context||function(){const e=g();return e[e.length-1]}();let a=y(o,e.selector);if(delete e.context,delete e.selector,a||(a=v(I,"press-dialog")),a){const o=(e,o)=>{"confirm"===e?t(o):s(o)},n={...e};C(a,n),a.callback=o,S((()=>{C(a,{show:!0})})),M.push(a)}else console.warn("The press-dialog node is not found, please confirm whether the selector and context are correct")})));h({Dialog:L,queue:M,currentOptions:z,defaultOptions:G,updateQueue:function(e){M=e},updateCurrentOptions:function(e){z=e}});export{L as D,I as P};
