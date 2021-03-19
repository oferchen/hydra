(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(268)),o=n(277),c={id:"search_path",title:"Config Search Path"},s={unversionedId:"advanced/search_path",id:"advanced/search_path",isDocsHomePage:!1,title:"Config Search Path",description:"The Config Search Path is a list of paths that Hydra searches in order to find configs. It is similar to",source:"@site/docs/advanced/search_path.md",slug:"/advanced/search_path",permalink:"/docs/next/advanced/search_path",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/search_path.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1616190770,sidebar:"docs",previous:{title:"Packages",permalink:"/docs/next/advanced/overriding_packages"},next:{title:"Instantiating objects with Hydra",permalink:"/docs/next/advanced/instantiate_objects/overview"}},u=[],l={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Config Search Path is a list of paths that Hydra searches in order to find configs. It is similar to\nthe Python ",Object(i.b)("inlineCode",{parentName:"p"},"PYTHONPATH"),". "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When a config is requested, The first matching config in the search path is used."),Object(i.b)("li",{parentName:"ul"},"Each search path element has a schema prefix such as ",Object(i.b)("inlineCode",{parentName:"li"},"file://")," or ",Object(i.b)("inlineCode",{parentName:"li"},"pkg://")," that is corresponding to a ",Object(i.b)("inlineCode",{parentName:"li"},"ConfigSourcePlugin"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"file://")," points to a file system path. It can either be an absolute path or a relative path.\nRelative path will be resolved to absolute based on the current working dir. Path separator is ",Object(i.b)("inlineCode",{parentName:"li"},"/")," on all Operating\nSystems."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pkg://")," points to an importable Python module, with ",Object(i.b)("inlineCode",{parentName:"li"},".")," being the separator. ",Object(i.b)("inlineCode",{parentName:"li"},"__init__.py")," files are needed in\ndirectories for Python to treat them as packages.")))),Object(i.b)("p",null,"You can inspect the search path and the configurations loaded by Hydra via the ",Object(i.b)("inlineCode",{parentName:"p"},"--info")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ python my_app.py --info config\n")),Object(i.b)("p",null,"There are a few ways to modify the config search path, enabling Hydra to access configuration in\ndifferent locations.\nUse a combination of the methods described below:"),Object(i.b)("h4",{id:"using-hydramain"},"Using ",Object(i.b)("inlineCode",{parentName:"h4"},"@hydra.main()")),Object(i.b)("p",null,"Using the  ",Object(i.b)("inlineCode",{parentName:"p"},"config_path")," parameter ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main()"),".  The ",Object(i.b)("inlineCode",{parentName:"p"},"config_path")," is relative to location of the Python script."),Object(i.b)("h4",{id:"overriding-hydrasearchpath-config"},"Overriding ",Object(i.b)("inlineCode",{parentName:"h4"},"hydra.searchpath")," config"),Object(i.b)(o.a,{text:"Example application",to:"examples/advanced/config_search_path",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"In some cases you may want to add multiple locations to the search path.\nFor example, an app may want to read the configs from an additional Python module or\nan additional directory on the file system.",Object(i.b)("br",{parentName:"p"}),"\n","Configure this using ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.searchpath")," in your primary config or your command line."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"hydra.searchpath can ",Object(i.b)("strong",{parentName:"p"},"only")," be configured in the primary config. Attempting  to configure it in other configs will result in an error."))),Object(i.b)("p",null,"In this example, we add a second config directory - ",Object(i.b)("inlineCode",{parentName:"p"},"additional_conf"),", next to the first config directory:"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500\u2500 __init__.py\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 dataset\n\u2502\xa0\xa0     \u2514\u2500\u2500 cifar10.yaml\n\u251c\u2500\u2500 additonal_conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u2514\u2500\u2500 dataset\n\u2502\xa0\xa0     \u2514\u2500\u2500 imagenet.yaml\n\u2514\u2500\u2500 my_app.py\n"))),Object(i.b)("div",{className:"col  col--8"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'}),'\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n')))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"conf/config.yaml")," is the primary config for ",Object(i.b)("inlineCode",{parentName:"p"},"my_app.py"),", config groups ",Object(i.b)("inlineCode",{parentName:"p"},"cifar10")," and ",Object(i.b)("inlineCode",{parentName:"p"},"imagenet")," are\nunder different folders.\nWe can add ",Object(i.b)("inlineCode",{parentName:"p"},"additonal_conf")," to  ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.searchpath")," for Hydra to discover ",Object(i.b)("inlineCode",{parentName:"p"},"dataset/imagenet"),"."),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--7"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - dataset: cifar10\n\nhydra:\n  searchpath:\n    - pkg://additonal_conf\n    # You can also use file based schema:\n    # - file:///etc/my_app\n    # - file://${env:HOME}/.my_app\n"))),Object(i.b)("div",{className:"col  col--5"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py output"',title:'"my_app.py','output"':!0}),"dataset:\n  name: cifar10\n  path: /datasets/cifar10\n\n\n\n\n\n\n")))),Object(i.b)("p",null,"Overriding ",Object(i.b)("inlineCode",{parentName:"p"},"dataset=imagenet")," from the commandline:"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="command line override"',title:'"command',line:!0,'override"':!0}),"python my_app.py dataset=imagenet\n\n\n"))),Object(i.b)("div",{className:"col  col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py output"',title:'"my_app.py','output"':!0}),"dataset:\n  name: imagenet\n  path: /datasets/imagenet\n")))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"hydra.searchpath")," can be defined or overridden via the command line as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="command line override"',title:'"command',line:!0,'override"':!0}),"python my_app.py 'hydra.searchpath=[pkg://additonal_conf]'\n")),Object(i.b)("h4",{id:"overriding---config-dir-from-the-command-line"},"Overriding ",Object(i.b)("inlineCode",{parentName:"h4"},"--config-dir")," from the command line"),Object(i.b)("p",null,"This is a less flexible alternative to ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.searchpath"),".\nSee this ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/hydra-command-line-flags"}),"page")," for more info."),Object(i.b)("h4",{id:"creating-a-searchpathplugin"},"Creating a ",Object(i.b)("inlineCode",{parentName:"h4"},"SearchPathPlugin")),Object(i.b)(o.a,{text:"ExampleSearchPathPlugin",to:"examples/plugins/example_searchpath_plugin/",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"Framework authors may want to add their configs to the search path automatically once their package is installed,\neliminating the need for any actions from the users.\nThis can be achieved using a ",Object(i.b)("inlineCode",{parentName:"p"},"SearchPathPlugin"),". Check the example plugin linked above for more details."))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(f,c(c({ref:t},u),{},{components:n})):r.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},270:function(e,t,n){"use strict";n.r(t);var a=n(11);n.d(t,"MemoryRouter",(function(){return a.d})),n.d(t,"Prompt",(function(){return a.f})),n.d(t,"Redirect",(function(){return a.g})),n.d(t,"Route",(function(){return a.h})),n.d(t,"Router",(function(){return a.i})),n.d(t,"StaticRouter",(function(){return a.j})),n.d(t,"Switch",(function(){return a.k})),n.d(t,"generatePath",(function(){return a.l})),n.d(t,"matchPath",(function(){return a.m})),n.d(t,"useHistory",(function(){return a.n})),n.d(t,"useLocation",(function(){return a.o})),n.d(t,"useParams",(function(){return a.p})),n.d(t,"useRouteMatch",(function(){return a.q})),n.d(t,"withRouter",(function(){return a.r})),n.d(t,"BrowserRouter",(function(){return a.a})),n.d(t,"HashRouter",(function(){return a.b})),n.d(t,"Link",(function(){return a.c})),n.d(t,"NavLink",(function(){return a.e}))},271:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(11),o=n(269),c=n(7),s=Object(a.createContext)({collectLink:function(){}}),u=n(272),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,b=e.to,f=e.href,m=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,O=void 0===v||v,j=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(u.b)().withBaseUrl,N=Object(a.useContext)(s),w=b||f,_=Object(o.a)(w),C=null==w?void 0:w.replace("pathname://",""),P=void 0!==C?(n=C,O&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,D=Object(a.useRef)(!1),x=p?i.e:i.c,A=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!A&&_&&window.docusaurus.prefetch(P),function(){A&&d&&d.disconnect()}}),[P,A,_]);var k=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,E=!P||!_||k;return P&&_&&!k&&!g&&N.collectLink(P),E?r.a.createElement("a",Object.assign({href:P},w&&!_&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(x,Object.assign({},j,{onMouseEnter:function(){D.current||(window.docusaurus.preload(P),D.current=!0)},innerRef:function(e){var t,n;A&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(P)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:P||""},p&&{isActive:h,activeClassName:m}))}},272:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(21),r=n(269);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},273:function(e,t,n){try{e.exports=n(274)}catch(a){e.exports={}}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(270),r=n(275),i=n(276);t.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=a.useLocation().pathname;return i.getActivePlugin(n,r,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,r)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getActiveVersion(n,r)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getActiveDocContext(n,r)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getDocVersionSuggestions(n,r)}},275:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(21);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(270);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var r=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var r=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var r,i,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(r=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===r&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),r=t.getActiveDocContext(e,n),i=r.activeVersion!==a;return{latestDocSuggestion:i?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:i?a:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(3),r=n(0),i=n.n(r),o=n(271),c=n(21),s=n(273);function u(e){return i.a.createElement(o.a,Object(a.a)({},e,{to:(t=e.to,r=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==r?void 0:r.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,r}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(u,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);