"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5517],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return s},T:function(){return d}});var a=n(7462),i=n(7294),r=n(6742),l=n(2263),o=n(907);function s(e){return i.createElement(r.Z,(0,a.Z)({},e,{to:(t=e.to,s=(0,o.zu)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function d(e){var t,n=null!=(t=e.text)?t:"Example";return i.createElement(s,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},1828:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=n(3899),o=["components"],s={id:"basic",hide_title:!0,sidebar_label:"Basic Override syntax"},d=void 0,p={unversionedId:"advanced/override_grammar/basic",id:"advanced/override_grammar/basic",isDocsHomePage:!1,title:"basic",description:"Basic Override syntax",source:"@site/docs/advanced/override_grammar/basic.md",sourceDirName:"advanced/override_grammar",slug:"/advanced/override_grammar/basic",permalink:"/docs/next/advanced/override_grammar/basic",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/override_grammar/basic.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1633743139,formattedLastUpdatedAt:"10/9/2021",frontMatter:{id:"basic",hide_title:!0,sidebar_label:"Basic Override syntax"},sidebar:"docs",previous:{title:"Hydra's command line flags",permalink:"/docs/next/advanced/hydra-command-line-flags"},next:{title:"Extended Override syntax",permalink:"/docs/next/advanced/override_grammar/extended"}},c=[{value:"Basic Override syntax",id:"basic-override-syntax",children:[]},{value:"Basic examples",id:"basic-examples",children:[{value:"Modifying the Config Object",id:"modifying-the-config-object",children:[]},{value:"Modifying the Defaults List",id:"modifying-the-defaults-list",children:[]}]},{value:"Grammar",id:"grammar",children:[]},{value:"Elements",id:"elements",children:[{value:"Key",id:"key",children:[]},{value:"Quoted values",id:"quoted-values",children:[]},{value:"Whitespaces in unquoted values",id:"whitespaces-in-unquoted-values",children:[]},{value:"Escaped characters in unquoted values",id:"escaped-characters-in-unquoted-values",children:[]},{value:"Primitives",id:"primitives",children:[]}]},{value:"Dictionaries and Lists",id:"dictionaries-and-lists",children:[{value:"Lists",id:"lists",children:[]},{value:"Dictionaries",id:"dictionaries",children:[]},{value:"Sweeper syntax",id:"sweeper-syntax",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Working with your shell",id:"working-with-your-shell",children:[{value:"Bash",id:"bash",children:[]},{value:"Other shells",id:"other-shells",children:[]}]}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-override-syntax"},"Basic Override syntax"),(0,r.kt)("p",null,"You can manipulate your configuration with overrides (via the command line or the Compose API). This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modifying the ",(0,r.kt)("inlineCode",{parentName:"li"},"Defaults List")),(0,r.kt)("li",{parentName:"ul"},"Modifying the config object")),(0,r.kt)("p",null,"Overrides matching a config group are modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"Defaults List"),";\nThe rest are manipulating the config object."),(0,r.kt)("h2",{id:"basic-examples"},"Basic examples"),(0,r.kt)("h3",{id:"modifying-the-config-object"},"Modifying the Config Object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Overriding a config value : ",(0,r.kt)("inlineCode",{parentName:"li"},"foo.bar=value")),(0,r.kt)("li",{parentName:"ul"},"Appending a config value : ",(0,r.kt)("inlineCode",{parentName:"li"},"+foo.bar=value")),(0,r.kt)("li",{parentName:"ul"},"Appending or overriding a config value : ",(0,r.kt)("inlineCode",{parentName:"li"},"++foo.bar=value")),(0,r.kt)("li",{parentName:"ul"},"Removing a config value : ",(0,r.kt)("inlineCode",{parentName:"li"},"~foo.bar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"~foo.bar=value"))),(0,r.kt)("h3",{id:"modifying-the-defaults-list"},"Modifying the Defaults List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Overriding selected Option: ",(0,r.kt)("inlineCode",{parentName:"li"},"db=mysql")),(0,r.kt)("li",{parentName:"ul"},"Appending to Defaults List: ",(0,r.kt)("inlineCode",{parentName:"li"},"+db=mysql")),(0,r.kt)("li",{parentName:"ul"},"Deleting from Defaults List: ",(0,r.kt)("inlineCode",{parentName:"li"},"~db"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"~db=mysql"))),(0,r.kt)("h2",{id:"grammar"},"Grammar"),(0,r.kt)("p",null,"Hydra supports a rich ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-specific_language"},"DSL")," in the command line.\nBelow are the parser rules from grammar. You can see the full ",(0,r.kt)(l.Z,{to:"hydra/grammar/OverrideLexer.g4",mdxType:"GithubLink"},"Lexer")," and ",(0,r.kt)(l.Z,{to:"hydra/grammar/OverrideParser.g4",mdxType:"GithubLink"},"Parser")," definitions on GitHub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-antlr4",metastring:'title="OverrideParser.g4"',title:'"OverrideParser.g4"'},"// High-level command-line override.\n\noverride: (\n      key EQUAL value?                           // key=value, key= (for empty value)\n    | TILDE key (EQUAL value?)?                  // ~key | ~key=value\n    | PLUS PLUS? key EQUAL value?                // +key= | +key=value | ++key=value\n) EOF;\n\n// Key:\nkey : packageOrGroup (AT package)?;              // key | group@pkg\n\npackageOrGroup: package | ID (SLASH ID)+;        // db, hydra/launcher\npackage: ( | ID | KEY_SPECIAL | DOT_PATH);       // db, $db, hydra.launcher, or the empty (for _global_ package)\n\n// Elements (that may be swept over).\n\nvalue: element | simpleChoiceSweep;\n\nelement:\n      primitive\n    | listContainer\n    | dictContainer\n    | function\n;\n\nsimpleChoiceSweep:\n      element (COMMA element)+                   // value1,value2,value3\n;\n\n// Functions.\n\nargName: ID EQUAL;\nfunction: ID POPEN (argName? element (COMMA argName? element )* )? PCLOSE;\n\n// Data structures.\n\nlistContainer: BRACKET_OPEN                      // [], [1,2,3], [a,b,[1,2]]\n    (element(COMMA element)*)?\nBRACKET_CLOSE;\n\ndictContainer: BRACE_OPEN (dictKeyValuePair (COMMA dictKeyValuePair)*)? BRACE_CLOSE;  // {}, {a:10,b:20}\ndictKeyValuePair: dictKey COLON element;\n\n// Primitive types.\n\nprimitive:\n      QUOTED_VALUE                               // 'hello world', \"hello world\"\n    | (   ID                                     // foo_10\n        | NULL                                   // null, NULL\n        | INT                                    // 0, 10, -20, 1_000_000\n        | FLOAT                                  // 3.14, -20.0, 1e-1, -10e3\n        | BOOL                                   // true, TrUe, false, False\n        | INTERPOLATION                          // ${foo.bar}, ${oc.env:USER,me}\n        | UNQUOTED_CHAR                          // /, -, \\, +, ., $, %, *, @, ?\n        | COLON                                  // :\n        | ESC                                    // \\\\, \\(, \\), \\[, \\], \\{, \\}, \\:, \\=, \\ , \\\\t, \\,\n        | WS                                     // whitespaces\n    )+;\n\n// Same as `primitive` except that `COLON` and `INTERPOLATION` are not allowed.\ndictKey:\n    (   ID                                     // foo_10\n      | NULL                                   // null, NULL\n      | INT                                    // 0, 10, -20, 1_000_000\n      | FLOAT                                  // 3.14, -20.0, 1e-1, -10e3\n      | BOOL                                   // true, TrUe, false, False\n      | UNQUOTED_CHAR                          // /, -, \\, +, ., $, %, *, @, ?\n      | ESC                                    // \\\\, \\(, \\), \\[, \\], \\{, \\}, \\:, \\=, \\ , \\\\t, \\,\n      | WS                                     // whitespaces\n    )+;\n")),(0,r.kt)("h2",{id:"elements"},"Elements"),(0,r.kt)("h3",{id:"key"},"Key"),(0,r.kt)("p",null,"Key is the component before the =. A few examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"foo.bar           # A config key\nhydra/launcher    # A config group\ngroup@pkg         # A config group assigned to the package pkg\ngroup@pkg1:pkg2   # A config group changing the package from pkg1 to pkg2\n")),(0,r.kt)("h3",{id:"quoted-values"},"Quoted values"),(0,r.kt)("p",null,"Hydra supports both double quotes and single quoted values.\nQuoted strings can accept any value between the quotes, but some characters need escaping:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to include a single quote in a single quoted string, use ",(0,r.kt)("inlineCode",{parentName:"li"},"\\'")," (for double quotes in a double quoted string, use ",(0,r.kt)("inlineCode",{parentName:"li"},'\\"'),")"),(0,r.kt)("li",{parentName:"ul"},"any sequence of ",(0,r.kt)("inlineCode",{parentName:"li"},"\\")," characters preceding a quote (either an escaped quote as described in the previous point, or the closing quote)\nmust be escaped by doubling the number of ",(0,r.kt)("inlineCode",{parentName:"li"},"\\"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Double quotes"',title:'"Double','quotes"':!0},'"hello there"\n"escaped \\"double quote\\""\n"the path is C:\\\\\\"some folder\\"\\\\"\n"1,2,3"\n"{a:10} ${xyz}"\n"\'single quoted string\'"\n'))),(0,r.kt)("div",{className:"col  col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Single quotes"',title:'"Single','quotes"':!0},"'hello there'\n'escaped \\'single quote\\''\n'the path is C:\\\\\\'some folder\\'\\\\'\n'1,2,3'\n'{a:10} ${xyz}'\n'\"double quoted string\"'\n")))),(0,r.kt)("h3",{id:"whitespaces-in-unquoted-values"},"Whitespaces in unquoted values"),(0,r.kt)("p",null,"Unquoted Override values can contain non leading or trailing whitespaces.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"p"},"msg=hello world")," is a legal override (key is ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," and value is the string ",(0,r.kt)("inlineCode",{parentName:"p"},"hello world"),").\nNormally, your shell will interpret values with whitespaces as being multiple parameters (",(0,r.kt)("inlineCode",{parentName:"p"},"key=a b")," would be interpreted as ",(0,r.kt)("inlineCode",{parentName:"p"},"key=a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),").\nTo prevent this you can quote them with a single quote. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'msg=hello world'\n")),(0,r.kt)("p",null,"Note that trailing and leading whitespace are ignored, the above is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'msg=    hello world    '\n")),(0,r.kt)("h3",{id:"escaped-characters-in-unquoted-values"},"Escaped characters in unquoted values"),(0,r.kt)("p",null,"Some otherwise special characters may be included in unquoted values by escaping them with a ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),".\nThese characters are: ",(0,r.kt)("inlineCode",{parentName:"p"},"\\()[]{}:=, \\t")," (the last two ones being the whitespace and tab characters)."),(0,r.kt)("p",null,"As an example, in the following ",(0,r.kt)("inlineCode",{parentName:"p"},"dir")," is set to the string ",(0,r.kt)("inlineCode",{parentName:"p"},"job{a=1,b=2,c=3}"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'dir=job\\{a\\=1\\,b\\=2\\,c\\=3\\}'\n")),(0,r.kt)("h3",{id:"primitives"},"Primitives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," : oompa10, loompa_12"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"null"),": null"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int"),": 10, -20, 0, 1_000_000."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"float"),": 3.14, -10e6, inf, -inf, nan."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool"),": true, false"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dot_path"),": foo.bar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interpolation"),": ${foo.bar}, ${oc.env:USER,me}")),(0,r.kt)("p",null,"Constants (null, true, false, inf, nan) are case-insensitive."),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Always single-quote interpolations in the shell, to prevent replacement with shell variables:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'dir=/root/${name}'\n")),(0,r.kt)("p",{parentName:"div"},"In addition, more complex interpolations containing special characters may require being passed within a quoted value\n(note the extra double quotes surrounding the interpolation):"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'dir=\"${get_dir: {root: /root, name: ${name}}}\"'\n")))),(0,r.kt)("h2",{id:"dictionaries-and-lists"},"Dictionaries and Lists"),(0,r.kt)("h3",{id:"lists"},"Lists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"foo=[1,2,3]\nnested=[a,[b,[c]]]\n")),(0,r.kt)("h3",{id:"dictionaries"},"Dictionaries"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"foo={a:10,b:20}\nnested={a:10,b:{c:30,d:40}}\n")),(0,r.kt)("p",null,"Dictionaries are merged, not assigned. The following example illustrates the point:"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Input config"',title:'"Input','config"':!0},"db:\n  driver: mysql\n  user: ???\n  pass: ???\n"))),(0,r.kt)("div",{className:"col  col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db={user:root,pass:1234}"',title:'"db'},"db:\n  driver: mysql\n  user: root\n  pass: 1234\n")))),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Always single-quote overrides that contains dicts and lists in the shell."))),(0,r.kt)("h3",{id:"sweeper-syntax"},"Sweeper syntax"),(0,r.kt)("p",null,"A choice sweep is comma separated list with two or more elements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'key=a,b                       # Simple sweep: ChoiceSweep(a, b)\nkey="a,b","c,d"               # Elements can be quoted strings, ChoiceSweep("a,b", "c,d")\nkey=[a,b],[c,d]               # Elements can be real lists, ChoiceSweep([a,b], [c,d])\nkey={a:10, b:20},{c:30,d:40}  # And dictionaries: ChoiceSweep({a:10, b:20}, {c:30,d:40})\n')),(0,r.kt)("p",null,"More sweeping options are described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/extended"},"Extended Grammar page"),"."),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You may need to quote your choice sweep in the shell."))),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Hydra supports several functions in the command line.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/extended"},"Extended Grammar page")," for more information."),(0,r.kt)("h2",{id:"working-with-your-shell"},"Working with your shell"),(0,r.kt)("p",null,"All shells interprets command line inputs and may change what is passed to the process.\nA good way to determine what the shell is doing to your command is to ",(0,r.kt)("inlineCode",{parentName:"p"},"echo")," it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# bash output\n$ echo foo_{a:10,b:20} ${HOME} [b,c]*\nfoo_a:10 foo_b:20 /home/omry build_helpers\n$ echo 'foo_{a:10,b:20}' '${HOME}' '[b,c]*'\nfoo_{a:10,b:20} ${HOME} [b,c]*\n")),(0,r.kt)("p",null,"If in doubt, quote a command line element with a ",(0,r.kt)("strong",{parentName:"p"},"single quote")," (",(0,r.kt)("inlineCode",{parentName:"p"},"'"),")."),(0,r.kt)("p",null,"If you want to pass quotes to Hydra in a shell quoted string, it's best to pass double quotes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ echo \'"hello world"\'\n"hello world"\n')),(0,r.kt)("p",null,"You can use some shell specific commands to change their behavior, but the cost will be that their behavior will change."),(0,r.kt)("h3",{id:"bash"},"Bash"),(0,r.kt)("p",null,"You can disable braces expansion, filename generation (globing) and hist expansion. Please note that this will change\nyour shell behavior for the current session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ set +o braceexpand -o noglob +o histexpand\n$ echo key1={a:10,b:20} key2=${HOME} key=[b]*\nkey1={a:10,b:20} key2=/home/omry key=[b]*\n# does not help with () though:\n$ echo key=choice(a,b,c)\nbash: syntax error near unexpected token '('\n$ echo 'key=choice(a,b,c)'\nkey=choice(a,b,c)\n")),(0,r.kt)("h3",{id:"other-shells"},"Other shells"),(0,r.kt)("p",null,"Send a PR to add information about your favorite shell here."))}u.isMDXComponent=!0}}]);