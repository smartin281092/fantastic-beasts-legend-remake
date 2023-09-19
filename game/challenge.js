const Player = require('./player');
const Db = require('./db');


class Challenge {
  constructor(id) {
    const data = Db.getElementById(id, 'challenges');
    let players = {};
    
    for(let playerId of data.players) {
      players[playerId] = new Player(playerId);
    }
    
    console.log(players);
  }

}

module.exports = Challenge;