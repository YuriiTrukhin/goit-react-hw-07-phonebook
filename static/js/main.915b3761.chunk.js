(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__38-9L",label:"ContactForm_label__qR9T8",input:"ContactForm_input__1EGzQ",inputBtn:"ContactForm_inputBtn__EsMKD"}},17:function(t,e,n){t.exports={list:"ContactList_list__3Vp9H",btn:"ContactList_btn__kPPLj",listItem:"ContactList_listItem__2Rcv-",enter:"ContactList_enter__3aLaz",enterActive:"ContactList_enterActive__PEp2_",exit:"ContactList_exit__1LbKg",exitActive:"ContactList_exitActive__3IfGy"}},18:function(t,e,n){t.exports={container:"App_container___eUPQ",title:"App_title__1MDTT",appear:"App_appear__16qcl",appearActive:"App_appearActive__1YRL9"}},21:function(t,e,n){t.exports={box:"Filter_box__2yFBo",input:"Filter_input__2D5bm",label:"Filter_label__2f0-_"}},26:function(t,e,n){t.exports={alertBox:"Alert_alertBox__2Niq0",enter:"Alert_enter__1CsB-",enterActive:"Alert_enterActive__1YA0w",alertExit:"Alert_alertExit__2Zjxi",exitActive:"Alert_exitActive__3-m7A"}},45:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var c,a,o=n(1),r=n(0),s=n(9),i=n.n(s),u=(n(45),n(11)),l=n(12),b=n(15),d=n(14),j=n(36),m=n(7),f=n(8),h=n(10),p=n.n(h),O=n(20),_=n.n(O),C=n(2),x=Object(C.b)("contacts/addRequest"),v=Object(C.b)("contacts/addSuccess"),A={addContactError:Object(C.b)("contacts/addError"),addContactSuccess:v,addContactRequest:x,fetchContactsRequest:Object(C.b)("contacts/fetchRequest"),fetchContactsSuccess:Object(C.b)("contacts/fetchSuccess"),fetchContactsError:Object(C.b)("contacts/fetchError"),removeContactsRequest:Object(C.b)("contacts/removeRequest"),removeContactsSuccess:Object(C.b)("contacts/removeSuccess"),removeContactsError:Object(C.b)("contacts/removeError"),filterRender:Object(C.b)("contacts/filterRender")},g={addContact:function(t){var e=t.name,n=t.number;return function(t){t(A.addContactRequest()),_.a.post("http://localhost:2000/contacts",{name:e,number:n}).then((function(e){t(A.addContactSuccess(e.data))})).catch((function(e){return t(A.addContactError(e))}))}},fetchContacts:function(){return function(t){t(A.fetchContactsRequest()),_.a.get("http://localhost:2000/contacts").then((function(e){var n=e.data;t(A.fetchContactsSuccess(n))})).catch((function(e){return t(A.fetchContactsError(e))}))}},removeContact:function(t){return function(e){e(A.removeContactsRequest()),_.a.delete("http://localhost:2000/contacts/".concat(t)).then((function(){e(A.removeContactsSuccess(t))})).catch((function(t){return e(A.removeContactsError(t))}))}}},N=n(69),S=n(26),y=n.n(S),F=function(t){var e=t.contactAdded;return Object(o.jsx)(N.a,{in:e,timeout:250,classNames:y.a,unmountOnExit:!0,children:Object(o.jsx)("div",{className:y.a.alertBox,children:Object(o.jsx)("p",{children:"Contact already declared"})})})},L=function(t){return t.contacts.loading},R=function(t){return t.contacts.filter},E=function(t){return t.contacts.items},q=function(t){return t.contacts.items.filter((function(e){return e.name.toLowerCase().includes(t.contacts.filter.toLowerCase())}))},k=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",contactAdded:!1},t.handleChange=function(e){var n=e.target;t.setState(Object(m.a)({},n.name,n.value))},t.handleSubmit=function(e){if(e.preventDefault(),console.log(t.props.list),t.props.list.some((function(e){return e.name===t.state.name})))return t.setState({contactAdded:!0}),void setTimeout((function(){return t.setState({contactAdded:!1})}),2e3);t.props.addContact(Object(j.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=t.contactAdded;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(F,{contactAdded:c}),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:p.a.form,action:"",onSubmit:this.handleSubmit,children:[Object(o.jsxs)("label",{className:p.a.label,htmlFor:"name",children:[" ","Name",Object(o.jsx)("input",{className:p.a.input,type:"text",name:"name",value:e,placeholder:"name",onChange:this.handleChange})]}),Object(o.jsxs)("label",{className:p.a.label,htmlFor:"number",children:[" ","Number",Object(o.jsx)("input",{className:p.a.input,type:"tel",name:"number",value:n,placeholder:"number",onChange:this.handleChange})]}),Object(o.jsx)("input",{className:p.a.inputBtn,type:"submit",value:"Add contuct"})]})})]})}}]),n}(r.Component),B={addContact:g.addContact},D=Object(f.b)((function(t){return{list:E(t)}}),B)(k),w=n(17),I=n.n(w),P=n(70),T=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(P.a,{component:"ul",className:I.a.list,children:this.props.list.map((function(e){return Object(o.jsx)(N.a,{classNames:I.a,timeout:250,children:Object(o.jsxs)("li",{className:I.a.listItem,children:[e.name," : ",e.number,Object(o.jsx)("button",{className:I.a.btn,type:"button",onClick:function(){return t.props.toDelete(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)},e.id)}))})})}}]),n}(r.Component),G={toDelete:g.removeContact},M=Object(f.b)((function(t){return{list:q(t)}}),G)(T),z=n(21),J=n.n(z),K={filterRender:A.filterRender},Q=Object(f.b)((function(t,e){return{filter:R(t)}}),K)((function(t){var e=t.filterRender,n=t.filter;return Object(o.jsxs)("div",{className:J.a.box,children:[Object(o.jsx)("label",{className:J.a.label,children:"Find contacts by name"}),Object(o.jsx)("input",{className:J.a.input,type:"text",value:n,onChange:function(t){return e(t.target.value)}})]})})),U=n(18),Y=n.n(U),H=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchComponents()}},{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:Y.a.container,children:[this.props.isLoadingContacts&&Object(o.jsx)("h1",{children:"LOADING STUFF ..."}),Object(o.jsx)(N.a,{in:!0,appear:!0,timeout:5e3,classNames:Y.a,children:Object(o.jsx)("h1",{className:Y.a.title,children:"Phonebook"})}),Object(o.jsx)(D,{}),Object(o.jsx)("h2",{className:Y.a.title,children:"Contacts"}),Object(o.jsx)(Q,{}),Object(o.jsx)(M,{})]})})}}]),n}(r.Component),V={onFetchComponents:g.fetchContacts},Z=Object(f.b)((function(t){return{isLoadingContacts:L(t)}}),V)(H),W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))},X=n(38),$=n(6),tt=[],et="",nt=Object(C.c)(tt,(c={},Object(m.a)(c,A.addContactSuccess,(function(t,e){return[].concat(Object(X.a)(t),[e.payload])})),Object(m.a)(c,A.fetchContactsSuccess,(function(t,e){return e.payload})),Object(m.a)(c,A.removeContactsSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),ct=Object(C.c)(et,Object(m.a)({},A.filterRender,(function(t,e){return e.payload}))),at=Object(C.c)(!1,(a={},Object(m.a)(a,A.addContactRequest,(function(){return!0})),Object(m.a)(a,A.addContactSuccess,(function(){return!1})),a)),ot=Object($.c)({items:nt,filter:ct,loading:at}),rt=Object(C.a)({reducer:{contacts:ot}});console.log(rt.getState()),i.a.render(Object(o.jsx)(f.a,{store:rt,children:Object(o.jsx)(Z,{})}),document.getElementById("root")),W()}},[[68,1,2]]]);
//# sourceMappingURL=main.915b3761.chunk.js.map