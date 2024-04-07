import{_ as t,o as e,c as i,e as o,J as r,k as s,av as a,z as n,N as d,b as h,G as l,E as g,j as c,w as u,A as m,d as p,g as y,l as f,a6 as w}from"./index-95b0f20a.js";const b={props:{src:{type:String,default:""},mode:{type:String,default:"scaleToFill"},width:{type:[String,Number],default:300},height:{type:[String,Number],default:225},round:{type:Boolean,default:!1},radius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"photo-fail"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},backgroundColor:{type:String,default:"#f3f4f6"},customStyle:{type:String,default:""}}};function _(t){return"Google Inc."===navigator.vendor&&t>10&&(t=2*Math.round(t/2)),t}const k=t({name:"PressImage",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressIconPlus:n,PressTransition:d,InnerImage:t({name:"Image",props:{src:{type:String,default:""},mode:{type:String,default:"scaleToFill"},lazyLoad:{type:[Boolean,String],default:!1},draggable:{type:Boolean,default:!1}},data:()=>({originalWidth:0,originalHeight:0,originalStyle:{width:"",height:""},contentPath:""}),computed:{ratio(){return this.originalWidth&&this.originalHeight?this.originalWidth/this.originalHeight:0},style(){let t="auto",e="";switch(this.mode){case"aspectFit":t="contain",e="center center";break;case"aspectFill":t="cover",e="center center";break;case"widthFix":case"heightFix":t="100% 100%";break;case"top":e="center top";break;case"bottom":e="center bottom";break;case"center":e="center center";break;case"left":e="left center";break;case"right":e="right center";break;case"top left":e="left top";break;case"top right":e="right top";break;case"bottom left":e="left bottom";break;case"bottom right":e="right bottom";break;default:t="100% 100%",e="0% 0%"}return{"background-image":this.contentPath?`url("${this.contentPath}")`:"none","background-position":e,"background-size":t,"background-repeat":"no-repeat"}}},watch:{src(){this._loadImage()},mode(t,e){"widthFix"!==e&&"heightFix"!==e||this._resetSize(),"widthFix"!==t&&"heightFix"!==t||this._fixSize()},contentPath(t){!t&&this.__img&&(this.__img.remove(),delete this.__img)}},mounted(){this.originalStyle.width=this.$el.style.width||"",this.originalStyle.height=this.$el.style.height||"",this._loadImage()},beforeDestroy(){this._clearImage()},methods:{_fixSize(){if(this.ratio){const{$el:t}=this;if("widthFix"===this.mode){const e=t.offsetWidth;e&&(t.style.height=`${_(e/this.ratio)}px`)}else if("heightFix"===this.mode){const e=t.offsetHeight;e&&(t.style.width=`${_(e*this.ratio)}px`)}}window.dispatchEvent(new CustomEvent("updateview"))},_resetSize(){this.$el.style.width=this.originalStyle.width,this.$el.style.height=this.originalStyle.height},_resetData(){this.originalWidth=0,this.originalHeight=0,this.contentPath=""},_loadImage(){const t=this.src;if(t){this._img=this._img||new Image;const e=this._img;e.onload=i=>{this._img=null,this.originalWidth=e.width;const o=this.originalWidth;this.originalHeight=e.height;const r=this.originalHeight;this._fixSize(),this.contentPath=t,e.draggable=this.draggable,this.__img&&this.__img.remove(),this.__img=e,this.$el.appendChild(e),this.$emit("load",i,{width:o,height:r})},e.onerror=t=>{this._img=null,this._resetData(),this.$emit("error",t,{errMsg:`GET ${this.src} 404 (Not Found)`})},e.src=t}else this._clearImage(),this._resetData()},_clearImage(){const t=this._img;t&&(t.onload=null,t.onerror=null,this._img=null)}}},[["render",function(t,n,d,h,l,g){return e(),i("uni-image",a(t.$listeners,!0),[o("div",{ref:"content",style:r(g.style)},null,4),"widthFix"===d.mode||"heightFix"===d.mode?(e(),i("div",{key:0,ref:"sensor",onResize:n[0]||(n[0]=t=>g._fixSize())},null,544)):s("v-if",!0)],16)}],["__scopeId","data-v-2aaf1e5d"]])},mixins:[b],emits:["click","error","load"],data(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1,isNotInUni:h()}},computed:{wrapStyle(){const t={};t.width=l(this.width),t.height=l(this.height),t.borderRadius=this.round?"10000px":l(this.radius),t.overflow=this.borderRadius>0?"hidden":"visible";return g([{...t,...this.backgroundStyle},this.customStyle])}},watch:{src:{immediate:!0,handler(t){t?(this.isError=!1,this.loading=!0):this.isError=!0}}},mounted(){this.show=!0},methods:{addUnit:l,onClick(){this.$emit("click")},onErrorHandler(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler(t){this.loading=!1,this.isError=!1,this.$emit("load",t),this.removeBgColor()},removeBgColor(){this.backgroundStyle={backgroundColor:"transparent"}}}},[["render",function(t,a,n,d,h,l){const g=f("InnerImage"),b=w,_=f("PressIconPlus"),k=f("PressTransition");return e(),c(k,{mode:"fade",show:h.show,duration:t.fade?h.durationTime:0,"custom-style":"display: inline-block;"},{default:u((()=>[o("div",{class:"press-image",style:r(l.wrapStyle),onClick:a[0]||(a[0]=y(((...t)=>l.onClick&&l.onClick(...t)),["stop"]))},[!h.isError&&h.isNotInUni?(e(),c(g,{key:0,src:t.src,mode:t.mode,"show-menu-by-longpress":t.showMenuByLongpress,"lazy-load":t.lazyLoad,class:"press-image__image",style:r({borderRadius:t.round?"10000px":l.addUnit(t.radius),width:l.addUnit(t.width),height:l.addUnit(t.height)}),onError:l.onErrorHandler,onLoad:l.onLoadHandler},null,8,["src","mode","show-menu-by-longpress","lazy-load","style","onError","onLoad"])):s("v-if",!0),h.isError?s("v-if",!0):(e(),c(b,{key:1,src:t.src,mode:t.mode,"show-menu-by-longpress":t.showMenuByLongpress,"lazy-load":t.lazyLoad,class:"press-image__image",style:r({borderRadius:t.round?"10000px":l.addUnit(t.radius),width:l.addUnit(t.width),height:l.addUnit(t.height)}),onError:l.onErrorHandler,onLoad:l.onLoadHandler},null,8,["src","mode","show-menu-by-longpress","lazy-load","style","onError","onLoad"])),t.showLoading&&h.loading?(e(),i("div",{key:2,class:"press-image__loading",style:r({borderRadius:t.round?"50%":l.addUnit(t.radius),backgroundColor:t.backgroundColor,width:l.addUnit(t.width),height:l.addUnit(t.height)})},[m(t.$slots,"loading",{},(()=>[p(_,{name:t.loadingIcon,width:t.width,height:t.height},null,8,["name","width","height"])]),!0)],4)):s("v-if",!0),t.showError&&h.isError&&!h.loading?(e(),i("div",{key:3,class:"press-image__error",style:r({borderRadius:t.round?"50%":l.addUnit(t.radius),width:l.addUnit(t.width),height:l.addUnit(t.height)})},[m(t.$slots,"error",{},(()=>[p(_,{name:t.errorIcon,width:t.width,height:t.height},null,8,["name","width","height"])]),!0)],4)):s("v-if",!0)],4)])),_:3},8,["show","duration"])}],["__scopeId","data-v-2be38514"]]);export{k as P};