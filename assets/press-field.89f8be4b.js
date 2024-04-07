import{E as e,G as t,_ as o,H as l,a as s,z as i,ah as a,I as n,K as r,V as c,a3 as d,a2 as u,am as h,o as p,c as f,d as g,w as m,A as y,C as b,t as C,k as S,e as k,j as w,J as _,x as B,an as x,U as v,l as I}from"./index-a6ed3ec5.js";const V={placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},placeholderClass:{type:String,default:""},disabled:Boolean,maxlength:{type:Number,default:-1},cursorSpacing:{type:Number,default:50},autoFocus:Boolean,focus:Boolean,cursor:{type:Number,default:-1},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},adjustPosition:{type:Boolean,default:!0},holdKeyboard:Boolean},$={type:{type:String,default:"text"},password:Boolean,confirmType:{type:String,default:""},confirmHold:Boolean,alwaysEmbed:Boolean},j={autoHeight:Boolean,fixed:Boolean,showConfirmBar:{type:Boolean,default:!0},disableDefaultPadding:{type:Boolean,default:!0}};const z={inputStyle:function(o){return o&&"Object"===o.constructor?e({"min-height":t(o.minHeight),"max-height":t(o.maxHeight)}):""}};function H(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}const L=o({name:"PressField",options:{...l,styleIsolation:"shared"},field:!0,components:{PressCell:s,PressIconPlus:i},mixins:[a],props:{...V,...$,...j,size:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""},error:Boolean,center:Boolean,isLink:Boolean,leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},autosize:{type:[Boolean,Object],default:!1},required:Boolean,iconClass:{type:String,default:""},clickable:Boolean,inputAlign:{type:String,default:""},customStyle:{type:String,default:""},errorMessage:{type:String,default:""},arrowDirection:{type:String,default:""},showWordLimit:Boolean,errorMessageAlign:{type:String,default:""},useLabelSlot:Boolean,readonly:{type:Boolean,observer:"setShowClear"},clearable:{type:Boolean,observer:"setShowClear"},clearTrigger:{type:String,default:"focus"},border:{type:Boolean,default:!0},titleWidth:{type:String,default:"6.2em"},clearIcon:{type:String,default:"clear"},inputClass:{type:String,default:""},rightIconClass:{type:String,default:""},labelClass:{type:String,default:""},...n},emits:["focus","blur","click-icon","click-input","clear","confirm","linechange","keyboardheightchange","input","change","update:modelValue"],data:()=>({focused:!1,innerValue:"",showClear:!1,utils:r,computed:z}),watch:{realModelValue:{handler(e){this.innerValue=e,c(this.adjustSize)}}},created(){this.innerValue=this.realModelValue},mounted(){c(this.adjustSize)},methods:{onInput(e){const t=d(e);this.innerValue=t,this.setShowClear(),this.emitChange(),c(this.adjustSize)},onFocus(e){this.focused=!0,this.setShowClear(),this.$emit("focus",u(e)),c(this.adjustSize)},onBlur(e){this.focused=!1,this.$emit("blur",u(e)),c(this.adjustSize),setTimeout((()=>{this.setShowClear()}),200)},onClickIcon(){this.$emit("click-icon")},onClickInput(e){this.$emit("click-input",u(e))},onClear(){this.innerValue="",this.setShowClear(),c((()=>{this.emitChange(),this.$emit("clear","")}))},onConfirm(e){const t=d(e);this.innerValue=t,this.setShowClear(),this.$emit("confirm",t)},setValue(e){this.innerValue=e,this.setShowClear(),""===e&&(this.innerValue=""),this.emitChange()},onLineChange(e){this.$emit("linechange",u(e))},onKeyboardHeightChange(e){this.$emit("keyboardheightchange",u(e))},emitChange(){c((()=>{this.emitModelValue(this.innerValue),this.$emit("change",this.innerValue)}))},setShowClear(){const{clearable:e,readonly:t,clearTrigger:o}=this,{focused:l,innerValue:s}=this;let i=!1;if(e&&!t){i=!!s&&("always"===o||"focus"===o&&l)}this.showClear=i},adjustSize(){let{input:e}=this.$refs;if("textarea"!==this.type||!this.autosize||!e)return;if(e.style||(e=e.$el),!e||!e.style)return;const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;e.style.height="auto";let o=e.scrollHeight;if(h(this.autosize)){const{maxHeight:e,minHeight:t}=this.autosize;e&&(o=Math.min(o,e)),t&&(o=Math.max(o,t))}var l;o&&(e.style.height=`${o}px`,l=t,H(window,l),H(document.body,l))},noop(){}}},[["render",function(e,t,o,l,s,i){const a=x,n=v,r=I("press-icon-plus"),c=I("press-cell");return p(),f("div",{class:b(["press-field-index",e.customClass])},[g(c,{size:o.size,icon:o.leftIcon,center:o.center,border:o.border,"is-link":o.isLink,required:o.required,clickable:o.clickable,"title-width":o.titleWidth,"title-style":o.label||o.useLabelSlot?"margin-right: 12px;":"display: none;","use-title-slot":!(!o.useLabelSlot&&!o.label),"custom-style":o.customStyle,"arrow-direction":o.arrowDirection,"custom-class":"press-field"},{icon:m((()=>[y(e.$slots,"left-icon",{},void 0,!0)])),title:m((()=>[o.label?(p(),f("div",{key:0,class:b(o.labelClass+" "+s.utils.bem2("field__label",{disabled:e.disabled}))},C(o.label),3)):o.useLabelSlot?y(e.$slots,"label",{key:1},void 0,!0):S("v-if",!0)])),default:m((()=>[k("div",{class:b([s.utils.bem2("field__body",[e.type])])},[k("div",{class:b([s.utils.bem2("field__control",[o.inputAlign,"custom"])]),onClick:t[0]||(t[0]=(...e)=>i.onClickInput&&i.onClickInput(...e))},[y(e.$slots,"input",{},void 0,!0)],2),"textarea"===e.type?(p(),w(a,{key:0,ref:"input",class:b([s.utils.bem2("field__control",[o.inputAlign,e.type,{disabled:e.disabled,error:o.error}]),o.inputClass]),fixed:e.fixed,focus:e.focus,cursor:e.cursor,value:s.innerValue,"auto-focus":e.autoFocus,disabled:e.disabled||o.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":""+s.utils.bem2("field__placeholder",{error:o.error,disabled:e.disabled}),"auto-height":!!o.autosize,style:_(""+s.computed.inputStyle(o.autosize)),"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"show-confirm-bar":e.showConfirmBar,"hold-keyboard":e.holdKeyboard,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,"disable-default-padding":e.disableDefaultPadding,onInput:i.onInput,onClick:i.onClickInput,onBlur:i.onBlur,onFocus:i.onFocus,onConfirm:i.onConfirm,onLinechange:i.onLineChange,onKeyboardheightchange:i.onKeyboardHeightChange},null,8,["class","fixed","focus","cursor","value","auto-focus","disabled","maxlength","placeholder","placeholder-style","placeholder-class","auto-height","style","cursor-spacing","adjust-position","show-confirm-bar","hold-keyboard","selection-end","selection-start","disable-default-padding","onInput","onClick","onBlur","onFocus","onConfirm","onLinechange","onKeyboardheightchange"])):(p(),w(n,{key:1,ref:"input",class:b([s.utils.bem2("field__control",[o.inputAlign,{disabled:e.disabled,error:o.error}]),o.inputClass]),type:e.type,focus:e.focus,cursor:e.cursor,value:s.innerValue,"auto-focus":e.autoFocus,disabled:e.disabled||o.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":""+s.utils.bem2("field__placeholder",{error:o.error}),"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"hold-keyboard":e.holdKeyboard,"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,"always-embed":e.alwaysEmbed,password:e.password||"password"===e.type,onInput:i.onInput,onClick:i.onClickInput,onBlur:i.onBlur,onFocus:i.onFocus,onConfirm:i.onConfirm,onKeyboardheightchange:i.onKeyboardHeightChange},null,8,["class","type","focus","cursor","value","auto-focus","disabled","maxlength","placeholder","placeholder-style","placeholder-class","confirm-type","confirm-hold","hold-keyboard","cursor-spacing","adjust-position","selection-end","selection-start","always-embed","password","onInput","onClick","onBlur","onFocus","onConfirm","onKeyboardheightchange"])),s.showClear?(p(),w(r,{key:2,name:o.clearIcon,class:"press-field__clear-root press-field__icon-root",onClick:i.onClear},null,8,["name","onClick"])):S("v-if",!0),k("div",{class:"press-field__icon-container",onClick:t[1]||(t[1]=(...e)=>i.onClickIcon&&i.onClickIcon(...e))},[o.rightIcon||o.icon?(p(),w(r,{key:0,name:o.rightIcon||o.icon,class:b("press-field__icon-root "+o.iconClass),"custom-class":o.rightIconClass},null,8,["name","class","custom-class"])):S("v-if",!0),y(e.$slots,"right-icon",{},void 0,!0),y(e.$slots,"icon",{},void 0,!0)]),k("div",{class:"press-field__button"},[y(e.$slots,"button",{},void 0,!0)])],2),o.showWordLimit&&e.maxlength?(p(),f("div",{key:0,class:"press-field__word-limit"},[k("div",{class:b([s.utils.bem2("field__word-num",{full:s.innerValue.length>=e.maxlength})])},C(s.innerValue.length>=e.maxlength?e.maxlength:s.innerValue.length),3),B("/"+C(e.maxlength),1)])):S("v-if",!0),o.errorMessage?(p(),f("div",{key:1,class:b([s.utils.bem2("field__error-message",[o.errorMessageAlign,{disabled:e.disabled,error:o.error}])])},C(o.errorMessage),3)):S("v-if",!0)])),_:3},8,["size","icon","center","border","is-link","required","clickable","title-width","title-style","use-title-slot","custom-style","arrow-direction"])],2)}],["__scopeId","data-v-f362662e"]]);export{L as P};
