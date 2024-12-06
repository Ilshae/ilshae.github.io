import{j as i,u as a,d as e,h as o}from"./index-Dd1fQXDV.js";import{m as n,E as p}from"./common-WKnLL-mA.js";const c=()=>i.jsxs(s,{name:n.home,children:[i.jsxs(m,{children:[i.jsxs("h1",{children:["I learn ",i.jsx("br",{})," everyday.",i.jsx("span",{})]}),i.jsx("p",{children:"Hello, I'm a Software Engineer."})]}),i.jsx(l,{children:i.jsx("img",{src:"/assets/images/officeStyle/hero.jpg",alt:"hero"})})]}),s=a(p)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${e.laptopL} {
    justify-content: space-between;
  }

  @media ${e.tablet} {
    flex-direction: column;
  }
`,r=o`
  0% {opacity: 0;}
  50% {opacity: 1;}
  100% {opacity: 0;}
`,m=a.div`
  max-width: 600px;
  padding-right: 32px;

  h1 {
    font-size: 88px;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 3px;
    margin-bottom: 32px;
    white-space: nowrap;

    @media ${e.laptopL} {
      font-size: 64px;
    }

    @media ${e.laptop} {
      font-size: 48px;
    }

    @media ${e.mobileL} {
      font-size: 40px;
    }

    @media ${e.mobileM} {
      font-size: 32px;
    }

    span {
      margin-left: 10px;
      background-color: ${({theme:t})=>t.color.pink};
      display: inline-block;
      width: 70px;
      height: 7px;
      opacity: 0;
      animation-name: ${r};
      animation-duration: 1.75s;
      animation-delay: 1s;
      animation-iteration-count: infinite;

      @media ${e.laptopL} {
        width: 60px;
      }

      @media ${e.laptop} {
        width: 50px;
      }

      @media ${e.mobileL} {
        width: 35px;
      }
    }
  }

  p {
    font-size: ${({theme:t})=>t.fontSize.xl};
    color: ${({theme:t})=>t.color.grey};

    @media ${e.laptopL} {
      font-size: ${({theme:t})=>t.fontSize.l};
    }

    @media ${e.laptop} {
      font-size: ${({theme:t})=>t.fontSize.m};
    }

    @media ${e.tablet} {
      text-align: right;
    }
  }
`,l=a.div`
  img {
    width: 100%;
    max-width: 600px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media ${e.tablet} {
      margin-top: 24px;
      max-height: 250px;
    }
  }
`;export{c as default};
