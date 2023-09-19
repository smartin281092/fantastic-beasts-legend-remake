const fs = require('fs');

class Db {
  constructor() {}
  
  getPlayer(playerId) {
    const playersJsonData = fs.readFileSync('./players.json', 'utf-8');
    const playersData = JSON.parse(playersJsonData);
    const player = {};
    
    for (const playerData of playersData) {
      console.log(element);
    }
    playersData.players.forEach((playerData) => {
    })

    return player;
  }

}

module.exports = Db;