import{_ as i}from"./iframe-3c9cf073.js";import{R as t,r as p}from"./index-1b03fe98.js";import{r as l,u}from"./react-18-5df836b6.js";import{d as h,A as d,H as E,D as x}from"./index-20cafaad.js";var D={code:h,a:d,...E},_=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},R=class{constructor(){this.render=async(r,e,o)=>{let n={...D,...e==null?void 0:e.components},s=x;return new Promise((a,m)=>{i(()=>import("./index-0dd2673f.js"),["./index-0dd2673f.js","./index-2ef8b458.js","./index-1b03fe98.js"],import.meta.url).then(({MDXProvider:c})=>l(t.createElement(_,{showException:m,key:Math.random()},t.createElement(c,{components:n},t.createElement(s,{context:r,docsParameter:e}))),o)).then(()=>a())})},this.unmount=r=>{u(r)}}};export{R as D,D as d};
