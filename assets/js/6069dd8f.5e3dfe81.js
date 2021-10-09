"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6328],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7390:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"intro",title:"Overview",sidebar_label:"Introduction"},u=void 0,s={unversionedId:"configure_hydra/intro",id:"version-1.0/configure_hydra/intro",isDocsHomePage:!1,title:"Overview",description:"Many things in Hydra can be customized. This includes:",source:"@site/versioned_docs/version-1.0/configure_hydra/Intro.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/intro",permalink:"/docs/1.0/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/configure_hydra/Intro.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1633743139,formattedLastUpdatedAt:"10/9/2021",frontMatter:{id:"intro",title:"Overview",sidebar_label:"Introduction"},sidebar:"version-1.0/docs",previous:{title:"Read-only config",permalink:"/docs/1.0/patterns/write_protect_config_node"},next:{title:"Job Configuration",permalink:"/docs/1.0/configure_hydra/job"}},p=[{value:"Runtime variables",id:"runtime-variables",children:[{value:"Hydra resolvers",id:"hydra-resolvers",children:[]}]}],c={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many things in Hydra can be customized. This includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Launcher configurations"),(0,a.kt)("li",{parentName:"ul"},"Sweeper configuration"),(0,a.kt)("li",{parentName:"ul"},"Logging configuration"),(0,a.kt)("li",{parentName:"ul"},"Run and Multirun output directory patterns"),(0,a.kt)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),(0,a.kt)("p",null,"Hydra can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),(0,a.kt)("p",null,"The Hydra configuration actually lives in the same config object as your configuration, but is removed prior to running\nyour function to reduce confusion.\nYou can view the configuration with ",(0,a.kt)("inlineCode",{parentName:"p"},"--cfg hydra|job|all")),(0,a.kt)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging : default     # Job's logging config\n  - hydra/launcher: basic           # Launcher config\n  - hydra/sweeper: basic            # Sweeper config\n  - hydra/output: default           # Output directory\n")),(0,a.kt)("p",null,"You can view the Hydra config structure ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/hydra/conf"},"here"),"."),(0,a.kt)("p",null,"This is a subset of the composed Hydra configuration node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    # Output directory for normal runs\n    dir: ./outputs/${now:%Y-%m-%d_%H-%M-%S}\n  sweep:\n    # Output directory for sweep runs\n    dir: /checkpoint/${env:USER}/outputs/${now:%Y-%m-%d_%H-%M-%S}\n    # Output sub directory for sweep runs.\n    subdir: ${hydra.job.num}_${hydra.job.id}\n")),(0,a.kt)("h2",{id:"runtime-variables"},"Runtime variables"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra")," package is deleted from your config when the function runs to reduce the amount of noise\nin the config passed to the function.",(0,a.kt)("br",{parentName:"p"}),"\n","You can still access all config nodes in Hydra through the custom resolver ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra"),". "),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"config_name: ${hydra:job.config_name}\n")),(0,a.kt)("p",null,"Pay close attention to the syntax: The resolver name is ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra"),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," is passed after the colon."),(0,a.kt)("p",null,"The following variables are some of the variables populated at runtime.",(0,a.kt)("br",{parentName:"p"}),"\n","You can see the full Hydra config using ",(0,a.kt)("inlineCode",{parentName:"p"},"--cfg hydra"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hydra.job"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"hydra.job.name")," : Job name, defaults to python file name without suffix. can be overridden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"hydra.job.override_dirname")," : Pathname derived from the overrides for this job"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"hydra.job.num")," : job serial number in sweep"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"hydra.job.id")," : Job ID in the underlying jobs system (SLURM etc) ")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hydra.runtime"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"hydra.runtime.version"),": Hydra's version"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"hydra.runtime.cwd"),": Original working directory the app was executed from")),(0,a.kt)("h3",{id:"hydra-resolvers"},"Hydra resolvers"),(0,a.kt)("p",null,"Hydra supports ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/hydra/core/utils.py"},"several OmegaConf resolvers")," by default."),(0,a.kt)("h4",{id:"now"},(0,a.kt)("inlineCode",{parentName:"h4"},"now")),(0,a.kt)("p",null,"Creates a string representing the current time using ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior"},"strftime"),".\nFor example, for formatting the time you can use something like",(0,a.kt)("inlineCode",{parentName:"p"},"${now:%H-%M-%S}"),"."),(0,a.kt)("h4",{id:"hydra"},(0,a.kt)("inlineCode",{parentName:"h4"},"hydra")),(0,a.kt)("p",null,"Interpolates into the ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra")," config node.\nFor example, use ",(0,a.kt)("inlineCode",{parentName:"p"},"${hydra:job.name}")," to get the Hydra job name."),(0,a.kt)("h4",{id:"python_version"},(0,a.kt)("inlineCode",{parentName:"h4"},"python_version")),(0,a.kt)("p",null,"Return a string representing the runtime python version by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"sys.version_info"),".\nYou can pass in a parameter to specify level of version returned. By default, the resolver returns the major and minor version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"python_version: ${python_version:}                         # runtime python version, eg: 3.8\nmajor_version: ${python_version:major}                     # runtime python major version, eg: 3\nminor_version: ${python_version:minor}                     # runtime python version in the format major.minor, eg: 3.8\nmicro_version: ${python_version:micro}                     # runtime python version in the format major.minor.micro, eg: 3.8.2\n")),(0,a.kt)("p",null,"You can learn more about OmegaConf ",(0,a.kt)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"here"),"."))}d.isMDXComponent=!0}}]);