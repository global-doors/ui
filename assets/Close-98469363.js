import{A,z as E,s as P,_ as c,r as b,m as y,n as j,j as o,o as L,T as z,h as m,q as $,f as R}from"./index-73c28ff5.js";import{k as T,n as M}from"./rhf-text-field-91015799.js";function S(n){return E("MuiInputAdornment",n)}const _=A("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=_;var x;const F=["children","className","component","disablePointerEvents","disableTypography","position","variant"],N=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},U=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:i,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,i&&"hiddenLabel",r&&`size${m(r)}`]};return $(d,S,t)},w=P("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:N})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),k=b.forwardRef(function(t,e){const i=y({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:g=!1,position:u,variant:v}=i,C=j(i,F),a=T()||{};let p=v;v&&a.variant,a&&!p&&(p=a.variant);const h=c({},i,{hiddenLabel:a.hiddenLabel,size:a.size,disablePointerEvents:d,position:u,variant:p}),I=U(h);return o.jsx(M.Provider,{value:null,children:o.jsx(w,c({as:l,ownerState:h,className:L(I.root,r),ref:e},C,{children:typeof s=="string"&&!g?o.jsx(z,{color:"text.secondary",children:s}):o.jsxs(b.Fragment,{children:[u==="start"?x||(x=o.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})}),H=k,W=R(o.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");export{W as C,H as I};
