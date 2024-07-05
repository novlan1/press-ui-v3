import{P as e}from"./press-icon-plus.cec3bc23.js";import{c as a}from"./version.066ec1d4.js";import{s as t,u as l}from"./utils.f8cec38d.js";import{a as o}from"./add-unit.e5b08e9d.js";import{d as s,a as i}from"./press-component.5db9b2cc.js";import{C as n,P as d}from"./relation.25345683.js";import{b as c}from"./parent-map.a476e3d9.js";import{_ as r,o as u,c as m,k as p,x as h,v as b,b as C,y as f,a as v,d as g,j as _,w as k,u as S,t as y}from"./index-26897e9f.js";import{P as z}from"./press-cell.09949a8d.js";import{P as I}from"./press-cell-group.51b2f9a1.js";import"./press-info.8af1a743.js";import"./link.9c6737a1.js";import"./event.ab14895d.js";import"./support-passive.bc409298.js";const P={iconStyle:function(e){const a={"font-size":o(e.iconSize)};return!e.checkedColor||e.disabled||e.parentDisabled||e.value!==e.name||(a["border-color"]=e.checkedColor,a["background-color"]=e.checkedColor),t(a)},iconCustomStyle:function(e){const a={"font-size":o(e.iconSize),"line-height":o(e.iconSize),display:"block"};return!e.checkedColor||e.disabled||e.parentDisabled||e.value!==e.name||(a["border-color"]=e.checkedColor,a["background-color"]=e.checkedColor),t(a)}};const D=r({i18n:{"zh-CN":{radio:"单选框",text1:"未选中禁用",text2:"选中且禁用",withCell:"与 Cell 组件一起使用",horizontal:"水平排列",customIcon:"自定义图标",customColor:"自定义颜色",customShape:"自定义形状",customIconSize:"自定义大小",disableLabel:"禁用文本点击"},"en-US":{radio:"Radio",text1:"Disabled",text2:"Disabled and checked",withCell:"Inside a Cell",horizontal:"Hrizontal",customIcon:"Custom Icon",customColor:"Custom Color",customShape:"Custom Shape",customIconSize:"Custom Icon Size",disableLabel:"Disable label click"}},components:{PressRadio:r({name:"PressRadio",options:{...s,styleIsolation:"shared"},components:{PressIconPlus:e},mixins:[n(c)],field:!0,props:{name:{type:[String,Number],default:""},value:{type:[String,Number],default:""},disabled:Boolean,useIconSlot:Boolean,checkedColor:{type:String,default:""},labelPosition:{type:String,default:"right"},labelDisabled:Boolean,shape:{type:String,default:"round"},iconSize:{type:null,default:20},iconClass:{type:String,default:""},labelClass:{type:String,default:""},...i},emits:["input","change"],data(){return{direction:"",parentDisabled:!1,dataValue:this.value,utils:l,computed:P}},computed:{radioIconClass(){const{shape:e,disabled:a,parentDisabled:t,dataValue:o,name:s}=this;return`${l.bem2("radio__icon",[e,{disabled:a||t,checked:o===s}])}`},radioIconCustomClass(){return this.iconClass},radioLabelClass(){const{labelPosition:e,disabled:a,parentDisabled:t,labelClass:o}=this;return`${l.bem2("radio__label",[e,{disabled:a||t}])} ${o}`}},mounted(){this.updateFromParent()},methods:{updateFromParent(){if(!this[c])return;const{value:e,disabled:a,direction:t}=this[c];this.dataValue=e,this.direction=t,this.parentDisabled=a},emitChange(e){const t=this[c]||this;t.$emit("input",e),t.$emit("change",e),a()&&(t.value=e)},onChange(){this.disabled||this.parentDisabled||this.emitChange(this.name)},onClickLabel(){const{disabled:e,parentDisabled:a,labelDisabled:t,name:l}=this;e||a||t||this.emitChange(l)}}},[["render",function(e,a,t,l,o,s){const i=g("press-icon-plus");return u(),m("div",{class:"press-radio-index"},[p("div",{class:h([o.utils.bem2("radio",[o.direction]),e.customClass])},["left"===t.labelPosition?(u(),m("div",{key:0,class:h(s.radioLabelClass),onClick:a[0]||(a[0]=(...e)=>s.onClickLabel&&s.onClickLabel(...e))},[b(e.$slots,"default",{},void 0,!0)],2)):C("v-if",!0),p("div",{class:"press-radio__icon-wrap",style:f("font-size: "+o.utils.addUnit(t.iconSize)),onClick:a[1]||(a[1]=(...e)=>s.onChange&&s.onChange(...e))},[t.useIconSlot?b(e.$slots,"icon",{key:0},void 0,!0):(u(),v(i,{key:1,name:"success",class:h(s.radioIconClass),"custom-class":s.radioIconCustomClass,"custom-style":""+o.computed.iconCustomStyle({iconSize:t.iconSize,checkedColor:t.checkedColor,disabled:t.disabled,parentDisabled:o.parentDisabled,value:o.dataValue,name:t.name})},null,8,["class","custom-class","custom-style"]))],4),"right"===t.labelPosition?(u(),m("div",{key:1,class:h(s.radioLabelClass),onClick:a[2]||(a[2]=(...e)=>s.onClickLabel&&s.onClickLabel(...e))},[b(e.$slots,"default",{},void 0,!0)],2)):C("v-if",!0)],2)])}],["__scopeId","data-v-1052c97e"]]),PressRadioGroup:r({name:"PressRadioGroup",options:{...s,styleIsolation:"shared"},mixins:[d(c)],field:!0,props:{value:{type:[String,Number],default:""},direction:{type:String,default:""},disabled:{type:Boolean},...i},emits:[],data:()=>({utils:l}),watch:{value:{handler(){this.updateChildren()}},disabled:{handler(){this.updateChildren()}}},created(){this.children=[]},methods:{updateChildren(){this.children.forEach((e=>e.updateFromParent()))}}},[["render",function(e,a,t,l,o,s){return u(),m("div",{class:"press-radio-group-index"},[p("div",{class:h([o.utils.bem2("radio-group",[t.direction])])},[b(e.$slots,"default",{},void 0,!0)],2)])}],["__scopeId","data-v-fc393da8"]]),PressCell:z,PressCellGroup:I},data:()=>({valueMap:{basic:"a",horizontal:"a",disabled:"a",square:"a",customStyle:"a",customSize:"a",customIcon:"a",labelDisabled:"a",cell:"1"},icon:{normal:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png",active:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png"}}),methods:{onChange(e,a){console.log("onChange.val",e),this.$set(this.valueMap,a,e)}}},[["render",function(e,a,t,l,o,s){const i=g("press-radio"),n=g("press-radio-group"),d=g("demo-block"),c=g("press-cell"),r=g("press-cell-group");return u(),m("div",{class:"demo-wrap"},[_(d,{title:e.t("basicUsage")},{default:k((()=>[_(n,{value:o.valueMap.basic,onChange:a[0]||(a[0]=e=>s.onChange(e,"basic"))},{default:k((()=>[_(i,{name:"a"},{default:k((()=>[S(y(e.t("radio"))+" 1 ",1)])),_:1}),_(i,{name:"b"},{default:k((()=>[S(y(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),_(d,{title:e.t("horizontal")},{default:k((()=>[_(n,{value:o.valueMap.horizontal,direction:"horizontal",onChange:a[1]||(a[1]=e=>s.onChange(e,"horizontal"))},{default:k((()=>[_(i,{name:"a"},{default:k((()=>[S(y(e.t("radio"))+" 1 ",1)])),_:1}),_(i,{name:"b"},{default:k((()=>[S(y(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),_(d,{title:e.t("disabled")},{default:k((()=>[_(n,{value:o.valueMap.disabled,disabled:"",onChange:a[2]||(a[2]=e=>s.onChange(e,"disabled"))},{default:k((()=>[_(i,{name:"a"},{default:k((()=>[S(y(e.t("radio"))+" 1 ",1)])),_:1}),_(i,{name:"b"},{default:k((()=>[S(y(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),_(d,{title:e.t("customShape")},{default:k((()=>[_(n,{value:o.valueMap.square,onChange:a[3]||(a[3]=e=>s.onChange(e,"square"))},{default:k((()=>[_(i,{name:"a",shape:"square"},{default:k((()=>[S(y(e.t("radio"))+" 1 ",1)])),_:1}),_(i,{name:"b",shape:"square"},{default:k((()=>[S(y(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),_(d,{title:e.t("customColor")},{default:k((()=>[_(n,{value:o.valueMap.customStyle,onChange:a[4]||(a[4]=e=>s.onChange(e,"customStyle"))},{default:k((()=>[_(i,{name:"a","checked-color":"#07c160"},{default:k((()=>[S(y(e.t("radio"))+" 1 ",1)])),_:1}),_(i,{name:"b","checked-color":"#07c160"},{default:k((()=>[S(y(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),_(d,{title:e.t("customIconSize")},{default:k((()=>[_(n,{value:o.valueMap.customSize,onChange:a[5]||(a[5]=e=>s.onChange(e,"customSize"))},{default:k((()=>[_(i,{name:"a","icon-size":"24px"},{default:k((()=>[S(y(e.t("radio"))+" 1 ",1)])),_:1}),_(i,{name:"b","icon-size":"24px"},{default:k((()=>[S(y(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),_(d,{title:e.t("customIcon")},{default:k((()=>[_(n,{value:o.valueMap.customIcon,onChange:a[6]||(a[6]=e=>s.onChange(e,"customIcon"))},{default:k((()=>[_(i,{name:"a","use-icon-slot":""},{icon:k((()=>[p("img",{class:"img",src:"a"===o.valueMap.customIcon?o.icon.active:o.icon.normal},null,8,["src"])])),default:k((()=>[S(y(e.t("radio"))+" 1 ",1)])),_:1}),_(i,{name:"b","use-icon-slot":""},{icon:k((()=>[p("img",{class:"img",src:"b"===o.valueMap.customIcon?o.icon.active:o.icon.normal},null,8,["src"])])),default:k((()=>[S(y(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),_(d,{title:e.t("disableLabel")},{default:k((()=>[_(n,{value:o.valueMap.labelDisabled,onChange:a[7]||(a[7]=e=>s.onChange(e,"labelDisabled"))},{default:k((()=>[_(i,{name:"a","label-disabled":""},{default:k((()=>[S(y(e.t("radio"))+" 1 ",1)])),_:1}),_(i,{name:"b","label-disabled":""},{default:k((()=>[S(y(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),_(d,{title:e.t("withCell"),"section-style":"margin: 0;"},{default:k((()=>[_(n,{value:o.valueMap.cell,onChange:a[10]||(a[10]=e=>s.onChange(e,"cell"))},{default:k((()=>[_(r,null,{default:k((()=>[_(c,{title:`${e.t("radio")} 1`,clickable:"","data-name":"1",onClick:a[8]||(a[8]=e=>o.valueMap.cell="1")},{"right-icon":k((()=>[_(i,{name:"1"})])),_:1},8,["title"]),_(c,{title:`${e.t("radio")} 2`,clickable:"","data-name":"2",onClick:a[9]||(a[9]=e=>o.valueMap.cell="2")},{"right-icon":k((()=>[_(i,{name:"2"})])),_:1},8,["title"])])),_:1})])),_:1},8,["value"])])),_:1},8,["title"])])}],["__scopeId","data-v-9ccbdad0"]]);export{D as default};