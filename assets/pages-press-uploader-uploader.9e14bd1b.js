import{_ as e,o as t,c as i,i as s,F as a,p as o,q as l,j as n,h as r,t as c,f as u,x as d,r as p,n as m,z as f,e as g,w as h}from"./index-66fd861e.js";import{a as y,i as v}from"./utils.d8f13396.js";import{h as b}from"./press-component.573dfcec.js";import{a as x}from"./add-unit.9de8b2f7.js";import{P as w}from"./press-icon-plus.a1094e70.js";import{P as _}from"./press-loading-plus.6ff974e3.js";import{i as R,v as k,f as j,p as z}from"./test.b328066d.js";import"./style.0f94ff97.js";import"./press-info.8563e54c.js";const L={image:{jpg:"jpeg",jpe:"jpeg",pbm:"x-portable-bitmap",pgm:"x-portable-graymap",pnm:"x-portable-anymap",ppm:"x-portable-pixmap",psd:"vnd.adobe.photoshop",pic:"x-pict",rgb:"x-rgb",svg:"svg+xml",svgz:"svg+xml",tif:"tiff",xif:"vnd.xiff",wbmp:"vnd.wap.wbmp",wdp:"vnd.ms-photo",xbm:"x-xbitmap",ico:"x-icon"},video:{"3g2":"3gpp2","3gp":"3gpp",avi:"x-msvideo",f4v:"x-f4v",flv:"x-flv",jpgm:"jpm",jpgv:"jpeg",m1v:"mpeg",m2v:"mpeg",mpe:"mpeg",mpg:"mpeg",mpg4:"mpeg",m4v:"x-m4v",mkv:"x-matroska",mov:"quicktime",qt:"quicktime",movie:"x-sgi-movie",mp4v:"mp4",ogv:"ogg",smv:"x-smv",wm:"x-ms-wm",wmv:"x-ms-wmv",wmx:"x-ms-wmx",wvx:"x-ms-wvx"}},P="*";function S({count:e,sourceType:t,type:i,extension:s=["*"]}){const a=document.createElement("input");return a.type="file",y(a,{position:"absolute",visibility:"hidden","z-index":-999,width:0,height:0,top:0,left:0}),a.accept=s.map((e=>{if(i!==P){const t=e.replace(".","");return`${i}/${L[i][t]||t}`}return function(){const e=window.navigator.userAgent.toLowerCase();return!(!e.match(/MicroMessenger/i)||"micromessenger"!==e.match(/MicroMessenger/i)[0])}()?".":0===e.indexOf(".")?e:`.${e}`})).join(","),e>1&&(a.multiple="multiple"),1===t.length&&"camera"===t[0]&&(a.capture="camera"),a}const C={};function F(e){for(const i in C)if(b(C,i)){if(C[i]===e)return i}const t=(window.URL||window.webkitURL).createObjectURL(e);return C[t]=e,t}function T(e){(window.URL||window.webkitURL).revokeObjectURL(e),delete C[e]}function D(e,t){const i=[],s=e.target.files.length;for(let a=0;a<s;a++){const s=e.target.files[a];let o;Object.defineProperty(s,"path",{get:()=>(o=o||F(s),o)}),a<t&&i.push(s)}return i}let A=null;let I=null;let O=null;function U({count:e,success:t,fail:i,type:s}){if(v())return function({count:e,sourceType:t,type:i,extension:s,success:a}){A&&(document.body.removeChild(A),A=null),A=S({count:e,sourceType:t,type:i,extension:s}),document.body.appendChild(A),A.addEventListener("change",(t=>{const i=D(t,e);a({errMsg:"chooseFile:ok",get tempFilePaths(){return i.map((({path:e})=>e))},tempFiles:i})})),A.click()}({count:e,sourceType:[],type:s,extension:["*"],success:t});uni.chooseFile({count:e,type:s,success:t,fail:i})}function $({count:e,sourceType:t,sizeType:i,success:s,fail:a}){if(v())return function({count:e,sourceType:t,extension:i,success:s}){I&&(document.body.removeChild(I),I=null),I=S({count:e,sourceType:t,extension:i,type:"image"}),document.body.appendChild(I),I.addEventListener("change",(t=>{const i=D(t,e);s({errMsg:"chooseImage:ok",get tempFilePaths(){return i.map((({path:e})=>e))},tempFiles:i})})),I.click()}({count:e,sourceType:t,extension:["*"],success:s});uni.chooseImage({count:e,sourceType:t,sizeType:i,success:s,fail:a})}function M({sourceType:e,success:t,fail:i,compressed:s,maxDuration:a,camera:o}){if(v())return function({sourceType:e,extension:t,success:i}){O&&(document.body.removeChild(O),O=null),O=S({sourceType:e,extension:t,type:"video"}),document.body.appendChild(O),O.addEventListener("change",(e=>{const t=e.target.files[0],s={errMsg:"chooseVideo:ok",tempFile:t,size:t.size,duration:0,width:0,height:0,name:t.name};let a;Object.defineProperty(s,"tempFilePath",{get(){return a=a||F(this.tempFile),a}});const o=document.createElement("video");if(void 0!==o.onloadedmetadata){const e=F(t);o.onloadedmetadata=function(){T(e),i(Object.assign(s,{duration:o.duration||0,width:o.videoWidth||0,height:o.videoHeight||0}))},setTimeout((()=>{o.onloadedmetadata=null,T(e),i(s)}),300),o.src=e}else i(s)})),O.click()}({sourceType:e,extension:["*"],success:t});uni.chooseVideo({sourceType:e,success:t,fail:i,compressed:s,maxDuration:a,camera:o})}function B(e){return e.tempFiles}const V={watch:{accept:{immediate:!0,handler(e){"all"!==e&&"media"!==e||console.warn("只有微信小程序才支持把 accept 配置为 all、media 之一")}}}},N={props:{accept:{type:String,default:"image"},capture:{type:[String,Array],default:()=>["album","camera"]},compressed:{type:Boolean,default:!0},camera:{type:String,default:"back"},maxDuration:{type:Number,default:60},uploadIcon:{type:String,default:"photograph"},uploadIconColor:{type:String,default:"#D3D4D6"},useBeforeRead:{type:Boolean,default:!1},afterRead:{type:Function,default:null},beforeRead:{type:Function,default:null},previewFullImage:{type:Boolean,default:!0},maxCount:{type:[String,Number],default:52},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},name:{type:String,default:"file"},sizeType:{type:Array,default:()=>["original","compressed"]},multiple:{type:Boolean,default:!1},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:()=>[]},uploadText:{type:String,default:""},width:{type:[String,Number],default:80},height:{type:[String,Number],default:80},previewImage:{type:Boolean,default:!0},customStyle:{type:String,default:""}}};const q="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_a17f94292a34e9f644.jpeg";let E;const G=e({i18n:{"zh-CN":{uploadVideo:"上传视频",uploadStatus:"上传状态",preview:"文件预览",maxCount:"限制上传数量",maxSize:"限制上传大小",customStyle:"自定义上传样式",beforeRead:"上传前置处理"},"en-US":{uploadVideo:"Upload Video",uploadStatus:"Upload Status",preview:"Preview",maxCount:"Max Count",maxSize:"Max Size",customStyle:"Custom Style",beforeRead:"Before Read"}},components:{PressUploader:e({name:"PressUploader",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressIconPlus:w,PressLoadingPlus:_},mixins:[V,N],emits:["afterRead","error","oversize"],data:()=>({lists:[],isInCount:!0}),watch:{fileList:{immediate:!0,handler(){this.formatFileList()}}},methods:{addUnit:x,formatFileList(){const{fileList:e=[],maxCount:t}=this,i=e.map((e=>Object.assign(Object.assign({},e),{isImage:"image"===this.accept||R(e.url||e.thumb),isVideo:"video"===this.accept||k(e.url||e.thumb),deletable:"boolean"==typeof e.deletable?e.deletable:this.deletable})));this.lists=i,this.isInCount=i.length<t},chooseFile(){const{maxCount:e,multiple:t,lists:i,disabled:s}=this;if(console.log("[chooseFile]"),s)return;let a;try{a=Array.isArray(this.capture)?this.capture:this.capture.split(",")}catch(o){a=[]}(function({accept:e,multiple:t,capture:i,compressed:s,maxDuration:a,sizeType:o,camera:l,maxCount:n}){return new Promise(((r,c)=>{switch(e){case"image":$({count:t?Math.min(n,9):1,sourceType:i,sizeType:o,success:e=>r(function(e){return e.tempFiles}(e)),fail:c});break;case"video":M({sourceType:i,compressed:s,maxDuration:a,camera:l,success:e=>r(e),fail:c});break;case"file":U({count:t?n:1,type:e,success:e=>r(B(e)),fail:c});break;default:U({count:t?n:1,type:"all",success:e=>r(B(e)),fail:c})}}))})(Object.assign({accept:this.accept,multiple:this.multiple,capture:a,compressed:this.compressed,maxDuration:this.maxDuration,sizeType:this.sizeType,camera:this.camera},{maxCount:e-i.length})).then((e=>{this.onBeforeRead(t?e:e[0])})).catch((e=>{this.$emit("error",e)}))},onBeforeRead(e){const{beforeRead:t,useBeforeRead:i}=this;let s=!0;j(t)&&(s=t(e,this.getDetail())),i&&(s=new Promise(((t,i)=>{this.$emit("beforeRead",Object.assign(Object.assign({file:e},this.getDetail()),{callback:e=>{e?t():i()}}))}))),s&&(z(s)?s.then((t=>this.onAfterRead(t||e))):this.onAfterRead(e))},getDetail(e){return{name:this.name,index:null==e?this.fileList.length:e}},onAfterRead(e){const{maxSize:t,afterRead:i}=this;(Array.isArray(e)?e.some((e=>e.size>t)):e.size>t)?this.$emit("oversize",Object.assign({file:e},this.getDetail())):("function"==typeof i&&i(e,this.getDetail()),this.$emit("afterRead",Object.assign({file:e},this.getDetail())))},deleteItem(e){this.$emit("delete",Object.assign(Object.assign({},this.getDetail(e)),{file:this.fileList[e]}))},onPreviewImage(e){e.isImage&&this.previewFullImage&&uni.previewImage({urls:this.lists.filter((e=>"image"===this.accept||R(e.url||e.thumb))).map((e=>e.url||e.thumb)),current:e.url||e.thumb,fail(){}})},onPreviewVideo(e){if(!this.data.previewFullImage)return;const{index:t}=e.currentTarget.dataset,{lists:i}=this.data;wx.previewMedia({sources:i.map((e=>Object.assign(Object.assign({},e),{type:"video"}))),current:t,fail(){}})},onClickPreview(e){const{index:t}=e.currentTarget.dataset,i=this.data.lists[t];this.$emit("clickPreview",Object.assign(Object.assign({},i),this.getDetail(t)))}}},[["render",function(e,h,y,v,b,x){const w=f,_=g("PressIconPlus"),R=g("PressLoadingPlus");return t(),i("div",{class:"press-upload",style:n(e.customStyle)},[s("div",{class:"press-upload__wrap"},[e.previewImage?(t(!0),i(a,{key:0},o(b.lists,((a,o)=>(t(),i("div",{key:o,class:"press-upload__wrap__preview"},[a.isImage||a.type&&"image"===a.type?(t(),l(w,{key:0,src:a.thumb||a.url,mode:e.imageMode,class:"press-upload__wrap__preview__image",style:n([{width:x.addUnit(e.width),height:x.addUnit(e.height)}]),onClick:e=>x.onPreviewImage(a)},null,8,["src","mode","style","onClick"])):(t(),i("div",{key:1,class:"press-upload__wrap__preview__other"},[r(_,{color:"#80CBF9",size:"26",name:a.isVideo||a.type&&"video"===a.type?"movie":"folder"},null,8,["name"]),s("span",{class:"press-upload__wrap__preview__other__text"},c(a.isVideo||a.type&&"video"===a.type?"视频":"文件"),1)])),"uploading"===a.status||"failed"===a.status?(t(),i("div",{key:2,class:"press-upload__status"},[s("div",{class:"press-upload__status__icon"},["failed"===a.status?(t(),l(_,{key:0,name:"close",color:"#ffffff",size:"22"})):(t(),l(R,{key:1,size:"22",mode:"circle",color:"#ffffff"}))]),a.message?(t(),i("span",{key:0,class:"press-upload__status__message"},c(a.message),1)):u("v-if",!0)])):u("v-if",!0),"uploading"!==a.status&&(e.deletable||a.deletable)?(t(),i("div",{key:3,class:"press-upload__deletable",onClick:d((e=>x.deleteItem(o)),["stop"])},[u(' <div class="press-upload__deletable__icon"> '),r(_,{name:"cross",color:"#ffffff",size:"16","custom-class":"press-upload__deletable__icon"}),u(" </div> ")],8,["onClick"])):u("v-if",!0),(a.status,u("v-if",!0))])))),128)):u("v-if",!0),b.isInCount?(t(),i(a,{key:1},[e.$slots.default||e.$slots.$default?(t(),i("div",{key:0,onClick:h[0]||(h[0]=(...e)=>x.chooseFile&&x.chooseFile(...e))},[p(e.$slots,"default",{},void 0,!0)])):(t(),i("div",{key:1,class:m(["press-upload__button",[e.disabled&&"press-upload__button--disabled"]]),"hover-class":e.disabled?"":"press-upload__button--hover","hover-stay-time":"150",style:n([{width:x.addUnit(e.width),height:x.addUnit(e.height)}]),onClick:h[1]||(h[1]=d(((...e)=>x.chooseFile&&x.chooseFile(...e)),["stop"]))},[r(_,{name:e.uploadIcon,size:"26",color:e.uploadIconColor,onClick:x.chooseFile},null,8,["name","color","onClick"]),e.uploadText?(t(),i("span",{key:0,class:"press-upload__button__text"},c(e.uploadText),1)):u("v-if",!0)],14,["hover-class"]))],64)):u("v-if",!0)])],4)}],["__scopeId","data-v-a7e93b2f"]])},data:()=>({fileList1:[],fileListMaxSize:[],fileList2:[],fileList3:[{url:q}],fileList4:[{url:q},{url:q}],fileList6:[],fileListStatus:[{url:q,status:"uploading",message:"上传中..."},{url:q,status:"failed",message:"上传失败"}]}),mounted(){E=this},methods:{deletePic(e){console.log("[deletePic] event",e),this[`fileList${e.name}`].splice(e.index,1)},async afterRead(e){console.log("[afterRead] event",e);const t=[].concat(e.file);let i=this[`fileList${e.name}`].length;t.map((t=>{this[`fileList${e.name}`].push({...t,status:"uploading",message:"上传中"})}));for(let s=0;s<t.length;s++){const a=await this.uploadFilePromise(t[s].path),o=this[`fileList${e.name}`][i];this[`fileList${e.name}`].splice(i,1,Object.assign(o,{message:"",...a})),i+=1}},uploadFilePromise:e=>(console.log("[uploadFilePromise] url",e),new Promise((t=>{setTimeout((()=>t({url:e,status:"success",message:"上传失败"})),1e3)}))),onOversize(e){console.log("[onOversize] file",e),E.onGTip("文件大小不能超过 500kb")},beforeRead:e=>(console.log("[beforeRead] file",e),"image/jpeg"===e.type||(E.onGTip("请上传 jpg 格式图片"),!1)),asyncBeforeRead:e=>(console.log("[asyncBeforeRead] file",e),new Promise(((t,i)=>{if("image/jpeg"!==e.type)E.onGTip("请上传 jpg 格式图片"),i();else{t(new File(["foo"],"bar.jpg",{type:"image/jpeg"}))}})))}},[["render",function(e,s,a,o,l,n){const c=g("PressUploader"),u=g("demo-block"),d=f;return t(),i("div",{class:"demo-wrap"},[r(u,{title:e.t("basicUsage")},{default:h((()=>[r(c,{"file-list":l.fileList1,name:"1",multiple:"","max-count":10,onAfterRead:n.afterRead,onDelete:n.deletePic},null,8,["file-list","onAfterRead","onDelete"])])),_:1},8,["title"]),r(u,{title:e.t("uploadVideo")},{default:h((()=>[r(c,{"file-list":l.fileList2,name:"2",multiple:"","max-count":10,accept:"video",onAfterRead:n.afterRead,onDelete:n.deletePic},null,8,["file-list","onAfterRead","onDelete"])])),_:1},8,["title"]),r(u,{title:e.t("uploadStatus")},{default:h((()=>[r(c,{"file-list":l.fileListStatus,name:"Status",multiple:"","max-count":10,accept:"video",onAfterRead:n.afterRead,onDelete:n.deletePic},null,8,["file-list","onAfterRead","onDelete"])])),_:1},8,["title"]),r(u,{title:e.t("preview")},{default:h((()=>[r(c,{"file-list":l.fileList3,name:"3",multiple:"","max-count":10,"preview-full-image":!0,onAfterRead:n.afterRead,onDelete:n.deletePic},null,8,["file-list","onAfterRead","onDelete"])])),_:1},8,["title"]),r(u,{title:e.t("maxCount")},{default:h((()=>[r(c,{"file-list":l.fileList4,name:"4",multiple:"","max-count":2,onAfterRead:n.afterRead,onDelete:n.deletePic},null,8,["file-list","onAfterRead","onDelete"])])),_:1},8,["title"]),r(u,{title:e.t("maxSize")},{default:h((()=>[r(c,{"file-list":l.fileListMaxSize,name:"MaxSize",multiple:"","max-size":512e3,onAfterRead:n.afterRead,onOversize:n.onOversize},null,8,["file-list","onAfterRead","onOversize"])])),_:1},8,["title"]),r(u,{title:e.t("customStyle")},{default:h((()=>[r(c,{"file-list":l.fileList6,name:"6",multiple:"","max-count":1,width:"250",height:"150",onAfterRead:n.afterRead,onDelete:n.deletePic},{default:h((()=>[r(d,{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_799718017ac81b11c0.png",mode:"widthFix",style:{width:"250px",height:"150px"}})])),_:1},8,["file-list","onAfterRead","onDelete"])])),_:1},8,["title"]),r(u,{title:e.t("beforeRead")},{default:h((()=>[r(c,{"before-read":n.beforeRead},null,8,["before-read"])])),_:1},8,["title"]),r(u,{title:e.t("disabled")},{default:h((()=>[r(c,{disabled:""})])),_:1},8,["title"])])}]]);export{G as default};
