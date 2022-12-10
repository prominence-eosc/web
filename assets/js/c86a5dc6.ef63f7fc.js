"use strict";(self.webpackChunkprominence=self.webpackChunkprominence||[]).push([[69],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1},a="Containers",s={unversionedId:"containers/containers",id:"containers/containers",title:"Containers",description:"In PROMINENCE all jobs are run in unprivileged containers using user-specified images. It is possible to use either the Singularity or udocker container runtimes, but of course standard Docker images can be used.",source:"@site/docs/containers/containers.md",sourceDirName:"containers",slug:"/containers/",permalink:"/docs/containers/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Job lifecycle",permalink:"/docs/introduction/job-lifecycle"},next:{title:"Images",permalink:"/docs/containers/images"}},c={},u=[{value:"Why containers?",id:"why-containers",level:2}],l={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"containers"},"Containers"),(0,o.kt)("p",null,"In PROMINENCE all jobs are run in unprivileged containers using user-specified images. It is possible to use either the Singularity or udocker container runtimes, but of course standard Docker images can be used."),(0,o.kt)("h2",{id:"why-containers"},"Why containers?"),(0,o.kt)("p",null,"Every job in PROMINENCE needs to have a container image specified. Running jobs in containers ensure that the application will be able to run successfully without depending on any software on the host. This is important because PROMINENCE makes use of a variety of different cloud resources, managed by different people from different organizations, potentially around the world."))}p.isMDXComponent=!0}}]);