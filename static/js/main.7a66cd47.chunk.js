(this.webpackJsonpcovid19_summary_app=this.webpackJsonpcovid19_summary_app||[]).push([[0],{12:function(e,a,t){e.exports={form_wrapper:"form_form_wrapper__miZYj",form:"form_form__377Pu",fadein:"form_fadein__2EvB6",input:"form_input__23pls",button:"form_button__3ehQC",button_fadein:"form_button_fadein__2hMeF"}},13:function(e,a,t){e.exports={wrapper:"section_wrapper__2ujlz",display:"section_display__32xKM",formfield:"section_formfield__1pJeb",chart:"section_chart__20g9C",starRank:"section_starRank__ZAjBm"}},18:function(e,a,t){e.exports={header:"Header_header__-acq_",nav:"Header_nav__3mlcT"}},24:function(e,a,t){e.exports={radio_input:"rating_radio_input__1_7qQ"}},25:function(e,a,t){e.exports={rank_wrapper:"rank_rank_wrapper__1knMT",fadein:"rank_fadein__3pWx1",fieldset:"rank_fieldset__3tgdZ",move:"rank_move__23nfg"}},44:function(e,a,t){e.exports={button:"Button_button__34dSP"}},50:function(e,a,t){e.exports=t(80)},55:function(e,a,t){},56:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(37),o=t.n(l),c=(t(55),t(56),t(16)),i=function(e){var a=e.url,t=e.width,n=e.height,l=e.text,o=e.className,i=e.textDecoration,u=e.color,s=e.textTransform,d=e.border,m=e.borderRadius,p=e.padding,f=e.backgroundColor,b=e.margin;return r.a.createElement(c.b,{to:a,className:o,style:{textDecoration:i||"none",color:u||"#fff",textTransform:s||null,borderRadius:m||null,padding:p||null,backgroundColor:f||null,border:d||null,width:t||null,height:n||null,margin:b||null}},l||"am here to navigate")},u=t(18),s=t.n(u),d=function(){var e=s.a.header,a=s.a.fig,t=s.a.nav;return r.a.createElement("header",{className:e},r.a.createElement("figure",{className:a}),r.a.createElement("nav",{className:t},r.a.createElement(i,{text:"home",url:"/"}),r.a.createElement(i,{text:"country",url:"/"}),r.a.createElement(i,{text:"statistic",url:"/"})))},m=t(22),p=t.n(m),f=t(14),b=t(39),h=t(11),_=t(40),g=t(41),v=t(49),y=t(47),E=t(42),k=t.n(E),x=t(43),C=t.n(x),w=t(9),S=t.n(w),N=function(e){var a=e.name,t=e.list,n=e.onChange,l=e.placeholder,o=e.value,c=e.isRequired,i=e.type,u=e.className,s=e.outLine,d=e.id,m=e.paddingLeft,p=e.border,f=e.borderRadius,b=e.width,h=e.height,_=e.borderTop,g=e.borderBottom,v=e.backgroundColor,y=e.color,E=e.opacity,k=e.isRefs,x=e.autoComplete,C=e.autoCorrect,w=e.spellCheck,S=e.readOnly,N=e.onInput,O=e.onFocus,j=e.click;return r.a.createElement("input",{style:{outline:s||"none",paddingLeft:m||null,width:b||null,border:p||null,borderRadius:f||null,borderTop:_||null,borderBottom:g||null,height:h||null,color:y||null,backgroundColor:v||null,opacity:E||null},type:i||"text",list:t||null,placeholder:l||null,onChange:n,value:o||"",className:u||"custom-input",name:a,required:c||null,id:d||null,ref:k||null,autoComplete:x||null,autoCorrect:C||null,spellCheck:w||null,readOnly:S||null,onInput:N||null,onFocus:O||null,onClick:j||null})},O=t(44),j=t.n(O).a.button,R=function(e){var a=e.name,t=e.color,n=e.backgroundColor,l=e.click,o=e.text,c=e.handleSubmit,i=e.className,u=e.width,s=e.outline,d=e.margin,m=e.padding,p=e.border,f=e.borderRadius,b=e.ref;return r.a.createElement("div",{className:"button"},r.a.createElement("button",{style:{backgroundColor:n||"red",color:t||"#fff",width:u||null,outline:s||null,margin:d||null,padding:m||null,border:p||null,borderRadius:f||null},onClick:l||null,name:a||null,onSubmit:c||null,className:i||j,ref:b||null},o||"click"))},D=t(12),G=t.n(D),B=function(e){var a=e.data,t=e.handleCountries,n=e.countries,l=e.reset,o=e.handleGlobalSummary,c=G.a.form_wrapper,i=G.a.form,u=G.a.input,s=G.a.button;return r.a.createElement("div",{className:c},r.a.createElement("form",{className:i},r.a.createElement(N,{type:"text",name:"country",list:"country",value:a,onFocus:l,onChange:t,className:u,placeholder:"select country"}),r.a.createElement("datalist",{className:"datalist",id:"country"},n&&n.map((function(e,a){return r.a.createElement("option",{key:a},e.Slug)})))),r.a.createElement(R,{text:"Global Daily summary",click:o,className:s,backgroundColor:"rgb(107, 24, 16)"}))},F=t(13),T=t.n(F),M=t(48),L=t(45),A=t(46),q=t(24),z=t.n(q),I=function(e){e.data,e.handleRatingClick,e.newRating,e.starNum;var a=Object(n.useState)(null),t=Object(h.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(null),i=Object(h.a)(c,2),u=i[0],s=i[1],d=z.a.rating_wrapper,m=z.a.radio_input;return r.a.createElement("div",{className:d},Object(M.a)(Array(5)).map((function(e,a){var t=a+1;return r.a.createElement("label",{key:a},r.a.createElement(N,{type:"radio",name:"rating",value:t,click:function(){return o(t)},className:m}),r.a.createElement(L.a,{icon:A.a,color:t<=(u||l)?"blue":"grey",onMouseEnter:function(){return s(t)},onMouseLeave:function(){return s(null)},style:{marginRight:10},spin:!0}))})))},J=t(25),U=t.n(J),W=function(e){var a=e.data,t=U.a.rank_wrapper,n=U.a.fieldset;return r.a.createElement("div",{className:t},r.a.createElement("fieldset",{className:n},r.a.createElement("h3",null,"lets see your rating on ",a),r.a.createElement("legend",null,"rank countries"),a&&r.a.createElement(I,null)))},Z=function(e){Object(v.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={options:{colors:["#fff","#fff","blue"],chart:{id:"covid_19_cases",foreColor:"rgb(241, 237, 236)"},zoom:{enabled:!0},xaxis:{categories:[],show:!0},yaxis:{showAlways:!0,labels:{text:"heading"}},fill:{colors:["#F44336","#E91E63","#9C27B0"]},dataLabels:{enabled:!0,style:{colors:["rgb(107, 24, 16)"]}},markers:{colors:["#F44336","#E91E63","#9C27B0"]},title:{text:"Covid-19 Global Daily Summary",align:"center",style:{fontSize:"16px"}}},series:[],countries:null,data:"",global:null,type:"area",globalTitle:""},e.handleFormData=function(a){var t=a.target;e.setState({data:t.value})},e.updateChart=function(){var a=e.state,t=a.data,n=a.countries,r=a.global,l=["line","area"];if(t){var o=[],c=n.filter((function(e){return e.Slug===t}));if(c){var i=Object(h.a)(c,1)[0];for(var u in i)Object.keys(r).includes(u)&&o.push(i[u]);var s=l[Math.floor(Math.random()*l.length)];S.a.exec("covid_19_cases","updateSeries",[{name:t,data:o,type:s}]),S.a.exec("covid_19_cases","updateOptions",{title:{text:"Covid-19 ".concat(t.toUpperCase()," Daily Summary")}})}}},e.handleFocus=function(){e.setState({data:""})},e.handleGlobalSummary=function(){var a=e.state,t=a.type,n=a.global;S.a.exec("covid_19_cases","updateSeries",[{name:"Global summary",data:Object.values(n),type:t}]),S.a.exec("covid_19_cases","updateOptions",{title:{text:"Covid-19 GLOBAL Daily Summary"}}),e.setState({globalTitle:"Global Summary",data:""})},e.fetchData=Object(b.a)(p.a.mark((function a(){var t;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],a.next=3,k.a.get("https://api.covid19api.com/summary").then((function(a){var n=a.data,r=n.Global,l=n.Countries;e.setState({countries:l}),e.setState({global:r}),t.push({name:"population",data:Object.values(r),type:"area"}),e.setState({options:Object(f.a)(Object(f.a)({},e.state.options),{},{xaxis:Object(f.a)(Object(f.a)({},e.state.options.xaxis),{},{categories:Object.keys(r)})}),series:t,globalTitle:"Global Summary"}),S.a.exec("covid_19_cases","updateSeries",[{name:"Global Summary"}])})).catch((function(e){return console.log("err.respond",e.response)}));case 3:case"end":return a.stop()}}),a)}))),e}return Object(g.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(e,a){this.updateChart()}},{key:"render",value:function(){var e=T.a.wrapper,a=T.a.formfield,t=T.a.chart,n=T.a.starRank,l=this.state,o=l.type,c=l.data,i=l.globalTitle,u=l.countries,s=l.options,d=l.series;return r.a.createElement("div",{className:e},r.a.createElement("div",{className:a},r.a.createElement(B,{handleCountries:this.handleFormData,data:c,countries:u,reset:this.handleFocus,handleGlobalSummary:this.handleGlobalSummary})),r.a.createElement("div",{className:t},r.a.createElement(C.a,{options:s,series:d,type:o,width:"230%",height:320,title:c?"".concat(c.substr(0,1).toUpperCase()).concat(c.slice(1)," Summary"):i})),r.a.createElement("div",{className:n},r.a.createElement(W,{data:c})))}}]),t}(r.a.Component),H=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(Z,null))},P=t(2);var Q=function(){return r.a.createElement(c.a,null,r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/",component:H,exact:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.7a66cd47.chunk.js.map