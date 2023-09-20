const Player = require('./player');
const Timeline = require('./timeline');
const Db = require('./db');


class Challenge {
  constructor(playerA, playerB) {
    this.playerA = new Player(playerA);
    this.playerB = new Player(playerB);
    
    this.playerA.setOpponent(this.playerB);
    this.playerB.setOpponent(this.playerA);
    
    this.timeline;
  }
  
  start() {
    this.timeline = new Timeline(this);
  }
}

module.exports = Challenge;