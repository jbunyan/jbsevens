'use strict';

const express = require('express');
const { Server } = require('ws');

const cards = [
  "AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH",
  "AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC",
  "AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD",
  "AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS"
]

let hands = [];

let players = {};


const PORT = process.env.PORT || 3001;
const INDEX = '/index.html';

const server = express()
  .use(express.static('build'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

newGame();

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', function incoming(message) {
    console.log(message)
    let m = JSON.parse(message)
    switch(m.type) {
      case 'card':
        sendCard(m.card,m.left,m.player);
        break;
      case 'retractCard':
        sendRetractCard(m.card,m.player);
        break;
      case 'knock':
        sendKnock(m.player);
        break;
      case 'hand':
        sendHand(ws, m.player);
        break;
      case 'players':
        players = m.players;
        sendPlayers(m.players);
        break;
      case 'newgame':
        newGame();
    }
  });
});

function newGame() {
  // set has the property that entries must be unique...
  var randoms = new Set();
  while(randoms.size<52){
    randoms.add(Math.floor(Math.random() * 52));
  }

  let shuffle = []
  randoms.forEach(x => shuffle.push(x))

  hands = [];

  for (let i=0; i<4; i++) {
    let hand = [];
    for (let j=0; j<13; j++) {
      hand.push(cards[shuffle[i*13+j]])
    }
    hands.push(hand)
  }

  console.log(JSON.stringify(hands))

  if (wss) {
    wss.clients.forEach((client) => {
      client.send(JSON.stringify({
        type: 'newgame'
      }));
    });
  }
}

function sendPlayers(ps) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify({
      type: 'players',
      players: ps
    }));
  });
}

function sendHand(ws, player) {
  let index = players.findIndex(p => p === player)
  ws.send(JSON.stringify({
    type: 'hand',
    cards: hands[index] 
  }));
  wss.clients.forEach((client) => {
    client.send(JSON.stringify({
      type: 'message',
      message: `${player} joined`
    }));
  });

}

function sendCard(card,cardsLeft,player) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify({
      type: 'card',
      player: player,
      left: cardsLeft,
      card: card
    }));
  });
}

function sendRetractCard(card,player) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify({
      type: 'retractCard',
      player: player,
      card: card
    }));
  });
}

function sendKnock(player) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify({
      type: 'knock',
      player: player
    }));
  });
}