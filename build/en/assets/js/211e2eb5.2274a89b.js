"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?o.createElement(y,c(c({ref:t},u),{},{components:n})):o.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"NacosSync introduce",keywords:["NacosSync","introduce"],description:"NacosSync introduce"},c="NacosSync introduce",i={unversionedId:"nacos-sync",id:"nacos-sync",title:"NacosSync introduce",description:"NacosSync introduce",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/nacos-sync.md",sourceDirName:".",slug:"/nacos-sync",permalink:"/en/docs/next/nacos-sync",draft:!1,tags:[],version:"current",frontMatter:{title:"NacosSync introduce",keywords:["NacosSync","introduce"],description:"NacosSync introduce"}},s={},l=[{value:"Introduce",id:"introduce",level:2},{value:"System module architecture:",id:"system-module-architecture",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nacossync-introduce"},"NacosSync introduce"),(0,a.kt)("h2",{id:"introduce"},"Introduce"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NacosSync is a support for a variety of registry of synchronous components,based on the Spring boot development framework,Data layer uses the Spring Data JPA,follow the standard JPA access codes,support for multiple data storage,Default to Hibernate implementation, support table created automatically update more conveniently."),(0,a.kt)("li",{parentName:"ul"},"Using efficient event driven asynchronous model, support a variety of custom events, make the synchronization task processing time delay control in 3s, 8C16G stand-alone can support 6 k synchronization tasks."),(0,a.kt)("li",{parentName:"ul"},"NacosSync in addition to the standalone deployment, but also provides high availability cluster deployment patterns, NacosSync is stateless design, such as task status data migration to the database, the cluster expansion is very convenient."),(0,a.kt)("li",{parentName:"ul"},"Abstraction is out of Sync core component interface, through annotations to distinguish synchronous type, allowing developers to easily according to their own needs, different registry to expand, has now supports synchronous type:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nacos to Nacos data synchronization"),(0,a.kt)("li",{parentName:"ul"},"Zookeeper to Nacos data synchronization"),(0,a.kt)("li",{parentName:"ul"},"Nacos to the Zookeeper data synchronization "),(0,a.kt)("li",{parentName:"ul"},"Eureka to Nacos data synchronization"),(0,a.kt)("li",{parentName:"ul"},"Consul to Nacos data synchronization",(0,a.kt)("a",{name:"d384971e"}))))),(0,a.kt)("h2",{id:"system-module-architecture"},"System module architecture:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB12VPaJVzqK1RjSZSgXXcpAVXa-886-752.png",alt:"image.png"}),(0,a.kt)("br",null),"The console",(0,a.kt)("br",null),"Provides concise Web console operation, support for internationalization.",(0,a.kt)("br",null)),(0,a.kt)("a",{name:"b3408d06"}),"### Synchronization task management page ![](https://img.alicdn.com/tfs/TB1eSYyJ5LaK1RjSZFxXXamPFXa-2866-1064.png)",(0,a.kt)("a",{name:"091bc34b"}),"### Registry management page",(0,a.kt)("a",{name:"53fdb015"}),"## ![image.png](https://img.alicdn.com/tfs/TB1e_rdJ7voK1RjSZFNXXcxMVXa-2876-1124.png)",(0,a.kt)("a",{name:"f6a633db"}),"## Usage scenarios: * Multiple network communication between the Region of Shared services, break the service call restriction of the Region.",(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Mo6yJ4jaK1RjSZKzXXXVwXXa-1136-798.png",alt:"image.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Two-way synchronization function, support Dubbo + Zookeeper service smooth migration to Dubbo + Naocs, enjoy Nacos more high quality service.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Dza8J9zqK1RjSZPxXXc4tVXa-1728-838.png",alt:"image.png"})))}m.isMDXComponent=!0}}]);