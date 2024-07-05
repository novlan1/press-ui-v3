import{E as e,C as a,G as t,y as l,H as o,J as s,$ as i,_ as n,o as d,c,e as r,B as u,z as m,j as h,I as p,h as b,k as C,a as f,d as v,w as g,v as _,t as k}from"./index-69342aaa.js";import{C as S,P as y}from"./relation.25345683.js";import{b as z}from"./parent-map.a476e3d9.js";import{P as I}from"./press-cell-group.dd13a053.js";const D={iconStyle:function(t){const l={"font-size":e(t.iconSize)};return!t.checkedColor||t.disabled||t.parentDisabled||t.value!==t.name||(l["border-color"]=t.checkedColor,l["background-color"]=t.checkedColor),a(l)},iconCustomStyle:function(t){const l={"font-size":e(t.iconSize),"line-height":e(t.iconSize),display:"block"};return!t.checkedColor||t.disabled||t.parentDisabled||t.value!==t.name||(l["border-color"]=t.checkedColor,l["background-color"]=t.checkedColor),a(l)}};const P=n({i18n:{"zh-CN":{radio:"单选框",text1:"未选中禁用",text2:"选中且禁用",withCell:"与 Cell 组件一起使用",horizontal:"水平排列",customIcon:"自定义图标",customColor:"自定义颜色",customShape:"自定义形状",customIconSize:"自定义大小",disableLabel:"禁用文本点击"},"en-US":{radio:"Radio",text1:"Disabled",text2:"Disabled and checked",withCell:"Inside a Cell",horizontal:"Hrizontal",customIcon:"Custom Icon",customColor:"Custom Color",customShape:"Custom Shape",customIconSize:"Custom Icon Size",disableLabel:"Disable label click"}},components:{PressRadio:n({name:"PressRadio",options:{...t,styleIsolation:"shared"},components:{PressIconPlus:l},mixins:[S(z)],field:!0,props:{name:{type:[String,Number],default:""},value:{type:[String,Number],default:""},disabled:Boolean,useIconSlot:Boolean,checkedColor:{type:String,default:""},labelPosition:{type:String,default:"right"},labelDisabled:Boolean,shape:{type:String,default:"round"},iconSize:{type:null,default:20},iconClass:{type:String,default:""},labelClass:{type:String,default:""},...o},emits:["input","change"],data(){return{direction:"",parentDisabled:!1,dataValue:this.value,utils:s,computed:D}},computed:{radioIconClass(){const{shape:e,disabled:a,parentDisabled:t,dataValue:l,name:o}=this;return`${s.bem2("radio__icon",[e,{disabled:a||t,checked:l===o}])}`},radioIconCustomClass(){return this.iconClass},radioLabelClass(){const{labelPosition:e,disabled:a,parentDisabled:t,labelClass:l}=this;return`${s.bem2("radio__label",[e,{disabled:a||t}])} ${l}`}},mounted(){this.updateFromParent()},methods:{updateFromParent(){if(!this[z])return;const{value:e,disabled:a,direction:t}=this[z];this.dataValue=e,this.direction=t,this.parentDisabled=a},emitChange(e){const a=this[z]||this;a.$emit("input",e),a.$emit("change",e),i()&&(a.value=e)},onChange(){this.disabled||this.parentDisabled||this.emitChange(this.name)},onClickLabel(){const{disabled:e,parentDisabled:a,labelDisabled:t,name:l}=this;e||a||t||this.emitChange(l)}}},[["render",function(e,a,t,l,o,s){const i=C("press-icon-plus");return d(),c("div",{class:"press-radio-index"},[r("div",{class:u([o.utils.bem2("radio",[o.direction]),e.customClass])},["left"===t.labelPosition?(d(),c("div",{key:0,class:u(s.radioLabelClass),onClick:a[0]||(a[0]=(...e)=>s.onClickLabel&&s.onClickLabel(...e))},[m(e.$slots,"default",{},void 0,!0)],2)):h("v-if",!0),r("div",{class:"press-radio__icon-wrap",style:p("font-size: "+o.utils.addUnit(t.iconSize)),onClick:a[1]||(a[1]=(...e)=>s.onChange&&s.onChange(...e))},[t.useIconSlot?m(e.$slots,"icon",{key:0},void 0,!0):(d(),b(i,{key:1,name:"success",class:u(s.radioIconClass),"custom-class":s.radioIconCustomClass,"custom-style":""+o.computed.iconCustomStyle({iconSize:t.iconSize,checkedColor:t.checkedColor,disabled:t.disabled,parentDisabled:o.parentDisabled,value:o.dataValue,name:t.name})},null,8,["class","custom-class","custom-style"]))],4),"right"===t.labelPosition?(d(),c("div",{key:1,class:u(s.radioLabelClass),onClick:a[2]||(a[2]=(...e)=>s.onClickLabel&&s.onClickLabel(...e))},[m(e.$slots,"default",{},void 0,!0)],2)):h("v-if",!0)],2)])}],["__scopeId","data-v-6fbf7bb1"]]),PressRadioGroup:n({name:"PressRadioGroup",options:{...t,styleIsolation:"shared"},mixins:[y(z)],field:!0,props:{value:{type:[String,Number],default:""},direction:{type:String,default:""},disabled:{type:Boolean},...o},emits:[],data:()=>({utils:s}),watch:{value:{handler(){this.updateChildren()}},disabled:{handler(){this.updateChildren()}}},created(){this.children=[]},methods:{updateChildren(){this.children.forEach((e=>e.updateFromParent()))}}},[["render",function(e,a,t,l,o,s){return d(),c("div",{class:"press-radio-group-index"},[r("div",{class:u([o.utils.bem2("radio-group",[t.direction])])},[m(e.$slots,"default",{},void 0,!0)],2)])}],["__scopeId","data-v-c1256ed7"]]),PressCell:f,PressCellGroup:I},data:()=>({valueMap:{basic:"a",horizontal:"a",disabled:"a",square:"a",customStyle:"a",customSize:"a",customIcon:"a",labelDisabled:"a",cell:"1"},icon:{normal:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png",active:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png"}}),methods:{onChange(e,a){console.log("onChange.val",e),this.$set(this.valueMap,a,e)}}},[["render",function(e,a,t,l,o,s){const i=C("press-radio"),n=C("press-radio-group"),u=C("demo-block"),m=C("press-cell"),h=C("press-cell-group");return d(),c("div",{class:"demo-wrap"},[v(u,{title:e.t("basicUsage")},{default:g((()=>[v(n,{value:o.valueMap.basic,onChange:a[0]||(a[0]=e=>s.onChange(e,"basic"))},{default:g((()=>[v(i,{name:"a"},{default:g((()=>[_(k(e.t("radio"))+" 1 ",1)])),_:1}),v(i,{name:"b"},{default:g((()=>[_(k(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),v(u,{title:e.t("horizontal")},{default:g((()=>[v(n,{value:o.valueMap.horizontal,direction:"horizontal",onChange:a[1]||(a[1]=e=>s.onChange(e,"horizontal"))},{default:g((()=>[v(i,{name:"a"},{default:g((()=>[_(k(e.t("radio"))+" 1 ",1)])),_:1}),v(i,{name:"b"},{default:g((()=>[_(k(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),v(u,{title:e.t("disabled")},{default:g((()=>[v(n,{value:o.valueMap.disabled,disabled:"",onChange:a[2]||(a[2]=e=>s.onChange(e,"disabled"))},{default:g((()=>[v(i,{name:"a"},{default:g((()=>[_(k(e.t("radio"))+" 1 ",1)])),_:1}),v(i,{name:"b"},{default:g((()=>[_(k(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),v(u,{title:e.t("customShape")},{default:g((()=>[v(n,{value:o.valueMap.square,onChange:a[3]||(a[3]=e=>s.onChange(e,"square"))},{default:g((()=>[v(i,{name:"a",shape:"square"},{default:g((()=>[_(k(e.t("radio"))+" 1 ",1)])),_:1}),v(i,{name:"b",shape:"square"},{default:g((()=>[_(k(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),v(u,{title:e.t("customColor")},{default:g((()=>[v(n,{value:o.valueMap.customStyle,onChange:a[4]||(a[4]=e=>s.onChange(e,"customStyle"))},{default:g((()=>[v(i,{name:"a","checked-color":"#07c160"},{default:g((()=>[_(k(e.t("radio"))+" 1 ",1)])),_:1}),v(i,{name:"b","checked-color":"#07c160"},{default:g((()=>[_(k(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),v(u,{title:e.t("customIconSize")},{default:g((()=>[v(n,{value:o.valueMap.customSize,onChange:a[5]||(a[5]=e=>s.onChange(e,"customSize"))},{default:g((()=>[v(i,{name:"a","icon-size":"24px"},{default:g((()=>[_(k(e.t("radio"))+" 1 ",1)])),_:1}),v(i,{name:"b","icon-size":"24px"},{default:g((()=>[_(k(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),v(u,{title:e.t("customIcon")},{default:g((()=>[v(n,{value:o.valueMap.customIcon,onChange:a[6]||(a[6]=e=>s.onChange(e,"customIcon"))},{default:g((()=>[v(i,{name:"a","use-icon-slot":""},{icon:g((()=>[r("img",{class:"img",src:"a"===o.valueMap.customIcon?o.icon.active:o.icon.normal},null,8,["src"])])),default:g((()=>[_(k(e.t("radio"))+" 1 ",1)])),_:1}),v(i,{name:"b","use-icon-slot":""},{icon:g((()=>[r("img",{class:"img",src:"b"===o.valueMap.customIcon?o.icon.active:o.icon.normal},null,8,["src"])])),default:g((()=>[_(k(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),v(u,{title:e.t("disableLabel")},{default:g((()=>[v(n,{value:o.valueMap.labelDisabled,onChange:a[7]||(a[7]=e=>s.onChange(e,"labelDisabled"))},{default:g((()=>[v(i,{name:"a","label-disabled":""},{default:g((()=>[_(k(e.t("radio"))+" 1 ",1)])),_:1}),v(i,{name:"b","label-disabled":""},{default:g((()=>[_(k(e.t("radio"))+" 2 ",1)])),_:1})])),_:1},8,["value"])])),_:1},8,["title"]),v(u,{title:e.t("withCell"),"section-style":"margin: 0;"},{default:g((()=>[v(n,{value:o.valueMap.cell,onChange:a[10]||(a[10]=e=>s.onChange(e,"cell"))},{default:g((()=>[v(h,null,{default:g((()=>[v(m,{title:`${e.t("radio")} 1`,clickable:"","data-name":"1",onClick:a[8]||(a[8]=e=>o.valueMap.cell="1")},{"right-icon":g((()=>[v(i,{name:"1"})])),_:1},8,["title"]),v(m,{title:`${e.t("radio")} 2`,clickable:"","data-name":"2",onClick:a[9]||(a[9]=e=>o.valueMap.cell="2")},{"right-icon":g((()=>[v(i,{name:"2"})])),_:1},8,["title"])])),_:1})])),_:1},8,["value"])])),_:1},8,["title"])])}],["__scopeId","data-v-0a86da0d"]]);export{P as default};
