import{j as n}from"./jsx-runtime-9c4ae004.js";import{r as d}from"./index-1b03fe98.js";import{u as a}from"./usePosition-49b6064a.js";const m={title:"Examples/Position"},e={render:()=>{const o=d.useRef(null),[s]=a(o,{placement:"bottom"});return n.jsxs("div",{style:{padding:50,border:"solid 1px red"},children:[n.jsx("div",{ref:o,style:{width:100,height:100,background:"black",padding:50},children:"Hello!"}),n.jsx("div",{ref:s,children:"Positioned"})]})}};var r,i,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const anchorRef = useRef<HTMLDivElement | null>(null);
    const [positionRef] = usePosition(anchorRef, {
      placement: 'bottom'
    });
    return <div style={{
      padding: 50,
      border: 'solid 1px red'
    }}>
        <div ref={anchorRef} style={{
        width: 100,
        height: 100,
        background: 'black',
        padding: 50
      }}>
          Hello!
        </div>
        <div ref={positionRef}>Positioned</div>
      </div>;
  }
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};export{e as Simple,m as default};
