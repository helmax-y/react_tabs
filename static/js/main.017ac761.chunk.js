(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),s=(n(13),n(3)),c=n(4),l=n(6),u=n(5),f=n(7),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={index:0},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"onTabSelected",value:function(e){this.setState({index:e})}},{key:"render",value:function(){var e=this,t=this.state.index,n=this.props.tabs;return o.a.createElement("article",{className:"article"},o.a.createElement("ul",{className:"tabs"},n.map(function(n,a){return o.a.createElement("li",{key:n.title},o.a.createElement("button",{type:"button",className:a===t?"tabs__tab--active":"tabs__tab--unactive",onClick:function(){return e.onTabSelected(a)}},n.title))})),o.a.createElement("pre",{className:"article__p"},n[t].content))}}]),t}(o.a.Component),b=[{title:"Tab 1",content:"Are you depressed? Then take of bhang one grain,\nOf rosy grape-juice take one pint or twain;\nSufis, you say, must not take this or that,\nThen go and eat the pebbles off the plain!"},{title:"Tab 2",content:"Yon rising Moon that looks for us again -\nHow oft hereafter will she wax and wane;\nHow oft hereafter rising look for us\nThrough this same Garden \u2013 and for one in vain!"},{title:"Tab 3",content:"To wise and worthy men your life devote,\nBut from the worthless keep your walk remote;\nDare to take poison from a sage's hand,\nBut from a fool refuse an antidote."}],m=function(){return o.a.createElement(h,{tabs:b})};i.a.render(o.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.017ac761.chunk.js.map