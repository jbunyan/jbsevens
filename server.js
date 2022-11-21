'use strict';

const express = require('express');
const WebSocket = require('ws');

const cards = [
  "AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH",
  "AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC",
  "AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD",
  "AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS"
]

let hands = [];

let players = [];

let kitty = 0;
let knocks = [];

const PORT = process.env.PORT || 3001;
const INDEX = '/index.html';

var app = express()

app.get('/api/poll', function(req, res){
  res.send(`Hello World at ${Date.now()}`);
});
app.use(express.static('build'))
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new WebSocket.Server({ server });

let connections = []

function storeConnection(c) {
  let index = connections.findIndex(existingConnection => {
    return existingConnection == c
  })

  if (index === -1) {
    console.log("storing connection")
    connections.push(c)
  }
}

newGame();

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', function incoming(message) {
    storeConnection(ws)
    console.log(message)
    let m = JSON.parse(message)
    switch(m.type) {
      case 'reset':
        reset();
        break;
      case 'card':
        sendCard(m.card,m.left,m.player);
        break;
      case 'retractCard':
        sendRetractCard(m.card,m.player);
        break;
      case 'knock':
        updateKitty(m.player)
        sendKnock(m.player);
        break;
      case 'kitty':
        sendKitty();
        break;
      case 'hand':
        sendHand(ws, m.player);
        break;
      case 'register':
        register(m.player);
        break;
      case 'ping':
        echo(ws);
        break;
      case 'newgame':
        newGame();
        sendKitty();
    }
  });
});

function reset() {
  players = [];
  broadcast({
    type: "reset"
  })
}

function broadcast(payload) {
  connections.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        ...payload
      }));
    }
  });
}

function register(p) {
  players.push(p);
  let messagePart = players.length < 4 ? ` - ${players.length} waiting` : ` 4 players registered! - wait for new game`

  broadcast(
    {
      type: 'message',
      message: `${p} joined!` + messagePart
    }
  )

  // if (players.length == 4) {
  //   sendPlayers(players)
  // }
}

function updateKitty(player) {
  kitty++
  let index = players.findIndex(p => p === player)
  knocks[index]++
}

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

  kitty = players.length * 2
  knocks = [0,0,0,0]

  console.log(JSON.stringify(hands))

  if (wss) {
    broadcast(
      {
        type: 'newgame'
      }
    )
  };
}

function sendPlayers(ps) {
  broadcast(
    {
      type: 'players',
      players: ps
    }
  )
}

function echo(ws) {
  ws.send(JSON.stringify({
    type: 'echo' 
  }));
}

function sendHand(ws, player) {
  let index = players.findIndex(p => p === player)
  ws.send(JSON.stringify({
    type: 'hand',
    cards: hands[index] 
  }));
}

function getNextPlayer(p) {
  let index = players.findIndex(pl => p === pl) + 1
  index = (index >= players.length) ? 0 : index
  return players[index]
}

function sendCard(card,cardsLeft,player) {
  let nextplayer = getNextPlayer(player)
  broadcast(
    {
      type: 'card',
      player: player,
      nextplayer: nextplayer,
      left: cardsLeft,
      card: card
    }
  )
}

function sendRetractCard(card,player) {
  broadcast(
    {
      type: 'retractCard',
      player: player,
      card: card
    }
  )
}

function sendKitty() {
  broadcast(
    {
      type: 'kitty',
      kitty: kitty,
      knocks: {
        "players": players,
        "knocks": knocks
      }
    }
  )
}

function sendKnock(player) {
  let nextplayer = getNextPlayer(player)
  broadcast(
    {
      type: 'knock',
      nextplayer: nextplayer,
      player: player
    }
  )
}