"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4915],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=r.createContext({}),u=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(g,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return g},T:function(){return u}});var r=n(7462),o=n(7294),a=n(6742),i=n(2263),l=n(907);function g(e){return o.createElement(a.Z,(0,r.Z)({},e,{to:(t=e.to,g=(0,l.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==g?void 0:g.name)?n:"current"]+t),target:"_blank"}));var t,n,g}function u(e){var t,n=null!=(t=e.text)?t:"Example";return o.createElement(g,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},4467:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(3899),l=["components"],g={id:"logging",title:"Customizing logging",sidebar_label:"Customizing logging"},u=void 0,c={unversionedId:"configure_hydra/logging",id:"configure_hydra/logging",isDocsHomePage:!1,title:"Customizing logging",description:"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it here.",source:"@site/docs/configure_hydra/logging.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/logging",permalink:"/docs/next/configure_hydra/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/configure_hydra/logging.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1633743139,formattedLastUpdatedAt:"10/9/2021",frontMatter:{id:"logging",title:"Customizing logging",sidebar_label:"Customizing logging"},sidebar:"docs",previous:{title:"Job Configuration",permalink:"/docs/next/configure_hydra/job"},next:{title:"Customizing working directory pattern",permalink:"/docs/next/configure_hydra/workdir"}},s=[],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.T,{text:"Example application",to:"examples/configure_hydra/logging",mdxType:"ExampleGithubLink"}),(0,a.kt)("p",null,"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/howto/logging.html"},"here"),".\nThere are two logging configurations, one for Hydra itself and one for the executed jobs."),(0,a.kt)("p",null,"This example demonstrates how to customize the logging behavior of your Hydra app, by making the following changes\nto the default logging behavior:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Outputs only to stdout (no log file)"),(0,a.kt)("li",{parentName:"ul"},"Output a simpler log line pattern")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - override hydra/job_logging: custom\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/job_logging/custom.yaml"',title:'"hydra/job_logging/custom.yaml"'},"version: 1\nformatters:\n  simple:\n    format: '[%(levelname)s] - %(message)s'\nhandlers:\n  console:\n    class: logging.StreamHandler\n    formatter: simple\n    stream: ext://sys.stdout\nroot:\n  handlers: [console]\n\ndisable_existing_loggers: false\n")),(0,a.kt)("p",null,"This is what the default logging looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ python my_app.py hydra/job_logging=default\n[2020-08-24 13:43:26,761][__main__][INFO] - Info level message\n")),(0,a.kt)("p",null,"And this is what the custom logging looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py \n[INFO] - Info level message\n")))}m.isMDXComponent=!0}}]);