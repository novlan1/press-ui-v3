import{t as e}from"./index.779797de.js";import{a as t}from"./handler-helper.33469563.js";import{_ as o,o as n,c as a,k as i,t as s,a as l,b as r,q as d,F as c,j as m,w as u,l as p,p as h,S as g,d as f,x as C}from"./index-7a15811b.js";import{a as y,b as v}from"./index.c3cab6cb.js";import{i as w}from"./h5-handler.8ab03d47.js";import{P as k}from"./press-button.fdc832a6.js";import{P as S}from"./press-field.4d2b8b7f.js";import{t as x}from"./function.11f95e80.js";import{g as _}from"./dialog-mixin.972593d2.js";const T={show:{type:Boolean,default:!1},src:{type:String,default:""},dialogType:{type:[Number,String],default:1},title:{type:String,default:e("dialog.title")},content:{type:String,default:""},canTouchRemove:{type:Boolean,default:!0},confirmText:{type:String,default:e("confirm")},cancelText:{type:String,default:""},onClickCancel:{type:[Function,null],default:null},onConfirmClick:{type:[Function,null],default:null},htmlContent:{type:String,default:""},zIndex:{type:[Number,String],default:"99"},useScrollView:{type:Boolean,default:!1},onClickImage:{type:[Function,null],default:null},onLongPressImage:{type:[Function,null],default:null},showField:{type:Boolean,default:!1},fieldPlaceHolder:{type:String,default:""},fieldValue:{type:String,default:""}};const L=o({name:"PressDialog",components:{PressButton:k,PressField:S},mixins:[_(T)],props:{...T},options:{virtualHost:!0,styleIsolation:"shared"},emits:["confirm","cancel","onLongPressImage","onClickImage"],data:()=>({resolve:"",reject:"",promise:"",mShowButtonLoading:!1,inputValue:""}),watch:{dataFieldValue:{handler(e){this.inputValue=e},immediate:!0}},mounted(){},methods:{preventTouchMove(){},confirm(){if(2===this.dataDialogType){if(this.mShowButtonLoading)return;this.mShowButtonLoading=!0}"function"==typeof this.dataOnConfirmClick?x(this.dataOnConfirmClick(this)).then((e=>{e&&this.resolveConfirm()})).catch((()=>{})):this.resolveConfirm()},resolveConfirm(){this.resolve&&this.resolve("confirm"),this.$emit("confirm"),this.remove()},cancel(){"function"==typeof this.dataOnClickCancel&&this.dataOnClickCancel(this),"function"==typeof this.reject&&this.reject("cancel"),this.$emit("cancel"),this.remove()},showDialog(){return this.dataShow=!0,this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t})),this.promise},touchRemove(){this.dataCanTouchRemove&&this.remove(),this.$emit("cancel")},remove(){this.dataShow=!1,this.mShowButtonLoading=!1},destroy(){},handleLongPressImage(){"function"==typeof this.dataOnLongPressImage&&this.dataOnLongPressImage(),this.$emit("onLongPressImage")},handleClickImage(){"function"==typeof this.dataOnClickImage&&this.dataOnClickImage(),this.$emit("onClickImage")},onChangeField(e){this.inputValue=e}}},[["render",function(e,t,o,C,y,v){const w=g,k=f("PressField"),S=f("PressButton");return e.dataShow?(n(),a("div",{key:0,class:"press-dialog",style:h({zIndex:`${e.dataZIndex}`}),onClick:t[2]||(t[2]=d(((...e)=>v.touchRemove&&v.touchRemove(...e)),["stop"])),onTouchmove:t[3]||(t[3]=d(((...e)=>v.preventTouchMove&&v.preventTouchMove(...e)),["stop"]))},[i("div",{class:"press-dialog__content-wrap"},[i("p",{class:"press-dialog__title"},s(e.dataTitle),1),e.dataUseScrollView&&e.dataHtmlContent?(n(),l(w,{key:0,"scroll-y":"true",class:"press-dialog__content",innerHTML:e.dataHtmlContent},null,8,["innerHTML"])):e.dataHtmlContent?(n(),a("p",{key:1,class:"press-dialog__content",innerHTML:e.dataHtmlContent},null,8,["innerHTML"])):r("v-if",!0),e.dataHtmlContent?r("v-if",!0):(n(),a("p",{key:2,class:"press-dialog__content"},s(e.dataContent),1)),e.dataShowField?(n(),l(k,{key:3,"custom-class":"press-dialog__field","title-width":"0",placeholder:e.dataFieldPlaceHolder,value:e.dataFieldValue,"model-value":e.dataFieldValue,onChange:v.onChangeField},null,8,["placeholder","value","model-value","onChange"])):r("v-if",!0),e.dataSrc?(n(),a("div",{key:4,class:"press-dialog__img-wrap"},[e.dataSrc?(n(),a("img",{key:0,class:"press-dialog__img","show-menu-by-longpress":!0,src:e.dataSrc,onClick:t[0]||(t[0]=d(((...e)=>v.handleClickImage&&v.handleClickImage(...e)),["stop"])),onLongpress:t[1]||(t[1]=(...e)=>v.handleLongPressImage&&v.handleLongPressImage(...e))},null,40,["src"])):r("v-if",!0)])):r("v-if",!0),i("div",{class:"press-dialog__btn--wrap"},[e.dataCancelText&&e.dataCancelText.length>0?(n(),a(c,{key:0},[i("div",{class:"press-dialog__btn--spacing"},[m(S,{type:"e-sport-secondary","custom-style":"width: 100px;height: 36px;",onClick:v.cancel},{default:u((()=>[p(s(e.dataCancelText),1)])),_:1},8,["onClick"])]),m(S,{type:"e-sport-primary-bg",loading:y.mShowButtonLoading,"custom-style":"width: 100px;height: 36px;",onClick:v.confirm},{default:u((()=>[p(s(y.mShowButtonLoading?"":e.dataConfirmText),1)])),_:1},8,["loading","onClick"])],64)):e.dataConfirmText||y.mShowButtonLoading?(n(),l(S,{key:1,type:"e-sport-primary-bg",loading:y.mShowButtonLoading,"custom-style":"width: 148px;height: 36px;",onClick:v.confirm},{default:u((()=>[p(s(y.mShowButtonLoading?"":e.dataConfirmText),1)])),_:1},8,["loading","onClick"])):r("v-if",!0)])])],36)):r("v-if",!0)}],["__scopeId","data-v-ce18e561"]]);function I({options:e,currentOptions:t,dialogComponent:o,id:n}){const a=(e=Object.assign(Object.assign({},t),e)).context||function(){const e=C();return e[e.length-1]}();let i=y(a,e.selector);if(delete e.context,delete e.selector,!i&&o&&(i=w(o,n)),i){const t={...e};v(i,t);return v(i,t,"showDialog").then((e=>Promise.resolve(e))).catch((e=>Promise.reject(e)))}console.warn("The press-dialog node is not found, please confirm whether the selector and context are correct")}let P=[];const j=Object.keys(T).reduce(((e,t)=>(e[t]=T[t].default,e)),{selector:"#tip-match-comm-tips-dialog"});let O=Object.assign({},j);const B=e=>I({options:e,currentOptions:O,id:"tip-dialog-showCommTipsDialog",dialogComponent:L});B.show=e=>B(e),t({Dialog:B,queue:P,currentOptions:O,defaultOptions:j,updateQueue:function(e){P=e},updateCurrentOptions:function(e){O=e}});export{B as D,L as P};
