"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[4528],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,k=d["".concat(p,".").concat(m)]||d[m]||N[m]||i;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>N,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"Nacos Spring",keywords:["Nacos","Spring"],description:"Nacos Spring"},l="Nacos Spring",o={unversionedId:"nacos-spring",id:"version-2.X/nacos-spring",title:"Nacos Spring",description:"Nacos Spring",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-2.X/nacos-spring.md",sourceDirName:".",slug:"/nacos-spring",permalink:"/zh-cn/docs/nacos-spring",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos Spring",keywords:["Nacos","Spring"],description:"Nacos Spring"}},p={},s=[{value:"1. \u6ce8\u89e3\u9a71\u52a8",id:"1-\u6ce8\u89e3\u9a71\u52a8",level:2},{value:"1.1. \u542f\u7528 Nacos",id:"11-\u542f\u7528-nacos",level:3},{value:"1.2. \u914d\u7f6e\u76d1\u542c",id:"12-\u914d\u7f6e\u76d1\u542c",level:3},{value:"1.2.1. \u7c7b\u578b",id:"121-\u7c7b\u578b",level:4},{value:"1.2.2. \u8d85\u65f6\u65f6\u95f4",id:"122-\u8d85\u65f6\u65f6\u95f4",level:4},{value:"1.3. \u5168\u5c40\u548c\u81ea\u5b9a\u4e49 Nacos \u5c5e\u6027",id:"13-\u5168\u5c40\u548c\u81ea\u5b9a\u4e49-nacos-\u5c5e\u6027",level:3},{value:"1.4. <code>@NacosProperties</code>",id:"14-nacosproperties",level:3},{value:"2. \u4f9d\u8d56\u6ce8\u5165",id:"2-\u4f9d\u8d56\u6ce8\u5165",level:2},{value:"3. \u5916\u90e8\u5316\u914d\u7f6e",id:"3-\u5916\u90e8\u5316\u914d\u7f6e",level:2},{value:"4. \u4e8b\u4ef6\u9a71\u52a8",id:"4-\u4e8b\u4ef6\u9a71\u52a8",level:2},{value:"\u76f8\u5173\u9879\u76ee",id:"\u76f8\u5173\u9879\u76ee",level:2}],c={toc:s},d="wrapper";function N(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-spring"},"Nacos Spring"),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-spring-project"},(0,r.kt)("inlineCode",{parentName:"a"},"nacos-spring-context"))," \u4e2d\u7684\u4e00\u4e9b\u5173\u952e\u7684\u7279\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u89e3\u9a71\u52a8"),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u6ce8\u5165"),(0,r.kt)("li",{parentName:"ul"},"\u5916\u90e8\u5316\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u9a71\u52a8")),(0,r.kt)("h2",{id:"1-\u6ce8\u89e3\u9a71\u52a8"},"1. \u6ce8\u89e3\u9a71\u52a8"),(0,r.kt)("h3",{id:"11-\u542f\u7528-nacos"},"1.1. \u542f\u7528 Nacos"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacos"),"\u662f\u4e00\u4e2a\u6a21\u5757\u9a71\u52a8\u7684\u6ce8\u89e3\uff0c\u5b83\u652f\u6301 Nacos Spring \u7684\u6240\u6709\u529f\u80fd\uff0c\u5305\u62ec",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u53d1\u73b0"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u7ba1\u7406"),"\u3002\u5b83\u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosDiscovery")," \u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosConfig"),"\uff0c\u53ef\u4ee5\u5355\u72ec\u914d\u7f6e\u5e76\u5728\u4e0d\u540c\u573a\u666f\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"12-\u914d\u7f6e\u76d1\u542c"},"1.2. \u914d\u7f6e\u76d1\u542c"),(0,r.kt)("p",null,"\u5047\u8bbe\u5728 Nacos \u670d\u52a1\u4e2d\u6709\u4e00\u4e2a\u914d\u7f6e\uff0c\u5176 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataId"),' \u662f "testDataId" \u800c ',(0,r.kt)("inlineCode",{parentName:"p"},"groupId"),' \u662f\u9ed8\u8ba4\u7ec4\uff08"DEFAULT_GROUP"\uff09\u3002 \u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ',(0,r.kt)("inlineCode",{parentName:"p"},"ConfigService#publishConfig")," \u65b9\u6cd5\u66f4\u6539\u5176\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@NacosInjected\nprivate ConfigService configService;\n\n@Test\npublic void testPublishConfig() throws NacosException {\n    configService.publishConfig(DATA_ID, DEFAULT_GROUP, "9527");\n}\n')),(0,r.kt)("p",null,"\u7136\u540e\u60a8\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u5668\uff0c\u5b83\u5c06\u76d1\u542c\u914d\u7f6e\u7684\u53d8\u5316\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7\u5728 Spring Bean \u4e2d\u6dfb\u52a0\u914d\u7f6e\u53d8\u66f4\u76d1\u542c\u5668\u65b9\u6cd5\u6765\u6267\u884c\u6b64\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@NacosConfigListener(dataId = DATA_ID)\npublic void onMessage(String config) {\n    assertEquals("mercyblitz", config); // asserts true\n}\n')),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u5177\u6709\u76f8\u540c\u7684\u6548\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'configService.addListener(DATA_ID, DEFAULT_GROUP, new AbstractListener() {\n    @Override\n    public void receiveConfigInfo(String config) {\n        assertEquals("9527", config); // asserts true\n    }\n});\n')),(0,r.kt)("p",null,"\u53e6\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@NacosConfigListener")," \u652f\u6301\u66f4\u4e30\u5bcc\u7684\u7c7b\u578b\u8f6c\u6362\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u53c2\u770b\uff1a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project/blob/master/nacos-spring-samples/nacos-spring-webmvc-sample/src/main/java/com/alibaba/nacos/samples/spring/listener/SimpleNacosConfigListener.java"},"Simple Sample of ",(0,r.kt)("inlineCode",{parentName:"a"},"@NacosConfigListener")))),(0,r.kt)("h4",{id:"121-\u7c7b\u578b"},"1.2.1. \u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@NacosConfigListener")," \u7684\u7c7b\u578b\u8f6c\u6362\u5305\u62ec\u5185\u7f6e\u548c\u81ea\u5b9a\u4e49\u5b9e\u73b0\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5185\u7f6e\u7c7b\u578b\u8f6c\u6362\u57fa\u4e8e Spring ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultFormattingConversionService"),"\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u5305\u597d\u4e86\u5927\u591a\u6570\u60c5\u51b5\u4ee5\u53ca Spring \u6846\u67b6\u66f4\u9ad8\u7ea7\u7248\u672c\u7684\u4e30\u5bcc\u529f\u80fd\u3002 "),(0,r.kt)("p",null,'\u4f8b\u5982\uff0c\u524d\u9762\u793a\u4f8b\u4e2d\u7684\u5185\u5bb9 "9527" \u4e5f\u53ef\u4ee5\u901a\u8fc7\u5e26 "int" \u6216 "Integer" \u53c2\u6570\u7684\u65b9\u6cd5\u8fdb\u884c\u76d1\u542c\uff1a:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@NacosConfigListener(dataId = DATA_ID)\npublic void onInteger(Integer value) {\n    assertEquals(Integer.valueOf(9527), value); // asserts true\n}\n\n@NacosConfigListener(dataId = DATA_ID)\npublic void onInt(int value) {\n    assertEquals(9527, value); // asserts true\n}\n")),(0,r.kt)("p",null,"\u5f53\u7136, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-spring-project"},(0,r.kt)("inlineCode",{parentName:"a"},"nacos-spring-context"))," \u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u5f39\u6027\u6269\u5c55\u3002 \u5982\u679c\u5b9a\u4e49\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"nacosConfigConversionService"),"\u7684Spring Bean\uff0c\u5176\u7c7b\u578b\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"ConversionService"),"\uff0c\u5219\u5c06\u5ffd\u7565",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultFormattingConversionService"),"\u3002 \u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u81ea\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"p"},"NacosConfigConverter"),"\u63a5\u53e3\u7684\u5b9e\u73b0\uff0c\u4ee5\u6307\u5b9a\u7c7b\u578b\u8f6c\u6362\u7684\u4fa6\u542c\u5668\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class UserNacosConfigConverter implements NacosConfigConverter<User> {\n\n    @Override\n    public boolean canConvert(Class<User> targetType) {\n        return true;\n    }\n\n    @Override\n    public User convert(String source) {\n        return JSON.parseObject(source, User.class);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UserNacosConfigConverter")," \u7c7b\u7ed1\u5b9a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"@NacosConfigListener.converter()")," \u5c5e\u6027\u4e0a\uff0c\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@NacosInjected\nprivate ConfigService configService;\n\n@Test\npublic void testPublishUser() throws NacosException {\n    configService.publishConfig("user", DEFAULT_GROUP, "{\\"id\\":1,\\"name\\":\\"mercyblitz\\"}");\n}\n\n@NacosConfigListener(dataId = "user", converter = UserNacosConfigConverter.class)\npublic void onUser(User user) {\n    assertEquals(Long.valueOf(1L), user.getId()); \n    assertEquals("mercyblitz", user.getName());\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u53c2\u770b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project/blob/master/nacos-spring-samples/nacos-spring-webmvc-sample/src/main/java/com/alibaba/nacos/samples/spring/listener/PojoNacosConfigListener.java"},"Type Conversion Sample of ",(0,r.kt)("inlineCode",{parentName:"a"},"@NacosConfigListener")))),(0,r.kt)("h4",{id:"122-\u8d85\u65f6\u65f6\u95f4"},"1.2.2. \u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("p",null,"\u7531\u4e8e\u8fd0\u884c\u81ea\u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"NacosConfigConverter")," \u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"@NacosConfigListener.timeout()")," \u5c5e\u6027\u4e2d\u8bbe\u7f6e\u6700\u5927\u6267\u884c\u65f6\u95f4\uff0c\u4ee5\u9632\u6b62\u5b83\u963b\u585e\u5176\u4ed6\u4fa6\u542c\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class Listeners {\n\n    private Integer integerValue;\n\n    private Double doubleValue;\n\n    @NacosConfigListener(dataId = DATA_ID, timeout = 50)\n    public void onInteger(Integer value) throws Exception {\n        Thread.sleep(100); // timeout of execution\n        this.integerValue = value;\n    }\n\n    @NacosConfigListener(dataId = DATA_ID, timeout = 200)\n    public void onDouble(Double value) throws Exception {\n        Thread.sleep(100); // normal execution\n        this.doubleValue = value;\n    }\n\n    public Integer getIntegerValue() {\n        return integerValue;\n    }\n\n    public Double getDoubleValue() {\n        return doubleValue;\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Listeners")," Bean \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"integerValue")," \u603b\u662f\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u4e0d\u4f1a\u6539\u53d8\u3002 \u56e0\u6b64\uff0c\u4ee5\u4e0b\u65ad\u8a00\u90fd\u5c06\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Autowired\nprivate Listeners listeners;\n\n@Test\npublic void testPublishConfig() throws NacosException {\n    configService.publishConfig(DATA_ID, DEFAULT_GROUP, "9527");\n    assertNull(listeners.getIntegerValue()); // asserts true\n    assertEquals(Double.valueOf(9527), listeners.getDoubleValue());   // asserts true\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u53c2\u770b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project/blob/master/nacos-spring-samples/nacos-spring-webmvc-sample/src/main/java/com/alibaba/nacos/samples/spring/listener/TimeoutNacosConfigListener.java"},"Timeout Sample of ",(0,r.kt)("inlineCode",{parentName:"a"},"@NacosConfigListener")))),(0,r.kt)("h3",{id:"13-\u5168\u5c40\u548c\u81ea\u5b9a\u4e49-nacos-\u5c5e\u6027"},"1.3. \u5168\u5c40\u548c\u81ea\u5b9a\u4e49 Nacos \u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"globalProperties")," \u662f\u4efb\u4f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacos"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosDiscovery")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosConfig")," \u4e2d\u7684\u5fc5\u9009\u5c5e\u6027\uff0c\u5176\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"@NacosProperties"),"\u3002 "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"globalProperties"),' \u5c06\u521d\u59cb\u5316\u4e3a\u5176\u4ed6\u6ce8\u89e3\u6216\u7ec4\u4ef6\u7684 "',(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40 Nacos \u5c5e\u6027"),'"\uff0c\u4f8b\u5982\uff1a',(0,r.kt)("inlineCode",{parentName:"p"},"@NacosInjected"),"\u3002 "),(0,r.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40 Nacos \u5c5e\u6027")," \u5b9a\u4e49\u5168\u5c40\u548c\u9ed8\u8ba4\u5c5e\u6027\u3002\u5b83\u8bbe\u7f6e\u4e3a\u5177\u6709\u6700\u4f4e\u4f18\u5148\u7ea7\uff0c\u5e76\u4e14\u4e5f\u53ef\u4ee5\u88ab\u8986\u76d6\u3002\u8986\u76d6\u4f18\u5148\u7ea7\u5982\u4e0b\u8868\u6240\u793a\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Precedence Order"),(0,r.kt)("th",{parentName:"tr",align:null},"Nacos Annotation"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*.properties()")),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@EnableNacosConfig.globalProperties()")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"@EnableNacosDiscovery.globalProperties()")),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@EnableNacos.globalProperties()")),(0,r.kt)("td",{parentName:"tr",align:null},"Y")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"*.properties()")," \u5b9a\u4e49\u6765\u81ea\u4ee5\u4e0b\u4e4b\u4e00\u7684\u81ea\u5b9a\u4e49 Nacos \u5c5e\u6027\uff1a  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@NacosInjected.properties()")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@NacosConfigListener.properties()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@NacosPropertySource.properties()")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@NacosConfigurationProperties.properties()"))),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u7684 Nacos \u5c5e\u6027\u4e5f\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"@NacosProperties")," \u914d\u7f6e\u3002 \u4e0d\u8fc7\uff0c\u5b83\u4eec\u662f\u53ef\u9009\u7684\uff0c\u7528\u4e8e\u5728\u7279\u6b8a\u60c5\u51b5\u4e0b\u8986\u76d6\u5168\u5c40 Nacos \u5c5e\u6027\u3002 \u5982\u679c\u6ca1\u6709\u5b9a\u4e49\uff0cNacos \u5c5e\u6027\u5c06\u5c1d\u8bd5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosConfig.globalProperties()")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosDiscovery.globalProperties()")," \u6216\n",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacos.globalProperties()")," \u4e2d\u67e5\u627e\u5c5e\u6027\u3002"),(0,r.kt)("h3",{id:"14-nacosproperties"},"1.4. ",(0,r.kt)("inlineCode",{parentName:"h3"},"@NacosProperties")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@NacosProperties")," \u662f\u5168\u5c40\u548c\u81ea\u5b9a\u4e49 Nacos \u5c5e\u6027\u7684\u7edf\u4e00\u6ce8\u89e3\u3002 \u5b83\u5145\u5f53Java ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"NacosFactory")," \u7c7b\u4e4b\u95f4\u7684\u4e2d\u4ecb\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"NacosFactory")," \u8d1f\u8d23\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigService")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingService")," \u5b9e\u4f8b\u3002 "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@NacosProperties")," \u7684\u5c5e\u6027\u5b8c\u5168\u652f\u6301\u5360\u4f4d\u7b26\uff0c\u5b83\u7684\u6e90\u662fSpring ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," \u62bd\u8c61\u4e2d\u7684\u5404\u79cd ",(0,r.kt)("inlineCode",{parentName:"p"},"PropertySource"),"\uff0c\u901a\u5e38\u662fJava System ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," \u548c\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u3002 \u6240\u6709\u5360\u4f4d\u7b26\u7684\u524d\u7f00\u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"nacos."),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"@NacosProperties")," \u548c Nacos \u5c5e\u6027\u7684\u5c5e\u6027\u4e4b\u95f4\u7684\u6620\u5c04\u5982\u4e0b\u6240\u793a\uff1a "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"endpoint()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.endpoint:}")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.namespace:}")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accessKey()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"access-key")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.access-key:}")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secretKey()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secret-key")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.secret-key:}")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serverAddr()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"server-addr")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.server-addr:}")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contextPath()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context-path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.context-path:}")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clusterName()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cluster-name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.cluster-name:}")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encode()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.encode:UTF-8}")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"N")))),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosDiscovery")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosConfig")," \u4e4b\u95f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"globalProperties()")," \u7684\u5360\u4f4d\u7b26\u5b58\u5728\u4e00\u4e9b\u5dee\u5f02\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"@EnableNacosDiscovery"),"'s Placeholder"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"@EnableNacosConfig"),"'s Placeholder"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"endpoint()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.discovery.endpoint:${nacos.endpoint:}}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.config.endpoint:${nacos.endpoint:}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.discovery.namespace:${nacos.namespace:}}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.config.namespace:${nacos.namespace:}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accessKey()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.discovery.access-key:${nacos.access-key:}}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.config.access-key:${nacos.access-key:}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secretKey()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.discovery.secret-key:${nacos.secret-key:}}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.config.secret-key:${nacos.secret-key:}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"serverAddr()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.discovery.server-addr:${nacos.server-addr:}}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.config.server-addr:${nacos.server-addr:}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contextPath()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.discovery.context-path:${nacos.context-path:}}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.config.context-path:${nacos.context-path:}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clusterName()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.discovery.cluster-name:${nacos.cluster-name:}}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.config.cluster-name:${nacos.cluster-name:}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encode()")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.discovery.encode:${nacos.encode:UTF-8}}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"${nacos.config.encode:${nacos.encode:UTF-8}}"))))),(0,r.kt)("p",null,"\u8fd9\u4e9b ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosDiscovery")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosConfig")," \u7684\u5360\u4f4d\u7b26\u7528\u4e8e\u9694\u79bb\u4e0d\u540c\u7684 Nacos \u670d\u52a1\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u662f\u4e0d\u5fc5\u8981\u7684\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5c06\u4f7f\u7528\u5e38\u89c4\u5360\u4f4d\u7b26\u3002"),(0,r.kt)("h2",{id:"2-\u4f9d\u8d56\u6ce8\u5165"},"2. \u4f9d\u8d56\u6ce8\u5165"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@NacosInjected")," \u662f\u4e00\u4e2a\u6838\u5fc3\u6ce8\u89e3\uff0c\u7528\u4e8e\u5728Spring Beans \u4e2d\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigService")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingService")," \u5b9e\u4f8b\uff0c\u5e76\u4f7f\u8fd9\u4e9b\u5b9e\u4f8b",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u7f13\u5b58"),"\u3002 \u8fd9\u610f\u5473\u7740\u5982\u679c\u5b83\u4eec\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"@NacosProperties")," \u76f8\u7b49\uff0c\u5219\u5b9e\u4f8b\u5c06\u662f\u76f8\u540c\u7684\uff0c\u65e0\u8bba\u5c5e\u6027\u662f\u6765\u81ea\u5168\u5c40\u8fd8\u662f\u81ea\u5b9a\u4e49\u7684 Nacos \u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@NacosInjected\nprivate ConfigService configService;\n\n@NacosInjected(properties = @NacosProperties(encode = "UTF-8"))\nprivate ConfigService configService2;\n\n@NacosInjected(properties = @NacosProperties(encode = "GBK"))\nprivate ConfigService configService3;\n\n@NacosInjected\nprivate NamingService namingService;\n\n@NacosInjected(properties = @NacosProperties(encode = "UTF-8"))\nprivate NamingService namingService2;\n\n@NacosInjected(properties = @NacosProperties(encode = "GBK"))\nprivate NamingService namingService3;\n\n@Test\npublic void testInjection() {\n\n    Assert.assertEquals(configService, configService2);\n    Assert.assertNotEquals(configService2, configService3);\n\n    Assert.assertEquals(namingService, namingService2);\n    Assert.assertNotEquals(namingService2, namingService3);\n}\n')),(0,r.kt)("p",null,"\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"configService")," \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacos#globalProperties()")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableNacosConfig#globalProperties()"),"\uff0c\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"encode"),' \u5c5e\u6027\u7684\u9ed8\u8ba4\u503c\u662f  "UTF-8"\uff0c\u56e0\u6b64 ',(0,r.kt)("inlineCode",{parentName:"p"},"configService")," \u5b9e\u4f8b\u548c\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},'@NacosProperties(encode ="UTF-8")')," \u6ce8\u89e3\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"configService2")," \u5b9e\u4f8b\u662f\u76f8\u540c\u7684\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"namingService")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"namingService2")," \u4e5f\u662f\u5982\u6b64\u3002"),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"NacosFactory.createConfigService()")," \u65b9\u6cd5\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigService")," \u5b9e\u4f8b\u4e0d\u540c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@NacosInjected")," \u6ce8\u89e3\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigService")," \u5b9e\u4f8b\u652f\u6301 Nacos Spring \u4e8b\u4ef6\u3002 \u4f8b\u5982\uff0c\u5728\u589e\u5f3a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigService")," \u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"publishConfig()")," \u65b9\u6cd5\u4e4b\u540e\u4f1a\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"NacosConfigPublishedEvent"),'\u3002 \u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605"\u4e8b\u4ef6\u9a71\u52a8"\u90e8\u5206\u3002'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u53c2\u770b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project/blob/master/nacos-spring-samples/nacos-spring-webmvc-sample/src/main/java/com/alibaba/nacos/samples/spring/NacosConfiguration.java"},"Dependency Injection Sample"))),(0,r.kt)("h2",{id:"3-\u5916\u90e8\u5316\u914d\u7f6e"},"3. \u5916\u90e8\u5316\u914d\u7f6e"),(0,r.kt)("p",null,"\u5916\u90e8\u5316\u914d\u7f6e\u662f Spring Boot \u5f15\u5165\u7684\u6982\u5ff5\uff0c\u5b83\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u63a5\u6536\u5916\u90e8\u5c5e\u6027\u6e90\u4ee5\u63a7\u5236\u8fd0\u884c\u65f6\u884c\u4e3a\u3002 Nacos Server \u5728\u5e94\u7528\u7a0b\u5e8f\u5916\u90e8\u8fd0\u884c\u5355\u72ec\u7684\u8fdb\u7a0b\u4ee5\u7ef4\u62a4\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-spring-project"},(0,r.kt)("inlineCode",{parentName:"a"},"nacos-spring-context"))," \u63d0\u4f9b\u4e86\u5bf9\u8c61\u7ed1\u5b9a\uff0c\u52a8\u6001\u914d\u7f6e\uff08\u81ea\u52a8\u5237\u65b0\uff09\u7b49\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-spring-project"},(0,r.kt)("inlineCode",{parentName:"a"},"nacos-spring-context"))," \u548c Spring Stack \u4e4b\u95f4\u7684\u7b80\u5355\u6bd4\u8f83\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Spring Stack"),(0,r.kt)("th",{parentName:"tr",align:null},"Nacos Spring"),(0,r.kt)("th",{parentName:"tr",align:null},"Highlight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@Value")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@NacosValue")),(0,r.kt)("td",{parentName:"tr",align:null},"auto-refreshed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ConfigurationProperties")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@NacosConfigurationProperties")),(0,r.kt)("td",{parentName:"tr",align:null},"auto-refreshed,",(0,r.kt)("inlineCode",{parentName:"td"},"@NacosProperty"),",",(0,r.kt)("inlineCode",{parentName:"td"},"@NacosIgnore"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@PropertySource")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@NacosPropertySource")),(0,r.kt)("td",{parentName:"tr",align:null},"auto-refreshed, precedence order control")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@PropertySources")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@NacosPropertySources")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u53c2\u770b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project/blob/master/nacos-spring-samples/nacos-spring-webmvc-sample/src/main/java/com/alibaba/nacos/samples/spring/properties/NacosConfigurationPropertiesConfiguration.java"},"Auto-Refreshed Sample of ",(0,r.kt)("inlineCode",{parentName:"a"},"@NacosConfigurationProperties"))),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u53c2\u770b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project/blob/master/nacos-spring-samples/nacos-spring-webmvc-sample/src/main/java/com/alibaba/nacos/samples/spring/env/NacosPropertySourceConfiguration.java"},"Sample of ",(0,r.kt)("inlineCode",{parentName:"a"},"@NacosPropertySources")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"@NacosPropertySource")))),(0,r.kt)("h2",{id:"4-\u4e8b\u4ef6\u9a71\u52a8"},"4. \u4e8b\u4ef6\u9a71\u52a8"),(0,r.kt)("p",null,"Nacos \u4e8b\u4ef6\u9a71\u52a8 \u57fa\u4e8e\u6807\u51c6\u7684 Spring Event / Listener \u673a\u5236\u3002 Spring \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationEvent")," \u662f\u6240\u6709 Nacos Spring \u4e8b\u4ef6\u7684\u62bd\u8c61\u8d85\u7c7b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nacos Spring Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Trigger"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NacosConfigPublishedEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"After ",(0,r.kt)("inlineCode",{parentName:"td"},"ConfigService.publishConfig()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NacosConfigReceivedEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"After",(0,r.kt)("inlineCode",{parentName:"td"},"Listener.receiveConfigInfo()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NacosConfigRemovedEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"After ",(0,r.kt)("inlineCode",{parentName:"td"},"configService.removeConfig()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NacosConfigTimeoutEvent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ConfigService.getConfig()")," on timeout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NacosConfigListenerRegisteredEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"After ",(0,r.kt)("inlineCode",{parentName:"td"},"ConfigService.addListner()")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"ConfigService.removeListener()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NacosConfigurationPropertiesBeanBoundEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"After ",(0,r.kt)("inlineCode",{parentName:"td"},"@NacosConfigurationProperties")," binding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NacosConfigMetadataEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"After Nacos Config operations")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u53c2\u770b\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project/blob/master/nacos-spring-samples/nacos-spring-webmvc-sample/src/main/java/com/alibaba/nacos/samples/spring/event/NacosEventListenerConfiguration.java"},"Event/Listener Sample"))),(0,r.kt)("h2",{id:"\u76f8\u5173\u9879\u76ee"},"\u76f8\u5173\u9879\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"Nacos Spring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"Nacos Spring Boot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba"},"Spring Cloud Alibaba"))))}N.isMDXComponent=!0}}]);