import{_ as A,z as t,az as e,E as r,G as s,o as a,c as o,A as l,F as c,j as n,J as i,t as u,C as d,g as m,l as g,h as p,d as y,e as f,k as h,w as v}from"./index-a6ed3ec5.js";import{P as S}from"./press-image.26f51ce5.js";const x={props:{src:{type:String,default:""},round:{type:Boolean,default:!0},size:{type:[String,Number],default:"40"},mode:{type:String,default:"scaleToFill"},text:{type:String,default:""},backgroundColor:{type:String,default:"#c0c4cc"},color:{type:String,default:"#fff"},fontSize:{type:[String,Number],default:18},icon:{type:String,default:""},mpAvatar:{type:Boolean,default:!1},randomBackgroundColor:{type:Boolean,default:!1},defaultUrl:{type:String,default:""},colorIndex:{type:[String,Number],validator:A=>A<=19,default:-1},name:{type:String,default:"level"},customStyle:{type:String,default:""}}},b=["#ffb34b","#f2bba9","#f7a196","#f18080","#88a867","#bfbf39","#89c152","#94d554","#f19ec2","#afaae4","#e1b0df","#c38cc1","#72dcdc","#9acdcb","#77b1cc","#448aca","#86cefa","#98d1ee","#73d1f1","#80a7dc"];const w=A({name:"PressAvatar",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressImage:S,PressIconPlus:t},mixins:[x],emits:["click"],data(){return{colors:b,avatarUrl:this.src,allowMp:!1}},computed:{shape(){return this.round?"circle":"square"},imageStyle:()=>({}),avatarStyle(){const{text:A,icon:t,colorIndex:a,backgroundColor:o,size:l,colors:c,randomBackgroundColor:n}=this;let i="transparent";(A||t)&&(n?(console.log("colorIndex",a),i=c[a>-1?a:e(0,19)]):i=o);return r([{width:s(l),height:s(l),background:i},this.customStyle])},textStyle(){const{fontSize:A,color:t}=this;return r({fontSize:A,color:t,textAlign:"center"})}},watch:{src:{immediate:!0,handler(A){this.avatarUrl=A,A||this.errorHandler()}}},created(){this.init()},methods:{addUnit:s,init(){},isImg(){return-1!==this.src.indexOf("/")},errorHandler(){this.avatarUrl=this.defaultUrl||"data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"},clickHandler(){this.$emit("click",this.name)}}},[["render",function(A,t,e,r,s,p){const y=g("PressIconPlus"),f=g("PressImage");return a(),o("div",{class:d(["press-avatar",[`press-avatar--${p.shape}`]]),style:i(p.avatarStyle),onClick:t[0]||(t[0]=m(((...A)=>p.clickHandler&&p.clickHandler(...A)),["stop"]))},[l(A.$slots,"default",{},(()=>[A.mpAvatar&&s.allowMp?(a(),o(c,{key:0},[],64)):A.icon?(a(),n(y,{key:1,name:A.icon,size:A.fontSize,color:A.color},null,8,["name","size","color"])):A.text?(a(),o("span",{key:2,style:i(p.textStyle)},u(A.text),5)):(a(),n(f,{key:3,class:d(["press-avatar__image",[`press-avatar__image--${p.shape}`]]),round:!!A.round,src:s.avatarUrl||A.defaultUrl,width:A.size,radius:4,height:A.size,mode:A.mode,onError:p.errorHandler},null,8,["class","round","src","width","height","mode","onError"]))]),!0)],6)}],["__scopeId","data-v-097e9c22"]]),M={props:{urls:{type:Array,default:()=>[]},maxCount:{type:[String,Number],default:5},round:{type:Boolean,default:!0},mode:{type:String,default:"scaleToFill"},showMore:{type:Boolean,default:!0},size:{type:[String,Number],default:40},keyName:{type:String,default:""},gap:{type:[String,Number],validator:A=>A>=0&&A<=1,default:"0.5"},extraValue:{type:[Number,String],default:""},customStyle:{type:String,default:""}}};const G="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_0ab8e66284a3617ed9.jpeg";const R=A({i18n:{"zh-CN":{shape:"头像形状",size:"头像尺寸",icon:"图标头像",text:"文字头像",error:"加载失败",avatarGroup:"头像组"},"en-US":{shape:"Shape",size:"Size",icon:"Icon",text:"Text",error:"Error",avatarGroup:"Avatar Group"}},components:{PressAvatar:w,PressAvatarGroup:A({name:"PressAvatarGroup",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressAvatar:w},mixins:[M],emits:["showMore"],data:()=>({}),computed:{showUrl(){return this.urls.slice(0,this.maxCount)},extraText(){const{extraValue:A,urls:t,showUrl:e}=this;return A||t.length-e.length},textStyle(){return r({color:"#fff",fontSize:.4*this.size,textAlign:"center"})}},methods:{addUnit:s,getAvatarUrl(A){return"object"==typeof A?A[this.keyName||"url"]:A},clickHandler(){this.$emit("showMore")},getItemStyle(A){const{size:t,gap:e}=this,a=r({marginLeft:0===A?0:s(-t*e),width:s(t),height:s(t)});return console.log("res",a),a}}},[["render",function(A,t,e,r,s,l){const n=g("PressAvatar");return a(),o("div",{class:"press-avatar-group",style:i(A.customStyle)},[(a(!0),o(c,null,p(l.showUrl,((e,r)=>(a(),o("div",{key:r,class:"press-avatar-group__item",style:i(l.getItemStyle(r))},[y(n,{size:A.size,round:"",mode:A.mode,src:l.getAvatarUrl(e)},null,8,["size","mode","src"]),A.showMore&&r===l.showUrl.length-1&&(A.urls.length>A.maxCount||A.extraValue>0)?(a(),o("div",{key:0,class:"press-avatar-group__item__show-more",onClick:t[0]||(t[0]=(...A)=>l.clickHandler&&l.clickHandler(...A))},[f("span",{style:i(l.textStyle)},u(l.extraText),5)])):h("v-if",!0)],4)))),128))],4)}],["__scopeId","data-v-c39dbbd1"]])},data:()=>({src:G,customStyle:"margin-right: 20px",urls:[G,"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_ef8e6956717db34745.jpg",G,"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_7157200e469d0468b3.jpg",G,"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_a17f94292a34e9f644.jpeg",G]}),methods:{showMore(){this.onGTip("[showMore]")}}},[["render",function(A,t,e,r,s,l){const c=g("PressAvatar"),n=g("demo-block"),i=g("PressAvatarGroup");return a(),o("div",{class:"demo-wrap"},[y(n,{title:A.t("basicUsage")},{default:v((()=>[y(c,{src:s.src},null,8,["src"])])),_:1},8,["title"]),y(n,{title:A.t("shape")},{default:v((()=>[y(c,{src:s.src,round:"","custom-style":s.customStyle},null,8,["src","custom-style"]),y(c,{src:s.src,round:!1},null,8,["src"])])),_:1},8,["title"]),y(n,{title:A.t("size")},{default:v((()=>[y(c,{src:s.src,size:"30","custom-style":s.customStyle},null,8,["src","custom-style"]),y(c,{src:s.src,size:"40","custom-style":s.customStyle},null,8,["src","custom-style"]),y(c,{src:s.src,size:"50"},null,8,["src"])])),_:1},8,["title"]),y(n,{title:A.t("icon")},{default:v((()=>[y(c,{src:s.src,icon:"star-o","custom-style":s.customStyle},null,8,["src","custom-style"]),y(c,{src:s.src,icon:"like-o"},null,8,["src"])])),_:1},8,["title"]),y(n,{title:A.t("text")},{default:v((()=>[y(c,{text:"Y","custom-style":s.customStyle},null,8,["custom-style"]),y(c,{text:"G","random-background-color":"","custom-style":s.customStyle},null,8,["custom-style"]),y(c,{text:"杨","random-background-color":""})])),_:1},8,["title"]),y(n,{title:A.t("error")},{default:v((()=>[y(c)])),_:1},8,["title"]),y(n,{title:A.t("avatarGroup")},{default:v((()=>[y(i,{urls:s.urls,"custom-style":"margin-bottom: 16px",onShowMore:l.showMore},null,8,["urls","onShowMore"]),y(i,{urls:s.urls,gap:"0.6","custom-style":"margin-bottom: 16px",onShowMore:l.showMore},null,8,["urls","onShowMore"]),y(i,{urls:s.urls,size:"50","custom-style":"margin-bottom: 16px",onShowMore:l.showMore},null,8,["urls","onShowMore"])])),_:1},8,["title"])])}]]);export{R as default};
