(window["webpackJsonpreact-admin"]=window["webpackJsonpreact-admin"]||[]).push([[38],{65:function(e,t,a){"use strict";a(68);var n=a(70),l=a(0),r=a.n(l),c=a(24),i=function(e){return r.a.createElement(n.a,{style:{marginBottom:16}},r.a.createElement(n.a.Item,null,r.a.createElement(c.b,{to:"/index"},"\u9996\u9875")),e.arr&&e.arr.map((function(e){return"object"===typeof e?r.a.createElement(n.a.Item,{key:e.path},r.a.createElement(c.b,{to:e.path},e.title)):r.a.createElement(n.a.Item,{key:e},e)})))};t.a=i},961:function(e,t,a){"use strict";a.r(t);a(75);var n=a(76),l=(a(83),a(85)),r=(a(84),a(86)),c=(a(102),a(56)),i=(a(77),a(78)),o=a(415),s=a(19),d=a(20),h=a(22),u=a(21),y=a(23),p=(a(160),a(193)),m=(a(789),a(942)),E=a(0),f=a.n(E),k=a(65),g=m.a.TreeNode,x=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}],v=p.a.Search,b=[];!function e(t,a,n){for(var l=a||"0",r=n||b,c=[],i=0;i<3;i++){var o="".concat(l,"-").concat(i);r.push({title:o,key:o}),i<2&&c.push(o)}if(t<0)return r;var s=t-1;c.forEach((function(t,a){return r[a].children=[],e(s,t,r[a].children)}))}(1);var K=[];!function e(t){for(var a=0;a<t.length;a++){var n=t[a],l=n.key;K.push({key:l,title:l}),n.children&&e(n.children)}}(b);var S=function e(t,a){for(var n,l=0;l<a.length;l++){var r=a[l];r.children&&(r.children.some((function(e){return e.key===t}))?n=r.key:e(t,r.children)&&(n=e(t,r.children)))}return n},N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={expandedKeys:["0-0-0","0-0-1"],autoExpandParent:!0,checkedKeys:["0-0-0"],selectedKeys:[],searchValue:"",gData:b},a.onDragEnter=function(e){console.log(e),a.setState({expandedKeys:e.expandedKeys})},a.onExpand=function(e){console.log("onExpand",e),a.setState({expandedKeys:e,autoExpandParent:!1})},a.onDrop=function(e){console.log(e);var t,n=e.node.props.eventKey,l=e.dragNode.props.eventKey,r=e.node.props.pos.split("-"),c=e.dropPosition-Number(r[r.length-1]),i=function e(t,a,n){t.forEach((function(t,l,r){return t.key===a?n(t,l,r):t.children?e(t.children,a,n):void 0}))},s=Object(o.a)(a.state.gData);if(i(s,l,(function(e,a,n){n.splice(a,1),t=e})),e.dropToGap)if((e.node.props.children||[]).length>0&&e.node.props.expanded&&1===c)i(s,n,(function(e){e.children=e.children||[],e.children.unshift(t)}));else{var d,h;i(s,n,(function(e,t,a){d=a,h=t})),-1===c?d.splice(h,0,t):d.splice(h+1,0,t)}else i(s,n,(function(e){e.children=e.children||[],e.children.push(t)}));a.setState({gData:s})},a.onCheck=function(e){console.log("onCheck",e),a.setState({checkedKeys:e})},a.onSelect=function(e,t){console.log("onSelect",t),a.setState({selectedKeys:e})},a.renderTreeNodes=function(e){return e.map((function(e){return e.children?f.a.createElement(g,{title:e.title,key:e.key,dataRef:e},a.renderTreeNodes(e.children)):f.a.createElement(g,Object.assign({key:e.key},e))}))},a.onChange=function(e){var t=e.target.value,n=K.map((function(e){return e.title.indexOf(t)>-1?S(e.key,b):null})).filter((function(e,t,a){return e&&a.indexOf(e)===t}));a.setState({expandedKeys:n,searchValue:t,autoExpandParent:!0})},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchValue,a=e.expandedKeys,o=e.autoExpandParent,s=function e(a){return a.map((function(a){var n=a.title.indexOf(t),l=a.title.substr(0,n),r=a.title.substr(n+t.length),c=n>-1?f.a.createElement("span",null,l,f.a.createElement("span",{style:{color:"#f50"}},t),r):f.a.createElement("span",null,a.title);return a.children?f.a.createElement(g,{key:a.key,title:c},e(a.children)):f.a.createElement(g,{key:a.key,title:c})}))};return f.a.createElement(n.a,{className:"animated fadeIn"},f.a.createElement("div",null,f.a.createElement(k.a,{arr:["\u5c55\u793a","\u6811\u5f62\u63a7\u4ef6"]})),f.a.createElement("div",{className:"base-style"},f.a.createElement("h3",null,"\u4f55\u65f6\u4f7f\u7528"),f.a.createElement(i.a,null),f.a.createElement("p",null,"\u6587\u4ef6\u5939\u3001\u7ec4\u7ec7\u67b6\u6784\u3001\u751f\u7269\u5206\u7c7b\u3001\u56fd\u5bb6\u5730\u533a\u7b49\u7b49\uff0c\u4e16\u95f4\u4e07\u7269\u7684\u5927\u591a\u6570\u7ed3\u6784\u90fd\u662f\u6811\u5f62\u7ed3\u6784\u3002\u4f7f\u7528 \u6811\u63a7\u4ef6 \u53ef\u4ee5\u5b8c\u6574\u5c55\u73b0\u5176\u4e2d\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u5e76\u5177\u6709\u5c55\u5f00\u6536\u8d77\u9009\u62e9\u7b49\u4ea4\u4e92\u529f\u80fd\u3002")),f.a.createElement(l.a,{gutter:8},f.a.createElement(r.a,{span:12},f.a.createElement("div",{className:"base-style"},f.a.createElement(i.a,{orientation:"left"},"\u57fa\u7840\u7528\u6cd5"),f.a.createElement(m.a,{checkable:!0,showIcon:!0,defaultExpandedKeys:["0-0-0","0-0-1"],defaultSelectedKeys:["0-0-0","0-0-1"],defaultCheckedKeys:["0-0-0","0-0-1"],onSelect:this.onSelect,onCheck:this.onCheck},f.a.createElement(g,{title:"parent 1",key:"0-0"},f.a.createElement(g,{icon:f.a.createElement(c.a,{type:"meh-o"}),title:"parent 1-0",key:"0-0-0",disabled:!0},f.a.createElement(g,{title:"leaf",key:"0-0-0-0",disableCheckbox:!0}),f.a.createElement(g,{title:"leaf",key:"0-0-0-1"})),f.a.createElement(g,{title:"parent 1-1",key:"0-0-1",icon:f.a.createElement(c.a,{type:"meh-o"})},f.a.createElement(g,{title:f.a.createElement("span",{style:{color:"#1890ff"}},"sss"),key:"0-0-1-0"}))))),f.a.createElement("div",{className:"base-style"},f.a.createElement(i.a,{orientation:"left"},"\u53ef\u641c\u7d22"),f.a.createElement(v,{style:{marginBottom:8},placeholder:"Search",onChange:this.onChange}),f.a.createElement(m.a,{showLine:!0,onExpand:this.onExpand,expandedKeys:a,autoExpandParent:o},s(b)))),f.a.createElement(r.a,{span:12},f.a.createElement("div",{className:"base-style"},f.a.createElement(i.a,{orientation:"left"},"\u53d7\u63a7\u63a7\u4ef6"),f.a.createElement(m.a,{checkable:!0,onExpand:this.onExpand,expandedKeys:this.state.expandedKeys,autoExpandParent:this.state.autoExpandParent,onCheck:this.onCheck,checkedKeys:this.state.checkedKeys,onSelect:this.onSelect,selectedKeys:this.state.selectedKeys},this.renderTreeNodes(x))),f.a.createElement("div",{className:"base-style"},f.a.createElement(i.a,{orientation:"left"},"\u53ef\u62d6\u62fd"),f.a.createElement(m.a,{className:"draggable-tree",defaultExpandedKeys:this.state.expandedKeys,draggable:!0,blockNode:!0,onDragEnter:this.onDragEnter,onDrop:this.onDrop},this.state.gData.map((function(e){return e.children&&e.children.length?f.a.createElement(g,{key:e.key,title:e.title},s(e.children)):f.a.createElement(g,{key:e.key,title:e.title})})))))))}}]),t}(E.Component);t.default=N}}]);
//# sourceMappingURL=38.8e97f4c6.chunk.js.map