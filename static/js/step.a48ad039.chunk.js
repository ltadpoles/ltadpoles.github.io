(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[26],{67:function(e,t,a){"use strict";a(70);var n=a(72),i=a(0),r=a.n(i),c=a(23),s=function(e){return r.a.createElement(n.a,{style:{marginBottom:16}},r.a.createElement(n.a.Item,null,r.a.createElement(c.b,{to:"/index"},"\u9996\u9875")),e.arr&&e.arr.map((function(e){return"object"===typeof e?r.a.createElement(n.a.Item,{key:e.path},r.a.createElement(c.b,{to:e.path},e.title)):r.a.createElement(n.a.Item,{key:e},e)})))};t.a=s},736:function(e,t,a){},963:function(e,t,a){"use strict";a.r(t);a(77);var n=a(78),i=(a(172),a(187)),r=(a(103),a(100)),c=(a(104),a(58)),s=(a(85),a(87)),l=(a(86),a(88)),o=(a(79),a(80)),m=a(18),u=a(19),E=a(21),p=a(20),d=a(22),h=(a(376),a(416)),y=a(0),v=a.n(y),f=a(67),g=(a(736),h.a.Step),b=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}],T=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={current:0},a.onChange=function(e){console.log("onChange:",e),a.setState({current:e})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"next",value:function(){var e=this.state.current+1;this.setState({current:e})}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"render",value:function(){var e=this,t=this.state.current;return v.a.createElement(n.a,{className:"animated fadeIn"},v.a.createElement("div",null,v.a.createElement(f.a,{arr:["\u5bfc\u822a","\u4e0b\u62c9\u83dc\u5355"]})),v.a.createElement("div",{className:"base-style"},v.a.createElement("h3",null,"\u4f55\u65f6\u4f7f\u7528"),v.a.createElement(o.a,null),v.a.createElement("p",null,"\u5f53\u4efb\u52a1\u590d\u6742\u6216\u8005\u5b58\u5728\u5148\u540e\u5173\u7cfb\u65f6\uff0c\u5c06\u5176\u5206\u89e3\u6210\u4e00\u7cfb\u5217\u6b65\u9aa4\uff0c\u4ece\u800c\u7b80\u5316\u4efb\u52a1\u3002")),v.a.createElement(s.a,{gutter:8},v.a.createElement(l.a,{span:12},v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,{direction:"vertical",current:1},v.a.createElement(g,{title:"Finished",description:"This is a description."}),v.a.createElement(g,{title:"In Progress",description:"This is a description."}),v.a.createElement(g,{title:"Waiting",description:"This is a description."})))),v.a.createElement(l.a,{span:12},v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,{direction:"vertical",size:"small",current:1},v.a.createElement(g,{title:"Finished",description:"This is a description."}),v.a.createElement(g,{title:"In Progress",description:"This is a description."}),v.a.createElement(g,{title:"Waiting",description:"This is a description."}))))),v.a.createElement(s.a,null,v.a.createElement(l.a,null,v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,{current:1},v.a.createElement(g,{title:"Finished",description:"This is a description."}),v.a.createElement(g,{title:"In Progress",subTitle:"Left 00:00:08",description:"This is a description."}),v.a.createElement(g,{title:"Waiting",description:"This is a description."})))),v.a.createElement(l.a,null,v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,{size:"small",current:1},v.a.createElement(g,{title:"Finished"}),v.a.createElement(g,{title:"In Progress"}),v.a.createElement(g,{title:"Waiting"})))),v.a.createElement(l.a,null,v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,null,v.a.createElement(g,{status:"finish",title:"Login",icon:v.a.createElement(c.a,{type:"user"})}),v.a.createElement(g,{status:"finish",title:"Verification",icon:v.a.createElement(c.a,{type:"solution"})}),v.a.createElement(g,{status:"process",title:"Pay",icon:v.a.createElement(c.a,{type:"loading"})}),v.a.createElement(g,{status:"wait",title:"Done",icon:v.a.createElement(c.a,{type:"smile-o"})})))),v.a.createElement(l.a,null,v.a.createElement("div",{className:"base-style"},v.a.createElement("div",null,v.a.createElement(h.a,{current:t,onChange:this.onChange},b.map((function(e){return v.a.createElement(g,{key:e.title,title:e.title})}))),v.a.createElement("div",{className:"steps-content"},b[t].content),v.a.createElement("div",{className:"steps-action"},t<b.length-1&&v.a.createElement(r.a,{type:"primary",onClick:function(){return e.next()}},"Next"),t===b.length-1&&v.a.createElement(r.a,{type:"primary",onClick:function(){return i.a.success("Processing complete!")}},"Done"),t>0&&v.a.createElement(r.a,{style:{marginLeft:8},onClick:function(){return e.prev()}},"Previous"))))),v.a.createElement(l.a,null,v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,{current:1,status:"error"},v.a.createElement(g,{title:"Finished",description:"This is a description"}),v.a.createElement(g,{title:"In Process",description:"This is a description"}),v.a.createElement(g,{title:"Waiting",description:"This is a description"}))))))}}]),t}(y.Component);t.default=T}}]);
//# sourceMappingURL=step.a48ad039.chunk.js.map