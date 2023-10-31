"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[749],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"Nacos push domain with CoreDNS",keywords:["CoreDNS","DNS-F"],description:"Nacos push domain with CoreDNS"},s="Nacos DNS user guide",i={unversionedId:"v2/ecology/use-nacos-with-coredns",id:"version-2.X/v2/ecology/use-nacos-with-coredns",title:"Nacos push domain with CoreDNS",description:"Nacos push domain with CoreDNS",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/v2/ecology/use-nacos-with-coredns.md",sourceDirName:"v2/ecology",slug:"/v2/ecology/use-nacos-with-coredns",permalink:"/en/docs/v2/ecology/use-nacos-with-coredns",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos push domain with CoreDNS",keywords:["CoreDNS","DNS-F"],description:"Nacos push domain with CoreDNS"},sidebar:"docs",previous:{title:"NacosSync user guide",permalink:"/en/docs/v2/ecology/use-nacos-sync"},next:{title:"How to Contribute",permalink:"/en/docs/v2/contribution/contributing"}},c={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Build",id:"build",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Run",id:"run",level:2},{value:"Test",id:"test",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nacos-dns-user-guide"},"Nacos DNS user guide"),(0,o.kt)("p",null,"This plugin provides a DNS-F client based on CoreDNS, which can help export those registed services on Nacos as DNS domain. DNS-F client is a dedicated agent process(side car) beside the application's process to foward the service discovery DNS domain query request to Nacos."),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"To build and run nacos coredns plugin, the OS must be Linux or Mac. And also, make sure your nacos version is 2.2 or higher and golang version is 1.17 or higher. And golang environments(GOPATH,GOROOT,GOHOME) must be configured correctly. Because it needs to support the gRPC connection feature of the nacos2.x version and the go mod function."),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/nacos-group/nacos-coredns-plugin.git \ncp nacos-coredns-plugin/bin/build.sh ~/\ncd ~/\nsh build.sh\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To run nacos coredns plugin, you need a configuration file. A possible file may be as bellow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},". {\n    log\n    nacos {\n    nacos_namespaceId public\n    nacos_server_host 127.0.0.1:8848\n    }\n    forward . /etc/resolv.conf\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"forward: domain names those not registered in nacos will be forwarded to upstream."),(0,o.kt)("li",{parentName:"ul"},"nacos_namespaceId: nacos namespaceId, defalut is public."),(0,o.kt)("li",{parentName:"ul"},"nacos_server_host: Ip and Port of nacos server, seperated by comma if there are two or more nacos servers")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Firstly, you need to deploy nacos server.  ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Here")),(0,o.kt)("li",{parentName:"ol"},"Secondly, register service on nacos."),(0,o.kt)("li",{parentName:"ol"},"Finally, configure the file  ",(0,o.kt)("strong",{parentName:"li"},"($path_to_corefile)"),"  and the port  ",(0,o.kt)("strong",{parentName:"li"},"($dns_port)"),"  to run the plugin.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$GOPATH/src/coredns/coredns  -conf $path_to_corefile  -dns.port $dns_port \n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/29425667/1663504581023-95437fee-0e3d-4b6a-851c-44a352dedd81.png",alt:null})),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"Input the service name  ",(0,o.kt)("strong",{parentName:"p"},"($nacos_service_name)"),"  , and the plugin's IP address  ",(0,o.kt)("strong",{parentName:"p"},"($dns_ip)"),"  and port  ",(0,o.kt)("strong",{parentName:"p"},"($dns_port)")," . We can get the DNS answer from the plugin. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dig  $nacos_service_name   @$dns_ip   -p $dns_port \n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/29425667/1663504588231-341b38fe-da55-41eb-a24b-e3752b86faa4.png",alt:null})))}d.isMDXComponent=!0}}]);