(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{43:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n(0),j=n.n(r),o=n(7),a=n.n(o),i=(n(43),n(34)),s=n(20),l=n(30),u=n.n(l);var b=function(){return Object(c.jsx)("header",{children:Object(c.jsxs)("h1",{children:[Object(c.jsx)(u.a,{}),"ToDo List"]})})};var O=function(){var t=(new Date).getFullYear();return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["Copyright \u24d2 ",t]})})},d=n(32),h=n.n(d);var x=function(t){return Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h1",{children:t.title}),Object(c.jsx)("p",{children:t.content}),Object(c.jsx)("button",{onClick:function(){t.onDelete(t.id)},children:Object(c.jsx)(h.a,{})})]})},f=n(24),v=n(29),p=n(33),m=n.n(p),g=n(66),k=n(67);var C=function(t){var e=Object(r.useState)(!1),n=Object(s.a)(e,2),j=n[0],o=n[1],a=Object(r.useState)({title:"",content:""}),i=Object(s.a)(a,2),l=i[0],u=i[1];function b(t){var e=t.target,n=e.name,c=e.value;u((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(f.a)({},n,c))}))}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"create-note",children:[j&&Object(c.jsx)("input",{name:"title",onChange:b,value:l.title,placeholder:"Title"}),Object(c.jsx)("textarea",{name:"content",onClick:function(){o(!0)},onChange:b,value:l.content,placeholder:"Take a note...",rows:j?3:1}),Object(c.jsx)(k.a,{in:j,children:Object(c.jsx)(g.a,{onClick:function(e){t.onAdd(l),u({title:"",content:""}),e.preventDefault()},children:Object(c.jsx)(m.a,{})})})]})})};var D=function(){var t=Object(r.useState)([]),e=Object(s.a)(t,2),n=e[0],j=e[1];function o(t){j((function(e){return e.filter((function(e,n){return n!==t}))}))}return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{}),Object(c.jsx)(C,{onAdd:function(t){j((function(e){return[].concat(Object(i.a)(e),[t])}))}}),n.map((function(t,e){return Object(c.jsx)(x,{id:e,title:t.title,content:t.content,onDelete:o},e)})),Object(c.jsx)(O,{})]})};a.a.render(Object(c.jsx)(j.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.92ef5cdf.chunk.js.map