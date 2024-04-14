import{j as e}from"./jsx-runtime-9c4ae004.js";import{u as o}from"./useExitListener-2fe55041.js";import"./index-1b03fe98.js";const{useRef:a,useState:c}=__STORYBOOK_MODULE_ADDONS__,x={title:"Examples/Exit Listener"},s={render:()=>{const n=a(null),[l,i]=c(!1);return o({ref:n,onClickOutside:()=>i(!1),onEscape:()=>i(!1)}),e.jsxs("div",{style:{border:"solid 1px red",padding:50},children:["Outside",e.jsx("div",{style:{padding:50,width:300},children:e.jsxs("div",{style:{padding:25,border:"1px solid #000"},ref:n,children:[e.jsx("button",{onClick:()=>i(!0),children:"Click me"}),l&&e.jsx("div",{style:{padding:20,border:"solid 1px blue"},children:"Clicked"})]})})]})}};var d,t,r;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useExitListener({
      ref,
      onClickOutside: () => setVisible(false),
      onEscape: () => setVisible(false)
    });
    return <div style={{
      border: 'solid 1px red',
      padding: 50
    }}>
        Outside
        <div style={{
        padding: 50,
        width: 300
      }}>
          <div style={{
          padding: 25,
          border: '1px solid #000'
        }} ref={ref}>
            <button onClick={() => setVisible(true)}>Click me</button>
            {visible && <div style={{
            padding: 20,
            border: 'solid 1px blue'
          }}>
                Clicked
              </div>}
          </div>
        </div>
      </div>;
  }
}`,...(r=(t=s.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};export{s as Simple,x as default};
