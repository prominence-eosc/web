"use strict";(self.webpackChunkprominence=self.webpackChunkprominence||[]).push([[903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Workflows, jobs and tasks",l={unversionedId:"introduction/workflows-jobs-tasks",id:"introduction/workflows-jobs-tasks",title:"Workflows, jobs and tasks",description:"A job in PROMINENCE consists of the following:",source:"@site/docs/introduction/workflows-jobs-tasks.md",sourceDirName:"introduction",slug:"/introduction/workflows-jobs-tasks",permalink:"/docs/introduction/workflows-jobs-tasks",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Main features",permalink:"/docs/introduction/features"},next:{title:"Job lifecycle",permalink:"/docs/introduction/job-lifecycle"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workflows-jobs-and-tasks"},"Workflows, jobs and tasks"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"job")," in PROMINENCE consists of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name"),(0,o.kt)("li",{parentName:"ul"},"Labels (key-value pairs)"),(0,o.kt)("li",{parentName:"ul"},"Required resources (e.g. CPU cores, memory, disk, walltime)"),(0,o.kt)("li",{parentName:"ul"},"Input files"),(0,o.kt)("li",{parentName:"ul"},"Storage"),(0,o.kt)("li",{parentName:"ul"},"One or more task definitions (described below)"),(0,o.kt)("li",{parentName:"ul"},"Policies (e.g. how many times should failing tasks should be retried)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tasks")," execute sequentially within a job, and consist of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Container image"),(0,o.kt)("li",{parentName:"ul"},"Container runtime"),(0,o.kt)("li",{parentName:"ul"},"Command to run and optionally any arguments"),(0,o.kt)("li",{parentName:"ul"},"Environment variables"),(0,o.kt)("li",{parentName:"ul"},"Current working directory")),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"workflow")," consists of one or more jobs and optionally any dependencies between them. Jobs within a workflow can be executed sequentially, in parallel or combinations of both."))}p.isMDXComponent=!0}}]);