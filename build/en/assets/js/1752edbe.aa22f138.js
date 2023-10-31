"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[6974],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),c=r,m=u["".concat(o,".").concat(c)]||u[c]||g[c]||i;return t?a.createElement(m,s(s({ref:n},p),{},{components:t})):a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},25038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const i={title:"Addressing Plugin",keywords:["Addressing","Plugin"],description:"This article describes how to develop and use Nacos' addressing plugin."},s="Addressing Plugin",l={unversionedId:"v2/plugin/address-plugin",id:"v2/plugin/address-plugin",title:"Addressing Plugin",description:"This article describes how to develop and use Nacos' addressing plugin.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/v2/plugin/address-plugin.md",sourceDirName:"v2/plugin",slug:"/v2/plugin/address-plugin",permalink:"/en/docs/next/v2/plugin/address-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"Addressing Plugin",keywords:["Addressing","Plugin"],description:"This article describes how to develop and use Nacos' addressing plugin."}},o={},d=[{value:"Overview Of Addressing Plugin",id:"overview-of-addressing-plugin",level:2},{value:"Develop Nacos Server Addressing Plugin",id:"develop-nacos-server-addressing-plugin",level:2},{value:"Use Server Plugin",id:"use-server-plugin",level:3},{value:"Use the default Nacos addressing plugin",id:"use-the-default-nacos-addressing-plugin",level:3},{value:"Client Plugin",id:"client-plugin",level:2},{value:"Use Custom Plugins",id:"use-custom-plugins",level:3},{value:"Use the default Nacos addressing plugin",id:"use-the-default-nacos-addressing-plugin-1",level:3},{value:"Plugin for other programming language",id:"plugin-for-other-programming-language",level:3}],p={toc:d},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"addressing-plugin"},"Addressing Plugin"),(0,r.kt)("p",null,"Since version 2.3.0, Nacos support to inject addressing plugins through ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html"},"SPI"),", and select a plugin implementation in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties ")," as the actual addressing service. This document will describe how to implement an addressing plugin and how to make it work."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Attention:\nAt present, the addressing plugin is still in the beta stage, and its API and interface definitions maybe modified with version upgrades. Please pay attention to the applicable version of your plugin.")),(0,r.kt)("h2",{id:"overview-of-addressing-plugin"},"Overview Of Addressing Plugin"),(0,r.kt)("p",null,"At present, there are three addressing modes for Nacos cluster addressing: stand-alone addressing, profile addressing and address server addressing. Through the addressing plugin, users can write their own addressing logic."),(0,r.kt)("h2",{id:"develop-nacos-server-addressing-plugin"},"Develop Nacos Server Addressing Plugin"),(0,r.kt)("p",null,"To develop a Nacos server-side addressing plugin, developer first need to depend on the relevant API of the address plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.alibaba.nacos</groupId>\n            <artifactId>nacos-address-plugin</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${project.version}")," is the version of Nacos for your development plugin."),(0,r.kt)("p",null,"Then implement interface",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.address.spi.AddressPlugin"),", and put your implementation into services of SPI."),(0,r.kt)("p",null,"The methods of interface in following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"method name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"returns"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Start the addressing function of the plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getServerList"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","String>"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the addresses of all Nacos cluster nodes. The address format is",(0,r.kt)("inlineCode",{parentName:"td"},"IP: Port"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getPluginName"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the plugin. When the name is the same, the plugin loaded later will overwrite the plugin loaded first.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"registerListener"),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer","<","List","<","String>>"),(0,r.kt)("td",{parentName:"tr",align:null},"AddressPlugin"),(0,r.kt)("td",{parentName:"tr",align:null},"Register the listener and call the listener when the cluster address changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shutdown"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"Shutdown plugin")))),(0,r.kt)("p",null,"This interface is defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.address.spi.AbstractAddressPlugin"),".The abstract class implements",(0,r.kt)("inlineCode",{parentName:"p"},"getServerList"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"registerListener")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," methods by default, Users can inherit AbstractAddressPlugin to implement other methods when actually writing plugins. AbstractAddressPlugin has a List","<","String>member variable named serverList, that is, the cluster address collection. The user needs to maintain this variable.\nWhen users need to configure plugin related parameters in the configuration file, they need to configure keys starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"address.plugin")," in the property configuration file. In this case, the corresponding parameters can be obtained through the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.address.common.AddressProperties")," singleton class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"address.plugin.$ {key} = ${val}\n")),(0,r.kt)("p",null,"After configuration, users can write plugins through the"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"AddressProperties.getProperty(${key})\n")),(0,r.kt)("p",null,"To get the parameters."),(0,r.kt)("h3",{id:"use-server-plugin"},"Use Server Plugin"),(0,r.kt)("p",null,"After the plugin finished, it needs to be packaged into jar/zip and places in the classpath of the nacos server. If you don't know how to add plugins into the classpath, please place plugins under ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/plugins")," directly."),(0,r.kt)("p",null,"After Adding plugins into classpath, also need to modify some configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"### The plugin name nacos using\uff0cshould be same as the return value of `com.alibaba.nacos.plugin.address.spi.AddressPlugin#getPluginName`\nnacos.core.member.lookup.type=${addressPluginName}\n")),(0,r.kt)("p",null,"Restart nacos cluster, and after any request, some logs can be saw in ",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/logs/nacos-cluster.log"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[AddressPluginManager] Load AddressPlugin(xxxx) PluginName(xxx) successfully.\n")),(0,r.kt)("h3",{id:"use-the-default-nacos-addressing-plugin"},"Use the default Nacos addressing plugin"),(0,r.kt)("p",null,"In order to be compatible with the addressing of the old version, when the user does not use the custom plug-in, the configuration is the same as the original, or the configuration item ",(0,r.kt)("inlineCode",{parentName:"p"},"nacos.core.member.lookup.type=[file, address server]"),"."),(0,r.kt)("h2",{id:"client-plugin"},"Client Plugin"),(0,r.kt)("h3",{id:"use-custom-plugins"},"Use Custom Plugins"),(0,r.kt)("p",null,"The implementation of custom plugins is the same as that of the server. When users need to use custom plugins, they inherit ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.address.spi.AbstractAddressPlugin")," or implement ",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.address.spi.AddressPlugin"),", package the developed client plug-in into jar/zip, and put it into your application's classpath to automatically take effect. When initializing ",(0,r.kt)("inlineCode",{parentName:"p"},"NacosConfigService")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"NacosNamingService"),", the key passed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," object is ",(0,r.kt)("inlineCode",{parentName:"p"},"addressPluginName"),", and val is the parameter returned by the plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"getPluginName"),".\nfor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' Properties properties = new Properties();\n properties.put("addressPluginName", ${addressPluginName});\n ConfigService configService = NacosFactory.createConfigService(properties);\n String content = configService.getConfig(dataId, group, 5000);\n')),(0,r.kt)("h3",{id:"use-the-default-nacos-addressing-plugin-1"},"Use the default Nacos addressing plugin"),(0,r.kt)("p",null,"The Java client plug-in of Nacos is adapted to the old version. If the customized plug-in is not applicable, the use of the client is the same as before."),(0,r.kt)("h3",{id:"plugin-for-other-programming-language"},"Plugin for other programming language"),(0,r.kt)("p",null,"TODO"))}g.isMDXComponent=!0}}]);