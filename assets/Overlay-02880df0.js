import{j as e}from"./jsx-runtime-9c4ae004.js";import"./chunk-HLWAVYOI-e13d3f13.js";import{M as c,C as n,b as l}from"./index-20cafaad.js";import{ClickToOpen as p,DialogExample as t}from"./GlobalOverlay.story-8367d5c7.js";import{Simple as a,TooltipExample as h,MenuExample as m}from"./ConnectedOverlay.story-545d8540.js";import{Simple as d}from"./OverlayTrigger.story-c676c27d.js";import{Simple as x}from"./OverlayPortal.story-0afde083.js";import{u as i}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-3c9cf073.js";import"../sb-preview/runtime.js";import"./react-18-5df836b6.js";import"./index-6fd5a17b.js";import"./chunk-EIRT5I3Z-f0a10e90.js";import"./index-d7bb098e.js";import"./index-356e4a49.js";import"./GlobalOverlay-e1bae83d.js";import"./OverlayContext-da5a27a1.js";import"./motion-a00ca7d7.js";import"./OverlayPortal-c2847cdb.js";import"./Portal-6899a71f.js";import"./useExitListener-2fe55041.js";import"./Backdrop-22aa3ee2.js";import"./ConnectedOverlay-5e88e80a.js";import"./OverlayTrigger-f3c16cef.js";import"./usePosition-49b6064a.js";function s(o){const r=Object.assign({h1:"h1",hr:"hr",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",h3:"h3",h4:"h4",a:"a"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Docs/Components/Overlay"}),`
`,e.jsx(r.h1,{id:"overlay",children:"Overlay"}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.p,{children:`Overlay provides component developers a way to position elements globally
or relative to a anchor element. The overlay wraps the backdrop, position, exit
listener and portal to provide a simple API for handling position.`}),`
`,e.jsx(r.p,{children:"There are five overlay components in the Overlay:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"ConnectedOverlay"})," - A overlay that is relative to a anchoring element."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"GlobalOverlay"})," - A overlay that is placed on top of other elements globally."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"OverlayPortal"})," - A wrapper around the portal component to manage z-indexs."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"OverlayTrigger"})," - The internal trigger component that the ",e.jsx(r.code,{children:"ConnectedOverlay"})," uses."]}),`
`]}),`
`,e.jsx(r.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(r.h3,{id:"global-overlay",children:"Global Overlay"}),`
`,e.jsx(r.p,{children:`A overlay component typically used by components like Dialogs or Drawers.
You can use the Global Ovleray using element APIs.`}),`
`,e.jsx(n,{of:p,sourceState:"shown"}),`
`,e.jsx(r.h4,{id:"dialog-example",children:"Dialog Example"}),`
`,e.jsx(r.p,{children:"Below is an example of a simple dialog component using the global overlay."}),`
`,e.jsx(n,{of:t,sourceState:"shown"}),`
`,e.jsx(r.h3,{id:"connected-overlay",children:"Connected Overlay"}),`
`,e.jsx(r.p,{children:"A overlay component typically used by components like menus."}),`
`,e.jsx(n,{of:a,sourceState:"shown"}),`
`,e.jsx(r.h4,{id:"tooltip-example",children:"Tooltip Example"}),`
`,e.jsx(r.p,{children:"Below is an example of simple tooltip component using the connected overlay."}),`
`,e.jsx(n,{of:h,sourceState:"shown"}),`
`,e.jsx(r.h4,{id:"menu-example",children:"Menu Example"}),`
`,e.jsx(r.p,{children:"Below is an example of simple menu component using the connected overlay."}),`
`,e.jsx(n,{of:m,sourceState:"shown"}),`
`,e.jsx(r.h2,{id:"api",children:"API"}),`
`,e.jsx(r.h3,{id:"srcoverlayglobaloverlaytsx",children:e.jsx(r.a,{href:"https://github.com/reaviz/rdk/blob/master/src/Overlay/GlobalOverlay.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"src/Overlay/GlobalOverlay.tsx"})}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(r.h3,{id:"srcoverlayconnectedoverlaytsx",children:e.jsx(r.a,{href:"https://github.com/reaviz/rdk/blob/master/src/Overlay/ConnectedOverlay.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"src/Overlay/ConnectedOverlay.tsx"})}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(r.h3,{id:"srcoverlayoverlaytriggertsx",children:e.jsx(r.a,{href:"https://github.com/reaviz/rdk/blob/master/src/Overlay/OverlayTrigger.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"src/Overlay/OverlayTrigger.tsx"})}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(r.h3,{id:"srcoverlayoverlayportaltsx",children:e.jsx(r.a,{href:"https://github.com/reaviz/rdk/blob/master/src/Overlay/OverlayPortal.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"src/Overlay/OverlayPortal.tsx"})}),`
`,e.jsx(l,{of:x})]})}function L(o={}){const{wrapper:r}=Object.assign({},i(),o.components);return r?e.jsx(r,Object.assign({},o,{children:e.jsx(s,o)})):s(o)}export{L as default};
