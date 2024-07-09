import{_ as e,o as l,a,w as o,S as t,j as n,l as r,t as s,d as i}from"./index-7a15811b.js";import{P as d}from"./press-field.4d2b8b7f.js";import{P as h}from"./press-button.fdc832a6.js";import"./press-cell.fbb64f1a.js";import"./press-icon-plus.eb48dd73.js";import"./utils.f8cec38d.js";import"./add-unit.e5b08e9d.js";import"./press-info.b7012b43.js";import"./press-component.fd531b70.js";import"./link.d4e234c5.js";import"./event.fe25d607.js";import"./support-passive.bc409298.js";import"./press-loading-plus.1f19fb52.js";import"./press-loading.1545c2d0.js";import"./button.a30a6753.js";import"./version.2049afb8.js";const c=e({i18n:{"zh-CN":{label:"文本",placeholder:"请输入文本",message:"留言",autosize:"高度自适应",placeholderAutoSize:"请输入留言",text:"文本",digit:"整数",phone:"号码",number:"数字",customType:"自定义类型",smsPlaceholder:"请输入号码",textPlaceholder:"请输入文本",digitPlaceholder:"请输入整数",phonePlaceholder:"请输入号码",numberPlaceholder:"请输入数字（支持小数）",disabled:"禁用输入框",inputReadonly:"输入框只读",inputDisabled:"输入框已禁用",errorInfo:"错误提示",phoneError:"号码格式错误",inputAlign:"输入框内容对齐",alignPlaceHolder:"输入框内容右对齐",sms:"号码",sendSMS:"发送号码",insertButton:"插入按钮",username:"名称",usernamePlaceholder:"请输入名称",wordLimit:"字数限制"},"en-US":{label:"Label",placeholder:"Text",message:"SMS",autosize:"Auto Resize",placeholderAutoSize:"Message",text:"Text",digit:"Digit",phone:"Phone",number:"Number",customType:"Custom Type",smsPlaceholder:"SMS",textPlaceholder:"Text",digitPlaceholder:"Digit",phonePlaceholder:"Phone",numberPlaceholder:"Number",inputReadonly:"Input Readonly",inputDisabled:"Input Disabled",errorInfo:"Error Info",phoneError:"Invalid phone",inputAlign:"Input Align",alignPlaceHolder:"Input Align Right",sms:"SMS",sendSMS:"Send SMS",insertButton:"Insert Button",wordLimit:"Word Limit"}},components:{PressField:d,PressButton:h},data:()=>({value:"",username:"",text:"",password:"",number:"",digit:"",tel:"",headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0;padding: 0;"}),methods:{onChange(e){"string"==typeof e&&this.onGTip(`${e}`)},onInput(...e){console.log("[onInput]",e)},onConfirm(...e){console.log("[onConfirm]",e)},onFocus(...e){console.log("[onFocus]",e)},onBlur(...e){console.log("[onBlur]",e)},onLineChange(...e){console.log("[onLineChange]",e)},onClickIcon(){this.onGTip("Click Icon")}}},[["render",function(e,d,h,c,u,p){const g=i("press-field"),m=i("demo-block"),b=i("press-button"),y=t;return l(),a(y,{"scroll-y":"",class:"wrap"},{default:o((()=>[n(m,{title:e.t("basicUsage"),"header-style":u.headerStyle,"section-style":u.sectionStyle},{default:o((()=>[n(g,{value:u.value,placeholder:e.t("placeholder"),"title-width":"0","always-embed":!0,border:!1,onChange:p.onChange,onInput:p.onInput,onConfirm:p.onConfirm,onFocus:p.onFocus,onBlur:p.onBlur},null,8,["value","placeholder","onChange","onInput","onConfirm","onFocus","onBlur"])])),_:1},8,["title","header-style","section-style"]),n(m,{title:e.t("customType"),"header-style":u.headerStyle,"section-style":u.sectionStyle},{default:o((()=>[n(g,{value:u.text,required:"",clearable:"",label:e.t("label"),icon:"question-o",placeholder:e.t("placeholder"),"always-embed":!0,onClickIcon:p.onClickIcon},null,8,["value","label","placeholder","onClickIcon"]),n(g,{value:u.tel,placeholder:e.t("phonePlaceholder"),label:e.t("phone"),required:"",clearable:"",type:"tel",border:!1,"always-embed":!0,onChange:p.onChange},null,8,["value","placeholder","label","onChange"]),n(g,{value:u.digit,placeholder:e.t("digitPlaceholder"),label:e.t("digit"),required:"",clearable:"",type:"digit","always-embed":!0,border:!1,onChange:p.onChange},null,8,["value","placeholder","label","onChange"]),n(g,{value:u.number,placeholder:e.t("numberPlaceholder"),label:e.t("number"),required:"",clearable:"",type:"digit",border:!1,"always-embed":!0,onChange:p.onChange},null,8,["value","placeholder","label","onChange"]),n(g,{value:u.password,placeholder:e.t("passwordPlaceholder"),label:e.t("password"),required:"",clearable:"",type:"password",border:!1,"always-embed":!0,onChange:p.onChange},null,8,["value","placeholder","label","onChange"])])),_:1},8,["title","header-style","section-style"]),n(m,{title:e.t("disabled"),"header-style":u.headerStyle,"section-style":u.sectionStyle},{default:o((()=>[n(g,{label:e.t("label"),"left-icon":"contact",disabled:"",placeholder:e.t("inputDisabled"),border:!1,"always-embed":!0,onChange:p.onChange},null,8,["label","placeholder","onChange"])])),_:1},8,["title","header-style","section-style"]),n(m,{title:e.t("errorInfo"),"header-style":u.headerStyle,"section-style":u.sectionStyle},{default:o((()=>[n(g,{value:u.username,label:e.t("username"),placeholder:e.t("usernamePlaceholder"),"always-embed":!0,error:"",border:!1,onChange:p.onChange},null,8,["value","label","placeholder","onChange"]),n(g,{value:u.username,label:e.t("phone"),placeholder:e.t("phonePlaceholder"),"error-message":e.t("phoneError"),"always-embed":!0,border:!1,onChange:p.onChange},null,8,["value","label","placeholder","error-message","onChange"])])),_:1},8,["title","header-style","section-style"]),n(m,{title:e.t("inputAlign"),"header-style":u.headerStyle,"section-style":u.sectionStyle},{default:o((()=>[n(g,{label:e.t("username"),placeholder:e.t("usernamePlaceholder"),"always-embed":!0,border:!1,"input-align":"right",onChange:p.onChange},null,8,["label","placeholder","onChange"])])),_:1},8,["title","header-style","section-style"]),n(m,{title:e.t("autosize"),"header-style":u.headerStyle,"section-style":u.sectionStyle},{default:o((()=>[n(g,{label:e.t("message"),type:"textarea",placeholder:e.t("placeholderAutoSize"),border:!1,"always-embed":!0,autosize:"",onChange:p.onChange,onLinechange:p.onLineChange},null,8,["label","placeholder","onChange","onLinechange"])])),_:1},8,["title","header-style","section-style"]),n(m,{title:e.t("wordLimit"),"header-style":u.headerStyle,"section-style":u.sectionStyle},{default:o((()=>[n(g,{value:u.username,label:e.t("username"),placeholder:e.t("usernamePlaceholder"),"always-embed":!0,border:!1,"show-word-limit":!0,maxlength:20,onChange:p.onChange},null,8,["value","label","placeholder","onChange"]),n(g,{label:e.t("message"),type:"textarea",placeholder:e.t("placeholderAutoSize"),border:!1,"always-embed":!0,"show-word-limit":!0,maxlength:100,autosize:"",onChange:p.onChange,onLinechange:p.onLineChange},null,8,["label","placeholder","onChange","onLinechange"])])),_:1},8,["title","header-style","section-style"]),n(m,{title:e.t("insertButton"),"header-style":u.headerStyle,"section-style":u.sectionStyle},{default:o((()=>[n(g,{center:"",clearable:"",label:e.t("sms"),placeholder:e.t("smsPlaceholder"),border:!1,"always-embed":!0,autosize:"",onChange:p.onChange},{button:o((()=>[n(b,{size:"small",type:"primary"},{default:o((()=>[r(s(e.t("sendSMS")),1)])),_:1})])),_:1},8,["label","placeholder","onChange"])])),_:1},8,["title","header-style","section-style"])])),_:1})}],["__scopeId","data-v-7c8c68c6"]]);export{c as default};
