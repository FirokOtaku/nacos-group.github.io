"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[8336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=i,f=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={title:"Nacos Concepts",keywords:["Nacos","Concepts"],description:"Nacos Concepts"},r="Nacos Concepts",s={unversionedId:"concepts",id:"version-2.X/concepts",title:"Nacos Concepts",description:"Nacos Concepts",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/en/docs/concepts",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos Concepts",keywords:["Nacos","Concepts"],description:"Nacos Concepts"}},c={},l=[{value:"Region",id:"region",level:2},{value:"Available Zone",id:"available-zone",level:2},{value:"Endpoint",id:"endpoint",level:2},{value:"Namespace",id:"namespace",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuration Management",id:"configuration-management",level:2},{value:"Configuration Item",id:"configuration-item",level:2},{value:"Configuration Set",id:"configuration-set",level:2},{value:"Data ID",id:"data-id",level:2},{value:"Group",id:"group",level:2},{value:"Configuration Snapshot",id:"configuration-snapshot",level:2},{value:"Service",id:"service",level:2},{value:"Service Name",id:"service-name",level:2},{value:"Service Registry",id:"service-registry",level:2},{value:"Service Discovery",id:"service-discovery",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Application",id:"application",level:2},{value:"Service Group",id:"service-group",level:2},{value:"Virtual Cluster",id:"virtual-cluster",level:2},{value:"Instance",id:"instance",level:2},{value:"Weight",id:"weight",level:2},{value:"Health Check",id:"health-check",level:2},{value:"Protect Threshold",id:"protect-threshold",level:2}],u={toc:l},h="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nacos-concepts"},"Nacos Concepts"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: Nacos introduces some basic concepts and systematic understanding of these concepts can help you better understand and correct use Nacos products.")),(0,i.kt)("h2",{id:"region"},"Region"),(0,i.kt)("p",null,"Physical data centers, unalterable after resources are created."),(0,i.kt)("h2",{id:"available-zone"},"Available Zone"),(0,i.kt)("p",null,"Physical areas with independent power grids and networks in one region. The network latency for instances in the same zone is lower."),(0,i.kt)("h2",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,"The entry domain name of a service in each region."),(0,i.kt)("h2",{id:"namespace"},"Namespace"),(0,i.kt)("p",null,"For configuration isolation by tenants. Different namespaces may have configurations with the same Group or Data ID. One of the common scenarios for namespace is to differentiate and isolate the configurations in different environments, as in development and test environment and production environment."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"During system development, developers usually extract some parameters or variables that need to be changed from the code and manage them in a separate configuration file. This enables the static system artifacts or deliverables (such as WAR and JAR packages) to fit with the physical operating environment in a better way. Configuration management is usually a part of system deployment, which is executed by the administrator or operation and maintenance personnel. Configuration modification is an effective way to adjust the behavior of a running system."),(0,i.kt)("h2",{id:"configuration-management"},"Configuration Management"),(0,i.kt)("p",null,"Configuration-related activities including editing, storage, distribution, modification management, release version management, and modification audit."),(0,i.kt)("h2",{id:"configuration-item"},"Configuration Item"),(0,i.kt)("p",null,"A specific configurable parameter with its value range, generally in the form of param-key=param-value. For example, the log output level (logLevel=INFO|WARN|ERROR) of a system is regarded as a configuration item."),(0,i.kt)("h2",{id:"configuration-set"},"Configuration Set"),(0,i.kt)("p",null,"A collection of related or unrelated configuration items.In a system, a configuration file is generally a configuration set which contains all the configurations of the system. For example, a configuration set may contain configuration items such as data sources, thread pools, and log levels."),(0,i.kt)("h2",{id:"data-id"},"Data ID"),(0,i.kt)("p",null,"The ID of a configuration set in Nacos. It is one of the dimensions according to which configurations are organized. Data ID is generally used to organize the system configuration sets. A system or application can contain multiple configuration sets, each of which can be identified by a meaningful name. The Data ID usually uses the naming rule similar to Java packages (for example, com.taobao.tc.refund.log.level) to ensure global uniqueness. This naming rule is not mandatory."),(0,i.kt)("h2",{id:"group"},"Group"),(0,i.kt)("p",null,"The group of configuration sets in Nacos. It is one of the dimensions according to which configurations are organized. The configuration sets are always grouped by a meaningful string such as Buy or Trade to differentiate the configuration sets with the same Data ID. When you create a configuration on Nacos, the group name is replaced by DEFAULT","_","GROUP by default if not specified. A typical scenario of Group is when the same configuration type is used for different applications or components, such as database","_","url configuration and MQ","_","topic configuration."),(0,i.kt)("h2",{id:"configuration-snapshot"},"Configuration Snapshot"),(0,i.kt)("p",null,"The Nacos client SDK can generate snapshots of configurations on local machines. Snapshots can be used to indicate the overall disaster recovery capabilities of the system when the client cannot connect to the Nacos server. Configuration snapshot is similar to local commit in Git, or cache, which is updated at the appropriate time, but does not have the notion of expiration as in cache."),(0,i.kt)("h2",{id:"service"},"Service"),(0,i.kt)("p",null,"Software functions which are provided to the client via the network through a predefined interface."),(0,i.kt)("h2",{id:"service-name"},"Service Name"),(0,i.kt)("p",null,"Identifier provided by the service, by which the service it refers to can be uniquely determined."),(0,i.kt)("h2",{id:"service-registry"},"Service Registry"),(0,i.kt)("p",null,"Database which stores the instances of services and the load balancing policies for services."),(0,i.kt)("h2",{id:"service-discovery"},"Service Discovery"),(0,i.kt)("p",null,"On a computer network, the address and metadata of an instance under the service are probed (usually using a service name) and provided to the client for querying with a predefined interface."),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"Custom configuration information, such as a disaster recovery policy, a load balancing policy, an authentication configuration, and various tags. From the scope of action, it is divided into meta-information of service level, meta-information of virtual cluster, and meta-information of instance."),(0,i.kt)("h2",{id:"application"},"Application"),(0,i.kt)("p",null,"Property of service which can be used to identify the service provider."),(0,i.kt)("h2",{id:"service-group"},"Service Group"),(0,i.kt)("p",null,"Different services can be categorized into the same service group."),(0,i.kt)("h2",{id:"virtual-cluster"},"Virtual Cluster"),(0,i.kt)("p",null,"Service instances under the same service can be further classified. One possible unit of this classification is Virtual Cluster."),(0,i.kt)("h2",{id:"instance"},"Instance"),(0,i.kt)("p",null,"A process with an accessible network address (IP:Port) that provides one or more services."),(0,i.kt)("h2",{id:"weight"},"Weight"),(0,i.kt)("p",null,"Instance-level configuration. Weight is a floating-point number. The greater the weight, the greater the traffic that the instance expects to be allocated."),(0,i.kt)("h2",{id:"health-check"},"Health Check"),(0,i.kt)("p",null,"Health check of the instances under a service in a specified manner to ensure that the instances can work properly. Instances are judged to be healthy or unhealthy according to the inspection results. Unhealthy instances are not returned to the client when initiating a resolution request to the service."),(0,i.kt)("h2",{id:"protect-threshold"},"Protect Threshold"),(0,i.kt)("p",null,"To prevent traffic from flowing to healthy instances because of some unhealthy instances, which causes traffic pressure, healthy instance collapse, and finally an avalanche, the health protection threshold should be defined as a floating point number between 0 and 1. When the proportion of the domain name healthy instance to the total instance is smaller than this value, the instance is returned to the client regardless of the health of the instance. Although this can result in a loss of some of the traffic, we ensure that the remaining healthy instances can work normally."))}d.isMDXComponent=!0}}]);