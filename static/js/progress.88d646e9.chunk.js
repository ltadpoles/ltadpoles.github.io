(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[24],{67:function(e,t,a){"use strict";a(70);var n=a(72),r=a(0),c=a.n(r),l=a(23);var i=c.a.memo((function(e){return c.a.createElement(n.a,{style:{marginBottom:16}},c.a.createElement(n.a.Item,null,c.a.createElement(l.b,{to:"/index"},"\u9996\u9875")),e.arr&&e.arr.map((function(e){return"object"===typeof e?c.a.createElement(n.a.Item,{key:e.path},c.a.createElement(l.b,{to:e.path},e.title)):c.a.createElement(n.a.Item,{key:e},e)})))}),(function(e,t){return e.arr.join()===t.arr.join()}));t.a=i},797:function(e,t,a){},959:function(e,t,a){"use strict";a.r(t);a(77);var n=a(78),r=(a(85),a(87)),c=(a(86),a(88)),l=(a(497),a(537)),i=(a(79),a(80)),s=a(18),m=a(19),o=a(21),p=a(20),u=a(22),E=(a(103),a(100)),f=a(0),y=a.n(f),d=a(67),b=(a(797),E.a.Group),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={percent:0},a.increase=function(){var e=a.state.percent+10;e>100&&(e=100),a.setState({percent:e})},a.decline=function(){var e=a.state.percent-10;e<0&&(e=0),a.setState({percent:e})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return y.a.createElement(n.a,{className:"progress animated fadeIn"},y.a.createElement("div",null,y.a.createElement(d.a,{arr:["\u5176\u4ed6","\u8fdb\u5ea6\u6761"]})),y.a.createElement("div",{className:"base-style"},y.a.createElement("h3",null,"\u4f55\u65f6\u4f7f\u7528"),y.a.createElement("p",null,"\u5728\u64cd\u4f5c\u9700\u8981\u8f83\u957f\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\u65f6\uff0c\u4e3a\u7528\u6237\u663e\u793a\u8be5\u64cd\u4f5c\u7684\u5f53\u524d\u8fdb\u5ea6\u548c\u72b6\u6001\u3002")),y.a.createElement(r.a,{gutter:8},y.a.createElement(c.a,{span:12},y.a.createElement("div",{className:"base-style"},y.a.createElement(i.a,{orientation:"left"},"\u57fa\u672c"),y.a.createElement(l.a,{percent:30}),y.a.createElement(l.a,{percent:50,status:"active"}),y.a.createElement(l.a,{percent:70,status:"exception"}),y.a.createElement(l.a,{percent:100,size:"small"}),y.a.createElement(l.a,{percent:50,showInfo:!1,size:"small"})),y.a.createElement("div",{className:"base-style"},y.a.createElement(i.a,{orientation:"left"},"\u52a8\u6001\u8fdb\u5ea6\u6761"),y.a.createElement(l.a,{type:"circle",percent:this.state.percent}),y.a.createElement(b,null,y.a.createElement(E.a,{onClick:this.decline,icon:"minus"}),y.a.createElement(E.a,{onClick:this.increase,icon:"plus"})))),y.a.createElement(c.a,{span:12},y.a.createElement("div",{className:"base-style"},y.a.createElement(i.a,{orientation:"left"},"\u5706\u73af"),y.a.createElement(l.a,{type:"circle",percent:75}),y.a.createElement(l.a,{type:"circle",percent:70,status:"exception"}),y.a.createElement(l.a,{type:"circle",percent:100,width:80})),y.a.createElement("div",{className:"base-style"},y.a.createElement(i.a,{orientation:"left"},"\u81ea\u5b9a\u4e49\u6587\u5b57"),y.a.createElement(l.a,{type:"circle",percent:75,format:function(e){return"".concat(e," Days")}}),y.a.createElement(l.a,{type:"circle",percent:100,format:function(){return"Done"}})))))}}]),t}(f.Component);t.default=h}}]);
//# sourceMappingURL=progress.88d646e9.chunk.js.map