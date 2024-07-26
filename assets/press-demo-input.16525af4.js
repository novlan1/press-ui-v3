import{P as e}from"./press-button.2236d5eb.js";import{P as t}from"./press-field.6ee9424f.js";import{_ as s,o as i,c as a,i as n,n as l,r as o,j as r,t as d,f as c,e as u,q as p,w as y,h as f,v as m}from"./index-66fd861e.js";const h=s({name:"PressDemoInput",i18n:{"zh-CN":{custom:"自定义",mockData:"自定义数据"},"en-US":{custom:"Custom",mockData:"Custom Data"}},components:{PressField:t,PressButton:e,PressDemoBlock:s({name:"PressDemoBlock",options:{styleIsolation:"shared"},components:{PressSection:s({name:"PressSection",props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1},headerStyle:{type:String,default:""},active:{type:Boolean,default:!0},clickable:{type:Boolean,default:!1}},emits:["click"],computed:{innerPadding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},methods:{onClick(){this.$emit("click")}}},[["render",function(e,t,s,u,p,y){return i(),a("div",{class:l(["press-section",[{"press-section--active":s.active},{"press-section--clickable":s.clickable}]])},[n("div",{class:"press-section-header",style:r(s.headerStyle),onClick:t[0]||(t[0]=(...e)=>y.onClick&&y.onClick(...e))},[s.type?(i(),a("div",{key:0,class:l(["press-section-header__decoration",[s.type,{"press-section-header__decoration--active":s.active}]])},null,2)):o(e.$slots,"decoration",{key:1},void 0,!0),n("div",{class:"press-section-header__content"},[n("span",{style:r({"font-size":s.titleFontSize,color:s.titleColor}),class:l(["press-section__content-title",{distraction:!s.subTitle}])},d(s.title),7),s.subTitle?(i(),a("span",{key:0,style:r({"font-size":s.subTitleFontSize,color:s.subTitleColor}),class:"press-section-header__content-sub"},d(s.subTitle),5)):c("v-if",!0)]),n("div",{class:"press-section-header__slot-right"},[o(e.$slots,"right",{},void 0,!0)])],4),n("div",{class:"press-section-content",style:r({padding:y.innerPadding})},[o(e.$slots,"default",{},void 0,!0)],4)],2)}],["__scopeId","data-v-d0dc7a48"]])},props:{title:{type:String,default:""},sectionStyle:{type:String,default:""},headerStyle:{type:String,default:""}}},[["render",function(e,t,s,a,l,d){const c=u("PressSection");return i(),p(c,{title:s.title,"header-style":s.headerStyle,type:"line"},{default:y((()=>[n("div",{class:"section-content",style:r(s.sectionStyle)},[o(e.$slots,"default",{},void 0,!0)],4)])),_:3},8,["title","header-style"])}],["__scopeId","data-v-d368a21c"]])},props:{value:{type:String,default:""},sectionStyle:{type:String,default:"margin: 0;background: #f7f8fa;"},headerStyle:{type:String,default:"background: #f7f8fa;"},autosize:{type:[Boolean,Object],default:()=>({maxHeight:600,minHeight:50})}},data(){return{inputValue:this.value}},watch:{value:{handler(e){this.inputValue=e}}},mounted(){},methods:{onClearInput(){this.inputValue=""},onConfirmInput(){this.$emit("confirm",this.inputValue)}}},[["render",function(e,t,s,a,l,o){const r=u("PressField"),d=u("PressButton"),c=u("PressDemoBlock");return i(),p(c,{title:e.t("mockData"),"section-style":s.sectionStyle,"header-style":s.headerStyle},{default:y((()=>[n("div",{class:"input__wrap"},[f(r,{modelValue:l.inputValue,"onUpdate:modelValue":t[0]||(t[0]=e=>l.inputValue=e),type:"textarea",autosize:s.autosize,placeholder:"请输入数据"},null,8,["modelValue","autosize"]),n("div",{class:"input__buttons"},[f(d,{size:"small","custom-style":"margin-left: 0; margin-right: 8px",onClick:o.onClearInput},{default:y((()=>[m(" 清空 ")])),_:1},8,["onClick"]),f(d,{type:"primary","custom-style":"margin: 0;",size:"small",onClick:o.onConfirmInput},{default:y((()=>[m(" 确定 ")])),_:1},8,["onClick"])])])])),_:1},8,["title","section-style","header-style"])}],["__scopeId","data-v-70619811"]]);export{h as D};
