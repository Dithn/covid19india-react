(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[14],{240:function(e,t){!function(){"use strict";var e=document.createElement("details"),t="undefined"!=typeof HTMLDetailsElement&&e instanceof HTMLDetailsElement,n="open"in e||t,r="ontoggle"in e,o=[],a=o.forEach,l=o.slice;function i(e){(function(e,t){return(e.tagName==t?[e]:[]).concat("function"==typeof e.getElementsByTagName?l.call(e.getElementsByTagName(t)):[])})(e,"SUMMARY").forEach((function(e){var t=c(e,"DETAILS");e.setAttribute("aria-expanded",t.hasAttribute("open")),e.hasAttribute("tabindex")||e.setAttribute("tabindex","0"),e.hasAttribute("role")||e.setAttribute("role","button")}))}function s(e){return!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.target.isContentEditable)}function d(e){addEventListener("click",(function(t){if(s(t)&&t.which<=1){var n=c(t.target,"SUMMARY");n&&n.parentNode&&"DETAILS"==n.parentNode.tagName&&e(n.parentNode)}}),!1),addEventListener("keydown",(function(t){if(s(t)&&(13==t.keyCode||32==t.keyCode)){var n=c(t.target,"SUMMARY");n&&n.parentNode&&"DETAILS"==n.parentNode.tagName&&(e(n.parentNode),t.preventDefault())}}),!1)}function u(e){var t=document.createEvent("Event");t.initEvent("toggle",!1,!1),e.dispatchEvent(t)}function c(e,t){if("function"==typeof e.closest)return e.closest(t);for(;e;){if(e.tagName==t)return e;e=e.parentNode}}n||(document.head.insertAdjacentHTML("afterbegin",'<style>\ndetails, summary {\n  display: block;\n}\ndetails:not([open]) > *:not(summary) {\n  display: none;\n}\nsummary::before {\n  content: "\u25ba";\n  padding-right: 0.3rem;\n  font-size: 0.6rem;\n  cursor: default;\n}\n[open] > summary::before {\n  content: "\u25bc";\n}\n</style>'),function(){var e=document.createElement("details").constructor.prototype,t=e.setAttribute,n=e.removeAttribute,r=Object.getOwnPropertyDescriptor(e,"open");Object.defineProperties(e,{open:{get:function(){return"DETAILS"==this.tagName?this.hasAttribute("open"):r&&r.get?r.get.call(this):void 0},set:function(e){return"DETAILS"==this.tagName?e?this.setAttribute("open",""):this.removeAttribute("open"):r&&r.set?r.set.call(this,e):void 0}},setAttribute:{value:function(e,n){var r=this,o=function(){return t.call(r,e,n)};if("open"==e&&"DETAILS"==this.tagName){var a=this.hasAttribute("open"),l=o();if(!a){var i=this.querySelector("summary");i&&i.setAttribute("aria-expanded",!0),u(this)}return l}return o()}},removeAttribute:{value:function(e){var t=this,r=function(){return n.call(t,e)};if("open"==e&&"DETAILS"==this.tagName){var o=this.hasAttribute("open"),a=r();if(o){var l=this.querySelector("summary");l&&l.setAttribute("aria-expanded",!1),u(this)}return a}return r()}}})}(),d((function(e){e.hasAttribute("open")?e.removeAttribute("open"):e.setAttribute("open","")})),i(document),window.MutationObserver?new MutationObserver((function(e){a.call(e,(function(e){a.call(e.addedNodes,i)}))})).observe(document.documentElement,{subtree:!0,childList:!0}):document.addEventListener("DOMNodeInserted",(function(e){i(e.target)}))),n&&!r&&(window.MutationObserver?new MutationObserver((function(e){a.call(e,(function(e){var t=e.target,n=e.attributeName;"DETAILS"==t.tagName&&"open"==n&&u(t)}))})).observe(document.documentElement,{attributes:!0,subtree:!0}):d((function(e){var t=e.getAttribute("open");setTimeout((function(){var n=e.getAttribute("open");t!=n&&u(e)}),1)})))}()},417:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),l=n.n(a);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,l=void 0===a?24:a,d=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));d.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},d.displayName="Compass",t.a=d},418:function(e,t,n){"use strict";var r=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(16)),a=r(n(41)),l=r(n(40)),i=r(n(0)),s=r(n(1)),d=r(n(85)),u=r(n(17)),c=r(n(21)),p=n(18),f=r(n(19)),m=r(n(124)),b=u.default.li.withConfig({displayName:"Breadcrumb__Wrapper",componentId:"sc-1hutxdl-0"})(["display:inline-block;white-space:nowrap;list-style:none;&::after{padding-right:0.5em;padding-left:0.5em;color:",";font-size:",";content:'/';}&:first-child{margin-left:0;}&:last-child{&::after{content:none;}}"],(0,p.get)("colors.gray.2"),(0,p.get)("fontSizes.1")),y=function(e){var t=e.className,n=e.children,r=e.theme,o=(0,l.default)(e,["className","children","theme"]),s=(0,d.default)(t,"Breadcrumb"),u=i.default.Children.map(n,(function(e){return i.default.createElement(b,{theme:r},e)}));return i.default.createElement("nav",(0,a.default)({className:s,"aria-label":"breadcrumb"},o),i.default.createElement(m.default,{as:"ol",my:0,pl:0},u))};y.displayName="BreadcrumbBase";var g=(0,u.default)(y).withConfig({displayName:"Breadcrumb",componentId:"sc-1hutxdl-1"})(["display:flex;justify-content:space-between;",";",";",";"],p.COMMON,p.FLEX,c.default);g.Item=u.default.a.attrs((function(e){return{activeClassName:"string"===typeof e.to?"selected":"",className:(0,d.default)(e.selected&&"selected",e.className),"aria-current":e.selected?"page":null}})).withConfig({displayName:"Breadcrumb__Item",componentId:"sc-1hutxdl-2"})(["color:",";display:inline-block;font-size:",";text-decoration:none;&:hover{text-decoration:underline;}&.selected{color:",";pointer-events:none;}"," ",";"],(0,p.get)("colors.blue.5"),(0,p.get)("fontSizes.1"),(0,p.get)("colors.gray.7"),p.COMMON,c.default),g.defaultProps={theme:f.default},g.propTypes=(0,o.default)({},p.COMMON.propTypes,{},c.default.propTypes),g.displayName="Breadcrumb",g.Item.defaultProps={theme:f.default},g.Item.propTypes=(0,o.default)({as:s.default.oneOfType([s.default.string,s.default.elementType]),href:s.default.string,selected:s.default.bool},c.default.propTypes,{},p.COMMON.propTypes),g.Item.displayName="Breadcrumb.Item";var h=g;t.default=h},419:function(e,t,n){"use strict";var r=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(16)),a=r(n(41)),l=r(n(40)),i=r(n(0)),s=r(n(1)),d=r(n(17)),u=r(n(93)),c=r(n(420)),p=n(18),f=r(n(421)),m=r(n(19)),b=r(n(21)),y=(0,d.default)(c.default).withConfig({displayName:"Dropdown__StyledDetails",componentId:"sc-3wysgd-0"})(["position:relative;display:inline-block;"]),g=function(e){var t=e.children,n=e.className,r=(0,l.default)(e,["children","className"]);return i.default.createElement(y,(0,a.default)({overlay:!0,className:n},r),t)};g.displayName="Dropdown",g.Button=function(e){var t=e.children,n=(0,l.default)(e,["children"]);return i.default.createElement(u.default,(0,a.default)({as:"summary","aria-haspopup":"true"},n),t,i.default.createElement(g.Caret,null))},g.Caret=d.default.div.withConfig({displayName:"Dropdown__Caret",componentId:"sc-3wysgd-1"})(["border:4px solid transparent;margin-left:12px;border-top-color:currentcolor;border-bottom-width:0;content:'';display:inline-block;height:0;vertical-align:middle;width:0;",";",";"],p.COMMON,b.default),g.Menu=d.default.ul.withConfig({displayName:"Dropdown__Menu",componentId:"sc-3wysgd-2"})(["background-clip:padding-box;background-color:",";border:1px solid rgba(27,31,35,0.15);border-radius:",";box-shadow:0 3px 12px rgba(27,31,35,0.15);left:0;list-style:none;margin-top:2px;padding:5px 0 5px 0 !important;position:absolute;top:100%;width:160px;z-index:100;&::before{position:absolute;display:inline-block;content:'';}&::after{position:absolute;display:inline-block;content:'';}&::before{border:8px solid transparent;border-bottom-color:",";}&::after{border:7px solid transparent;border-bottom-color:",";}> ul{list-style:none;}",";",";",";"],(0,p.get)("colors.white"),(0,p.get)("radii.2"),(0,p.get)("colors.blackfade15"),(0,p.get)("colors.white"),(function(e){return e.direction?(0,f.default)(e.theme,e.direction):""}),p.COMMON,b.default),g.Item=d.default.li.withConfig({displayName:"Dropdown__Item",componentId:"sc-3wysgd-3"})(["display:block;padding:"," 10px "," 15px;overflow:hidden;color:",";text-overflow:ellipsis;white-space:nowrap;a{color:",";text-decoration:none;display:block;padding:"," 10px "," 15px;overflow:hidden;color:",";text-overflow:ellipsis;white-space:nowrap;}&:focus,a:focus{color:",";text-decoration:none;background-color:",";}&:hover,&:hover a{color:",";text-decoration:none;background-color:",";outline:none;}",";",";"],(0,p.get)("space.1"),(0,p.get)("space.1"),(0,p.get)("colors.gray.9"),(0,p.get)("colors.gray.9"),(0,p.get)("space.1"),(0,p.get)("space.1"),(0,p.get)("colors.gray.9"),(0,p.get)("colors.white"),(0,p.get)("colors.blue.5"),(0,p.get)("colors.white"),(0,p.get)("colors.blue.5"),p.COMMON,b.default),g.Menu.propTypes=(0,o.default)({direction:s.default.oneOf(["ne","e","se","s","sw","w"])},p.COMMON.propTypes,{},b.default.propTypes),g.Menu.defaultProps={direction:"sw",theme:m.default},g.Menu.displayName="Dropdown.Menu",g.Item.defaultProps={theme:m.default},g.Item.propTypes=(0,o.default)({},p.COMMON.propTypes,{},b.default.propTypes),g.Item.displayName="Dropdown.Item",g.Button.defaultProps=(0,o.default)({theme:m.default},u.default.defaultProps),g.Button.propTypes=(0,o.default)({},u.default.propTypes),g.Button.displayName="Dropdown.Button",g.Caret.defaultProps={theme:m.default},g.Caret.propTypes=(0,o.default)({},p.COMMON.propTypes,{},b.default.propTypes),g.Caret.displayName="Dropdown.Caret",g.defaultProps=(0,o.default)({theme:m.default},c.default.defaultProps),g.propTypes=(0,o.default)({},c.default.propTypes,{},p.COMMON.propTypes);var h=g;t.default=h},420:function(e,t,n){"use strict";var r=n(31),o=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(16)),l=o(n(41)),i=o(n(77)),s=o(n(40)),d=r(n(0)),u=o(n(1)),c=o(n(17)),p=n(18),f=o(n(19)),m=o(n(21));"undefined"!==typeof window&&n(240);var b=(0,c.default)("details").withConfig({displayName:"Details__StyledDetails",componentId:"sc-1uozfty-0"})(["& > summary{list-style:none;}& > summary::-webkit-details-marker{display:none;}"," ",";"],p.COMMON,m.default);function y(e){var t=e.children,n=e.overlay,r=e.render,o=void 0===r?function(e){return"function"===typeof e?e:function(){return e}}(t):r,a=e.open,u=e.onClickOutside,c=e.onToggle,p=e.defaultOpen,f=void 0!==p&&p,m=(0,s.default)(e,["children","overlay","render","open","onClickOutside","onToggle","defaultOpen"]),y=(0,d.useState)(f),g=(0,i.default)(y,2),h=g[0],v=g[1],w=(0,d.useRef)(null),O="undefined"!==typeof a?a:h,x=(0,d.useCallback)((function(e){e.target.closest("details")!==w.current&&(u&&u(e),e.defaultPrevented||v(!1))}),[w,u,v]);return(0,d.useEffect)((function(){if(O&&n)return document.addEventListener("click",x),function(){document.removeEventListener("click",x)}}),[O,n,x]),d.default.createElement(b,(0,l.default)({},m,{ref:w,open:O,onToggle:function(e){c&&c(e),e.defaultPrevented||v(e.target.open)},overlay:n}),o({open:O}))}y.displayName="Details",y.defaultProps={theme:f.default,overlay:!1},y.propTypes=(0,a.default)({children:u.default.oneOfType([u.default.node,u.default.func]),className:u.default.string,defaultOpen:u.default.bool,overlay:u.default.bool,render:u.default.func,theme:u.default.object},p.COMMON.propTypes,{},m.default.propTypes);var g=y;t.default=g},421:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(18),o=function(e,t){return{w:"\n      top: 0;\n      right: 100%;\n      left: auto;\n      width: auto;\n      margin-top: 0;\n      margin-right: 10px;\n\n      &::before {\n        top: 10px;\n        right: -16px;\n        left: auto;\n        border-color: transparent;\n        border-left-color: ".concat((0,r.get)("colors.blackfade15")(e),";\n      }\n\n      &::after {\n        top: 11px;\n        right: -14px;\n        left: auto;\n        border-color: transparent;\n        border-left-color: ").concat((0,r.get)("colors.white")(e),";\n      }\n    "),e:"\n      top: 0;\n      left: 100%;\n      width: auto;\n      margin-top: 0;\n      margin-left: 10px;\n\n      &::before {\n        top: 10px;\n        left: -16px;\n        border-color: transparent;\n        border-right-color: ".concat((0,r.get)("colors.blackfade15")(e),";\n      }\n\n      &::after {\n        top: 11px;\n        left: -14px;\n        border-color: transparent;\n        border-right-color: ").concat((0,r.get)("colors.white")(e),";\n      }\n    "),ne:"\n      top: auto;\n      bottom: 100%;\n      left: 0;\n      margin-bottom: 3px;\n\n      &::before,\n      &::after {\n        top: auto;\n        right: auto;\n      }\n\n      &::before {\n        bottom: -8px;\n        left: 9px;\n        border-top: 8px solid ".concat((0,r.get)("colors.blackfade15")(e),";\n        border-bottom: 0;\n        border-left: 8px solid transparent;\n      }\n\n      &::after {\n        bottom: -7px;\n        left: 10px;\n        border-top: 7px solid ").concat((0,r.get)("colors.white")(e),";\n        border-right: 7px solid transparent;\n        border-bottom: 0;\n        border-left: 7px solid transparent;\n      }\n    "),s:"\n      right: 50%;\n      left: auto;\n      transform: translateX(50%);\n\n      &::before {\n        top: -16px;\n        right: 50%;\n        transform: translateX(50%);\n      }\n\n      &::after {\n        top: -14px;\n        right: 50%;\n        transform: translateX(50%);\n      }\n    ",sw:"\n      right: 0;\n      left: auto;\n\n      &::before {\n        top: -16px;\n        right: 9px;\n        left: auto;\n      }\n\n      &::after {\n        top: -14px;\n        right: 10px;\n        left: auto;\n      }\n    ",se:"\n      &::before {\n        top: -16px;\n        left: 9px;\n      }\n\n      &::after {\n        top: -14px;\n        left: 10px;\n      }\n    "}[t]};t.default=o},449:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),l=n.n(a);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,l=void 0===a?24:a,d=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),o.a.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),o.a.createElement("polyline",{points:"5 12 12 5 19 12"}))}));d.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},d.displayName="ArrowUp",t.a=d},450:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),l=n.n(a);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,l=void 0===a?24:a,d=s(e,["color","size"]);return o.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),o.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),o.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));d.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},d.displayName="Smile",t.a=d}}]);
//# sourceMappingURL=14.432710d5.chunk.js.map