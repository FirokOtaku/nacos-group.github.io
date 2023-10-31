"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||h[m]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Pull request template",keywords:["pull request","template"],description:"Pull request template"},l="Pull request template",s={unversionedId:"pull-request",id:"pull-request",title:"Pull request template",description:"Pull request template",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/pull-request.md",sourceDirName:".",slug:"/pull-request",permalink:"/en/docs/next/pull-request",draft:!1,tags:[],version:"current",frontMatter:{title:"Pull request template",keywords:["pull request","template"],description:"Pull request template"}},o={},u=[{value:"What is the purpose of the change",id:"what-is-the-purpose-of-the-change",level:2},{value:"Brief changelog",id:"brief-changelog",level:2},{value:"Verifying this change",id:"verifying-this-change",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pull-request-template"},"Pull request template"),(0,a.kt)("p",null,"Please do not create a Pull Request without creating an issue first."),(0,a.kt)("h2",{id:"what-is-the-purpose-of-the-change"},"What is the purpose of the change"),(0,a.kt)("p",null,"XXXXX"),(0,a.kt)("h2",{id:"brief-changelog"},"Brief changelog"),(0,a.kt)("p",null,"XX"),(0,a.kt)("h2",{id:"verifying-this-change"},"Verifying this change"),(0,a.kt)("p",null,"XXXX"),(0,a.kt)("p",null,"Follow this checklist to help us incorporate your contribution quickly and easily:"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure there is a Github issue filed for the change (usually before you start working on it). Trivial changes like typos do not require a Github issue. Your pull request should address just this issue, without pulling in other changes - one PR resolves one issue."),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Format the pull request title like ",(0,a.kt)("inlineCode",{parentName:"li"},"[ISSUE #123] Fix UnknownException when host config not exist"),". Each commit in the pull request should have a meaningful subject line and body."),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Write a pull request description that is detailed enough to understand what the pull request does, how, and why."),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Write necessary unit-test to verify your logic correction, more mock a little better when cross module dependency exist. If the new feature or significant change is committed, please remember to add integration-test in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/tree/master/test"},"test module"),"."),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Run ",(0,a.kt)("inlineCode",{parentName:"li"},"mvn -B clean apache-rat:check findbugs:findbugs")," to make sure basic checks pass. Run ",(0,a.kt)("inlineCode",{parentName:"li"},"mvn clean install -DskipITs")," to make sure unit-test pass. Run ",(0,a.kt)("inlineCode",{parentName:"li"},"mvn clean test-compile failsafe:integration-test"),"  to make sure integration-test pass."),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If this contribution is large, please file an ",(0,a.kt)("a",{parentName:"li",href:"http://www.apache.org/licenses/#clas"},"Apache Individual Contributor License Agreement"),".")))}h.isMDXComponent=!0}}]);