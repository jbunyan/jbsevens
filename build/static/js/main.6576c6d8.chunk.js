(this.webpackJsonpsevens=this.webpackJsonpsevens||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){"use strict";l.r(a);var n=l(0),t=l(1),c=l.n(t),d=l(7),r=l.n(d),u=(l(14),l(2)),s=(l(15),l(8)),p=l(6),o=(l(16),l(17),["AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS"]);function v(e){return{C:"\u2663",D:"\u2666",S:"\u2660",H:"\u2665"}[2===e.length?e.charAt(1):e.charAt(2)]}function i(e){return 2===e.length?e.substring(0,1):e.substring(0,2)}function y(e){console.log("Cards");var a,l={C:"card-black",D:"card-red",S:"card-black",H:"card-red"}[2===(a=e.value).length?a.charAt(1):a.charAt(2)],t=e.selected?"card-selected":"",c=e.playable?"":" card-not-playable",d=e.playable?"":" card-not-playable-grey",r=v(e.value),u=i(e.value)+r,s="card-card "+t+(e.hidden?" card-hidden":"")+d,p="card-value "+l+c;return Object(n.jsx)("div",{className:s,onClick:e.onClick,children:Object(n.jsx)("div",{className:p,children:u})})}function b(e){console.log("myhand called with props.hand: ".concat(e.hand)),console.log("myhand called with props.playable: ".concat(e.playable));var a=Object(t.useState)([]),l=Object(u.a)(a,2),c=l[0],d=l[1],r=Object(t.useRef)();Object(t.useEffect)((function(){console.log("setting hand"),e.hand&&r.current!==e.hand&&d((function(a){return e.hand.map((function(a){var l=!1;return-1!==e.playable.findIndex((function(e){return e===a}))&&(l=!0),{value:a,selected:!1,playable:l}}))})),r.current=e.hand}),[e.hand,e.playable]),Object(t.useEffect)((function(){console.log("applying props.playable"),e.playable&&d((function(a){return a.map((function(a){var l=!1;return-1!==e.playable.findIndex((function(e){return e===a.value}))&&(l=!0),{value:a.value,selected:a.selected,playable:l}}))}))}),[e.playable]);var o=Object(t.useRef)();return Object(t.useEffect)((function(){console.log("restoring card");var a=["AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS"];e.restoreCard&&o.current!==e.restoreCard&&d((function(l){var n=[].concat(Object(p.a)(l),[{value:e.restoreCard,selected:!1,playable:!1}]);return n.sort((function(e,l){return a.findIndex((function(a){return e.value===a}))-a.findIndex((function(e){return l.value===e}))})),n.map((function(a){var l=e.playable.findIndex((function(e){return e===a.value})),n=Object(s.a)({},a);return n.playable=-1!==l,n}))})),o.current=e.restoreCard}),[e.restoreCard,e.playable]),Object(n.jsx)("div",{className:"myhand-panel",children:Object(n.jsxs)("div",{className:"myhand-container",children:[c.length>0&&c.map((function(e,a){return Object(n.jsx)("div",{className:"myhand-card",children:Object(n.jsx)(y,{playable:e.playable,value:e.value,selected:e.selected,onClick:function(){!function(e){var a=c.map((function(a,l){return{value:a.value,playable:a.playable,selected:e===l}}));d(a)}(a)}})},a)})),Object(n.jsx)("input",{type:"button",onClick:function(){!function(){var a=c.findIndex((function(e){return e.selected}));if(console.log("selected: ".concat(a)),a>=0){var l=c[a].value,n=Object(p.a)(c);n.splice(a,1),e.playCard(l,n.length),d(n)}else alert("You must select a card first")}()},value:"Play Card"}),Object(n.jsx)("input",{type:"button",onClick:function(){e.knock()},value:"Knock"})]})})}l(18);function f(e){var a=e.game.hearts.map((function(a,l){var t="cardtable-card cardtable-hearts "+(a.played?"":"cardtable-notplayed");return Object(n.jsx)("div",{className:t,children:Object(n.jsx)(y,{playable:"true",value:a.value+"H",hidden:!a.played,onClick:function(){return e.remove(a.value+"H")}})},l)})),l=e.game.clubs.map((function(a,l){var t="cardtable-card cardtable-clubs "+(a.played?"":"cardtable-notplayed");return Object(n.jsx)("div",{className:t,children:Object(n.jsx)(y,{playable:"true",value:a.value+"C",hidden:!a.played,onClick:function(){return e.remove(a.value+"C")}})},l)})),t=e.game.diamonds.map((function(a,l){var t="cardtable-card cardtable-diamonds "+(a.played?"":"cardtable-notplayed");return Object(n.jsx)("div",{className:t,children:Object(n.jsx)(y,{playable:"true",value:a.value+"D",hidden:!a.played,onClick:function(){return e.remove(a.value+"D")}})},l)})),c=e.game.spades.map((function(a,l){var t="cardtable-card cardtable-spades "+(a.played?"":"cardtable-notplayed");return Object(n.jsx)("div",{className:t,children:Object(n.jsx)(y,{playable:"true",value:a.value+"S",hidden:!a.played,onClick:function(){return e.remove(a.value+"S")}})},l)}));return Object(n.jsx)("div",{className:"cardtable-panel",children:Object(n.jsxs)("div",{className:"cardtable-container",children:[Object(n.jsx)("div",{className:"cardtable-hearts",children:a}),Object(n.jsx)("div",{className:"cardtable-clubs",children:l}),Object(n.jsx)("div",{className:"cardtable-diamonds",children:t}),Object(n.jsx)("div",{className:"cardtable-spades",children:c})]})})}var j=function(){console.log("App called");var e=Object(t.useState)(),a=Object(u.a)(e,2),l=a[0],c=a[1],d=Object(t.useState)(""),r=Object(u.a)(d,2),s=r[0],p=r[1],y=Object(t.useState)([]),j=Object(u.a)(y,2),h=j[0],O=j[1],m=Object(t.useState)(),g=Object(u.a)(m,2),C=g[0],x=g[1],S=Object(t.useState)({hearts:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],clubs:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],diamonds:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],spades:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}]}),k=Object(u.a)(S,2),D=k[0],N=k[1],H=Object(t.useState)(),J=Object(u.a)(H,2),A=J[0],w=J[1],K=Object(t.useState)(["7D"]),Q=Object(u.a)(K,2),I=Q[0],E=Q[1];function R(e){return i(e)+v(e)}console.log("Player: ".concat(C)),Object(t.useEffect)((function(){console.log("App: setting up websocket");var e=new WebSocket("wss://jbsevens.herokuapp.com");e.onopen=function(e){console.log("Websocket opened")},setInterval((function(){e.send(JSON.stringify({type:"ping"}))}),3e4),w(e)}),[]),Object(t.useEffect)((function(){function e(e,a){N((function(l){var n=2===e.length?e.charAt(1):e.charAt(2),t=2===e.length?e.substring(0,1):e.substring(0,2),c=!0;"play"===a?c=!0:"retract"===a&&(c=!1);var d={hearts:l.hearts.map((function(e){return"H"===n&&t===e.value?{value:e.value,played:c}:{value:e.value,played:e.played}})),clubs:l.clubs.map((function(e){return"C"===n&&t===e.value?{value:e.value,played:c}:{value:e.value,played:e.played}})),diamonds:l.diamonds.map((function(e){return"D"===n&&t===e.value?{value:e.value,played:c}:{value:e.value,played:e.played}})),spades:l.spades.map((function(e){return"S"===n&&t===e.value?{value:e.value,played:c}:{value:e.value,played:e.played}}))},r=["H","C","D","S"],u=[];return["hearts","clubs","diamonds","spades"].forEach((function(e,a){if(!1===d[e][6].played)u.push(d[e][6].value+r[a]);else{for(var l=7;l<13;l++)if(!1===d[e][l].played){u.push(d[e][l].value+r[a]);break}for(var n=5;n>=0;n--)if(!1===d[e][n].played){u.push(d[e][n].value+r[a]);break}}})),E(u),d}))}function a(){var e;console.log("New game called, player: ".concat(C)),p("New game! - who has the the 7 of Diamonds?"),N({hearts:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],clubs:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],diamonds:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],spades:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}]}),e=C,console.log("send hand request called, player: ".concat(e)),e&&A.send(JSON.stringify({type:"hand",player:e})),E(["7D"])}A&&(A.onmessage=function(l){console.log(l.data);var n,t,c=JSON.parse(l.data);switch(c.type){case"reset":x(""),O([]);break;case"card":n=c.nextplayer===C?"YOUR":"".concat(c.nextplayer,"'s"),0===c.left?p("".concat(c.player," played ").concat(R(c.card)," and has WON!!!!!!!")):p("".concat(c.player," played ").concat(R(c.card)," and has ").concat(c.left," card(s) left - ").concat(n," go...")),e(c.card,"play");break;case"knock":n=c.nextplayer===C?"YOUR":"".concat(c.nextplayer,"'s"),p("".concat(c.player," knocked! - ").concat(n,"'s go..."));break;case"retractCard":var d=i(c.card),r=v(c.card);p("".concat(c.player," retracted card ").concat(d+r)),e(c.card,"retract");break;case"message":p("".concat(c.message));break;case"newgame":a();break;case"hand":t=c.cards,console.log("Update hand called with ".concat(t)),t.sort((function(e,a){return o.findIndex((function(a){return e===a}))-o.findIndex((function(e){return a===e}))})),O(t);break;default:console.log("unsupported message type")}})}),[A,C]);var F="";function P(e){A.send(JSON.stringify({type:"register",player:e})),x(e)}var U=["...","John","Nancy","Allen","Gavin","Eric"].map((function(e){return Object(n.jsx)("option",{value:e,children:e})}));return Object(n.jsxs)("div",{className:"App",children:[!C&&Object(n.jsxs)("div",{className:"app-register",children:[Object(n.jsx)("h1",{children:"Sevens!"}),Object(n.jsx)("label",{htmlFor:"players",children:"Choose a predefined player:"}),Object(n.jsx)("select",{value:C,name:"players",id:"players",onChange:function(e){"..."!==e.target.value&&P(e.target.value)},children:U}),Object(n.jsx)("div",{children:"...or enter a different name:"}),Object(n.jsx)("input",{type:"text",onChange:function(e){F=e.target.value}}),Object(n.jsx)("input",{type:"button",value:"Register new name",onClick:function(){P(F)}})]}),C&&Object(n.jsxs)("div",{className:"app-controls-and-hand",children:[Object(n.jsxs)("div",{className:"app-controls",children:[Object(n.jsx)("div",{className:"app-container",children:Object(n.jsxs)("div",{className:"app-playerselecter",children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"button",onClick:function(){A.send(JSON.stringify({type:"newgame"}))},value:"New Game"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"button",onClick:function(){A.send(JSON.stringify({type:"reset"}))},value:"Reset Session"})})]})}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"app-log",children:s})})]}),Object(n.jsx)(b,{playable:I,hand:h,playCard:function(e,a){c(""),A.send(JSON.stringify({type:"card",player:C,left:a,card:e}))},knock:function(){A.send(JSON.stringify({type:"knock",player:C}))},restoreCard:l})]}),C&&Object(n.jsx)(f,{game:D,remove:function(e){window.confirm("Are you sure you want to retract the ".concat(e,"?"))&&(c(e),A.send(JSON.stringify({type:"retractCard",player:C,card:e})))}})]})},h=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,20)).then((function(a){var l=a.getCLS,n=a.getFID,t=a.getFCP,c=a.getLCP,d=a.getTTFB;l(e),n(e),t(e),c(e),d(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),h()}],[[19,1,2]]]);
//# sourceMappingURL=main.6576c6d8.chunk.js.map