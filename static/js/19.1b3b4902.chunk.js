(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[19],{109:function(t,e,n){"use strict";var r=n(2),i=n(84),u=i.a?r.useLayoutEffect:r.useEffect,a={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(r.useState)(null),e=t[0],n=t[1],i=Object(r.useState)(a),o=i[0],c=i[1],l=Object(r.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,r=e.y,i=e.width,u=e.height,a=e.top,o=e.left,l=e.bottom,s=e.right;c({x:n,y:r,width:i,height:u,top:a,left:o,bottom:l,right:s})}}))}),[]);return u((function(){if(e)return l.observe(e),function(){l.disconnect()}}),[e]),[n,o]}:function(){return[i.b,a]}},127:function(t,e,n){"use strict";e.a=function(t){for(var e;e=t.sourceEvent;)t=e;return t}},146:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return d}));var r=Array.prototype.slice,i=function(t){return t},u=1e-6;function a(t){return"translate("+t+",0)"}function o(t){return"translate(0,"+t+")"}function c(t){return function(e){return+t(e)}}function l(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function s(){return!this.__axis}function f(t,e){var n=[],f=null,h=null,d=6,p=6,y=3,v="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,b=1===t||4===t?-1:1,g=4===t||2===t?"x":"y",m=1===t||3===t?a:o;function w(r){var a=null==f?e.ticks?e.ticks.apply(e,n):e.domain():f,o=null==h?e.tickFormat?e.tickFormat.apply(e,n):i:h,w=Math.max(d,0)+y,O=e.range(),x=+O[0]+v,j=+O[O.length-1]+v,k=(e.bandwidth?l:c)(e.copy(),v),_=r.selection?r.selection():r,A=_.selectAll(".domain").data([null]),z=_.selectAll(".tick").data(a,e).order(),S=z.exit(),M=z.enter().append("g").attr("class","tick"),E=z.select("line"),V=z.select("text");A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),z=z.merge(M),E=E.merge(M.append("line").attr("stroke","currentColor").attr(g+"2",b*d)),V=V.merge(M.append("text").attr("fill","currentColor").attr(g,b*w).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==_&&(A=A.transition(r),z=z.transition(r),E=E.transition(r),V=V.transition(r),S=S.transition(r).attr("opacity",u).attr("transform",(function(t){return isFinite(t=k(t))?m(t+v):this.getAttribute("transform")})),M.attr("opacity",u).attr("transform",(function(t){var e=this.parentNode.__axis;return m((e&&isFinite(e=e(t))?e:k(t))+v)}))),S.remove(),A.attr("d",4===t||2===t?p?"M"+b*p+","+x+"H"+v+"V"+j+"H"+b*p:"M"+v+","+x+"V"+j:p?"M"+x+","+b*p+"V"+v+"H"+j+"V"+b*p:"M"+x+","+v+"H"+j),z.attr("opacity",1).attr("transform",(function(t){return m(k(t)+v)})),E.attr(g+"2",b*d),V.attr(g,b*w).text(o),_.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),_.each((function(){this.__axis=k}))}return w.scale=function(t){return arguments.length?(e=t,w):e},w.ticks=function(){return n=r.call(arguments),w},w.tickArguments=function(t){return arguments.length?(n=null==t?[]:r.call(t),w):n.slice()},w.tickValues=function(t){return arguments.length?(f=null==t?null:r.call(t),w):f&&f.slice()},w.tickFormat=function(t){return arguments.length?(h=t,w):h},w.tickSize=function(t){return arguments.length?(d=p=+t,w):d},w.tickSizeInner=function(t){return arguments.length?(d=+t,w):d},w.tickSizeOuter=function(t){return arguments.length?(p=+t,w):p},w.tickPadding=function(t){return arguments.length?(y=+t,w):y},w.offset=function(t){return arguments.length?(v=+t,w):v},w}function h(t){return f(2,t)}function d(t){return f(3,t)}},178:function(t,e,n){"use strict";var r=n(127);e.a=function(t,e){if(t=Object(r.a)(t),void 0===e&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(e.getScreenCTM().inverse())).x,i.y]}if(e.getBoundingClientRect){var u=e.getBoundingClientRect();return[t.clientX-u.left-e.clientLeft,t.clientY-u.top-e.clientTop]}}return[t.pageX,t.pageY]}},656:function(t,e,n){"use strict";var r=n(687),i=n(125),u=n(124),a=n(141),o=n(172),c=n(142);e.a=function(t,e,n){var l=null,s=Object(u.a)(!0),f=null,h=a.a,d=null;function p(u){var a,o,c,p,y,v=(u=Object(i.a)(u)).length,b=!1,g=new Array(v),m=new Array(v);for(null==f&&(d=h(y=Object(r.a)())),a=0;a<=v;++a){if(!(a<v&&s(p=u[a],a,u))===b)if(b=!b)o=a,d.areaStart(),d.lineStart();else{for(d.lineEnd(),d.lineStart(),c=a-1;c>=o;--c)d.point(g[c],m[c]);d.lineEnd(),d.areaEnd()}b&&(g[a]=+t(p,a,u),m[a]=+e(p,a,u),d.point(l?+l(p,a,u):g[a],n?+n(p,a,u):m[a]))}if(y)return d=null,y+""||null}function y(){return Object(o.a)().defined(s).curve(h).context(f)}return t="function"===typeof t?t:void 0===t?c.a:Object(u.a)(+t),e="function"===typeof e?e:void 0===e?Object(u.a)(0):Object(u.a)(+e),n="function"===typeof n?n:void 0===n?c.b:Object(u.a)(+n),p.x=function(e){return arguments.length?(t="function"===typeof e?e:Object(u.a)(+e),l=null,p):t},p.x0=function(e){return arguments.length?(t="function"===typeof e?e:Object(u.a)(+e),p):t},p.x1=function(t){return arguments.length?(l=null==t?null:"function"===typeof t?t:Object(u.a)(+t),p):l},p.y=function(t){return arguments.length?(e="function"===typeof t?t:Object(u.a)(+t),n=null,p):e},p.y0=function(t){return arguments.length?(e="function"===typeof t?t:Object(u.a)(+t),p):e},p.y1=function(t){return arguments.length?(n=null==t?null:"function"===typeof t?t:Object(u.a)(+t),p):n},p.lineX0=p.lineY0=function(){return y().x(t).y(e)},p.lineY1=function(){return y().x(t).y(n)},p.lineX1=function(){return y().x(l).y(e)},p.defined=function(t){return arguments.length?(s="function"===typeof t?t:Object(u.a)(!!t),p):s},p.curve=function(t){return arguments.length?(h=t,null!=f&&(d=h(f)),p):h},p.context=function(t){return arguments.length?(null==t?f=d=null:d=h(f=t),p):f},p}},661:function(t,e,n){"use strict";n.d(e,"b",(function(){return Y})),n.d(e,"a",(function(){return X}));var r=n(91),i=n(683),u=n(686);var a=function(t){t.preventDefault(),t.stopImmediatePropagation()},o=function(t){var e=t.document.documentElement,n=Object(u.a)(t).on("dragstart.drag",a,!0);"onselectstart"in e?n.on("selectstart.drag",a,!0):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")};function c(t,e){var n=t.document.documentElement,r=Object(u.a)(t).on("dragstart.drag",null);e&&(r.on("click.drag",a,!0),setTimeout((function(){r.on("click.drag",null)}),0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var l=n(714),s=n(178),f=n(101),h=function(t){return function(){return t}};function d(t,e){var n=e.sourceEvent,r=e.target,i=e.selection,u=e.mode,a=e.dispatch;Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},selection:{value:i,enumerable:!0,configurable:!0},mode:{value:u,enumerable:!0,configurable:!0},_:{value:a}})}function p(t){t.stopImmediatePropagation()}var y=function(t){t.preventDefault(),t.stopImmediatePropagation()},v={name:"drag"},b={name:"space"},g={name:"handle"},m={name:"center"},w=Math.abs,O=Math.max,x=Math.min;function j(t){return[+t[0],+t[1]]}function k(t){return[j(t[0]),j(t[1])]}var _={name:"x",handles:["w","e"].map(T),input:function(t,e){return null==t?null:[[+t[0],e[0][1]],[+t[1],e[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},A={name:"y",handles:["n","s"].map(T),input:function(t,e){return null==t?null:[[e[0][0],+t[0]],[e[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},z=(["n","w","e","s","nw","ne","sw","se"].map(T),{overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"}),S={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},M={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},E={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},V={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function T(t){return{type:t}}function P(t){return!t.ctrlKey&&!t.button}function C(){var t=this.ownerSVGElement||this;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function R(){return navigator.maxTouchPoints||"ontouchstart"in this}function F(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function K(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function X(t){var e=t.__brush;return e?e.dim.output(e.selection):null}function Y(){return B(_)}function B(t){var e,n=C,a=P,j=R,X=!0,Y=Object(i.a)("start","brush","end"),B=6;function G(e){var n=e.property("__brush",L).selectAll(".overlay").data([T("overlay")]);n.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",z.overlay).merge(n).each((function(){var t=F(this).extent;Object(u.a)(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])})),e.selectAll(".selection").data([T("selection")]).enter().append("rect").attr("class","selection").attr("cursor",z.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=e.selectAll(".handle").data(t.handles,(function(t){return t.type}));r.exit().remove(),r.enter().append("rect").attr("class",(function(t){return"handle handle--"+t.type})).attr("cursor",(function(t){return z[t.type]})),e.each(H).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",U).filter(j).on("touchstart.brush",U).on("touchmove.brush",D).on("touchend.brush touchcancel.brush",J).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function H(){var t=Object(u.a)(this),e=F(this).selection;e?(t.selectAll(".selection").style("display",null).attr("x",e[0][0]).attr("y",e[0][1]).attr("width",e[1][0]-e[0][0]).attr("height",e[1][1]-e[0][1]),t.selectAll(".handle").style("display",null).attr("x",(function(t){return"e"===t.type[t.type.length-1]?e[1][0]-B/2:e[0][0]-B/2})).attr("y",(function(t){return"s"===t.type[0]?e[1][1]-B/2:e[0][1]-B/2})).attr("width",(function(t){return"n"===t.type||"s"===t.type?e[1][0]-e[0][0]+B:B})).attr("height",(function(t){return"e"===t.type||"w"===t.type?e[1][1]-e[0][1]+B:B}))):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function I(t,e,n){var r=t.__brush.emitter;return!r||n&&r.clean?new N(t,e,n):r}function N(t,e,n){this.that=t,this.args=e,this.state=t.__brush,this.active=0,this.clean=n}function U(n){if((!e||n.touches)&&a.apply(this,arguments)){var i,l,h,d,j,k,T,P,C,R,Y,B=this,G=n.target.__data__.type,N="selection"===(X&&n.metaKey?G="overlay":G)?v:X&&n.altKey?m:g,U=t===A?null:E[G],D=t===_?null:V[G],J=F(B),L=J.extent,q=J.selection,Q=L[0][0],W=L[0][1],Z=L[1][0],$=L[1][1],tt=0,et=0,nt=U&&D&&X&&n.shiftKey,rt=Array.from(n.touches||[n],(function(t){var e=t.identifier;return(t=Object(s.a)(t,B)).point0=t.slice(),t.identifier=e,t}));if("overlay"===G){q&&(C=!0);var it=[rt[0],rt[1]||rt[0]];J.selection=q=[[i=t===A?Q:x(it[0][0],it[1][0]),h=t===_?W:x(it[0][1],it[1][1])],[j=t===A?Z:O(it[0][0],it[1][0]),T=t===_?$:O(it[0][1],it[1][1])]],rt.length>1&&st()}else i=q[0][0],h=q[0][1],j=q[1][0],T=q[1][1];l=i,d=h,k=j,P=T;var ut=Object(u.a)(B).attr("pointer-events","none"),at=ut.selectAll(".overlay").attr("cursor",z[G]);Object(f.a)(B);var ot=I(B,arguments,!0).beforestart();if(n.touches)ot.moved=lt,ot.ended=ft;else{var ct=Object(u.a)(n.view).on("mousemove.brush",lt,!0).on("mouseup.brush",ft,!0);X&&ct.on("keydown.brush",ht,!0).on("keyup.brush",dt,!0),o(n.view)}H.call(B),ot.start(n,N.name)}function lt(t){var e,n=Object(r.a)(t.changedTouches||[t]);try{for(n.s();!(e=n.n()).done;){var i,u=e.value,a=Object(r.a)(rt);try{for(a.s();!(i=a.n()).done;){var o=i.value;o.identifier===u.identifier&&(o.cur=Object(s.a)(u,B))}}catch(d){a.e(d)}finally{a.f()}}}catch(d){n.e(d)}finally{n.f()}if(nt&&!R&&!Y&&1===rt.length){var c=rt[0];w(c.cur[0]-c[0])>w(c.cur[1]-c[1])?Y=!0:R=!0}var l,f=Object(r.a)(rt);try{for(f.s();!(l=f.n()).done;){var h=l.value;h.cur&&(h[0]=h.cur[0],h[1]=h.cur[1])}}catch(d){f.e(d)}finally{f.f()}C=!0,y(t),st(t)}function st(t){var e,n=rt[0],r=n.point0;switch(tt=n[0]-r[0],et=n[1]-r[1],N){case b:case v:U&&(tt=O(Q-i,x(Z-j,tt)),l=i+tt,k=j+tt),D&&(et=O(W-h,x($-T,et)),d=h+et,P=T+et);break;case g:rt[1]?(U&&(l=O(Q,x(Z,rt[0][0])),k=O(Q,x(Z,rt[1][0])),U=1),D&&(d=O(W,x($,rt[0][1])),P=O(W,x($,rt[1][1])),D=1)):(U<0?(tt=O(Q-i,x(Z-i,tt)),l=i+tt,k=j):U>0&&(tt=O(Q-j,x(Z-j,tt)),l=i,k=j+tt),D<0?(et=O(W-h,x($-h,et)),d=h+et,P=T):D>0&&(et=O(W-T,x($-T,et)),d=h,P=T+et));break;case m:U&&(l=O(Q,x(Z,i-tt*U)),k=O(Q,x(Z,j+tt*U))),D&&(d=O(W,x($,h-et*D)),P=O(W,x($,T+et*D)))}k<l&&(U*=-1,e=i,i=j,j=e,e=l,l=k,k=e,G in S&&at.attr("cursor",z[G=S[G]])),P<d&&(D*=-1,e=h,h=T,T=e,e=d,d=P,P=e,G in M&&at.attr("cursor",z[G=M[G]])),J.selection&&(q=J.selection),R&&(l=q[0][0],k=q[1][0]),Y&&(d=q[0][1],P=q[1][1]),q[0][0]===l&&q[0][1]===d&&q[1][0]===k&&q[1][1]===P||(J.selection=[[l,d],[k,P]],H.call(B),ot.brush(t,N.name))}function ft(t){if(p(t),t.touches){if(t.touches.length)return;e&&clearTimeout(e),e=setTimeout((function(){e=null}),500)}else c(t.view,C),ct.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);ut.attr("pointer-events","all"),at.attr("cursor",z.overlay),J.selection&&(q=J.selection),K(q)&&(J.selection=null,H.call(B)),ot.end(t,N.name)}function ht(t){switch(t.keyCode){case 16:nt=U&&D;break;case 18:N===g&&(U&&(j=k-tt*U,i=l+tt*U),D&&(T=P-et*D,h=d+et*D),N=m,st());break;case 32:N!==g&&N!==m||(U<0?j=k-tt:U>0&&(i=l-tt),D<0?T=P-et:D>0&&(h=d-et),N=b,at.attr("cursor",z.selection),st());break;default:return}y(t)}function dt(t){switch(t.keyCode){case 16:nt&&(R=Y=nt=!1,st());break;case 18:N===m&&(U<0?j=k:U>0&&(i=l),D<0?T=P:D>0&&(h=d),N=g,st());break;case 32:N===b&&(t.altKey?(U&&(j=k-tt*U,i=l+tt*U),D&&(T=P-et*D,h=d+et*D),N=m):(U<0?j=k:U>0&&(i=l),D<0?T=P:D>0&&(h=d),N=g),at.attr("cursor",z[G]),st());break;default:return}y(t)}}function D(t){I(this,arguments).moved(t)}function J(t){I(this,arguments).ended(t)}function L(){var e=this.__brush||{selection:null};return e.extent=k(n.apply(this,arguments)),e.dim=t,e}return G.move=function(e,n){e.tween?e.on("start.brush",(function(t){I(this,arguments).beforestart().start(t)})).on("interrupt.brush end.brush",(function(t){I(this,arguments).end(t)})).tween("brush",(function(){var e=this,r=e.__brush,i=I(e,arguments),u=r.selection,a=t.input("function"===typeof n?n.apply(this,arguments):n,r.extent),o=Object(l.a)(u,a);function c(t){r.selection=1===t&&null===a?null:o(t),H.call(e),i.brush()}return null!==u&&null!==a?c:c(1)})):e.each((function(){var e=this,r=arguments,i=e.__brush,u=t.input("function"===typeof n?n.apply(e,r):n,i.extent),a=I(e,r).beforestart();Object(f.a)(e),i.selection=null===u?null:u,H.call(e),a.start().brush().end()}))},G.clear=function(t){G.move(t,null)},N.prototype={beforestart:function(){return 1===++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(t,e){return this.starting?(this.starting=!1,this.emit("start",t,e)):this.emit("brush",t),this},brush:function(t,e){return this.emit("brush",t,e),this},end:function(t,e){return 0===--this.active&&(delete this.state.emitter,this.emit("end",t,e)),this},emit:function(e,n,r){var i=Object(u.a)(this.that).datum();Y.call(e,this.that,new d(e,{sourceEvent:n,target:G,selection:t.output(this.state.selection),mode:r,dispatch:Y}),i)}},G.extent=function(t){return arguments.length?(n="function"===typeof t?t:h(k(t)),G):n},G.filter=function(t){return arguments.length?(a="function"===typeof t?t:h(!!t),G):a},G.touchable=function(t){return arguments.length?(j="function"===typeof t?t:h(!!t),G):j},G.handleSize=function(t){return arguments.length?(B=+t,G):B},G.keyModifiers=function(t){return arguments.length?(X=!!t,G):X},G.on=function(){var t=Y.on.apply(Y,arguments);return t===Y?G:t},G}},702:function(t,e,n){"use strict";var r=n(178),i=n(127);e.a=function(t,e){return t.target&&(t=Object(i.a)(t),void 0===e&&(e=t.currentTarget),t=t.touches||[t]),Array.from(t,(function(t){return Object(r.a)(t,e)}))}},720:function(t,e,n){"use strict";var r=n(91),i=n(125),u=n(124),a=function(t,e){if((i=t.length)>1)for(var n,r,i,u=1,a=t[e[0]],o=a.length;u<i;++u)for(r=a,a=t[e[u]],n=0;n<o;++n)a[n][1]+=a[n][0]=isNaN(r[n][1])?r[n][0]:r[n][1]},o=function(t){for(var e=t.length,n=new Array(e);--e>=0;)n[e]=e;return n};function c(t,e){return t[e]}function l(t){var e=[];return e.key=t,e}e.a=function(){var t=Object(u.a)([]),e=o,n=a,s=c;function f(u){var a,o,c,f=Array.from(t.apply(this,arguments),l),h=f.length,d=-1,p=Object(r.a)(u);try{for(p.s();!(c=p.n()).done;){var y=c.value;for(a=0,++d;a<h;++a)(f[a][d]=[0,+s(y,f[a].key,d,u)]).data=y}}catch(v){p.e(v)}finally{p.f()}for(a=0,o=Object(i.a)(e(f));a<h;++a)f[o[a]].index=a;return n(f,o),f}return f.keys=function(e){return arguments.length?(t="function"===typeof e?e:Object(u.a)(Array.from(e)),f):t},f.value=function(t){return arguments.length?(s="function"===typeof t?t:Object(u.a)(+t),f):s},f.order=function(t){return arguments.length?(e=null==t?o:"function"===typeof t?t:Object(u.a)(Array.from(t)),f):e},f.offset=function(t){return arguments.length?(n=null==t?a:t,f):n},f}}}]);
//# sourceMappingURL=19.1b3b4902.chunk.js.map