const fs = require('fs');
const Db = require('./game/db');
const Challenge = require('./game/challenge');

function createParty() {
  let challenge = new Challenge('1');
  
  return challenge;
}

const party = createParty();

const Timeline = require('./game/timeline');