import{j as n}from"./jsx-runtime-9c4ae004.js";import{r as i}from"./index-1b03fe98.js";import{P as l}from"./Portal-6899a71f.js";import"./index-6fd5a17b.js";const w={title:"Examples/Portal",component:l},t={render:()=>{const[r,e]=i.useState(!0),o=i.useRef(0);function s(){setTimeout(()=>{console.log("mounting",r),e(a=>!a),o.current++,o.current<50?s():o.current=0},100)}return n.jsxs("div",{children:[n.jsx("button",{onClick:()=>e(!0),children:"Mount"}),n.jsx("button",{onClick:()=>e(!1),children:"Unmount"}),n.jsx("button",{onClick:()=>s(),children:"Remount Fast"}),r&&n.jsxs("div",{style:{width:225,height:225,border:"solid 2px red",padding:50,position:"relative",overflow:"hidden"},children:["Inside",n.jsx(l,{children:"Outside"})]})]})}};var u,c,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState<boolean>(true);
    const countRef = useRef(0);
    function remount() {
      setTimeout(() => {
        console.log('mounting', show);
        setShow(s => !s);
        countRef.current++;
        if (countRef.current < 50) {
          remount();
        } else {
          countRef.current = 0;
        }
      }, 100);
    }
    return <div>
        <button onClick={() => setShow(true)}>Mount</button>
        <button onClick={() => setShow(false)}>Unmount</button>
        <button onClick={() => remount()}>Remount Fast</button>
        {show && <div style={{
        width: 225,
        height: 225,
        border: 'solid 2px red',
        padding: 50,
        position: 'relative',
        overflow: 'hidden'
      }}>
            Inside
            <Portal>Outside</Portal>
          </div>}
      </div>;
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};export{t as Simple,w as default};
