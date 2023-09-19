const fs = require('fs');

function createParty() {
  // Read the data.json file to get the list of characters
  const challengeJsonData = fs.readFileSync('game/challenge.json', 'utf-8');
  const challengeData = JSON.parse(challengeJsonData);
  
  console.log(challengeData.players);
  
  return data;
}

// Example usage:
const party = createParty();

const Timeline = require('./game/timeline');