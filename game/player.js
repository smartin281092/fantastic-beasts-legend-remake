const fs = require('fs');


class Player {
  constructor(data) {
    const playerJsonData = fs.readFileSync('./player.json', 'utf-8');
    const playerData = JSON.parse(playerJsonData);
  }
  
  getId() {
    return this.playerData.id;
  }

}

module.exports = Player;