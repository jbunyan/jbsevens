(this.webpackJsonpsevens=this.webpackJsonpsevens||[]).push([[0],[,,,,,,,,,,,,,function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){"use strict";l.r(a);var d=l(0),n=l(1),t=l.n(n),c=l(6),u=l.n(c),r=(l(13),l(2)),p=(l(14),l(7));l(15),l(16);function s(e){console.log("Cards");var a,l={C:"card-black",D:"card-red",S:"card-black",H:"card-red"}[2===(a=e.value).length?a.charAt(1):a.charAt(2)];var n=e.selected?"card-selected":"",t=function(e){return{C:"\u2663",D:"\u2666",S:"\u2660",H:"\u2665"}[2===e.length?e.charAt(1):e.charAt(2)]}(e.value),c=(2===e.value.length?e.value.substring(0,1):e.value.substring(0,2))+t,u="card-card "+n+(e.hidden?" card-hidden":""),r="card-value "+l;return Object(d.jsx)("div",{className:u,children:Object(d.jsx)("div",{className:r,onClick:e.onClick,children:c})})}function v(e){console.log("myhand called with props.hand: ".concat(e.hand));var a=Object(n.useState)([]),l=Object(r.a)(a,2),t=l[0],c=l[1];return Object(n.useEffect)((function(){e.hand&&c((function(a){return e.hand.map((function(e){return{value:e,selected:!1}}))}))}),[e.hand]),Object(d.jsxs)("div",{className:"myhand-panel",children:[t.length>0&&t.map((function(e,a){return Object(d.jsx)("div",{className:"myhand-card",children:Object(d.jsx)(s,{value:e.value,selected:e.selected,onClick:function(){!function(e){var a=t.map((function(a,l){return{value:a.value,selected:e===l}}));c(a)}(a)}})},a)})),Object(d.jsx)("input",{type:"button",onClick:function(){!function(){var a=t.findIndex((function(e){return e.selected})),l=t[a].value,d=Object(p.a)(t);d.splice(a,1),e.playCard(l,d.length),c(d)}()},value:"Play Card"}),Object(d.jsx)("input",{type:"button",onClick:function(){e.knock()},value:"Knock"})]})}l(17);function y(e){var a=e.game.hearts.map((function(e,a){var l="cardtable-card cardtable-hearts "+(e.played?"":"cardtable-notplayed");return Object(d.jsx)("div",{className:l,children:Object(d.jsx)(s,{value:e.value+"H",hidden:!e.played})},a)})),l=e.game.clubs.map((function(e,a){var l="cardtable-card cardtable-clubs "+(e.played?"":"cardtable-notplayed");return Object(d.jsx)("div",{className:l,children:Object(d.jsx)(s,{value:e.value+"C",hidden:!e.played})},a)})),n=e.game.diamonds.map((function(e,a){var l="cardtable-card cardtable-diamonds "+(e.played?"":"cardtable-notplayed");return Object(d.jsx)("div",{className:l,children:Object(d.jsx)(s,{value:e.value+"D",hidden:!e.played})},a)})),t=e.game.spades.map((function(e,a){var l="cardtable-card cardtable-spades "+(e.played?"":"cardtable-notplayed");return Object(d.jsx)("div",{className:l,children:Object(d.jsx)(s,{value:e.value+"S",hidden:!e.played})},a)}));return Object(d.jsxs)("div",{className:"cardtable-panel",children:[Object(d.jsx)("div",{className:"cardtable-hearts",children:a}),Object(d.jsx)("div",{className:"cardtable-clubs",children:l}),Object(d.jsx)("div",{className:"cardtable-diamonds",children:n}),Object(d.jsx)("div",{className:"cardtable-spades",children:t})]})}var i=function(){console.log("App called");var e=Object(n.useState)(""),a=Object(r.a)(e,2),l=a[0],t=a[1],c=Object(n.useState)([]),u=Object(r.a)(c,2),p=u[0],s=u[1],i=Object(n.useState)("..."),o=Object(r.a)(i,2),b=o[0],j=o[1],h=Object(n.useState)(),f=Object(r.a)(h,2),O=f[0],m=f[1],g=Object(n.useState)({hearts:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],clubs:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],diamonds:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],spades:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}]}),x=Object(r.a)(g,2),C=x[0],S=x[1];Object(n.useEffect)((function(){var e=["AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS"];function a(e){var a=["Nancy","John","Allen","Gavin"],l=a.findIndex((function(a){return a===e}))+1;return a[l=l>=a.length?0:l]}m(function(){var l=new WebSocket("wss://jbsevens.herokuapp.com");return l.onmessage=function(l){console.log(l.data);var d,n,c=JSON.parse(l.data);switch(c.type){case"card":t("".concat(c.player," played ").concat(function(e){var a=2===e.length?e.substring(0,1):e.substring(0,2),l=function(e){return{C:"\u2663",D:"\u2666",S:"\u2660",H:"\u2665"}[2===e.length?e.charAt(1):e.charAt(2)]}(e);return a+l}(c.card)," and has ").concat(c.left," card(s) left - ").concat(a(c.player),"'s go...")),n=c.card,S((function(e){var a=2===n.length?n.charAt(1):n.charAt(2),l=2===n.length?n.substring(0,1):n.substring(0,2);return{hearts:e.hearts.map((function(e){return"H"===a&&l===e.value?{value:e.value,played:!0}:{value:e.value,played:e.played}})),clubs:e.clubs.map((function(e){return"C"===a&&l===e.value?{value:e.value,played:!0}:{value:e.value,played:e.played}})),diamonds:e.diamonds.map((function(e){return"D"===a&&l===e.value?{value:e.value,played:!0}:{value:e.value,played:e.played}})),spades:e.spades.map((function(e){return"S"===a&&l===e.value?{value:e.value,played:!0}:{value:e.value,played:e.played}}))}}));break;case"knock":t("".concat(c.player," knocked! - ").concat(a(c.player),"'s go..."));break;case"message":t("".concat(c.message));break;case"hand":d=c.cards,console.log("Update hand called with ".concat(d)),d.sort((function(a,l){return e.findIndex((function(e){return a===e}))-e.findIndex((function(e){return l===e}))})),s(d);break;default:console.log("unsupported message type")}},setInterval((function(){l.send(JSON.stringify({type:"ping"}))}),3e4),l}())}),[]);var k=function(){j("..."),S({hearts:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],clubs:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],diamonds:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}],spades:[{value:"A",played:!1},{value:"2",played:!1},{value:"3",played:!1},{value:"4",played:!1},{value:"5",played:!1},{value:"6",played:!1},{value:"7",played:!1},{value:"8",played:!1},{value:"9",played:!1},{value:"10",played:!1},{value:"J",played:!1},{value:"Q",played:!1},{value:"K",played:!1}]}),s([]),O.send(JSON.stringify({type:"newgame"}))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"app-playerselecter",children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"button",onClick:k,value:"New Game"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"players",children:"Choose a player:"}),Object(d.jsxs)("select",{value:b,name:"players",id:"players",onChange:function(e){console.log("update player called for: ".concat(e.target.value));var a=e.target.value;!function(e){console.log("send hand request called, player: ".concat(e)),e&&O.send(JSON.stringify({type:"hand",player:e}))}(a),j(a)},children:[Object(d.jsx)("option",{value:"...",children:"..."}),Object(d.jsx)("option",{value:"Nancy",children:"Nancy"}),Object(d.jsx)("option",{value:"John",children:"John"}),Object(d.jsx)("option",{value:"Allen",children:"Allen"}),Object(d.jsx)("option",{value:"Gavin",children:"Gavin"})]})]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"app-log",children:l})}),Object(d.jsx)(v,{hand:p,playCard:function(e,a){O.send(JSON.stringify({type:"card",player:b,left:a,card:e}))},knock:function(){O.send(JSON.stringify({type:"knock",player:b}))},newgame:k}),Object(d.jsx)(y,{game:C})]})},o=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,19)).then((function(a){var l=a.getCLS,d=a.getFID,n=a.getFCP,t=a.getLCP,c=a.getTTFB;l(e),d(e),n(e),t(e),c(e)}))};u.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(i,{})}),document.getElementById("root")),o()}],[[18,1,2]]]);
//# sourceMappingURL=main.539fa7d1.chunk.js.map