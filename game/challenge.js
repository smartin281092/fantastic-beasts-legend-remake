const Player = require('./player');
const Timeline = require('./timeline');
const Db = require('./db');


class Challenge {
  constructor(playerA, playerB) {
    this.playerA = new Player(playerA, this);
    this.playerB = new Player(playerB, this);
    
    this.playerA.setOpponent(this.playerB);
    this.playerB.setOpponent(this.playerA);
    
    this.timeline;
  }
  
  start() {
    this.timeline = new Timeline(this);
    this.timeline.start();
  }
  
  gameOver() {
    console.log('Battle finish!')

    this.timeline.gameover = true;
  }
}

module.exports = Challenge;