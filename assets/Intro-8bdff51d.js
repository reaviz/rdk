import{j as e}from"./jsx-runtime-9c4ae004.js";import{u as i}from"./index-2ef8b458.js";import{M as t}from"./index-20cafaad.js";import"./index-1b03fe98.js";import"./iframe-3c9cf073.js";import"../sb-preview/runtime.js";import"./chunk-EIRT5I3Z-f0a10e90.js";import"./index-6fd5a17b.js";import"./index-d7bb098e.js";import"./index-356e4a49.js";const{deprecate:o}=__STORYBOOK_MODULE_CLIENT_LOGGER__;o("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");function r(n){const s=Object.assign({p:"p",hr:"hr",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Intro"}),`
`,e.jsxs("div",{style:{margin:"0 auto",maxWidth:"600px",color:"white",textAlign:"center"},children:[e.jsx(s.p,{children:"🛠 RDK"}),e.jsx("br",{}),e.jsx(s.p,{children:"Component ToolKit"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"https://github.com/reaviz/rdk/workflows/build/",children:e.jsx("img",{src:"https://github.com/reaviz/rdk/workflows/build/badge.svg?branch=master"})}),e.jsx("span",{children:"  "}),e.jsx("a",{href:"https://npm.im/rdk",children:e.jsx("img",{src:"https://img.shields.io/npm/v/rdk.svg"})}),e.jsx("span",{children:"  "}),e.jsx("a",{href:"https://npm.im/rdk",children:e.jsx("img",{src:"https://badgen.net/npm/dw/rdk"})}),e.jsx("span",{children:"  "}),e.jsx("a",{href:"https://github.com/reaviz/rdk/blob/master/LICENSE",children:e.jsx("img",{src:"https://badgen.now.sh/badge/license/apache2"})}),e.jsx("span",{children:"  "}),e.jsx("a",{href:"https://bundlephobia.com/result?p=rdk",children:e.jsx("img",{src:"https://badgen.net/bundlephobia/minzip/rdk"})}),e.jsx("span",{children:"  "}),e.jsx("a",{href:"https://discord.gg/tt8wGExq35",children:e.jsx("img",{src:"https://img.shields.io/discord/773948315037073409?label=discord"})})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.p,{children:`RDK is a set of low-level tools that implement common interactions found in
component libraries. The tooling abstracts the visual
presentation so the tools can be used with any visual presentation.`}),`
`,e.jsx(s.h2,{id:"-features",children:"✨ Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Overlay - Provides a way to open floating panels on the screen"}),`
`,e.jsx(s.li,{children:"Exit Listener - Provides a easy way to listen for exit events such as clicks and escape keypress."}),`
`,e.jsx(s.li,{children:"Portal - Provides a flexible system for rendering dynamic content into an application"}),`
`,e.jsx(s.li,{children:"Position - Provides a flexible system for placing panels related to other elements"}),`
`,e.jsx(s.li,{children:"Backdrop - Blocker element overlay"}),`
`,e.jsx(s.li,{children:"Id - A unique ID hook"}),`
`,e.jsx(s.li,{children:"User Select - A user select hook"}),`
`,e.jsx(s.li,{children:"Cursor - A cursor hook"}),`
`]}),`
`,e.jsx(s.h2,{id:"-install",children:"📦 Install"}),`
`,e.jsx(s.p,{children:"To use RDK in your project, install it via npm/yarn:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`npm i rdk --save
`})}),`
`,e.jsx(s.h2,{id:"-development",children:"🔭 Development"}),`
`,e.jsx(s.p,{children:"If you want to run RDK locally, its super easy!"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Clone the repo"}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"npm i"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"npm start"})}),`
`,e.jsx(s.li,{children:"Browser opens to Storybook page"}),`
`]})]})}function b(n={}){const{wrapper:s}=Object.assign({},i(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{b as default};
