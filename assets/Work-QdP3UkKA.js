import{u as i,d as s,j as t,H as d}from"./index-Y2270l6V.js";import{m,E as g}from"./common-2qQiVlek.js";const a=({src:e,title:p,href:o,hrefGithub:n,stack:l,children:h})=>t.jsxs(x,{children:[t.jsx(u,{children:t.jsx("a",{href:o,children:t.jsx("img",{src:e,alt:p})})}),t.jsxs(f,{children:[t.jsxs(b,{children:[t.jsx("h3",{children:t.jsx(c,{href:o,children:p})}),t.jsx("p",{children:h})]}),t.jsxs(j,{children:[t.jsx(v,{children:l.map(r=>t.jsx("img",{src:`assets/images/skills/${r}.png`,alt:r},r))}),n?t.jsx(w,{children:t.jsx(c,{href:n,children:"CHECK CODE"})}):null]})]})]}),x=i.article`
  border-radius: 10px;
  margin: 16px;
  box-shadow: 0 3px 20px rgb(0 0 0 / 20%);
  transition: transform 0.2s ease;
  z-index: 2;
  position: relative;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 20px 3px rgb(0 0 0 / 20%);
    z-index: 2;
  }

  @media ${s.tablet} {
    margin: 0;
  }
`,u=i.div`
  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`,f=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  line-height: 1;
  height: 200px;

  @media ${s.laptop} {
    padding: 16px;
  }

  @media ${s.tablet} {
    height: 160px;
  }

  @media ${s.mobileL} {
    height: 180px;
  }
`,c=i.a`
  text-decoration: none;
  color: ${({theme:e})=>e.color.pink};
  white-space: nowrap;
  font-weight: bold;
`,b=i.div`
  text-align: left;

  h3 {
    font-size: ${({theme:e})=>e.fontSize.xl2};
    margin: 0;
    padding: 0 0 16px 0;

    @media ${s.laptopL} {
      font-size: ${({theme:e})=>e.fontSize.xl};
    }

    @media ${s.laptop} {
      font-size: ${({theme:e})=>e.fontSize.l};
    }
  }

  p {
    font-size: ${({theme:e})=>e.fontSize.xl};
    color: ${({theme:e})=>e.color.grey};
    margin: 0;
    padding: 0 0 32px 0;

    @media ${s.laptopL} {
      font-size: ${({theme:e})=>e.fontSize.l};
    }

    @media ${s.laptop} {
      font-size: ${({theme:e})=>e.fontSize.m};
    }
  }
`,j=i.footer`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0 0 16px 0;
  position: absolute;
  bottom: 16px;
  width: calc(100% - 60px);

  @media ${s.laptop} {
    flex-direction: column;
    width: calc(100% - 30px);
    padding: 0;
  }
`,v=i.div`
  text-align: left;

  @media ${s.laptop} {
    margin: 0 auto;
  }

  img {
    width: 32px;
    height: 32px;

    @media ${s.laptopL} {
      width: 26px;
      height: 26px;
    }

    @media ${s.mobileL} {
      width: 20px;
      height: 20px;
    }
  }
`,w=i.div`
  font-size: ${({theme:e})=>e.fontSize.xl};

  @media ${s.laptopL} {
    font-size: ${({theme:e})=>e.fontSize.m};
  }

  @media ${s.laptop} {
    margin: 0 auto;
    padding: 16px 0 0 0;
  }
`,S=()=>t.jsxs(k,{name:m.work,children:[t.jsx(d,{children:"Work"}),t.jsxs(y,{children:[t.jsx(a,{src:"assets/images/apps/jachty-pruszynski.jpg",title:"Jachty Pruszynski",href:"https://jachtypruszynski.pl/",stack:["html","css","sass","javascript","react","redux","github","webpack","react-router","photoshop","jest"],children:"A commercial project for a chartering company with detailed descriptions of their products."}),t.jsx(a,{src:"assets/images/apps/crwn-clothing.jpg",title:"Crwn Clothing",href:"https://ilshae.github.io/crwn-clothing/",hrefGithub:"https://github.com/Ilshae/crwn-clothing-src",stack:["html","css","sass","javascript","react","redux","github","react-router","firebase","styled-components","jest"],children:"Try out signing in with google or creating a new account and paying with test credit card."}),t.jsx(a,{src:"assets/images/apps/hermes-travel-agency.jpg",title:"Hermes Travel Agency",href:"https://hermes-travel-agency-app.herokuapp.com/",hrefGithub:"https://github.com/Ilshae/react-travel-agency",stack:["html","css","sass","javascript","react","redux","github","webpack","react-router","jest"],children:"Dynamically sort trips by tags and duration or use a search bar. Ordered trips go to a JSON Server for later use."}),t.jsx(a,{src:"assets/images/apps/vivek-university.jpg",title:"Vivek University",href:"https://pruszynska.pl/",hrefGithub:"https://github.com/Ilshae/vivek-university",stack:["html","css","sass","javascript","wordpress","advanced-custom-fields","github","webpack"],children:"Wordpress site with a custom made theme. Register a new user and login. Logged in users have access to Notes subpage."}),t.jsx(a,{src:"assets/images/apps/mamma-mia-pizeria.jpg",title:"Mamma Mia Pizzeria",href:"https://mamma-mia-italian-pizza.herokuapp.com/",hrefGithub:"https://github.com/Ilshae/project-pizzeria",stack:["html","css","sass","javascript","react","redux","github","webpack","react-router"],children:"Pure Javascript app. Ordered products from cart go to a JSON Server. Live table booking."}),t.jsx(a,{src:"assets/images/apps/tetris.jpg",title:"Tetris",href:"https://ilshae.github.io/tetris/",hrefGithub:"https://github.com/Ilshae/react-tetris",stack:["html","css","sass","javascript","react","github"],children:"Press start and use arrows to play."})]})]}),k=i(g)`
  padding-bottom: 32px;
  text-align: center;
`,y=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 15px;

  @media ${s.desktop} {
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
  }

  @media ${s.tablet} {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
`;export{S as default};
