import{s as t}from"./style.0f94ff97.js";import{a as e}from"./add-unit.0c57c089.js";import{r as s}from"./number.df2f0694.js";import{t as i,n,d as o,f as r}from"./validator.84caa8d5.js";import{d as l,a}from"./press-component.181873fd.js";import{e as u}from"./parent-map.b443f4cc.js";import{_ as c,o as m,c as h,h as d,i as p,F as f,v as g,n as y,t as v,z as x,e as C,x as b,f as I,j as k}from"./index-43eb3ea0.js";import{P as S}from"./press-loading-plus.e7ffc3ab.js";import{t as T}from"./index.a21f0567.js";const _={optionText:function(t,e){return function(t){const e=typeof t;return null!==t&&("object"===e||"function"===e)}(t)&&null!=t[e]?t[e]:t},rootStyle:function(s){return t({height:e(s.itemHeight*s.visibleItemCount)})},wrapperStyle:function(s){const i=e(s.offset+s.itemHeight*(s.visibleItemCount-1)/2);return t({transition:`transform ${s.duration}ms`,"line-height":e(s.itemHeight),transform:`translate3d(0, ${i}, 0)`})}};const H=c({name:"PressPickerColumn",options:{...l},...i(u),props:{...a,activeClass:{type:String,default:""},valueKey:{type:String,default:""},className:{type:String,default:""},itemHeight:{type:Number,default:44},visibleItemCount:{type:Number,default:6},initialOptions:{type:Array,default:()=>[]},defaultIndex:{type:Number,default:0}},emits:["change"],data:()=>({startY:0,offset:0,duration:0,startOffset:0,options:[],currentIndex:0,computed:_}),computed:{columnStyle(){const{itemHeight:t,visibleItemCount:e}=this;return _.rootStyle({itemHeight:t,visibleItemCount:e})},wrapperStyle(){const{offset:t,itemHeight:e,visibleItemCount:s,duration:i}=this;return _.wrapperStyle({offset:t,itemHeight:e,visibleItemCount:s,duration:i})}},watch:{defaultIndex:{handler(t){this.setIndex(t)},immediate:!0},initialOptions:{handler(t){this.options=t,this.setIndex(this.defaultIndex)},deep:!0}},created(){const{defaultIndex:t,initialOptions:e}=this;this.set({currentIndex:t,options:e}).then((()=>{this.setIndex(t)})),this[u].children.push(this)},methods:{setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},getCount(){return this.options.length},set(t){return this.setData(t),new Promise((t=>n(t)))},onTouchStart(t){this.setData({startY:t.touches[0].clientY,startOffset:this.offset,duration:0})},onTouchMove(t){if(!t.touches[0])return;const e=t.touches[0].clientY-this.startY;this.setData({offset:s(this.startOffset+e,-this.getCount()*this.itemHeight,this.itemHeight)})},onTouchEnd(){if(this.offset!==this.startOffset){this.setData({duration:200});const t=s(Math.round(-this.offset/this.itemHeight),0,this.getCount()-1);this.setIndex(t,!0)}},onClickItem(t){const{index:e}=t.currentTarget.dataset;this.setIndex(e,!0)},adjustIndex(t){const e=this.getCount();for(let i=t=s(t,0,e);i<e;i++)if(!this.isDisabled(this.options[i]))return i;for(let s=t-1;s>=0;s--)if(!this.isDisabled(this.options[s]))return s},isDisabled:t=>o(t)&&t.disabled,getOptionText(t){return o(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex(t,e){const s=-(t=this.adjustIndex(t)||0)*this.itemHeight;return t!==this.currentIndex?this.set({offset:s,currentIndex:t}).then((()=>{e&&this.$emit("change",t)})):this.set({offset:s})},setValue(t){const{options:e}=this;for(let s=0;s<e.length;s++)if(this.getOptionText(e[s])===t)return this.setIndex(s);return Promise.resolve()},getValue(){return this.options[this.currentIndex]}}},[["render",function(t,e,s,i,n,o){return m(),h("div",{class:"press-picker-column-index"},[d("div",{class:y(["press-picker-column",t.customClass]),style:p(o.columnStyle),onTouchstart:e[1]||(e[1]=(...t)=>o.onTouchStart&&o.onTouchStart(...t)),onTouchmove:e[2]||(e[2]=x(((...t)=>o.onTouchMove&&o.onTouchMove(...t)),["stop","prevent"])),onTouchend:e[3]||(e[3]=(...t)=>o.onTouchEnd&&o.onTouchEnd(...t)),onTouchcancel:e[4]||(e[4]=(...t)=>o.onTouchEnd&&o.onTouchEnd(...t))},[d("div",{style:p(o.wrapperStyle)},[(m(!0),h(f,null,g(n.options,((t,i)=>(m(),h("div",{key:t.index,"data-index":i,style:p({height:`${s.itemHeight}px`,lineHeight:`${s.itemHeight}px`}),class:y(["press-ellipsis","press-picker-column__item",{"press-picker-column__item--disabled":t&&t.disabled,"press-picker-column__item--selected":i===n.currentIndex,activeClass:i===n.currentIndex}]),onClick:e[0]||(e[0]=(...t)=>o.onClickItem&&o.onClickItem(...t))},v(n.computed.optionText(t,s.valueKey)),15,["data-index"])))),128))],4)],38)])}],["__scopeId","data-v-9c42cf10"]]);const P=c({props:{title:{type:String,default:""},showToolbar:Boolean,cancelButtonText:{type:String,default:T("picker.cancel")},confirmButtonText:{type:String,default:T("picker.confirm")},customClass:{type:String,default:""}},methods:{emit(...t){this.$emit("emit",...t)}}},[["render",function(t,e,s,i,n,o){return m(),h("div",{class:y(["press-picker-toolbar",s.customClass])},[s.showToolbar?(m(),h("div",{key:0,class:"press-picker__toolbar toolbar-class"},[d("div",{class:"press-picker__cancel","hover-class":"press-picker__cancel--hover","hover-stay-time":"70","data-type":"cancel",onClick:e[0]||(e[0]=(...t)=>o.emit&&o.emit(...t))},v(s.cancelButtonText),1),s.title?(m(),h("div",{key:0,class:"press-picker__title press-ellipsis"},v(s.title),1)):C("v-if",!0),d("div",{class:"press-picker__confirm","hover-class":"press-picker__confirm--hover","hover-stay-time":"70","data-type":"confirm",onClick:e[1]||(e[1]=(...t)=>o.emit&&o.emit(...t))},v(s.confirmButtonText),1)])):C("v-if",!0)],2)}],["__scopeId","data-v-7ea65730"]]),V={title:{type:String,default:""},showToolbar:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},cancelButtonText:{type:String,default:T("picker.cancel")},confirmButtonText:{type:String,default:T("picker.confirm")},visibleItemCount:{type:Number,default:6},itemHeight:{type:[Number,String],default:44}};const j={columnsStyle:function(s){return t({height:e(s.itemHeight*s.visibleItemCount)})},frameStyle:function(s){return t({height:e(s.itemHeight)})},maskStyle:function(s){return t({"background-size":`100% ${e(s.itemHeight*(s.visibleItemCount-1)/2)}`})},columns:function(t){return Array.isArray(t)?t.length&&!t[0].values?[{values:t}]:t:[]}};const w=c({name:"PressPickerPlus",options:{...l},components:{PickerColumn:H,Loading:S,ToolBar:P},...r(u),props:{...a,...V,valueKey:{type:String,default:"text"},toolbarPosition:{type:String,default:"top"},defaultIndex:{type:Number,default:0},columns:{type:Array,default:()=>[]},activeClass:{type:String,default:""},toolbarClass:{type:String,default:""},columnClass:{type:String,default:""}},emits:["change","confirm","cancel"],data:()=>({simple:!0}),computed:{columnStyle(){const{itemHeight:t,visibleItemCount:e}=this;return j.columnsStyle({itemHeight:t,visibleItemCount:e})},maskStyle(){const{itemHeight:t,visibleItemCount:e}=this;return j.maskStyle({itemHeight:t,visibleItemCount:e})},frameStyle(){const{itemHeight:t}=this;return j.frameStyle({itemHeight:t})},computedColumns(){const{columns:t}=this;return j.columns(t)}},watch:{columns:{handler(t=[]){this.simple=t.length&&!t[0].values,Array.isArray(this.children)&&this.children.length&&this.setColumns().catch((()=>{}))},immediate:!0}},beforeCreate(){},created(){this.children=[]},mounted(){Array.isArray(this.children)&&this.children.length&&this.setColumns().catch((()=>{}))},methods:{noop(){},setColumns(){const t=(this.simple?[{values:this.columns}]:this.columns).map(((t,e)=>this.setColumnValues(e,t.values)));return Promise.all(t)},emit(t){const{type:e}=t.currentTarget.dataset;this.simple?this.$emit(e,{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit(e,{value:this.getValues(),index:this.getIndexes()})},onChange(t,e){this.simple?this.$emit("change",{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit("change",{value:this.getValues(),index:e})},getColumn(t){return this.children[t]},getColumnValue(t){const e=this.getColumn(t);return e&&e.getValue()},setColumnValue(t,e){const s=this.getColumn(t);return null==s?Promise.reject(new Error("setColumnValue: 对应列不存在")):s.setValue(e)},getColumnIndex(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex(t,e){const s=this.getColumn(t);return null==s?Promise.reject(new Error("setColumnIndex: 对应列不存在")):s.setIndex(e)},getColumnValues(t){return(this.children[t]||{}).options},setColumnValues(t,e,s=!0){const i=this.children[t];if(null==i)return Promise.reject(new Error("setColumnValues: 对应列不存在"));return JSON.stringify(i.options)===JSON.stringify(e)?Promise.resolve():i.set({options:e}).then((()=>{s&&i.setIndex(0)}))},getValues(){return this.children.map((t=>t.getValue()))},setValues(t){const e=t.map(((t,e)=>this.setColumnValue(e,t)));return Promise.all(e)},getIndexes(){return this.children.map((t=>t.currentIndex))},setIndexes(t){const e=t.map(((t,e)=>this.setColumnIndex(e,t)));return Promise.all(e)}}},[["render",function(t,e,s,i,n,o){const r=k("ToolBar"),l=k("loading"),a=k("picker-column");return m(),h("div",{class:"press-picker-index"},[d("div",{class:y(["press-picker",t.customClass])},["top"===s.toolbarPosition?(m(),b(r,{key:0,title:t.title,"show-toolbar":t.showToolbar,"cancel-button-text":t.cancelButtonText,"confirm-button-text":t.confirmButtonText,"custom-class":s.toolbarClass,onEmit:o.emit},null,8,["title","show-toolbar","cancel-button-text","confirm-button-text","custom-class","onEmit"])):C("v-if",!0),t.loading?(m(),h("div",{key:1,class:"press-picker__loading"},[I(l,{color:"#1989fa"})])):C("v-if",!0),d("div",{class:"press-picker__columns",style:p(o.columnStyle),onTouchmove:e[0]||(e[0]=x(((...t)=>o.noop&&o.noop(...t)),["stop","prevent"]))},[(m(!0),h(f,null,g(o.computedColumns,((e,i)=>(m(),b(a,{ref_for:!0,ref:"pickerColumn",key:i,class:"press-picker__column","data-index":i,"custom-class":s.columnClass,"value-key":s.valueKey,"initial-options":e.values,"default-index":e.defaultIndex||s.defaultIndex,"item-height":t.itemHeight,"visible-item-count":t.visibleItemCount,"active-class":s.activeClass,onChange:t=>o.onChange(t,i)},null,8,["data-index","custom-class","value-key","initial-options","default-index","item-height","visible-item-count","active-class","onChange"])))),128)),d("div",{class:"press-picker__mask",style:p(o.maskStyle)},null,4),d("div",{class:"press-picker__frame press-hairline--top-bottom",style:p(o.frameStyle)},null,4)],36),"bottom"===s.toolbarPosition?(m(),b(r,{key:2,"custom-class":s.toolbarClass},null,8,["custom-class"])):C("v-if",!0)],2)])}],["__scopeId","data-v-3f0bbc4d"]]);export{w as P,V as p};
