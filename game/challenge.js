const Player = require('./player');
const Db = require('./db');


class Challenge {
  constructor(id) {
    const data = Db.getElementById(id, 'challenges');
    const players = {};
    
    for(let player of data.players) {
      
    }
    console.log(data);
  }

}

module.exports = Challenge;