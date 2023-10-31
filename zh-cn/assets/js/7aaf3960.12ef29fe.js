"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[9814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Nacos \u878d\u5408 Spring Cloud\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",keywords:["Nacos","Spring Cloud"],description:"\u672c\u6587\u4e3b\u8981\u9762\u5411 Spring Cloud \u7684\u4f7f\u7528\u8005\uff0c\u901a\u8fc7\u793a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Nacos \u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u53d1\u73b0"},i="Nacos \u878d\u5408 Spring Cloud\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",l={unversionedId:"v2/ecology/use-nacos-with-spring-cloud",id:"version-2.X/v2/ecology/use-nacos-with-spring-cloud",title:"Nacos \u878d\u5408 Spring Cloud\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",description:"\u672c\u6587\u4e3b\u8981\u9762\u5411 Spring Cloud \u7684\u4f7f\u7528\u8005\uff0c\u901a\u8fc7\u793a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Nacos \u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u53d1\u73b0",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-2.X/v2/ecology/use-nacos-with-spring-cloud.md",sourceDirName:"v2/ecology",slug:"/v2/ecology/use-nacos-with-spring-cloud",permalink:"/zh-cn/docs/v2/ecology/use-nacos-with-spring-cloud",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos \u878d\u5408 Spring Cloud\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",keywords:["Nacos","Spring Cloud"],description:"\u672c\u6587\u4e3b\u8981\u9762\u5411 Spring Cloud \u7684\u4f7f\u7528\u8005\uff0c\u901a\u8fc7\u793a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Nacos \u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u53d1\u73b0"},sidebar:"docs",previous:{title:"Nacos \u878d\u5408 Spring Boot\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/docs/v2/ecology/use-nacos-with-spring-boot"},next:{title:"NacosSync \u7528\u6237\u624b\u518c",permalink:"/zh-cn/docs/v2/ecology/use-nacos-sync"}},p={},c=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u542f\u52a8\u914d\u7f6e\u7ba1\u7406",id:"\u542f\u52a8\u914d\u7f6e\u7ba1\u7406",level:2},{value:"\u542f\u52a8\u670d\u52a1\u53d1\u73b0",id:"\u542f\u52a8\u670d\u52a1\u53d1\u73b0",level:2},{value:"\u76f8\u5173\u9879\u76ee",id:"\u76f8\u5173\u9879\u76ee",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-\u878d\u5408-spring-cloud\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3"},"Nacos \u878d\u5408 Spring Cloud\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3"),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u9762\u5411 ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-cloud"},"Spring Cloud")," \u7684\u4f7f\u7528\u8005\uff0c\u901a\u8fc7\u4e24\u4e2a\u793a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Nacos \u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e Nacos Spring Cloud \u7684\u8be6\u7ec6\u6587\u6863\u8bf7\u53c2\u770b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/Nacos-config"},"Nacos Config")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/Nacos-discovery"},"Nacos Discovery"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Nacos Server \u548c spring-cloud-starter-alibaba-nacos-config \u5b9e\u73b0\u914d\u7f6e\u7684\u52a8\u6001\u53d8\u66f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Nacos Server \u548c spring-cloud-starter-alibaba-nacos-discovery \u5b9e\u73b0\u670d\u52a1\u7684\u6ce8\u518c\u4e0e\u53d1\u73b0\u3002")),(0,r.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u5148\u4e0b\u8f7d Nacos \u5e76\u542f\u52a8 Nacos server\u3002\u64cd\u4f5c\u6b65\u9aa4\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/v2/quickstart/quick-start"},"Nacos \u5feb\u901f\u5165\u95e8")),(0,r.kt)("h2",{id:"\u542f\u52a8\u914d\u7f6e\u7ba1\u7406"},"\u542f\u52a8\u914d\u7f6e\u7ba1\u7406"),(0,r.kt)("p",null,"\u542f\u52a8\u4e86 Nacos server \u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\uff0c\u4e3a\u60a8\u7684 Spring Cloud \u5e94\u7528\u542f\u52a8 Nacos \u914d\u7f6e\u7ba1\u7406\u670d\u52a1\u4e86\u3002\u5b8c\u6574\u793a\u4f8b\u4ee3\u7801\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-cloud-example/nacos-spring-cloud-config-example"},"nacos-spring-cloud-config-example")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4f9d\u8d56\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>\n    <version>${latest.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u7248\u672c ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-config"},"2.1.x.RELEASE")," \u5bf9\u5e94\u7684\u662f Spring Boot 2.1.x \u7248\u672c\u3002\u7248\u672c ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-config"},"2.0.x.RELEASE")," \u5bf9\u5e94\u7684\u662f Spring Boot 2.0.x \u7248\u672c\uff0c\u7248\u672c ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-config"},"1.5.x.RELEASE")," \u5bf9\u5e94\u7684\u662f Spring Boot 1.5.x \u7248\u672c\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"\u7248\u672c\u8bf4\u660e Wiki")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap.properties")," \u4e2d\u914d\u7f6e Nacos server \u7684\u5730\u5740\u548c\u5e94\u7528\u540d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spring.cloud.nacos.config.server-addr=127.0.0.1:8848\n\nspring.application.name=example\n")),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u4e4b\u6240\u4ee5\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"spring.application.name")," \uff0c\u662f\u56e0\u4e3a\u5b83\u662f\u6784\u6210 Nacos \u914d\u7f6e\u7ba1\u7406 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataId"),"\u5b57\u6bb5\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u5728 Nacos Spring Cloud \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"dataId")," \u7684\u5b8c\u6574\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"${prefix}-${spring.profiles.active}.${file-extension}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefix"),"\xa0\u9ed8\u8ba4\u4e3a\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"spring.application.name"),"\xa0\u7684\u503c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"spring.cloud.nacos.config.prefix"),"\u6765\u914d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spring.profiles.active"),"\xa0\u5373\u4e3a\u5f53\u524d\u73af\u5883\u5bf9\u5e94\u7684 profile\uff0c\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003\xa0",(0,r.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-profiles.html#boot-features-profiles"},"Spring Boot\u6587\u6863"),"\u3002\n",(0,r.kt)("strong",{parentName:"li"},"\u6ce8\u610f\uff1a\u5f53 ",(0,r.kt)("inlineCode",{parentName:"strong"},"spring.profiles.active")," \u4e3a\u7a7a\u65f6\uff0c\u5bf9\u5e94\u7684\u8fde\u63a5\u7b26\xa0",(0,r.kt)("inlineCode",{parentName:"strong"},"-"),"\xa0\u4e5f\u5c06\u4e0d\u5b58\u5728\uff0cdataId \u7684\u62fc\u63a5\u683c\u5f0f\u53d8\u6210\xa0",(0,r.kt)("inlineCode",{parentName:"strong"},"${prefix}.${file-extension}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file-exetension"),"\xa0\u4e3a\u914d\u7f6e\u5185\u5bb9\u7684\u6570\u636e\u683c\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"spring.cloud.nacos.config.file-extension")," \u6765\u914d\u7f6e\u3002\u76ee\u524d\u53ea\u652f\u6301\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"properties")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"yaml"),"\xa0\u7c7b\u578b\u3002")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 Spring Cloud \u539f\u751f\u6ce8\u89e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"@RefreshScope")," \u5b9e\u73b0\u914d\u7f6e\u81ea\u52a8\u66f4\u65b0\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@RestController\n@RequestMapping("/config")\n@RefreshScope\npublic class ConfigController {\n\n    @Value("${useLocalCache:false}")\n    private boolean useLocalCache;\n\n    @RequestMapping("/get")\n    public boolean get() {\n        return useLocalCache;\n    }\n}\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u901a\u8fc7\u8c03\u7528 ",(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/v2/guide/user/open-api"},"Nacos Open API")," \u5411 Nacos Server \u53d1\u5e03\u914d\u7f6e\uff1adataId \u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"example.properties"),"\uff0c\u5185\u5bb9\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"useLocalCache=true"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=example.properties&group=DEFAULT_GROUP&content=useLocalCache=true"\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"NacosConfigApplication"),"\uff0c\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"curl http://localhost:8080/config/get"),"\uff0c\u8fd4\u56de\u5185\u5bb9\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u518d\u6b21\u8c03\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/v2/guide/user/open-api"},"Nacos Open API")," \u5411 Nacos server \u53d1\u5e03\u914d\u7f6e\uff1adataId \u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"example.properties"),"\uff0c\u5185\u5bb9\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"useLocalCache=false")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=example.properties&group=DEFAULT_GROUP&content=useLocalCache=false"\n')),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"\u518d\u6b21\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/config/get"),"\uff0c\u6b64\u65f6\u8fd4\u56de\u5185\u5bb9\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u8bf4\u660e\u7a0b\u5e8f\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"useLocalCache"),"\u503c\u5df2\u7ecf\u88ab\u52a8\u6001\u66f4\u65b0\u4e86\u3002")),(0,r.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1\u53d1\u73b0"},"\u542f\u52a8\u670d\u52a1\u53d1\u73b0"),(0,r.kt)("p",null,"\u672c\u8282\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"echo service")," \u6f14\u793a\u5982\u4f55\u5728\u60a8\u7684 Spring Cloud \u9879\u76ee\u4e2d\u542f\u7528 Nacos \u7684\u670d\u52a1\u53d1\u73b0\u529f\u80fd\uff0c\u5982\u4e0b\u56fe\u793a:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15914/1542119181336-b6dc0fc1-ed46-43a7-9e5f-68c9ca344d60.png",alt:"echo service"})),(0,r.kt)("p",null,"\u5b8c\u6574\u793a\u4f8b\u4ee3\u7801\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-cloud-example/nacos-spring-cloud-discovery-example"},"nacos-spring-cloud-discovery-example")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4f9d\u8d56\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n    <version>${latest.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u7248\u672c ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-discovery"},"2.1.x.RELEASE")," \u5bf9\u5e94\u7684\u662f Spring Boot 2.1.x \u7248\u672c\u3002\u7248\u672c ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-discovery"},"2.0.x.RELEASE")," \u5bf9\u5e94\u7684\u662f Spring Boot 2.0.x \u7248\u672c\uff0c\u7248\u672c ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-discovery"},"1.5.x.RELEASE")," \u5bf9\u5e94\u7684\u662f Spring Boot 1.5.x \u7248\u672c\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"\u7248\u672c\u8bf4\u660e Wiki")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u670d\u52a1\u63d0\u4f9b\u8005\uff0c\u4ece\u800c\u670d\u52a1\u63d0\u4f9b\u8005\u53ef\u4ee5\u901a\u8fc7 Nacos \u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u529f\u80fd\u5c06\u5176\u670d\u52a1\u6ce8\u518c\u5230 Nacos server \u4e0a\u3002"),(0,r.kt)("p",{parentName:"li"},"i. \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," \u4e2d\u914d\u7f6e Nacos server \u7684\u5730\u5740\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server.port=8070\nspring.application.name=service-provider\n\nspring.cloud.nacos.discovery.server-addr=127.0.0.1:8848\n")),(0,r.kt)("p",null,"ii. \u901a\u8fc7 Spring Cloud \u539f\u751f\u6ce8\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableDiscoveryClient")," \u5f00\u542f\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u529f\u80fd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@SpringBootApplication\n@EnableDiscoveryClient\npublic class NacosProviderApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(NacosProviderApplication.class, args);\n    }\n\n    @RestController\n    class EchoController {\n        @RequestMapping(value = "/echo/{string}", method = RequestMethod.GET)\n        public String echo(@PathVariable String string) {\n            return "Hello Nacos Discovery " + string;\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u670d\u52a1\u6d88\u8d39\u8005\uff0c\u4ece\u800c\u670d\u52a1\u6d88\u8d39\u8005\u53ef\u4ee5\u901a\u8fc7 Nacos \u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u529f\u80fd\u4ece Nacos server \u4e0a\u83b7\u53d6\u5230\u5b83\u8981\u8c03\u7528\u7684\u670d\u52a1\u3002")),(0,r.kt)("p",null,"i. \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," \u4e2d\u914d\u7f6e Nacos server \u7684\u5730\u5740\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server.port=8080\nspring.application.name=service-consumer\n\nspring.cloud.nacos.discovery.server-addr=127.0.0.1:8848\n")),(0,r.kt)("p",null,"ii. \u901a\u8fc7 Spring Cloud \u539f\u751f\u6ce8\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableDiscoveryClient"),"  \u5f00\u542f\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u529f\u80fd\u3002\u7ed9 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-resttemplate.html"},"RestTemplate")," \u5b9e\u4f8b\u6dfb\u52a0  ",(0,r.kt)("inlineCode",{parentName:"p"},"@LoadBalanced")," \u6ce8\u89e3\uff0c\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"@LoadBalanced")," \u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.spring.io/spring-cloud-netflix/multi/multi_spring-cloud-ribbon.html"},"Ribbon")," \u7684\u96c6\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@SpringBootApplication\n@EnableDiscoveryClient\npublic class NacosConsumerApplication {\n\n    @LoadBalanced\n    @Bean\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n\n    public static void main(String[] args) {\n        SpringApplication.run(NacosConsumerApplication.class, args);\n    }\n\n    @RestController\n    public class TestController {\n\n        private final RestTemplate restTemplate;\n\n        @Autowired\n        public TestController(RestTemplate restTemplate) {this.restTemplate = restTemplate;}\n\n        @RequestMapping(value = "/echo/{str}", method = RequestMethod.GET)\n        public String echo(@PathVariable String str) {\n            return restTemplate.getForObject("http://service-provider/echo/" + str, String.class);\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"li"},"ProviderApplication")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"ConsumerApplication")," \uff0c\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/echo/2018"),"\uff0c\u8fd4\u56de\u5185\u5bb9\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello Nacos Discovery 2018"),"\u3002")),(0,r.kt)("h2",{id:"\u76f8\u5173\u9879\u76ee"},"\u76f8\u5173\u9879\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"Nacos Spring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"Nacos Spring Boot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/spring-cloud-alibaba"},"Spring Cloud Alibaba"))))}d.isMDXComponent=!0}}]);