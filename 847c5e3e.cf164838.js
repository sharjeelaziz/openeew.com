(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(202)),c={id:"build-sensor",title:"Build your own sensor",sidebar_label:"Build a sensor"},i={id:"build-sensor",title:"Build your own sensor",description:"\ud83d\udc49\ud83c\udffc Please also refer to the accompanying Github Repository.",source:"@site/docs/build-sensor.md",permalink:"/docs/build-sensor",editUrl:"https://github.com/openeew/openeew-docs/edit/master/docs/build-sensor.md",sidebar_label:"Build a sensor",sidebar:"someSidebar",previous:{title:"Where to deploy",permalink:"/docs/deployment"},next:{title:"Install an OpenEEW sensor",permalink:"/docs/install-sensor"}},s=[{value:"Hardware",id:"hardware",children:[]},{value:"Enclosure",id:"enclosure",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\ud83d\udc49\ud83c\udffc Please also refer to the accompanying ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openeew/openeew-sensor"}),"Github Repository"),"."),Object(o.b)("p",null,"You can order a pre-assembled, plug and play, sensor that has been flashed with firmware ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://grillo.io/buy-sensor/"}),"here"),"."),Object(o.b)("p",null,"Alternatively, you can build your own with this guide. Here you can create your own PCB, flash firmware, and fabricate your sensor enclosure."),Object(o.b)("h2",{id:"hardware"},"Hardware"),Object(o.b)("p",null,"The OpenEEW sensor features a high performance MEMS accelerometer and ethernet or wifi connectivity. It includes also a loud buzzer and 3 bright Neopixel LEDS for alarm functions. By including alarm functions, the owners of the locations where they are installed are more likely to value and look after the device."),Object(o.b)("p",null,"The sensor has already shown itself to be ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://openeew.com/blog/sensor-benchmark"}),"as good as seismometers that cost 60x more"),"."),Object(o.b)("p",null,"Components are mounted in a PCB with the corresponding circuitry. The board operates at 3.3V with a maximum current of 1A. The accelerometer is accessed via SPI interface, specifically ESP32's VSPI. GPS can optionally be added with a UART interface."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/pcb-openeew.PNG",alt:"PCB design v1.0"})),Object(o.b)("em",{parentName:"p"},"OpenEEW sensor PCB design v1.0")),Object(o.b)("p",null,"You can find here the schematics, PCB and BOM files ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openeew/openeew-sensor/tree/master/eagle"}),"here"),"."),Object(o.b)("h2",{id:"enclosure"},"Enclosure"),Object(o.b)("p",null,"You can either 3D print yourself an enclosure using Fusion 360 or your favorite modelling program. This design features snap lip joints to make it easy to assemble, and flanged base for a sturdy connection to the wall surface.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/case-3d.PNG",alt:"3D printed case v1.0"})),Object(o.b)("em",{parentName:"p"},"OpenEEW case design v1.0")),Object(o.b)("p",null,"Alternatively you can buy a case that fits the board dimensions (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.aliexpress.com/item/4000337012320.html?spm=a2g0o.detail.1000014.19.36fa34d16GPRAR&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.14976.157518.0&scm_id=1007.14976.157518.0&scm-url=1007.14976.157518.0&pvid=d8255fa0-4728-41cd-be64-fe030910cf37&_t=gps-id:pcDetailBottomMoreOtherSeller,scm-url:1007.14976.157518.0,pvid:d8255fa0-4728-41cd-be64-fe030910cf37,tpp_buckets:668%230%23131923%2312_668%23808%236395%23432_668%23888%233325%233_4976%230%23157518%230_4976%232711%237538%23458_4976%233223%2310328%231_4976%233104%239653%235_4976%233141%239887%239_668%232846%238107%2326_668%232717%237564%23644_668%233164%239976%23121"}),"such as this"),")."))}p.isMDXComponent=!0},202:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);