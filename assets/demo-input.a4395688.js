import{K as e,M as t,_ as l,N as o,g as s,a4 as a,a5 as i,U as n,a6 as r,a7 as c,a8 as u,T as d,a9 as h,d as p,o as f,c as m,j as g,w as y,v as b,x as C,t as S,b as k,k as w,a as _,y as v,u as B,Z as x,I,aa as V}from"./index-26897e9f.js";const z={placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},placeholderClass:{type:String,default:""},disabled:Boolean,maxlength:{type:Number,default:-1},cursorSpacing:{type:Number,default:50},autoFocus:Boolean,focus:Boolean,cursor:{type:Number,default:-1},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},adjustPosition:{type:Boolean,default:!0},holdKeyboard:Boolean},$={type:{type:String,default:"text"},password:Boolean,confirmType:{type:String,default:""},confirmHold:Boolean,alwaysEmbed:Boolean},j={autoHeight:Boolean,fixed:Boolean,showConfirmBar:{type:Boolean,default:!0},disableDefaultPadding:{type:Boolean,default:!0}};const F={inputStyle:function(l){return l&&"Object"===l.constructor?e({"min-height":t(l.minHeight),"max-height":t(l.maxHeight)}):""}};function H(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}const P=l({i18n:{"zh-CN":{custom:"自定义",mockData:"自定义数据"},"en-US":{custom:"Custom",mockData:"Custom Data"}},components:{PressField:l({name:"PressField",options:{...o,styleIsolation:"shared"},field:!0,components:{PressCell:s,PressIconPlus:a},mixins:[i],props:{...z,...$,...j,size:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""},error:Boolean,center:Boolean,isLink:Boolean,leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},autosize:{type:[Boolean,Object],default:!1},required:Boolean,iconClass:{type:String,default:""},clickable:Boolean,inputAlign:{type:String,default:""},customStyle:{type:String,default:""},errorMessage:{type:String,default:""},arrowDirection:{type:String,default:""},showWordLimit:Boolean,errorMessageAlign:{type:String,default:""},useLabelSlot:Boolean,readonly:{type:Boolean,observer:"setShowClear"},clearable:{type:Boolean,observer:"setShowClear"},clearTrigger:{type:String,default:"focus"},border:{type:Boolean,default:!0},titleWidth:{type:String,default:"6.2em"},clearIcon:{type:String,default:"clear"},inputClass:{type:String,default:""},rightIconClass:{type:String,default:""},labelClass:{type:String,default:""},...n},emits:["focus","blur","click-icon","click-input","clear","confirm","linechange","keyboardheightchange","input","change","update:modelValue"],data:()=>({focused:!1,innerValue:"",showClear:!1,utils:r,computed:F}),watch:{realModelValue:{handler(e){this.innerValue=e,c(this.adjustSize)}}},created(){this.innerValue=this.realModelValue},mounted(){c(this.adjustSize)},methods:{onInput(e){const t=u(e);this.innerValue=t,this.setShowClear(),this.emitChange(),c(this.adjustSize)},onFocus(e){this.focused=!0,this.setShowClear(),this.$emit("focus",d(e)),c(this.adjustSize)},onBlur(e){this.focused=!1,this.$emit("blur",d(e)),c(this.adjustSize),setTimeout((()=>{this.setShowClear()}),200)},onClickIcon(){this.$emit("click-icon")},onClickInput(e){this.$emit("click-input",d(e))},onClear(){this.innerValue="",this.setShowClear(),c((()=>{this.emitChange(),this.$emit("clear","")}))},onConfirm(e){const t=u(e);this.innerValue=t,this.setShowClear(),this.$emit("confirm",t)},setValue(e){this.innerValue=e,this.setShowClear(),""===e&&(this.innerValue=""),this.emitChange()},onLineChange(e){this.$emit("linechange",d(e))},onKeyboardHeightChange(e){this.$emit("keyboardheightchange",d(e))},emitChange(){c((()=>{this.emitModelValue(this.innerValue),this.$emit("change",this.innerValue)}))},setShowClear(){const{clearable:e,readonly:t,clearTrigger:l}=this,{focused:o,innerValue:s}=this;let a=!1;if(e&&!t){a=!!s&&("always"===l||"focus"===l&&o)}this.showClear=a},adjustSize(){let{input:e}=this.$refs;if("textarea"!==this.type||!this.autosize||!e)return;if(e.style||(e=e.$el),!e||!e.style)return;const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;e.style.height="auto";let l=e.scrollHeight;if(h(this.autosize)){const{maxHeight:e,minHeight:t}=this.autosize;e&&(l=Math.min(l,e)),t&&(l=Math.max(l,t))}var o;l&&(e.style.height=`${l}px`,o=t,H(window,o),H(document.body,o))},noop(){}}},[["render",function(e,t,l,o,s,a){const i=x,n=I,r=p("press-icon-plus"),c=p("press-cell");return f(),m("div",{class:C(["press-field-index",e.customClass])},[g(c,{size:l.size,icon:l.leftIcon,center:l.center,border:l.border,"is-link":l.isLink,required:l.required,clickable:l.clickable,"title-width":l.titleWidth,"title-style":l.label||l.useLabelSlot?"margin-right: 12px;":"display: none;","use-title-slot":!(!l.useLabelSlot&&!l.label),"custom-style":l.customStyle,"arrow-direction":l.arrowDirection,"custom-class":"press-field"},{icon:y((()=>[b(e.$slots,"left-icon",{},void 0,!0)])),title:y((()=>[l.label?(f(),m("div",{key:0,class:C(l.labelClass+" "+s.utils.bem2("field__label",{disabled:e.disabled}))},S(l.label),3)):l.useLabelSlot?b(e.$slots,"label",{key:1},void 0,!0):k("v-if",!0)])),default:y((()=>[w("div",{class:C([s.utils.bem2("field__body",[e.type])])},[w("div",{class:C([s.utils.bem2("field__control",[l.inputAlign,"custom"])]),onClick:t[0]||(t[0]=(...e)=>a.onClickInput&&a.onClickInput(...e))},[b(e.$slots,"input",{},void 0,!0)],2),"textarea"===e.type?(f(),_(i,{key:0,ref:"input",class:C([s.utils.bem2("field__control",[l.inputAlign,e.type,{disabled:e.disabled,error:l.error}]),l.inputClass]),fixed:e.fixed,focus:e.focus,cursor:e.cursor,value:s.innerValue,"auto-focus":e.autoFocus,disabled:e.disabled||l.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":""+s.utils.bem2("field__placeholder",{error:l.error,disabled:e.disabled}),"auto-height":!!l.autosize,style:v(""+s.computed.inputStyle(l.autosize)),"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"show-confirm-bar":e.showConfirmBar,"hold-keyboard":e.holdKeyboard,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,"disable-default-padding":e.disableDefaultPadding,onInput:a.onInput,onClick:a.onClickInput,onBlur:a.onBlur,onFocus:a.onFocus,onConfirm:a.onConfirm,onLinechange:a.onLineChange,onKeyboardheightchange:a.onKeyboardHeightChange},null,8,["class","fixed","focus","cursor","value","auto-focus","disabled","maxlength","placeholder","placeholder-style","placeholder-class","auto-height","style","cursor-spacing","adjust-position","show-confirm-bar","hold-keyboard","selection-end","selection-start","disable-default-padding","onInput","onClick","onBlur","onFocus","onConfirm","onLinechange","onKeyboardheightchange"])):(f(),_(n,{key:1,ref:"input",class:C([s.utils.bem2("field__control",[l.inputAlign,{disabled:e.disabled,error:l.error}]),l.inputClass]),type:e.type,focus:e.focus,cursor:e.cursor,value:s.innerValue,"auto-focus":e.autoFocus,disabled:e.disabled||l.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":""+s.utils.bem2("field__placeholder",{error:l.error}),"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"hold-keyboard":e.holdKeyboard,"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,"always-embed":e.alwaysEmbed,password:e.password||"password"===e.type,onInput:a.onInput,onClick:a.onClickInput,onBlur:a.onBlur,onFocus:a.onFocus,onConfirm:a.onConfirm,onKeyboardheightchange:a.onKeyboardHeightChange},null,8,["class","type","focus","cursor","value","auto-focus","disabled","maxlength","placeholder","placeholder-style","placeholder-class","confirm-type","confirm-hold","hold-keyboard","cursor-spacing","adjust-position","selection-end","selection-start","always-embed","password","onInput","onClick","onBlur","onFocus","onConfirm","onKeyboardheightchange"])),s.showClear?(f(),_(r,{key:2,name:l.clearIcon,class:"press-field__clear-root press-field__icon-root",onClick:a.onClear},null,8,["name","onClick"])):k("v-if",!0),w("div",{class:"press-field__icon-container",onClick:t[1]||(t[1]=(...e)=>a.onClickIcon&&a.onClickIcon(...e))},[l.rightIcon||l.icon?(f(),_(r,{key:0,name:l.rightIcon||l.icon,class:C("press-field__icon-root "+l.iconClass),"custom-class":l.rightIconClass},null,8,["name","class","custom-class"])):k("v-if",!0),b(e.$slots,"right-icon",{},void 0,!0),b(e.$slots,"icon",{},void 0,!0)]),w("div",{class:"press-field__button"},[b(e.$slots,"button",{},void 0,!0)])],2),l.showWordLimit&&e.maxlength?(f(),m("div",{key:0,class:"press-field__word-limit"},[w("div",{class:C([s.utils.bem2("field__word-num",{full:s.innerValue.length>=e.maxlength})])},S(s.innerValue.length>=e.maxlength?e.maxlength:s.innerValue.length),3),B("/"+S(e.maxlength),1)])):k("v-if",!0),l.errorMessage?(f(),m("div",{key:1,class:C([s.utils.bem2("field__error-message",[l.errorMessageAlign,{disabled:e.disabled,error:l.error}])])},S(l.errorMessage),3)):k("v-if",!0)])),_:3},8,["size","icon","center","border","is-link","required","clickable","title-width","title-style","use-title-slot","custom-style","arrow-direction"])],2)}],["__scopeId","data-v-f362662e"]]),PressButton:V},props:{value:{type:String,default:""},sectionStyle:{type:String,default:"margin: 0;background: #f7f8fa;"},headerStyle:{type:String,default:"background: #f7f8fa;"},autosize:{type:[Boolean,Object],default:()=>({maxHeight:600,minHeight:50})}},data(){return{inputValue:this.value}},watch:{value:{handler(e){this.inputValue=e}}},mounted(){},methods:{onClearInput(){this.inputValue=""},onConfirmInput(){this.$emit("confirm",this.inputValue)}}},[["render",function(e,t,l,o,s,a){const i=p("PressField"),n=p("PressButton"),r=p("demo-block");return f(),_(r,{title:e.t("mockData"),"section-style":l.sectionStyle,"header-style":l.headerStyle},{default:y((()=>[w("div",{class:"input__wrap"},[g(i,{modelValue:s.inputValue,"onUpdate:modelValue":t[0]||(t[0]=e=>s.inputValue=e),type:"textarea",autosize:l.autosize,placeholder:"请输入数据"},null,8,["modelValue","autosize"]),w("div",{class:"input__buttons"},[g(n,{size:"small","custom-style":"margin-left: 0; margin-right: 8px",onClick:a.onClearInput},{default:y((()=>[B(" 清空 ")])),_:1},8,["onClick"]),g(n,{type:"primary","custom-style":"margin: 0;",size:"small",onClick:a.onConfirmInput},{default:y((()=>[B(" 确定 ")])),_:1},8,["onClick"])])])])),_:1},8,["title","section-style","header-style"])}],["__scopeId","data-v-7b74f988"]]);export{P as D};
