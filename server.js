const fs = require('fs');
const Db = require('./db');

function createParty() {
  const challengeData = Db.getChallenge('1');
    
  console.log(challengeData.players);
  
  return challengeData;
}

// Example usage:
const party = createParty();

const Timeline = require('./game/timeline');