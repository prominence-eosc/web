"use strict";(self.webpackChunkprominence=self.webpackChunkprominence||[]).push([[900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),b=o,f=d["".concat(u,".").concat(b)]||d[b]||l[b]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},4782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},s="Standard output & error",i={unversionedId:"jobs/stdout-stderr",id:"jobs/stdout-stderr",title:"Standard output & error",description:"The standard output and error from a job can be seen using the stdout and stderr commands. For example, to get the standard output for the job with id 299:",source:"@site/docs/jobs/stdout-stderr.md",sourceDirName:"jobs",slug:"/jobs/stdout-stderr",permalink:"/docs/jobs/stdout-stderr",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Running jobs",permalink:"/docs/jobs/running-jobs"},next:{title:"Job status",permalink:"/docs/jobs/job-status"}},u={},c=[],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"standard-output--error"},"Standard output & error"),(0,o.kt)("p",null,"The standard output and error from a job can be seen using the stdout and stderr commands. For example, to get the standard output for the job with id 299:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ prominence stdout 299\n    _______\n   < hello >\n    -------\n       \\\n        \\\n         \\\n                       ##        .\n                 ## ## ##       ==\n              ## ## ## ##      ===\n          /""""""""""""""""___/ ===\n     ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n          \\______ o          __/\n           \\    \\        __/\n             \\____\\______/\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The standard output and error can be seen while jobs are running as well as once they have completed, allowing users to check the status of long-running jobs.")))}d.isMDXComponent=!0}}]);