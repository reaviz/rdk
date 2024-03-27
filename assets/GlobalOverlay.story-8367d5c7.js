import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as i}from"./index-1b03fe98.js";import{G as r}from"./GlobalOverlay-e1bae83d.js";import{O as j}from"./OverlayContext-da5a27a1.js";import{m as C}from"./motion-a00ca7d7.js";import"./OverlayPortal-c2847cdb.js";import"./Portal-6899a71f.js";import"./index-6fd5a17b.js";import"./useExitListener-2fe55041.js";import"./Backdrop-22aa3ee2.js";const I=()=>{const n=i.useContext(j);if(n===void 0)throw new Error("`useOverlay` hook can only be used inside a overlay component.");return n},P={title:"Examples/Overlay/Global Overlay",component:r},s={render:()=>{const[n,t]=i.useState(!0);return e.jsx("div",{style:{width:300,height:300},children:e.jsxs("div",{style:{width:300,height:300,border:"solid 1px blue",padding:50,position:"relative",overflow:"hidden"},children:["Hello",e.jsx(r,{open:n,onClose:()=>t(!1),children:({overlayIndex:o})=>e.jsxs("div",{style:{background:"blue",zIndex:o,position:"absolute",width:500,height:300},children:["Hi - ",o]})})]})})}},l={render:()=>{const[n,t]=i.useState(!1);return e.jsx("div",{style:{width:300,height:300},children:e.jsxs("div",{style:{width:300,height:300,background:"black",padding:50,position:"relative",overflow:"hidden"},children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open"}),e.jsx(r,{open:n,closeOnBackdropClick:!0,onClose:()=>t(!1),children:({overlayIndex:o})=>e.jsxs("div",{style:{background:"blue",zIndex:o,position:"absolute",width:500,height:300},children:["Hi - ",o]})})]})})}},a={render:()=>{const[n,t]=i.useState(!1);return e.jsx("div",{style:{width:300,height:300},children:e.jsxs("div",{style:{width:300,height:300,background:"black",padding:50,position:"relative",overflow:"hidden"},children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open"}),e.jsx(r,{open:n,closeOnBackdropClick:!0,onClose:()=>{window.confirm("Are you sure you want to close?")&&t(!1)},children:({overlayIndex:o})=>e.jsxs("div",{style:{background:"blue",zIndex:o,position:"absolute",width:500,height:300},children:["Hi - ",o]})})]})})}},d={render:()=>{const[n,t]=i.useState(!1);return e.jsxs(i.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),children:"Open"}),e.jsx(S,{visible:n,header:"Welcome!",onClose:()=>t(!1),children:e.jsx(G,{})})]})}},S=({visible:n,header:t,children:o,onClose:c})=>e.jsx(r,{open:n,onClose:c,children:({overlayIndex:w})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",top:0,bottom:0,left:0,right:0,zIndex:w,position:"fixed",pointerEvents:"none"},children:e.jsxs(C.div,{initial:{opacity:0,y:"-20%"},animate:{opacity:1,y:0},exit:{opacity:0,y:"20%"},transition:{duration:.5,ease:[.04,.62,.23,.98]},style:{width:300,top:50,background:"black",padding:20,pointerEvents:"auto"},children:[e.jsxs("h1",{children:[t,e.jsx("button",{type:"button",onClick:c,children:"X"})]}),o]})})}),G=()=>{const{close:n}=I();return e.jsxs("div",{children:[e.jsx("h1",{children:"Whats up?"}),e.jsx("button",{type:"button",onClick:n,children:"Close"})]})};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div style={{
      width: 300,
      height: 300
    }}>
        <div style={{
        width: 300,
        height: 300,
        border: 'solid 1px blue',
        padding: 50,
        position: 'relative',
        overflow: 'hidden'
      }}>
          Hello
          <GlobalOverlay open={open} onClose={() => setOpen(false)}>
            {({
            overlayIndex
          }) => <div style={{
            background: 'blue',
            zIndex: overlayIndex,
            position: 'absolute',
            width: 500,
            height: 300
          }}>
                Hi - {overlayIndex}
              </div>}
          </GlobalOverlay>
        </div>
      </div>;
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,b,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      width: 300,
      height: 300
    }}>
        <div style={{
        width: 300,
        height: 300,
        background: 'black',
        padding: 50,
        position: 'relative',
        overflow: 'hidden'
      }}>
          <button type="button" onClick={() => setOpen(true)}>
            Open
          </button>
          <GlobalOverlay open={open} closeOnBackdropClick={true} onClose={() => setOpen(false)}>
            {({
            overlayIndex
          }) => <div style={{
            background: 'blue',
            zIndex: overlayIndex,
            position: 'absolute',
            width: 500,
            height: 300
          }}>
                Hi - {overlayIndex}
              </div>}
          </GlobalOverlay>
        </div>
      </div>;
  }
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,g,m;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      width: 300,
      height: 300
    }}>
        <div style={{
        width: 300,
        height: 300,
        background: 'black',
        padding: 50,
        position: 'relative',
        overflow: 'hidden'
      }}>
          <button type="button" onClick={() => setOpen(true)}>
            Open
          </button>
          <GlobalOverlay open={open} closeOnBackdropClick={true} onClose={() => {
          const ok = window.confirm('Are you sure you want to close?');
          if (ok) {
            setOpen(false);
          }
        }}>
            {({
            overlayIndex
          }) => <div style={{
            background: 'blue',
            zIndex: overlayIndex,
            position: 'absolute',
            width: 500,
            height: 300
          }}>
                Hi - {overlayIndex}
              </div>}
          </GlobalOverlay>
        </div>
      </div>;
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var O,k,f;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Fragment>
        <button type="button" onClick={() => setOpen(true)}>
          Open
        </button>
        <Dialog visible={open} header="Welcome!" onClose={() => setOpen(false)}>
          <MyDialog />
        </Dialog>
      </Fragment>;
  }
}`,...(f=(k=d.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};export{s as AutoOpen,l as ClickToOpen,d as DialogExample,a as PromptToClose,P as default};
