import{_ as e,o as t,c as o,h as l,w as s,r as i,n as a,t as n,f as r,i as c,q as d,j as u,v as h,ad as p,I as f,e as m}from"./index-5ce068d6.js";import{P as y}from"./press-cell.c8fe1713.js";import{P as g}from"./press-icon-plus.86d78210.js";import{u as b}from"./utils.29d4c09b.js";import{s as C}from"./style.0f94ff97.js";import{a as S,v as k,n as w,f as _}from"./add-unit.39434bfe.js";import{d as B,a as v}from"./press-component.7a68e6d8.js";import{a as x,g as I}from"./event.eea0932c.js";import{f as j}from"./parent.59fa8a22.js";const V={placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},placeholderClass:{type:String,default:""},disabled:Boolean,maxlength:{type:Number,default:-1},cursorSpacing:{type:Number,default:50},autoFocus:Boolean,focus:Boolean,cursor:{type:Number,default:-1},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},adjustPosition:{type:Boolean,default:!0},holdKeyboard:Boolean},$={type:{type:String,default:"text"},password:Boolean,confirmType:{type:String,default:""},confirmHold:Boolean,alwaysEmbed:Boolean},z={autoHeight:Boolean,fixed:Boolean,showConfirmBar:{type:Boolean,default:!0},disableDefaultPadding:{type:Boolean,default:!0}};const L={inputStyle:function(e){return e&&"Object"===e.constructor?C({"min-height":S(e.minHeight),"max-height":S(e.maxHeight)}):""}};function P(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}const F=e({name:"PressField",options:{...B,styleIsolation:"shared"},field:!0,components:{PressCell:y,PressIconPlus:g},mixins:[k],props:{...V,...$,...z,size:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""},error:Boolean,center:Boolean,isLink:Boolean,leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},autosize:{type:[Boolean,Object],default:!1},required:Boolean,iconClass:{type:String,default:""},clickable:Boolean,inputAlign:{type:String,default:""},customStyle:{type:String,default:""},wrapperStyle:{type:String,default:""},errorMessage:{type:String,default:""},arrowDirection:{type:String,default:""},showWordLimit:Boolean,errorMessageAlign:{type:String,default:""},useLabelSlot:Boolean,readonly:{type:Boolean,observer:"setShowClear"},clearable:{type:Boolean,observer:"setShowClear"},clearTrigger:{type:String,default:"focus"},border:{type:Boolean,default:!0},titleWidth:{type:String,default:"6.2em"},clearIcon:{type:String,default:"clear"},inputClass:{type:String,default:""},rightIconClass:{type:String,default:""},labelClass:{type:String,default:""},...v},emits:["focus","blur","click-icon","click-input","clear","confirm","linechange","keyboardheightchange","input","change","update:modelValue","click"],data:()=>({focused:!1,innerValue:"",showClear:!1,utils:b,computed:L}),watch:{realModelValue:{handler(e){this.innerValue=e,w(this.adjustSize)}}},created(){this.innerValue=this.realModelValue},mounted(){w(this.adjustSize)},methods:{onInput(e){const t=x(e);this.innerValue=t,this.setShowClear(),this.emitChange(),w(this.adjustSize)},onFocus(e){this.focused=!0,this.setShowClear(),this.$emit("focus",I(e)),w(this.adjustSize)},onBlur(e){this.focused=!1,this.$emit("blur",I(e)),j(this,"blur"),w(this.adjustSize),setTimeout((()=>{this.setShowClear()}),200)},onClickIcon(){this.$emit("click-icon")},onClickInput(e){this.$emit("click-input",I(e))},onClear(){this.innerValue="",this.setShowClear(),w((()=>{this.emitChange(),this.$emit("clear","")}))},onConfirm(e){const t=x(e);this.innerValue=t,this.setShowClear(),this.$emit("confirm",t)},setValue(e){this.innerValue=e,this.setShowClear(),""===e&&(this.innerValue=""),this.emitChange()},onLineChange(e){this.$emit("linechange",I(e))},onKeyboardHeightChange(e){this.$emit("keyboardheightchange",I(e))},emitChange(){w((()=>{this.emitModelValue(this.innerValue),this.$emit("change",this.innerValue),j(this,"change")}))},setShowClear(){const{clearable:e,readonly:t,clearTrigger:o}=this,{focused:l,innerValue:s}=this;let i=!1;if(e&&!t){i=!!s&&("always"===o||"focus"===o&&l)}this.showClear=i},adjustSize(){let{input:e}=this.$refs;if("textarea"!==this.type||!this.autosize||!e)return;if(e.style||(e=e.$el),!e||!e.style)return;const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;e.style.height="auto";let o=e.scrollHeight;if(_(this.autosize)){const{maxHeight:e,minHeight:t}=this.autosize;e&&(o=Math.min(o,e)),t&&(o=Math.max(o,t))}var l;o&&(e.style.height=`${o}px`,l=t,P(window,l),P(document.body,l))},noop(){},clickWrap(){this.$emit("click")}}},[["render",function(e,y,g,b,C,S){const k=p,w=f,_=m("press-icon-plus"),B=m("press-cell");return t(),o("div",{class:a(["press-field-index",e.customClass]),style:u(g.wrapperStyle)},[l(B,{size:g.size,icon:g.leftIcon,center:g.center,border:g.border,"is-link":g.isLink,required:g.required,clickable:g.clickable,"title-width":g.titleWidth,"title-style":g.label||g.useLabelSlot?"margin-right: 12px;":"display: none;","use-title-slot":!(!g.useLabelSlot&&!g.label),"custom-style":g.customStyle,"arrow-direction":g.arrowDirection,"custom-class":"press-field",onClick:S.clickWrap},{icon:s((()=>[i(e.$slots,"left-icon",{},void 0,!0)])),title:s((()=>[g.label?(t(),o("div",{key:0,class:a(g.labelClass+" "+C.utils.bem2("field__label",{disabled:e.disabled}))},n(g.label),3)):g.useLabelSlot?i(e.$slots,"label",{key:1},void 0,!0):r("v-if",!0)])),default:s((()=>[c("div",{class:a([C.utils.bem2("field__body",[e.type])])},[c("div",{class:a([C.utils.bem2("field__control",[g.inputAlign,"custom"])]),onClick:y[0]||(y[0]=(...e)=>S.onClickInput&&S.onClickInput(...e))},[i(e.$slots,"input",{},void 0,!0)],2),"textarea"===e.type?(t(),d(k,{key:0,ref:"input",class:a([C.utils.bem2("field__control",[g.inputAlign,e.type,{disabled:e.disabled,error:g.error,readonly:g.readonly}]),g.inputClass]),fixed:e.fixed,focus:e.focus,cursor:e.cursor,value:C.innerValue,"auto-focus":e.autoFocus,disabled:e.disabled||g.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":""+C.utils.bem2("field__placeholder",{error:g.error,disabled:e.disabled,readonly:g.readonly}),"auto-height":!!g.autosize,style:u(""+C.computed.inputStyle(g.autosize)),"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"show-confirm-bar":e.showConfirmBar,"hold-keyboard":e.holdKeyboard,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,"disable-default-padding":e.disableDefaultPadding,onInput:S.onInput,onClick:S.onClickInput,onBlur:S.onBlur,onFocus:S.onFocus,onConfirm:S.onConfirm,onLinechange:S.onLineChange,onKeyboardheightchange:S.onKeyboardHeightChange},null,8,["class","fixed","focus","cursor","value","auto-focus","disabled","maxlength","placeholder","placeholder-style","placeholder-class","auto-height","style","cursor-spacing","adjust-position","show-confirm-bar","hold-keyboard","selection-end","selection-start","disable-default-padding","onInput","onClick","onBlur","onFocus","onConfirm","onLinechange","onKeyboardheightchange"])):(t(),d(w,{key:1,ref:"input",class:a([C.utils.bem2("field__control",[g.inputAlign,{disabled:e.disabled,error:g.error,readonly:g.readonly}]),g.inputClass]),type:e.type,focus:e.focus,cursor:e.cursor,value:C.innerValue,"auto-focus":e.autoFocus,disabled:e.disabled||g.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":""+C.utils.bem2("field__placeholder",{error:g.error,disabled:e.disabled,readonly:g.readonly}),"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"hold-keyboard":e.holdKeyboard,"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,"always-embed":e.alwaysEmbed,password:e.password||"password"===e.type,onInput:S.onInput,onClick:S.onClickInput,onBlur:S.onBlur,onFocus:S.onFocus,onConfirm:S.onConfirm,onKeyboardheightchange:S.onKeyboardHeightChange},null,8,["class","type","focus","cursor","value","auto-focus","disabled","maxlength","placeholder","placeholder-style","placeholder-class","confirm-type","confirm-hold","hold-keyboard","cursor-spacing","adjust-position","selection-end","selection-start","always-embed","password","onInput","onClick","onBlur","onFocus","onConfirm","onKeyboardheightchange"])),C.showClear?(t(),d(_,{key:2,name:g.clearIcon,class:"press-field__clear-root press-field__icon-root",onClick:S.onClear},null,8,["name","onClick"])):r("v-if",!0),c("div",{class:"press-field__icon-container",onClick:y[1]||(y[1]=(...e)=>S.onClickIcon&&S.onClickIcon(...e))},[g.rightIcon||g.icon?(t(),d(_,{key:0,name:g.rightIcon||g.icon,class:a("press-field__icon-root "+g.iconClass),"custom-class":g.rightIconClass},null,8,["name","class","custom-class"])):r("v-if",!0),i(e.$slots,"right-icon",{},void 0,!0),i(e.$slots,"icon",{},void 0,!0)]),c("div",{class:"press-field__button"},[i(e.$slots,"button",{},void 0,!0)])],2),g.showWordLimit&&e.maxlength?(t(),o("div",{key:0,class:"press-field__word-limit"},[c("div",{class:a([C.utils.bem2("field__word-num",{full:C.innerValue.length>=e.maxlength})])},n(C.innerValue.length>=e.maxlength?e.maxlength:C.innerValue.length),3),h("/"+n(e.maxlength),1)])):r("v-if",!0),g.errorMessage?(t(),o("div",{key:1,class:a([C.utils.bem2("field__error-message",[g.errorMessageAlign,{disabled:e.disabled,error:g.error}])])},n(g.errorMessage),3)):r("v-if",!0)])),_:3},8,["size","icon","center","border","is-link","required","clickable","title-width","title-style","use-title-slot","custom-style","arrow-direction","onClick"])],6)}],["__scopeId","data-v-087f1d8d"]]);export{F as P};