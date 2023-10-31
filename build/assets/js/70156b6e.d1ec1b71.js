"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u591a\u6570\u636e\u6e90",keywords:["MySQL","Derby","\u591a\u6570\u636e\u6e90"],description:"\u591a\u6570\u636e\u6e90"},i="\u591a\u6570\u636e\u6e90\u63d2\u4ef6",o={unversionedId:"v2/plugin/datasource-plugin",id:"version-2.X/v2/plugin/datasource-plugin",title:"\u591a\u6570\u636e\u6e90",description:"\u591a\u6570\u636e\u6e90",source:"@site/versioned_docs/version-2.X/v2/plugin/datasource-plugin.md",sourceDirName:"v2/plugin",slug:"/v2/plugin/datasource-plugin",permalink:"/docs/v2/plugin/datasource-plugin",draft:!1,tags:[],version:"2.X",frontMatter:{title:"\u591a\u6570\u636e\u6e90",keywords:["MySQL","Derby","\u591a\u6570\u636e\u6e90"],description:"\u591a\u6570\u636e\u6e90"},sidebar:"docs",previous:{title:"\u914d\u7f6e\u52a0\u5bc6",permalink:"/docs/v2/plugin/config-encryption-plugin"},next:{title:"\u8f68\u8ff9\u8ffd\u8e2a",permalink:"/docs/v2/plugin/trace-plugin"}},p={},c=[],u={toc:c},s="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u591a\u6570\u636e\u6e90\u63d2\u4ef6"},"\u591a\u6570\u636e\u6e90\u63d2\u4ef6"),(0,r.kt)("p",null,"Nacos\u4ece2.2.0\u7248\u672c\u5f00\u59cb,\u53ef\u901a\u8fc7SPI\u673a\u5236\u6ce8\u5165\u591a\u6570\u636e\u6e90\u5b9e\u73b0\u63d2\u4ef6,\u5e76\u5728\u5f15\u5165\u5bf9\u5e94\u6570\u636e\u6e90\u5b9e\u73b0\u540e,\u4fbf\u53ef\u5728Nacos\u542f\u52a8\u65f6\u901a\u8fc7\u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u914d\u7f6e\u6587\u4ef6\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"spring.datasource.platform"),"\u914d\u7f6e\u9879\u9009\u62e9\u52a0\u8f7d\u5bf9\u5e94\u591a\u6570\u636e\u6e90\u63d2\u4ef6.\u672c\u6587\u6863\u8be6\u7ec6\u4ecb\u7ecd\u4e00\u4e2a\u591a\u6570\u636e\u6e90\u63d2\u4ef6\u5982\u4f55\u5b9e\u73b0\u4ee5\u53ca\u5982\u4f55\u4f7f\u5176\u751f\u6548\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f:\n\u76ee\u524d\u591a\u6570\u636e\u6e90\u63d2\u4ef6\u5904\u4e8eBeta\u6d4b\u8bd5\u9636\u6bb5,\u5176API\u53ca\u63a5\u53e3\u65b9\u6cd5\u5b9a\u4e49\u53ef\u80fd\u4f1a\u5728\u540e\u7eed\u7248\u672c\u5347\u7ea7\u800c\u6709\u8f83\u5927\u4fee\u6539\uff0c\u8bf7\u6ce8\u610f\u60a8\u7684\u63d2\u4ef6\u9002\u7528\u7248\u672c\u3002")),(0,r.kt)("h1",{id:"\u63d2\u4ef6\u5316\u5b9e\u73b0"},"\u63d2\u4ef6\u5316\u5b9e\u73b0"),(0,r.kt)("p",null,"\u5728\u539f\u6765\u7684Config\u6a21\u5757\u4e2d\uff0c\u6240\u6709\u7684SQL\u64cd\u4f5c\u7684\u6267\u884c\u662f\u901a\u8fc7\u76f4\u63a5\u4f7f\u7528JdbcTemplate\u6267\u884c\u56fa\u5b9aSQL\u8bed\u53e5\u7684\u5f62\u5f0f\uff0c\u4f7f\u5f97SQL\u8bed\u53e5\u4e0e\u4e1a\u52a1\u903b\u8f91\u9ad8\u5ea6\u8026\u5408\uff0c\u5e76\u4e14\u53ea\u652f\u6301Derby\u4e0eMySQL\u4e24\u79cd\u6570\u636e\u6e90\uff0c\u539f\u6709Config\u6a21\u5757\u67b6\u6784\u5982\u4e0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4021).Z,width:"3345",height:"1503"})),(0,r.kt)("p",null,"\u73b0\u5728\u7684\u591a\u6570\u636e\u6e90\u63d2\u4ef6\u901a\u8fc7SPI\u673a\u5236\uff0c\u5c06SQL\u64cd\u4f5c\u6309\u7167\u6570\u636e\u8868\u8fdb\u884c\u62bd\u8c61\u51fa\u591a\u4e2aMapper\u63a5\u53e3\uff0cMapper\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\u9700\u8981\u6309\u7167\u4e0d\u540c\u7684\u6570\u636e\u6e90\u7f16\u5199\u5bf9\u5e94\u7684SQL\u65b9\u8a00\u5b9e\u73b0;\n\u73b0\u5728\u63d2\u4ef6\u9ed8\u8ba4\u63d0\u4f9bDerby\u4ee5\u53caMySQL\u7684Mapper\u5b9e\u73b0\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\uff1b\u800c\u5176\u4ed6\u7684\u6570\u636e\u6e90\u5219\u9700\u8981\u7528\u6237\u4f7f\u7528\u6570\u636e\u6e90\u63d2\u4ef6\u8fdb\u884c\u52a0\u8f7d\uff0c\u5176\u6539\u9020\u540e\u67b6\u6784\u56fe\u5982\u4e0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64076).Z,width:"3345",height:"2337"})),(0,r.kt)("h1",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u6237\u67e5\u8be2\u5f53\u524dNacos\u662f\u5426\u652f\u6301\u6240\u9700\u6570\u636e\u6e90\uff0cNacos\u9ed8\u8ba4\u63d0\u4f9bDerby\u4ee5\u53caMySQL\u7684\u5b9e\u73b0\uff0c\u82e5\u6682\u672a\u652f\u6301\u53ef\u53c2\u8003\u4e0b\u9762\u63d2\u4ef6\u7f16\u5199\u8005\u5982\u4f55\u5f00\u53d1\u6b65\u9aa4\u5f00\u53d1\u63d2\u4ef6\u81ea\u5df1\u4f7f\u7528\u6216\u8d21\u732e\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"application.properties"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"spring.datasource.platform"),"\u4fee\u6539\u4e3a\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u540d\u79f0\uff0c\u5e76\u914d\u7f6e\u6570\u636e\u6e90\u76f8\u5173\u53c2\u6570\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e\u7f16\u8bd1\u8fd0\u884c\u5219\u53ef\u652f\u6301\u6b64\u6570\u636e\u6e90\uff1b")),(0,r.kt)("h1",{id:"\u63d2\u4ef6\u7f16\u5199\u8005\u5982\u4f55\u5f00\u53d1"},"\u63d2\u4ef6\u7f16\u5199\u8005\u5982\u4f55\u5f00\u53d1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f15\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"nacos-datasource-plugin"),"\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"li"},"com.alibaba.nacos.plugin.datasource.mapper"),"\u5305\u4e0b\u6570\u636e\u8868\u5bf9\u5e94Mapper\u63a5\u53e3\u4e2d\u7684\u7279\u6b8aSQL\u65b9\u6cd5\uff0c\u4e3b\u8981\u662f\u6d89\u53ca\u5206\u9875\u7b49\u65b9\u8a00\u5dee\u522b\uff0c\u53ef\u53c2\u8003",(0,r.kt)("inlineCode",{parentName:"li"},"com.alibaba.nacos.plugin.datasource.impl"),"\u4e0bDerby\u4ee5\u53caMySQL\u7684\u5b9e\u73b0\uff0c\u53ea\u9700\u5b9e\u73b0\u5bf9\u5e94\u63a5\u53e3\u5373\u53ef\u3002\u63a5\u53e3\u4e0e\u8868\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8868"),(0,r.kt)("th",{parentName:"tr",align:null},"Mapper"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config_info_aggr"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigInfoAggrMapper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config_info_beta"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigInfoBetaMapper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config_info"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigInfoMapper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config_info_tag"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigInfoTagMapper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config_tags_relation"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigTagsRelationMapper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"his_config_info"),(0,r.kt)("td",{parentName:"tr",align:null},"HistoryConfigInfoMapper")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u7f16\u5199SPI\u914d\u7f6e\u6587\u4ef6\uff0c\u5176\u540d\u5b57\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"com.alibaba.nacos.plugin.datasource.mapper.Mapper"),"\uff0c\u5199\u5165\u5b9e\u73b0Mapper\u63a5\u53e3\u7684\u7c7b\uff0c\u53ef\u53c2\u8003config\u6a21\u5757\u4e2dDerby\u4e0eMySQL\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u63d2\u4ef6\u4f7f\u7528\u8005\u5219\u53ef\u4ee5\u901a\u8fc7\u4f9d\u8d56\u6b64\u63d2\u4ef6\uff0c\u8fbe\u5230\u5b9e\u73b0\u5bf9\u5e94\u6570\u636e\u6e90\u64cd\u4f5c\u7684\u6548\u679c"),(0,r.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u8fd0\u884c")),(0,r.kt)("h1",{id:"\u5982\u4f55\u7f16\u8bd1"},"\u5982\u4f55\u7f16\u8bd1"),(0,r.kt)("p",null,"\u7f16\u8bd1\u63d2\u4ef6\u4e4b\u524d\u9700\u8981\u5148\u7f16\u8bd1",(0,r.kt)("inlineCode",{parentName:"p"},"nacos"),"\u5e76\u5b89\u88c5\u81f3\u672c\u5730\u4ed3\u5e93."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"git clone ",(0,r.kt)("a",{parentName:"li",href:"mailto:git@github.com"},"git@github.com"),":alibaba/nacos.git"),(0,r.kt)("li",{parentName:"ol"},"cd nacos && mvn -B clean package install -Dmaven.test.skip=true")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u82e5\u51fa\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"revision"),"\u53d8\u91cf\u65e0\u6cd5\u89e3\u6790,\u8bf7\u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"maven"),"\u81f3\u6700\u65b0\u7248\u672c")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"git clone #{\u5bf9\u5e94\u6570\u636e\u6e90\u63d2\u4ef6\u5b9e\u73b0Git\u5730\u5740}"),(0,r.kt)("li",{parentName:"ol"},"mvn install")),(0,r.kt)("p",null,"\u5efa\u8bae\u4e0a\u4f20\u5230\u516c\u53f8\u7684maven\u4ed3\u5e93"),(0,r.kt)("h1",{id:"\u672a\u6765\u65b9\u6848"},"\u672a\u6765\u65b9\u6848"),(0,r.kt)("p",null,"\u672a\u6765\u7684\u7248\u672c\u66f4\u65b0\u5982\u4e0b:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u7ee7\u7eed\u7ec6\u5206SQL\uff0c\u5728\u73b0\u6709\u7684\u57fa\u7840\u4e0a\uff0c\u51cf\u5c11SQL\u8bed\u53e5\u7684\u540c\u65f6\uff0c\u5bf9\u52a8\u6001SQL\u7684\u5b9e\u73b0\u66f4\u52a0\u53cb\u597d\uff1b"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u62bd\u79bb\u4e0d\u540c\u6570\u636e\u6e90\u4e4b\u95f4\u7684\u5dee\u5f02\u5217\u8868\uff0c\u5e76\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u6216\u914d\u7f6e\u7c7b\u7684\u65b9\u5f0f\u8fdb\u884c\u5dee\u5f02\u5217\u8868\u7684\u66ff\u6362\uff0c\u65b9\u4fbf\u63d2\u4ef6\u7f16\u5199\u8005\u7f16\u5199\u63d2\u4ef6\uff1b")),(0,r.kt)("h1",{id:"\u5176\u4ed6\u6570\u636e\u6e90\u7684\u5b9e\u73b0"},"\u5176\u4ed6\u6570\u636e\u6e90\u7684\u5b9e\u73b0"),(0,r.kt)("p",null,"\u5f85\u8865\u5145"))}m.isMDXComponent=!0},64076:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/config-datasource-plugin-505efe2fa24d4d0687d490084be0dda0.png"},4021:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/config-old-datasource-983c43e3f82b50d3a802b6f400e0f715.png"}}]);