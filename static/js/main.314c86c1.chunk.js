(this.webpackJsonpnew_portfolio=this.webpackJsonpnew_portfolio||[]).push([[0],{44:function(e,s,t){},46:function(e,s,t){},47:function(e,s,t){},48:function(e,s,t){},49:function(e,s,t){},50:function(e,s,t){},51:function(e,s,t){},52:function(e,s,t){},53:function(e,s,t){},54:function(e,s,t){},55:function(e,s,t){},56:function(e,s,t){},57:function(e,s,t){},58:function(e,s,t){},59:function(e,s,t){},60:function(e,s,t){"use strict";t.r(s);var c=t(1),i=t.n(c),l=t(9),a=t.n(l),r=t(3),n=t(2),o=t(4),j=t(5),h=(t(44),t(0)),m=function(e){var s=e.src,t=e.alt,c=e.cClass,i=Object(j.a)(e,["src","alt","cClass"]);return Object(h.jsx)("img",Object(o.a)(Object(o.a)({src:""+s,alt:t},i),{},{className:c||"common-image"}))},d=(t(46),function(){return Object(h.jsx)(n.Grid,{className:"p-y-section",children:Object(h.jsx)(r.Element,{name:"home",className:"hero",children:Object(h.jsxs)(n.Row,{children:[Object(h.jsxs)(n.Col,{md:6,className:"text",children:[Object(h.jsxs)("h1",{className:"slide-top",children:["I learn",Object(h.jsx)("br",{}),"everyday.",Object(h.jsx)("span",{})]}),Object(h.jsxs)("p",{className:"slide-top",children:["Hello, I'm a Junior Front End Developer.",Object(h.jsx)("br",{}),"I live in Wroc\u0142aw."]})]}),Object(h.jsx)(n.Col,{md:6,className:"image fade-in",children:Object(h.jsx)(m,{src:"images/people/hero.jpg",alt:"hero"})})]})})})}),b=t(10),p=t(11),u=t(14),g=t(13),O=(t(47),function(e){Object(u.a)(t,e);var s=Object(g.a)(t);function t(e){var c;return Object(b.a)(this,t),(c=s.call(this,e)).state={isMenuOpen:!1,className:"notShadow"},c}return Object(p.a)(t,[{key:"handleScroll",value:function(){document.documentElement.scrollTop>70?this.setState({className:"withShadow"}):this.setState({className:"notShadow"})}},{key:"componentDidMount",value:function(){var e=this;r.Events.scrollEvent.register("begin",(function(){})),r.Events.scrollEvent.register("end",(function(){})),window.onscroll=function(){return e.handleScroll()}}},{key:"scrollTo",value:function(){r.scroller.scrollTo("scroll-to-element",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"componentWillUnmount",value:function(){r.Events.scrollEvent.remove("begin"),r.Events.scrollEvent.remove("end")}},{key:"toggleMenu",value:function(){this.setState({isMenuOpen:!this.state.isMenuOpen}),document.querySelector("#hamburger").classList.toggle("open")}},{key:"render",value:function(){var e=this;return this.state.isMenuOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto",Object(h.jsx)("div",{className:this.state.isMenuOpen?"header-background-dark header-sticky page-padding ".concat(this.state.className):"page-padding header-sticky ".concat(this.state.className),children:Object(h.jsx)(n.Grid,{children:Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("div",{className:"logo slide-bottom",children:Object(h.jsxs)(r.Link,{to:"home",spy:!0,offset:-150,smooth:!0,duration:300,children:["Ingrid",Object(h.jsx)("div",{className:"logo-sub",children:"Pruszy\u0144ska"})]})}),Object(h.jsxs)("nav",{className:this.state.isMenuOpen?"nav show-mobile":"nav",children:[Object(h.jsx)(r.Link,{activeClass:"active",to:"home",spy:!0,offset:-150,smooth:!0,duration:300,className:"link slide-bottom",children:"Home"}),Object(h.jsx)(r.Link,{activeClass:"active",to:"about",spy:!0,offset:-170,smooth:!0,duration:300,className:"link slide-bottom",children:"About"}),Object(h.jsx)(r.Link,{activeClass:"active",to:"work",spy:!0,offset:-130,smooth:!0,duration:300,className:"link slide-bottom",children:"Work"}),Object(h.jsx)(r.Link,{activeClass:"active",to:"contact",spy:!0,offset:-130,smooth:!0,duration:300,className:"link slide-bottom",children:"Contact"})]}),Object(h.jsxs)("div",{id:"hamburger",className:"slide-bottom",onClick:function(){e.toggleMenu()},children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]})]})})})}}]),t}(i.a.Component)),x=(t(48),function(e){var s=e.children,t=Object(j.a)(e,["children"]);return Object(h.jsx)("h1",Object(o.a)(Object(o.a)({},t),{},{className:"common-title",children:s}))}),k=(t(49),function(e){var s=e.children,t=Object(j.a)(e,["children"]);return Object(h.jsx)("h2",Object(o.a)(Object(o.a)({},t),{},{className:"common-subtitle",children:s}))}),f=(t(50),function(e){var s=e.title,t=e.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"section-text-title",children:s}),Object(h.jsx)("p",{className:"section-text text-left",children:t})]})}),v=(t(51),function(e){var s=e.href,t=e.children,c=e.outsideLink,i=e.cClass;return Object(h.jsx)("a",{href:s,target:"_blank",rel:c?"noopener noreferrer":"noreferrer",className:i,children:t})}),w=(t(52),function(e){var s=e.skillClass,t=e.title,c=e.linkUrl,i=e.imageUrl;return Object(h.jsx)("div",{className:"skill ".concat(s),children:Object(h.jsxs)(v,{outsideLink:!0,href:c,children:[Object(h.jsx)("div",{className:"title",children:t}),Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:i,alt:t})})]})})}),y=(t(53),function(){return Object(h.jsxs)("div",{className:"skills-wrapper",children:[Object(h.jsx)(w,{title:"HTML5",linkUrl:"https://html.spec.whatwg.org/multipage/",imageUrl:"images/skills/html.png",skillClass:"html5-skill"}),Object(h.jsx)(w,{title:"CSS3",linkUrl:"https://www.w3.org/Style/CSS/Overview.en.html",imageUrl:"images/skills/css.png",skillClass:"css3-skill"}),Object(h.jsx)(w,{title:"SASS",linkUrl:"https://sass-lang.com/",imageUrl:"images/skills/sass.png",skillClass:"sass-skill"}),Object(h.jsx)(w,{title:"Material UI",linkUrl:"https://material-ui.com/",imageUrl:"images/skills/material-ui.png",skillClass:"material-ui-skill"}),Object(h.jsx)(w,{title:"JavaScript",linkUrl:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",imageUrl:"images/skills/javascript.png",skillClass:"javascript-skill"}),Object(h.jsx)(w,{title:"Styled",linkUrl:"https://styled-components.com/",imageUrl:"images/skills/styled-components.png",skillClass:"styled-components-skill"}),Object(h.jsx)(w,{title:"jQuery",linkUrl:"https://jquery.com/",imageUrl:"images/skills/jquery.png",skillClass:"jquery-skill"}),Object(h.jsx)(w,{title:"Firebase",linkUrl:"https://firebase.google.com/",imageUrl:"images/skills/firebase.png",skillClass:"firebase-skill"}),Object(h.jsx)(w,{title:"React",linkUrl:"https://reactjs.org/",imageUrl:"images/skills/react.png",skillClass:"react-skill"}),Object(h.jsx)(w,{title:"Redux",linkUrl:"https://redux.js.org/",imageUrl:"images/skills/redux.png",skillClass:"redux-skill"}),Object(h.jsx)(w,{title:"Git",linkUrl:"https://github.com/",imageUrl:"images/skills/github.png",skillClass:"github-skill"}),Object(h.jsx)(w,{title:"Webpack",linkUrl:"https://webpack.js.org/",imageUrl:"images/skills/webpack.png",skillClass:"webpack-skill"}),Object(h.jsx)(w,{title:"Router",linkUrl:"https://reactrouter.com/",imageUrl:"images/skills/react-router.png",skillClass:"react-router-skill"}),Object(h.jsx)(w,{title:"Jest",linkUrl:"https://jestjs.io/",imageUrl:"images/skills/jest.png",skillClass:"jest-skill"}),Object(h.jsx)(w,{title:"ESLint",linkUrl:"https://eslint.org/",imageUrl:"images/skills/eslint.png",skillClass:"eslint-skill"}),Object(h.jsx)(w,{title:"PHP",linkUrl:"https://www.php.net/",imageUrl:"images/skills/php.png",skillClass:"php-skill"}),Object(h.jsx)(w,{title:"WordPress",linkUrl:"https://wordpress.com/",imageUrl:"images/skills/wordpress.png",skillClass:"wordpress-skill"}),Object(h.jsx)(w,{title:"ACF",linkUrl:"https://www.advancedcustomfields.com/",imageUrl:"images/skills/advanced-custom-fields.png",skillClass:"advanced-custom-fields-skill"}),Object(h.jsx)(w,{title:"SQL",linkUrl:"https://pl.wikipedia.org/wiki/SQL",imageUrl:"images/skills/sql.png",skillClass:"sql-skill"}),Object(h.jsx)(w,{title:"Photoshop",linkUrl:"https://www.adobe.com/pl/products/photoshop.html",imageUrl:"images/skills/photoshop.png",skillClass:"photoshop-skill"})]})}),C=function(e){var s=e.left,t=e.children,c=e.src,i=e.alt,l=e.cClass,a=e.reverseMobile;return Object(h.jsxs)(n.Row,{className:a?"column-reverse":"",children:[Object(h.jsx)(n.Col,{md:6,className:s?"text-right d-flex-col-center":"d-flex-col-center",children:s?t:Object(h.jsx)(m,{src:c,alt:i,cClass:l})}),Object(h.jsx)(n.Col,{md:6,className:s?"text-right d-flex-col-center":"p-l-section d-flex-col-center",children:s?Object(h.jsx)(m,{src:c,alt:i,cClass:l}):t})]})},N=function(e){var s=e.src,t=e.imgSrc,c=e.cClass,i=Object(j.a)(e,["src","imgSrc","cClass"]);return Object(h.jsxs)("video",Object(o.a)(Object(o.a)({},i),{},{className:c,children:[Object(h.jsx)("source",{src:""+s,type:"video/mp4",height:"500px"}),Object(h.jsx)(m,{src:t,cClass:c,alt:"video-not-supported"})]}))},S=function(e){var s=e.left,t=e.children,c=e.src,i=(e.alt,e.imgSrc),l=e.cClass,a=Object(j.a)(e,["left","children","src","alt","imgSrc","cClass"]);return Object(h.jsxs)(n.Row,Object(o.a)(Object(o.a)({},a),{},{children:[Object(h.jsx)(n.Col,{md:6,className:s?"text-right d-flex-col-center":"d-flex-col-center",children:s?t:Object(h.jsx)(N,{src:c,cClass:l,imgSrc:i,autoPlay:!0,muted:!0,loop:!0})}),Object(h.jsx)(n.Col,{md:6,className:s?"text-right d-flex-col-center":"p-l-section d-flex-col-center",children:s?Object(h.jsx)(N,{src:c,cClass:l,imgSrc:i,autoPlay:!0,muted:!0,loop:!0}):t})]}))},U=function(){return Object(h.jsx)(n.Grid,{className:"p-b-section fade-in",children:Object(h.jsxs)(r.Element,{className:"text-center",name:"about",children:[Object(h.jsxs)("article",{className:"p-y-sm-section",children:[Object(h.jsx)(x,{children:"About"}),Object(h.jsxs)(C,{src:"images/people/design.jpg",alt:"skills",children:[Object(h.jsx)(k,{children:"Skills"}),Object(h.jsx)(y,{})]})]}),Object(h.jsxs)("article",{className:"p-y-sm-section",children:[Object(h.jsx)(k,{children:"What I can do"}),Object(h.jsx)("section",{className:"p-y-sm-section",children:Object(h.jsx)(S,{left:!0,src:"images/work/jachty-pruszynski.mp4",imgSrc:"images/work/jachty-pruszynski.jpg",cClass:"shadow-image",children:Object(h.jsxs)(f,{title:"Website",children:["I can build your website in Wordpress, React or just Javascript. Having a website provides great opportunities for your business. This is a website for ",Object(h.jsx)(v,{outsideLink:!0,href:"https://jachtypruszynski.pl/",cClass:"section-link",children:"Jachty Pruszy\u0144ski"})," which I made."]})})}),Object(h.jsx)("section",{className:"p-y-sm-section",children:Object(h.jsx)(C,{reverseMobile:!0,src:"images/work/desktop-mobile.jpg",alt:"design",children:Object(h.jsxs)(f,{title:"Design & Graphic",children:["I can create designs that look awesome on any device and prepare promotional graphic and image materials. This is ",Object(h.jsx)(v,{outsideLink:!0,href:"https://ilshae.github.io/crwn-clothing/",cClass:"section-link",children:"Crwn Clothing"}),". It's a shop page with stripe payments."]})})}),Object(h.jsx)("section",{className:"p-y-sm-section",children:Object(h.jsx)(C,{left:!0,src:"images/work/seo.jpg",alt:"seo",cClass:"shadow-image",children:Object(h.jsx)(f,{title:"Hosting Support & SEO",children:"I can take care of your website. Optimise page structure and code, use tools like Google Analytics or Speed Insights to increase search results."})})}),Object(h.jsx)("section",{className:"p-y-sm-section",children:Object(h.jsx)(C,{reverseMobile:!0,src:"images/work/e-commerce.jpg",alt:"e-commerce",children:Object(h.jsx)(f,{title:"E-Commerce & English",children:"I have experience in designing marketing content for various platforms like Allegro and Facebook. I speak fluent English and know technical vocabulary allowing me to fully understand documentations."})})})]})]})})},E=(t(54),function(e){var s=e.src,t=e.alt,c=e.children,i=e.stack,l=e.href,a=e.hrefGithub;return Object(h.jsxs)("article",{className:"item-container",children:[Object(h.jsx)("div",{children:Object(h.jsx)(v,{href:l,children:Object(h.jsx)(m,{src:s,alt:t})})}),Object(h.jsxs)("div",{className:"item-text",children:[Object(h.jsxs)("div",{className:"text-left",children:[Object(h.jsx)("h2",{children:Object(h.jsx)(v,{href:l,children:t})}),Object(h.jsx)("p",{children:c})]}),Object(h.jsxs)("footer",{className:"item-footer",children:[Object(h.jsx)("div",{children:i.map((function(e){return Object(h.jsx)(m,{src:"images/skills/".concat(e,".png"),cClass:"item-image",alt:e},e)}))}),a?Object(h.jsx)("span",{children:Object(h.jsx)(v,{href:a,outsideLink:!0,cClass:"section-link",children:"CHECK CODE"})}):""]})]})]})}),I=(t(55),function(){return Object(h.jsx)(n.Grid,{className:"p-b-section",children:Object(h.jsx)(r.Element,{className:"text-center",name:"work",children:Object(h.jsxs)("article",{className:"p-y-sm-section",children:[Object(h.jsx)(x,{children:"Work"}),Object(h.jsxs)("section",{className:"items-container",children:[Object(h.jsx)(E,{src:"images/work/jachty-pruszynski.jpg",alt:"Jachty Pruszynski",href:"https://jachtypruszynski.pl/",stack:["html","css","sass","javascript","react","redux","github","webpack","react-router","photoshop","jest"],children:"A commercial project for a chartering company with detailed descriptions of their products."}),Object(h.jsx)(E,{src:"images/work/crwn-clothing.jpg",alt:"Crwn Clothing",href:"https://ilshae.github.io/crwn-clothing/",hrefGithub:"https://github.com/Ilshae/crwn-clothing-src",stack:["html","css","sass","javascript","react","redux","github","react-router","firebase","styled-components","jest"],children:"Try out signing in with google or creating a new account and paying with test credit card."}),Object(h.jsx)(E,{src:"images/work/hermes-travel-agency.jpg",alt:"Hermes Travel Agency",href:"https://hermes-travel-agency-app.herokuapp.com/",hrefGithub:"https://github.com/Ilshae/react-travel-agency",stack:["html","css","sass","javascript","react","redux","github","webpack","react-router","jest"],children:"Dynamically sort trips by tags and duration or use a search bar. Ordered trips go to a JSON Server for later use."}),Object(h.jsx)(E,{src:"images/work/vivek-university.jpg",alt:"Vivek University",href:"https://www.barbert.ayz.pl/",hrefGithub:"https://github.com/Ilshae/vivek-university",stack:["html","css","sass","javascript","wordpress","advanced-custom-fields","github","webpack"],children:"Wordpress site with a custom made theme. Register a new user and login. Logged in users have access to Notes subpage."}),Object(h.jsx)(E,{src:"images/work/mamma-mia-pizeria.jpg",alt:"Mamma Mia Pizzeria",href:"https://mamma-mia-italian-pizza.herokuapp.com/",hrefGithub:"https://github.com/Ilshae/project-pizzeria",stack:["html","css","sass","javascript","react","redux","github","webpack","react-router"],children:"Pure Javascript app. Ordered products from cart go to a JSON Server. Live table booking."}),Object(h.jsx)(E,{src:"images/work/tetris.jpg",alt:"Tetris",href:"https://ilshae.github.io/tetris/",hrefGithub:"https://github.com/Ilshae/react-tetris",stack:["html","css","sass","javascript","react","github"],children:"Press start and use arrows to play."})]})]})})})}),M=t(12),z=(t(56),function(e){Object(u.a)(t,e);var s=Object(g.a)(t);function t(e){var c;return Object(b.a)(this,t),(c=s.call(this,e)).submitForm=c.submitForm.bind(Object(M.a)(c)),c.state={status:""},c}return Object(p.a)(t,[{key:"render",value:function(){var e=this.state.status;return Object(h.jsxs)("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/xbjpqyzy",method:"POST",children:[Object(h.jsxs)("div",{className:"form-input",children:[Object(h.jsx)("input",{type:"email",name:"email"}),Object(h.jsx)("label",{htmlFor:"email",required:!0,children:"Email:"})]}),Object(h.jsxs)("div",{className:"form-input",children:[Object(h.jsx)("textarea",{name:"message",required:!0}),Object(h.jsx)("label",{htmlFor:"message",children:"Message:"})]}),"SUCCESS"===e?Object(h.jsx)("p",{children:"Thanks!"}):Object(h.jsx)("button",{children:"Submit"}),"ERROR"===e&&Object(h.jsx)("p",{children:"Ooops! There was an error."})]})}},{key:"submitForm",value:function(e){var s=this;e.preventDefault();var t=e.target,c=new FormData(t),i=new XMLHttpRequest;i.open(t.method,t.action),i.setRequestHeader("Accept","application/json"),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?(t.reset(),s.setState({status:"SUCCESS"})):s.setState({status:"ERROR"}))},i.send(c)}}]),t}(i.a.Component)),L=function(){return Object(h.jsx)(n.Grid,{className:"p-b-section",children:Object(h.jsx)(r.Element,{className:"text-center",name:"contact",children:Object(h.jsxs)("article",{className:"p-y-sm-section",children:[Object(h.jsx)(x,{children:"Contact"}),Object(h.jsx)(C,{reverseMobile:!0,src:"images/people/walk.jpg",alt:"contact",children:Object(h.jsx)(z,{className:"text-left"})})]})})})},R=(t(57),function(){return Object(h.jsx)("div",{className:"footer-background",children:Object(h.jsx)(n.Grid,{children:Object(h.jsx)("footer",{className:"text-center",children:Object(h.jsx)("p",{children:"\xa9 Ingrid Pruszy\u0144ska"})})})})}),G=(t(58),function(e){var s=e.children;return Object(h.jsx)("div",{className:"page-padding",children:s})});t(59);var P=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)(G,{children:[Object(h.jsx)(d,{}),Object(h.jsx)(U,{}),Object(h.jsx)(I,{}),Object(h.jsx)(L,{})]}),Object(h.jsx)(R,{})]})};a.a.render(Object(h.jsx)(P,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.314c86c1.chunk.js.map