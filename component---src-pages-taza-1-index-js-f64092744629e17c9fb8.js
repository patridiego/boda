"use strict";(self.webpackChunkgatsby_blog_demo=self.webpackChunkgatsby_blog_demo||[]).push([[116],{1402:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);var a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}))})),o=["No es tan difícil","Vamos, tu puedes","Continúa buscando"];var l=function(e){var t,n,l=e.validateResponse,c=e.question,s=e.onSuccess,i=(0,r.useState)(!1),u=i[0],m=i[1],d=(0,r.useState)(""),f=d[0],g=d[1];return r.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(),l(f)?(m(!1),s(e)):m(!0)}},r.createElement("label",{htmlFor:"text",className:"block text-lg "},c),r.createElement("div",{className:"mt-4 relative rounded-md shadow-sm border"},r.createElement("input",{type:"text",name:"text",id:"text",className:"block w-full my-1 pr-10 pl-2 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md leading-8",placeholder:"respuesta",value:f,onChange:function(e){m(!1),g(e.target.value)},"aria-invalid":"true"}),u&&r.createElement("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},r.createElement(a,{className:"h-5 w-5 text-red-500","aria-hidden":"true"}))),r.createElement("p",{className:(!u&&"invisible")+" mt-1 text-sm text-red-600 py-2",id:"email-error"},o[(t=0,n=o.length,Math.floor(Math.random()*(n-t))+t)]),r.createElement("button",{type:"submit",className:" mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Probar suerte"))}},4108:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children;return r.createElement("div",{className:"container mx-auto px-5 max-w-sm"},t)}},4641:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(){return r.createElement("section",{className:"flex-col flex items-center  mt-16 mb-16 md:mb-12"},r.createElement("h1",{className:"text-6xl font-bold tracking-tighter leading-tight  text-center"},"Patricia y Diego se casan"),r.createElement("h4",{className:"text-center md:text-left text-lg mt-5 "},"21/05/2022"))}},9827:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(7294),a=n(4108),o=(n(4641),n(1597)),l=n(1402);function c(){var e=(0,r.useState)(!1),t=(e[0],e[1],(0,r.useState)(""));t[0],t[1];return r.createElement(a.Z,null,r.createElement("section",{className:"flex-col flex items-center md:justify-between mt-8 mb-16 md:mb-12"},r.createElement("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-center"},"Accede a la prueba."),r.createElement("img",{className:"mt-5 rounded-2xl ",src:"/taza.jpg",title:"Borracho",alt:"Borracho"}),r.createElement(l.Z,{question:"Seguro que adivináis la contraseña para entrar?",validateResponse:function(e){return e.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().includes("lua")},onSuccess:function(){return(0,o.c4)("/taza1/acertijo/borracho")}})))}}}]);
//# sourceMappingURL=component---src-pages-taza-1-index-js-f64092744629e17c9fb8.js.map