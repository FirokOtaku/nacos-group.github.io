"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[9235],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(a),k=r,m=u["".concat(p,".").concat(k)]||u[k]||N[k]||o;return a?n.createElement(m,c(c({ref:t},i),{},{components:a})):n.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},70824:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>N,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"\u4ec0\u4e48\u662f Nacos",keywords:["nacos"],description:"\u4ec0\u4e48\u662f Nacos"},c="\u4ec0\u4e48\u662f Nacos",s={unversionedId:"what-is-nacos",id:"version-1.X/what-is-nacos",title:"\u4ec0\u4e48\u662f Nacos",description:"\u4ec0\u4e48\u662f Nacos",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.X/what-is-nacos.md",sourceDirName:".",slug:"/what-is-nacos",permalink:"/zh-cn/docs/1.X/what-is-nacos",draft:!1,tags:[],version:"1.X",frontMatter:{title:"\u4ec0\u4e48\u662f Nacos",keywords:["nacos"],description:"\u4ec0\u4e48\u662f Nacos"}},p={},l=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u4ec0\u4e48\u662f Nacos\uff1f",id:"\u4ec0\u4e48\u662f-nacos-1",level:2},{value:"Nacos \u5730\u56fe",id:"nacos-\u5730\u56fe",level:2},{value:"Nacos \u751f\u6001\u56fe",id:"nacos-\u751f\u6001\u56fe",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],i={toc:l},u="wrapper";function N(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ec0\u4e48\u662f-nacos"},"\u4ec0\u4e48\u662f Nacos"),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,"\u6b22\u8fce\u6765\u5230 Nacos \u7684\u4e16\u754c\uff01"),(0,r.kt)("p",null,"Nacos /n\u0251:k\u0259\u028as/  \u662f Dynamic Naming and Configuration Service\u7684\u9996\u5b57\u6bcd\u7b80\u79f0\uff0c\u4e00\u4e2a\u66f4\u6613\u4e8e\u6784\u5efa\u4e91\u539f\u751f\u5e94\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u7ba1\u7406\u5e73\u53f0\u3002"),(0,r.kt)("p",null,"Nacos \u81f4\u529b\u4e8e\u5e2e\u52a9\u60a8\u53d1\u73b0\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u3002Nacos \u63d0\u4f9b\u4e86\u4e00\u7ec4\u7b80\u5355\u6613\u7528\u7684\u7279\u6027\u96c6\uff0c\u5e2e\u52a9\u60a8\u5feb\u901f\u5b9e\u73b0\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5143\u6570\u636e\u53ca\u6d41\u91cf\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"Nacos \u5e2e\u52a9\u60a8\u66f4\u654f\u6377\u548c\u5bb9\u6613\u5730\u6784\u5efa\u3001\u4ea4\u4ed8\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u5e73\u53f0\u3002 Nacos \u662f\u6784\u5efa\u4ee5\u201c\u670d\u52a1\u201d\u4e3a\u4e2d\u5fc3\u7684\u73b0\u4ee3\u5e94\u7528\u67b6\u6784 (\u4f8b\u5982\u5fae\u670d\u52a1\u8303\u5f0f\u3001\u4e91\u539f\u751f\u8303\u5f0f) \u7684\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\u3002"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f-nacos-1"},"\u4ec0\u4e48\u662f Nacos\uff1f"),(0,r.kt)("p",null,"\u670d\u52a1\uff08Service\uff09\u662f Nacos \u4e16\u754c\u7684\u4e00\u7b49\u516c\u6c11\u3002Nacos \u652f\u6301\u51e0\u4e4e\u6240\u6709\u4e3b\u6d41\u7c7b\u578b\u7684\u201c\u670d\u52a1\u201d\u7684\u53d1\u73b0\u3001\u914d\u7f6e\u548c\u7ba1\u7406\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Kubernetes Service")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/docs/guides/concepts.html#service-definition"},"gRPC")," & ",(0,r.kt)("a",{parentName:"p",href:"https://dubbo.incubator.apache.org"},"Dubbo RPC Service")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-restdocs"},"Spring Cloud RESTful Service")),(0,r.kt)("p",null,"Nacos \u7684\u5173\u952e\u7279\u6027\u5305\u62ec:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u53d1\u73b0\u548c\u670d\u52a1\u5065\u5eb7\u76d1\u6d4b")),(0,r.kt)("p",{parentName:"li"},"  Nacos \u652f\u6301\u57fa\u4e8e DNS \u548c\u57fa\u4e8e RPC \u7684\u670d\u52a1\u53d1\u73b0\u3002\u670d\u52a1\u63d0\u4f9b\u8005\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/sdk"},"\u539f\u751fSDK"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/open-api"},"OpenAPI"),"\u3001\u6216\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/other-language"},"\u72ec\u7acb\u7684Agent TODO"),"\u6ce8\u518c Service \u540e\uff0c\u670d\u52a1\u6d88\u8d39\u8005\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/what-is-nacos"},"DNS TODO")," \u6216",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/open-api"},"HTTP&API"),"\u67e5\u627e\u548c\u53d1\u73b0\u670d\u52a1\u3002"),(0,r.kt)("p",{parentName:"li"},"  Nacos \u63d0\u4f9b\u5bf9\u670d\u52a1\u7684\u5b9e\u65f6\u7684\u5065\u5eb7\u68c0\u67e5\uff0c\u963b\u6b62\u5411\u4e0d\u5065\u5eb7\u7684\u4e3b\u673a\u6216\u670d\u52a1\u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42\u3002Nacos \u652f\u6301\u4f20\u8f93\u5c42 (PING \u6216 TCP)\u548c\u5e94\u7528\u5c42 (\u5982 HTTP\u3001MySQL\u3001\u7528\u6237\u81ea\u5b9a\u4e49\uff09\u7684\u5065\u5eb7\u68c0\u67e5\u3002 \u5bf9\u4e8e\u590d\u6742\u7684\u4e91\u73af\u5883\u548c\u7f51\u7edc\u62d3\u6251\u73af\u5883\u4e2d\uff08\u5982 VPC\u3001\u8fb9\u7f18\u7f51\u7edc\u7b49\uff09\u670d\u52a1\u7684\u5065\u5eb7\u68c0\u67e5\uff0cNacos \u63d0\u4f9b\u4e86 agent \u4e0a\u62a5\u6a21\u5f0f\u548c\u670d\u52a1\u7aef\u4e3b\u52a8\u68c0\u6d4b2\u79cd\u5065\u5eb7\u68c0\u67e5\u6a21\u5f0f\u3002Nacos \u8fd8\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u5065\u5eb7\u68c0\u67e5\u4eea\u8868\u76d8\uff0c\u5e2e\u52a9\u60a8\u6839\u636e\u5065\u5eb7\u72b6\u6001\u7ba1\u7406\u670d\u52a1\u7684\u53ef\u7528\u6027\u53ca\u6d41\u91cf\u3002\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u52a8\u6001\u914d\u7f6e\u670d\u52a1")),(0,r.kt)("p",{parentName:"li"},"  \u52a8\u6001\u914d\u7f6e\u670d\u52a1\u53ef\u4ee5\u8ba9\u60a8\u4ee5\u4e2d\u5fc3\u5316\u3001\u5916\u90e8\u5316\u548c\u52a8\u6001\u5316\u7684\u65b9\u5f0f\u7ba1\u7406\u6240\u6709\u73af\u5883\u7684\u5e94\u7528\u914d\u7f6e\u548c\u670d\u52a1\u914d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u52a8\u6001\u914d\u7f6e\u6d88\u9664\u4e86\u914d\u7f6e\u53d8\u66f4\u65f6\u91cd\u65b0\u90e8\u7f72\u5e94\u7528\u548c\u670d\u52a1\u7684\u9700\u8981\uff0c\u8ba9\u914d\u7f6e\u7ba1\u7406\u53d8\u5f97\u66f4\u52a0\u9ad8\u6548\u548c\u654f\u6377\u3002"),(0,r.kt)("p",{parentName:"li"},"  \u914d\u7f6e\u4e2d\u5fc3\u5316\u7ba1\u7406\u8ba9\u5b9e\u73b0\u65e0\u72b6\u6001\u670d\u52a1\u53d8\u5f97\u66f4\u7b80\u5355\uff0c\u8ba9\u670d\u52a1\u6309\u9700\u5f39\u6027\u6269\u5c55\u53d8\u5f97\u66f4\u5bb9\u6613\u3002"),(0,r.kt)("p",{parentName:"li"},"  Nacos \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u6d01\u6613\u7528\u7684UI (",(0,r.kt)("a",{parentName:"p",href:"http://console.nacos.io/nacos/index.html"},"\u63a7\u5236\u53f0\u6837\u4f8b Demo"),") \u5e2e\u52a9\u60a8\u7ba1\u7406\u6240\u6709\u7684\u670d\u52a1\u548c\u5e94\u7528\u7684\u914d\u7f6e\u3002Nacos \u8fd8\u63d0\u4f9b\u5305\u62ec\u914d\u7f6e\u7248\u672c\u8ddf\u8e2a\u3001\u91d1\u4e1d\u96c0\u53d1\u5e03\u3001\u4e00\u952e\u56de\u6eda\u914d\u7f6e\u4ee5\u53ca\u5ba2\u6237\u7aef\u914d\u7f6e\u66f4\u65b0\u72b6\u6001\u8ddf\u8e2a\u5728\u5185\u7684\u4e00\u7cfb\u5217\u5f00\u7bb1\u5373\u7528\u7684\u914d\u7f6e\u7ba1\u7406\u7279\u6027\uff0c\u5e2e\u52a9\u60a8\u66f4\u5b89\u5168\u5730\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u7ba1\u7406\u914d\u7f6e\u53d8\u66f4\u548c\u964d\u4f4e\u914d\u7f6e\u53d8\u66f4\u5e26\u6765\u7684\u98ce\u9669\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u52a8\u6001 DNS \u670d\u52a1")),(0,r.kt)("p",{parentName:"li"},"  \u52a8\u6001 DNS \u670d\u52a1\u652f\u6301\u6743\u91cd\u8def\u7531\uff0c\u8ba9\u60a8\u66f4\u5bb9\u6613\u5730\u5b9e\u73b0\u4e2d\u95f4\u5c42\u8d1f\u8f7d\u5747\u8861\u3001\u66f4\u7075\u6d3b\u7684\u8def\u7531\u7b56\u7565\u3001\u6d41\u91cf\u63a7\u5236\u4ee5\u53ca\u6570\u636e\u4e2d\u5fc3\u5185\u7f51\u7684\u7b80\u5355DNS\u89e3\u6790\u670d\u52a1\u3002\u52a8\u6001DNS\u670d\u52a1\u8fd8\u80fd\u8ba9\u60a8\u66f4\u5bb9\u6613\u5730\u5b9e\u73b0\u4ee5 DNS \u534f\u8bae\u4e3a\u57fa\u7840\u7684\u670d\u52a1\u53d1\u73b0\uff0c\u4ee5\u5e2e\u52a9\u60a8\u6d88\u9664\u8026\u5408\u5230\u5382\u5546\u79c1\u6709\u670d\u52a1\u53d1\u73b0 API \u4e0a\u7684\u98ce\u9669\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Nacos \u63d0\u4f9b\u4e86\u4e00\u4e9b\u7b80\u5355\u7684 [DNS APIs TODO](/zh-cn/docs/1.X/what-is-nacos) \u5e2e\u52a9\u60a8\u7ba1\u7406\u670d\u52a1\u7684\u5173\u8054\u57df\u540d\u548c\u53ef\u7528\u7684 IP:PORT \u5217\u8868.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u53ca\u5176\u5143\u6570\u636e\u7ba1\u7406")),(0,r.kt)("p",{parentName:"li"},"  Nacos \u80fd\u8ba9\u60a8\u4ece\u5fae\u670d\u52a1\u5e73\u53f0\u5efa\u8bbe\u7684\u89c6\u89d2\u7ba1\u7406\u6570\u636e\u4e2d\u5fc3\u7684\u6240\u6709\u670d\u52a1\u53ca\u5143\u6570\u636e\uff0c\u5305\u62ec\u7ba1\u7406\u670d\u52a1\u7684\u63cf\u8ff0\u3001\u751f\u547d\u5468\u671f\u3001\u670d\u52a1\u7684\u9759\u6001\u4f9d\u8d56\u5206\u6790\u3001\u670d\u52a1\u7684\u5065\u5eb7\u72b6\u6001\u3001\u670d\u52a1\u7684\u6d41\u91cf\u7ba1\u7406\u3001\u8def\u7531\u53ca\u5b89\u5168\u7b56\u7565\u3001\u670d\u52a1\u7684 SLA \u4ee5\u53ca\u6700\u9996\u8981\u7684 metrics \u7edf\u8ba1\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/archive/roadmap"},"\u66f4\u591a\u7684\u7279\u6027\u5217\u8868 ...")))),(0,r.kt)("h2",{id:"nacos-\u5730\u56fe"},"Nacos \u5730\u56fe"),(0,r.kt)("p",null,"\u4e00\u56fe\u770b\u61c2 Nacos\uff0c\u4e0b\u9762\u67b6\u6784\u90e8\u5206\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u3002\n",(0,r.kt)("img",{alt:"nacos_map",src:a(26506).Z,width:"1880",height:"1198"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7279\u6027\u5927\u56fe\uff1a\u8981\u4ece\u529f\u80fd\u7279\u6027\uff0c\u975e\u529f\u80fd\u7279\u6027\uff0c\u5168\u9762\u4ecb\u7ecd\u6211\u4eec\u8981\u89e3\u7684\u95ee\u9898\u57df\u7684\u7279\u6027\u8bc9\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u67b6\u6784\u5927\u56fe\uff1a\u901a\u8fc7\u6e05\u6670\u67b6\u6784\uff0c\u8ba9\u60a8\u5feb\u901f\u8fdb\u5165 Nacos \u4e16\u754c"),(0,r.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u5927\u56fe\uff1a\u5229\u7528\u5f53\u524d\u7279\u6027\u53ef\u4ee5\u652f\u6301\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u53ca\u5176\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6001\u5927\u56fe\uff1a\u7cfb\u7edf\u68b3\u7406 Nacos \u548c\u4e3b\u6d41\u6280\u672f\u751f\u6001\u7684\u5173\u7cfb"),(0,r.kt)("li",{parentName:"ul"},"\u4f18\u52bf\u5927\u56fe\uff1a\u5c55\u793a Nacos \u6838\u5fc3\u7ade\u4e89\u529b"),(0,r.kt)("li",{parentName:"ul"},"\u6218\u7565\u5927\u56fe\uff1a\u8981\u4ece\u6218\u7565\u5230\u6218\u672f\u5c42\u9762\u8bb2 Nacos \u7684\u5b8f\u89c2\u4f18\u52bf")),(0,r.kt)("h2",{id:"nacos-\u751f\u6001\u56fe"},"Nacos \u751f\u6001\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/11189/1533045871534-e64b8031-008c-4dfc-b6e8-12a597a003fb.png",alt:"nacos_landscape.png"})," "),(0,r.kt)("p",null,"\u5982 Nacos \u5168\u666f\u56fe\u6240\u793a\uff0cNacos \u65e0\u7f1d\u652f\u6301\u4e00\u4e9b\u4e3b\u6d41\u7684\u5f00\u6e90\u751f\u6001\uff0c\u4f8b\u5982 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nacos.io/en-us/docs/quick-start-spring-cloud.html"},"Spring Cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/1.X/use-nacos-with-dubbo"},"Apache Dubbo and Dubbo Mesh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/1.X/use-nacos-with-kubernetes"},"Kubernetes and CNCF"),"\u3002")),(0,r.kt)("p",null,"\u4f7f\u7528 Nacos \u7b80\u5316\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u7ba1\u7406\u3001\u670d\u52a1\u6cbb\u7406\u53ca\u7ba1\u7406\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u8ba9\u5fae\u670d\u52a1\u7684\u53d1\u73b0\u3001\u7ba1\u7406\u3001\u5171\u4eab\u3001\u7ec4\u5408\u66f4\u52a0\u5bb9\u6613\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u5728\u8fd9\u4e9b\u751f\u6001\u4e2d\u4f7f\u7528 Nacos\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u6587\u6863\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/archive/use-nacos-with-springcloud"},"Nacos\u4e0eSpring Cloud\u4e00\u8d77\u4f7f\u7528")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/use-nacos-with-kubernetes"},"Nacos\u4e0eKubernetes\u4e00\u8d77\u4f7f\u7528")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/use-nacos-with-dubbo"},"Nacos\u4e0eDubbo\u4e00\u8d77\u4f7f\u7528")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/archive/roadmap"},"Nacos\u4e0egRPC\u4e00\u8d77\u4f7f\u7528")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/archive/use-nacos-with-istio"},"Nacos\u4e0eIstio\u4e00\u8d77\u4f7f\u7528")),(0,r.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,r.kt)("p",null,"\u7ee7\u7eed\u9605\u8bfb ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/quick-start"},"\u5feb\u901f\u5f00\u59cb")," \u4ee5\u5feb\u901f\u4e0a\u624b Nacos\u3002"))}N.isMDXComponent=!0},26506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nacosMap-3c656c929f7f9c46ba81eb46125c51d8.jpg"}}]);