import{u as a,d as o,j as e,r as c,C as f}from"./index-Y2270l6V.js";import{n as i,m as s,d as r,L as p}from"./common-2qQiVlek.js";const x=({setIsOpen:t})=>e.jsxs(m,{to:s.home,onClick:()=>t(!1),...r,children:["Ingrid",e.jsx(g,{children:"Pruszyńska"})]}),m=a(p)`
  transition: all 0.3s;
  height: ${i.desktopL};
  font-weight: 700;
  font-size: ${({theme:t})=>t.fontSize.xl4};
  cursor: pointer;

  @media ${o.desktop} {
    height: ${i.desktop};
    font-size: ${({theme:t})=>t.fontSize.xl3};
  }

  @media ${o.laptop} {
    font-size: ${({theme:t})=>t.fontSize.xl2};
  }

  @media ${o.tablet} {
    height: ${i.tablet};
    font-size: ${({theme:t})=>t.fontSize.xl2};
  }

  @media ${o.mobileL} {
    font-size: ${({theme:t})=>t.fontSize.xl};
  }
`,g=a.div`
  font-weight: 600;
  font-size: ${({theme:t})=>`calc(${t.fontSize.xl4} * 0.7)`};
  color: ${({theme:t})=>t.color.pink};
  margin-left: 2px;
  display: inline-block;

  @media ${o.desktop} {
    font-size: ${({theme:t})=>`calc(${t.fontSize.xl3} * 0.7)`};
  }

  @media ${o.laptop} {
    font-size: ${({theme:t})=>`calc(${t.fontSize.xl2} * 0.75)`};
  }

  @media ${o.mobileL} {
    font-size: ${({theme:t})=>`calc(${t.fontSize.xl} * 0.75)`};
  }
`,b=({isOpen:t,setIsOpen:n})=>e.jsx(k,{$isOpen:t,children:e.jsxs(u,{$isOpen:t,children:[e.jsx(l,{to:s.home,activeClass:"active",onClick:()=>n(!1),...r,children:"Home"}),e.jsx(l,{to:s.about,activeClass:"active",onClick:()=>n(!1),...r,children:"About"}),e.jsx(l,{to:s.work,activeClass:"active",onClick:()=>n(!1),...r,children:"Work"}),e.jsx(l,{to:s.contact,activeClass:"active",onClick:()=>n(!1),...r,children:"Contact"})]})}),k=a.div`
  transition: opacity 0.3s;

  @media ${o.tablet} {
    opacity: ${({$isOpen:t})=>t?"1":"0"};
  }
`,u=a.nav`
  @media ${o.tablet} {
    display: ${({$isOpen:t})=>t?"flex":"none"};
    height: ${({$isOpen:t})=>t?"100vh":"auto"};
    width: ${({$isOpen:t})=>t?"100%":"auto"};
    position: ${({$isOpen:t})=>t?"fixed":"static"};
    top: ${({$isOpen:t})=>t?"59px":"0"};
    left: 0;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme:t})=>t.color.black};
  }
`,l=a(p)`
  margin-right: 32px;
  font-size: ${({theme:t})=>t.fontSize.xl};
  font-weight: 700;
  position: relative;
  padding-bottom: 6px;
  cursor: pointer;

  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${({theme:t})=>t.color.pink};
    transition:
      width 0.3s ease 0s,
      left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }

  &.active::after {
    width: 100% !important;
    left: 0 !important;
    height: 3.5px !important;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media ${o.desktop} {
    font-size: ${({theme:t})=>t.fontSize.xl};
  }

  @media ${o.laptop} {
    font-size: ${({theme:t})=>t.fontSize.l};
  }

  @media ${o.tablet} {
    margin: 24px 0;
    font-size: ${({theme:t})=>t.fontSize.xl2};
    width: min-content;
    padding-bottom: 0;
    height: 50px;
  }
`,v=({isOpen:t,setIsOpen:n})=>e.jsx(w,{children:e.jsxs(z,{id:"hamburger",$isOpen:t,onClick:()=>{n(!t)},children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})}),w=a.div`
  height: ${i.tablet};
  display: none;
  align-items: center;

  @media ${o.tablet} {
    display: flex;
  }
`,z=a.div`
  width: 40px;
  height: 24px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: block;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 50%;
    background: ${({theme:t})=>t.color.pink};
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-child(even) {
    left: 50%;
    border-radius: 0 5px 5px 0;
  }

  span:nth-child(odd) {
    left: 0;
    border-radius: 5px 0 0 5px;
  }

  span:nth-child(1) {
    top: ${({$isOpen:t})=>t?"5px":"0"};
    left: ${({$isOpen:t})=>t?"5px":"0"};
    -webkit-transform: ${({$isOpen:t})=>t?"rotate(45deg)":"rotate(0deg)"};
    -moz-transform: ${({$isOpen:t})=>t?"rotate(45deg)":"rotate(0deg)"};
    -o-transform: ${({$isOpen:t})=>t?"rotate(45deg)":"rotate(0deg)"};
    transform: ${({$isOpen:t})=>t?"rotate(45deg)":"rotate(0deg)"};
  }

  span:nth-child(2) {
    top: ${({$isOpen:t})=>t?"5px":"0"};
    left: ${({$isOpen:t})=>t?"calc(50% - 5px)":"50%"};
    -webkit-transform: ${({$isOpen:t})=>t?"rotate(-45deg)":"none"};
    -moz-transform: ${({$isOpen:t})=>t?"rotate(-45deg)":"none"};
    -o-transform: ${({$isOpen:t})=>t?"rotate(-45deg)":"none"};
    transform: ${({$isOpen:t})=>t?"rotate(-45deg)":"none"};
  }

  span:nth-child(3) {
    top: 10px;
    left: ${({$isOpen:t})=>t?"-50%":"0"};
    opacity: ${({$isOpen:t})=>t?"0":"1"};
  }

  span:nth-child(4) {
    top: 10px;
    left: ${({$isOpen:t})=>t?"100%":"50%"};
    opacity: ${({$isOpen:t})=>t?"0":"1"};
  }

  span:nth-child(5) {
    top: ${({$isOpen:t})=>t?"16px":"20px"};
    left: ${({$isOpen:t})=>t?"5px":"0"};
    -webkit-transform: ${({$isOpen:t})=>t?"rotate(-45deg)":"none"};
    -moz-transform: ${({$isOpen:t})=>t?"rotate(-45deg)":"none"};
    -o-transform: ${({$isOpen:t})=>t?"rotate(-45deg)":"none"};
    transform: ${({$isOpen:t})=>t?"rotate(-45deg)":"none"};
  }

  span:nth-child(6) {
    top: ${({$isOpen:t})=>t?"16px":"20px"};
    left: ${({$isOpen:t})=>t?"calc(50% - 5px)":"50%"};
    -webkit-transform: ${({$isOpen:t})=>t?"rotate(45deg)":"none"};
    -moz-transform: ${({$isOpen:t})=>t?"rotate(45deg)":"none"};
    -o-transform: ${({$isOpen:t})=>t?"rotate(45deg)":"none"};
    transform: ${({$isOpen:t})=>t?"rotate(45deg)":"none"};
  }
`,C=()=>{const[t,n]=c.useState(!1);t?document.body.style.overflow="hidden":document.body.style.overflow="auto";const[$,h]=c.useState(0);return c.useEffect(()=>{const d=()=>h(window.scrollY);return window.removeEventListener("scroll",d),window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),e.jsx(j,{$showShadow:$>60,$isOpen:t,children:e.jsxs(y,{children:[e.jsx(x,{setIsOpen:n}),e.jsx(b,{isOpen:t,setIsOpen:n}),e.jsx(v,{isOpen:t,setIsOpen:n})]})})},j=a.nav`
  height: ${i.desktopL};
  line-height: ${i.desktopL};
  position: sticky;
  top: 0;
  z-index: 99;
  transition: all 0.3s;
  box-shadow: ${({$showShadow:t})=>t?"0 1px 10px 1px rgb(150 150 150 / 50%)":"unset"};
  background-color: ${({$isOpen:t,theme:n})=>t?n.color.black:n.color.white};
  color: ${({$isOpen:t,theme:n})=>t?n.color.white:n.color.black};

  @media ${o.desktop} {
    height: ${i.desktop};
    line-height: ${i.desktop};
  }

  @media ${o.tablet} {
    height: ${i.tablet};
    line-height: ${i.tablet};
  }
`,y=a(f)`
  height: ${i.desktopL};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${o.desktop} {
    height: ${i.desktop};
  }

  @media ${o.tablet} {
    height: ${i.tablet};
  }
`;export{C as default};
