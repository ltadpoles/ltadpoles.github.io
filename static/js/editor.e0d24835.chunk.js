(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[16],{67:function(e,t,a){"use strict";a(70);var n=a(72),r=a(0),i=a.n(r),c=a(23);var o=i.a.memo((function(e){return i.a.createElement(n.a,{style:{marginBottom:16}},i.a.createElement(n.a.Item,null,i.a.createElement(c.b,{to:"/index"},"\u9996\u9875")),e.arr&&e.arr.map((function(e){return"object"===typeof e?i.a.createElement(n.a.Item,{key:e.path},i.a.createElement(c.b,{to:e.path},e.title)):i.a.createElement(n.a.Item,{key:e},e)})))}),(function(e,t){return e.arr.join()===t.arr.join()}));t.a=o},896:function(e,t,a){},957:function(e,t,a){"use strict";a.r(t);a(77);var n=a(78),r=(a(79),a(80)),i=a(18),c=a(19),o=a(21),l=a(20),s=a(22),u=a(0),m=a.n(u),d=a(799),E=a.n(d),h=(a(895),a(67)),p=(a(896),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={editorState:E.a.createEditorState("<p>\u4f60\u597d <b>\u4e16\u754c!</b></p>"),outputHTML:"<p>\u4f60\u597d <b>\u4e16\u754c!</b></p>"},a.handleEditorChange=function(e){a.setState({editorState:e,outputHTML:e.toHTML()})},a.setEditorContentAsync=function(){a.isLiving&&a.setState({editorState:E.a.createEditorState("\u4f60\u597d,<b>\u53ef\u7231\u7684\u4eba! \u5f88\u5e78\u8fd0\u5728\u8fd9\u91cc\u4e0e\u4f60\u76f8\u9047!</b>")})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.isLiving=!0,setTimeout(this.setEditorContentAsync,3e3)}},{key:"componentWillUnmount",value:function(){this.isLiving=!1}},{key:"render",value:function(){var e=this.state,t=e.editorState,a=e.outputHTML;return m.a.createElement(n.a,{className:"animated fadeIn"},m.a.createElement("div",null,m.a.createElement(h.a,{arr:["\u5176\u4ed6","\u5bcc\u6587\u672c"]})),m.a.createElement("div",{className:"base-style"},m.a.createElement("h3",null,"\u4f55\u65f6\u4f7f\u7528"),m.a.createElement(r.a,null),m.a.createElement("p",null,"\u5f53\u7528\u6237\u9700\u8981\u4e00\u4e9b\u7279\u5b9a\u8f93\u5165\u65f6\uff0c\u6b64\u9875\u9762\u4f7f\u7528\u7684\u5bcc\u6587\u672c\u7f16\u8f91\u5668\u662f",m.a.createElement("a",{href:"https://github.com/margox/braft-editor"},"braft-editor"))),m.a.createElement("div",{className:"base-style"},m.a.createElement("div",{className:"editor"},m.a.createElement(E.a,{value:t,onChange:this.handleEditorChange}))),m.a.createElement("div",{className:"base-style"},m.a.createElement("h5",null,"\u8f93\u51fa\u5185\u5bb9"),m.a.createElement("div",{className:"output-content"},a)))}}]),t}(u.Component));t.default=p}}]);
//# sourceMappingURL=editor.e0d24835.chunk.js.map