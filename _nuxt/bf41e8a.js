(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{556:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},557:function(t,r,e){var content=e(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(135).default)("3e9cccf3",content,!0,{sourceMap:!1})},561:function(t,r,e){"use strict";var o=e(2),n=e(562).trim;o({target:"String",proto:!0,forced:e(563)("trim")},{trim:function(){return n(this)}})},562:function(t,r,e){var o=e(4),n=e(24),l=e(13),c=e(556),f=o("".replace),m="["+c+"]",h=RegExp("^"+m+m+"*"),d=RegExp(m+m+"*$"),v=function(t){return function(r){var e=l(n(r));return 1&t&&(e=f(e,h,"")),2&t&&(e=f(e,d,"")),e}};t.exports={start:v(1),end:v(2),trim:v(3)}},563:function(t,r,e){var o=e(92).PROPER,n=e(3),l=e(556);t.exports=function(t){return n((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||o&&l[t].name!==t}))}},564:function(t,r,e){"use strict";e(557)},565:function(t,r,e){var o=e(134)(!1);o.push([t.i,".el-header{position:relative;background-color:#409eff;color:#fff;font-size:2em;display:flex;justify-content:center;align-items:center}",""]),t.exports=o},571:function(t,r,e){"use strict";e.r(r);e(561),e(91),e(29),e(93);var o={data:function(){return{form:{email:"",password:""},errors:[],loading:!1}},methods:{checkForm:function(t){var r=this;if(this.errors=[],this.form.password||this.errors.push("Введите пароль"),this.form.password.length<8&&this.errors.push("Пароль не может быть меньше 8 символов"),this.strWithCapital(this.form.password)||this.errors.push("Пароль должен содержать хотя бы одну заглавную букву"),this.form.email?this.validEmail(this.form.email)||this.errors.push("Укажите корректный адрес электронной почты."):this.errors.push("Укажите электронную почту."),!this.errors.length)return this.loading=!0,setTimeout((function(){r.loading=!1,r.$router.replace({path:"/"})}),2e3),!0},validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},strWithCapital:function(t){return/[A-Z]/.test(t)}}},n=(e(564),e(54)),component=Object(n.a)(o,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"common-layout"},[r("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"layout-container-demo"},[r("el-header",[t._v("Авторизация")]),t._v(" "),r("el-main",[r("el-form",{attrs:{model:t.form,"label-width":"200px"}},[this.errors.length>0?r("el-container",t._l(this.errors,(function(e){return r("el-alert",{key:e,attrs:{closable:!1,title:"",type:"error"}},[t._v(t._s(e)+"\n                ")])})),1):t._e(),t._v(" "),r("el-form-item",{attrs:{label:"Электронная почта"}},[r("el-input",{attrs:{placeholder:"Электронная почта"},model:{value:t.form.email,callback:function(r){t.$set(t.form,"email",r)},expression:"form.email"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Пароль"}},[r("el-input",{attrs:{type:"password",placeholder:"Пароль","show-password":""},model:{value:t.form.password,callback:function(r){t.$set(t.form,"password","string"==typeof r?r.trim():r)},expression:"form.password"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.checkForm}},[t._v("Авторизация")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);