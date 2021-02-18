(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{256:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return u})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return s})),n.d(e,"default",(function(){return d}));var r=n(3),o=n(8),i=(n(0),n(268)),a=n(277),u={id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},c={unversionedId:"tutorials/structured_config/intro",id:"tutorials/structured_config/intro",isDocsHomePage:!1,title:"Introduction to Structured Configs",description:"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the Basic Tutorial.",source:"@site/docs/tutorials/structured_config/0_intro.md",slug:"/tutorials/structured_config/intro",permalink:"/docs/next/tutorials/structured_config/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/0_intro.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1613609583,sidebar_label:"Introduction to Structured Configs",sidebar:"docs",previous:{title:"Tab completion",permalink:"/docs/next/tutorials/basic/running_your_app/tab_completion"},next:{title:"Minimal example",permalink:"/docs/next/tutorials/structured_config/minimal_example"}},s=[],l={toc:s};function d(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/your_first_app/simple_cli"}),"Basic Tutorial"),".\nThe examples in this tutorial are available ",Object(i.b)(a.b,{to:"examples/tutorials/structured_configs",mdxType:"GithubLink"},"here"),"."),Object(i.b)("p",null,"Structured Configs use Python ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.python.org/3.7/library/dataclasses.html"}),"dataclasses")," to\ndescribe your configuration structure and types. They enable:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Runtime type checking")," as you compose or mutate your config "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Static type checking")," when using static type checkers (mypy, PyCharm, etc.)")),Object(i.b)("h4",{id:"structured-configs-supports"},"Structured Configs supports:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Primitive types (",Object(i.b)("inlineCode",{parentName:"li"},"int"),", ",Object(i.b)("inlineCode",{parentName:"li"},"bool"),", ",Object(i.b)("inlineCode",{parentName:"li"},"float"),", ",Object(i.b)("inlineCode",{parentName:"li"},"str"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Enums"),") "),Object(i.b)("li",{parentName:"ul"},"Nesting of Structured Configs"),Object(i.b)("li",{parentName:"ul"},"Containers (List and Dict) containing primitives or Structured Configs"),Object(i.b)("li",{parentName:"ul"},"Optional fields")),Object(i.b)("h4",{id:"structured-configs-limitations"},"Structured Configs Limitations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Union")," types are not supported (except ",Object(i.b)("inlineCode",{parentName:"li"},"Optional"),")"),Object(i.b)("li",{parentName:"ul"},"User methods are not supported")),Object(i.b)("h4",{id:"there-are-two-primary-patterns-for-using-structured-configs"},"There are two primary patterns for using Structured configs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"As a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/tutorials/structured_config/minimal_example"}),"config"),", in place of configuration files (often a starting place)"),Object(i.b)("li",{parentName:"ul"},"As a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/tutorials/structured_config/schema"}),"config schema")," validating configuration files (better for complex use cases)")),Object(i.b)("p",null,"With both patterns, you still get everything Hydra has to offer (config composition, Command line overrides etc).\nThis tutorial covers both. ","*",Object(i.b)("strong",{parentName:"p"},"Read it in order"),"*","."),Object(i.b)("p",null,"Hydra supports OmegaConf's Structured Configs via the ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigStore")," API.\nThis tutorial does not assume any knowledge of them.\nIt is recommended that you visit the ",Object(i.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html",target:"_blank"},"OmegaConf Structured Configs page")," to learn more later."))}d.isMDXComponent=!0},268:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=o.a.createContext({}),l=function(t){var e=o.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},d=function(t){var e=l(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},p=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=l(n),p=r,b=d["".concat(a,".").concat(p)]||d[p]||f[p]||i;return n?o.a.createElement(b,u(u({ref:e},s),{},{components:n})):o.a.createElement(b,u({ref:e},s))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},269:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))},270:function(t,e,n){"use strict";n.r(e);var r=n(11);n.d(e,"MemoryRouter",(function(){return r.d})),n.d(e,"Prompt",(function(){return r.f})),n.d(e,"Redirect",(function(){return r.g})),n.d(e,"Route",(function(){return r.h})),n.d(e,"Router",(function(){return r.i})),n.d(e,"StaticRouter",(function(){return r.j})),n.d(e,"Switch",(function(){return r.k})),n.d(e,"generatePath",(function(){return r.l})),n.d(e,"matchPath",(function(){return r.m})),n.d(e,"useHistory",(function(){return r.n})),n.d(e,"useLocation",(function(){return r.o})),n.d(e,"useParams",(function(){return r.p})),n.d(e,"useRouteMatch",(function(){return r.q})),n.d(e,"withRouter",(function(){return r.r})),n.d(e,"BrowserRouter",(function(){return r.a})),n.d(e,"HashRouter",(function(){return r.b})),n.d(e,"Link",(function(){return r.c})),n.d(e,"NavLink",(function(){return r.e}))},271:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(11),a=n(269),u=n(7),c=Object(r.createContext)({collectLink:function(){}}),s=n(272),l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};e.a=function(t){var e,n,d,f=t.isNavLink,p=t.to,b=t.href,g=t.activeClassName,m=t.isActive,v=t["data-noBrokenLinkCheck"],h=t.autoAddBaseUrl,O=void 0===h||h,j=l(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(s.b)().withBaseUrl,w=Object(r.useContext)(c),D=p||b,C=Object(a.a)(D),x=null==D?void 0:D.replace("pathname://",""),P=void 0!==x?(n=x,O&&function(t){return t.startsWith("/")}(n)?y(n):n):void 0,A=Object(r.useRef)(!1),N=f?i.e:i.c,V=u.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!V&&C&&window.docusaurus.prefetch(P),function(){V&&d&&d.disconnect()}}),[P,V,C]);var k=null!==(e=null==P?void 0:P.startsWith("#"))&&void 0!==e&&e,E=!P||!C||k;return P&&C&&!k&&!v&&w.collectLink(P),E?o.a.createElement("a",Object.assign({href:P},D&&!C&&{target:"_blank",rel:"noopener noreferrer"},j)):o.a.createElement(N,Object.assign({},j,{onMouseEnter:function(){A.current||(window.docusaurus.preload(P),A.current=!0)},innerRef:function(t){var e,n;V&&t&&C&&(e=t,n=function(){window.docusaurus.prefetch(P)},(d=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),n())}))}))).observe(e))},to:P||""},f&&{isActive:m,activeClassName:g}))}},272:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=n(21),o=n(269);function i(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(u)return e+n;var l=n.startsWith(e)?n:e+n.replace(/^\//,"");return s?t+l:l}(i,n,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},273:function(t,e,n){try{t.exports=n(274)}catch(r){t.exports={}}},274:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDocVersionSuggestions=e.useActiveDocContext=e.useActiveVersion=e.useLatestVersion=e.useVersions=e.useActivePluginAndVersion=e.useActivePlugin=e.useDocsData=e.useAllDocsData=void 0;var r=n(270),o=n(275),i=n(276);e.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},e.useDocsData=function(t){return o.usePluginData("docusaurus-plugin-content-docs",t)},e.useActivePlugin=function(t){void 0===t&&(t={});var n=e.useAllDocsData(),o=r.useLocation().pathname;return i.getActivePlugin(n,o,t)},e.useActivePluginAndVersion=function(t){void 0===t&&(t={});var n=e.useActivePlugin(t),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,o)}},e.useVersions=function(t){return e.useDocsData(t).versions},e.useLatestVersion=function(t){var n=e.useDocsData(t);return i.getLatestVersion(n)},e.useActiveVersion=function(t){var n=e.useDocsData(t),o=r.useLocation().pathname;return i.getActiveVersion(n,o)},e.useActiveDocContext=function(t){var n=e.useDocsData(t),o=r.useLocation().pathname;return i.getActiveDocContext(n,o)},e.useDocVersionSuggestions=function(t){var n=e.useDocsData(t),o=r.useLocation().pathname;return i.getDocVersionSuggestions(n,o)}},275:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o})),n.d(e,"useAllPluginInstancesData",(function(){return i})),n.d(e,"usePluginData",(function(){return a}));var r=n(21);function o(){var t=Object(r.default)().globalData;if(!t)throw new Error("Docusaurus global data not found");return t}function i(t){var e=o()[t];if(!e)throw new Error("Docusaurus plugin global data not found for pluginName="+t);return e}function a(t,e){void 0===e&&(e="default");var n=i(t)[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+t+" and pluginId="+e);return n}},276:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDocVersionSuggestions=e.getActiveDocContext=e.getActiveVersion=e.getLatestVersion=e.getActivePlugin=void 0;var r=n(270);e.getActivePlugin=function(t,e,n){void 0===n&&(n={});var o=Object.entries(t).find((function(t){t[0];var n=t[1];return!!r.matchPath(e,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+e+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(t).map((function(t){return t.path})).join(", "));return i},e.getLatestVersion=function(t){return t.versions.find((function(t){return t.isLast}))},e.getActiveVersion=function(t,n){var o=e.getLatestVersion(t);return[].concat(t.versions.filter((function(t){return t!==o})),[o]).find((function(t){return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})}))},e.getActiveDocContext=function(t,n){var o,i,a=e.getActiveVersion(t,n),u=null==a?void 0:a.docs.find((function(t){return!!r.matchPath(n,{path:t.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:u,alternateDocVersions:u?(o=u.id,i={},t.versions.forEach((function(t){t.docs.forEach((function(e){e.id===o&&(i[t.name]=e)}))})),i):{}}},e.getDocVersionSuggestions=function(t,n){var r=e.getLatestVersion(t),o=e.getActiveDocContext(t,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},277:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var r=n(3),o=n(0),i=n.n(o),a=n(271),u=n(21),c=n(273);function s(t){return i.a.createElement(a.a,Object(r.a)({},t,{to:(e=t.to,o=Object(c.useActiveVersion)(),Object(u.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+e),target:"_blank"}));var e,n,o}function l(t){var e,n=null!==(e=t.text)&&void 0!==e?e:"Example";return i.a.createElement(s,t,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);