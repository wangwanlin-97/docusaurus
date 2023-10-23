"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6241],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),d=n,y=u["".concat(p,".").concat(d)]||u[d]||h[d]||r;return o?a.createElement(y,i(i({ref:t},c),{},{components:o})):a.createElement(y,i({ref:t},c))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},95988:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=o(87462),n=(o(67294),o(3905));const r={slug:"/howto/",title:"Overview",sidebar_label:"Overview"},i=void 0,l={unversionedId:"howto/overview",id:"howto/overview",title:"Overview",description:"How-to guides are like recipes when you are cooking. Equipped with basic knowledge about Wechaty, you can find key problems and use-cases at Wechaty Examples. If you are a total beginner, you can go to Wechaty getting started first.",source:"@site/docs/howto/overview.mdx",sourceDirName:"howto",slug:"/howto/",permalink:"/zh/docs/howto/",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1637867928,formattedLastUpdatedAt:"2021\u5e7411\u670825\u65e5",frontMatter:{slug:"/howto/",title:"Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Tuling 123 Bot",permalink:"/zh/docs/examples/professional/tuling123-bot"},next:{title:"Listen to events",permalink:"/zh/docs/howto/event"}},p={},s=[{value:"Add events to the bot",id:"add-events-to-the-bot",level:2},{value:"Add functionality to the bot",id:"add-functionality-to-the-bot",level:2},{value:"Deploy on IM platform",id:"deploy-on-im-platform",level:2},{value:"Deploy with containers",id:"deploy-with-containers",level:2},{value:"Additional",id:"additional",level:2},{value:"Using Puppets with Wechaty (How to switch between puppets)",id:"using-puppets-with-wechaty-how-to-switch-between-puppets",level:3},{value:"Use Cases",id:"use-cases",level:2}],c={toc:s},u="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"How-to guides are like recipes when you are cooking. Equipped with basic knowledge about Wechaty, you can find key problems and use-cases at ",(0,n.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/examples/overview"},"Wechaty Examples"),". If you are a total beginner, you can go to ",(0,n.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/getting-started/"},"Wechaty getting started")," first."),(0,n.kt)("h2",{id:"add-events-to-the-bot"},"Add events to the bot"),(0,n.kt)("p",null,"Prepare your bot to add events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/event"},"Listen to events"))),(0,n.kt)("h2",{id:"add-functionality-to-the-bot"},"Add functionality to the bot"),(0,n.kt)("p",null,"Use one of our quickstart repositories to add functionalities to the bot in a few minutes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/message"},"Deal with messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/contact"},"Manage contacts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/room"},"Manage rooms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/friendship"},"Send and accept friend requests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/file-box"},"Send and receive files"))),(0,n.kt)("h2",{id:"deploy-on-im-platform"},"Deploy on IM platform"),(0,n.kt)("p",null,"Deploy the bot on various instant messaging platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/deploy-wechat"},"Deploy in WeChat"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/deploy-padlocal"},"Deploy in PadLocal puppet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/deploy-wechat4u"},"Deploy in WeChat4U puppet")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/deploy-whatsapp"},"Deploy in Whatsapp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/deploy-lark"},"Deploy in Lark")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/deploy-gitter"},"Deploy in Gitter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/wechat-official"},"Deploy in Official Account"))),(0,n.kt)("h2",{id:"deploy-with-containers"},"Deploy with containers"),(0,n.kt)("p",null,"Deploy the bot with highly popular container solutions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/heroku"},"Deploy with Heroku")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/howto/docker"},"Deploy with Docker"))),(0,n.kt)("h2",{id:"additional"},"Additional"),(0,n.kt)("h3",{id:"using-puppets-with-wechaty-how-to-switch-between-puppets"},"Using Puppets with Wechaty (How to switch between puppets)"),(0,n.kt)("p",null,"For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA (Robotic Process Automation) modules for each, and we call those modules ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet"},"Wechaty Puppet"),"."),(0,n.kt)("p",null,"Wechaty Puppet Service is gRPC for Wechaty Puppet. To use a Wechaty Puppet Service, you need a TOKEN for that service, and pass it to Wechaty, then you will be able to use that Puppet Service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET=wechaty-puppet-service\nexport WECHATY_PUPPET_SERVICE_TOKEN="${TOKEN}"\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can switch between different Wechaty Puppet Services by changing your TOKEN. The source code works same irrespective of the token you used.")),(0,n.kt)("p",null,"To learn how to generate TOKEN and switch between puppets , you can visit ",(0,n.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-services/"},"Puppet Services"),"."),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/zh/docs/case-study/"},"Wechaty cases study")))}h.isMDXComponent=!0}}]);