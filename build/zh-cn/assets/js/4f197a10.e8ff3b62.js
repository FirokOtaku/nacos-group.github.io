"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[3014],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(r),m=o,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75843:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u5176\u4ed6\u8bed\u8a00\u7684SDK",keywords:["\u5176\u4ed6\u8bed\u8a00","SDK"],description:"\u5176\u4ed6\u8bed\u8a00\u7684SDK"},c="\u5176\u4ed6\u8bed\u8a00\u7684SDK",i={unversionedId:"v2/guide/user/other-language",id:"version-1.X/v2/guide/user/other-language",title:"\u5176\u4ed6\u8bed\u8a00\u7684SDK",description:"\u5176\u4ed6\u8bed\u8a00\u7684SDK",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.X/v2/guide/user/other-language.md",sourceDirName:"v2/guide/user",slug:"/v2/guide/user/other-language",permalink:"/zh-cn/docs/1.X/v2/guide/user/other-language",draft:!1,tags:[],version:"1.X",frontMatter:{title:"\u5176\u4ed6\u8bed\u8a00\u7684SDK",keywords:["\u5176\u4ed6\u8bed\u8a00","SDK"],description:"\u5176\u4ed6\u8bed\u8a00\u7684SDK"},sidebar:"docs",previous:{title:"Java SDK",permalink:"/zh-cn/docs/1.X/v2/guide/user/sdk"},next:{title:"Open API \u6307\u5357",permalink:"/zh-cn/docs/1.X/v2/guide/user/open-api"}},u={},s=[],p={toc:s},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5176\u4ed6\u8bed\u8a00\u7684sdk"},"\u5176\u4ed6\u8bed\u8a00\u7684SDK"),(0,o.kt)("p",null,"Nacos\u793e\u533a\u5f53\u524d\u4ec5\u63d0\u4f9b\u4e86Java\u7248\u672c\u7684\u5ba2\u6237\u7aef\uff0c\u6211\u4eec\u5c06\u4e3b\u8981\u4f9d\u9760\u793e\u533a\u7684\u8d21\u732e\u6765\u53d1\u5c55\u591a\u8bed\u8a00\u5ba2\u6237\u7aef\u3002\u5728\u672a\u6765\uff0c\u6211\u4eec\u5c06\u5411Nacos\u793e\u533a\u7528\u6237\u63a8\u8350\u90a3\u4e9b\u6700\u88ab\u5e7f\u6cdb\u4f7f\u7528\u7684\u4ee5\u53ca\u652f\u6301\u6700\u597d\u7684\u5ba2\u6237\u7aef\u4f5c\u4e3aNacos\u76f8\u5e94\u8bed\u8a00\u7684\u5b98\u65b9\u7248\u672c\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-sdk-go"},"go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-sdk-cpp"},"cpp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-sdk-python"},"python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-sdk-nodejs"},"nodejs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-sdk-csharp"},"c#")),(0,o.kt)("li",{parentName:"ul"},"more ...")))}d.isMDXComponent=!0}}]);