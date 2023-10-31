"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[8338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Console Guide",keywords:["console","guide"],description:"Nacos console aims to enhance the console for service list, health management, service management, a distributed configuration management control ability."},r="Console Guide",l={unversionedId:"v2/guide/admin/console-guide",id:"version-1.X/v2/guide/admin/console-guide",title:"Console Guide",description:"Nacos console aims to enhance the console for service list, health management, service management, a distributed configuration management control ability.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.X/v2/guide/admin/console-guide.md",sourceDirName:"v2/guide/admin",slug:"/v2/guide/admin/console-guide",permalink:"/en/docs/1.X/v2/guide/admin/console-guide",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Console Guide",keywords:["console","guide"],description:"Nacos console aims to enhance the console for service list, health management, service management, a distributed configuration management control ability."},sidebar:"docs",previous:{title:"Management API",permalink:"/en/docs/1.X/v2/guide/admin/management-api"},next:{title:"Nacos monitor guide",permalink:"/en/docs/1.X/v2/guide/admin/monitor-guide"}},s={},c=[{value:"Features",id:"features",level:2},{value:"Service management",id:"service-management",level:3},{value:"Service list management",id:"service-list-management",level:4},{value:"Service flow weighted support and protection",id:"service-flow-weighted-support-and-protection",level:4},{value:"Service metadata management",id:"service-metadata-management",level:4},{value:"Service elegant line up and down",id:"service-elegant-line-up-and-down",level:4},{value:"Configuration management",id:"configuration-management",level:3},{value:"More configuration format editor",id:"more-configuration-format-editor",level:4},{value:"Edit DIFF",id:"edit-diff",level:4},{value:"Sample code",id:"sample-code",level:4},{value:"Listener query",id:"listener-query",level:4},{value:"Configure version and rolled back",id:"configure-version-and-rolled-back",level:4},{value:"Namespace management",id:"namespace-management",level:2},{value:"Login management",id:"login-management",level:2},{value:"Change the default username/password method",id:"change-the-default-usernamepassword-method",level:3},{value:"Close the login function",id:"close-the-login-function",level:3},{value:"Session time",id:"session-time",level:3},{value:"Community participation in the front end of the building",id:"community-participation-in-the-front-end-of-the-building",level:2},{value:"Adhere to the community development, welcome to join and contribute to the community",id:"adhere-to-the-community-development-welcome-to-join-and-contribute-to-the-community",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"console-guide"},"Console Guide"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://console.nacos.io/nacos/index.html"},"Nacos console")," aims to enhance the console for service list, health management, service management, a distributed configuration management control ability, in order to help users reduce the cost of micro management service application architecture, will provide basic functions include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Service management",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Service list and health status display"),(0,i.kt)("li",{parentName:"ul"},"Service metadata storage and editing"),(0,i.kt)("li",{parentName:"ul"},"Service flow weight adjustment"),(0,i.kt)("li",{parentName:"ul"},"Service elegant line up and down"))),(0,i.kt)("li",{parentName:"ul"},"Configuration management",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"More configuration format editing"),(0,i.kt)("li",{parentName:"ul"},"Edit DIFF"),(0,i.kt)("li",{parentName:"ul"},"Sample code"),(0,i.kt)("li",{parentName:"ul"},"Push status query"),(0,i.kt)("li",{parentName:"ul"},"Configure version and rolled back"))),(0,i.kt)("li",{parentName:"ul"},"Namespace"),(0,i.kt)("li",{parentName:"ul"},"Login management")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("h3",{id:"service-management"},"Service management"),(0,i.kt)("p",null,"Developer or operations staff often require after service registry, through friendly interface to view the service registration situation, the current system, including the registration of all of the details of the services and each service.And in a case, with access control service of some of the configuration editor.Nacos in this version of open service found that part of the console, main is to provide users a basic operations page, to view, edit, the current registration services."),(0,i.kt)("h4",{id:"service-list-management"},"Service list management"),(0,i.kt)("p",null,"Service list to help users with a unified view management of all its service and health status.The overall layout is the upper left corner services and search box to search button, the page is the central service list.Service main display service name list, the cluster number, number of instances, health instance number and details button five columns."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1540536911804-3660f0e9-855f-4439-ac23-e76f6f644360.png",alt:"image.png | left | 747x281"})),(0,i.kt)("p",null,"In the service list page click details, you can see details of the service.Can look at the service, the basic information of the cluster and examples."),(0,i.kt)("h4",{id:"service-flow-weighted-support-and-protection"},"Service flow weighted support and protection"),(0,i.kt)("p",null,"Nacos flow provides the user with the ability of weight control, open the threshold of service flow protection at the same time, in order to help users better protection service cluster service providers are not accidentally break.The diagram below so, click the edit button instance, modify instance weights.If you want to increase the flow of instance, to turn up the weight, if you don't want to flow method receives the instance, the weight can be set to 0."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1540537029452-dffbb078-4ae5-4397-9f70-083e0ebbb5be.png",alt:"image.png | left | 747x266"})),(0,i.kt)("h4",{id:"service-metadata-management"},"Service metadata management"),(0,i.kt)("p",null,'Nacos provide multiple dimensions of service metadata exposed, help users to store the information of the custom.This information is based on data storage structure, K - V on the console, as to the k1 = v1, k2 = v2 show such format.Similarly, edit the metadata can be performed by the same format.Such as service metadata editing, first click on the service details in the top right corner of the page "edit service" button, and then in the metadata input: input box version = 1.0, env = prod.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1540537359751-217d7500-c19c-4bad-8508-27f347f48a2f.png",alt:"image.png | left | 747x271"})),(0,i.kt)("p",null,"Click on the confirmation, you can in the service details page, see the service metadata has been updated."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1540537452673-01dc6c92-329a-4b6f-a616-36dc546c3355.png",alt:"image.png | left | 747x145"})),(0,i.kt)("h4",{id:"service-elegant-line-up-and-down"},"Service elegant line up and down"),(0,i.kt)("p",null,'Nacos also offers the service instance line operation, up and down in the service details page, you can click on the instance of "on-line" or "off" button, the offline instance, cases of health will not be included in the list.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1540537640435-b28cb279-75af-4965-8a9a-54cee213f1a5.png",alt:"image.png | left | 747x142"})),(0,i.kt)("h3",{id:"configuration-management"},"Configuration management"),(0,i.kt)("p",null,"Nacos support Group configuration based on the Namespace and Group management, so that users more flexible according to their own needs in accordance with the environment or application, module, such as grouping management services as well as the configuration of Spring, in the configuration management major provides configuration version history, rollback, subscriber query such as the core management abilities."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/9687/1540458893745-219a46a8-ebd9-405b-9e8f-226f3f0c7e76.png",alt:"image.png | left | 747x297"})),(0,i.kt)("h4",{id:"more-configuration-format-editor"},"More configuration format editor"),(0,i.kt)("p",null,"Nacos support YAML, Properties, TEXT, JSON, XML, HTML and other common configuration format online editing, syntax highlighting, format check, help users efficiently edit at the same time greatly reduced the risks of format error."),(0,i.kt)("p",null,"Nacos support configuration tag ability, help users better and more flexible to the configuration of the classification and management based on the tag.Description of configuration and its change is support users at the same time, people or cross team collaboration management configuration."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/9687/1540458995051-b3e67fd4-c905-4552-9e52-f54b6ef59941.png",alt:"image.png | left | 747x426"})),(0,i.kt)("h4",{id:"edit-diff"},"Edit DIFF"),(0,i.kt)("p",null,"Nacos supports editing a DIFF ability, help the user to check the changes, and reduce the risks of correction."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/9687/1540457990344-a60e1db3-ca1a-47ed-a03e-f92e37745247.png",alt:"image.png | left | 747x338"})),(0,i.kt)("h4",{id:"sample-code"},"Sample code"),(0,i.kt)("p",null,"Nacos provide sample code ability, can let a novice quickly using client-side programming consumption this configuration, novice slash barriers."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/9687/1540456991412-01acc11c-8b48-48d8-9032-589ebb9388d9.png",alt:"image.png | left | 747x223"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/9687/1540532899571-ccea6b6f-a1e1-44d1-a130-f9afaba01c51.png",alt:"image.png | left | 747x380"})),(0,i.kt)("h4",{id:"listener-query"},"Listener query"),(0,i.kt)("p",null,"Nacos provide configuration subscriber is the listener query ability, at the same time provide Client MD5 checksum value of the current configuration, in order to help users better check configuration changes pushed to the Client side."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/9687/1540459212236-0abdc558-68b9-4585-b11e-c9a1924ce7ef.png",alt:"image.png | left | 747x185"})),(0,i.kt)("h4",{id:"configure-version-and-rolled-back"},"Configure version and rolled back"),(0,i.kt)("p",null,"Nacos by providing a key roll back configuration version management and its ability, help users can configure to quick recovery, reduce the micro service system in configuration management will meet the availability of the risk."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/9687/1540459226967-a258b9a7-f95f-41b0-874f-2a0a5da2fc5c.png",alt:"image.png | left | 747x242"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/9687/1540459237821-d4c06d16-b356-4953-a6e7-da949b1f3aec.png",alt:"image.png | left | 747x493"})),(0,i.kt)("h2",{id:"namespace-management"},"Namespace management"),(0,i.kt)("p",null,"Nacos based in Namespace helps users logic isolation based multiple namespaces, this can help users better management testing, service and configure the pretest, production environment, so that the same configuration environment (such as database data sources) can define different values."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/9687/1540519411777-74908cc2-29bc-4270-be58-aed62605228f.png",alt:"image.png | left | 747x298"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/9687/1540519427066-effd5153-02c9-4e21-ae9f-1a2e9ae7713e.png",alt:"image.png | left | 747x206"})),(0,i.kt)("h2",{id:"login-management"},"Login management"),(0,i.kt)("p",null,"Nacos 0.8 version supports simple login function, the default username/password for: ",(0,i.kt)("inlineCode",{parentName:"p"},"nacos/nacos"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/jpeg/338441/1561262748106-4fc05174-bf70-4806-bcbd-90296c5bcbaa.jpeg",alt:"login"})),(0,i.kt)("h3",{id:"change-the-default-usernamepassword-method"},"Change the default username/password method"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generate encrypted password in ",(0,i.kt)("inlineCode",{parentName:"li"},"com.alibaba.nacos.console.utils.PasswordEncoderUtil.main")," function, change nacos to you want to change the password, running with encryption algorithm.Note that salt is random, so the generated password every time may be different, please don't worry about it.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public class PasswordEncoderUtil {\n\n    public static void main(String[] args) {\n        System.out.println(new BCryptPasswordEncoder().encode("nacos"));\n    }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a user name or password, use specify a user name password.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INSERT INTO users (username, password, enabled) VALUES ('nacos', '$2a$10$EuWPZHzz32dJN7jexM34MOeYirDdFAZm2kuWj7VEOJhhZkDrxfvUu', TRUE);\nINSERT INTO roles (username, role) VALUES ('nacos', 'ROLE_ADMIN');\n")),(0,i.kt)("h3",{id:"close-the-login-function"},"Close the login function"),(0,i.kt)("p",null,"As part of its own development console, do not want to be nacos security filter interceptor.Therefore nacos support custom close the login functionFind the configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"${nacoshome}/conf/application.properties"),". The properties, replace the following content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## spring security config\n### turn off security\nspring.security.enabled=false\nmanagement.security=false\nsecurity.basic.enabled=false\nnacos.security.ignore.urls=/**\n\n#nacos.security.ignore.urls=/,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/v1/auth/login,/v1/console/health,/v1/cs/**,/v1/ns/**,/v1/cmdb/**,/actuator/**\n\n")),(0,i.kt)("h3",{id:"session-time"},"Session time"),(0,i.kt)("p",null,"The default session to keep time for 30 minutes.After 30 minutes need to login authentication.Temporarily does not support to modify the default time."),(0,i.kt)("h2",{id:"community-participation-in-the-front-end-of-the-building"},"Community participation in the front end of the building"),(0,i.kt)("p",null,"In Nacos front style, the layout of the discussion, the community vote, finally choose the style of the classic black and white and blue skin, and through our UED Yao Cheng design, layout, make interaction is very natural."),(0,i.kt)("p",null,"In the development of the console, we recruited through community many front students to participate in the development of the front-end code, in this especially thank Chen Li, Qing Wang, Yanmin Wang Nacos front-end development process in the strong support!"),(0,i.kt)("h2",{id:"adhere-to-the-community-development-welcome-to-join-and-contribute-to-the-community"},"Adhere to the community development, welcome to join and contribute to the community"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"DISS is cheap, show me your hand!")),(0,i.kt)("p",null,"To join Nacos WeChat community discussion Nacos the evolution of the product, you can sweep through ",(0,i.kt)("strong",{parentName:"p"},"xuechaos"),' WeChat QRcode, let "xuechaos" help you pull in "Nacos community communication group".'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077965587-8f4e3100-bdd4-469a-9ea0-7af7061bc9ef.png",alt:"Screen Shot 2018-06-27 at 13.39.09.png | left"})),(0,i.kt)("p",null,"More Nacos related open source project information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"Nacos Spring Project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"Nacos Spring Boot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba"},"Spring Cloud Alibaba")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/dubbo"},"Dubbo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alibaba/Sentinel"},"Sentinel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://projects.spring.io/spring-cloud/"},"Spring Cloud")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Nepxion/Discovery"},"Nepxion Discovery"))))}m.isMDXComponent=!0}}]);