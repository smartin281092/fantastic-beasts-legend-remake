const fs = require('fs');

function createParty() {
  // Read the data.json file to get the list of characters
  const jsonData = fs.readFileSync('game/challenge.json', 'utf-8');
  const data = JSON.parse(jsonData);
  console.log(data);
  
  return data;
}

// Example usage:
const party = createParty();

const Timeline = require('./game/timeline');