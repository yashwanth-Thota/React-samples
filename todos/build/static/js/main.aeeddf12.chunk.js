(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(t,e,n){t.exports=n(59)},57:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(23),c=n.n(r),l=n(14),i=n(6),s=n(7),u=n(9),d=n(8),p=n(10),m=n(60);function h(){return o.a.createElement("header",{style:b},o.a.createElement("h1",null,"TodoList"),o.a.createElement(m.a,{to:"/",style:f},"Home")," | ",o.a.createElement(m.a,{to:"/about",style:f},"About"))}var f={color:"#ffff",textDecoration:"none"},b={background:"#333",color:"white",textAlign:"center",padding:"10px 5px",boxShadow:"0 2px 4px rgb(128,128,128)"},y=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"5px",borderBottom:"1px solid #ccc",textDecoration:n.props.todo.Completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),"  ",n,o.a.createElement("button",{style:g,onClick:this.props.delete.bind(this,e)},"X")))}}]),e}(a.Component),g={backgroundColor:"red",color:"white",padding:"5px 10px",cursor:"pointer",float:"right",borderRadius:"50%"},j=y,v=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return o.a.createElement(j,{key:e.id,todo:e,markComplete:t.props.markComplete,delete:t.props.delete})})}}]),e}(a.Component),E=n(24),O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){return n.setState(Object(E.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:1}}))}}]),e}(o.a.Component),k=n(25),x=n.n(k);function C(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is all about maintaining a todolist for the day"))}var w=n(62),S=n(61),A=n(12),T=n.n(A),D=(n(57),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[]},n.delete=function(t){T.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!=t}))})})},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.addTodo=function(t){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,id:x.a.v4(),completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return o.a.createElement(w.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(S.a,{path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{addTodo:t.addTodo}),o.a.createElement(v,{todos:t.state.todos,markComplete:t.markComplete,delete:t.delete}))}}),o.a.createElement(S.a,{path:"/about",component:C})))}}]),e}(a.Component));c.a.render(o.a.createElement(D,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.aeeddf12.chunk.js.map