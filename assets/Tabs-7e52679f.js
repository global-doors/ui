import{s as k,Z as Mt,h as Pt,_ as b,$,r as c,m as dt,n as et,o as W,j as S,q as ut,a0 as Jt,a1 as Qt,a2 as Wt,a3 as zt,x as Lt,w as Nt,u as $t,a4 as tt,a5 as it,a6 as te}from"./index-1ce187ce.js";import{K as ee,a as oe}from"./CardContent-38c308a7.js";let X;function kt(){if(X)return X;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),X="reverse",t.scrollLeft>0?X="default":(t.scrollLeft=1,t.scrollLeft===0&&(X="negative")),document.body.removeChild(t),X}function le(t,e){const r=t.scrollLeft;if(e!=="rtl")return r;switch(kt()){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}const re=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],ne=t=>{const{classes:e,textColor:r,fullWidth:i,wrapped:n,icon:d,label:p,selected:f,disabled:u}=t,v={root:["root",d&&p&&"labelIcon",`textColor${Pt(r)}`,i&&"fullWidth",n&&"wrapped",f&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return ut(v,Jt,e)},se=k(Mt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.label&&r.icon&&e.labelIcon,e[`textColor${Pt(r.textColor)}`],r.fullWidth&&e.fullWidth,r.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>b({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${$.iconWrapper}`]:b({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${$.selected}`]:{opacity:1},[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${$.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${$.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${$.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${$.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),ae=c.forwardRef(function(e,r){const i=dt({props:e,name:"MuiTab"}),{className:n,disabled:d=!1,disableFocusRipple:p=!1,fullWidth:f,icon:u,iconPosition:v="top",indicator:y,label:w,onChange:g,onClick:m,onFocus:F,selected:T,selectionFollowsFocus:x,textColor:A="inherit",value:B,wrapped:ot=!1}=i,j=et(i,re),U=b({},i,{disabled:d,disableFocusRipple:p,selected:T,icon:!!u,iconPosition:v,label:!!w,fullWidth:f,textColor:A,wrapped:ot}),H=ne(U),z=u&&w&&c.isValidElement(u)?c.cloneElement(u,{className:W(H.iconWrapper,u.props.className)}):u,K=E=>{!T&&g&&g(E,B),m&&m(E)},O=E=>{x&&!T&&g&&g(E,B),F&&F(E)};return S.jsxs(se,b({focusRipple:!p,className:W(H.root,n),ref:r,role:"tab","aria-selected":T,disabled:d,onClick:K,onFocus:O,ownerState:U,tabIndex:T?0:-1},j,{children:[v==="top"||v==="start"?S.jsxs(c.Fragment,{children:[z,w]}):S.jsxs(c.Fragment,{children:[w,z]}),y]}))}),Le=ae;function ie(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function ce(t,e,r,i={},n=()=>{}){const{ease:d=ie,duration:p=300}=i;let f=null;const u=e[t];let v=!1;const y=()=>{v=!0},w=g=>{if(v){n(new Error("Animation cancelled"));return}f===null&&(f=g);const m=Math.min(1,(g-f)/p);if(e[t]=d(m)*(r-u)+u,m>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(w)};return u===r?(n(new Error("Element already at target position")),y):(requestAnimationFrame(w),y)}const de=["onChange"],ue={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function be(t){const{onChange:e}=t,r=et(t,de),i=c.useRef(),n=c.useRef(null),d=()=>{i.current=n.current.offsetHeight-n.current.clientHeight};return Qt(()=>{const p=zt(()=>{const u=i.current;d(),u!==i.current&&e(i.current)}),f=Wt(n.current);return f.addEventListener("resize",p),()=>{p.clear(),f.removeEventListener("resize",p)}},[e]),c.useEffect(()=>{d(),e(i.current)},[e]),S.jsx("div",b({style:ue,ref:n},r))}function fe(t){return Nt("MuiTabScrollButton",t)}const pe=Lt("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),he=pe,Se=["className","slots","slotProps","direction","orientation","disabled"],ve=t=>{const{classes:e,orientation:r,disabled:i}=t;return ut({root:["root",r,i&&"disabled"]},fe,e)},me=k(Mt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.orientation&&e[r.orientation]]}})(({ownerState:t})=>b({width:40,flexShrink:0,opacity:.8,[`&.${he.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),xe=c.forwardRef(function(e,r){var i,n;const d=dt({props:e,name:"MuiTabScrollButton"}),{className:p,slots:f={},slotProps:u={},direction:v}=d,y=et(d,Se),g=$t().direction==="rtl",m=b({isRtl:g},d),F=ve(m),T=(i=f.StartScrollButtonIcon)!=null?i:ee,x=(n=f.EndScrollButtonIcon)!=null?n:oe,A=tt({elementType:T,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m}),B=tt({elementType:x,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m});return S.jsx(me,b({component:"div",className:W(F.root,p),ref:r,role:null,ownerState:m,tabIndex:null},y,{children:v==="left"?S.jsx(T,b({},A)):S.jsx(x,b({},B))}))}),ge=xe;function Be(t){return Nt("MuiTabs",t)}const Ce=Lt("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ct=Ce,ye=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],It=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,Et=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,Q=(t,e,r)=>{let i=!1,n=r(t,e);for(;n;){if(n===t.firstChild){if(i)return;i=!0}const d=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||d)n=r(t,n);else{n.focus();return}}},we=t=>{const{vertical:e,fixed:r,hideScrollbar:i,scrollableX:n,scrollableY:d,centered:p,scrollButtonsHideMobile:f,classes:u}=t;return ut({root:["root",e&&"vertical"],scroller:["scroller",r&&"fixed",i&&"hideScrollbar",n&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",p&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},Be,u)},Te=k("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${ct.scrollButtons}`]:e.scrollButtons},{[`& .${ct.scrollButtons}`]:r.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,r.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>b({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${ct.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),Ie=k("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.scroller,r.fixed&&e.fixed,r.hideScrollbar&&e.hideScrollbar,r.scrollableX&&e.scrollableX,r.scrollableY&&e.scrollableY]}})(({ownerState:t})=>b({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Ee=k("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.flexContainer,r.vertical&&e.flexContainerVertical,r.centered&&e.centered]}})(({ownerState:t})=>b({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Re=k("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>b({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Me=k(be,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Rt={},Pe=c.forwardRef(function(e,r){const i=dt({props:e,name:"MuiTabs"}),n=$t(),d=n.direction==="rtl",{"aria-label":p,"aria-labelledby":f,action:u,centered:v=!1,children:y,className:w,component:g="div",allowScrollButtonsMobile:m=!1,indicatorColor:F="primary",onChange:T,orientation:x="horizontal",ScrollButtonComponent:A=ge,scrollButtons:B="auto",selectionFollowsFocus:ot,slots:j={},slotProps:U={},TabIndicatorProps:H={},TabScrollButtonProps:z={},textColor:K="primary",value:O,variant:E="standard",visibleScrollbar:lt=!1}=i,Ft=et(i,ye),I=E==="scrollable",C=x==="vertical",Y=C?"scrollTop":"scrollLeft",q=C?"top":"left",G=C?"bottom":"right",rt=C?"clientHeight":"clientWidth",_=C?"height":"width",L=b({},i,{component:g,allowScrollButtonsMobile:m,indicatorColor:F,orientation:x,vertical:C,scrollButtons:B,textColor:K,variant:E,visibleScrollbar:lt,fixed:!I,hideScrollbar:I&&!lt,scrollableX:I&&!C,scrollableY:I&&C,centered:v&&!I,scrollButtonsHideMobile:!m}),M=we(L),At=tt({elementType:j.StartScrollButtonIcon,externalSlotProps:U.startScrollButtonIcon,ownerState:L}),jt=tt({elementType:j.EndScrollButtonIcon,externalSlotProps:U.endScrollButtonIcon,ownerState:L}),[bt,Ht]=c.useState(!1),[N,ft]=c.useState(Rt),[pt,Ot]=c.useState(!1),[ht,Dt]=c.useState(!1),[St,Xt]=c.useState(!1),[vt,Ut]=c.useState({overflow:"hidden",scrollbarWidth:0}),mt=new Map,R=c.useRef(null),D=c.useRef(null),xt=()=>{const o=R.current;let l;if(o){const a=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:le(o,n.direction),scrollWidth:o.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let s;if(o&&O!==!1){const a=D.current.children;if(a.length>0){const h=a[mt.get(O)];s=h?h.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:s}},V=it(()=>{const{tabsMeta:o,tabMeta:l}=xt();let s=0,a;if(C)a="top",l&&o&&(s=l.top-o.top+o.scrollTop);else if(a=d?"right":"left",l&&o){const P=d?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;s=(d?-1:1)*(l[a]-o[a]+P)}const h={[a]:s,[_]:l?l[_]:0};if(isNaN(N[a])||isNaN(N[_]))ft(h);else{const P=Math.abs(N[a]-h[a]),J=Math.abs(N[_]-h[_]);(P>=1||J>=1)&&ft(h)}}),nt=(o,{animation:l=!0}={})=>{l?ce(Y,R.current,o,{duration:n.transitions.duration.standard}):R.current[Y]=o},gt=o=>{let l=R.current[Y];C?l+=o:(l+=o*(d?-1:1),l*=d&&kt()==="reverse"?-1:1),nt(l)},Bt=()=>{const o=R.current[rt];let l=0;const s=Array.from(D.current.children);for(let a=0;a<s.length;a+=1){const h=s[a];if(l+h[rt]>o){a===0&&(l=o);break}l+=h[rt]}return l},Yt=()=>{gt(-1*Bt())},_t=()=>{gt(Bt())},Vt=c.useCallback(o=>{Ut({overflow:null,scrollbarWidth:o})},[]),Kt=()=>{const o={};o.scrollbarSizeListener=I?S.jsx(Me,{onChange:Vt,className:W(M.scrollableX,M.hideScrollbar)}):null;const s=I&&(B==="auto"&&(pt||ht)||B===!0);return o.scrollButtonStart=s?S.jsx(A,b({slots:{StartScrollButtonIcon:j.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:At},orientation:x,direction:d?"right":"left",onClick:Yt,disabled:!pt},z,{className:W(M.scrollButtons,z.className)})):null,o.scrollButtonEnd=s?S.jsx(A,b({slots:{EndScrollButtonIcon:j.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:jt},orientation:x,direction:d?"left":"right",onClick:_t,disabled:!ht},z,{className:W(M.scrollButtons,z.className)})):null,o},Ct=it(o=>{const{tabsMeta:l,tabMeta:s}=xt();if(!(!s||!l)){if(s[q]<l[q]){const a=l[Y]+(s[q]-l[q]);nt(a,{animation:o})}else if(s[G]>l[G]){const a=l[Y]+(s[G]-l[G]);nt(a,{animation:o})}}}),yt=it(()=>{I&&B!==!1&&Xt(!St)});c.useEffect(()=>{const o=zt(()=>{R.current&&V()}),l=Wt(R.current);l.addEventListener("resize",o);let s;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(o),Array.from(D.current.children).forEach(a=>{s.observe(a)})),()=>{o.clear(),l.removeEventListener("resize",o),s&&s.disconnect()}},[V]),c.useEffect(()=>{const o=Array.from(D.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&I&&B!==!1){const s=o[0],a=o[l-1],h={root:R.current,threshold:.99},P=at=>{Ot(!at[0].isIntersecting)},J=new IntersectionObserver(P,h);J.observe(s);const Zt=at=>{Dt(!at[0].isIntersecting)},Tt=new IntersectionObserver(Zt,h);return Tt.observe(a),()=>{J.disconnect(),Tt.disconnect()}}},[I,B,St,y==null?void 0:y.length]),c.useEffect(()=>{Ht(!0)},[]),c.useEffect(()=>{V()}),c.useEffect(()=>{Ct(Rt!==N)},[Ct,N]),c.useImperativeHandle(u,()=>({updateIndicator:V,updateScrollButtons:yt}),[V,yt]);const wt=S.jsx(Re,b({},H,{className:W(M.indicator,H.className),ownerState:L,style:b({},N,H.style)}));let Z=0;const qt=c.Children.map(y,o=>{if(!c.isValidElement(o))return null;const l=o.props.value===void 0?Z:o.props.value;mt.set(l,Z);const s=l===O;return Z+=1,c.cloneElement(o,b({fullWidth:E==="fullWidth",indicator:s&&!bt&&wt,selected:s,selectionFollowsFocus:ot,onChange:T,textColor:K,value:l},Z===1&&O===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Gt=o=>{const l=D.current,s=te(l).activeElement;if(s.getAttribute("role")!=="tab")return;let h=x==="horizontal"?"ArrowLeft":"ArrowUp",P=x==="horizontal"?"ArrowRight":"ArrowDown";switch(x==="horizontal"&&d&&(h="ArrowRight",P="ArrowLeft"),o.key){case h:o.preventDefault(),Q(l,s,Et);break;case P:o.preventDefault(),Q(l,s,It);break;case"Home":o.preventDefault(),Q(l,null,It);break;case"End":o.preventDefault(),Q(l,null,Et);break}},st=Kt();return S.jsxs(Te,b({className:W(M.root,w),ownerState:L,ref:r,as:g},Ft,{children:[st.scrollButtonStart,st.scrollbarSizeListener,S.jsxs(Ie,{className:M.scroller,ownerState:L,style:{overflow:vt.overflow,[C?`margin${d?"Left":"Right"}`:"marginBottom"]:lt?void 0:-vt.scrollbarWidth},ref:R,children:[S.jsx(Ee,{"aria-label":p,"aria-labelledby":f,"aria-orientation":x==="vertical"?"vertical":null,className:M.flexContainer,ownerState:L,onKeyDown:Gt,ref:D,role:"tablist",children:qt}),bt&&wt]}),st.scrollButtonEnd]}))}),Ne=Pe;export{Ne as T,Le as a};
