(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),s=(a("EDuE"),["🍎","🍌","🍇"]),m=r.a.createElement("input",{className:"input-reset bg-green white f6 pv2 ph3 ba br1 b--green w-100 pointer",type:"submit",value:"Notify Me"}),c=r.a.createElement("input",{className:"input-reset bg-blue white f6 pv2 ph3 ba br1 b--blue w-100",type:"submit",value:"👍",disabled:!0}),i=r.a.createElement("input",{className:"input-reset bg-red white f6 pv2 ph3 ba br1 b--red w-100",type:"submit",value:"Something went wrong. Click to try again"});t.default=function(){var e=Object(n.useState)("INITIAL"),t=e[0],a=e[1],p=Object(n.useState)(0),u=p[0],b=p[1];Object(n.useEffect)((function(){var e=setInterval((function(){return b((u+1)%3)}),400);return function(){return clearInterval(e)}}));return r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex-1"},r.a.createElement(l.a,null,r.a.createElement("div",{className:"flex",style:{justifyContent:"space-around"}},r.a.createElement("div",{className:"pa4-ns flex-1"},r.a.createElement("div",null,r.a.createElement("div",{className:"f2 lh-title"},"Hundreds of retailers."),r.a.createElement("div",{className:"f2 lh-title mb3 fw9"},"One form."),r.a.createElement("div",{className:"f4 lh-copy mb4"},"Enter your information once. We'll format it for Whole Foods, Kroger, and more. No spreadsheets required."),r.a.createElement("form",{className:"mw6 signup-form",onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);a("LOADING"),fetch("https://script.google.com/macros/s/AKfycbz_0tQJcLW-O0S_lFf-a89QdZsYZcLLpgpst0X3gq9MGL38rw/exec",{method:"POST",body:t}).then((function(e){return a("SUCCESS")})).catch((function(e){a("FAILED"),console.error("Error",e.message)}))}},r.a.createElement("input",{className:"f6 input-reset ba br1 pv2 ph2 mb1 w-50 mb2 name-input first-name-input",type:"text",placeholder:"First Name",name:"first_name"}),r.a.createElement("input",{className:"f6 input-reset ba br1 pv2 ph2 mb1 w-50 mb2 name-input last-name-input",type:"text",placeholder:"Last Name",name:"last_name"}),r.a.createElement("input",{className:"f6 input-reset ba br1 pv2 ph2 mb1 w-100 mb2 email-input",type:"email",placeholder:"Email Address",name:"email"}),r.a.createElement("input",{className:"f6 input-reset ba br1 pv2 ph2 mb1 w-100 mb2 brand-input",type:"text",placeholder:"Brand",name:"brand"}),r.a.createElement("input",{className:"f6 input-reset ba br1 pv2 ph2 mb1 w-100 mb3 upc-input",type:"text",placeholder:"Top Selling UPC",name:"upc"}),function(){switch(t){case"LOADING":return e=s[u],r.a.createElement("input",{className:"input-reset bg-green white f6 pv2 ph3 ba br1 b--green w-100",type:"submit",value:e,disabled:!0});case"SUCCESS":return c;case"FAILED":return i;default:return m}var e}())))))),r.a.createElement("div",{className:"vh-100 cover dn db-ns flex-1 stock-bg"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-93007ca1a335737ea58c.js.map