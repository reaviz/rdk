import{j as E}from"./jsx-runtime-9c4ae004.js";import{r}from"./index-1b03fe98.js";const s=r.forwardRef(({children:l,className:c,elementType:u="span",trigger:i=["click"],onOpen:t=()=>{},onClose:n=()=>{}},o)=>{const a=r.useCallback(e=>Array.isArray(i)?i.includes(e):e===i,[i]),v=r.useCallback(e=>{a("focus")&&t({type:"focus",nativeEvent:e})},[t,a]),d=r.useCallback(e=>{a("focus")&&n({type:"focus",nativeEvent:e})},[n,a]),f=r.useCallback(e=>{a("hover")&&t({type:"hover",nativeEvent:e})},[t,a]),p=r.useCallback(e=>{a("hover")&&n({type:"hover",nativeEvent:e})},[n,a]),y=r.useCallback(e=>{a("click")&&t({type:"click",nativeEvent:e}),a("click")||n({type:"hover",nativeEvent:e})},[t,n,a]),m=r.useCallback(e=>{a("contextmenu")&&(e.preventDefault(),t({type:"contextmenu",nativeEvent:e}))},[t]),g=a("focus")?-1:void 0,k=u;return E.jsx(k,{ref:o,tabIndex:g,onMouseEnter:f,onMouseLeave:p,onFocus:v,onBlur:d,onClick:y,onContextMenu:m,className:c,children:l})});try{s.displayName="OverlayTrigger",s.__docgenInfo={description:"",displayName:"OverlayTrigger",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},elementType:{defaultValue:{value:"span"},description:"",name:"elementType",required:!1,type:{name:"any"}},trigger:{defaultValue:{value:"['click']"},description:"",name:"trigger",required:!1,type:{name:"TriggerTypes | TriggerTypes[]"}},onOpen:{defaultValue:{value:"() => undefined"},description:"",name:"onOpen",required:!1,type:{name:"((event: OverlayTriggerEvent) => void)"}},onClose:{defaultValue:{value:"() => undefined"},description:"",name:"onClose",required:!1,type:{name:"((event: OverlayTriggerEvent) => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!0,type:{name:"Ref<HTMLSpanElement>"}}}}}catch{}export{s as O};