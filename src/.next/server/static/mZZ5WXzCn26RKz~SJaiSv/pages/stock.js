module.exports=function(e){var t=require("../../../ssr-module-cache.js");function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}},i=!0;try{e[n].call(r.exports,r,r.exports,a),i=!1}finally{i&&delete t[n]}return r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=8)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/3ze":function(e,t,a){"use strict";var n=a("PL1w"),r=n(a("U8Yc")),i=n(a("KBEF")),o=n(a("J/q3")),c=n(a("3esu")),l=n(a("8m4E")),s=n(a("Od8a")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=u(a("cDcd")),d=f(a("rf6O")),p=f(a("GeWT")),h=a("p8BD");t.default=function(e){var t=h.getDisplayName(e),a=function(t){function a(){return(0,i.default)(this,a),(0,c.default)(this,(0,l.default)(a).apply(this,arguments))}return(0,s.default)(a,t),(0,o.default)(a,[{key:"render",value:function(){return m.default.createElement(e,(0,r.default)({router:this.context.router},this.props))}}]),a}(m.Component);return a.contextTypes={router:d.default.object},a.displayName="withRouter(".concat(t,")"),p.default(a,e)}},"0i/h":function(e,t){e.exports=require("d3")},"3esu":function(e,t,a){var n=a("NluH"),r=a("oS/Z");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},"5dyF":function(e,t,a){e.exports=a("9CGT")},"6Ndq":function(e,t,a){e.exports=a("o5io")},"7mTa":function(e,t,a){e.exports=a("aAV7")},8:function(e,t,a){e.exports=a("BtDg")},"8m4E":function(e,t,a){var n=a("jDdP"),r=a("OKNm");function i(t){return e.exports=i=r?n:function(e){return e.__proto__||n(e)},i(t)}e.exports=i},"9CGT":function(e,t,a){"use strict";var n=a("PL1w"),r=n(a("JYC+")),i=n(a("NluH")),o=n(a("KBEF")),c=n(a("J/q3")),l=n(a("3esu")),s=n(a("8m4E")),u=n(a("Od8a")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},m=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=a("bzos"),p=f(a("cDcd")),h=(m(a("rf6O")),f(a("dAGg"))),v=a("p8BD");var b=function(e){function t(){var e,a,n,r,c;return(0,o.default)(this,t),(e=(0,l.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(a=function(e,t){return{href:e&&"object"===(0,i.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,i.default)(t)?v.formatWithValidation(t):t}},n=null,r=null,c=null,function(e,t){if(e===n&&t===r)return c;var i=a(e,t);return n=e,r=t,c=i,i}),e.linkClicked=function(t){var a=t.currentTarget,n=a.nodeName,r=a.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),o=i.href,c=i.as;if(function(e){var t=d.parse(e,!1,!0),a=d.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(o)){var l=window.location.pathname;o=d.resolve(l,o),c=c?d.resolve(l,c):o,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](o,c,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=d.resolve(e,t);h.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"==typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),o={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=r||n),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=h.Router._rewriteUrlForNextExport(o.href)),p.default.cloneElement(i,o)}}]),t}(p.Component);t.default=b},BtDg:function(e,t,a){"use strict";a.r(t);var n,r=a("z3IF"),i=a("LkAs"),o=a("Moms"),c=a("bMj6"),l=a("hZod"),s=a("tEuJ"),u=a("cDcd"),f=a.n(u),m=a("CXsl"),d=a("YKN3"),p=a("0i/h"),h=function(e){function t(e){var a;Object(i.a)(this,t);var n=(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).props,r=n.svgDimen,o=n.top_margin,s=n.bottom_margin,u=n.data,f=p.scaleBand().range([0,r.width-60]).domain(u.map(function(e){return e.label})),m=p.scaleLinear().domain([0,100]).range([r.height-o-s,0]);return a.state={svgDimen:r,top_margin:o,bottom_margin:s,x:f,y:m,data:u},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"componentWillReceiveProps",value:function(e){var t=e.svgDimen,a=e.top_margin,n=e.bottom_margin,r=e.data,i=p.scaleBand().range([0,t.width-60]).domain(r.map(function(e){return e.label})),o=p.scaleLinear().domain([0,100]).range([t.height-a-n,0]);this.setState({svgDimen:t,top_margin:a,bottom_margin:n,x:i,y:o,data:r})}},{key:"renderAxis",value:function(){var e=this.state,t=e.x,a=e.y,n=p.axisBottom(t).tickSize(0).tickPadding(15),r=p.axisLeft(a).tickSize(10);p.select(this.xAxisElement).selectAll("*").remove(),p.select(this.yAxisElement).selectAll("*").remove(),p.select(this.xAxisElement).attr("class","x axis").call(n).selectAll("text").style("font-size",16),p.select(this.yAxisElement).attr("class","y axis").call(r),p.select(this.yAxisElement).append("text").attr("x",-20).attr("y",-10).style("text-anchor","central").style("fill","black").text("%")}},{key:"render",value:function(){var e=this,t=this.state,a=t.svgDimen,n=t.top_margin,r=t.bottom_margin,i=t.data,o=t.x,c=a.height-n-r;return f.a.createElement("g",{className:"Axis"},f.a.createElement("g",{className:"xAxis",transform:"translate(40,".concat(a.height-r,")"),ref:function(t){return e.xAxisElement=t}}),f.a.createElement("g",{className:"yAxis",transform:"translate(40,".concat(n,")"),ref:function(t){return e.yAxisElement=t}}),i.map(function(e,t){return f.a.createElement("g",{key:t,className:"bar".concat(e.label),transform:"translate(".concat(40+o.bandwidth()*t+o.bandwidth()/2," ,").concat(a.height-r,")")},f.a.createElement(v,{key:t,data:e,bar_width:o.bandwidth(),bar_height:c}))}))}}]),t}(f.a.Component),v=function(e){function t(e){var a;Object(i.a)(this,t);var n=(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).props,r=n.data,o=n.bar_width,s=n.bar_height;return a.state={data:r,bar_width:o,bar_height:s},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.drawBar()}},{key:"componentDidUpdate",value:function(){this.drawBar()}},{key:"componentWillReceiveProps",value:function(e){var t=e.bar_width,a=e.bar_height,n=e.data;this.setState({bar_height:a,bar_width:t,data:n})}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.data!==e.data}},{key:"drawBar",value:function(){var e=this.state,t=(e.bar_width,e.bar_height),a=e.data,n=t/100;p.select(this.el).selectAll("*").remove(),p.select(this.el).append("rect").attr("x",-20).attr("y",-(a["Not Satisfied"]+a.Satisfied)*n+5).attr("width",40).attr("height",a["Not Satisfied"]*n-5).style("fill","#df072c"),p.select(this.el).append("rect").attr("rx",5).attr("ry",5).attr("x",-20).attr("y",-(a["Not Satisfied"]+a.Satisfied)*n).attr("width",40).attr("height",a["Not Satisfied"]*n).style("fill","#df072c"),p.select(this.el).append("line").style("stroke-width",3).style("stroke","black").attr("x1",0).attr("y1",-(a["Not Satisfied"]+a.Satisfied)*n-10).attr("x2",0).attr("y2",-(a["Not Satisfied"]+a.Satisfied)*n+10),p.select(this.el).append("rect").attr("x",-20).attr("y",-a.Satisfied*n).attr("width",40).attr("height",a.Satisfied*n).style("fill","#bdbbbc"),p.select(this.el).append("line").style("stroke-width",3).style("stroke","black").attr("x1",0).attr("y1",-a.Satisfied*n-10).attr("x2",0).attr("y2",-a.Satisfied*n+10),p.select(this.el).append("text").attr("x",30).attr("y",-a.Satisfied*n).attr("alignment-baseline","central").attr("text-anchor","start").style("font-size",20).style("fill","#bdbbbc").text(a.Satisfied+"%")}},{key:"render",value:function(){var e=this;return f.a.createElement("g",{ref:function(t){return e.el=t}})}}]),t}(u.Component),b=function(e){function t(e){var a;Object(i.a)(this,t);var n=(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).props,r=n.width,o=n.height,s=n.data,u={width:r-60-20,height:o-20-20};return a.state={svgDimen:u,data:s},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.width,a=e.height,n=e.data,r={width:t-60-20,height:a-20-20};this.setState({svgDimen:r,data:n})}},{key:"render",value:function(){var e=this.state,t=e.svgDimen,a=e.data,n=.8*t.width,r=.1*t.height,i=.25*t.height;return f.a.createElement("svg",{width:t.width,height:t.height},f.a.createElement("g",{className:"topLegend",transform:"translate(".concat(t.width/2,", 0)")},f.a.createElement("text",{x:"0",y:"0",alignmentBaseline:"text-before-edge",textAnchor:"middle",style:{fontSize:22,fill:"#bdbbbc",fontWeight:"bold"}},"*Net Income")),f.a.createElement(h,{svgDimen:t,top_margin:r,bottom_margin:i,data:a}),f.a.createElement("g",{className:"bottomLegend",transform:"translate(".concat((t.width-n)/2,", ").concat(t.height-i,")")},f.a.createElement("g",{className:"leftLegend",transform:"translate(0, ".concat(i/2,")")},f.a.createElement("circle",{r:"5",cx:"5",cy:"0",fill:"#de0730"}),f.a.createElement("text",{x:"15",y:"0",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"Dividend")),f.a.createElement("g",{className:"centerLegend",transform:"translate(".concat(t.width/3,", ").concat(i/2,")")},f.a.createElement("circle",{r:"5",cx:"5",cy:"0",fill:"#bdbbbc"}),f.a.createElement("text",{x:"15",y:"0",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"Retained"),f.a.createElement("text",{x:"15",dy:"15",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"Earnings")),f.a.createElement("g",{className:"rightLegend",transform:"translate(".concat(2*t.width/3,", ").concat(i/2,")")},f.a.createElement("text",{x:"15",y:"0",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"%  Pay-out"),f.a.createElement("text",{x:"40",dy:"15",alignmentBaseline:"central",textAnchor:"start",style:{fontSize:16,fill:"#bdbbbc"}},"ratio"))))}}]),t}(u.Component),y=[{label:"A?",Satisfied:30,"Not Satisfied":38},{label:"B?",Satisfied:45,"Not Satisfied":43},{label:"C?",Satisfied:40,"Not Satisfied":40}],g=function(e){function t(e){var a;Object(i.a)(this,t);var n=(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).props,r=n.parentWidth,o=n.parentHeight;return a.state={data:y,width:r>600?600:Math.max(r,400),height:Math.max(o,400)},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props,a=t.parentWidth;t.parentHeight;this.setState({data:y,width:a>600?600:Math.max(a,400),height:Math.max(e.parentHeight,400)})}},{key:"render",value:function(){return f.a.createElement(u.Fragment,null,f.a.createElement(b,{data:this.state.data,width:this.state.width,height:this.state.height}))}}]),t}(u.Component),E=(n=g,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={containerWidth:null,containerHeight:null},a.fitParentContainer=a.fitParentContainer.bind(Object(d.a)(Object(d.a)(a))),a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width,a=this.chartContainer.getBoundingClientRect().height;e!==t&&this.setState(function(){return{containerWidth:t,containerHeight:a}})}},{key:"renderChart",value:function(){var e=this.state.containerWidth,t=this.state.containerHeight;return f.a.createElement(n,Object(r.a)({},this.props,{parentWidth:e,parentHeight:t}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return f.a.createElement("div",{style:{width:"100%",height:"100%",minWidth:"384px",minHeight:"281px"},ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(u.Component)),x=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.session;e.navMenu;return f.a.createElement(m.a,Object(r.a)({},this.props,{title:"VEB - The Coca-Cola Company",description:"The Coca-Cola Company",session:t,navMenu:!0,signinBtn:!0}),f.a.createElement("div",{className:"content"},f.a.createElement("h2",null,"Key figures Coca-Cola (NYSE:KO)"),f.a.createElement("p",null,"The Coca-Cola Company is an American ...."),f.a.createElement(E,null)))}}]),t}(u.Component);t.default=x},CXsl:function(e,t,a){"use strict";var n=a("cDcd"),r=a.n(n),i=a("U7sd"),o=a.n(i),c=(a("rf6O"),function(e){return r.a.createElement(o.a,null,r.a.createElement("title",null,e.title),r.a.createElement("meta",{name:"description",content:e.description||""}),r.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.ico"}))}),l=function(){return r.a.createElement("footer",{className:"page-footer fz-14",style:{marginTop:"20px"}},r.a.createElement("div",{className:"footer-top bg-gray"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},r.a.createElement("a",{href:"/",className:"footer-logo"},r.a.createElement("img",{src:"/static/logo-white.png",alt:"",width:"116"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/veel-gestelde-vragen-veb-lidmaatschap"},"FAQ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/acties-menu/actieoverzichtspagina"},"Juridische acties")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/privacy-statement"},"Privacy Statement")))),r.a.createElement("div",{className:"column"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/lidmaatschap/soorten-lidmaatschappen-veb"},"Lid worden")),r.a.createElement("li",null,r.a.createElement("a",{href:"/adverteren"},"Adverteren")),r.a.createElement("li",null,r.a.createElement("a",{href:"/standaardcontent/disclaimer"},"Disclaimer")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"has-text-weight-bold is-uppercase fz-17"},"CONTACT"),r.a.createElement("div",{className:"p-no-margin"},r.a.createElement("p",null,"Tel: ",r.a.createElement("span",null,"070-313 00 00"),r.a.createElement("br",null),"Email: info@veb.net"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"p-no-margin"}))))),r.a.createElement("div",{className:"footer-bottom bg-red"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},"© 2019 - Vereniging van Effectenbezitters"),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("ul",{className:"list-inline"}))))))},s=a("5dyF"),u=a.n(s),f=a("dAGg"),m=a("LkAs"),d=a("Moms"),p=a("bMj6"),h=a("hZod"),v=a("tEuJ"),b=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.session;return e&&e.user?r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement(u.a,{href:"/profile"},r.a.createElement("a",null,r.a.createElement("b",null,e.user.name||e.user.email)))),r.a.createElement("li",null,r.a.createElement("form",{id:"signout",method:"post",action:"/auth/signout",onSubmit:this.handleSignoutSubmit},r.a.createElement("input",{name:"_csrf",type:"hidden",value:e.csrfToken}),r.a.createElement("button",{className:"button is-text",type:"submit",style:{textDecoration:"none"}},"Uitloggen")))):r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",null,r.a.createElement("button",{className:"button is-text",style:{textDecoration:"none"},onClick:function(){}},"Inloggen")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://login.veb.net/identity/createuseraccount",className:"button is-danger"},"Word nu lid!")))}}]),t}(r.a.Component),y=Object(f.withRouter)(function(e){e.router.pathname;var t=e.session,a=e.signinBtn;return r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",null,r.a.createElement("img",{src:"/static/logo.png",alt:"",className:"logo",width:"170"})),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navbarExampleTransparentExample"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-center"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control input-wrap"},r.a.createElement("input",{type:"text",className:"input search-field ng-pristine ng-valid",placeholder:"Zoek naar nieuws, aandelen of een specifiek dossier"}),r.a.createElement("div",{className:"navbar-dropdown is-boxed navbar-search fz-12 search-result-box ng-hide"})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-dark"},r.a.createElement("img",{src:"/static/svg/search.svg",alt:"",width:"16",height:"16"})))))),r.a.createElement("div",{className:"navbar-2"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("ul",{className:"list-contacts fz-12"},r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-phone.svg",alt:"",width:"20"}),r.a.createElement("a",{href:"tel:070-313 00 00"},"070-313 00 00")),r.a.createElement("li",null,r.a.createElement("img",{src:"/static/svg/icon-mail.svg",alt:"",width:"17"}),r.a.createElement("a",{href:"mailto:info@veb.net",className:"underline"},"info@veb.net"))))),r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"#!",className:"navbar-item is-active"},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"VEB-acties"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Beurs"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Begin met beleggen"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Dossiers"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"#!",className:"navbar-link"},"Tools"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement("a",{href:"#!",className:"navbar-item"},"Overview"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Modifiers"))),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Voor Professionals"),r.a.createElement("a",{href:"#!",className:"navbar-item"},"Over de VEB")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(b,{session:t,signinBtn:a}))))))});a("aieD"),t.a=function(e){var t=e.title,a=e.description,n=e.session,i=e.children,o=e.navMenu,s=e.signinBtn;return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(c,{title:t,description:a}),o&&r.a.createElement(y,{session:n,signinBtn:s}),o&&r.a.createElement("section",{className:"section-home",style:{marginBottom:"20px"}},r.a.createElement("h1",{className:"container has-text-centered has-text-weight-bold text-gray fz-26"},a.toUpperCase())),r.a.createElement("div",{className:"container",style:{minHeight:"505px"}},i),o&&r.a.createElement(l,null))}},GeWT:function(e,t,a){"use strict";var n=a("UWCm"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={};o[n.ForwardRef]={$$typeof:!0,render:!0};var c=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,a,n){if("string"!=typeof a){if(m){var d=f(a);d&&d!==m&&e(t,d,n)}var p=l(a);s&&(p=p.concat(s(a)));for(var h=o[t.$$typeof]||r,v=o[a.$$typeof]||r,b=0;b<p.length;++b){var y=p[b];if(!(i[y]||n&&n[y]||v&&v[y]||h&&h[y])){var g=u(a,y);try{c(t,y,g)}catch(e){}}}return t}return t}},"J/q3":function(e,t,a){var n=a("hHgk");function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),n(e,r.key,r)}}e.exports=function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}},"JYC+":function(e,t,a){e.exports=a("fozc")},KBEF:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},LkAs:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",function(){return n})},Moms:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a("hHgk"),r=a.n(n);function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),r()(e,n.key,n)}}function o(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),e}},NluH:function(e,t,a){var n=a("t+lh"),r=a("XzKa");function i(e){return(i="function"==typeof r&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof r&&"symbol"===i(n)?e.exports=o=function(e){return i(e)}:e.exports=o=function(e){return e&&"function"==typeof r&&e.constructor===r&&e!==r.prototype?"symbol":i(e)},o(t)}e.exports=o},OKNm:function(e,t,a){e.exports=a("Wk4r")},Od8a:function(e,t,a){var n=a("6Ndq"),r=a("g9SA");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},PL1w:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},U8Yc:function(e,t,a){e.exports=a("dGr4")},UWCm:function(e,t){e.exports=require("react-is")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XzKa:function(e,t,a){e.exports=a("vqFK")},YKN3:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",function(){return n})},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},aieD:function(e,t){},bBV7:function(e,t,a){"use strict";var n=a("PL1w"),r=n(a("U8Yc")),i=n(a("NluH")),o=n(a("ied0")),c=n(a("hHgk")),l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=l(a("qxCs")),u={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},f=["pathname","route","query","asPath"],m=["components"],d=["push","replace","reload","back","prefetch","beforePopState"];function p(){if(!u.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(u,"events",{get:function(){return s.default.events}}),m.concat(f).forEach(function(e){(0,c.default)(u,e,{get:function(){return p(),u.router[e]}})}),d.forEach(function(e){u[e]=function(){var t;return p(),(t=u.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){u.ready(function(){s.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(u[t])try{u[t].apply(u,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=u;var h=a("/3ze");t.withRouter=h.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return u.router=(0,o.default)(s.default,t),u.readyCallbacks.forEach(function(e){return e()}),u.readyCallbacks=[],u.router},t.Router=s.default,t.makePublicRouterInstance=function(e){for(var t={},a=0;a<f.length;a++){var n=f[a];"object"!==(0,i.default)(e[n])?t[n]=e[n]:t[n]=(0,r.default)({},e[n])}return t.events=s.default.events,m.forEach(function(a){(0,c.default)(t,a,{get:function(){return e[a]}})}),d.forEach(function(a){t[a]=function(){return e[a].apply(e,arguments)}}),t}},bMj6:function(e,t,a){"use strict";var n=a("t+lh"),r=a.n(n),i=a("XzKa"),o=a.n(i);function c(e){return(c="function"==typeof o.a&&"symbol"==typeof r.a?function(e){return typeof e}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"==typeof o.a&&"symbol"===c(r.a)?function(e){return c(e)}:function(e){return e&&"function"==typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":c(e)})(e)}var s=a("YKN3");function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?Object(s.a)(e):t}a.d(t,"a",function(){return u})},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},dAGg:function(e,t,a){e.exports=a("bBV7")},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},g9SA:function(e,t,a){var n=a("OKNm");function r(t,a){return e.exports=r=n||function(e,t){return e.__proto__=t,e},r(t,a)}e.exports=r},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hHgk:function(e,t,a){e.exports=a("TUA0")},hZod:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a("jDdP"),r=a.n(n),i=a("OKNm"),o=a.n(i);function c(e){return(c=o.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},ied0:function(e,t,a){var n=a("7mTa"),r=a("g9SA");function i(t,a,o){return!function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=i=function(e,t,a){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return a&&r(i,a.prototype),i}:e.exports=i=n,i.apply(null,arguments)}e.exports=i},jDdP:function(e,t,a){e.exports=a("/+oN")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},"oS/Z":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},"t+lh":function(e,t,a){e.exports=a("gHn/")},tEuJ:function(e,t,a){"use strict";var n=a("6Ndq"),r=a.n(n),i=a("OKNm"),o=a.n(i);function c(e,t){return(c=o.a||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}a.d(t,"a",function(){return l})},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},z3IF:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("U8Yc"),r=a.n(n);function i(){return(i=r.a||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}}});