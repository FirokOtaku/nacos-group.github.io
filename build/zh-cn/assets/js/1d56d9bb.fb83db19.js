"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[919],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(a),k=l,N=s["".concat(p,".").concat(k)]||s[k]||m[k]||r;return a?n.createElement(N,i(i({ref:t},u),{},{components:a})):n.createElement(N,i({ref:t},u))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},84204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u4e3a Nacos \u505a\u8d21\u732e",keywords:["Nacos","\u8d21\u732e"],description:"\u6b22\u8fce\u6765\u5230Nacos\uff01\u672c\u6587\u6863\u662f\u5173\u4e8e\u5982\u4f55\u4e3aNacos\u505a\u51fa\u8d21\u732e\u7684\u6307\u5357\u3002"},i="\u4e3a Nacos \u505a\u8d21\u732e",o={unversionedId:"archive/contributing-dev",id:"version-1.X/archive/contributing-dev",title:"\u4e3a Nacos \u505a\u8d21\u732e",description:"\u6b22\u8fce\u6765\u5230Nacos\uff01\u672c\u6587\u6863\u662f\u5173\u4e8e\u5982\u4f55\u4e3aNacos\u505a\u51fa\u8d21\u732e\u7684\u6307\u5357\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.X/archive/contributing-dev.md",sourceDirName:"archive",slug:"/archive/contributing-dev",permalink:"/zh-cn/docs/1.X/archive/contributing-dev",draft:!1,tags:[],version:"1.X",frontMatter:{title:"\u4e3a Nacos \u505a\u8d21\u732e",keywords:["Nacos","\u8d21\u732e"],description:"\u6b22\u8fce\u6765\u5230Nacos\uff01\u672c\u6587\u6863\u662f\u5173\u4e8e\u5982\u4f55\u4e3aNacos\u505a\u51fa\u8d21\u732e\u7684\u6307\u5357\u3002"}},p={},c=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",level:2},{value:"\u884c\u4e3a\u5b88\u5219",id:"\u884c\u4e3a\u5b88\u5219",level:3},{value:"\u8d21\u732e\u548cNacos\u793e\u533a\u6784\u6210",id:"\u8d21\u732e\u548cnacos\u793e\u533a\u6784\u6210",level:2},{value:"\u6253\u5f00/\u63d0\u53d6\u51c6\u5907\u95ee\u9898",id:"\u6253\u5f00\u63d0\u53d6\u51c6\u5907\u95ee\u9898",level:4},{value:"\u5f00\u59cb\u4f60\u7684\u8d21\u732e",id:"\u5f00\u59cb\u4f60\u7684\u8d21\u732e",level:4},{value:"\u4ee3\u7801\u5ba1\u67e5\u6307\u5357",id:"\u4ee3\u7801\u5ba1\u67e5\u6307\u5357",level:3},{value:"\u73b0\u5728\u5c1d\u8bd5\u6210\u4e3a\u4e00\u4e2aCommitter\u600e\u4e48\u6837\uff1f",id:"\u73b0\u5728\u5c1d\u8bd5\u6210\u4e3a\u4e00\u4e2acommitter\u600e\u4e48\u6837",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e3a-nacos-\u505a\u8d21\u732e"},"\u4e3a Nacos \u505a\u8d21\u732e"),(0,l.kt)("p",null,"\u6b22\u8fce\u6765\u5230Nacos\uff01\u672c\u6587\u6863\u662f\u5173\u4e8e\u5982\u4f55\u4e3aNacos\u505a\u51fa\u8d21\u732e\u7684\u6307\u5357\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u53d1\u73b0\u4e0d\u6b63\u786e\u6216\u9057\u5931\u7684\u5185\u5bb9\uff0c\u8bf7\u7559\u4e0b\u610f\u89c1/\u5efa\u8bae\u3002"),(0,l.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,l.kt)("h3",{id:"\u884c\u4e3a\u5b88\u5219"},"\u884c\u4e3a\u5b88\u5219"),(0,l.kt)("p",null,"\u8bf7\u52a1\u5fc5\u9605\u8bfb\u5e76\u9075\u5b88\u6211\u4eec\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/blob/master/CODE_OF_CONDUCT.md"},"\u884c\u4e3a\u51c6\u5219"),"\u3002"),(0,l.kt)("h2",{id:"\u8d21\u732e\u548cnacos\u793e\u533a\u6784\u6210"},"\u8d21\u732e\u548cNacos\u793e\u533a\u6784\u6210"),(0,l.kt)("p",null,"Nacos\u6b22\u8fce\u4efb\u4f55\u89d2\u8272\u7684\u65b0\u53c2\u4e0e\u8005\uff0c\u5305\u62ec\u7528\u6237\uff0c\u8d21\u732e\u8005\uff0c\u63d0\u4ea4\u8005\u548cPMC\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://acm-public.oss-cn-hangzhou.aliyuncs.com/contributor_definition.png",alt:null})),(0,l.kt)("p",null,"\u6211\u4eec\u9f13\u52b1\u65b0\u6765\u8005\u79ef\u6781\u53c2\u4e0eNacos\u793e\u533a\uff0c\u793e\u533a\u6709\u4e00\u5957\u673a\u5236\u53ef\u4ee5\u4f7f\u60a8\uff0c\u4ece\u7528\u6237\u89d2\u8272\u5230\u63d0\u4ea4\u8005\u89d2\u8272\uff0c\u751a\u81f3\u662fPMC\u89d2\u8272\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0c\u65b0\u6765\u8005\u9700\u8981\u79ef\u6781\u53c2\u4e0eNacos\u793e\u533a\u3002\u4ee5\u4e0b\u6bb5\u843d\u4ecb\u7ecd\u4e86\u5982\u4f55\u4e3aNacos\u505a\u51fa\u8d21\u732e\u5e76\u4e14\u664b\u5347\u793e\u533a\u89d2\u8272\u3002"),(0,l.kt)("h4",{id:"\u6253\u5f00\u63d0\u53d6\u51c6\u5907\u95ee\u9898"},"\u6253\u5f00/\u63d0\u53d6\u51c6\u5907\u95ee\u9898"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5728\u6587\u6863\u4e2d\u53d1\u73b0\u62fc\u5199\u9519\u8bef\uff0c\u5728\u4ee3\u7801\u4e2d\u53d1\u73b0\u9519\u8bef\uff0c\u6216\u60f3\u8981\u65b0\u529f\u80fd\u6216\u60f3\u8981\u63d0\u4f9b\u5efa\u8bae\uff0c\u60a8\u53ef\u4ee5",(0,l.kt)("a",{parentName:"p",href:"https://github.com/alibaba/Nacos/issues/new"},"\u5728GitHub\u4e0a\u6253\u5f00\u4e00\u4e2a\u95ee\u9898"),"\u62a5\u544a\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5f00\u59cb\u7740\u624b\uff0c\u53ef\u4ee5\u9009\u62e9github\u4ed3\u5e93\u4e2d\u6709\u4ee5\u4e0b\u6807\u7b7e\u7684issues\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/labels/good%20first%20issue"},"good first issue"),"\uff1a\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\u662f\u975e\u5e38\u597d\u7684\u5165\u95e8issues\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/labels/contribution%20%E6%AC%A2%E8%BF%8E"},"contribution welcome"),"\uff1a\u975e\u5e38\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\u548c\u975e\u5e38\u91cd\u8981\u7684\u6a21\u5757\uff0c\u4f46\u76ee\u524d\u7f3a\u5c11\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u8d21\u732e\u8005\u6765\u8d21\u732e\u3002")),(0,l.kt)("p",null,"\u6211\u4eec\u975e\u5e38\u91cd\u89c6\u6587\u6863\u4ee5\u53ca\u4e0eSpring Cloud\uff0cKubernetes\uff0cDubbo\u7b49\u5176\u4ed6\u9879\u76ee\u7684\u96c6\u6210\u3002\u6211\u4eec\u5f88\u5e0c\u671b\u80fd\u591f\u5c31\u8fd9\u4e9b\u65b9\u9762\u7684\u4efb\u4f55\u95ee\u9898\u8fdb\u884c\u7814\u7a76\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4efb\u4f55PR\uff08Pull Request\uff09\u5fc5\u987b\u4e0e\u6709\u6548issues\u76f8\u5173\u8054\u3002\u5426\u5219PR\u5c06\u88ab\u6253\u56de\u3002"),(0,l.kt)("h4",{id:"\u5f00\u59cb\u4f60\u7684\u8d21\u732e"},"\u5f00\u59cb\u4f60\u7684\u8d21\u732e"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u60a8\u60f3\u8d21\u732e\uff0c\u8bf7\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u62c9\u53d6\u8bf7\u6c42\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"develop"),"\u5206\u652f\u4f5c\u4e3a\u5f00\u53d1\u5206\u652f\uff0c\u8fd9\u8868\u660e\u8fd9\u662f\u4e00\u4e2a\u4e0d\u7a33\u5b9a\u7684\u5206\u652f\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u7684\u5206\u652f\u6a21\u578b\u7b26\u5408",(0,l.kt)("a",{parentName:"p",href:"https://nvie.com/posts/a-successful-git-branching-model"},"https://nvie.com/posts/a-successful-git-branching-model/"),"\u3002\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u65b0\u6210\u5458\u5728\u521b\u5efaPR\u4e4b\u524d\u5b8c\u6210\u4e0a\u8ff0\u6587\u7ae0\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u60a8\u51c6\u5907\u521b\u5efaPR\uff0c\u8fd9\u91cc\u662f\u8d21\u732e\u8005\u7684\u5de5\u4f5c\u6d41\u7a0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"fork Nacos\u4ed3\u5e93\u5230\u4f60\u7684github\u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u514b\u9686fork\u5230\u672c\u5730\u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f\u5e76\u8fdb\u884c\u5904\u7406")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fdd\u6301\u5206\u652f\u540c\u6b65")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u60a8\u7684\u66f4\u6539\uff08\u786e\u4fdd\u60a8\u7684\u63d0\u4ea4\u6d88\u606f\u7b80\u660e\u627c\u8981\uff09")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u63d0\u4ea4\u63a8\u9001\u5230\u4f60\u7684github\u8fdc\u7a0b\u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u6307\u5411",(0,l.kt)("strong",{parentName:"p"},"\u5f00\u53d1"),"\u5206\u652f\u7684Pull Request"))),(0,l.kt)("p",null,"\u521b\u5efaPull Request\u65f6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u9075\u5faa",(0,l.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/blob/master/.github/PULL_REQUEST_TEMPLATE.md"},"\u62c9\u53d6\u8bf7\u6c42\u6a21\u677f"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u521b\u5efa",(0,l.kt)("strong",{parentName:"p"},"\u5f00\u53d1"),"\u5206\u652f\u7684\u8bf7\u6c42\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u786e\u4fddPR\u6709\u76f8\u5e94\u7684\u95ee\u9898\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u7684PR\u5305\u542b\u5927\u91cf\u66f4\u6539\uff0c\u4f8b\u5982\u7ec4\u4ef6\u91cd\u6784\u6216\u65b0\u7ec4\u4ef6\uff0c\u8bf7\u5199\u4e0b\u6709\u5173\u5176\u8bbe\u8ba1\u548c\u4f7f\u7528\u7684\u8be6\u7ec6\u6587\u6863\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u6ce8\u610f\uff0c\u5355\u4e2aPR\u4e0d\u5e94\u8be5\u592a\u5927\u3002\u5982\u679c\u9700\u8981\u8fdb\u884c\u5927\u91cf\u66f4\u6539\uff0c\u6700\u597d\u5c06\u66f4\u6539\u5206\u6210\u51e0\u4e2a\u5355\u72ec\u7684PR\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efaPR\u540e\uff0c\u5c06\u4e3a\u62c9\u53d6\u8bf7\u6c42\u5206\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u5ba1\u9605\u8005\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u5408\u5e76PR\u4e4b\u524d\uff0c\u8bf7\u6ce8\u610f\u5408\u5e76\u63d0\u4ea4\u8282\u70b9\uff08git commit\uff09\uff0c\u5305\u62ec\u4fee\u590d\u5ba1\u6838\u53cd\u9988\uff0c\u62fc\u5199\u9519\u8bef\uff0c\u5408\u5e76\u3002\u6700\u7ec8\u63d0\u4ea4\u6d88\u606f\u5e94\u8be5\u6e05\u6670\u7b80\u6d01\u3002"))),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u7684PR\u5305\u542b\u5927\u91cf\u66f4\u6539\uff0c\u4f8b\u5982\u7ec4\u4ef6\u91cd\u6784\u6216\u65b0\u7ec4\u4ef6\uff0c\u8bf7\u5199\u4e0b\u6709\u5173\u5176\u8bbe\u8ba1\u548c\u4f7f\u7528\u7684\u8be6\u7ec6\u6587\u6863\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801\u5ba1\u67e5\u6307\u5357"},"\u4ee3\u7801\u5ba1\u67e5\u6307\u5357"),(0,l.kt)("p",null,"\u63d0\u4ea4\u8005\u5c06\u8f6e\u6d41\u5ba1\u67e5\u4ee3\u7801\uff0c\u4ee5\u786e\u4fdd\u5728\u5408\u5e76\u4e4b\u524d\u53ca\u65f6\u5ba1\u6838\u6240\u6709PR\u4ee5\u53ca\u81f3\u5c11\u4e00\u4e2a\u63d0\u4ea4\u8005\u3002\u5982\u679c\u6211\u4eec\u4e0d\u505a\u6211\u4eec\u7684\u5de5\u4f5c\uff08\u6709\u65f6\u6211\u4eec\u653e\u5f03\u7684\u4e1c\u897f\uff09\u3002\u548c\u5f80\u5e38\u4e00\u6837\uff0c\u6211\u4eec\u6b22\u8fce\u5fd7\u613f\u8005\u8fdb\u884c\u4ee3\u7801\u5ba1\u67e5\u3002"),(0,l.kt)("p",null,"\u4e00\u4e9b\u539f\u5219\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u8bfb\u6027 - \u91cd\u8981\u7684\u4ee3\u7801\u5e94\u8be5\u6709\u8be6\u7ec6\u8bb0\u5f55\u3002 API\u5e94\u8be5\u6709Javadoc\u3002\u4ee3\u7801\u6837\u5f0f\u5e94\u7b26\u5408\u73b0\u6709\u4ee3\u7801\u6837\u5f0f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f18\u96c5\uff1a\u65b0\u529f\u80fd\uff0c\u7c7b\u6216\u7ec4\u4ef6\u5e94\u7cbe\u5fc3\u8bbe\u8ba1\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u6d4b\u8bd5\u6027 - \u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u5e94\u6db5\u76d680\uff05\u7684\u65b0\u4ee3\u7801\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u7ef4\u62a4\u6027 - \u9075\u5b88\u6211\u4eec\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/blob/master/style/codeStyle.md"},"\u4ee3\u7801\u89c4\u7ea6")," \uff0c\u81f3\u5c11\u5e94\u4fdd\u63013\u4e2a\u6708\u7684\u9891\u7387\u66f4\u65b0\u3002"))),(0,l.kt)("h3",{id:"\u73b0\u5728\u5c1d\u8bd5\u6210\u4e3a\u4e00\u4e2acommitter\u600e\u4e48\u6837"},"\u73b0\u5728\u5c1d\u8bd5\u6210\u4e3a\u4e00\u4e2aCommitter\u600e\u4e48\u6837\uff1f"),(0,l.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u8d21\u732e8\u4e2a\u975e\u5e73\u51e1\u7684\u8865\u4e01\u5e76\u8ba9\u81f3\u5c11\u4e09\u4e2a\u4e0d\u540c\u7684\u4eba\u6765\u5ba1\u67e5\u5b83\u4eec\uff08\u4f60\u9700\u8981\u4e09\u4e2a\u4eba\u6765\u652f\u6301\u4f60\uff09\u3002\u7136\u540e\u8bf7\u522b\u4eba\u63d0\u540d\u4f60\u3002\u4f60\u6b63\u5728\u5c55\u793a\u4f60\u7684\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u81f3\u5c118\u4e2aPR\u4ee5\u53ca\u4e0e\u9879\u76ee\u76f8\u5173\u7684\u95ee\u9898\uff0c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0e\u56e2\u961f\u534f\u4f5c\u7684\u80fd\u529b\uff0c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e86\u89e3\u9879\u76ee\u7684\u4ee3\u7801\u5e93\u548c\u7f16\u7801\u98ce\u683c\uff0c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7f16\u5199\u4f18\u79c0\u4ee3\u7801\u7684\u80fd\u529b\uff08\u5e76\u975e\u6700\u4e0d\u91cd\u8981\uff09"))),(0,l.kt)("p",null,"\u5f53\u524d\u7684\u63d0\u4ea4\u8005\u901a\u8fc7\u6807\u7b7e\u201c\u63d0\u540d\u201d\u5728Nacos issues\u91cc\u8fb9\uff0c\u8ba9\u793e\u533a\u4e86\u89e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f60\u7684\u540d\u5b57\u548c\u59d3\u6c0f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6307\u5411\u60a8\u7684Git\u4e2a\u4eba\u8d44\u6599\u7684\u94fe\u63a5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u89e3\u91ca\u4e3a\u4ec0\u4e48\u4f60\u5e94\u8be5\u6210\u4e3a\u4e00\u540d\u63d0\u4ea4\u8005\uff0c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8be6\u7ec6\u8bf4\u660e\u60a8\u63d0\u4ea4\u7684\u524d\u4e09\u7684PR\u548c\u76f8\u5173issues"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://acm-public.oss-cn-hangzhou.aliyuncs.com/nomination_process.png",alt:null})))}m.isMDXComponent=!0}}]);