(window["webpackJsonpreact-admin"]=window["webpackJsonpreact-admin"]||[]).push([[33],{65:function(e,t,a){"use strict";a(68);var n=a(70),i=a(0),r=a.n(i),c=a(24),s=function(e){return r.a.createElement(n.a,{style:{marginBottom:16}},r.a.createElement(n.a.Item,null,r.a.createElement(c.b,{to:"/index"},"\u9996\u9875")),e.arr&&e.arr.map((function(e){return"object"===typeof e?r.a.createElement(n.a.Item,{key:e.path},r.a.createElement(c.b,{to:e.path},e.title)):r.a.createElement(n.a.Item,{key:e},e)})))};t.a=s},733:function(e,t,a){},959:function(e,t,a){"use strict";a.r(t);a(75);var n=a(76),i=(a(170),a(185)),r=(a(101),a(98)),c=(a(102),a(56)),s=(a(83),a(85)),l=(a(84),a(86)),o=(a(77),a(78)),m=a(19),u=a(20),E=a(22),d=a(21),p=a(23),h=(a(374),a(414)),y=a(0),v=a.n(y),f=a(65),g=(a(733),h.a.Step),b=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}],T=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={current:0},a.onChange=function(e){console.log("onChange:",e),a.setState({current:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"next",value:function(){var e=this.state.current+1;this.setState({current:e})}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"render",value:function(){var e=this,t=this.state.current;return v.a.createElement(n.a,{className:"animated fadeIn"},v.a.createElement("div",null,v.a.createElement(f.a,{arr:["\u5bfc\u822a","\u4e0b\u62c9\u83dc\u5355"]})),v.a.createElement("div",{className:"base-style"},v.a.createElement("h3",null,"\u4f55\u65f6\u4f7f\u7528"),v.a.createElement(o.a,null),v.a.createElement("p",null,"\u5f53\u4efb\u52a1\u590d\u6742\u6216\u8005\u5b58\u5728\u5148\u540e\u5173\u7cfb\u65f6\uff0c\u5c06\u5176\u5206\u89e3\u6210\u4e00\u7cfb\u5217\u6b65\u9aa4\uff0c\u4ece\u800c\u7b80\u5316\u4efb\u52a1\u3002")),v.a.createElement(s.a,{gutter:8},v.a.createElement(l.a,{span:12},v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,{direction:"vertical",current:1},v.a.createElement(g,{title:"Finished",description:"This is a description."}),v.a.createElement(g,{title:"In Progress",description:"This is a description."}),v.a.createElement(g,{title:"Waiting",description:"This is a description."})))),v.a.createElement(l.a,{span:12},v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,{direction:"vertical",size:"small",current:1},v.a.createElement(g,{title:"Finished",description:"This is a description."}),v.a.createElement(g,{title:"In Progress",description:"This is a description."}),v.a.createElement(g,{title:"Waiting",description:"This is a description."}))))),v.a.createElement(s.a,null,v.a.createElement(l.a,null,v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,{current:1},v.a.createElement(g,{title:"Finished",description:"This is a description."}),v.a.createElement(g,{title:"In Progress",subTitle:"Left 00:00:08",description:"This is a description."}),v.a.createElement(g,{title:"Waiting",description:"This is a description."})))),v.a.createElement(l.a,null,v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,{size:"small",current:1},v.a.createElement(g,{title:"Finished"}),v.a.createElement(g,{title:"In Progress"}),v.a.createElement(g,{title:"Waiting"})))),v.a.createElement(l.a,null,v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,null,v.a.createElement(g,{status:"finish",title:"Login",icon:v.a.createElement(c.a,{type:"user"})}),v.a.createElement(g,{status:"finish",title:"Verification",icon:v.a.createElement(c.a,{type:"solution"})}),v.a.createElement(g,{status:"process",title:"Pay",icon:v.a.createElement(c.a,{type:"loading"})}),v.a.createElement(g,{status:"wait",title:"Done",icon:v.a.createElement(c.a,{type:"smile-o"})})))),v.a.createElement(l.a,null,v.a.createElement("div",{className:"base-style"},v.a.createElement("div",null,v.a.createElement(h.a,{current:t,onChange:this.onChange},b.map((function(e){return v.a.createElement(g,{key:e.title,title:e.title})}))),v.a.createElement("div",{className:"steps-content"},b[t].content),v.a.createElement("div",{className:"steps-action"},t<b.length-1&&v.a.createElement(r.a,{type:"primary",onClick:function(){return e.next()}},"Next"),t===b.length-1&&v.a.createElement(r.a,{type:"primary",onClick:function(){return i.a.success("Processing complete!")}},"Done"),t>0&&v.a.createElement(r.a,{style:{marginLeft:8},onClick:function(){return e.prev()}},"Previous"))))),v.a.createElement(l.a,null,v.a.createElement("div",{className:"base-style"},v.a.createElement(h.a,{current:1,status:"error"},v.a.createElement(g,{title:"Finished",description:"This is a description"}),v.a.createElement(g,{title:"In Process",description:"This is a description"}),v.a.createElement(g,{title:"Waiting",description:"This is a description"}))))))}}]),t}(y.Component);t.default=T}}]);
//# sourceMappingURL=33.71c9b042.chunk.js.map