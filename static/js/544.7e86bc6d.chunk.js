"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{6544:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,a,o,i,c,l,s,u,d,p=t(168),x=t(9439),f=t(2791),m=t(6444),g=m.ZP.form(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),h=m.ZP.label(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  font-size: 24px;\n  font-weight: 500;\n"]))),b=m.ZP.input(o||(o=(0,p.Z)(["\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  background-color: #7da2a9;\n  border-radius: 5px;\n  border: transparent;\n  outline: none;\n  padding: 10px;\n  font-size: 20px;\n"]))),Z=m.ZP.button(i||(i=(0,p.Z)(["\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n  background-color: black;\n  color: white;\n  font-weight: 700;\n  margin-top: 15px;\n  &:hover {\n    background-color: white;\n    color: black;\n    scale: 1.05;\n  }\n"]))),k=t(9434),v=t(6351),w=t(5148),y=t(184);function j(){var n=(0,k.v9)(v.K2),e=(0,k.I0)(),t=(0,f.useState)(""),r=(0,x.Z)(t,2),a=r[0],o=r[1],i=(0,f.useState)(""),c=(0,x.Z)(i,2),l=c[0],s=c[1],u=function(n){switch(n.target.name){case"name":o(n.target.value);break;case"number":s(n.target.value);break;default:return}};return(0,y.jsxs)(g,{onSubmit:function(t){t.preventDefault(),n.some((function(n){return n.name===a}))?window.alert("".concat(a," is already in your contacts")):(e((0,w.uK)({name:a,number:l})),o(""),s(""),t.target.reset())},children:[(0,y.jsxs)(h,{htmlFor:"",children:["Name",(0,y.jsx)(b,{onChange:u,type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(h,{children:[" ","Phone",(0,y.jsx)(b,{onChange:u,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)(Z,{type:"submit",children:"Add contact"})]})}var P,C,z=m.ZP.ul(c||(c=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),A=m.ZP.button(l||(l=(0,p.Z)(["\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n  background-color: black;\n  color: white;\n  font-weight: 700;\n  margin-left: 15px;\n  &:hover {\n    background-color: red;\n    scale: 1.05;\n  }\n"]))),K=m.ZP.li(s||(s=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),F=m.ZP.span(u||(u=(0,p.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n"]))),_=m.ZP.button(d||(d=(0,p.Z)(["\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin-left: 15px;\n\n  background-color: #7da2a9;\n  color: white;\n  font-weight: 700;\n  &:hover {\n    background-color: black;\n    color: #fff;\n    scale: 1.05;\n  }\n"])));function I(){var n=(0,k.v9)(v.zK),e=(0,k.v9)(v.K2),t=n.toLowerCase(),r=e.filter((function(n){return n.name.toLowerCase().includes(t)})),a=(0,k.I0)();(0,f.useEffect)((function(){a((0,w.yF)())}),[a]);var o=function(){console.log("click")};return(0,y.jsx)(z,{children:r.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,y.jsxs)(K,{children:[(0,y.jsx)(F,{children:e})," : ",t,(0,y.jsx)(_,{type:"button",onClick:o,children:"Change"}),(0,y.jsx)(A,{type:"button",onClick:function(){a((0,w.GK)(r))},children:"Delete"})]},r)}))})}var S,q=m.ZP.input(P||(P=(0,p.Z)(["\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  background-color: #7da2a9;\n  border-radius: 5px;\n  border: transparent;\n  outline: none;\n  padding: 10px;\n  font-size: 20px;\n"]))),D=m.ZP.label(C||(C=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  font-size: 24px;\n  font-weight: 500;\n"]))),L=t(8268);function N(){var n=(0,k.v9)(v.zK),e=(0,k.I0)();return(0,y.jsxs)(D,{children:["Find by name",(0,y.jsx)(q,{type:"text",name:"filter",onChange:function(n){e((0,L.T)(n.currentTarget.value))},value:n})]})}var T=m.ZP.h2(S||(S=(0,p.Z)(["\n  letter-spacing: 0.4rem;\n  font-family: serif;\n"]))),B=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j,{}),(0,y.jsx)(N,{}),(0,y.jsx)(T,{children:"Contacts"}),(0,y.jsx)(I,{})]})}}}]);
//# sourceMappingURL=544.7e86bc6d.chunk.js.map