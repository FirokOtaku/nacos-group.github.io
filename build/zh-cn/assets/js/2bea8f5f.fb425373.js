"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[7015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=l,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},57836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={title:"Nacos 2.0.0 \u517c\u5bb9\u6027\u6587\u6863",keywords:["Nacos","2.0.0"],description:"Nacos 2.0.0 \u517c\u5bb9\u6027\u6587\u6863"},i=void 0,o={unversionedId:"v2/upgrading/2.0.0-compatibility",id:"version-1.X/v2/upgrading/2.0.0-compatibility",title:"Nacos 2.0.0 \u517c\u5bb9\u6027\u6587\u6863",description:"Nacos 2.0.0 \u517c\u5bb9\u6027\u6587\u6863",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.X/v2/upgrading/2.0.0-compatibility.md",sourceDirName:"v2/upgrading",slug:"/v2/upgrading/2.0.0-compatibility",permalink:"/zh-cn/docs/1.X/v2/upgrading/2.0.0-compatibility",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Nacos 2.0.0 \u517c\u5bb9\u6027\u6587\u6863",keywords:["Nacos","2.0.0"],description:"Nacos 2.0.0 \u517c\u5bb9\u6027\u6587\u6863"},sidebar:"docs",previous:{title:"Kubernetes Nacos",permalink:"/zh-cn/docs/1.X/v2/quickstart/quick-start-kubernetes"},next:{title:"Nacos 2.0 \u5347\u7ea7\u6587\u6863",permalink:"/zh-cn/docs/1.X/v2/upgrading/2.0.0-upgrading"}},c={},p=[{value:"Nacos 2.0.0\u7248\u672c\u538b\u6d4b",id:"nacos-200\u7248\u672c\u538b\u6d4b",level:2},{value:"\u65b0\u7248\u672c\u90e8\u7f72",id:"\u65b0\u7248\u672c\u90e8\u7f72",level:2},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:2},{value:"\u529f\u80fd\u5b8c\u6210\u5ea6\u53ca\u65e7\u7248\u672c\u5ba2\u6237\u7aef\u9002\u914d\u60c5\u51b5\uff1a",id:"\u529f\u80fd\u5b8c\u6210\u5ea6\u53ca\u65e7\u7248\u672c\u5ba2\u6237\u7aef\u9002\u914d\u60c5\u51b5",level:2},{value:"\u914d\u7f6e\u4e2d\u5fc3",id:"\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"JAVA SDK",id:"java-sdk",level:4},{value:"\u5176\u4ed6\u8bed\u8a00 SDK",id:"\u5176\u4ed6\u8bed\u8a00-sdk",level:4},{value:"openAPI",id:"openapi",level:4},{value:"\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u53d1\u73b0",level:3},{value:"JAVA SDK",id:"java-sdk-1",level:4},{value:"\u5176\u4ed6\u8bed\u8a00 SDK",id:"\u5176\u4ed6\u8bed\u8a00-sdk-1",level:4},{value:"openAPI",id:"openapi-1",level:4},{value:"\u63a7\u5236\u53f0",id:"\u63a7\u5236\u53f0",level:3},{value:"\u751f\u6001\u517c\u5bb9\u60c5\u51b5",id:"\u751f\u6001\u517c\u5bb9\u60c5\u51b5",level:2},{value:"Spring Cloud Alibaba",id:"spring-cloud-alibaba",level:3},{value:"Dubbo",id:"dubbo",level:3},{value:"Nacos Spring Boot",id:"nacos-spring-boot",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"SDK\u5ba2\u6237\u7aef\u3001\u63a7\u5236\u53f0",id:"sdk\u5ba2\u6237\u7aef\u63a7\u5236\u53f0",level:3},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u80fd\u5426\u652f\u6301Nacos\u65e7\u7248\u672c\u5ba2\u6237\u7aef\uff1f",id:"\u80fd\u5426\u652f\u6301nacos\u65e7\u7248\u672c\u5ba2\u6237\u7aef",level:3},{value:"\u542f\u52a8\u540e\uff0c\u8c03\u7528openAPI \u62a5\u9519 code:503,msg:server is DOWN now, please try again later!",id:"\u542f\u52a8\u540e\u8c03\u7528openapi-\u62a5\u9519-code503msgserver-is-down-now-please-try-again-later",level:3},{value:"\u627e\u4e0d\u5230\u7b26\u53f7<code>com.alibaba.nacos.consistency.entity</code>",id:"\u627e\u4e0d\u5230\u7b26\u53f7comalibabanacosconsistencyentity",level:3},{value:"\u542f\u52a8\u65f6\u62a5\u9519<code>Connection is unregistered.</code>\u6216<code>Client not connected,current status:STARTING</code>.",id:"\u542f\u52a8\u65f6\u62a5\u9519connection-is-unregistered\u6216client-not-connectedcurrent-statusstarting",level:3},{value:"Nacos2.0\u589e\u52a0\u4e869848\uff0c9849\u7aef\u53e3\u6765\u8fdb\u884cGRPC\u901a\u4fe1\uff0c\u6211\u9700\u8981\u5728application.properties\u4e2d\u989d\u5916\u914d\u7f6e\u5417\uff1f",id:"nacos20\u589e\u52a0\u4e8698489849\u7aef\u53e3\u6765\u8fdb\u884cgrpc\u901a\u4fe1\u6211\u9700\u8981\u5728applicationproperties\u4e2d\u989d\u5916\u914d\u7f6e\u5417",level:3},{value:"\u542f\u52a8nacos2.0\u65f6\u5e0c\u671b\u7528nginx \u4ee3\u7406\uff0c9848\u8fd9\u4e2a\u7aef\u53e3\u600e\u6837\u5904\u7406\uff0c\u8981\u901a\u8fc7nginx\u66b4\u9732\u51fa\u6765\u4e48\uff1f\u4ee5\u53cadocker\u662f\u5426\u9700\u8981\u6620\u5c04\uff1f",id:"\u542f\u52a8nacos20\u65f6\u5e0c\u671b\u7528nginx-\u4ee3\u74069848\u8fd9\u4e2a\u7aef\u53e3\u600e\u6837\u5904\u7406\u8981\u901a\u8fc7nginx\u66b4\u9732\u51fa\u6765\u4e48\u4ee5\u53cadocker\u662f\u5426\u9700\u8981\u6620\u5c04",level:3},{value:"\u5f85\u8865\u5145...",id:"\u5f85\u8865\u5145",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u4f18\u5316\u4e2d......")),(0,l.kt)("h1",{id:"nacos20\u4ee3\u7801\u5b58\u653e\u4f4d\u7f6e"},"Nacos2.0\u4ee3\u7801\u5b58\u653e\u4f4d\u7f6e"),(0,l.kt)("p",null,"Nacos\u4ee3\u7801\u5f53\u524d\u4fdd\u5b58\u5728develop\u5206\u652f\u4e2d\uff0c\u542f\u52a8\u65b9\u5f0f\u4e0eNacos 1.x\u76f8\u540c\uff08\u5f53\u524d\u4f4d\u4e8ev1.x-develop\uff09\uff0c\u6b22\u8fce\u8d21\u732e\u3002"),(0,l.kt)("h1",{id:"nacos-200-\u517c\u5bb9\u6027\u6587\u6863"},"Nacos 2.0.0 \u517c\u5bb9\u6027\u6587\u6863"),(0,l.kt)("p",null,"\u7ecf\u8fc7\u793e\u533a\u7684\u8ba8\u8bba\u548c\u5f00\u53d1\uff0c Nacos \u57fa\u4e8e\u957f\u8fde\u63a5\u76842.0.0\u7248\u672c\u7684\u6838\u5fc3\u529f\u80fd\u5df2\u5f00\u53d1\u5b8c\u6210\uff0c\u76ee\u524d2.0.0\u6b63\u5f0f\u7248\u672c\u5df2\u53d1\u5e03\uff0c\u6b22\u8fce\u5927\u5bb6\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"2.0.0\u652f\u6301Nacos1.X\u670d\u52a1\u7aef\u7684\u5e73\u6ed1\u5347\u964d\u7ea7\u7684\u80fd\u529b\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/v2/upgrading/2.0.0-upgrading"},"Nacos2.0\u5347\u7ea7\u6587\u6863")," \u3002"),(0,l.kt)("h2",{id:"nacos-200\u7248\u672c\u538b\u6d4b"},"Nacos 2.0.0\u7248\u672c\u538b\u6d4b"),(0,l.kt)("p",null,"\u8be6\u60c5\u89c1\uff1a",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/v2/guide/admin/nacos2-naming-benchmark"},"Nacos2.0\u670d\u52a1\u53d1\u73b0\u6a21\u5757\u538b\u6d4b\u62a5\u544a")," \u4ee5\u53ca ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/v2/guide/admin/nacos2-config-benchmark"},"Nacos2.0\u914d\u7f6e\u6a21\u5757\u538b\u6d4b\u62a5\u544a")," \u3002"),(0,l.kt)("p",null,"\u5927\u89c4\u6a21\u538b\u6d4b\u62a5\u544a\u5c06\u5728\u8fd1\u671f\u653e\u51fa\u3002"),(0,l.kt)("h2",{id:"\u65b0\u7248\u672c\u90e8\u7f72"},"\u65b0\u7248\u672c\u90e8\u7f72"),(0,l.kt)("p",null,"Nacos2.0\u7248\u672c\u76f8\u6bd41.X\u65b0\u589e\u4e86gRPC\u7684\u901a\u4fe1\u65b9\u5f0f\uff0c\u56e0\u6b64\u9700\u8981\u589e\u52a02\u4e2a\u7aef\u53e3\u3002\u65b0\u589e\u7aef\u53e3\u662f\u5728\u914d\u7f6e\u7684\u4e3b\u7aef\u53e3(server.port)\u57fa\u7840\u4e0a\uff0c\u8fdb\u884c\u4e00\u5b9a\u504f\u79fb\u91cf\u81ea\u52a8\u751f\u6210\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e0e\u4e3b\u7aef\u53e3\u7684\u504f\u79fb\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9848"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aefgRPC\u8bf7\u6c42\u670d\u52a1\u7aef\u7aef\u53e3\uff0c\u7528\u4e8e\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u8d77\u8fde\u63a5\u548c\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9849"),(0,l.kt)("td",{parentName:"tr",align:null},"1001"),(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aefgRPC\u8bf7\u6c42\u670d\u52a1\u7aef\u7aef\u53e3\uff0c\u7528\u4e8e\u670d\u52a1\u95f4\u540c\u6b65\u7b49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7848"),(0,l.kt)("td",{parentName:"tr",align:null},"-1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Jraft\u8bf7\u6c42\u670d\u52a1\u7aef\u7aef\u53e3\uff0c\u7528\u4e8e\u5904\u7406\u670d\u52a1\u7aef\u95f4\u7684Raft\u76f8\u5173\u8bf7\u6c42")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528VIP/nginx\u8bf7\u6c42\u65f6\uff0c\u9700\u8981\u914d\u7f6e\u6210TCP\u8f6c\u53d1\uff0c\u4e0d\u80fd\u914d\u7f6ehttp2\u8f6c\u53d1\uff0c\u5426\u5219\u8fde\u63a5\u4f1a\u88abnginx\u65ad\u5f00\u3002"),"\n",(0,l.kt)("strong",{parentName:"p"},"9849\u548c7848\u7aef\u53e3\u4e3a\u670d\u52a1\u7aef\u4e4b\u95f4\u7684\u901a\u4fe1\u7aef\u53e3\uff0c\u8bf7\u52ff\u66b4\u9732\u5230\u5916\u90e8\u7f51\u7edc\u73af\u5883\u548c\u5ba2\u6237\u7aef\u6d4b\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"nacos2_port_exposure.png",src:n(54957).Z,width:"2000",height:"1125"})," "),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u62e5\u6709\u76f8\u540c\u7684\u8ba1\u7b97\u903b\u8f91\uff0c\u7528\u6237\u5982\u540c1.X\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u914d\u7f6e\u4e3b\u7aef\u53e3(\u9ed8\u8ba48848)\uff0c\u901a\u8fc7\u76f8\u540c\u7684\u504f\u79fb\u91cf\uff0c\u8ba1\u7b97\u5bf9\u5e94gRPC\u7aef\u53e3(\u9ed8\u8ba49848)\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\u5982\u679c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e4b\u524d\u5b58\u5728\u7aef\u53e3\u8f6c\u53d1\uff0c\u6216\u9632\u706b\u5899\u65f6\uff0c\u9700\u8981\u5bf9\u7aef\u53e3\u8f6c\u53d1\u914d\u7f6e\u548c\u9632\u706b\u5899\u914d\u7f6e\u505a\u76f8\u5e94\u7684\u8c03\u6574\u3002"),(0,l.kt)("p",null,"\u5176\u4f59\u90e8\u7f72\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/v2/guide/admin/deployment"},"Nacos\u90e8\u7f72\u624b\u518c")," ,\u5c06\u7248\u672c\u76f8\u5173\u66ff\u6362\u62102.1.1\u3002"),(0,l.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,l.kt)("p",null,"Nacos2.0\u7684\u670d\u52a1\u7aef\u5b8c\u5168\u517c\u5bb91.X\u5ba2\u6237\u7aef\u3002Nacos2.0\u5ba2\u6237\u7aef\u7531\u4e8e\u4f7f\u7528\u4e86gRPC\uff0c\u65e0\u6cd5\u517c\u5bb9Nacos1.X\u670d\u52a1\u7aef\uff0c\u8bf7\u52ff\u4f7f\u75282.0\u4ee5\u4e0a\u7248\u672c\u5ba2\u6237\u7aef\u8fde\u63a5Nacos1.X\u670d\u52a1\u7aef\u3002"),(0,l.kt)("h2",{id:"\u529f\u80fd\u5b8c\u6210\u5ea6\u53ca\u65e7\u7248\u672c\u5ba2\u6237\u7aef\u9002\u914d\u60c5\u51b5"},"\u529f\u80fd\u5b8c\u6210\u5ea6\u53ca\u65e7\u7248\u672c\u5ba2\u6237\u7aef\u9002\u914d\u60c5\u51b5\uff1a"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u4e2d\u5fc3"},"\u914d\u7f6e\u4e2d\u5fc3"),(0,l.kt)("h4",{id:"java-sdk"},"JAVA SDK"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb91.X\u5ba2\u6237\u7aef\u6240\u6709API\u63a5\u53e3\u65b9\u6cd5\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u5b9e\u73b02.0\u5ba2\u6237\u7aef\u6240\u6709API\u63a5\u53e3\u65b9\u6cd5\u3002")),(0,l.kt)("h4",{id:"\u5176\u4ed6\u8bed\u8a00-sdk"},"\u5176\u4ed6\u8bed\u8a00 SDK"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb9")),(0,l.kt)("h4",{id:"openapi"},"openAPI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb9\u6240\u6709\u914d\u7f6e\u4e2d\u5fc3\u76f8\u5173openAPI\u3002")),(0,l.kt)("h3",{id:"\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u53d1\u73b0"),(0,l.kt)("h4",{id:"java-sdk-1"},"JAVA SDK"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb91.X\u5ba2\u6237\u7aef\u6240\u6709API\u63a5\u53e3\u65b9\u6cd5\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb92.0\u5ba2\u6237\u7aef\u6240\u6709API\u63a5\u53e3\u65b9\u6cd5\uff1b")),(0,l.kt)("h4",{id:"\u5176\u4ed6\u8bed\u8a00-sdk-1"},"\u5176\u4ed6\u8bed\u8a00 SDK"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb9\u6240\u6709\u670d\u52a1\u53d1\u73b0\u76f8\u5173openAPI\u3002")),(0,l.kt)("h4",{id:"openapi-1"},"openAPI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u5b9e\u4f8b\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u9500\u5b9e\u4f8b\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u5b9e\u4f8b\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5b9e\u4f8b\u5217\u8868\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5b9e\u4f8b\u8be6\u60c5\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001\u5b9e\u4f8b\u5fc3\u8df3\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u670d\u52a1\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u670d\u52a1\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u670d\u52a1\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u670d\u52a1\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u670d\u52a1\u5217\u8868\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u7cfb\u7edf\u5f00\u5173\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u7cfb\u7edf\u5f00\u5173\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u7cfb\u7edf\u5f53\u524d\u6570\u636e\u6307\u6807\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5f53\u524d\u96c6\u7fa4Server\u5217\u8868\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5f53\u524d\u96c6\u7fa4leader\uff08\u5c06\u5e9f\u5f03\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u5b9e\u4f8b\u7684\u5065\u5eb7\u72b6\u6001\uff08\u652f\u6301\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u6279\u91cf\u66f4\u65b0\u5b9e\u4f8b\u5143\u6570\u636e(\u652f\u6301)"),(0,l.kt)("li",{parentName:"ul"},"\u6279\u91cf\u5220\u9664\u5b9e\u4f8b\u5143\u6570\u636e(\u652f\u6301)")),(0,l.kt)("h3",{id:"\u63a7\u5236\u53f0"},"\u63a7\u5236\u53f0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb9\u914d\u7f6e\u4e2d\u5fc3\u76f8\u5173\u9875\u9762\u53ca\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb9\u6743\u9650\u63a7\u5236\u76f8\u5173\u9875\u9762\u53ca\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb9\u547d\u540d\u7a7a\u95f4\u76f8\u5173\u9875\u9762\u53ca\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb9\u96c6\u7fa4\u7ba1\u7406\u76f8\u5173\u9875\u9762\u53ca\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb9\u670d\u52a1\u53d1\u73b0\u76f8\u5173\u9875\u9762\u53ca\u529f\u80fd")),(0,l.kt)("h2",{id:"\u751f\u6001\u517c\u5bb9\u60c5\u51b5"},"\u751f\u6001\u517c\u5bb9\u60c5\u51b5"),(0,l.kt)("h3",{id:"spring-cloud-alibaba"},"Spring Cloud Alibaba"),(0,l.kt)("p",null,"\u53ef\u901a\u8fc7\u6307\u5b9anacos-client\u65b9\u5f0f\uff0c\u63d0\u524d\u4f7f\u7528Nacos2.0\u957f\u8fde\u63a5\u529f\u80fd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    <dependency>\n        <groupId>com.alibaba.cloud</groupId>\n        <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n        <version>2.1.5.RELEASE</version>\n        <exclusions>\n            <exclusion>\n                <groupId>com.alibaba.nacos</groupId>\n                <artifactId>nacos-client</artifactId>\n            </exclusion>\n        </exclusions>\n    </dependency>\n    <dependency>\n        <groupId>com.alibaba.cloud</groupId>\n        <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>\n        <version>2.1.5.RELEASE</version>\n        <exclusions>\n            <exclusion>\n                <groupId>com.alibaba.nacos</groupId>\n                <artifactId>nacos-client</artifactId>\n            </exclusion>\n        </exclusions>\n    </dependency>\n    <dependency>\n        <groupId>com.alibaba.nacos</groupId>\n        <artifactId>nacos-client</artifactId>\n        <version>2.1.1</version>\n    </dependency>\n")),(0,l.kt)("h3",{id:"dubbo"},"Dubbo"),(0,l.kt)("p",null,"Nacos2.0\u7248\u672c\u5ba2\u6237\u7aef\u91cd\u65b0\u9002\u914d\u4e86Dubbo2.7.X\u3002\u5e76\u4e14Dubbo\u793e\u533a\u6b63\u5728\u5bf9\u65b0\u7248\u672c\u8fdb\u884c\u4fee\u6539\uff0c\u4e0d\u518d\u5f3a\u4f9d\u8d56\u53cd\u5c04\uff0c\u8be6\u60c5\u8bf7\u770b ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/dubbo/issues/7291"},"Dubbo#7291")),(0,l.kt)("h3",{id:"nacos-spring-boot"},"Nacos Spring Boot"),(0,l.kt)("p",null,"Nacos spring boot \u5df2\u53d1\u5e03\u65b0\u7248\u672c\u9002\u914d2.0\u5ba2\u6237\u7aef\u3002\u8bf7\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("h3",{id:"sdk\u5ba2\u6237\u7aef\u63a7\u5236\u53f0"},"SDK\u5ba2\u6237\u7aef\u3001\u63a7\u5236\u53f0"),(0,l.kt)("p",null,"Nacos 2.0\u7248\u672c\u4f7f\u7528\u65b9\u5f0f\u548cNacos1.X\u7248\u672c\u4f7f\u7528\u5b8c\u5168\u4e00\u81f4\u3002\u5ba2\u6237\u7aef\u63a5\u53e3\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/v2/guide/user/sdk"},"SDK\u6587\u6863"),"\u3002"),(0,l.kt)("h3",{id:"\u670d\u52a1\u7aef"},"\u670d\u52a1\u7aef"),(0,l.kt)("p",null,"Nacos 2.0\u670d\u52a1\u7aef\u7684\u4f7f\u7528\u4e5f\u548c\u65e7\u7248\u672c\u6ca1\u6709\u592a\u5927\u533a\u522b\uff0c\u8fd9\u91cc\u5bf9\u65b0\u7248\u672c\u4e2d\u65b0\u589e\u7684\u6570\u4e2a\u914d\u7f6e\u53c2\u6570\u8fdb\u884c\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.naming.clean.empty-service.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"60000(\u5355\u4f4d\u6beb\u79d2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos\u81ea\u52a8\u6e05\u7406\u7a7a\u670d\u52a1\u7684\u5de5\u4f5c\u95f4\u9694\uff0c\u5c06\u66ff\u4ee3\u65e7\u7248\u672c\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"nacos.naming.empty-service.clean.period-time-ms"),"\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.naming.clean.empty-service.expired-time"),(0,l.kt)("td",{parentName:"tr",align:null},"60000(\u5355\u4f4d\u6beb\u79d2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos\u5224\u65ad\u53ef\u6e05\u7406\u7684\u7a7a\u670d\u52a1\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5f53\u670d\u52a1\u6ca1\u6709\u53d1\u5e03\u7684\u5b9e\u4f8b\uff0c\u4e14\u8d85\u8fc7\u8be5\u8fc7\u671f\u65f6\u95f4\u672a\u53d1\u751f\u66f4\u65b0\u540e\uff0c\u5c06\u88ab\u5224\u5b9a\u4e3a\u8fc7\u671f\u7a7a\u670d\u52a1\u800c\u79fb\u9664")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.naming.clean.expired-metadata.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"5000(\u5355\u4f4d\u6beb\u79d2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos\u81ea\u52a8\u6e05\u7406\u8fc7\u671f\u5143\u6570\u636e\u7684\u5de5\u4f5c\u95f4\u9694")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.naming.clean.expired-metadata.expired-time"),(0,l.kt)("td",{parentName:"tr",align:null},"60000(\u5355\u4f4d\u6beb\u79d2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos\u81ea\u52a8\u6e05\u7406\u8fc7\u671f\u670d\u52a1\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5f53\u670d\u52a1\u6216\u5b9e\u4f8b\u672c\u8eab\u88ab\u79fb\u9664\u8d85\u8fc7\u8be5\u8bbe\u5b9a\u65f6\u95f4\u540e\uff0c\u5143\u6570\u636e\u4fe1\u606f\u5c06\u4f1a\u88ab\u79fb\u9664")))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"\u80fd\u5426\u652f\u6301nacos\u65e7\u7248\u672c\u5ba2\u6237\u7aef"},"\u80fd\u5426\u652f\u6301Nacos\u65e7\u7248\u672c\u5ba2\u6237\u7aef\uff1f"),(0,l.kt)("p",null,"\u914d\u7f6e\u4e2d\u5fc3\u517c\u5bb9\u652f\u6301Nacos1.0\u8d77\u7684\u6240\u6709\u7248\u672c\u5ba2\u6237\u7aef\uff0c\u670d\u52a1\u53d1\u73b0\u517c\u5bb9Nacos1.2\u8d77\u6240\u6709\u7248\u672c\u5ba2\u6237\u7aef\u3002\n\u56e0\u6b64\u5efa\u8bae\u4f7f\u7528Nacos1.2.0\u4e4b\u540e\u7248\u672c\u5ba2\u6237\u7aef\u3002\n\u4f46nacos1.X\u7684\u5ba2\u6237\u7aef\u4e0d\u5177\u6709\u957f\u8fde\u63a5\u80fd\u529b\uff0c\u56e0\u6b64\u4ecd\u7136\u5efa\u8bae\u4f7f\u7528Nacos2.0\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("h3",{id:"\u542f\u52a8\u540e\u8c03\u7528openapi-\u62a5\u9519-code503msgserver-is-down-now-please-try-again-later"},"\u542f\u52a8\u540e\uff0c\u8c03\u7528openAPI \u62a5\u9519 code:503,msg:server is DOWN now, please try again later!"),(0,l.kt)("p",null,"Nacos\u57281.4\u7248\u672c\u540e\u4f7f\u7528Jraft\u66ff\u6362\u4e86\u81ea\u7814\u7684Raft\u5b9e\u73b0\uff0cJraft\u7684\u9009\u4e3b\u6bd4\u539f\u5148\u81ea\u7814\u7684Raft\u66f4\u52a0\u4e25\u683c\uff0c\u4f1a\u8bb0\u5f55\u4e4b\u524d\u542f\u52a8\u65f6\u7684ip\u6216host\u3002\u56e0\u6b64\u91cd\u542f\u65f6\u5982\u679cip\u53d8\u52a8\u4e86\uff0c\u6709\u53ef\u80fd\u9020\u6210\u9009\u4e3b\u5931\u8d25\uff0c\u4ece\u800c\u5bfc\u81f4nacos\u65e0\u6cd5\u6b63\u786e\u63d0\u4f9b\u670d\u52a1\u3002\n\u89e3\u51b3\u65b9\u5f0f\u4e3a\u5220\u9664nacos\u76ee\u5f55\u4e0b\u7684data\uff0c\u518d\u542f\u52a8\u3002"),(0,l.kt)("p",null,"\u6216\u8005\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"-Dnacos.server.ip=${domain}"),",\u7136\u540e\u5c06nacos/conf\u7684cluster.conf\u914d\u7f6edomain\u5217\u8868\uff0c\u907f\u514d\u91cd\u542f\u65f6ip\u53d8\u52a8\u5bfc\u81f4\u7684raft\u9009\u4e3b\u95ee\u9898\u3002"),(0,l.kt)("h3",{id:"\u627e\u4e0d\u5230\u7b26\u53f7comalibabanacosconsistencyentity"},"\u627e\u4e0d\u5230\u7b26\u53f7",(0,l.kt)("inlineCode",{parentName:"h3"},"com.alibaba.nacos.consistency.entity")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5305\u76ee\u5f55\u662f\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"protobuf"),"\u5728\u7f16\u8bd1\u65f6\u81ea\u52a8\u751f\u6210\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"mvn compile"),"\u6765\u81ea\u52a8\u751f\u6210\u4ed6\u4eec\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fIDEA\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528IDEA\u7684protobuf\u63d2\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u542f\u52a8\u65f6\u62a5\u9519connection-is-unregistered\u6216client-not-connectedcurrent-statusstarting"},"\u542f\u52a8\u65f6\u62a5\u9519",(0,l.kt)("inlineCode",{parentName:"h3"},"Connection is unregistered."),"\u6216",(0,l.kt)("inlineCode",{parentName:"h3"},"Client not connected,current status:STARTING"),"."),(0,l.kt)("p",null,"\u539f\u56e0\u662f\u5ba2\u6237\u7aefgRPC\u65e0\u6cd5\u548c\u670d\u52a1\u7aef\u521b\u5efa\u8fde\u63a5\uff0c\u8bf7\u5148\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"telnet ${nacos.server.address}:${nacos.server.grpc.port}"),"\u8fdb\u884c\u6d4b\u8bd5\uff0c\u67e5\u770b\u7f51\u7edc\u662f\u5426\u7545\u901a\uff0c\u670d\u52a1\u7aef\u7aef\u53e3\u662f\u5426\u5df2\u7ecf\u6b63\u786e\u76d1\u542c\u3002"),(0,l.kt)("p",null,"\u82e5\u670d\u52a1\u7aef\u6ca1\u6709\u95ee\u9898\uff0c\u67e5\u770b\u914d\u7f6e\u662f\u5426\u6709\u8bef\uff0c\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u7684\u6240\u914d\u7f6e\u7684\u7aef\u53e3\u5e94\u4e00\u81f4\u3002"),(0,l.kt)("p",null,"\u82e5\u914d\u7f6e\u4e5f\u6ca1\u6709\u95ee\u9898\uff0c\u67e5\u770b\u662f\u5426\u6709\u9632\u706b\u5899\u6216VIP\u7aef\u53e3\u8f6c\u53d1\u95ee\u9898\uff0cNacos2.0\u7684gRPC\u7aef\u53e3\u5747\u901a\u8fc7\u4e3b\u7aef\u53e3\u7684\u504f\u79fb\u91cf\u8ba1\u7b97\u4ea7\u751f\uff0c\u56e0\u6b64\u7aef\u53e3\u8f6c\u53d1\u4e5f\u9700\u8981\u6ee1\u8db3\u8be5\u504f\u79fb\u91cf\u3002"),(0,l.kt)("h3",{id:"nacos20\u589e\u52a0\u4e8698489849\u7aef\u53e3\u6765\u8fdb\u884cgrpc\u901a\u4fe1\u6211\u9700\u8981\u5728applicationproperties\u4e2d\u989d\u5916\u914d\u7f6e\u5417"},"Nacos2.0\u589e\u52a0\u4e869848\uff0c9849\u7aef\u53e3\u6765\u8fdb\u884cGRPC\u901a\u4fe1\uff0c\u6211\u9700\u8981\u5728application.properties\u4e2d\u989d\u5916\u914d\u7f6e\u5417\uff1f"),(0,l.kt)("p",null,"\u4e0d\u9700\u8981\uff0c\u8fd9\u4e24\u4e2a\u7aef\u53e3\u5728Nacos2.0\u5185\u90e8\u662f\u901a\u8fc78848+1000\u4ee5\u53ca8848+1001\u8fd9\u79cd\u504f\u79fb\u91cf\u65b9\u5f0f\u8ba1\u7b97\u51fa\u6765\u7684\uff0c\u4e0d\u9700\u8981\u7528\u6237\u989d\u5916\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u3002\u4f46\u5982\u679c\u4f7f\u7528\u7684\u662fdocker\u6216\u5b58\u5728\u7aef\u53e3\u8f6c\u53d1\u65b9\u5f0f\u542f\u52a8\uff0c\u9700\u8981\u628a\u8fd9\u4e24\u4e2a\u7aef\u53e3\u8fdb\u884c\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"\u542f\u52a8nacos20\u65f6\u5e0c\u671b\u7528nginx-\u4ee3\u74069848\u8fd9\u4e2a\u7aef\u53e3\u600e\u6837\u5904\u7406\u8981\u901a\u8fc7nginx\u66b4\u9732\u51fa\u6765\u4e48\u4ee5\u53cadocker\u662f\u5426\u9700\u8981\u6620\u5c04"},"\u542f\u52a8nacos2.0\u65f6\u5e0c\u671b\u7528nginx \u4ee3\u7406\uff0c9848\u8fd9\u4e2a\u7aef\u53e3\u600e\u6837\u5904\u7406\uff0c\u8981\u901a\u8fc7nginx\u66b4\u9732\u51fa\u6765\u4e48\uff1f\u4ee5\u53cadocker\u662f\u5426\u9700\u8981\u6620\u5c04\uff1f"),(0,l.kt)("p",null,"\u5982\u679c\u5b58\u5728\u9632\u706b\u5899\u6216\u8005nginx\u7aef\u53e3\u8f6c\u53d1\u95ee\u9898\uff0c\u9700\u8981\u8fdb\u884c\u76f8\u5e94\u7684\u7aef\u53e3\u66b4\u9732\u914d\u7f6e\u3002\u5982\u5728nginx\u4e2d\uff0c\u5728\u5df2\u7ecf\u66b4\u97328848(x)\u7684\u57fa\u7840\u4e0a\uff0c\u9700\u8981\u989d\u5916\u66b4\u97329848\uff08x+1000)\u3002"),(0,l.kt)("h3",{id:"\u5f85\u8865\u5145"},"\u5f85\u8865\u5145..."))}u.isMDXComponent=!0},54957:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nacos2_port_exposure-63f18a02b66c0cf15d993e2cfc9ef805.png"}}]);