(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3L/t":function(t,e,a){"use strict";a.r(e);var n=a("UrUy"),r=a.n(n),i=a("JYC+"),l=a.n(i),s=a("R3/3"),c=a("z3IF"),o=a("LkAs"),u=a("Moms"),h=a("bMj6"),d=a("hZod"),f=a("tEuJ"),g=a("mXGw"),m=a.n(g),p=a("CXsl"),v=a("t1Qi"),y=a("YKN3"),b=a("azxR");var w,x=function(t){function e(t){var a;return Object(o.default)(this,e),(a=Object(h.default)(this,Object(d.default)(e).call(this,t))).state={margins:a.props.margins,svgDimen:a.props.svgDimen,partial:a.props.partial},a}return Object(f.default)(e,t),Object(u.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({svgDimen:t.svgDimen,margins:t.margins,partial:t.partial})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"drawGraph",value:function(){var t=this.state,e=t.svgDimen,a=t.margins,n=t.partial,r=v.z("%Y-%m-%d"),i=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:e.Date,value:e[t]}})}}),l=i[0].values.map(function(t){return t.date=r(t.date),t.value=+t.value,t}),s=v.o(l,function(t){return t.value}),c=v.v().range([a.left,e.width-a.right]).domain(v.k(l,function(t){return t.date})).clamp(!0),o=v.t().range([e.height-a.bottom,a.top]).domain([0,s]),u=v.b().curve(v.h).x(function(t){return c(t.date)}).y0(o(0)).y1(function(t){return o(t.value)}),h=v.x(this.el);h.selectAll("*").remove(),h.append("g").attr("transform","translate(0,"+(e.height-a.bottom)+")").call(v.d(c).ticks(10).tickSize(3).tickFormat(v.y("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black"),h.append("g").call(v.e(o).tickSize(0)).select(".domain").style("opacity",0),h.selectAll(".area").data(i).enter().append("path").attr("d",function(t){return u(t.values)}).style("fill","#df072c");var d=h.append("g"),f=v.g(function(t){return t.date}).left;function g(t,e){if(!e)return t.style("display","none");t.style("display",null).style("pointer-events","none").style("font","10px sans-serif"),t.selectAll("circle").data([null]).join("circle").attr("r",7).style("fill","grey").style("stroke","white").style("stroke-width",3);var a=t.selectAll("path").data([null]).join("path").attr("fill","grey"),n=t.selectAll("text").data([null]).join("text").call(function(t){return t.selectAll("tspan").data((e+"").split(/\n/)).join("tspan").attr("x",0).style("font-weight","bold").style("font-size",14).style("fill","white").text(function(t){return"€ "+t})}),r=n.node().getBBox(),i=(r.x,r.y),l=r.width,s=r.height;n.attr("transform","translate(".concat(-l/2,",").concat(15-i,")")),a.attr("d","M".concat(-l/2-10,",5H-5l5,-5l5,5H").concat(l/2+10,"v").concat(s+10,"h-").concat(l+20,"z")).attr("transform","translate(0,5)")}h.append("rect").attr("transform","translate("+a.left+","+a.top+")").attr("class","overlay").attr("width",e.width-a.right).attr("height",e.height-a.bottom).style("opacity",0).on("mousemove",function(){var t=c.invert(v.q(this)[0]),e=f(l,t,1),a=l[e-1],n=l[e],r=t-a.date>n.date-t?n:a;d.attr("transform","translate(".concat(c(r.date),",").concat(o(r.value),")")).call(g,r.value)}),h.on("mouseleave",function(){return d.call(g,null)})}},{key:"render",value:function(){var t=this,e=this.state.svgDimen;return m.a.createElement("svg",{className:"graphSvg",width:e.width,height:e.height,ref:function(e){return t.el=e}})}}]),e}(g.Component),k=function(t){function e(t){var a;Object(o.default)(this,e);var n=(a=Object(h.default)(this,Object(d.default)(e).call(this,t))).props,r=n.svgDimen,i=n.margins,l=n.rangeStart,s=n.rangeEnd,c=n.xScale;return a.state={svgDimen:r,margins:i,rangeStart:l,rangeEnd:s,xScale:c,handle:""},a}return Object(f.default)(e,t),Object(u.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.svgDimen,a=t.margins,n=t.rangeStart,r=t.rangeEnd,i=t.xScale;this.setState({svgDimen:e,margins:a,rangeStart:n,rangeEnd:r,xScale:i,handle:""})}},{key:"onMouseOver",value:function(t){console.log(t.target.parentNode.className.baseVal),"sliderBar"==t.target.parentNode.className.baseVal||"sliderBar"==t.target.parentNode.className.baseVal?this.setState({handle:""}):this.setState({handle:t.target.parentNode.className.baseVal})}},{key:"render",value:function(){var t=this,e=this.state,a=e.svgDimen,n=e.margins,r=e.rangeStart,i=e.rangeEnd,l=e.xScale,s=m.a.createElement("rect",{rx:"3",ry:"3",width:"10",height:a.height-n.bottom,transform:"translate(-5, 0)",fill:"#777"}),c=m.a.createElement("rect",{x:l(r),y:"0",width:l(i)-l(r),height:a.height-n.bottom,fill:"rgba(150, 150, 150, 0.65)"});return m.a.createElement("g",{className:"sliderBar",onMouseOver:this.onMouseOver.bind(this)},c,m.a.createElement("g",{className:"handleLeft",ref:function(e){return t.handleLeft=e},transform:"translate(".concat(l(r),", 0)")},s),m.a.createElement("g",{className:"handleRight",ref:function(e){return t.handleRight=e},transform:"translate(".concat(l(i),", 0)")},s))}},{key:"componentDidUpdate",value:function(){var t=this.state,e=(t.xScale,t.handle);this.props.changeHandlerValue;console.log(e," : handleName");var a=v.j().on("start",dragstart).on("drag",draged).on("end",dragend);if(""==e)return function(t){throw new Error('"'+t+'" is read-only')}("drag"),void(a=v.j().on("start",null).on("drag",null).on("end",null));v.x(".sliderBar").call(a)}}]),e}(m.a.Component),E=function(t){function e(t){var a;Object(o.default)(this,e),a=Object(h.default)(this,Object(d.default)(e).call(this,t)),Object(b.a)(Object(y.default)(Object(y.default)(a)),"changeHandlerValue",function(t,e){var n=a.state,r=n.total,i=n.rangeStart,l=n.rangeEnd,s=v.z("%Y-%m-%d"),c=[];if("handleLeft"==t){for(var o=0;o<r.length;o++)s(r[o].Date)>=e&&s(r[o].Date)<=l&&c.push(r[o]);c.columns=r.columns,a.setState({rangeStart:e,partial:c})}else{for(var u=0;u<r.length;u++)s(r[u].Date)<=e&&s(r[u].Date)>=i&&c.push(r[u]);c.columns=r.columns,a.setState({rangeEnd:e,partial:c})}});var n=a.props,r=n.data,i=n.width,l=n.height,s=v.z("%Y-%m-%d"),c=r.sort(function(t,e){return v.c(s(t.Date),s(e.Date))}),u=c.map(function(t){return s(t.Date)});return a.state={total:c,partial:c,width:i,height:l,rangeStart:u[0],rangeEnd:u[u.length-1]},a}return Object(f.default)(e,t),Object(u.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.data,a=t.width,n=t.height,r=v.z("%Y-%m-%d"),i=e.sort(function(t,e){return v.c(r(t.Date),r(e.Date))}),l=i.map(function(t){return r(t.Date)});this.setState({total:i,partial:i,width:a,height:n,rangeStart:l[0],rangeEnd:l[l.length-1]})}},{key:"componentDidMount",value:function(){this.renderSliderGraph()}},{key:"componentDidUpdate",value:function(){this.renderSliderGraph()}},{key:"renderSliderGraph",value:function(){var t=this.state,e=t.width,a=t.height,n=t.total,r=20,i=20,l=20,s=20,c=e-s-i,o=a/6,u=v.z("%Y-%m-%d"),h=n.columns.slice(2).map(function(t){return{id:t,values:n.map(function(e){return{date:u(e.Date),value:e[t]}})}}),d=v.o(h[0].values,function(t){return t.value}),f=h[0].values.map(function(t){return t.date}),g=v.v().range([s,c-i]).domain([f[0],f[f.length-1]]),m=v.t().range([o-l,r]).domain([0,d]),p=v.b().curve(v.h).x(function(t){return g(t.date)}).y0(m(0)).y1(function(t){return m(t.value)}),y=v.x(this.GraphAxisElement);y.selectAll("*").remove(),y.append("g").attr("transform","translate(0,"+(o-l)+")").call(v.d(g).ticks(4).tickSize(3).tickFormat(v.y("%Y-%m-%d"))).selectAll("text").style("font-size","10px").style("fill","black").select(".domain").style("opacity",0),y.append("g").call(v.e(m).tickSize(3)).select(".domain").style("opacity",0),y.selectAll(".area").data(h).enter().append("path").attr("d",function(t){return p(t.values)}).style("fill","#ddd")}},{key:"getTextWidth",value:function(t,e,a){var n=document.createElement("canvas").getContext("2d");return n.font=e+"px "+a,n.measureText(t).width}},{key:"render",value:function(){var t=this,e=this.state,a=e.width,n=e.height,r=e.total,i=e.partial,l=e.rangeStart,s=e.rangeEnd,c={top:20,right:20,bottom:20,left:20},o={width:a-c.left-c.right,height:n/6},u={width:a-c.left-c.right,height:4*n/6},h={width:a-c.left-c.right,height:n},d=v.z("%Y-%m-%d"),f=r.map(function(t){return d(t.Date)}),g=v.v().range([c.left,h.width-c.right]).domain([f[0],f[f.length-1]]).clamp(!0),p=this.getTextWidth("Coca-Cola Company",16,"Arial"),y=this.getTextWidth("Industry",16,"Arial");return m.a.createElement("svg",{className:"areaChartSvg",width:h.width,height:h.height},m.a.createElement("g",{className:"TopPane",transform:"translate(".concat(c.left,", ").concat(n/12,")")},m.a.createElement("rect",{x:"10",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),m.a.createElement("rect",{x:"50",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),m.a.createElement("rect",{x:"90",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),m.a.createElement("rect",{x:"130",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(255,255,255)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),m.a.createElement("rect",{x:"170",y:"-15",width:"30",height:"30",rx:"5",ry:"5",style:{fill:"rgb(222,7,48)",strokeWidth:1,stroke:"rgb(150,150,150)"},class:""}),m.a.createElement("circle",{r:"5",cx:h.width-c.left-y-p-60,cy:"0",fill:"#de0730"}),m.a.createElement("text",{x:h.width-c.left-y-40,y:"0",alignmentBaseline:"central",textAnchor:"end",style:{fontSize:16,fill:"#bdbbbc"}},"Coca-Cola Company"),m.a.createElement("circle",{r:"5",cx:h.width-c.left-y-20,cy:"0",fill:"#bdbbbc"}),m.a.createElement("text",{x:h.width-c.left,y:"0",alignmentBaseline:"central",textAnchor:"end",style:{fontSize:16,fill:"#bdbbbc"}},"Industry")),m.a.createElement("g",{className:"Chart",transform:"translate(0, ".concat(n/6,")")},m.a.createElement(x,{margins:c,svgDimen:u,partial:i})),m.a.createElement("g",{className:"graphSliderGroup",transform:"translate(0, ".concat(5*n/6,")")},m.a.createElement("g",{className:"graphSliderAxis",ref:function(e){return t.GraphAxisElement=e}}),m.a.createElement(k,{className:"handleRange",changeHandlerValue:this.changeHandlerValue,rangeStart:l,rangeEnd:s,svgDimen:o,margins:c,xScale:g})))}}]),e}(g.Component),j=function(t){function e(t){var a;Object(o.default)(this,e);var n=(a=Object(h.default)(this,Object(d.default)(e).call(this,t))).props,r=n.parentWidth,i=n.parentHeight,l=n.data;return l.columns=a.getColumns(l),a.state={width:Math.max(r,450),height:Math.max(i,400),data:l},a}return Object(f.default)(e,t),Object(u.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.parentWidth,a=t.parentHeight,n=t.data;n.columns=this.getColumns(n),this.setState({width:Math.max(e,450),height:Math.max(a,400),data:n})}},{key:"getColumns",value:function(t){var e=[];for(var a in t[0])e.push(a);return e}},{key:"render",value:function(){return m.a.createElement(g.Fragment,null,this.state.data&&m.a.createElement(E,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),e}(g.Component),C=(w=j,function(t){function e(t){var a;return Object(o.default)(this,e),(a=Object(h.default)(this,Object(d.default)(e).call(this,t))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(y.default)(Object(y.default)(a))),a}return Object(f.default)(e,t),Object(u.default)(e,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var t=this.state.containerWidth,e=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;t!==e&&this.setState(function(){return{containerWidth:e,containerHeight:a}})}},{key:"renderChart",value:function(){var t=this.state.containerWidth,e=this.state.containerHeight;return m.a.createElement(w,Object(c.a)({},this.props,{parentWidth:t,parentHeight:e}))}},{key:"render",value:function(){var t=this,e=null!==this.state.containerWidth;return m.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(e){t.chartContainer=e},className:"Responsive-wrapper"},e&&this.renderChart())}}]),e}(g.Component)),O=function(t){function e(){return Object(o.default)(this,e),Object(h.default)(this,Object(d.default)(e).apply(this,arguments))}return Object(f.default)(e,t),Object(u.default)(e,[{key:"render",value:function(){var t=this.props,e=t.session,a=(t.navMenu,t.data);return m.a.createElement(p.a,Object(c.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:e,navMenu:!0,signinBtn:!0}),m.a.createElement("div",{className:"content"},m.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),m.a.createElement("p",null,"The Coca-Cola Company is an American ...."),m.a.createElement(C,{data:a[0].historyPrice100})))}}],[{key:"getInitialProps",value:function(){var t=Object(s.default)(r.a.mark(function t(e){var a,n,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.req,n=a?a.headers["user-agent"]:navigator.userAgent,t.next=4,fetch("https://vde-app4.app.veb.net/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:l()({operationName:null,variables:{},query:'\n        {\n          security(id: "bjo5t") {\n            id\n            name\n            historyPrice100 {\n              Date\n              Volume\n              Close\n              }\n          }\n        }'})}).then(function(t){return t.json()}).then(function(t){return[t.data.security]});case 4:return i=t.sent,t.abrupt("return",{userAgent:n,data:i});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(g.Component);e.default=O},G9HM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area",function(){var t=a("3L/t");return{page:t.default||t}}])},azxR:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hHgk"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["G9HM",1,0]]]);