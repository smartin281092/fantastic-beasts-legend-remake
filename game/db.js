const fs = require('fs');

class Db {
  constructor() {}
  
  // On va récupérer les données du joueur dans la table players.json
  static getPlayer(playerId) {
    const playersJsonData = fs.readFileSync('./players.json', 'utf-8');
    const playersData = JSON.parse(playersJsonData);
    const player = {};
    
    for (const playerData of playersData) {
      if(playerData.id === playerId) {
        player = playerData;
        continue;
      }
    }

    return player;
  }
  
  static getChallenge(challengeId) {
    const challengeJsonData = fs.readFileSync('./challenge.json', 'utf-8');
    const challengeData = JSON.parse(challengeJsonData);
  }
  
  getElement(id, table) {
    const jsonData = fs.readFileSync(`./${table}.json`, 'utf-8');
    const playersData = JSON.parse(playersJsonData);
    const player = {};
    
    for (const playerData of playersData) {
      if(playerData.id === playerId) {
        player = playerData;
        continue;
      }
    }

    return player;
  }

}

module.exports = Db;