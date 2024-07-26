import{_ as e,o as t,c as l,F as a,p as o,j as n,t as i,f as u,h as s,I as d,w as r,e as p}from"./index-66fd861e.js";import{a as h}from"./add-unit.9de8b2f7.js";import{n as c}from"./test.b328066d.js";const m=e({i18n:{"zh-CN":{mode:"模式",maxLength:"自定义长度",space:"自定义间距",hairline:"细边框",style:"自定义样式",dot:"隐藏输入内容",autoFocus:"自动获取焦点"},"en-US":{mode:"Mode",maxLength:"Max Length",space:"Space",hairline:"Hairline",style:"Custom Style",dot:"Dot",autoFocus:"Auto Focus"}},components:{PressCodeInput:e({name:"PressCodeInput",mixins:[{props:{adjustPosition:{type:Boolean,default:!0},maxLength:{type:[String,Number],default:6},dot:{type:Boolean,default:!1},mode:{type:String,default:"box"},hairline:{type:Boolean,default:!1},space:{type:[String,Number],default:10},value:{type:[String,Number],default:""},focus:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},color:{type:String,default:"#606266"},fontSize:{type:[String,Number],default:18},size:{type:[String,Number],default:35},disabledKeyboard:{type:Boolean,default:!1},borderColor:{type:String,default:"#c9cacc"},disabledDot:{type:Boolean,default:!0}}}],emits:["change","finish","input"],data(){return{inputValue:"",isFocus:this.focus}},computed:{codeLength(){return new Array(Number(this.maxLength))},itemStyle(){return e=>{const t={width:h(this.size),height:h(this.size)};return"box"===this.mode&&(t.border=`${this.hairline?.5:1}px solid ${this.borderColor}`,0===function(e,t=!1){return c(`${e}`)?t?`${e}px`:Number(e):/(rpx|upx)$/.test(`${e}`)?t?`${uni.upx2px(parseInt(`${e}`))}px`:Number(uni.upx2px(parseInt(`${e}`))):t?`${parseInt(`${e}`)}px`:parseInt(`${e}`)}(this.space)&&(0===e&&(t.borderTopLeftRadius="3px",t.borderBottomLeftRadius="3px"),e===this.codeLength.length-1&&(t.borderTopRightRadius="3px",t.borderBottomRightRadius="3px"),e!==this.codeLength.length-1&&(t.borderRight="none"))),e!==this.codeLength.length-1?t.marginRight=h(this.space):t.marginRight=0,t}},codeArray(){return String(this.inputValue).split("")},lineStyle(){const e={};return e.height=this.hairline?"2px":"4px",e.width=h(this.size),e.backgroundColor=this.borderColor,e}},watch:{value:{immediate:!0,handler(e){this.inputValue=String(e).substring(0,this.maxLength)||""}}},methods:{addUnit:h,inputHandler(e){const{value:t}=e.detail||e.target;this.inputValue=t,this.disabledDot&&this.$nextTick((()=>{this.inputValue=t.replace(".","")})),this.$emit("change",t),this.$emit("input",t),String(t).length>=Number(this.maxLength)&&this.$emit("finish",t)}}},[["render",function(e,r,p,h,c,m){const g=d;return t(),l("div",{class:"press-code-input"},[(t(!0),l(a,null,o(m.codeLength,((a,o)=>(t(),l("div",{key:o,class:"press-code-input__item",style:n([m.itemStyle(o)])},[e.dot&&m.codeArray.length>o?(t(),l("div",{key:0,class:"press-code-input__item__dot"})):(t(),l("span",{key:1,style:n({fontSize:m.addUnit(e.fontSize),fontWeight:e.bold?"bold":"normal",color:e.color})},i(m.codeArray[o]||""),5)),"line"===e.mode?(t(),l("div",{key:2,class:"press-code-input__item__line",style:n([m.lineStyle])},null,4)):u("v-if",!0),c.isFocus&&m.codeArray.length===o?(t(),l("div",{key:3,style:n({backgroundColor:e.color}),class:"press-code-input__item__cursor"},null,4)):u("v-if",!0)],4)))),128)),s(g,{disabled:e.disabledKeyboard,type:"number",focus:e.focus,value:c.inputValue,maxlength:e.maxLength,adjustPosition:e.adjustPosition,class:"press-code-input__input",style:n({height:m.addUnit(e.size)}),onInput:m.inputHandler,onFocus:r[0]||(r[0]=e=>c.isFocus=!0),onBlur:r[1]||(r[1]=e=>c.isFocus=!1)},null,8,["disabled","focus","value","maxlength","adjustPosition","style","onInput"])])}],["__scopeId","data-v-7fe64ccd"]])},data:()=>({value:"",valueMode:"",valueSpace:"",valueMaxLength:"",valueHairline:"",valueHairline2:"",valueStyle:"",valueDot:"",valueFocus:""}),methods:{change(e){console.log(`内容改变，当前值为：${e}`)},finish(e){console.log(`输入结束，当前值为：${e}`)}}},[["render",function(e,a,o,n,i,d){const h=p("PressCodeInput"),c=p("demo-block");return t(),l("div",{class:"demo-wrap"},[s(c,{title:e.t("basicUsage")},{default:r((()=>[s(h,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),onChange:d.change,onFinish:d.finish},null,8,["modelValue","onChange","onFinish"])])),_:1},8,["title"]),s(c,{title:e.t("mode")},{default:r((()=>[s(h,{modelValue:i.valueMode,"onUpdate:modelValue":a[1]||(a[1]=e=>i.valueMode=e),mode:"line"},null,8,["modelValue"])])),_:1},8,["title"]),s(c,{title:e.t("maxLength")},{default:r((()=>[s(h,{modelValue:i.valueMaxLength,"onUpdate:modelValue":a[2]||(a[2]=e=>i.valueMaxLength=e),"max-length":4},null,8,["modelValue"])])),_:1},8,["title"]),s(c,{title:e.t("space")},{default:r((()=>[s(h,{modelValue:i.valueSpace,"onUpdate:modelValue":a[3]||(a[3]=e=>i.valueSpace=e),space:0,"max-length":4},null,8,["modelValue"])])),_:1},8,["title"]),s(c,{title:e.t("hairline")},{default:r((()=>[s(h,{modelValue:i.valueHairline,"onUpdate:modelValue":a[4]||(a[4]=e=>i.valueHairline=e),hairline:"","max-length":4},null,8,["modelValue"]),u(' <PressCodeInput\n        v-model="valueHairline2"\n        mode="line"\n        hairline\n      /> ')])),_:1},8,["title"]),s(c,{title:e.t("style")},{default:r((()=>[s(h,{modelValue:i.valueStyle,"onUpdate:modelValue":a[5]||(a[5]=e=>i.valueStyle=e),color:"#f56c6c","border-color":"#f56c6c","max-length":4},null,8,["modelValue"])])),_:1},8,["title"]),s(c,{title:e.t("dot")},{default:r((()=>[s(h,{modelValue:i.valueDot,"onUpdate:modelValue":a[6]||(a[6]=e=>i.valueDot=e),dot:"","max-length":4},null,8,["modelValue"])])),_:1},8,["title"]),s(c,{title:e.t("autoFocus")},{default:r((()=>[s(h,{modelValue:i.valueFocus,"onUpdate:modelValue":a[7]||(a[7]=e=>i.valueFocus=e),focus:"","max-length":4},null,8,["modelValue"])])),_:1},8,["title"])])}],["__scopeId","data-v-a024b35f"]]);export{m as default};
