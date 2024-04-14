import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as i,R as x}from"./index-1b03fe98.js";import{C as l}from"./ConnectedOverlay-5e88e80a.js";import{m as y}from"./motion-a00ca7d7.js";import"./OverlayTrigger-f3c16cef.js";import"./OverlayContext-da5a27a1.js";import"./useExitListener-2fe55041.js";import"./usePosition-49b6064a.js";import"./OverlayPortal-c2847cdb.js";import"./Portal-6899a71f.js";import"./index-6fd5a17b.js";const X={title:"Examples/Overlay/Connected Overlay",component:l},a={render:()=>{const[o,t]=i.useState(!1);return e.jsx("div",{style:{width:300,padding:50,height:300,border:"solid 1px red"},children:e.jsx(l,{open:o,onOpen:()=>t(!0),onClose:()=>t(!1),content:({overlayIndex:n})=>e.jsx("div",{style:{background:"green",padding:15},children:e.jsxs("h1",{children:["Hello + ",n]})}),children:e.jsx("button",{type:"button",children:"HiOOO!!!"})})})}},c={render:()=>{const[o,t]=i.useState(!0);return e.jsx("div",{style:{width:300,padding:50,height:300,border:"solid 1px red"},children:e.jsx(l,{open:o,onOpen:()=>t(!0),onClose:()=>t(!1),content:()=>e.jsx("div",{style:{background:"black",padding:15},children:e.jsx("h1",{children:"Hello"})}),children:e.jsx("button",{type:"button",children:"HiOOO!!!"})})})}},f=({children:o,content:t})=>{const n=x.useRef(),[r,s]=x.useState(!1);return e.jsx(l,{trigger:"hover",placement:"top",style:{pointerEvents:"none"},open:r,content:()=>e.jsx(y.div,{style:{padding:5,background:"rgba(0, 0, 0, .5)",color:"white",textAlign:"center",borderRadius:5},initial:{opacity:0,scale:.3},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.3},children:t}),onOpen:()=>{clearTimeout(n.current),s(!0)},onClose:()=>{clearTimeout(n.current),n.current=setTimeout(()=>s(!1),100)},children:o})},u={render:()=>e.jsxs("div",{style:{width:300,padding:50,height:300,border:"solid 1px red"},children:[e.jsx(f,{content:"Hello 1",children:e.jsx("span",{style:{padding:10,background:"blue"},children:"Hover Me"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(f,{content:"Hello 2",children:e.jsx("span",{style:{padding:10,background:"blue"},children:"Hover Me Too"})})]})},m=({children:o,open:t,reference:n,onClose:r})=>e.jsx(l,{trigger:"click",placement:"bottom-start",reference:n,open:t,content:()=>e.jsx(y.div,{style:{padding:"5px 20px 5px 0",background:"rgba(0, 0, 0, .5)",color:"white",borderRadius:5},initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:o}),onClose:r}),p={render:()=>{const o=i.useRef(null),[t,n]=i.useState(!1);return e.jsxs("div",{style:{width:150,padding:50,height:150,border:"solid 1px red"},children:[e.jsx("button",{type:"button",ref:o,onClick:()=>n(!t),children:"Open"}),e.jsx(m,{reference:o,open:t,onClose:()=>n(!1),children:e.jsxs("ul",{children:[e.jsx("li",{onClick:()=>n(!1),children:"One"}),e.jsx("li",{onClick:()=>n(!1),children:"Two"}),e.jsx("li",{onClick:()=>n(!1),children:"Three"})]})})]})}},b={render:()=>{const o=i.useRef(null),t=i.useRef(null),[n,r]=i.useState(!1),[s,d]=i.useState(!1);return e.jsxs("div",{style:{width:150,padding:50,height:150,border:"solid 1px red"},children:[e.jsx("button",{type:"button",ref:o,onClick:()=>r(!n),children:"Open"}),e.jsxs(m,{reference:o,open:n,onClose:()=>r(!1),children:[e.jsx("h2",{children:"Menu In Menu"}),e.jsx("p",{children:"Click outside to close"}),e.jsx("button",{type:"button",ref:t,onClick:()=>d(!s),children:"Open"}),e.jsx(m,{reference:t,open:s,onClose:()=>d(!1),children:e.jsxs("ul",{children:[e.jsx("li",{onClick:()=>d(!1),children:"One"}),e.jsx("li",{onClick:()=>d(!1),children:"Two"}),e.jsx("li",{onClick:()=>d(!1),children:"Three"})]})})]})]})}},A=({children:o,content:t})=>{const n=x.useRef(),[r,s]=x.useState(!1);return e.jsx(l,{trigger:"contextmenu",placement:"bottom",triggerElement:"div",open:r,content:()=>e.jsx(y.div,{style:{padding:5,background:"rgba(0, 0, 0, .5)",color:"white",borderRadius:5},initial:{opacity:0,y:-25},animate:{opacity:1,y:0},exit:{opacity:0,y:-25},children:t}),onOpen:()=>{clearTimeout(n.current),s(!0)},onClose:()=>{clearTimeout(n.current),n.current=setTimeout(()=>s(!1),100)},children:o})},h={render:()=>e.jsx("div",{style:{width:300,padding:50,height:300,border:"solid 1px red"},children:e.jsx(A,{content:e.jsxs("ul",{children:[e.jsx("li",{children:"Foo"}),e.jsx("li",{children:"Bar"}),e.jsx("li",{children:"Baz"})]}),children:e.jsx("span",{style:{padding:10,background:"blue"},children:"Hi!"})})})};var g,O,j;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(false);
    return <div style={{
      width: 300,
      padding: 50,
      height: 300,
      border: 'solid 1px red'
    }}>
        <ConnectedOverlay open={visible} onOpen={() => setVisible(true)} onClose={() => setVisible(false)} content={({
        overlayIndex
      }) => <div style={{
        background: 'green',
        padding: 15
      }}>
              <h1>Hello + {overlayIndex}</h1>
            </div>}>
          <button type="button">HiOOO!!!</button>
        </ConnectedOverlay>
      </div>;
  }
}`,...(j=(O=a.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var v,C,M;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    return <div style={{
      width: 300,
      padding: 50,
      height: 300,
      border: 'solid 1px red'
    }}>
        <ConnectedOverlay open={visible} onOpen={() => setVisible(true)} onClose={() => setVisible(false)} content={() => <div style={{
        background: 'black',
        padding: 15
      }}>
              <h1>Hello</h1>
            </div>}>
          <button type="button">HiOOO!!!</button>
        </ConnectedOverlay>
      </div>;
  }
}`,...(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var k,S,R;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300,
    padding: 50,
    height: 300,
    border: 'solid 1px red'
  }}>
      <Tooltip content="Hello 1">
        <span style={{
        padding: 10,
        background: 'blue'
      }}>Hover Me</span>
      </Tooltip>
      <br />
      <br />
      <br />
      <Tooltip content="Hello 2">
        <span style={{
        padding: 10,
        background: 'blue'
      }}>Hover Me Too</span>
      </Tooltip>
    </div>
}`,...(R=(S=u.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var T,w,H;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const buttonRef = useRef<any>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    return <div style={{
      width: 150,
      padding: 50,
      height: 150,
      border: 'solid 1px red'
    }}>
        <button type="button" ref={buttonRef} onClick={() => setMenuOpen(!menuOpen)}>
          Open
        </button>
        <Menu reference={buttonRef} open={menuOpen} onClose={() => setMenuOpen(false)}>
          <ul>
            <li onClick={() => setMenuOpen(false)}>One</li>
            <li onClick={() => setMenuOpen(false)}>Two</li>
            <li onClick={() => setMenuOpen(false)}>Three</li>
          </ul>
        </Menu>
      </div>;
  }
}`,...(H=(w=p.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var E,I,V;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const buttonRef = useRef<any>(null);
    const buttonInternalRef = useRef<any>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [menuSecondaryOpen, setMenuSecondaryOpen] = useState<boolean>(false);
    return <div style={{
      width: 150,
      padding: 50,
      height: 150,
      border: 'solid 1px red'
    }}>
        <button type="button" ref={buttonRef} onClick={() => setMenuOpen(!menuOpen)}>
          Open
        </button>
        <Menu reference={buttonRef} open={menuOpen} onClose={() => setMenuOpen(false)}>
          <h2>Menu In Menu</h2>
          <p>Click outside to close</p>
          <button type="button" ref={buttonInternalRef} onClick={() => setMenuSecondaryOpen(!menuSecondaryOpen)}>
            Open
          </button>
          <Menu reference={buttonInternalRef} open={menuSecondaryOpen} onClose={() => setMenuSecondaryOpen(false)}>
            <ul>
              <li onClick={() => setMenuSecondaryOpen(false)}>One</li>
              <li onClick={() => setMenuSecondaryOpen(false)}>Two</li>
              <li onClick={() => setMenuSecondaryOpen(false)}>Three</li>
            </ul>
          </Menu>
        </Menu>
      </div>;
  }
}`,...(V=(I=b.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var B,z,F;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300,
    padding: 50,
    height: 300,
    border: 'solid 1px red'
  }}>
      <ContextMenu content={<ul>
            <li>Foo</li>
            <li>Bar</li>
            <li>Baz</li>
          </ul>}>
        <span style={{
        padding: 10,
        background: 'blue'
      }}>Hi!</span>
      </ContextMenu>
    </div>
}`,...(F=(z=h.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};export{h as ContextMenuExample,c as DefaultOpen,p as MenuExample,b as MenuInMenuExample,a as Simple,u as TooltipExample,X as default};
