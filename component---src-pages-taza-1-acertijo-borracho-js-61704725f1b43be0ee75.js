"use strict";(self.webpackChunkgatsby_blog_demo=self.webpackChunkgatsby_blog_demo||[]).push([[979],{1402:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);var a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}))})),o=["No es tan difícil","Vamos, tu puedes","Continúa buscando"];var l=function(e){var t,n,l=e.validateResponse,s=e.question,i=e.onSuccess,c=(0,r.useState)(!1),u=c[0],m=c[1],d=(0,r.useState)(""),f=d[0],g=d[1];return r.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(),l(f)?(m(!1),i(e)):m(!0)},className:"w-full"},r.createElement("label",{htmlFor:"text",className:"block text-lg "},s),r.createElement("div",{className:"mt-4 relative rounded-md shadow-sm border"},r.createElement("input",{type:"text",name:"text",id:"text",className:"block w-full my-1 pr-10 pl-2 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md leading-8",placeholder:"respuesta",value:f,onChange:function(e){m(!1),g(e.target.value)},"aria-invalid":"true"}),u&&r.createElement("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},r.createElement(a,{className:"h-5 w-5 text-red-500","aria-hidden":"true"}))),r.createElement("p",{className:(!u&&"invisible")+" mt-1 text-sm text-red-600 py-2",id:"email-error"},o[(t=0,n=o.length,Math.floor(Math.random()*(n-t))+t)]),r.createElement("button",{type:"submit",className:" mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Probar suerte"))}},4108:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children;return r.createElement("div",{className:"container mx-auto px-5 max-w-sm"},t)}},3644:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),a=n(4108),o=n(1402),l=n(1597);function s(){return r.createElement(a.Z,null,r.createElement("section",{className:"flex-col flex items-center md:justify-between mt-8 mb-16 md:mb-12"},r.createElement("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-center"},"Enigma del borracho."),r.createElement("img",{className:"mt-5 rounded-2xl ",src:"/borracho.jpg",title:"Borracho",alt:"Borracho"}),r.createElement(o.Z,{question:" Un borracho dijo: Si ayer fuese mañana, hoy sería viernes. ¿En qué día de la semana el borracho dijo esto?",validateResponse:function(e){return e.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().includes("domingo")},onSuccess:function(){return(0,l.c4)("/taza1/acertijo/suma")}})))}}}]);
//# sourceMappingURL=component---src-pages-taza-1-acertijo-borracho-js-61704725f1b43be0ee75.js.map