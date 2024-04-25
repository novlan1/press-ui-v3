import{B as t}from"./color.3a05f6e0.js";import{C as e,J as o,_ as r,af as s,o as i,c as l,e as a,I as p,t as n,j as c,B as d,d as g,w as v,k as u}from"./index-7b185b18.js";const f={pivotText:function(t,e){return t||`${e}%`},rootStyle:function(t){return e({height:t.strokeWidth?o.addUnit(t.strokeWidth):"",background:t.trackColor})},portionStyle:function(t){return e({background:t.inactive?"#cacaca":t.color,width:t.percentage?`${t.percentage}%`:""})},pivotStyle:function(t){return e({color:t.textColor,right:`${t.right}px`,background:t.pivotColor?t.pivotColor:t.inactive?"#cacaca":t.color})}};const y=r({i18n:{"zh-CN":{title2:"置灰",title3:"样式定制",strokeWidth:"线条粗细"},"en-US":{title2:"Inactive",title3:"Custom Style",strokeWidth:"Stroke Width"}},components:{PressProgress:r({name:"PressProgress",props:{inactive:Boolean,percentage:{type:Number,default:0,observer:"setLeft"},pivotText:{type:String,default:""},pivotColor:{type:String,default:""},trackColor:{type:String,default:""},showPivot:{type:Boolean,default:!0},color:{type:String,default:t},textColor:{type:String,default:"#fff"},strokeWidth:{type:[Number,String],default:4},customClass:{type:String,default:""}},emits:[],data:()=>({right:0,computed:f}),mounted(){this.setLeft()},methods:{setLeft(){Promise.all([s(this,".press-progress"),s(this,".press-progress__pivot")]).then((([t,e])=>{t&&e&&(this.right=e.width*(this.percentage-100)/100)}))}}},[["render",function(t,e,o,r,s,g){return i(),l("div",{class:d(["press-progress",o.customClass]),style:p(s.computed.rootStyle({strokeWidth:o.strokeWidth,trackColor:o.trackColor}))},[a("div",{class:"press-progress__portion",style:p(s.computed.portionStyle({percentage:o.percentage,inactive:o.inactive,color:o.color}))},[o.showPivot&&s.computed.pivotText(o.pivotText,o.percentage)?(i(),l("div",{key:0,style:p(s.computed.pivotStyle({textColor:o.textColor,pivotColor:o.pivotColor,inactive:o.inactive,color:o.color,right:s.right})),class:"press-progress__pivot"},n(s.computed.pivotText(o.pivotText,o.percentage)),5)):c("v-if",!0)],4)],6)}],["__scopeId","data-v-5af76fe7"]])},data:()=>({progressStyle:"margin: 20px 0;"}),methods:{}},[["render",function(t,e,o,r,s,n){const c=u("press-progress"),d=u("demo-block");return i(),l("div",{class:"demo-wrap"},[g(d,{title:t.t("basicUsage")},{default:v((()=>[a("div",{style:p(s.progressStyle)},[g(c,{percentage:50})],4)])),_:1},8,["title"]),g(d,{title:t.t("strokeWidth")},{default:v((()=>[a("div",{style:p(s.progressStyle)},[g(c,{percentage:50,"stroke-width":8})],4)])),_:1},8,["title"]),g(d,{title:t.t("title2")},{default:v((()=>[a("div",{style:p(s.progressStyle)},[g(c,{percentage:50,inactive:""})],4)])),_:1},8,["title"]),g(d,{title:t.t("title3")},{default:v((()=>[a("div",{style:p(s.progressStyle)},[g(c,{"pivot-text":t.t("orange"),color:"#f2826a",percentage:25},null,8,["pivot-text"])],4),a("div",{style:p(s.progressStyle)},[g(c,{"pivot-text":t.t("red"),color:"#ee0a24",percentage:50},null,8,["pivot-text"])],4),a("div",{style:p(s.progressStyle)},[g(c,{percentage:75,"pivot-text":t.t("purple"),"pivot-color":"#7232dd",color:"linear-gradient(to right, #be99ff, #7232dd)"},null,8,["pivot-text"])],4)])),_:1},8,["title"])])}]]);export{y as default};