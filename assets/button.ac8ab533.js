import{b as e}from"./system.3ebd09ca.js";const t={props:{id:{type:String,default:""},lang:{type:String,default:""},businessId:{type:String,default:""},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:String,default:""},appParameter:{type:String,default:""},ariaLabel:{type:String,default:""},openType:{type:String,default:""},getUserProfileDesc:{type:String,default:""},hoverClass:{type:String,default:""},loadingClass:{type:String,default:""}},data:()=>({canIUseGetUserProfile:e()}),methods:{triggerEvent(...e){this.$emit(...e)},onGetUserInfo(e){this.triggerEvent("getuserinfo",e)},onContact(e){this.triggerEvent("contact",e)},onGetPhoneNumber(e){this.triggerEvent("getphonenumber",e)},onError(e){this.triggerEvent("error",e)},onLaunchApp(e){this.triggerEvent("launchapp",e)},onOpenSetting(e){this.triggerEvent("opensetting",e)},onChooseAvatar(e){this.triggerEvent("chooseAvatar",e)}}};export{t as b};
