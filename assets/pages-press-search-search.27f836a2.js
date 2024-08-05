import{P as e}from"./press-field.12cf1f96.js";import{u as l}from"./utils.29d4c09b.js";import{t as a}from"./index.872177f1.js";import{_ as t,o as n,c as o,i as s,n as i,t as c,r,h as u,w as h,f as d,j as p,e as g}from"./index-5ce068d6.js";import"./press-cell.c8fe1713.js";import"./press-icon-plus.86d78210.js";import"./style.0f94ff97.js";import"./add-unit.39434bfe.js";import"./press-info.be4091c7.js";import"./press-component.7a68e6d8.js";import"./link.2803ba37.js";import"./event.eea0932c.js";import"./support-passive.bc409298.js";import"./parent.59fa8a22.js";const f=t({i18n:{"zh-CN":{label:"地址",disabled:"禁用搜索框",inputAlign:"搜索框内容对齐",background:"自定义背景色",placeholder:"请输入搜索关键词",customButton:"自定义按钮",listenToEvents:"事件监听"},"en-US":{label:"Address",disabled:"Disabled",inputAlign:"Input Align",background:"Custom Background Color",placeholder:"Placeholder",customButton:"Custom Action Button",listenToEvents:"Listen to Events"}},components:{PressSearch:t({name:"PressSearch",components:{PressField:e},field:!0,props:{value:{type:String,default:""},label:{type:String,default:""},focus:Boolean,error:Boolean,disabled:Boolean,readonly:Boolean,inputAlign:{type:String,default:""},showAction:Boolean,useActionSlot:Boolean,useLeftIconSlot:Boolean,useRightIconSlot:Boolean,leftIcon:{type:String,default:"search"},rightIcon:{type:String,default:""},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},actionText:{type:String,default:a("cancel")},background:{type:String,default:"#ffffff"},maxlength:{type:Number,default:-1},shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},clearTrigger:{type:String,default:"focus"},clearIcon:{type:String,default:"clear"},customClass:{type:String,default:""},fieldClass:{type:String,default:""},inputClass:{type:String,default:""},cancelClass:{type:String,default:""}},emits:["change","cancel","search","focus","blur","clear","click-input"],data(){return{utils:l,innerValue:this.value}},computed:{fieldBaseClass(){return`press-search__field ${this.fieldClass}`},fieldCustomClass:()=>""},watch:{value:{handler(e){this.innerValue=e}}},methods:{onChange(e){"string"==typeof e&&(this.innerValue=e,this.$emit("change",e))},onCancel(){setTimeout((()=>{this.$emit("cancel"),this.$emit("change","")}),200)},onSearch(e){this.$emit("search",e)},onFocus(){this.$emit("focus")},onBlur(){this.$emit("blur")},onClear(){this.innerValue="",this.onChange(this.innerValue),this.$emit("clear")},onClickInput(){this.$emit("click-input")}}},[["render",function(e,l,a,t,f,C){const m=g("PressField");return n(),o("div",{class:"press-search-index"},[s("div",{class:i([a.customClass,f.utils.bem2("search",{withaction:a.showAction||a.useActionSlot})]),style:p("background: "+a.background)},[s("div",{class:i([f.utils.bem2("search__content",[a.shape])])},[a.label?(n(),o("div",{key:0,class:"press-search__label"},c(a.label),1)):r(e.$slots,"label",{key:1},void 0,!0),u(m,{type:"search","left-icon":a.useLeftIconSlot?"":a.leftIcon,"right-icon":a.useRightIconSlot?"":a.rightIcon,focus:a.focus,error:a.error,border:!1,"confirm-type":"search",class:i(C.fieldBaseClass),"custom-class":C.fieldCustomClass,value:f.innerValue,disabled:a.disabled,readonly:a.readonly,clearable:a.clearable,"clear-trigger":a.clearTrigger,"clear-icon":a.clearIcon,maxlength:a.maxlength,"input-align":a.inputAlign,"input-class":a.inputClass,placeholder:a.placeholder,"placeholder-style":a.placeholderStyle,"custom-style":"padding: 5px 10px 5px 0; background-color: transparent;",onBlur:C.onBlur,onFocus:C.onFocus,onChange:C.onChange,onConfirm:C.onSearch,onClear:C.onClear,onClickInput:C.onClickInput},{"left-icon":h((()=>[a.useLeftIconSlot?r(e.$slots,"left-icon",{key:0},void 0,!0):d("v-if",!0)])),"right-icon":h((()=>[a.useRightIconSlot?r(e.$slots,"right-icon",{key:0},void 0,!0):d("v-if",!0)])),_:3},8,["left-icon","right-icon","focus","error","class","custom-class","value","disabled","readonly","clearable","clear-trigger","clear-icon","maxlength","input-align","input-class","placeholder","placeholder-style","onBlur","onFocus","onChange","onConfirm","onClear","onClickInput"])],2),a.showAction||a.useActionSlot?(n(),o("div",{key:0,class:"press-search__action","hover-class":"press-search__action--hover","hover-stay-time":"70"},[a.useActionSlot?r(e.$slots,"action",{key:0},void 0,!0):(n(),o("div",{key:1,class:i(a.cancelClass),onClick:l[0]||(l[0]=(...e)=>C.onCancel&&C.onCancel(...e))},c(a.actionText),3))])):d("v-if",!0)],6)])}],["__scopeId","data-v-a59a19b2"]])},data:()=>({value:""}),methods:{onChange(e){"string"==typeof e&&this.onGTip(`${e}`)},onCancel(){this.onGTip("cancel")},onSearch(){this.onGTip("search")},onClick(){this.onGTip("click")}}},[["render",function(e,l,a,t,i,r){const d=g("press-search"),p=g("demo-block");return n(),o("div",{class:"demo-wrap"},[u(p,{title:e.t("basicUsage")},{default:h((()=>[u(d,{value:i.value,placeholder:e.t("placeholder"),onChange:r.onChange},null,8,["value","placeholder","onChange"])])),_:1},8,["title"]),u(p,{title:e.t("listenToEvents")},{default:h((()=>[u(d,{value:i.value,placeholder:e.t("placeholder"),"show-action":"",onSearch:r.onSearch,onCancel:r.onCancel,onChange:r.onChange},null,8,["value","placeholder","onSearch","onCancel","onChange"])])),_:1},8,["title"]),u(p,{title:e.t("inputAlign")},{default:h((()=>[u(d,{value:i.value,placeholder:e.t("placeholder"),"input-align":"center",onSearch:r.onSearch,onCancel:r.onCancel,onChange:r.onChange},null,8,["value","placeholder","onSearch","onCancel","onChange"])])),_:1},8,["title"]),u(p,{title:e.t("disabled")},{default:h((()=>[u(d,{value:i.value,disabled:"",placeholder:e.t("placeholder"),onChange:r.onChange},null,8,["value","placeholder","onChange"])])),_:1},8,["title"]),u(p,{title:e.t("background")},{default:h((()=>[u(d,{value:i.value,shape:"round",background:"#4fc08d",placeholder:e.t("placeholder"),onChange:r.onChange},null,8,["value","placeholder","onChange"])])),_:1},8,["title"]),u(p,{title:e.t("customButton")},{default:h((()=>[u(d,{value:i.value,label:e.t("label"),"use-action-slot":"",placeholder:e.t("placeholder"),onChange:r.onChange},{action:h((()=>[s("div",{onClick:l[0]||(l[0]=(...e)=>r.onClick&&r.onClick(...e))},c(e.t("search")),1)])),_:1},8,["value","label","placeholder","onChange"])])),_:1},8,["title"])])}]]);export{f as default};
