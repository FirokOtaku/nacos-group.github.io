"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1899],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=s(a),u=r,g=p["".concat(m,".").concat(u)]||p[u]||d[u]||l;return a?n.createElement(g,o(o({ref:e},c),{},{components:a})):n.createElement(g,o({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[p]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16474:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Nacos monitor guide",keywords:["Nacos","monitor guide"],description:"Nacos monitor guide"},o="Nacos monitor guide",i={unversionedId:"v2/guide/admin/monitor-guide",id:"v2/guide/admin/monitor-guide",title:"Nacos monitor guide",description:"Nacos monitor guide",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/v2/guide/admin/monitor-guide.md",sourceDirName:"v2/guide/admin",slug:"/v2/guide/admin/monitor-guide",permalink:"/en/docs/next/v2/guide/admin/monitor-guide",draft:!1,tags:[],version:"current",frontMatter:{title:"Nacos monitor guide",keywords:["Nacos","monitor guide"],description:"Nacos monitor guide"},sidebar:"docs",previous:{title:"Console Guide",permalink:"/en/docs/next/v2/guide/admin/console-guide"},next:{title:"Nacos2.0\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",permalink:"/en/docs/next/v2/guide/admin/nacos2-config-benchmark"}},m={},s=[{value:"Deploy Nacos cluster to expose metrics data",id:"deploy-nacos-cluster-to-expose-metrics-data",level:2},{value:"Deploy prometheus to collect Nacos metrics data",id:"deploy-prometheus-to-collect-nacos-metrics-data",level:2},{value:"linux &amp; mac",id:"linux--mac",level:3},{value:"windows",id:"windows",level:3},{value:"Deploy grafana to graphically display metrics data",id:"deploy-grafana-to-graphically-display-metrics-data",level:2},{value:"mac",id:"mac",level:3},{value:"linux",id:"linux",level:3},{value:"windows",id:"windows-1",level:3},{value:"configure grafana alert",id:"configure-grafana-alert",level:2},{value:"DingTalk alert",id:"dingtalk-alert",level:3},{value:"mail alert",id:"mail-alert",level:3},{value:"meaning of Nacos metrics",id:"meaning-of-nacos-metrics",level:2},{value:"jvm metrics",id:"jvm-metrics",level:3},{value:"Nacos metrics",id:"nacos-metrics",level:3},{value:"nacos exception",id:"nacos-exception",level:3},{value:"client metrics",id:"client-metrics",level:3},{value:"Nacos-Sync monitor",id:"nacos-sync-monitor",level:2},{value:"grafana monitor Nacos-Sync",id:"grafana-monitor-nacos-sync",level:2},{value:"Nacos-Sync metrics meaning",id:"nacos-sync-metrics-meaning",level:2},{value:"jvm metrics",id:"jvm-metrics-1",level:3},{value:"application metrics",id:"application-metrics",level:2}],c={toc:s},p="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-monitor-guide"},"Nacos monitor guide"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Document optimizing...")),(0,r.kt)("p",null,"Nacos 0.8.0 improves the monitoring system, supporting Nacos operation status monitoring through exposing metrics data access to third-party monitoring system. Currently, prometheus, elastic search and influxdb are supported. The docs introduce how prometheus and grafana monitor Nacos.\nYou can find out for yourself how to use elastic search and influxdb."),(0,r.kt)("h2",{id:"deploy-nacos-cluster-to-expose-metrics-data"},"Deploy Nacos cluster to expose metrics data"),(0,r.kt)("p",null,"Deploy the Nacos cluster according to ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/next/v2/guide/admin/deployment"},"the deploy document")),(0,r.kt)("p",null,"Configure the application. properties file to expose metrics data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"management.endpoints.web.exposure.include=*\n")),(0,r.kt)("p",null,"Access {ip}:8848/nacos/actuator/prometheus to see if metrics data can be accessed"),(0,r.kt)("h2",{id:"deploy-prometheus-to-collect-nacos-metrics-data"},"Deploy prometheus to collect Nacos metrics data"),(0,r.kt)("p",null,"Download the Prometheus version you want to install at the address of ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"download prometheus")),(0,r.kt)("h3",{id:"linux--mac"},"linux & mac"),(0,r.kt)("p",null,"Decompress prometheus compression package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tar xvfz prometheus-*.tar.gz\ncd prometheus-*\n")),(0,r.kt)("p",null,"Modify configuration file prometheus.yml to collect Nacos metrics data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    metrics_path: '/nacos/actuator/prometheus'\n    static_configs:\n      - targets: ['{ip1}:8848','{ip2}:8848','{ip3}:8848']\n")),(0,r.kt)("p",null,"Start prometheus service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'./prometheus --config.file="prometheus.yml"\n')),(0,r.kt)("h3",{id:"windows"},"windows"),(0,r.kt)("p",null,"Download the corresponding version of Windows and decompress it"),(0,r.kt)("p",null,"Modify configuration file prometheus.yml to collect Nacos metrics data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    metrics_path: '/nacos/actuator/prometheus'\n    static_configs:\n      - targets:['{ip1}:8848','{ip2}:8848','{ip3}:8848']\n")),(0,r.kt)("p",null,"Start prometheus service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"prometheus.exe --config.file=prometheus.yml\n")),(0,r.kt)("p",null,"By accessing http://{ip}:9090/graph, we can see the data collected by prometheus. By searching nacos_monitor in the search bar, we can find Nacos data to show the success of the data collection.\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1LThVCQvoK1RjSZFwXXciCFXa-2832-1576.png",alt:"IMAGE"})),(0,r.kt)("h2",{id:"deploy-grafana-to-graphically-display-metrics-data"},"Deploy grafana to graphically display metrics data"),(0,r.kt)("p",null,"Install grafana on the same machine as prometheus, and use yum to install grafana"),(0,r.kt)("h3",{id:"mac"},"mac"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install grafana\nbrew services start grafana\n")),(0,r.kt)("h3",{id:"linux"},"linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo yum install https://s3-us-west-2.amazonaws.com/grafana-releases/release/grafana-5.2.4-1.x86_64.rpm\nsudo service grafana-server start\n")),(0,r.kt)("h3",{id:"windows-1"},"windows"),(0,r.kt)("p",null,"Reference document\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://docs.grafana.org/installation/windows/"},"http://docs.grafana.org/installation/windows/")),(0,r.kt)("p",null,"Access grafana: http://{ip}:3000"),(0,r.kt)("p",null,"Configuring prometheus data source\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1bTafCOLaK1RjSZFxXXamPFXa-2832-1568.png",alt:"IMAGE"})),(0,r.kt)("p",null,"Import Nacos grafana monitoring ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-template/blob/master/nacos-grafana.json"},"template"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1JadVCPDpK1RjSZFrXXa78VXa-2742-1338.png",alt:"IMAGE"})),(0,r.kt)("p",null,"Nacos monitoring is divided into three modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nacos monitor shows core monitoring items\n",(0,r.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1PMpUCQvoK1RjSZFDXXXY3pXa-2832-1584.png",alt:"IMAGE"})),(0,r.kt)("li",{parentName:"ul"},"nacos detail shows the change curve of index\n",(0,r.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1ZBF4CNjaK1RjSZFAXXbdLFXa-2742-1480.png",alt:"IMAGE"})),(0,r.kt)("li",{parentName:"ul"},"nacos alert is alerts about nacos\n",(0,r.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1ALlUCFzqK1RjSZFCXXbbxVXa-2742-1476.png",alt:"IMAGE"}))),(0,r.kt)("h2",{id:"configure-grafana-alert"},"configure grafana alert"),(0,r.kt)("p",null,"When Nacos runs out of order, Grafana can alert the person in charge. Grafana supports a variety of police alert. Mail, DingTalk and webhook are commonly used."),(0,r.kt)("h3",{id:"dingtalk-alert"},"DingTalk alert"),(0,r.kt)("p",null,"Configure DingTalk robots\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1eJ0RCSzqK1RjSZFjXXblCFXa-2742-1482.png",alt:"IMAGE"})),(0,r.kt)("p",null,"Configure DingTalk robots url\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1ERtQCSzqK1RjSZFjXXblCFXa-2832-1578.png",alt:"IMAGE"})),(0,r.kt)("p",null,"Test alert\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1KvXPCHPpK1RjSZFFXXa5PpXa-996-504.png",alt:"IMAGE"})),(0,r.kt)("h3",{id:"mail-alert"},"mail alert"),(0,r.kt)("p",null,"Modify defaults.ini configuration file to add mail alerts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#################################### SMTP / Emailing ##########################\n[smtp]\nenabled = true\nhost = smtp.126.com:25\nuser = xxxxxx\npassword = xxxxx\n;cert_file =\n;key_file =\nskip_verify = true\nfrom_address = xxxxxx@126.com\n\n[emails]\n;welcome_email_on_sign_up = false\n")),(0,r.kt)("p",null,"Configuration notification mailbox\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB12qyhCNnaK1RjSZFtXXbC2VXa-2832-1576.png",alt:"IMAGE"})),(0,r.kt)("h2",{id:"meaning-of-nacos-metrics"},"meaning of Nacos metrics"),(0,r.kt)("h3",{id:"jvm-metrics"},"jvm metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"item"),(0,r.kt)("th",{parentName:"tr",align:null},"meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system_cpu_usage"),(0,r.kt)("td",{parentName:"tr",align:null},"cpu usage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system_load_average_1m"),(0,r.kt)("td",{parentName:"tr",align:null},"load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_memory_used_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"jvm memory used(bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_memory_max_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"jvm memory max(bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_gc_pause_seconds_count"),(0,r.kt)("td",{parentName:"tr",align:null},"gc count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_gc_pause_seconds_sum"),(0,r.kt)("td",{parentName:"tr",align:null},"gc time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_threads_daemon"),(0,r.kt)("td",{parentName:"tr",align:null},"jvm threads count")))),(0,r.kt)("h3",{id:"nacos-metrics"},"Nacos metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"item"),(0,r.kt)("th",{parentName:"tr",align:null},"meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http_server_requests_seconds_count"),(0,r.kt)("td",{parentName:"tr",align:null},"http requests count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http_server_requests_seconds_sum"),(0,r.kt)("td",{parentName:"tr",align:null},"http requests time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_timer_seconds_sum"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config notify time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_timer_seconds_count"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config notify count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='longPolling'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config connection count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='configCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos configuration file count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='dumpTask'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config dump task count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='notifyTask'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config notify task count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='getConfig'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config read configuration count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='publish'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config update configuration count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='ipCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming ip count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='domCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming domain count(1.x version)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='serviceCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming domain count(2.x version)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='failedPush'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming push fail count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='avgPushCost'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming push cost time(average)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='leaderStatus'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming if node is leader")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='maxPushCost'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming push cost time(max)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='mysqlhealthCheck'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming mysql health check count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='httpHealthCheck'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming http health check count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='tcpHealthCheck'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming tcp health check count")))),(0,r.kt)("h3",{id:"nacos-exception"},"nacos exception"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"item"),(0,r.kt)("th",{parentName:"tr",align:null},"meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='db'}"),(0,r.kt)("td",{parentName:"tr",align:null},"database exception")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='configNotify'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config notify exception")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='unhealth'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config server health check exception")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='disk'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming write disk exception")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='leaderSendBeatFailed'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming leader send heart beat fail count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='illegalArgument'}"),(0,r.kt)("td",{parentName:"tr",align:null},"request argument illegal count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='nacos'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos inner exception")))),(0,r.kt)("h3",{id:"client-metrics"},"client metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"item"),(0,r.kt)("th",{parentName:"tr",align:null},"meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='subServiceCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"subscribed services count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='pubServiceCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"published services count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='configListenSize'}"),(0,r.kt)("td",{parentName:"tr",align:null},"listened configuration file count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_client_request_seconds_count"),(0,r.kt)("td",{parentName:"tr",align:null},"request count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_client_request_seconds_sum"),(0,r.kt)("td",{parentName:"tr",align:null},"request time")))),(0,r.kt)("h2",{id:"nacos-sync-monitor"},"Nacos-Sync monitor"),(0,r.kt)("p",null,"With the release of Nacos 0.9, Nacos-Sync 0.3 supports metrics monitoring. It can observe the running status of Nacos-Sync service through metrics data, and improve the monitoring capability of Nacos-Sync in production environment.\nReference for the Construction of the Overall Monitoring System ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/next/v2/guide/admin/monitor-guide"},"Nacos Monitoring Manual")),(0,r.kt)("h2",{id:"grafana-monitor-nacos-sync"},"grafana monitor Nacos-Sync"),(0,r.kt)("p",null,"The same as Nacos monitoring, Nacos-Sync also provides monitoring templates to import monitoring ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-template/blob/master/nacos-sync-grafana"},"Nacos-Sync templates")),(0,r.kt)("p",null,"Nacos-Sync monitoring is also divided into three modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nacos-sync monitor shows core monitoring items\n",(0,r.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1GeNWKmzqK1RjSZFHXXb3CpXa-2834-1588.png",alt:"monitor"})),(0,r.kt)("li",{parentName:"ul"},"nacos-sync detail and alert shows monitoring curves and alarms.\n",(0,r.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1kP8UKbvpK1RjSZPiXXbmwXXa-2834-1570.png",alt:"detail"}))),(0,r.kt)("h2",{id:"nacos-sync-metrics-meaning"},"Nacos-Sync metrics meaning"),(0,r.kt)("p",null,"Nacos-Sync metrics is divided into JVM layer and application layer"),(0,r.kt)("h3",{id:"jvm-metrics-1"},"jvm metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"item"),(0,r.kt)("th",{parentName:"tr",align:null},"meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system_cpu_usage"),(0,r.kt)("td",{parentName:"tr",align:null},"cpu usage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system_load_average_1m"),(0,r.kt)("td",{parentName:"tr",align:null},"load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_memory_used_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"jvm memory used(bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_memory_max_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"jvm memory max(bytes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_gc_pause_seconds_count"),(0,r.kt)("td",{parentName:"tr",align:null},"gc count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_gc_pause_seconds_sum"),(0,r.kt)("td",{parentName:"tr",align:null},"gc time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_threads_daemon"),(0,r.kt)("td",{parentName:"tr",align:null},"jvm threads count")))),(0,r.kt)("h2",{id:"application-metrics"},"application metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"item"),(0,r.kt)("th",{parentName:"tr",align:null},"meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_task_size"),(0,r.kt)("td",{parentName:"tr",align:null},"sync task count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_cluster_size"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_add_task_rt"),(0,r.kt)("td",{parentName:"tr",align:null},"add task time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_delete_task_rt"),(0,r.kt)("td",{parentName:"tr",align:null},"delete task time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_dispatcher_task"),(0,r.kt)("td",{parentName:"tr",align:null},"dispatcher task time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_sync_task_error"),(0,r.kt)("td",{parentName:"tr",align:null},"sync task error count")))))}d.isMDXComponent=!0}}]);