import{ar as t,as as n}from"./index-69342aaa.js";let e=0;function o(o){const a=`binded_${e}`;function s(){const n=this;n[a]||(o.call(n,t,!0),n[a]=!0)}function c(){const t=this;t[a]&&(o.call(t,n,!1),t[a]=!1)}return e+=1,{mounted:s,activated:s,deactivated:c,beforeDestroy:c}}export{o as B};
