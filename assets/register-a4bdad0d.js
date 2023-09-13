import{a as F,r as N,b as S,c as R,P as T,j as e,W as q,S as a,T as l,L as c,R as A,p as I,e as L,I as E}from"./index-73c28ff5.js";import{u as k,F as B,R as t}from"./rhf-text-field-91015799.js";import{c as H,a as n,o as C,L as G}from"./index.esm-102bc83f.js";import{A as M}from"./Alert-dc41474d.js";import{I as W}from"./Close-98469363.js";import"./Button-8d08bfb9.js";import"./CircularProgress-42a2f993.js";const X=()=>{const o=(r,s,$,z)=>null,u=F(),[d,p]=N.useState(""),h=S().get("returnTo"),i=R(),x=H().shape({firstName:n().required("First name required"),lastName:n().required("Last name required"),email:n().required("Email is required").email("Email must be a valid email address"),password:n().required("Password is required")}),g={firstName:"",lastName:"",email:"",password:""},m=k({resolver:C(x),defaultValues:g}),{reset:j,handleSubmit:y,formState:{isSubmitting:f}}=m,b=y(async r=>{try{await(o==null?void 0:o(r.email,r.password,r.firstName,r.lastName)),u.push(h||T)}catch(s){console.error(s),j(),p(typeof s=="string"?s:s.message)}}),v=e.jsxs(a,{spacing:2,sx:{mb:5,position:"relative"},children:[e.jsx(l,{variant:"h4",children:"Get started absolutely free"}),e.jsxs(a,{direction:"row",spacing:.5,children:[e.jsx(l,{variant:"body2",children:" Already have an account? "}),e.jsx(c,{component:A,href:I.auth.jwt.login,variant:"subtitle2",children:"Sign in"})]})]}),w=e.jsxs(l,{component:"div",sx:{color:"text.secondary",mt:2.5,typography:"caption",textAlign:"center"},children:["By signing up, I agree to ",e.jsx(c,{color:"text.primary",href:"/",underline:"always",children:"Terms of Service"})," and ",e.jsx(c,{color:"text.primary",href:"/",underline:"always",children:"Privacy Policy"}),"."]}),P=e.jsx(B,{methods:m,onSubmit:b,children:e.jsxs(a,{spacing:2.5,children:[!!d&&e.jsx(M,{severity:"error",children:d}),e.jsxs(a,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(t,{label:"First name",name:"firstName"}),e.jsx(t,{label:"Last name",name:"lastName"})]}),e.jsx(t,{label:"Email address",name:"email"}),e.jsx(t,{InputProps:{endAdornment:e.jsx(W,{position:"end",children:e.jsx(L,{edge:"end",onClick:i.onToggle,children:e.jsx(E,{icon:i.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},label:"Password",name:"password",type:i.value?"text":"password"}),e.jsx(G,{color:"inherit",fullWidth:!0,loading:f,size:"large",type:"submit",variant:"contained",children:"Create account"})]})});return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" Register"})}),e.jsxs(e.Fragment,{children:[v,P,w]})]})};export{X as default};
