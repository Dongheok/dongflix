(this["webpackJsonpdev-donghyuk"]=this["webpackJsonpdev-donghyuk"]||[]).push([[0],{453:function(e,n,t){},454:function(e,n,t){},455:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(0),i=t(110),c=t.n(i),o=t(115),s=t(92),l=t(19),p={isLoading:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_IS_LOADING":return Object(l.a)(Object(l.a)({},e),{},{isLoading:n.payload});default:return e}},u=Object(s.b)({reducer:d}),b=Object(s.c)(u),j=t(18),h={main:"rgba(20,20,20,1)"},x=t(20);function g(){var e=Object(x.a)(["\n   position: fixed;\n   left: 0;\n   right: 0;\n   top: 0;\n   z-index: 2500;\n   & .progress_bar {\n      position: relative;\n      width: 100%;\n      & > div {\n         background: #27ae60;\n      }\n   }\n   & .click_block {\n      width: 100%;\n      height: 100vh;\n   }\n"]);return g=function(){return e},e}var m=j.b.div(g()),v=t(469),f=t(468),O=function(){return Object(r.jsxs)(m,{children:[Object(r.jsx)(v.a,{className:"progress_bar"}),Object(r.jsx)(f.a,{className:"click_block"})]})},_=t(64),w=t(16);function y(){var e=Object(x.a)(["\n   position: fixed;\n   left: 0;\n   top: 0;\n   width: 100%;\n   z-index: 2000;\n   background: rgba(20, 20, 20, 1);\n   & > .header_wrap {\n      & > div {\n         & a {\n            position: relative;\n            display: inline-block;\n            width: 80px;\n            height: 60px;\n            color: #fff;\n            text-align: center;\n            &.on .icon::before {\n               width: 24px;\n            }\n         }\n      }\n   }\n"]);return y=function(){return e},e}function k(){var e=Object(x.a)(["\n   display: inline-block;\n   position: absolute;\n   left: 50%;\n   top: 50%;\n   transform: translate(-50%, -50%);\n   width: 24px;\n   height: 24px;\n   background: url(",");\n   background-size: 24px;\n   &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 0px;\n      height: 24px;\n      background: url(",");\n      background-size: 24px;\n      transition: all 0.4s;\n   }\n"]);return k=function(){return e},e}var N=j.b.span(k(),(function(e){return"".concat(e.iconUrl)}),(function(e){return"".concat(e.coverUrl)})),R=j.b.div(y()),T=[{key:"/movie",value:"Movie",icon:"/dongflix/images/icon/movie_icon.png",cover:"/dongflix/images/icon/movie_icon_c.png"},{key:"/tv",value:"TV",icon:"/dongflix/images/icon/tv_icon.png",cover:"/dongflix/images/icon/tv_icon_c.png"},{key:"/search",value:"Search",icon:"/dongflix/images/icon/search_icon.png",cover:"/dongflix/images/icon/search_icon_c.png"}],U=function(){return Object(r.jsx)(R,{children:Object(r.jsxs)(f.a,{container:!0,justify:"space-between",className:"header_wrap",children:[Object(r.jsx)(f.a,{item:!0,children:T.map((function(e,n){return 2!==n&&Object(r.jsx)(_.c,{to:e.key,activeClassName:"on",children:Object(r.jsx)(N,{iconUrl:e.icon,coverUrl:e.cover,className:"icon"})},n)}))}),Object(r.jsx)(f.a,{item:!0,children:T.map((function(e,n){return 2===n&&Object(r.jsx)(_.c,{to:e.key,activeClassName:"on",children:Object(r.jsx)(N,{iconUrl:e.icon,coverUrl:e.cover,className:"icon"})},n)}))})]})})};function S(){var e=Object(x.a)(["\n   & .content {\n      padding-top: 60px;\n   }\n"]);return S=function(){return e},e}var C=j.b.div(S()),I=function(e){var n=e.children;return Object(r.jsxs)(C,{children:[Object(r.jsx)(U,{}),Object(r.jsx)(f.a,{className:"content",children:n})]})},z=t(49),P=t.n(z),D=t(74),E=t(75),L=t(59),M=t(230),A=t.n(M).a.create({baseURL:"https://api.themoviedb.org/3/"});A.interceptors.request.use((function(e){return b.dispatch({type:"SET_IS_LOADING",payload:!0}),e.params=e.params||{},e.params.api_key="4e88b4f1dedb08e14ee3e3dbe7eeb858",e.params.language="en-US",e}),(function(e){return b.dispatch({type:"SET_IS_LOADING",payload:!1}),Promise.reject(e)})),A.interceptors.response.use((function(e){return b.dispatch({type:"SET_IS_LOADING",payload:!1}),e}),(function(e){return b.dispatch({type:"SET_IS_LOADING",payload:!1}),Promise.reject(e)}));var V=function(){return A.get("movie/now_playing")},G=function(){return A.get("movie/upcoming")},F=function(){return A.get("movie/popular")},q=function(e){return A.get("/search/movie",{params:{query:e}})},J=function(){return A.get("tv/top_rated")},B=function(){return A.get("tv/popular")},K=function(){return A.get("tv/airing_today")},H=function(e){return A.get("/search/tv",{params:{query:e}})};function Q(){var e=Object(x.a)(["\n  & > h2 {\n    color: #fff;\n    font-weight: bold;\n    font-size: 14px;\n  }\n  & > span {\n    color: #fff;\n    font-size: 14px;\n  }\n"]);return Q=function(){return e},e}var W=j.b.div(Q()),X=function(e){var n=e.title,t=e.children;return Object(r.jsxs)(W,{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)(f.a,{container:!0,children:t})]})};function Y(){var e=Object(x.a)(["\n   cursor: pointer;\n   * {\n      transition: all 0.4s;\n   }\n   & .image_wrap {\n      margin-bottom: 5px;\n   }\n   & .image {\n      position: relative;\n      height: 250px;\n      border-radius: 4px;\n      transition: all 0.4s ease;\n      & .text_box {\n         position: absolute;\n         left: 0;\n         top: 50px;\n         z-index: 2000;\n         width: 100%;\n         opacity: 0;\n         text-align: center;\n         transition: all 0.4s ease;\n         & .title {\n            margin-bottom: 3px;\n            color: #000;\n            font-size: 14px;\n            font-weight: bold;\n            text-shadow: 2px 2px rgba(0, 0, 0, 0.09);\n         }\n         & .year {\n            padding-top: 15px;\n            color: #000;\n            font-size: 14px;\n            color: #000;\n            font-weight: bold;\n            text-shadow: 2px 2px rgba(0, 0, 0, 0.09);\n         }\n      }\n      & .rating {\n         position: absolute;\n         left: 0;\n         bottom: 10px;\n         width: 100%;\n         opacity: 0;\n         padding: 0 8px;\n         & .star {\n            position: relative;\n            display: block;\n            width: 100px;\n            height: 24px;\n            margin: 0 auto;\n            background: url('/dongflix/images/star.png') no-repeat;\n         }\n         & .star_cover {\n            position: absolute;\n            left: 0px;\n            top: 0;\n            display: block;\n            width: 0;\n            height: 24px;\n            background: url('/dongflix/images/star_cover.png') no-repeat;\n         }\n      }\n      &::before {\n         content: '';\n         position: absolute;\n         left: 0;\n         top: 0;\n         width: 100%;\n         height: 100%;\n         background: rgba(255, 255, 255, 0.7);\n         opacity: 0;\n         transition: all 0.4s ease;\n         border-radius: 4px;\n      }\n      &:hover .text_box {\n         opacity: 1;\n      }\n      &:hover .rating {\n         opacity: 1;\n      }\n      &:hover::before {\n         opacity: 1;\n      }\n   }\n"]);return Y=function(){return e},e}function Z(){var e=Object(x.a)(["\n   background: url(",") center center;\n   background-size: cover;\n"]);return Z=function(){return e},e}var $=j.b.div(Z(),(function(e){return"".concat(e.bgUrl)})),ee=j.b.div(Y()),ne=function(e){var n=e.type,t=e.rating,a=e.id,i=e.imageUrl,c=e.title,o=e.year,s=10*t;return Object(r.jsx)(_.b,{to:"movie"===n?"/movie/detail/".concat(a):"/tv/detail/".concat(a),children:Object(r.jsx)(ee,{children:Object(r.jsx)(f.a,{className:"image_wrap",children:Object(r.jsxs)($,{bgUrl:i?"https://image.tmdb.org/t/p/w200".concat(i):"/dongflix/images/notVideo.jpg",className:"image",children:[Object(r.jsxs)(f.a,{className:"text_box",children:[Object(r.jsx)("h2",{className:"title",children:c.length>15?"".concat(c.substring(0,15),"..."):c}),Object(r.jsx)("p",{className:"year",children:o})]}),Object(r.jsx)("span",{className:"rating",children:Object(r.jsx)("span",{className:"star",children:Object(r.jsx)("span",{className:"star_cover",style:{width:"".concat(s,"%")}})})})]})})})})};function te(){var e=Object(x.a)(["\n   * {\n      transition: all 0.4s;\n   }\n   & .poster_wrap {\n      padding: 40px 0px;\n      & .poster {\n         width: calc(100% / 12);\n         padding: 4px;\n      }\n      & > div {\n         padding-bottom: 40px;\n         & > h2 {\n            padding-bottom: 40px;\n            text-indent: 4px;\n            color: #fff;\n         }\n         & > span {\n            display: inline-block;\n            width: 20%;\n         }\n      }\n   }\n   @media (max-width: 1756px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 11);\n         }\n      }\n   }\n   @media (max-width: 1610px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 10);\n         }\n      }\n   }\n   @media (max-width: 1462px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 9);\n         }\n      }\n   }\n   @media (max-width: 1315px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 8);\n         }\n      }\n   }\n   @media (max-width: 1170px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 7);\n         }\n      }\n   }\n   @media (max-width: 1025px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 6);\n         }\n      }\n   }\n   @media (max-width: 876px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 5);\n         }\n      }\n   }\n   @media (max-width: 730px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 4);\n         }\n      }\n   }\n   @media (max-width: 584px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 3);\n         }\n      }\n   }\n"]);return te=function(){return e},e}var re=j.b.div(te()),ae=function(e){var n=e.children;return Object(r.jsx)(re,{children:Object(r.jsx)(f.a,{className:"poster_wrap",children:n})})};function ie(){var e=Object(x.a)(["\n   padding: 64px 24px;\n   width: 100vw;\n   & h2 {\n      width: 100%;\n      text-align: center;\n      color: #e74c3c;\n      font-weight: bold;\n   }\n"]);return ie=function(){return e},e}var ce=j.b.div(ie()),oe=function(e){var n=e.text;return Object(r.jsx)(ce,{children:Object(r.jsx)("h2",{children:n})})},se=function(){var e=Object(a.useState)({nowPlaying:[],upComing:[],popular:[],error:""}),n=Object(E.a)(e,2),t=n[0],i=n[1],c=function(){var e=Object(D.a)(P.a.mark((function e(){var n,r,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V();case 3:return n=e.sent,e.next=6,G();case 6:return r=e.sent,e.next=9,F();case 9:a=e.sent,i(Object(l.a)(Object(l.a)({},t),{},{nowPlaying:n.data.results,upComing:r.data.results,popular:a.data.results})),console.log(Object(l.a)(Object(l.a)({},t),{},{nowPlaying:n.data.results,upComing:r.data.results,popular:a.data.results})),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log({e:e.t0}),i(Object(l.a)(Object(l.a)({},t),{},{error:"Can't find Tvs information."}));case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L.a,{children:Object(r.jsx)("title",{children:"Movies | Dongflix"})}),Object(r.jsxs)(ae,{children:[t.nowPlaying&&t.nowPlaying.length>0&&Object(r.jsx)(X,{title:"Now Playing",children:t.nowPlaying.map((function(e,n){return Object(r.jsx)(f.a,{item:!0,className:"poster",children:Object(r.jsx)(ne,{type:"movie",rating:e.vote_average,id:e.id,imageUrl:e.poster_path,title:e.original_title,year:e.release_date.substring(0,4)})},e.id)}))}),t.upComing&&t.upComing.length>0&&Object(r.jsx)(X,{title:"UpComing Movies",children:t.upComing.map((function(e,n){return Object(r.jsx)(f.a,{item:!0,className:"poster",children:Object(r.jsx)(ne,{type:"movie",rating:e.vote_average,id:e.id,imageUrl:e.poster_path,title:e.original_title,year:e.release_date.substring(0,4)})},e.id)}))}),t.popular&&t.popular.length>0&&Object(r.jsx)(X,{title:"Popular Movies",children:t.popular.map((function(e,n){return Object(r.jsx)(f.a,{item:!0,className:"poster",children:Object(r.jsx)(ne,{type:"movie",rating:e.vote_average,id:e.id,imageUrl:e.poster_path,title:e.original_title,year:e.release_date.substring(0,4)})},e.id)}))}),t.error&&Object(r.jsx)(oe,{text:t.error})]})]})},le=function(){var e=Object(a.useState)({topRated:[],popular:[],airingToday:[],error:""}),n=Object(E.a)(e,2),t=n[0],i=n[1],c=function(){var e=Object(D.a)(P.a.mark((function e(){var n,r,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J();case 3:return n=e.sent,e.next=6,B();case 6:return r=e.sent,e.next=9,K();case 9:a=e.sent,i(Object(l.a)(Object(l.a)({},t),{},{topRated:n.data.results,popular:r.data.results,airingToday:a.data.results})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log({e:e.t0}),i(Object(l.a)(Object(l.a)({},t),{},{error:"Can't find Tvs information."}));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L.a,{children:Object(r.jsx)("title",{children:"Movies | Dongflix"})}),Object(r.jsxs)(ae,{children:[t.topRated&&t.topRated.length>0&&Object(r.jsx)(X,{title:"Top Rated",children:t.topRated.map((function(e,n){return Object(r.jsx)(f.a,{item:!0,className:"poster",children:Object(r.jsx)(ne,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4),type:"tv"})},e.id)}))}),t.popular&&t.popular.length>0&&Object(r.jsx)(X,{title:"Popular TV",children:t.popular.map((function(e,n){return Object(r.jsx)(f.a,{item:!0,className:"poster",children:Object(r.jsx)(ne,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4),type:"tv"})},e.id)}))}),t.airingToday&&t.airingToday.length>0&&Object(r.jsx)(X,{title:"Airing Today TV",children:t.airingToday.map((function(e,n){return Object(r.jsx)(f.a,{item:!0,className:"poster",children:Object(r.jsx)(ne,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4),type:"tv"})},e.id)}))}),t.error&&Object(r.jsx)(oe,{text:t.error})]})]})},pe=t(148);function de(){var e=Object(x.a)(["\n   padding: 40px 0px;\n   & .search_form {\n      width: 100%;\n      & input {\n         width: 100%;\n         padding: 0 8px;\n         font-size: 28px;\n         color: rgba(255, 255, 255, 1);\n         background: none;\n         border: none;\n         outline: none;\n         &::placeholder {\n            color: rgba(255, 255, 255, 0.6);\n         }\n      }\n   }\n"]);return de=function(){return e},e}var ue=j.b.div(de()),be=function(){var e=Object(a.useState)({movieResult:null,tvResult:null,searchTerm:"",error:""}),n=Object(E.a)(e,2),t=n[0],i=n[1],c=Object(a.useRef)(null),o=function(){var e=Object(D.a)(P.a.mark((function e(){var n,r,a,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null===(n=c.current)||void 0===n?void 0:n.value,e.prev=1,!r){e.next=12;break}return e.next=5,q(encodeURIComponent(r));case 5:return a=e.sent,e.next=8,H(encodeURIComponent(r));case 8:o=e.sent,i(Object(l.a)(Object(l.a)({},t),{},{movieResult:Object(pe.a)(a.data.results),tvResult:Object(pe.a)(o.data.results),searchTerm:r})),e.next=13;break;case 12:""===r&&i({movieResult:[],tvResult:[],searchTerm:"",error:""});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),i(Object(l.a)(Object(l.a)({},t),{},{error:"Can't find results."}));case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(ue,{children:[Object(r.jsx)(L.a,{children:Object(r.jsx)("title",{children:"Search | Dongflix"})}),Object(r.jsx)(f.a,{className:"search_form",children:Object(r.jsx)("input",{type:"text",ref:c,placeholder:"Search Movies or TV Shows...",onKeyUp:function(e){return"Enter"===e.key&&o()}})}),Object(r.jsxs)(ae,{children:[t.movieResult&&t.movieResult.length>0&&Object(r.jsx)(X,{title:"Movie Results",children:t.movieResult.map((function(e,n){return Object(r.jsx)(f.a,{item:!0,className:"poster",children:Object(r.jsx)(ne,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e&&e.release_date&&e.release_date.substring(0,4)&&e.release_date.substring(0,4),type:"movie"})},e.id)}))}),t.tvResult&&t.tvResult.length>0&&Object(r.jsx)(X,{title:"TV Results",children:t.tvResult.map((function(e,n){return Object(r.jsx)(f.a,{item:!0,className:"poster",children:Object(r.jsx)(ne,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e&&e.first_air_date&&e.first_air_date.substring(0,4)?e.first_air_date.substring(0,4):"Not Found",type:"tv"})},e.id)}))}),t.movieResult&&t.tvResult&&0===t.movieResult.length&&0===t.tvResult.length&&""!==t.searchTerm&&Object(r.jsx)(oe,{text:"Nothing found : ".concat(t.searchTerm)})]})]})},je=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(L.a,{children:Object(r.jsx)("title",{children:"Detail | Dongflix"})})})},he=function(){return Object(r.jsx)(_.a,{children:Object(r.jsx)(I,{children:Object(r.jsxs)(w.d,{children:[Object(r.jsx)(w.b,{path:"/",exact:!0,component:se}),Object(r.jsx)(w.b,{path:"/movie",exact:!0,component:se}),Object(r.jsx)(w.b,{path:"/tv",exact:!0,component:le}),Object(r.jsx)(w.b,{path:"/search",component:be}),Object(r.jsx)(w.b,{path:"/movie/detail/:id",component:je}),Object(r.jsx)(w.b,{path:"/tv/detail/:id",component:je}),Object(r.jsx)(w.a,{from:"*",to:"/movie"})]})})})},xe=function(){var e=Object(o.b)((function(e){return e.reducer}));return Object(r.jsxs)(j.a,{theme:h,children:[e.isLoading&&Object(r.jsx)(O,{}),Object(r.jsx)(he,{})]})};t(259),t(269),t(453),t(454);c.a.render(Object(r.jsx)(o.a,{store:b,children:Object(r.jsx)(xe,{})}),document.getElementById("root"))}},[[455,1,2]]]);
//# sourceMappingURL=main.8285fede.chunk.js.map