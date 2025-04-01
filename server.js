'use strict';

const express = require('express');
const WebSocket = require('ws');
const mongoDB = require('mongodb');

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
let winnings = {};
let history = [];

let sequenceNumber = 0;

const PORT = process.env.PORT || 3001;
const INDEX = '/index.html';

const server = express()
  .use(express.static('build'))
  .get('/api/poll', function(req, res){
    res.send(`Hello World at ${Date.now()}`);
  })
  .listen(PORT, () => console.log(`Listening on port: ${PORT}`));

const wss = new WebSocket.Server({ server });

let connections = []

function storeConnection(c) {
  let index = connections.findIndex(existingConnection => {
    return existingConnection == c
  })

  if (index === -1) {
    console.log("storing client connection")
    connections.push(c)
  }
}

const mongoUrl = process.env.MONGO_URL;
console.log(`MONGO DB URL: ${mongoUrl}`)

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
        if ( m.card.remaining == 0 ) {
          processWinner(m.player)
        }
        sendCard(m.card,m.player);
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
      case 'history':
        sendHistory();
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

function getSequenceNumber() {
  const wrapValue = 10000

  sequenceNumber++;
  if ( sequenceNumber > wrapValue ) sequenceNumber = 1

  return sequenceNumber;
}

function reset() {
  players = [];
  broadcast({
    "sequenceNumber": getSequenceNumber(),
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

  winnings[p]={"won":0, "winnings": 0, "spent": 0, "knocks": 0, "knocksThisGame": 0 }
  broadcast(
    {
      "sequenceNumber": getSequenceNumber(),type: 'message',
      message: `${p} joined!` + messagePart
    }
  )

  // if (players.length == 4) {
  //   sendPlayers(players)
  // }
}

function processWinner(player) {
  winnings[player].winnings = winnings[player].winnings + kitty
  winnings[player].won++
  console.log(`Processing winnner, player: ${player}, winnings: ${JSON.stringify(winnings[player])}`)

  // create history entry

  let snapshot = {}
  players.forEach(p => {
    snapshot[p] = winnings[p].winnings - winnings[p].spent
  })

  history.push(snapshot)

  console.log(JSON.stringify(history))
}

function updateKitty(player) {
  kitty++
  winnings[player].knocksThisGame++
  winnings[player].knocks++
  winnings[player].spent++
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

  players.forEach( (p) => {
    winnings[p].knocksThisGame = 0
    winnings[p].spent = winnings[p].spent + 2
  })

  console.log(JSON.stringify(hands))

  if (wss) {
    broadcast(
      {
        "sequenceNumber": getSequenceNumber(),
        type: 'newgame'
      }
    )
  };
}

function sendPlayers(ps) {
  broadcast(
    {
      "sequenceNumber": getSequenceNumber(),
      type: 'players',
      players: ps
    }
  )
}

function echo(ws) {
  ws.send(JSON.stringify({
    "sequenceNumber": getSequenceNumber(),
    type: 'echo' 
  }));
}

function sendHand(ws, player) {
  let index = players.findIndex(p => p === player)
  ws.send(JSON.stringify({
    "sequenceNumber": getSequenceNumber(),
    type: 'hand',
    cards: hands[index] 
  }));
}

function getNextPlayer(p) {
  let index = players.findIndex(pl => p === pl) + 1
  index = (index >= players.length) ? 0 : index
  return players[index]
}

function sendCard(card,player) {
  let nextplayer = getNextPlayer(player)

  console.log(`Card: ${JSON.stringify(card)}, player: ${player}`)

  if ( card.remaining == 0 ) {
    sendKitty()
    sendHistory()
  }

  broadcast(
    {
      "sequenceNumber": getSequenceNumber(),
      type: 'card',
      player: player,
      nextplayer: nextplayer,
      card: card
    }
  )

}

function sendRetractCard(card,player) {
  broadcast(
    {
      "sequenceNumber": getSequenceNumber(),
      type: 'retractCard',
      player: player,
      card: card
    }
  )
}

function sendKitty() {
  broadcast(
    {
      "sequenceNumber": getSequenceNumber(),
      type: 'kitty',
      kitty: kitty,
      winnings: winnings
    }
  )
}

function sendHistory() {
  broadcast(
    {
      "sequenceNumber": getSequenceNumber(),
      type: 'history',
      history: history
    }
  )
}

function sendKnock(player) {
  let nextplayer = getNextPlayer(player)
  broadcast(
    {
      "sequenceNumber": getSequenceNumber(),
      type: 'knock',
      nextplayer: nextplayer,
      player: player
    }
  )
}

function handle(signal) {
  console.log(`Received ${signal}`);
  process.exit();
}

process.on('SIGTERM', handle);