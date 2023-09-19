const Player = require('./player');


class Challenge {
  constructor(data) {
    this.playersId = data;
    this.players = {};
    
    this.playersId.forEach((playerId) => {
      const player = new Player(playerId);
      this.players[player.getId] = player;
    })
    
    console.log(this.players);
  }

}

module.exports = Challenge;