(this["webpackJsonpdev-donghyuk"]=this["webpackJsonpdev-donghyuk"]||[]).push([[0],{232:function(e,n,t){e.exports=t(454)},435:function(e,n,t){},436:function(e,n,t){},454:function(e,n,t){"use strict";t.r(n);t(233),t(243);var a=t(0),r=t.n(a),i=t(109),o=t.n(i),l=t(114),c=t(91),s=t(15),p={isLoading:!1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_IS_LOADING":return Object(s.a)(Object(s.a)({},e),{},{isLoading:n.payload});default:return e}},m=Object(c.b)({reducer:u}),d=Object(c.c)(m),g=(t(435),t(436),t(14)),h={main:"#27ae60",bg:"rgba(20,20,20,1)"},v=t(468),b=t(467),f=t(19);function x(){var e=Object(f.a)(["\n   position: fixed;\n   left: 0;\n   right: 0;\n   top: 0;\n   z-index: 2500;\n   & .progress_bar {\n      position: relative;\n      width: 100%;\n      background:",";\n      & > div {\n         background: ",";\n      }\n   }\n   & .click_block {\n      width: 100%;\n      height: 100vh;\n   }\n"]);return x=function(){return e},e}var E=g.b.div(x(),(function(e){return e.theme.bg}),(function(e){return e.theme.main})),w=function(){return r.a.createElement(E,null,r.a.createElement(v.a,{className:"progress_bar"}),r.a.createElement(b.a,{className:"click_block"}))},_=t(59),y=t(17);function k(){var e=Object(f.a)(["\n   position: fixed;\n   left: 0;\n   top: 0;\n   width: 100%;\n   z-index: 2000;\n   background: rgba(20, 20, 20, 1);\n   & > .header_wrap {\n      & > div {\n         & a {\n            position: relative;\n            display: inline-block;\n            width: 80px;\n            height: 60px;\n            color: #fff;\n            text-align: center;\n            &.on .icon::before {\n               width: 24px;\n            }\n         }\n      }\n   }\n"]);return k=function(){return e},e}function j(){var e=Object(f.a)(["\n   display: inline-block;\n   position: absolute;\n   left: 50%;\n   top: 50%;\n   transform: translate(-50%, -50%);\n   width: 24px;\n   height: 24px;\n   background: url(",");\n   background-size: 24px;\n   &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 0px;\n      height: 24px;\n      background: url(",");\n      background-size: 24px;\n      transition: all 0.4s;\n   }\n"]);return j=function(){return e},e}var O=g.b.span(j(),(function(e){return"".concat(e.iconUrl)}),(function(e){return"".concat(e.coverUrl)})),N=g.b.div(k()),R=[{key:"/movie",value:"Movie",icon:"/dongflix/images/icon/movie_icon.png",cover:"/dongflix/images/icon/movie_icon_c.png"},{key:"/tv",value:"TV",icon:"/dongflix/images/icon/tv_icon.png",cover:"/dongflix/images/icon/tv_icon_c.png"},{key:"/search",value:"Search",icon:"/dongflix/images/icon/search_icon.png",cover:"/dongflix/images/icon/search_icon_c.png"}],U=function(){return r.a.createElement(N,null,r.a.createElement(b.a,{container:!0,justify:"space-between",className:"header_wrap"},r.a.createElement(b.a,{item:!0},R.map((function(e,n){return 2!==n&&r.a.createElement(_.c,{key:n,to:e.key,activeClassName:"on"},r.a.createElement(O,{iconUrl:e.icon,coverUrl:e.cover,className:"icon"}))}))),r.a.createElement(b.a,{item:!0},R.map((function(e,n){return 2===n&&r.a.createElement(_.c,{key:n,to:e.key,activeClassName:"on"},r.a.createElement(O,{iconUrl:e.icon,coverUrl:e.cover,className:"icon"}))})))))};function S(){var e=Object(f.a)(["\n   & .content {\n      padding-top: 60px;\n   }\n"]);return S=function(){return e},e}var T=g.b.div(S()),z=function(e){var n=e.children;return r.a.createElement(T,null,r.a.createElement(U,null),r.a.createElement(b.a,{className:"content"},n))},I=t(37),C=t.n(I),D=t(60),P=t(46),L=t(61),V=t(229),A=t.n(V).a.create({baseURL:"https://api.themoviedb.org/3/"});A.interceptors.request.use((function(e){return d.dispatch({type:"SET_IS_LOADING",payload:!0}),e.params=e.params||{},e.params.api_key="4e88b4f1dedb08e14ee3e3dbe7eeb858",e.params.language="en-US",e}),(function(e){return d.dispatch({type:"SET_IS_LOADING",payload:!1}),Promise.reject(e)})),A.interceptors.response.use((function(e){return d.dispatch({type:"SET_IS_LOADING",payload:!1}),e}),(function(e){return d.dispatch({type:"SET_IS_LOADING",payload:!1}),Promise.reject(e)}));var M=function(){return A.get("movie/now_playing")},F=function(){return A.get("movie/upcoming")},G=function(){return A.get("movie/popular")},J=function(e){return A.get("movie/".concat(e),{params:{append_to_response:"videos"}})},q=function(e){return A.get("/search/movie",{params:{query:e}})},B=function(){return A.get("tv/top_rated")},K=function(){return A.get("tv/popular")},W=function(){return A.get("tv/airing_today")},H=function(e){return A.get("tv/".concat(e),{params:{append_to_response:"video"}})},Q=function(e){return A.get("/search/tv",{params:{query:e}})};function X(){var e=Object(f.a)(["\n  & > h2 {\n    color: #fff;\n    font-weight: bold;\n    font-size: 14px;\n  }\n  & > span {\n    color: #fff;\n    font-size: 14px;\n  }\n"]);return X=function(){return e},e}var Y=g.b.div(X()),Z=function(e){var n=e.title,t=e.children;return r.a.createElement(Y,null,r.a.createElement("h2",null,n),r.a.createElement(b.a,{container:!0},t))};function $(){var e=Object(f.a)(['\n  cursor: pointer;\n  * {\n    transition: all 0.4s;\n  }\n  & .image_wrap {\n    margin-bottom: 5px;\n  }\n  & .image {\n    position: relative;\n    height: 250px;\n    border-radius: 4px;\n    transition: all 0.4s ease;\n    & .text_box {\n      position: absolute;\n      left: 0;\n      top: 50px;\n      z-index: 2000;\n      width: 100%;\n      opacity: 0;\n      text-align: center;\n      transition: all 0.4s ease;\n      & .title {\n        margin-bottom: 3px;\n        color: #000;\n        font-size: 14px;\n        font-weight: bold;\n        text-shadow: 2px 2px rgba(0, 0, 0, 0.09);\n      }\n      & .year {\n        padding-top: 15px;\n        color: #000;\n        font-size: 14px;\n        color: #000;\n        font-weight: bold;\n        text-shadow: 2px 2px rgba(0, 0, 0, 0.09);\n      }\n    }\n    & .rating {\n      position: absolute;\n      left: 0;\n      bottom: 10px;\n      width: 100%;\n      opacity: 0;\n      padding: 0 8px;\n      & .star {\n        position: relative;\n        display: block;\n        width: 100px;\n        height: 24px;\n        margin: 0 auto;\n        background: url("/dongflix/images/star.png") no-repeat;\n      }\n      & .star_cover {\n        position: absolute;\n        left: 0px;\n        top: 0;\n        display: block;\n        width: 0;\n        height: 24px;\n        background: url("/dongflix/images/star_cover.png") no-repeat;\n      }\n    }\n    &::before {\n      content: "";\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(255, 255, 255, 0.7);\n      opacity: 0;\n      transition: all 0.4s ease;\n      border-radius: 4px;\n    }\n    &:hover .text_box {\n      opacity: 1;\n    }\n    &:hover .rating {\n      opacity: 1;\n    }\n    &:hover::before {\n      opacity: 1;\n    }\n  }\n']);return $=function(){return e},e}function ee(){var e=Object(f.a)(["\n  background: url(",") center center;\n  background-size: cover;\n"]);return ee=function(){return e},e}var ne=g.b.div(ee(),(function(e){return"".concat(e.bgUrl)})),te=g.b.div($()),ae=function(e){var n=e.type,t=e.rating,a=e.id,i=e.imageUrl,o=e.title,l=e.year,c=10*t;return r.a.createElement(_.b,{to:"movie"===n?"/movie/detail/".concat(a):"/tv/detail/".concat(a)},r.a.createElement(te,null,r.a.createElement(b.a,{className:"image_wrap"},r.a.createElement(ne,{bgUrl:i?"https://image.tmdb.org/t/p/w200".concat(i):"/dongflix/images/notVideo.jpg",className:"image"},r.a.createElement(b.a,{className:"text_box"},r.a.createElement("h2",{className:"title"},o.length>15?"".concat(o.substring(0,15),"..."):o),r.a.createElement("p",{className:"year"},l)),r.a.createElement("span",{className:"rating"},r.a.createElement("span",{className:"star"},r.a.createElement("span",{className:"star_cover",style:{width:"".concat(c,"%")}})))))))};function re(){var e=Object(f.a)(["\n   * {\n      transition: all 0.4s;\n   }\n   & .poster_wrap {\n      padding: 40px 0px;\n      & .poster {\n         width: calc(100% / 12);\n         padding: 4px;\n      }\n      & > div {\n         padding-bottom: 40px;\n         & > h2 {\n            padding-bottom: 40px;\n            text-indent: 4px;\n            color: #fff;\n         }\n         & > span {\n            display: inline-block;\n            width: 20%;\n         }\n      }\n   }\n   @media (max-width: 1756px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 11);\n         }\n      }\n   }\n   @media (max-width: 1610px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 10);\n         }\n      }\n   }\n   @media (max-width: 1462px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 9);\n         }\n      }\n   }\n   @media (max-width: 1315px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 8);\n         }\n      }\n   }\n   @media (max-width: 1170px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 7);\n         }\n      }\n   }\n   @media (max-width: 1025px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 6);\n         }\n      }\n   }\n   @media (max-width: 876px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 5);\n         }\n      }\n   }\n   @media (max-width: 730px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 4);\n         }\n      }\n   }\n   @media (max-width: 584px) {\n      & .poster_wrap {\n         & .poster {\n            width: calc(100% / 3);\n         }\n      }\n   }\n"]);return re=function(){return e},e}var ie=g.b.div(re()),oe=function(e){var n=e.children;return r.a.createElement(ie,null,r.a.createElement(b.a,{className:"poster_wrap"},n))};function le(){var e=Object(f.a)(["\n   padding: 64px 24px;\n   width: 100vw;\n   & h2 {\n      width: 100%;\n      text-align: center;\n      color: #e74c3c;\n      font-weight: bold;\n   }\n"]);return le=function(){return e},e}var ce=g.b.div(le()),se=function(e){var n=e.text;return r.a.createElement(ce,null,r.a.createElement("h2",null,n))},pe=function(){var e=Object(a.useState)({nowPlaying:[],upComing:[],popular:[],error:""}),n=Object(P.a)(e,2),t=n[0],i=n[1],o=function(){var e=Object(D.a)(C.a.mark((function e(){var n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M();case 3:return n=e.sent,e.next=6,F();case 6:return a=e.sent,e.next=9,G();case 9:r=e.sent,i(Object(s.a)(Object(s.a)({},t),{},{nowPlaying:n.data.results,upComing:a.data.results,popular:r.data.results})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log({e:e.t0}),i(Object(s.a)(Object(s.a)({},t),{},{error:"Can't find Tvs information."}));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement("title",null,"Movies | Dongflix")),r.a.createElement(oe,null,t.nowPlaying&&t.nowPlaying.length>0&&r.a.createElement(Z,{title:"Now Playing"},t.nowPlaying.map((function(e,n){return r.a.createElement(b.a,{item:!0,className:"poster",key:e.id},r.a.createElement(ae,{type:"movie",rating:e.vote_average,id:e.id,imageUrl:e.poster_path,title:e.original_title,year:e.release_date.substring(0,4)}))}))),t.upComing&&t.upComing.length>0&&r.a.createElement(Z,{title:"UpComing Movies"},t.upComing.map((function(e,n){return r.a.createElement(b.a,{item:!0,className:"poster",key:e.id},r.a.createElement(ae,{type:"movie",rating:e.vote_average,id:e.id,imageUrl:e.poster_path,title:e.original_title,year:e.release_date.substring(0,4)}))}))),t.popular&&t.popular.length>0&&r.a.createElement(Z,{title:"Popular Movies"},t.popular.map((function(e,n){return r.a.createElement(b.a,{item:!0,className:"poster",key:e.id},r.a.createElement(ae,{type:"movie",rating:e.vote_average,id:e.id,imageUrl:e.poster_path,title:e.original_title,year:e.release_date.substring(0,4)}))}))),t.error&&r.a.createElement(se,{text:t.error})))},ue=function(){var e=Object(a.useState)({topRated:[],popular:[],airingToday:[],error:""}),n=Object(P.a)(e,2),t=n[0],i=n[1],o=function(){var e=Object(D.a)(C.a.mark((function e(){var n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:return n=e.sent,e.next=6,K();case 6:return a=e.sent,e.next=9,W();case 9:r=e.sent,i(Object(s.a)(Object(s.a)({},t),{},{topRated:n.data.results,popular:a.data.results,airingToday:r.data.results})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log({e:e.t0}),i(Object(s.a)(Object(s.a)({},t),{},{error:"Can't find Tvs information."}));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement("title",null,"Movies | Dongflix")),r.a.createElement(oe,null,t.topRated&&t.topRated.length>0&&r.a.createElement(Z,{title:"Top Rated"},t.topRated.map((function(e,n){return r.a.createElement(b.a,{item:!0,className:"poster",key:e.id},r.a.createElement(ae,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4),type:"tv"}))}))),t.popular&&t.popular.length>0&&r.a.createElement(Z,{title:"Popular TV"},t.popular.map((function(e,n){return r.a.createElement(b.a,{item:!0,className:"poster",key:e.id},r.a.createElement(ae,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4),type:"tv"}))}))),t.airingToday&&t.airingToday.length>0&&r.a.createElement(Z,{title:"Airing Today TV"},t.airingToday.map((function(e,n){return r.a.createElement(b.a,{item:!0,className:"poster",key:e.id},r.a.createElement(ae,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4),type:"tv"}))}))),t.error&&r.a.createElement(se,{text:t.error})))},me=t(147);function de(){var e=Object(f.a)(["\n   padding: 40px 0px;\n   & .search_form {\n      width: 100%;\n      & input {\n         width: 100%;\n         padding: 0 8px;\n         font-size: 28px;\n         color: rgba(255, 255, 255, 1);\n         background: none;\n         border: none;\n         outline: none;\n         &::placeholder {\n            color: rgba(255, 255, 255, 0.6);\n         }\n      }\n   }\n"]);return de=function(){return e},e}var ge=g.b.div(de()),he=function(){var e=Object(a.useState)({movieResult:null,tvResult:null,searchTerm:"",error:""}),n=Object(P.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(""),l=Object(P.a)(o,2),c=l[0],p=l[1],u=function(){var e=Object(D.a)(C.a.mark((function e(n){var a,r,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="",""!==n?(a=n,p(decodeURIComponent(JSON.parse(a)))):(a=encodeURIComponent(c),localStorage.setItem("searchTerm",JSON.stringify(a))),e.prev=2,""===a){e.next=13;break}return e.next=6,q(a);case 6:return r=e.sent,e.next=9,Q(a);case 9:o=e.sent,i(Object(s.a)(Object(s.a)({},t),{},{movieResult:Object(me.a)(r.data.results),tvResult:Object(me.a)(o.data.results),searchTerm:a,error:"Nothing found : ".concat(decodeURIComponent(a))})),e.next=14;break;case 13:i({movieResult:[],tvResult:[],searchTerm:"",error:""});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),i(Object(s.a)(Object(s.a)({},t),{},{error:"Can't find results."}));case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=localStorage.getItem("searchTerm");e&&'""'!==e&&u(e)}),[]),r.a.createElement(ge,null,r.a.createElement(L.a,null,r.a.createElement("title",null,"Search | Dongflix")),r.a.createElement(b.a,{className:"search_form"},r.a.createElement("input",{type:"text",value:c,placeholder:"Search Movies or TV Shows...",onChange:function(e){p(e.target.value)},onKeyUp:function(e){return"Enter"===e.key&&u("")}})),r.a.createElement(oe,null,t.movieResult&&t.movieResult.length>0&&r.a.createElement(Z,{title:"Movie Results"},t.movieResult.map((function(e,n){return r.a.createElement(b.a,{item:!0,className:"poster",key:e.id},r.a.createElement(ae,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e&&e.release_date&&e.release_date.substring(0,4)&&e.release_date.substring(0,4),type:"movie"}))}))),t.tvResult&&t.tvResult.length>0&&r.a.createElement(Z,{title:"TV Results"},t.tvResult.map((function(e,n){return r.a.createElement(b.a,{item:!0,className:"poster",key:e.id},r.a.createElement(ae,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e&&e.first_air_date&&e.first_air_date.substring(0,4)?e.first_air_date.substring(0,4):"Not Found",type:"tv"}))}))),t.movieResult&&t.tvResult&&0===t.movieResult.length&&0===t.tvResult.length&&""!==t.searchTerm&&r.a.createElement(se,{text:t.error})))};function ve(){var e=Object(f.a)(['\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  z-index: 1500;\n  width: 100%;\n  height: calc(100vh - 61px);\n  & .detail {\n    position: fixed;\n    left: 0;\n    top: 59px;\n    width: 100%;\n    height: 100%;\n    & .poster {\n      position: absolute;\n      left: 0;\n      top: 0;\n      z-index: 1;\n      max-width: 600px;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      -webkit-mask-image: -webkit-gradient(\n        linear,\n        right top,\n        left top,\n        color-stop(1, rgba(0, 0, 0, 1)),\n        color-stop(0.5, rgba(0, 0, 0, 1)),\n        color-stop(0, rgba(0, 0, 0, 0))\n      );\n    }\n    & .text {\n      position: absolute;\n      left: 36%;\n      top: 0;\n      height: 100%;\n      z-index: 2000;\n      width: calc(67% - 40px);\n      & > div {\n        height: 100%;\n        & > div {\n          & h2 {\n            line-height: 48px;\n            font-size: 32px;\n            font-weight: bold;\n            color: #fff;\n            text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\n          }\n          & h3 {\n            padding: 8px 0 32px;\n            & > span {\n              display: inline-block;\n              margin-right: 24px;\n              color: #fff;\n              text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\n              &.genres {\n                & em {\n                  display: inline-block;\n                  margin-right: 4px;\n                  &.last {\n                    margin-right: 0;\n                  }\n                }\n              }\n              &:last-child {\n                margin-right: 0;\n              }\n              &.rating {\n                & .star {\n                  position: relative;\n                  display: block;\n                  width: 80px;\n                  height: 16px;\n                  margin: 0 auto;\n                  background: url("/dongflix/images/star.png") no-repeat left\n                    bottom;\n                  background-size: 80px;\n                }\n                & .star_cover {\n                  position: absolute;\n                  left: 0px;\n                  top: 0;\n                  display: block;\n                  width: 0;\n                  height: 16px;\n                  background: url("/dongflix/images/star_cover_w.png") no-repeat\n                    left bottom;\n                  background-size: 80px;\n                }\n              }\n            }\n          }\n          & .review {\n            display: block;\n            width: 150px;\n            height: 40px;\n            line-height: 36px;\n            color: #fff;\n            font-size: 12px;\n            text-align: center;\n            text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\n            border: 2px solid #fff;\n            border-radius: 4px;\n            background: rgba(255, 255, 255, 0.3);\n            cursor: pointer;\n            &:hover {\n              background: rgba(255, 255, 255, 0.5);\n            }\n          }\n          & p {\n            width: 635px;\n            line-height: 24px;\n            margin-top: 24px;\n            color: rgba(255, 255, 255, 0.8);\n            text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\n          }\n          & .youtube {\n            margin-top: 24px;\n            & button {\n              width: 32px;\n              height: 23px;\n              background: url("/dongflix/images/icon/youtube_icon.png")\n                no-repeat;\n              background-size: 32px;\n              border: none;\n              outline: none;\n              cursor: pointer;\n            }\n            & .iframe_wrap {\n              width: 100%;\n              margin-top: 32px;\n              & iframe {\n                width: 100%;\n                height: 100%;\n                max-height: 0px;\n                opacity: 0;\n              }\n            }\n            &.on {\n              & .iframe_wrap {\n                height: 320px;\n                & iframe {\n                  max-height: 320px;\n                  opacity: 1;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  @media (max-width: 600px) {\n    & .detail {\n      & .poster {\n        -webkit-mask-image: none !important;\n      }\n      & .text {\n        left: 0;\n        width: 100%;\n        padding: 0 16px;\n        text-align: center;\n        & > div {\n          & > div {\n            width: 100%;\n            & .review {\n              margin: 0 auto;\n            }\n            & > p {\n              width: 100%;\n            }\n          }\n        }\n      }\n    }\n  }\n']);return ve=function(){return e},e}function be(){var e=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  filter: blur(3px);\n  opacity: 0.5;\n  background: url(",") center center;\n  background-size: cover;\n"]);return be=function(){return e},e}var fe=g.b.div(be(),(function(e){return"".concat(e.bgUrl)})),xe=g.b.div(ve()),Ee=function(){var e,n,t,i,o,l,c,p,u,m,d,g,h=Object(y.g)(),v=Object(y.h)().id,f=parseInt(v),x=Object(a.useState)({result:{},error:""}),E=Object(P.a)(x,2),w=E[0],_=E[1],k=h.location.pathname.split("/")[1],j=Object(a.useState)(!1),O=Object(P.a)(j,2),N=O[0],R=O[1],U=function(){var e=Object(D.a)(C.a.mark((function e(){var n,t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},e.prev=1,"movie"!==k){e.next=9;break}return e.next=5,J(f);case 5:t=e.sent,n=t.data,e.next=13;break;case 9:return e.next=11,H(f);case 11:a=e.sent,n=a.data;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),_(Object(s.a)(Object(s.a)({},w),{},{error:"Can't find anything."}));case 18:_(Object(s.a)(Object(s.a)({},w),{},{result:n}));case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){isNaN(f)?h.push("/"):U()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement("title",null,"Detail | Dongflix")),""!==w.error?r.a.createElement(se,{text:w.error}):r.a.createElement(xe,null,r.a.createElement(fe,{bgUrl:w.result.backdrop_path?"https://image.tmdb.org/t/p/original".concat(w.result.backdrop_path):"/dongflix/images/notVideo.jpg"}),r.a.createElement(b.a,{container:!0,className:"detail"},r.a.createElement("img",{src:w.result.poster_path?"https://image.tmdb.org/t/p/original".concat(w.result.poster_path):"/dongflix/images/notVideo.jpg",alt:"poster",className:"poster"}),r.a.createElement(b.a,{className:"text"},r.a.createElement(b.a,{container:!0,alignItems:"center"},r.a.createElement(b.a,{item:!0},r.a.createElement("h2",null,w.result.original_title,w.result.original_name),r.a.createElement("h3",null,(null===(e=w.result)||void 0===e?void 0:e.genres)&&(null===(n=w.result)||void 0===n?void 0:n.genres.length)>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"genres"},w.result.genres.map((function(e,n){return r.a.createElement("em",{key:n,className:n+1===w.result.genres.length?"last":""},e.name,"\xa0",n+1!==w.result.genres.length&&"/")})))):"Not Found",r.a.createElement("span",null,null===(t=w.result.release_date)||void 0===t?void 0:t.substring(0,4),null===(i=w.result.first_air_date)||void 0===i?void 0:i.substring(0,4)),r.a.createElement("span",null,null===(o=w.result)||void 0===o?void 0:o.runtime,null===(l=w.result)||void 0===l?void 0:l.episode_run_time,"\xa0min"),r.a.createElement("span",{className:"rating"},(null===(c=w.result)||void 0===c?void 0:c.vote_average)&&r.a.createElement("span",{className:"star"},r.a.createElement("span",{className:"star_cover",style:{width:"".concat(10*(null===(p=w.result)||void 0===p?void 0:p.vote_average),"%")}})))),r.a.createElement("a",{href:(null===(u=w.result)||void 0===u?void 0:u.homepage)?"".concat(w.result.homepage):"/",target:"_blank",rel:"noopener noreferrer",className:"review"},"READ REVIEW"),r.a.createElement("p",null,null===(m=w.result)||void 0===m?void 0:m.overview),(null===(d=w.result)||void 0===d?void 0:d.videos)&&r.a.createElement(b.a,{className:"youtube ".concat(N&&"on")},r.a.createElement("button",{type:"button",onClick:function(){R(!N)}}),r.a.createElement(b.a,{className:"iframe_wrap"},r.a.createElement("iframe",{title:"youtube",src:(null===(g=w.result.videos.results[0])||void 0===g?void 0:g.key)&&"https://www.youtube.com/embed/".concat(w.result.videos.results[0].key),allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})))))))))},we=function(){return r.a.createElement(_.a,{basename:"/dongflix"},r.a.createElement(z,null,r.a.createElement(y.d,null,r.a.createElement(y.b,{path:"/",exact:!0,component:pe}),r.a.createElement(y.b,{path:"/movie",exact:!0,component:pe}),r.a.createElement(y.b,{path:"/tv",exact:!0,component:ue}),r.a.createElement(y.b,{path:"/search",component:he}),r.a.createElement(y.b,{path:"/movie/detail/:id",component:Ee}),r.a.createElement(y.b,{path:"/tv/detail/:id",component:Ee}),r.a.createElement(y.a,{from:"*",to:"/"}))))},_e=function(){var e=Object(l.b)((function(e){return e.reducer}));return r.a.createElement(g.a,{theme:h},e.isLoading&&r.a.createElement(w,null),r.a.createElement(we,null))};o.a.render(r.a.createElement(l.a,{store:d},r.a.createElement(_e,null)),document.getElementById("root"))}},[[232,1,2]]]);
//# sourceMappingURL=main.9a2d62ac.chunk.js.map