import{j as e}from"./jsx-runtime-9c4ae004.js";import{O as d}from"./OverlayPortal-c2847cdb.js";import"./index-1b03fe98.js";import"./Portal-6899a71f.js";import"./index-6fd5a17b.js";const m={title:"Examples/Overlay/Overlay Portal",component:d},n={render:()=>e.jsx("div",{style:{width:300,height:300},children:e.jsxs("div",{style:{width:300,height:300,background:"black",padding:50,position:"relative",overflow:"hidden"},children:["Hello",e.jsx(d,{children:({overlayIndex:t,portalIndex:a,backdropIndex:l})=>e.jsxs("div",{children:["Hi - ",t," - ",a," - ",l]})})]})})};var r,i,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={{
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
        Hello
        <OverlayPortal>
          {({
          overlayIndex,
          portalIndex,
          backdropIndex
        }) => <div>
              Hi - {overlayIndex} - {portalIndex} - {backdropIndex}
            </div>}
        </OverlayPortal>
      </div>
    </div>
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{n as Simple,m as default};
