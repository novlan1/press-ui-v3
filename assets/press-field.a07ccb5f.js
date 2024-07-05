import{_ as e,o as t,c as o,j as l,w as s,v as i,x as a,t as n,b as r,k as c,a as d,y as u,u as h,Z as p,I as f,d as m}from"./index-26897e9f.js";import{P as g}from"./press-cell.09949a8d.js";import{P as y}from"./press-icon-plus.cec3bc23.js";import{s as b,u as C}from"./utils.f8cec38d.js";import{a as S}from"./add-unit.e5b08e9d.js";import{d as k,v as w,a as _,n as B,m as v}from"./press-component.5db9b2cc.js";import{a as x,g as I}from"./event.ab14895d.js";const j={placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},placeholderClass:{type:String,default:""},disabled:Boolean,maxlength:{type:Number,default:-1},cursorSpacing:{type:Number,default:50},autoFocus:Boolean,focus:Boolean,cursor:{type:Number,default:-1},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},adjustPosition:{type:Boolean,default:!0},holdKeyboard:Boolean},V={type:{type:String,default:"text"},password:Boolean,confirmType:{type:String,default:""},confirmHold:Boolean,alwaysEmbed:Boolean},$={autoHeight:Boolean,fixed:Boolean,showConfirmBar:{type:Boolean,default:!0},disableDefaultPadding:{type:Boolean,default:!0}};const z={inputStyle:function(e){return e&&"Object"===e.constructor?b({"min-height":S(e.minHeight),"max-height":S(e.maxHeight)}):""}};function L(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}const P=e({name:"PressField",options:{...k,styleIsolation:"shared"},field:!0,components:{PressCell:g,PressIconPlus:y},mixins:[w],props:{...j,...V,...$,size:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""},error:Boolean,center:Boolean,isLink:Boolean,leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},autosize:{type:[Boolean,Object],default:!1},required:Boolean,iconClass:{type:String,default:""},clickable:Boolean,inputAlign:{type:String,default:""},customStyle:{type:String,default:""},errorMessage:{type:String,default:""},arrowDirection:{type:String,default:""},showWordLimit:Boolean,errorMessageAlign:{type:String,default:""},useLabelSlot:Boolean,readonly:{type:Boolean,observer:"setShowClear"},clearable:{type:Boolean,observer:"setShowClear"},clearTrigger:{type:String,default:"focus"},border:{type:Boolean,default:!0},titleWidth:{type:String,default:"6.2em"},clearIcon:{type:String,default:"clear"},inputClass:{type:String,default:""},rightIconClass:{type:String,default:""},labelClass:{type:String,default:""},..._},emits:["focus","blur","click-icon","click-input","clear","confirm","linechange","keyboardheightchange","input","change","update:modelValue"],data:()=>({focused:!1,innerValue:"",showClear:!1,utils:C,computed:z}),watch:{realModelValue:{handler(e){this.innerValue=e,B(this.adjustSize)}}},created(){this.innerValue=this.realModelValue},mounted(){B(this.adjustSize)},methods:{onInput(e){const t=x(e);this.innerValue=t,this.setShowClear(),this.emitChange(),B(this.adjustSize)},onFocus(e){this.focused=!0,this.setShowClear(),this.$emit("focus",I(e)),B(this.adjustSize)},onBlur(e){this.focused=!1,this.$emit("blur",I(e)),B(this.adjustSize),setTimeout((()=>{this.setShowClear()}),200)},onClickIcon(){this.$emit("click-icon")},onClickInput(e){this.$emit("click-input",I(e))},onClear(){this.innerValue="",this.setShowClear(),B((()=>{this.emitChange(),this.$emit("clear","")}))},onConfirm(e){const t=x(e);this.innerValue=t,this.setShowClear(),this.$emit("confirm",t)},setValue(e){this.innerValue=e,this.setShowClear(),""===e&&(this.innerValue=""),this.emitChange()},onLineChange(e){this.$emit("linechange",I(e))},onKeyboardHeightChange(e){this.$emit("keyboardheightchange",I(e))},emitChange(){B((()=>{this.emitModelValue(this.innerValue),this.$emit("change",this.innerValue)}))},setShowClear(){const{clearable:e,readonly:t,clearTrigger:o}=this,{focused:l,innerValue:s}=this;let i=!1;if(e&&!t){i=!!s&&("always"===o||"focus"===o&&l)}this.showClear=i},adjustSize(){let{input:e}=this.$refs;if("textarea"!==this.type||!this.autosize||!e)return;if(e.style||(e=e.$el),!e||!e.style)return;const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;e.style.height="auto";let o=e.scrollHeight;if(v(this.autosize)){const{maxHeight:e,minHeight:t}=this.autosize;e&&(o=Math.min(o,e)),t&&(o=Math.max(o,t))}var l;o&&(e.style.height=`${o}px`,l=t,L(window,l),L(document.body,l))},noop(){}}},[["render",function(e,g,y,b,C,S){const k=p,w=f,_=m("press-icon-plus"),B=m("press-cell");return t(),o("div",{class:a(["press-field-index",e.customClass])},[l(B,{size:y.size,icon:y.leftIcon,center:y.center,border:y.border,"is-link":y.isLink,required:y.required,clickable:y.clickable,"title-width":y.titleWidth,"title-style":y.label||y.useLabelSlot?"margin-right: 12px;":"display: none;","use-title-slot":!(!y.useLabelSlot&&!y.label),"custom-style":y.customStyle,"arrow-direction":y.arrowDirection,"custom-class":"press-field"},{icon:s((()=>[i(e.$slots,"left-icon",{},void 0,!0)])),title:s((()=>[y.label?(t(),o("div",{key:0,class:a(y.labelClass+" "+C.utils.bem2("field__label",{disabled:e.disabled}))},n(y.label),3)):y.useLabelSlot?i(e.$slots,"label",{key:1},void 0,!0):r("v-if",!0)])),default:s((()=>[c("div",{class:a([C.utils.bem2("field__body",[e.type])])},[c("div",{class:a([C.utils.bem2("field__control",[y.inputAlign,"custom"])]),onClick:g[0]||(g[0]=(...e)=>S.onClickInput&&S.onClickInput(...e))},[i(e.$slots,"input",{},void 0,!0)],2),"textarea"===e.type?(t(),d(k,{key:0,ref:"input",class:a([C.utils.bem2("field__control",[y.inputAlign,e.type,{disabled:e.disabled,error:y.error}]),y.inputClass]),fixed:e.fixed,focus:e.focus,cursor:e.cursor,value:C.innerValue,"auto-focus":e.autoFocus,disabled:e.disabled||y.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":""+C.utils.bem2("field__placeholder",{error:y.error,disabled:e.disabled}),"auto-height":!!y.autosize,style:u(""+C.computed.inputStyle(y.autosize)),"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"show-confirm-bar":e.showConfirmBar,"hold-keyboard":e.holdKeyboard,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,"disable-default-padding":e.disableDefaultPadding,onInput:S.onInput,onClick:S.onClickInput,onBlur:S.onBlur,onFocus:S.onFocus,onConfirm:S.onConfirm,onLinechange:S.onLineChange,onKeyboardheightchange:S.onKeyboardHeightChange},null,8,["class","fixed","focus","cursor","value","auto-focus","disabled","maxlength","placeholder","placeholder-style","placeholder-class","auto-height","style","cursor-spacing","adjust-position","show-confirm-bar","hold-keyboard","selection-end","selection-start","disable-default-padding","onInput","onClick","onBlur","onFocus","onConfirm","onLinechange","onKeyboardheightchange"])):(t(),d(w,{key:1,ref:"input",class:a([C.utils.bem2("field__control",[y.inputAlign,{disabled:e.disabled,error:y.error}]),y.inputClass]),type:e.type,focus:e.focus,cursor:e.cursor,value:C.innerValue,"auto-focus":e.autoFocus,disabled:e.disabled||y.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":""+C.utils.bem2("field__placeholder",{error:y.error}),"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"hold-keyboard":e.holdKeyboard,"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,"always-embed":e.alwaysEmbed,password:e.password||"password"===e.type,onInput:S.onInput,onClick:S.onClickInput,onBlur:S.onBlur,onFocus:S.onFocus,onConfirm:S.onConfirm,onKeyboardheightchange:S.onKeyboardHeightChange},null,8,["class","type","focus","cursor","value","auto-focus","disabled","maxlength","placeholder","placeholder-style","placeholder-class","confirm-type","confirm-hold","hold-keyboard","cursor-spacing","adjust-position","selection-end","selection-start","always-embed","password","onInput","onClick","onBlur","onFocus","onConfirm","onKeyboardheightchange"])),C.showClear?(t(),d(_,{key:2,name:y.clearIcon,class:"press-field__clear-root press-field__icon-root",onClick:S.onClear},null,8,["name","onClick"])):r("v-if",!0),c("div",{class:"press-field__icon-container",onClick:g[1]||(g[1]=(...e)=>S.onClickIcon&&S.onClickIcon(...e))},[y.rightIcon||y.icon?(t(),d(_,{key:0,name:y.rightIcon||y.icon,class:a("press-field__icon-root "+y.iconClass),"custom-class":y.rightIconClass},null,8,["name","class","custom-class"])):r("v-if",!0),i(e.$slots,"right-icon",{},void 0,!0),i(e.$slots,"icon",{},void 0,!0)]),c("div",{class:"press-field__button"},[i(e.$slots,"button",{},void 0,!0)])],2),y.showWordLimit&&e.maxlength?(t(),o("div",{key:0,class:"press-field__word-limit"},[c("div",{class:a([C.utils.bem2("field__word-num",{full:C.innerValue.length>=e.maxlength})])},n(C.innerValue.length>=e.maxlength?e.maxlength:C.innerValue.length),3),h("/"+n(e.maxlength),1)])):r("v-if",!0),y.errorMessage?(t(),o("div",{key:1,class:a([C.utils.bem2("field__error-message",[y.errorMessageAlign,{disabled:e.disabled,error:y.error}])])},n(y.errorMessage),3)):r("v-if",!0)])),_:3},8,["size","icon","center","border","is-link","required","clickable","title-width","title-style","use-title-slot","custom-style","arrow-direction"])],2)}],["__scopeId","data-v-a946751c"]]);export{P};