﻿!function(e){function n(n){for(var r,i,l=n[0],c=n[1],d=n[2],s=0,p=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(n);p.length;)p.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,l=1;l<t.length;l++){var c=t[l];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={0:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var u=c;a.push([137,1]),t()}({137:function(e,n,t){"use strict";t.r(n);var r,o,a,i,l,c,d,u,s,p=t(0),m=t(6),f=t(12),b=t(30),g=t(4),h=(t(76),t(145)),v=t(142),y=t(143),x=t(144),w=function(){return(w=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},_=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var a=arguments[n],i=0,l=a.length;i<l;i++,o++)r[o]=a[i];return r},E=Object(v.a)({ADD_TODO:function(e,n){return{id:Object(x.a)(),deadline:n.deadline,favorite:n.favorite,isCompleted:!1,isTask:!1,memo:"",priority:n.priority,value:e}},REMOVE_TODO:function(e){return{index:e}},COMPLETE_TODO:function(e){return{id:e}},UPDATE_TODO:function(e,n,t){return{id:e,value:n,favorite:t.favorite,priority:t.priority,deadline:t.deadline,memo:t.memo}},CHANGE_TASK:function(e){return{id:e}}},"CANCEL_UPDATE"),k=Object(y.a)(((r={})[E.addTodo]=function(e,n){return w(w({},e),{todos:_(e.todos,[n.payload])})},r[E.removeTodo]=function(e,n){return w(w({},e),{todos:_(e.todos.slice(0,n.payload.index),e.todos.slice(n.payload.index+1))})},r[E.completeTodo]=function(e,n){return w(w({},e),{todos:e.todos.map((function(e){return w(w({},e),{isCompleted:n.payload.id===e.id?!e.isCompleted:e.isCompleted})}))})},r[E.updateTodo]=function(e,n){return w(w({},e),{todos:e.todos.map((function(e){return n.payload.id===e.id?w(w({},n.payload),{isForm:!e.isForm}):e}))})},r[E.changeTask]=function(e,n){return w(w({},e),{todos:e.todos.map((function(e){return w(w({},e),{isTask:n.payload.id===e.id})}))})},r[E.cancelUpdate]=function(e){return w(w({},e),{todos:e.todos.map((function(e){return w(w({},e),{isTask:!1})}))})},r),{todos:[]}),O=Object(m.b)({todo:k,form:h.a}),C=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},j=g.b.small(o||(o=C(['\n  font-size: 1.3rem;\n  font-family: "Amatic SC", cursive;\n'],['\n  font-size: 1.3rem;\n  font-family: "Amatic SC", cursive;\n']))),T=g.b.footer(a||(a=C(["\n  margin-top: auto;\n  padding-top: 50px;\n"],["\n  margin-top: auto;\n  padding-top: 50px;\n"]))),P=function(){return p.createElement(T,null,p.createElement(j,null,"©ToDoList ",p.createElement("time",null,"2020/04/01")))},F=t(66),z=function(e){var n=e.description,t=e.keywords,r=e.title;return p.createElement(F.a,null,p.createElement("meta",{charSet:"utf-8"}),p.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),p.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),p.createElement("title",null,r),p.createElement("meta",{name:"description",content:n}),p.createElement("meta",{name:"keywords",content:t}),p.createElement("link",{href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css",rel:"stylesheet"}),p.createElement("link",{href:"https://fonts.googleapis.com/css?family=Amatic+SC:700",rel:"stylesheet"}))},D=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},S=g.b.header(i||(i=D(["\n  color: #e85a61;\n  font-size: 1.8rem;\n  margin: 15px 0 50px 0;\n"],["\n  color: #e85a61;\n  font-size: 1.8rem;\n  margin: 15px 0 50px 0;\n"]))),A=g.b.h1(l||(l=D(['\n  font-family: "Amatic SC", cursive;\n'],['\n  font-family: "Amatic SC", cursive;\n']))),M=function(e){var n=e.text;return p.createElement(p.Fragment,null,p.createElement(S,null,p.createElement(A,null,n)))},L=t(140),U=t(141),N=t(36),R=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},V=g.b.button(c||(c=R(["\n  background: ",";\n  color: ",";\n  border: 0;\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);\n  box-sizing: border-box;\n  padding: 11px;\n  width: 65px;\n  &:hover {\n    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.11);\n  }\n"],["\n  background: ",";\n  color: ",";\n  border: 0;\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);\n  box-sizing: border-box;\n  padding: 11px;\n  width: 65px;\n  &:hover {\n    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.11);\n  }\n"])),(function(e){return e.background}),(function(e){return e.color})),H=function(e){var n=e.background,t=e.color,r=e.onClick,o=e.iconClass;return p.createElement(V,{color:t,background:n,onClick:r},p.createElement("i",{className:o,style:{fontSize:"1rem"}}))},G=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},I=function(){return(I=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},Y=g.b.input(d||(d=G(["\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);\n  box-sizing: border-box;\n  height: 36px;\n  width: 100%;\n  &:focus {\n    box-shadow: 0 8px 7px 0 rgba(17, 148, 246, 0.11);\n  }\n"],["\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);\n  box-sizing: border-box;\n  height: 36px;\n  width: 100%;\n  &:focus {\n    box-shadow: 0 8px 7px 0 rgba(17, 148, 246, 0.11);\n  }\n"]))),K=function(e){var n=e.input,t=e.name,r=e.type,o=e.placeholder;return p.createElement(Y,I({},n,{name:t,type:r,placeholder:o}))},q=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},J=g.b.span(u||(u=q(["\n  color: red;\n  display: block;\n  min-height: 35px;\n"],["\n  color: red;\n  display: block;\n  min-height: 35px;\n"]))),B=g.b.div(s||(s=q(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),X=function(e){var n=e.onClick,t=e.input,r=e.name,o=e.type,a=e.meta,i=a.touched,l=a.error;return p.createElement(p.Fragment,null,p.createElement(J,null,i?l:""),p.createElement(B,null,p.createElement(K,{input:t,name:r,type:o,placeholder:"テキストを入力してください。"}),p.createElement(H,{color:"white",background:"#28a745",iconClass:"fas fa-plus",onClick:n})))};const Q="必須項目です。",W=e=>e?void 0:Q,Z=(e,n="/")=>e.getFullYear()+n+(e.getMonth()+1)+n+e.getDate();var $,ee,ne,te,re,oe,ae,ie,le,ce,de,ue,se=function(e){var n=e.onClick,t=e.reset,r=e.value,o=p.useState(new Date),a=o[0],i=o[1],l=p.useState(!1),c=l[0],d=l[1],u=p.useState(0),s=u[0],m=u[1];return p.createElement(p.Fragment,null,p.createElement("div",null,p.createElement("label",{htmlFor:"favorite"},"お気に入り: "),p.createElement("input",{type:"checkbox",id:"favorite",onChange:function(){return d(!c)},checked:c})),p.createElement("div",null,p.createElement("label",{htmlFor:"priority"},"優先度: "),p.createElement("select",{name:"priority",id:"priority",onChange:function(e){return m(parseInt(e.target.value))},value:s},p.createElement("option",{value:0},"0"),p.createElement("option",{value:1},"1"),p.createElement("option",{value:2},"2"),p.createElement("option",{value:3},"3"))),p.createElement("div",null,p.createElement("label",{htmlFor:"calendar"},"期限:",Z(a)),p.createElement(N.a,{onChange:function(e){return i(e)},value:a,minDate:new Date,maxDate:new Date(2100,1,1)})),p.createElement(U.a,{name:"todoForm",type:"text",onClick:function(){var e=(e=>(e.getTime()-(new Date).getTime())/864e5+1)(a);if(r.values.todoForm){var o={favorite:c,priority:s,deadline:e};n(r.values.todoForm,o),t(),i(new Date),m(0),d(!1)}},validate:[W],component:X}))},pe=Object(f.b)((function(e){return{value:e.form.todoForm}}),(function(e){return{onClick:function(n,t){return e(E.addTodo(n,t))}}}))(Object(L.a)({form:"todoForm",enableReinitialize:!0,initialValues:{todoForm:""}})(se)),me=t(47),fe=t.n(me),be=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},ge=g.b.button($||($=be(["\n  background: ",";\n  color: ",";\n  border: 0;\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);\n  box-sizing: border-box;\n  padding: 11px;\n  width: 65px;\n  &:hover {\n    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.11);\n  }\n"],["\n  background: ",";\n  color: ",";\n  border: 0;\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);\n  box-sizing: border-box;\n  padding: 11px;\n  width: 65px;\n  &:hover {\n    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.11);\n  }\n"])),(function(e){return e.background}),(function(e){return e.color})),he=function(e){var n=e.background,t=e.color,r=e.onClick,o=e.text;return p.createElement(ge,{color:t,background:n,onClick:r},o)},ve=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},ye=g.b.div(ee||(ee=ve(["\n  background: white;\n  bottom: 0;\n  box-shadow: 0 8px 7px rgba(0, 0, 0, 0.6);\n  overflow-y: auto;\n  padding: 15px;\n  position: fixed;\n  top: 0;\n  width: 80vw;\n  z-index: 10;\n\n  & > div {\n    margin-top: 30px;\n  }\n"],["\n  background: white;\n  bottom: 0;\n  box-shadow: 0 8px 7px rgba(0, 0, 0, 0.6);\n  overflow-y: auto;\n  padding: 15px;\n  position: fixed;\n  top: 0;\n  width: 80vw;\n  z-index: 10;\n\n  & > div {\n    margin-top: 30px;\n  }\n"]))),xe=g.b.h1(ne||(ne=ve(['\n  color: #1890ff;\n  font-family: "YuMincho", "Yu Mincho", serif;\n'],['\n  color: #1890ff;\n  font-family: "YuMincho", "Yu Mincho", serif;\n']))),we=function(e){var n=e.date,t=e.favorite,r=e.memo,o=e.priority,a=e.handleClickCancel,i=e.handleClickUpdate,l=e.handleChangeFavorite,c=e.handleChangeMemo,d=e.handleChangePriority,u=e.handleChangeDate;return p.createElement(ye,null,p.createElement(xe,null,"TASK"),p.createElement("div",{style:{display:"flex"}},p.createElement(U.a,{name:"todoListForm",type:"text",component:K}),p.createElement(he,{color:"blue",background:"#eff3f6",text:"Cancel",onClick:a}),p.createElement(H,{color:"white",background:"blue",iconClass:"far fa-edit",onClick:i})),p.createElement("div",null,p.createElement("div",null,p.createElement("label",{htmlFor:"favorite"},"お気に入り: "),p.createElement("input",{type:"checkbox",id:"favorite",checked:t,onChange:l})),p.createElement("div",null,p.createElement("label",{htmlFor:"priority"},"優先度: "),p.createElement("select",{name:"priority",id:"priority",value:o,onChange:d},p.createElement("option",{value:0},"0"),p.createElement("option",{value:1},"1"),p.createElement("option",{value:2},"2"),p.createElement("option",{value:3},"3"))),p.createElement("div",null,p.createElement("label",{htmlFor:"calendar"},"期限:",Z(n)),p.createElement(N.a,{onChange:u,value:n,minDate:new Date,maxDate:new Date(2100,1,1)}))),p.createElement("div",null,p.createElement("label",{htmlFor:"memo"},"Memo"),p.createElement("textarea",{name:"memo",id:"memo",cols:30,rows:10,style:{width:"100%"},value:r,onChange:c})))},_e=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},Ee=g.b.i(te||(te=_e(["\n  color: ",";\n  margin-right: 10px;\n  font-size: 36px;\n"],["\n  color: ",";\n  margin-right: 10px;\n  font-size: 36px;\n"])),(function(e){return 0===e.color?"black":1===e.color?"blue":2===e.color?"orange":"red"})),ke=g.b.li(re||(re=_e(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 15px;\n  width: 100%;\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 15px;\n  width: 100%;\n"]))),Oe=g.b.p(oe||(oe=_e(["\n  -ms-overflow-style: none;\n  font-size: 1.2rem;\n  font-weight: 300;\n  margin-right: 20px;\n  overflow: scroll;\n  scrollbar-width: none;\n  text-align: left;\n  white-space: nowrap;\n  width: 100%;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"],["\n  -ms-overflow-style: none;\n  font-size: 1.2rem;\n  font-weight: 300;\n  margin-right: 20px;\n  overflow: scroll;\n  scrollbar-width: none;\n  text-align: left;\n  white-space: nowrap;\n  width: 100%;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),Ce=g.b.div(ae||(ae=_e(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),je=g.b.span(ie||(ie=_e(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),Te=g.b.i(le||(le=_e(["\n  margin-right: 15px;\n  color: pink;\n  font-size: 25px;\n"],["\n  margin-right: 15px;\n  color: pink;\n  font-size: 25px;\n"]))),Pe=function(e){var n=e.date,t=e.setDate,r=e.cancelUpdate,o=e.changeTask,a=e.completeTodo,i=e.index,l=e.initialize,c=e.removeTodo,d=e.reset,u=e.todo,s=e.todoListForm,m=e.updateTodo,f=p.useState(u.favorite),b=f[0],g=f[1],h=p.useState(u.priority),v=h[0],y=h[1],x=p.useState(u.memo),w=x[0],_=x[1],E=fe()("far",{"fa-square":!u.isCompleted,"fa-check-square":u.isCompleted});return p.createElement(p.Fragment,null,p.createElement(ke,{className:fe()({"is-completed":u.isCompleted})},p.createElement(Ee,{onClick:function(){a(u.id)},className:E,color:u.priority}),p.createElement(Ce,{onClick:function(){l({todoListForm:u.value}),o(u.id)}},p.createElement(Oe,null,u.value),u.favorite?p.createElement("span",null,p.createElement(Te,{className:"fas fa-heart"})):p.createElement(p.Fragment,null),p.createElement(je,null,"残り",Math.floor(u.deadline),"日")),p.createElement(H,{color:"white",background:"red",iconClass:"far fa-trash-alt",onClick:function(){window.confirm("「"+u.value+"」 を削除しますか?")&&c(i)}})),u.isTask?p.createElement(we,{date:n,priority:v,favorite:b,memo:w,handleChangeFavorite:function(){return g(!b)},handleChangeMemo:function(e){return _(e.target.value)},handleChangePriority:function(e){return y(parseInt(e.target.value))},handleChangeDate:function(e){return t(e)},handleClickCancel:function(){r(),d(),g(u.favorite),y(u.priority),_(u.memo),t(new Date)},handleClickUpdate:function(){var e=(n.getTime()-(new Date).getTime())/864e5+1;if(s.values.todoListForm&&e>=0){var t={favorite:b,priority:v,deadline:e,memo:w};m(u.id,s.values.todoListForm,t),d()}}}):"")},Fe=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},ze=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var a=arguments[n],i=0,l=a.length;i<l;i++,o++)r[o]=a[i];return r},De=g.b.ul(ce||(ce=Fe(["\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column-reverse;\n"],["\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column-reverse;\n"]))),Se=function(e){var n=e.cancelUpdate,t=e.changeTask,r=e.completeTodo,o=e.initialize,a=e.removeTodo,i=e.reset,l=e.todoListForm,c=e.todos,d=e.updateTodo,u=p.useState(new Date),s=u[0],m=u[1],f=p.useState("default"),b=f[0],g=f[1],h=p.useState(c),v=h[0],y=h[1];return p.useEffect((function(){y(function(){var e=ze(c);switch(b){case"default":break;case"complete":e.sort((function(e){return!0===e.isCompleted?1:-1}));break;case"priority":e.sort((function(e,n){return e.priority-n.priority}));break;case"favorite":e.sort((function(e){return!0===e.favorite?1:-1}));break;case"date":e.sort((function(e,n){return n.deadline-e.deadline}))}return e}())}),[b,c]),p.createElement(p.Fragment,null,p.createElement("div",{style:{marginTop:"30px"}},p.createElement("label",{htmlFor:"sort"},"並び順: "),p.createElement("select",{name:"sort",id:"sort",defaultValue:"default",onChange:function(e){return g(e.target.value)}},p.createElement("option",{value:"default"},"デフォルト"),p.createElement("option",{value:"complete"},"達成済み"),p.createElement("option",{value:"priority"},"優先度順"),p.createElement("option",{value:"favorite"},"お気に入り"),p.createElement("option",{value:"date"},"期限"))),p.createElement(De,null,v.map((function(e,c){return p.createElement(Pe,{date:s,setDate:m,cancelUpdate:n,changeTask:t,completeTodo:r,index:c,initialize:o,key:c,removeTodo:a,reset:i,todo:e,todoListForm:l,updateTodo:d})}))))},Ae=Object(f.b)((function(e){return{todos:e.todo.todos,todoListForm:e.form.todoListForm}}),(function(e){return{removeTodo:function(n){return e(E.removeTodo(n))},completeTodo:function(n){return e(E.completeTodo(n))},updateTodo:function(n,t,r){return e(E.updateTodo(n,t,r))},changeTask:function(n){return e(E.changeTask(n))},cancelUpdate:function(){return e(E.cancelUpdate())}}}))(Object(L.a)({form:"todoListForm",enableReinitialize:!0,initialValues:{todoListForm:""}})(Se)),Me=function(){return p.createElement("main",null,p.createElement(pe,null),p.createElement(Ae,null))},Le=(de=function(e,n){return(de=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}de(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),Ue=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},Ne=Object(m.d)(O,Object(m.c)((function(e){return e}))),Re=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return Le(n,e),n.prototype.render=function(){return p.createElement(p.Fragment,null,p.createElement(z,{description:"React.jsで作成した成果物を紹介します。",keywords:"React React.js Todoリスト",title:"React.js成果物"}),p.createElement(Ve,null),p.createElement(M,{text:"TodoList"}),p.createElement(Me,null),p.createElement(P,null))},n}(p.Component),Ve=Object(g.a)(ue||(ue=Ue(['\n#app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    padding: 0 24px;\n}\n* {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    font-family: proximanova, Gidole-Regular, "Helvetica Neue", "Hiragino Kaku Gothic ProN", "Segoe UI", Meiryo, sans-serif;\n}\nul{\n    list-style-type: none;\n}\n.is-completed {\n    opacity: .5;\n}\n.is-completed p {\n    // background: orange;\n    text-decoration: line-through;\n }\n'],['\n#app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    padding: 0 24px;\n}\n* {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    font-family: proximanova, Gidole-Regular, "Helvetica Neue", "Hiragino Kaku Gothic ProN", "Segoe UI", Meiryo, sans-serif;\n}\nul{\n    list-style-type: none;\n}\n.is-completed {\n    opacity: .5;\n}\n.is-completed p {\n    // background: orange;\n    text-decoration: line-through;\n }\n'])));Object(b.render)(p.createElement(f.a,{store:Ne},p.createElement(Re,null)),document.getElementById("app"))},76:function(e,n,t){var r=t(77),o=t(78);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},78:function(e,n,t){(n=t(79)(!1)).push([e.i,".react-calendar {\n  width: 350px;\n  max-width: 100%;\n  background: white;\n  border: 1px solid #a0a096;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.125em;\n}\n.react-calendar--doubleView {\n  width: 700px;\n}\n.react-calendar--doubleView .react-calendar__viewContainer {\n  display: flex;\n  margin: -0.5em;\n}\n.react-calendar--doubleView .react-calendar__viewContainer > * {\n  width: 50%;\n  margin: 0.5em;\n}\n.react-calendar,\n.react-calendar *,\n.react-calendar *:before,\n.react-calendar *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.react-calendar button {\n  margin: 0;\n  border: 0;\n  outline: none;\n}\n.react-calendar button:enabled:hover {\n  cursor: pointer;\n}\n.react-calendar__navigation {\n  height: 44px;\n  margin-bottom: 1em;\n}\n.react-calendar__navigation button {\n  min-width: 44px;\n  background: none;\n}\n.react-calendar__navigation button:enabled:hover,\n.react-calendar__navigation button:enabled:focus {\n  background-color: #e6e6e6;\n}\n.react-calendar__navigation button[disabled] {\n  background-color: #f0f0f0;\n}\n.react-calendar__month-view__weekdays {\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.75em;\n}\n.react-calendar__month-view__weekdays__weekday {\n  padding: 0.5em;\n}\n.react-calendar__month-view__weekNumbers {\n  font-weight: bold;\n}\n.react-calendar__month-view__weekNumbers .react-calendar__tile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75em;\n  padding: calc(0.75em / 0.75) calc(0.5em / 0.75);\n}\n.react-calendar__month-view__days__day--weekend {\n  color: #d10000;\n}\n.react-calendar__month-view__days__day--neighboringMonth {\n  color: #757575;\n}\n.react-calendar__year-view .react-calendar__tile,\n.react-calendar__decade-view .react-calendar__tile,\n.react-calendar__century-view .react-calendar__tile {\n  padding: 2em 0.5em;\n}\n.react-calendar__tile {\n  max-width: 100%;\n  text-align: center;\n  padding: 0.75em 0.5em;\n  background: none;\n}\n.react-calendar__tile:disabled {\n  background-color: #f0f0f0;\n}\n.react-calendar__tile:enabled:hover,\n.react-calendar__tile:enabled:focus {\n  background-color: #e6e6e6;\n}\n.react-calendar__tile--now {\n  background: #ffff76;\n}\n.react-calendar__tile--now:enabled:hover,\n.react-calendar__tile--now:enabled:focus {\n  background: #ffffa9;\n}\n.react-calendar__tile--hasActive {\n  background: #76baff;\n}\n.react-calendar__tile--hasActive:enabled:hover,\n.react-calendar__tile--hasActive:enabled:focus {\n  background: #a9d4ff;\n}\n.react-calendar__tile--active {\n  background: #006edc;\n  color: white;\n}\n.react-calendar__tile--active:enabled:hover,\n.react-calendar__tile--active:enabled:focus {\n  background: #1087ff;\n}\n.react-calendar--selectRange .react-calendar__tile--hover {\n  background-color: #e6e6e6;\n}\n",""]),e.exports=n}});