(this.webpackJsonpchecka=this.webpackJsonpchecka||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),a=c.n(r),i=(c(13),c(5)),h=c(6),l=c(2),j=c(8),o=c(7),d=(c.p,c(14),c(0)),u=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(i.a)(this,c),(e=t.call(this)).handleOnChange=function(t){e.setState({word:t.target.value})},e.getSearchWord=function(){e.getApi(e.state.word)},e.getApi=function(t){var c="http://hn.algolia.com/api/v1/search?query=".concat(t,"&tags=story");fetch(c).then((function(e){return e.json()})).then((function(t){console.log(t.hits),e.setState({queris:t.hits})}))},e.state={word:"",queris:[]},e.handleOnChange=e.handleOnChange.bind(Object(l.a)(e)),e.getSearchWord=e.getSearchWord.bind(Object(l.a)(e)),e.getApi=e.getApi.bind(Object(l.a)(e)),e}return Object(h.a)(c,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"Main",children:[Object(d.jsx)("div",{className:"Appdiv",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h2",{children:"Speedwapp Search"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",name:"search",placeholder:"Enter search word",onChange:function(t){return e.handleOnChange(t)},onInput:this.getSearchWord,value:this.state.word})})]})}),Object(d.jsxs)("div",{className:"Displays",children:[Object(d.jsx)("span",{className:"Spana",children:Object(d.jsx)("h2",{children:"Search Results"})}),this.state.queris?Object(d.jsx)("div",{children:this.state.queris.filter((function(t){return t.title.toLowerCase().includes(e.state.word)})).map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"articleTitle",children:Object(d.jsx)("h3",{children:e.title})}),Object(d.jsx)("span",{className:"articleUrl",children:Object(d.jsxs)("h4",{children:["Url: ",Object(d.jsx)("i",{children:e.url?e.url:"Not Applicable"})]})}),Object(d.jsx)("span",{className:"author",children:Object(d.jsxs)("h4",{children:["Author: ",Object(d.jsx)("i",{children:e.author?e.author:"Not Applicable"})]})}),Object(d.jsx)("span",{className:"score",children:Object(d.jsxs)("h4",{children:["Article score: ",Object(d.jsx)("i",{children:e.relevancy_score?e.relevancy_score:"0"})]})}),Object(d.jsx)("hr",{})]},t)}))}):Object(d.jsx)("p",{children:"Attempt a search "})]})]})}}]),c}(n.Component),b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.1716413e.chunk.js.map