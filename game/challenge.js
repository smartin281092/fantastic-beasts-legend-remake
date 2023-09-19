const Player = require('./player');
const Db = require('./db');


class Challenge {
  constructor(id) {
    this.data = Db.getElementById(id, 'challenges');
    this.players = {};
    
    for(let playerId of this.data.players) {
      this.players[playerId] = new Player(playerId);
    }
  }

}

module.exports = Challenge;