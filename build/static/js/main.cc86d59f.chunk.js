(this.webpackJsonpsevens=this.webpackJsonpsevens||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){"use strict";l.r(a);var t=l(0),n=l(1),c=l.n(n),d=l(7),r=l.n(d),u=(l(14),l(2)),s=(l(15),l(8)),p=l(6),o=(l(16),l(17),["AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS"]);function i(e){return{C:"\u2663",D:"\u2666",S:"\u2660",H:"\u2665"}[2===e.length?e.charAt(1):e.charAt(2)]}function y(e){return 2===e.length?e.substring(0,1):e.substring(0,2)}function v(e){console.log("Cards");var a,l={C:"card-black",D:"card-red",S:"card-black",H:"card-red"}[2===(a=e.value).length?a.charAt(1):a.charAt(2)],n=e.selected&&e.playable?"card-selected":"",c=e.selected&&!e.playable?" card-selected-not-playable bounce":"",d=i(e.value),r=y(e.value)+d,u="card-card "+n+(e.hidden?" card-hidden":"")+c,s="card-value "+l;return Object(t.jsx)("div",{className:u,onClick:e.onClick,children:Object(t.jsx)("div",{className:s,children:r})})}function b(e){console.log("myhand called with props.hand: ".concat(e.hand)),console.log("myhand called with props.playable: ".concat(e.playable)),console.log("myhand called with props.yourGo: ".concat(e.yourGo));var a=Object(n.useState)([]),l=Object(u.a)(a,2),c=l[0],d=l[1],r=Object(n.useState)("myhand-non-playable-knock"),o=Object(u.a)(r,2),i=o[0],y=o[1],b=Object(n.useRef)();Object(n.useEffect)((function(){console.log("setting hand"),e.hand&&b.current!==e.hand&&d((function(a){return e.hand.map((function(a){var l=!1;return-1!==e.playable.findIndex((function(e){return e===a}))&&(l=!0),{value:a,selected:!1,playable:l}}))})),b.current=e.hand}),[e.hand,e.playable]),Object(n.useEffect)((function(){console.log("applying props.playable"),e.playable&&d((function(a){return a.map((function(a){var l=!1;return-1!==e.playable.findIndex((function(e){return e===a.value}))&&(l=!0),{value:a.value,selected:a.selected,playable:l}}))}))}),[e.playable]);var j=Object(n.useRef)();return Object(n.useEffect)((function(){console.log("restoring card");var a=["AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS"];e.restoreCard&&j.current!==e.restoreCard&&d((function(l){var t=[].concat(Object(p.a)(l),[{value:e.restoreCard,selected:!1,playable:!1}]);return t.sort((function(e,l){return a.findIndex((function(a){return e.value===a}))-a.findIndex((function(e){return l.value===e}))})),t.map((function(a){var l=e.playable.findIndex((function(e){return e===a.value})),t=Object(s.a)({},a);return t.playable=-1!==l,t}))})),j.current=e.restoreCard}),[e.restoreCard,e.playable]),Object(t.jsx)("div",{className:"myhand-panel",children:Object(t.jsxs)("div",{className:"myhand-container",children:[c.length>0&&c.map((function(e,a){return Object(t.jsx)("div",{className:"myhand-card",children:Object(t.jsx)(v,{playable:e.playable,value:e.value,selected:e.selected,onClick:function(){!function(e){var a=c.map((function(a,l){return{value:a.value,playable:a.playable,selected:e===l}}));d(a)}(a)}})},a)})),e.yourGo&&Object(t.jsxs)("div",{children:[Object(t.jsx)("input",{type:"button",onClick:function(){!function(){var a=c.findIndex((function(e){return e.selected}));if(console.log("selected: ".concat(a)),a>=0){var l=c[a].value,t=Object(p.a)(c);t.splice(a,1),e.playCard(l,t.length),d(t)}else alert("You must select a card first")}()},value:"Play Card"}),Object(t.jsx)("input",{type:"button",className:i,onClick:function(){!function(){var a=!1;c.forEach((function(l){-1!==e.playable.findIndex((function(e){return e===l.value}))&&(a=!0)})),a?y("myhand-playable-knock bounce"):(y("myhand-non-playable-knock"),e.knock())}()},value:"Knock"})]})]})})}l(18);function j(e){var a=e.game.hearts.map((function(a,l){var n="cardtable-card cardtable-hearts "+(a.played?"":"cardtable-notplayed");return Object(t.jsx)("div",{className:n,children:Object(t.jsx)(v,{playable:"true",selected:"false",value:a.value+"H",hidden:!a.played,onClick:function(){return e.remove(a.value+"H")}})},l)})),l=e.game.clubs.map((function(a,l){var n="cardtable-card cardtable-clubs "+(a.played?"":"cardtable-notplayed");return Object(t.jsx)("div",{className:n,children:Object(t.jsx)(v,{playable:"true",selected:"false",value:a.value+"C",hidden:!a.played,onClick:function(){return e.remove(a.value+"C")}})},l)})),n=e.game.diamonds.map((function(a,l){var n="cardtable-card cardtable-diamonds "+(a.played?"":"cardtable-notplayed");return Object(t.jsx)("div",{className:n,children:Object(t.jsx)(v,{playable:"true",selected:"false",value:a.value+"D",hidden:!a.played,onClick:function(){return e.remove(a.value+"D")}})},l)})),c=e.game.spades.map((function(a,l){var n="cardtable-card cardtable-spades "+(a.played?"":"cardtable-notplayed");return Object(t.jsx)("div",{className:n,children:Object(t.jsx)(v,{playable:"true",selected:"false",value:a.value+"S",hidden:!a.played,onClick:function(){return e.remove(a.value+"S")}})},l)}));return Object(t.jsx)("div",{className:"cardtable-panel",children:Object(t.jsxs)("div",{className:"cardtable-container",children:[Object(t.jsx)("div",{className:"cardtable-hearts",children:a}),Object(t.jsx)("div",{className:"cardtable-clubs",children:l}),Object(t.jsx)("div",{className:"cardtable-diamonds",children:n}),Object(t.jsx)("div",{className:"cardtable-spades",children:c})]})})}var f=function(){console.log("App called");var e=Object(n.useState)(),a=Object(u.a)(e,2),l=a[0],c=a[1],d=Object(n.useState)(""),r=Object(u.a)(d,2),s=r[0],p=r[1],v=Object(n.useState)([]),f=Object(u.a)(v,2),h=f[0],O=f[1],m=Object(n.useState)(),g=Object(u.a)(m,2),k=g[0],x=g[1],C=Object(n.useState)("start"),S=Object(u.a)(C,2),N=S[0],D=S[1],H=Object(n.useState)({hearts:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],clubs:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],diamonds:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],spades:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}]}),J=Object(u.a)(H,2),A=J[0],w=J[1],K=Object(n.useState)(),Q=Object(u.a)(K,2),I=Q[0],E=Q[1],G=Object(n.useState)(["7D"]),R=Object(u.a)(G,2),F=R[0],P=R[1],U=Object(n.useState)(0),W=Object(u.a)(U,2),Y=W[0],B=W[1],L=Object(n.useState)({}),T=Object(u.a)(L,2),q=T[0],M=T[1];function z(e){return y(e)+i(e)}console.log("Player: ".concat(k)),Object(n.useEffect)((function(){console.log("App: setting up websocket");var e=new WebSocket("wss://jbsevens.herokuapp.com");e.onopen=function(e){console.log("Websocket opened")},setInterval((function(){e.send(JSON.stringify({type:"ping"}))}),3e4),E(e)}),[]),Object(n.useEffect)((function(){function e(e,a){w((function(l){var t=2===e.length?e.charAt(1):e.charAt(2),n=2===e.length?e.substring(0,1):e.substring(0,2),c=!0;"play"===a?c=!0:"retract"===a&&(c=!1);var d={hearts:l.hearts.map((function(e){return"H"===t&&n===e.value?{value:e.value,played:c}:{value:e.value,played:e.played}})),clubs:l.clubs.map((function(e){return"C"===t&&n===e.value?{value:e.value,played:c}:{value:e.value,played:e.played}})),diamonds:l.diamonds.map((function(e){return"D"===t&&n===e.value?{value:e.value,played:c}:{value:e.value,played:e.played}})),spades:l.spades.map((function(e){return"S"===t&&n===e.value?{value:e.value,played:c}:{value:e.value,played:e.played}}))},r=["H","C","D","S"],u=[];return["hearts","clubs","diamonds","spades"].forEach((function(e,a){if(!1===d[e][6].played)u.push(d[e][6].value+r[a]);else{for(var l=7;l<13;l++)if(!1===d[e][l].played){u.push(d[e][l].value+r[a]);break}for(var t=5;t>=0;t--)if(!1===d[e][t].played){u.push(d[e][t].value+r[a]);break}}})),P(u),d}))}function a(){var e;console.log("New game called, player: ".concat(k)),B(0),D("start"),p("New game! - who has the the 7 of Diamonds?"),w({hearts:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],clubs:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],diamonds:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],spades:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}]}),e=k,console.log("send hand request called, player: ".concat(e)),e&&I.send(JSON.stringify({type:"hand",player:e})),P(["7D"])}I&&(I.onmessage=function(l){console.log(l.data);var t,n,c=JSON.parse(l.data);switch(c.type){case"reset":x(""),O([]);break;case"card":t=c.nextplayer===k?"YOUR":"".concat(c.nextplayer,"'s"),D(c.nextplayer),0===c.left?p("".concat(c.player," played ").concat(z(c.card)," and has WON!!!!!!!")):p("".concat(c.player," played ").concat(z(c.card)," and has ").concat(c.left," card(s) left - ").concat(t," go...")),e(c.card,"play");break;case"knock":t=c.nextplayer===k?"YOUR":"".concat(c.nextplayer,"'s"),D(c.nextplayer),p("".concat(c.player," knocked! - ").concat(t," go..."));break;case"retractCard":var d=y(c.card),r=i(c.card);p("".concat(c.player," retracted card ").concat(d+r)),e(c.card,"retract");break;case"message":p("".concat(c.message));break;case"newgame":a();break;case"kitty":B(c.kitty),M(c.knocks);break;case"hand":n=c.cards,console.log("Update hand called with ".concat(n)),n.sort((function(e,a){return o.findIndex((function(a){return e===a}))-o.findIndex((function(e){return a===e}))})),O(n);break;default:console.log("unsupported message type")}})}),[I,k]);var V="";function X(e){I.send(JSON.stringify({type:"register",player:e})),x(e)}var Z=["...","John","Nancy","Allen","Gavin","Eric"].map((function(e){return Object(t.jsx)("option",{value:e,children:e})}));return console.log("App: player = ".concat(k,", nextPlayer = ").concat(N)),Object(t.jsxs)("div",{className:"App",children:[!k&&Object(t.jsxs)("div",{className:"app-register",children:[Object(t.jsx)("h1",{children:"Sevens!"}),Object(t.jsx)("label",{htmlFor:"players",children:"Choose a predefined player:"}),Object(t.jsx)("select",{value:k,name:"players",id:"players",onChange:function(e){"..."!==e.target.value&&X(e.target.value)},children:Z}),Object(t.jsx)("div",{children:"...or enter a different name:"}),Object(t.jsx)("input",{type:"text",onChange:function(e){V=e.target.value}}),Object(t.jsx)("input",{type:"button",value:"Register new name",onClick:function(){X(V)}})]}),k&&Object(t.jsxs)("div",{className:"app-controls-and-hand",children:[Object(t.jsxs)("div",{className:"app-controls",children:["John"===k&&Object(t.jsx)("div",{className:"app-container",children:Object(t.jsxs)("div",{className:"app-playerselecter",children:[Object(t.jsx)("div",{children:Object(t.jsx)("input",{type:"button",onClick:function(){I.send(JSON.stringify({type:"newgame"}))},value:"New Game"})}),Object(t.jsx)("div",{children:Object(t.jsx)("input",{type:"button",onClick:function(){Y&&q.players&&alert("Kitty: "+Y+"p\n"+q.players[0]+" knocked "+q.knocks[0]+" times\n"+q.players[1]+" knocked "+q.knocks[1]+" times\n"+q.players[2]+" knocked "+q.knocks[2]+" times\n"+q.players[3]+" knocked "+q.knocks[3]+" times\n")},value:"Kitty"})}),Object(t.jsx)("div",{children:Object(t.jsx)("input",{type:"button",onClick:function(){I.send(JSON.stringify({type:"reset"}))},value:"Reset Session"})})]})}),Object(t.jsx)("div",{children:Object(t.jsxs)("div",{className:"app-log",children:[s," - kitty: ",Y,"p"]})})]}),Object(t.jsx)(b,{yourGo:N===k||"start"===N,playable:F,hand:h,playCard:function(e,a){c(""),I.send(JSON.stringify({type:"card",player:k,left:a,card:e}))},knock:function(){I.send(JSON.stringify({type:"knock",player:k})),I.send(JSON.stringify({type:"kitty"}))},restoreCard:l})]}),k&&Object(t.jsx)(j,{game:A,remove:function(e){window.confirm("Are you sure you want to retract the ".concat(e,"?"))&&(c(e),I.send(JSON.stringify({type:"retractCard",player:k,card:e})))}})]})},h=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,20)).then((function(a){var l=a.getCLS,t=a.getFID,n=a.getFCP,c=a.getLCP,d=a.getTTFB;l(e),t(e),n(e),c(e),d(e)}))};r.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(f,{})}),document.getElementById("root")),h()}],[[19,1,2]]]);
//# sourceMappingURL=main.cc86d59f.chunk.js.map