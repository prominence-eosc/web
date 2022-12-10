"use strict";(self.webpackChunkprominence=self.webpackChunkprominence||[]).push([[217],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(b,a(a({ref:n},c),{},{components:t})):r.createElement(b,a({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:4,title:"MPI jobs"},a=void 0,l={unversionedId:"containers/mpi-jobs",id:"containers/mpi-jobs",title:"MPI jobs",description:"Some are some additional requirements on the container images for MPI jobs:",source:"@site/docs/containers/mpi-jobs.md",sourceDirName:"containers",slug:"/containers/mpi-jobs",permalink:"/web/docs/containers/mpi-jobs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"MPI jobs"},sidebar:"tutorialSidebar",previous:{title:"Tips for creating containers",permalink:"/web/docs/containers/tips"},next:{title:"Running jobs",permalink:"/web/docs/jobs/running-jobs"}},s={},p=[],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some are some additional requirements on the container images for MPI jobs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mpirun")," should be in available inside the container and in the ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh")," command should be installed inside the container")),(0,i.kt)("p",null,"There is no reason to set an entrypoint as it will not be used. A command (and any required arguments) must be specified."),(0,i.kt)("p",null,"A simple minimal starting point for a Dockerfile for a CentOS 7 container image for OpenMPI is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FROM centos:7\nRUN yum -y install openssh-clients openmpi openmpi-devel\n\nENV PATH            /usr/lib64/openmpi/bin:${PATH}\nENV LD_LIBRARY_PATH /usr/lib64/openmpi/lib:${LD_LIBRARY_PATH}\n")),(0,i.kt)("p",null,"and for MPICH:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FROM centos:7\nRUN yum -y install openssh-clients mpich mpich-devel\n\nENV PATH            /usr/lib64/mpich/bin:${PATH}\nENV LD_LIBRARY_PATH /usr/lib64/mpich/lib:${LD_LIBRARY_PATH}\n")),(0,i.kt)("p",null,"To create a container using IntelMPI an Intel compiler licence is required to build the application. This application can then be copied into a container image with the Intel Parallel Studio Runtime installed. For example, see ",(0,i.kt)("a",{parentName:"p",href:"https://software.intel.com/en-us/articles/installing-intel-parallel-studio-xe-runtime-2019-using-yum-repository"},"here")," for information on installing the free Intel runtime in a CentOS environment."))}u.isMDXComponent=!0}}]);