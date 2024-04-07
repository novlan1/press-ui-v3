import{_ as e,G as t,o as l,c as a,F as o,h as n,J as i,t as u,k as s,d,U as r,w as p,l as h}from"./index-95b0f20a.js";import{n as c}from"./test.b328066d.js";const m=e({i18n:{"zh-CN":{mode:"模式",maxLength:"自定义长度",space:"自定义间距",hairline:"细边框",style:"自定义样式",dot:"隐藏输入内容",autoFocus:"自动获取焦点"},"en-US":{mode:"Mode",maxLength:"Max Length",space:"Space",hairline:"Hairline",style:"Custom Style",dot:"Dot",autoFocus:"Auto Focus"}},components:{PressCodeInput:e({name:"PressCodeInput",mixins:[{props:{adjustPosition:{type:Boolean,default:!0},maxLength:{type:[String,Number],default:6},dot:{type:Boolean,default:!1},mode:{type:String,default:"box"},hairline:{type:Boolean,default:!1},space:{type:[String,Number],default:10},value:{type:[String,Number],default:""},focus:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},color:{type:String,default:"#606266"},fontSize:{type:[String,Number],default:18},size:{type:[String,Number],default:35},disabledKeyboard:{type:Boolean,default:!1},borderColor:{type:String,default:"#c9cacc"},disabledDot:{type:Boolean,default:!0}}}],emits:["change","finish","input"],data(){return{inputValue:"",isFocus:this.focus}},computed:{codeLength(){return new Array(Number(this.maxLength))},itemStyle(){return e=>{const l={width:t(this.size),height:t(this.size)};return"box"===this.mode&&(l.border=`${this.hairline?.5:1}px solid ${this.borderColor}`,0===function(e,t=!1){return c(`${e}`)?t?`${e}px`:Number(e):/(rpx|upx)$/.test(`${e}`)?t?`${uni.upx2px(parseInt(`${e}`))}px`:Number(uni.upx2px(parseInt(`${e}`))):t?`${parseInt(`${e}`)}px`:parseInt(`${e}`)}(this.space)&&(0===e&&(l.borderTopLeftRadius="3px",l.borderBottomLeftRadius="3px"),e===this.codeLength.length-1&&(l.borderTopRightRadius="3px",l.borderBottomRightRadius="3px"),e!==this.codeLength.length-1&&(l.borderRight="none"))),e!==this.codeLength.length-1?l.marginRight=t(this.space):l.marginRight=0,l}},codeArray(){return String(this.inputValue).split("")},lineStyle(){const e={};return e.height=this.hairline?"2px":"4px",e.width=t(this.size),e.backgroundColor=this.borderColor,e}},watch:{value:{immediate:!0,handler(e){this.inputValue=String(e).substring(0,this.maxLength)||""}}},methods:{addUnit:t,inputHandler(e){const{value:t}=e.detail||e.target;this.inputValue=t,this.disabledDot&&this.$nextTick((()=>{this.inputValue=t.replace(".","")})),this.$emit("change",t),this.$emit("input",t),String(t).length>=Number(this.maxLength)&&this.$emit("finish",t)}}},[["render",function(e,t,p,h,c,m){const g=r;return l(),a("div",{class:"press-code-input"},[(l(!0),a(o,null,n(m.codeLength,((t,o)=>(l(),a("div",{key:o,class:"press-code-input__item",style:i([m.itemStyle(o)])},[e.dot&&m.codeArray.length>o?(l(),a("div",{key:0,class:"press-code-input__item__dot"})):(l(),a("span",{key:1,style:i({fontSize:m.addUnit(e.fontSize),fontWeight:e.bold?"bold":"normal",color:e.color})},u(m.codeArray[o]||""),5)),"line"===e.mode?(l(),a("div",{key:2,class:"press-code-input__item__line",style:i([m.lineStyle])},null,4)):s("v-if",!0),c.isFocus&&m.codeArray.length===o?(l(),a("div",{key:3,style:i({backgroundColor:e.color}),class:"press-code-input__item__cursor"},null,4)):s("v-if",!0)],4)))),128)),d(g,{disabled:e.disabledKeyboard,type:"number",focus:e.focus,value:c.inputValue,maxlength:e.maxLength,adjustPosition:e.adjustPosition,class:"press-code-input__input",style:i({height:m.addUnit(e.size)}),onInput:m.inputHandler,onFocus:t[0]||(t[0]=e=>c.isFocus=!0),onBlur:t[1]||(t[1]=e=>c.isFocus=!1)},null,8,["disabled","focus","value","maxlength","adjustPosition","style","onInput"])])}],["__scopeId","data-v-65732c00"]])},data:()=>({value:"",valueMode:"",valueSpace:"",valueMaxLength:"",valueHairline:"",valueHairline2:"",valueStyle:"",valueDot:"",valueFocus:""}),methods:{change(e){console.log(`内容改变，当前值为：${e}`)},finish(e){console.log(`输入结束，当前值为：${e}`)}}},[["render",function(e,t,o,n,i,u){const r=h("PressCodeInput"),c=h("demo-block");return l(),a("div",{class:"demo-wrap"},[d(c,{title:e.t("basicUsage")},{default:p((()=>[d(r,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),onChange:u.change,onFinish:u.finish},null,8,["modelValue","onChange","onFinish"])])),_:1},8,["title"]),d(c,{title:e.t("mode")},{default:p((()=>[d(r,{modelValue:i.valueMode,"onUpdate:modelValue":t[1]||(t[1]=e=>i.valueMode=e),mode:"line"},null,8,["modelValue"])])),_:1},8,["title"]),d(c,{title:e.t("maxLength")},{default:p((()=>[d(r,{modelValue:i.valueMaxLength,"onUpdate:modelValue":t[2]||(t[2]=e=>i.valueMaxLength=e),"max-length":4},null,8,["modelValue"])])),_:1},8,["title"]),d(c,{title:e.t("space")},{default:p((()=>[d(r,{modelValue:i.valueSpace,"onUpdate:modelValue":t[3]||(t[3]=e=>i.valueSpace=e),space:0,"max-length":4},null,8,["modelValue"])])),_:1},8,["title"]),d(c,{title:e.t("hairline")},{default:p((()=>[d(r,{modelValue:i.valueHairline,"onUpdate:modelValue":t[4]||(t[4]=e=>i.valueHairline=e),hairline:"","max-length":4},null,8,["modelValue"]),s(' <PressCodeInput\n        v-model="valueHairline2"\n        mode="line"\n        hairline\n      /> ')])),_:1},8,["title"]),d(c,{title:e.t("style")},{default:p((()=>[d(r,{modelValue:i.valueStyle,"onUpdate:modelValue":t[5]||(t[5]=e=>i.valueStyle=e),color:"#f56c6c","border-color":"#f56c6c","max-length":4},null,8,["modelValue"])])),_:1},8,["title"]),d(c,{title:e.t("dot")},{default:p((()=>[d(r,{modelValue:i.valueDot,"onUpdate:modelValue":t[6]||(t[6]=e=>i.valueDot=e),dot:"","max-length":4},null,8,["modelValue"])])),_:1},8,["title"]),d(c,{title:e.t("autoFocus")},{default:p((()=>[d(r,{modelValue:i.valueFocus,"onUpdate:modelValue":t[7]||(t[7]=e=>i.valueFocus=e),focus:"","max-length":4},null,8,["modelValue"])])),_:1},8,["title"])])}],["__scopeId","data-v-bdfe4836"]]);export{m as default};
