const fs = require('fs');
const Db = require('./game/db');
const Challenge = require('./game/')

function createParty() {
  const challengeData = Db.getElementById('1', 'challenges');
    
  console.log(challengeData);
  
  return challengeData;
}

// Example usage:
const party = createParty();

const Timeline = require('./game/timeline');