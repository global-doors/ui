import{j as e,M as S,B as x,e as N,I as m,S as f,g as F,E as R,r as M,F as O,W,C as k,p as P,D as V}from"./index-73c28ff5.js";import{b as z,C as T,M as H,c as A,d as B,O as E,e as G,F as U,R as w,u as q}from"./rhf-text-field-91015799.js";import{M as L,C as g,D as Y,R as I,P as _,a as J}from"./rhf-date-picker-7180978b.js";import{B as v}from"./Button-8d08bfb9.js";import{I as C}from"./Close-98469363.js";import{C as K}from"./CardContent-83ae20b7.js";import"./CircularProgress-42a2f993.js";const b=({name:s,chip:t,label:a,options:o,checkbox:c,placeholder:n,helperText:h,sx:p,...l})=>{const{control:r}=z(),j=u=>{const d=o.filter(i=>u.includes(i.value));return!d.length&&n?e.jsx(x,{component:"em",sx:{color:"text.disabled"},children:n}):t?e.jsx(x,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:d.map(i=>e.jsx(g,{label:i.label,size:"small"},i.value))}):d.map(i=>i.label).join(", ")};return e.jsx(T,{control:r,name:s,render:({field:u,fieldState:{error:d}})=>e.jsxs(H,{size:"small",sx:p,children:[a&&e.jsxs(A,{id:s,children:[" ",a," "]}),e.jsxs(B,{...u,displayEmpty:!!n,input:e.jsx(E,{error:!!d,fullWidth:!0,label:a,size:"small"}),labelId:s,multiple:!0,renderValue:j,size:"small",...l,children:[n&&e.jsx(S,{disabled:!0,value:"",children:e.jsxs("em",{children:[" ",n," "]})}),o.map(i=>{const D=u.value.includes(i.value);return e.jsxs(S,{value:i.value,children:[c&&e.jsx(L,{checked:D,disableRipple:!0,size:"small"}),i.label]},i.value)})]}),(!!d||h)&&e.jsx(G,{error:!!d,children:d?d==null?void 0:d.message:h})]})})},Q=()=>[{field:"orderNumber",headerName:"Order No."},{field:"orderDate",headerName:"Order Date"},{field:"requiredDate",headerName:"Order Date"},{field:"customerCode",headerName:"Customer Code"},{field:"customerName",headerName:"Customer Name"},{field:"customerRef",headerName:"Customer Ref"},{field:"warehouse",headerName:"Warehouse"},{field:"orderStatus",headerName:"Status"},{field:"currency",headerName:"Currency"},{field:"cost",headerName:"Cost"},{field:"margin",headerName:"Margin"},{field:"subtotal",headerName:"Subtotal",disableColumnMenu:!0},{field:"actions",width:40,sortable:!1,filterable:!1,disableColumnMenu:!0,renderHeader:()=>null,renderCell:s=>e.jsx(N,{children:e.jsx(m,{icon:"solar:menu-dots-square-line-duotone"})})}],X=({data:s})=>e.jsx(Y,{autoHeight:!0,checkboxSelection:!0,columns:Q(),disableColumnMenu:!0,getRowId:t=>t.orderNumber,rows:s,sx:{mx:-3}}),y=({label:s,children:t,sx:a,...o})=>e.jsxs(f,{component:F,direction:"row",spacing:1,sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...a},variant:"outlined",...o,children:[e.jsx(x,{component:"span",sx:{typography:"subtitle2"},children:s}),e.jsx(f,{direction:"row",flexWrap:"wrap",spacing:1,children:t})]}),Z=({filters:s,onFilters:t,onResetFilters:a,results:o,...c})=>{const n=r=>{const j=s.orderStatus.filter(u=>u!==r);t("orderStatus",j)},h=r=>{const j=s.warehouse.filter(u=>u!==r);t("warehouse",j)},p=r=>{const j=s.deliveryMethod.filter(u=>u!==r);t("deliveryMethod",j)},l=!!s.orderStatus.length&&!!s.deliveryMethod.length&&!!s.warehouse.length;return e.jsxs(f,{alignItems:"flex-end",direction:"row",spacing:1,...c,children:[e.jsxs(f,{alignItems:"center",direction:"row",flexGrow:1,flexWrap:"wrap",spacing:1,children:[!!s.orderStatus.length&&e.jsx(y,{label:"Status:",children:s.orderStatus.map(r=>e.jsx(g,{label:r,onDelete:()=>n(r),size:"small"},r))}),!!s.warehouse.length&&e.jsx(y,{label:"Warehouse:",children:s.warehouse.map(r=>e.jsx(g,{label:r,onDelete:()=>h(r),size:"small"},r))}),!!s.deliveryMethod.length&&e.jsx(y,{label:"Delivery Method:",children:s.deliveryMethod.map(r=>e.jsx(g,{label:r,onDelete:()=>p(r),size:"small"},r))}),l&&e.jsx(v,{color:"error",onClick:a,startIcon:e.jsx(m,{icon:"solar:trash-bin-minimalistic-line-duotone"}),children:"Clear"})]}),e.jsxs(x,{sx:{typography:"body2"},children:[e.jsx("strong",{children:o}),e.jsx(x,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]})]})},$=[{label:"Placed",value:"placed"},{label:"Pending",value:"pending"}],ee=[{label:"Warehouse 1",value:"warehouse1"}],se=[{label:"Royal Mail",value:"royalMail"}],re=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],ae=({methods:s,resultsCount:t,showFilters:a})=>{const o=(n,h)=>{s.reset(p=>({...p,[n]:h}))},c=()=>s.reset();return e.jsxs(U,{methods:s,children:[e.jsx(R,{in:a,children:e.jsxs(f,{spacing:2,children:[e.jsxs(x,{columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(5, 1fr)"},rowGap:3,children:[e.jsx(b,{checkbox:!0,fullWidth:!0,label:"Status",name:"orderStatus",options:$,size:"small"}),e.jsx(w,{InputProps:{startAdornment:e.jsx(C,{position:"start",children:e.jsx(m,{icon:"solar:magnifer-line-duotone"})})},label:"Customer Name",name:"customerName"}),e.jsx(w,{InputProps:{startAdornment:e.jsx(C,{position:"start",children:e.jsx(m,{icon:"solar:magnifer-line-duotone"})})},label:"Order Number",name:"orderNumber"}),e.jsx(b,{checkbox:!0,fullWidth:!0,label:"Warehouse",name:"warehouse",options:ee})]}),e.jsxs(x,{columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(5, 1fr)"},rowGap:3,children:[e.jsx(w,{InputProps:{startAdornment:e.jsx(C,{position:"start",children:e.jsx(m,{icon:"solar:magnifer-line-duotone"})})},label:"Customer Reference",name:"customerRef"}),e.jsx(b,{checkbox:!0,label:"Delivery Method",name:"deliveryMethod",options:se}),e.jsx(b,{label:"Printed",name:"printed",options:re}),e.jsx(I,{label:"Date From",name:"dateFrom"}),e.jsx(I,{label:"Date To",name:"dateTo"})]})]})}),e.jsx(x,{sx:{py:1},children:e.jsx(Z,{filters:s.watch(),onFilters:o,onResetFilters:c,results:t})})]})},te=[{orderNumber:"1234",orderDate:new Date,requiredDate:new Date,customerCode:"CMS001",customerName:"Customer 1",customerRef:"REF1234567",warehouse:"Warehouse",orderStatus:"placed",currency:"GBP",cost:1234,margin:"5%",subtotal:"5.99",deliveryMethod:"royalMail",printed:"yes"}],me=()=>{const t=q({defaultValues:{orderStatus:[],customerName:"",orderNumber:"",customerRef:"",warehouse:[],deliveryMethod:[],printed:[],dateFrom:void 0,dateTo:void 0},mode:"onChange"}),a=t.watch(),o=M.useMemo(()=>{let l=te.slice();return a.orderStatus.length&&(l=l.filter(r=>a.orderStatus.includes(r.orderStatus))),a.warehouse.length&&(l=l.filter(r=>a.warehouse.includes(r.warehouse))),a.deliveryMethod.length&&(l=l.filter(r=>a.deliveryMethod.includes(r.deliveryMethod))),a.printed.length&&(l=l.filter(r=>a.printed.includes(r.printed))),l},[a]),[c,n]=M.useState(!1),h=()=>n(!c),p=O();return e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx("title",{children:" View Sales Orders"})}),e.jsxs(k,{maxWidth:"xl",children:[e.jsx(_,{action:e.jsxs(f,{direction:"row",spacing:1,children:[e.jsx(v,{startIcon:e.jsx(m,{icon:"solar:import-line-duotone"}),variant:"outlined",children:"Import"}),e.jsx(v,{startIcon:e.jsx(m,{icon:"solar:export-line-duotone"}),variant:"outlined",children:"Export"}),e.jsx(v,{onClick:()=>p("/dashboard/sales/add-order"),startIcon:e.jsx(m,{icon:"solar:add-square-line-duotone"}),variant:"contained",children:"Add Sales Order"})]}),heading:"View Sales Orders",links:[{name:"Sales",href:P.dashboard.root},{name:"View Sales Orders"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(V,{children:[e.jsx(J,{action:e.jsx(N,{onClick:h,children:e.jsx(m,{icon:c?"solar:filter-bold-duotone":"solar:filter-line-duotone"})})}),e.jsxs(K,{sx:{pt:0},children:[e.jsx(ae,{methods:t,resultsCount:o.length,showFilters:c}),e.jsx(X,{data:o})]})]})]})]})};export{me as default};
