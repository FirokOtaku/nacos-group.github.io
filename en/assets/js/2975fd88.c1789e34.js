"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[3012],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>b});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=s(e.components);return n.createElement(c.Provider,{value:o},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(b,i(i({ref:o},u),{},{components:t})):n.createElement(b,i({ref:o},u))}));function b(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16658:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const a={title:"Contributing Flow",keywords:["Contributing","Source Code"],description:"This contribution flow is applicable to all Nacos community content, including but not limited to Nacos, Nacos wiki/doc, Nacos SDK."},i="Nacos Contributing Flow",l={unversionedId:"v2/contribution/contributing-flow",id:"v2/contribution/contributing-flow",title:"Contributing Flow",description:"This contribution flow is applicable to all Nacos community content, including but not limited to Nacos, Nacos wiki/doc, Nacos SDK.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/v2/contribution/contributing-flow.md",sourceDirName:"v2/contribution",slug:"/v2/contribution/contributing-flow",permalink:"/en/docs/next/v2/contribution/contributing-flow",draft:!1,tags:[],version:"current",frontMatter:{title:"Contributing Flow",keywords:["Contributing","Source Code"],description:"This contribution flow is applicable to all Nacos community content, including but not limited to Nacos, Nacos wiki/doc, Nacos SDK."},sidebar:"docs",previous:{title:"How to Contribute",permalink:"/en/docs/next/v2/contribution/contributing"},next:{title:"Pull request template",permalink:"/en/docs/next/v2/contribution/pull-request"}},c={},s=[{value:"1. Fork Alibaba/Nacos repository to your Github.",id:"1-fork-alibabanacos-repository-to-your-github",level:2},{value:"2. Clone your fork Nacos repository to local.",id:"2-clone-your-fork-nacos-repository-to-local",level:2},{value:"3. Add Alibaba/Nacos repository as upstream repo.",id:"3-add-alibabanacos-repository-as-upstream-repo",level:2},{value:"4. Choose a basic branch of development usually upstream/develop,and create a new branch based on it.",id:"4-choose-a-basic-branch-of-development-usually-upstreamdevelopand-create-a-new-branch-based-on-it",level:2},{value:"5. Do your change in your local develop branch.",id:"5-do-your-change-in-your-local-develop-branch",level:2},{value:"6. Rebase develop branch",id:"6-rebase-develop-branch",level:2},{value:"7. Push your develop branch to your fork repository.",id:"7-push-your-develop-branch-to-your-fork-repository",level:2},{value:"8. Create Pull Request according to the pull request template",id:"8-create-pull-request-according-to-the-pull-request-template",level:2},{value:"9. If no more problem, Nacos community will merge your PR. Congratulations for you becoming a official contributor of Nacos.",id:"9-if-no-more-problem-nacos-community-will-merge-your-pr-congratulations-for-you-becoming-a-official-contributor-of-nacos",level:2}],u={toc:s},p="wrapper";function d(e){let{components:o,...t}=e;return(0,r.kt)(p,(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-contributing-flow"},"Nacos Contributing Flow"),(0,r.kt)("p",null,"This contribution flow is applicable to all Nacos community content, including but not limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos wiki/doc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos SDK"),"."),(0,r.kt)("p",null,"The following use contributing ",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos")," as an example to explain the contribution flow in detail."),(0,r.kt)("h2",{id:"1-fork-alibabanacos-repository-to-your-github"},"1. Fork Alibaba/Nacos repository to your Github."),(0,r.kt)("h2",{id:"2-clone-your-fork-nacos-repository-to-local"},"2. Clone your fork Nacos repository to local."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone ${your fork nacos repo address}\n\ncd nacos\n")),(0,r.kt)("h2",{id:"3-add-alibabanacos-repository-as-upstream-repo"},"3. Add Alibaba/Nacos repository as upstream repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git remote add upstream https://github.com/alibaba/nacos.git\n\ngit remote -v \n\n    origin     ${your fork nacos repo address} (fetch)\n    origin     ${your fork nacos repo address} (push)\n    upstream    https://github.com/alibaba/nacos.git (fetch)\n    upstream    https://github.com/alibaba/nacos.git (push)\n    \ngit fetch origin\ngit fetch upstream\n")),(0,r.kt)("h2",{id:"4-choose-a-basic-branch-of-development-usually-upstreamdevelopand-create-a-new-branch-based-on-it"},"4. Choose a basic branch of development usually upstream/develop,and create a new branch based on it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(checkout branch from remote repo to local\uff09\ngit checkout -b upstream-develop upstream/develop\n\n(Create a development branch from the local branch, usually using the issue number as the development branch name\uff09\ngit checkout -b develop-issue#${issue-number}\n\n")),(0,r.kt)("h2",{id:"5-do-your-change-in-your-local-develop-branch"},"5. Do your change in your local develop branch."),(0,r.kt)("p",null,"First please make sure you read and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos code style")," correctly, please read the related content ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/blob/develop/style/codeStyle.md"},"Code of Conduct"),"."),(0,r.kt)("p",null,"When making changes, please ensure that the changes on this branch are ",(0,r.kt)("strong",{parentName:"p"},"only relevant to the issue"),", and try to be as small as possible, so that ",(0,r.kt)("strong",{parentName:"p"},"only one thing is modified in one branch, and only one thing is modified in one PR"),"."),(0,r.kt)("p",null,"At the same time, please use your English description as much as possible for your commits. It is mainly described by ",(0,r.kt)("strong",{parentName:"p"},"predicate + object"),", such as: ",(0,r.kt)("inlineCode",{parentName:"p"},"Fix xxx problem/bug"),"."),(0,r.kt)("p",null,"Some simple commits can be described using ",(0,r.kt)("inlineCode",{parentName:"p"},"For xxx"),", such as: ",(0,r.kt)("inlineCode",{parentName:"p"},"For codestyle"),". "),(0,r.kt)("p",null,"If the commits is related to an ISSUE, you can add the ISSUE number as a prefix, such as: ",(0,r.kt)("inlineCode",{parentName:"p"},"For #10000, Fix xxx problem/bug"),"."),(0,r.kt)("h2",{id:"6-rebase-develop-branch"},"6. Rebase develop branch"),(0,r.kt)("p",null,"When you make changes, other people's changes may have commited and merged. At this time, there may be conflicts. Please use the rebase command to merge and resolve. There are two main benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your submission record will be very clean, without the words ",(0,r.kt)("inlineCode",{parentName:"li"},"Merge xxxx branch"),"."),(0,r.kt)("li",{parentName:"ol"},"After rebase, the commit log of your branch is also a single chain, it is easier to check back.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git fetch upstream\n\ngit rebase -i upstream/develop\n\n")),(0,r.kt)("p",null,"OR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git checkout upstream-develop\ngit pull \ngit checkout develop-issue#${issue-number}\ngit rebase -i upstream-develop\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you are using Intellij IDEA"),", it is recommended to use the IDE version control, which has a more convenient visual panel to resolve conflicts and squash operations."),(0,r.kt)("h2",{id:"7-push-your-develop-branch-to-your-fork-repository"},"7. Push your develop branch to your fork repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git push origin develop-issue#${issue-number}\n")),(0,r.kt)("h2",{id:"8-create-pull-request-according-to-the-pull-request-template"},"8. Create Pull Request according to the pull request template"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/next/v2/contribution/pull-request"},"pull request template")),(0,r.kt)("p",null,"The Nacos community will review your Pull Request and may propose comments."),(0,r.kt)("p",null,"You can return to step 5 to modify code according to the comments and use step 6 to resubmit."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you are prompted that there are conflicts when you push to fork repo again, Force push to your fork branch will be ok.")," The reason of conflicts is that the commit ID has changed after you rebase with others changes."),(0,r.kt)("h2",{id:"9-if-no-more-problem-nacos-community-will-merge-your-pr-congratulations-for-you-becoming-a-official-contributor-of-nacos"},"9. If no more problem, Nacos community will merge your PR. Congratulations for you becoming a official contributor of Nacos."))}d.isMDXComponent=!0}}]);