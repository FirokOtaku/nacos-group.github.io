"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[9102],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Nacos supports three types of deployment modes",keywords:["Nacos","deployment modes"],description:"Nacos supports three types of deployment modes"},i="Nacos deployment environment",l={unversionedId:"deployment",id:"version-2.X/deployment",title:"Nacos supports three types of deployment modes",description:"Nacos supports three types of deployment modes",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/en/docs/deployment",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos supports three types of deployment modes",keywords:["Nacos","deployment modes"],description:"Nacos supports three types of deployment modes"}},s={},u=[{value:"Running Nacos in Standalone Mode",id:"running-nacos-in-standalone-mode",level:2},{value:"Linux/Unix/Mac",id:"linuxunixmac",level:3},{value:"Windows",id:"windows",level:3},{value:"Running Nacos with mysql in Standalone Mode",id:"running-nacos-with-mysql-in-standalone-mode",level:3},{value:"Initialize MySQL database",id:"initialize-mysql-database",level:4},{value:"application.properties configuration",id:"applicationproperties-configuration",level:4},{value:"Running Nacos in Multi-Node Cluster Mode",id:"running-nacos-in-multi-node-cluster-mode",level:2},{value:"Deploy Nacos in Multi-Cluster Mode",id:"deploy-nacos-in-multi-cluster-mode",level:2},{value:"IP Selection of Multiple Network Cards",id:"ip-selection-of-multiple-network-cards",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-deployment-environment"},"Nacos deployment environment"),(0,r.kt)("p",null,"Nacos is defined as an IDC internal application component, not a product for the public network environment. It is not recommended expose it to the public network environment directly."),(0,r.kt)("p",null,"All network related concepts such as VIP and network interface mentioned in the following documents are in the ",(0,r.kt)("strong",{parentName:"p"},"internal network environment"),"."),(0,r.kt)("h1",{id:"nacos-supports-three-types-of-deployment-modes"},"Nacos supports three types of deployment modes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standalone Mode - used in DEV or TEST environment."),(0,r.kt)("li",{parentName:"ul"},"Cluster Mode - used in production environment to ensure high-availability."),(0,r.kt)("li",{parentName:"ul"},"Multi-Cluster Mode - in complicated production mode, you may want to deploy multi-cluster mode to support different business units.")),(0,r.kt)("h1",{id:"environment-preparation"},"Environment preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDK installed, 1.8 and above are required"),(0,r.kt)("li",{parentName:"ul"},"Recommendation: 2 core CPU / 4G RAM and above"),(0,r.kt)("li",{parentName:"ul"},"Recommendation: Production environment with 3 nodes and above")),(0,r.kt)("h2",{id:"running-nacos-in-standalone-mode"},"Running Nacos in Standalone Mode"),(0,r.kt)("h3",{id:"linuxunixmac"},"Linux/Unix/Mac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standalone means it is non-cluster Mode. *\nsh startup.sh -m standalone")),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standalone means it is non-cluster Mode. *\ncmd startup.cmd -m standalone")),(0,r.kt)("h3",{id:"running-nacos-with-mysql-in-standalone-mode"},"Running Nacos with mysql in Standalone Mode"),(0,r.kt)("h4",{id:"initialize-mysql-database"},"Initialize MySQL database"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/blob/master/distribution/conf/mysql-schema.sql"},"sql statement source file")),(0,r.kt)("h4",{id:"applicationproperties-configuration"},"application.properties configuration"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/blob/master/distribution/conf/application.properties"},"application.properties configuration file")),(0,r.kt)("p",null,"add mysql datasource and configure url, user and password "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spring.datasource.platform=mysql\n\ndb.num=1\ndb.url.0=jdbc:mysql://11.162.196.16:3306/nacos_devtest?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true\ndb.user=nacos_devtest\ndb.password=youdontknow\n")),(0,r.kt)("h2",{id:"running-nacos-in-multi-node-cluster-mode"},"Running Nacos in Multi-Node Cluster Mode"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/cluster-mode-quick-start.html"},"Nacos in Multi-Node Cluster Mode")),(0,r.kt)("h2",{id:"deploy-nacos-in-multi-cluster-mode"},"Deploy Nacos in Multi-Cluster Mode"),(0,r.kt)("p",null,"Nacos support a NameServer route request mode\uff0c by which you can design a useful mapping rule to control the request forward to the corresponding cluster, in the mapping rule you can sharding the request by namespace or by tenant etc..."),(0,r.kt)("p",null,"to setup a NameServer:"),(0,r.kt)("h2",{id:"ip-selection-of-multiple-network-cards"},"IP Selection of Multiple Network Cards"),(0,r.kt)("p",null,"When the local environment is complex, the Nacos service needs to choose IP or network card to use at runtime when it starts up. Nacos Gets IP Reference Spring Cloud Design from Multiple Network Cards. With the nacos.inetutils parameter, you can specify the network card and IP address used by Nacos. The configuration parameters currently supported are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ip-address parameter can set Nacos IP directly")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.inetutils.ip-address=10.11.105.155\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use-only-site-local-interfaces parameter allows Nacos to use LAN ip, which is useful when Nacos deploys a machine with multiple network cards")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.inetutils.use-only-site-local-interfaces=true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ignored-interfaces parameter support network card arrays, allowing Nacos to ignore multiple network cards")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.inetutils.ignored-interfaces[0]=eth0\nnacos.inetutils.ignored-interfaces[1]=eth1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"preferred-networks parameter allow Nacos to select the matching IP preferentially and support regular matching and prefix matching")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.inetutils.preferred-networks[0]=30.5.124.\nnacos.inetutils.preferred-networks[0]=30.5.124.(25[0-5]|2[0-4]\\\\d|((1d{2})|([1-9]?\\\\d))),30.5.124.(25[0-5]|2[0-4]\\\\d|((1d{2})|([1-9]?\\\\d)))\n")))}d.isMDXComponent=!0}}]);