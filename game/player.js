const Db = require('./db');
const Beast = require('./beast');


class Player {
  constructor(id) {
    this.data = Db.getElementById(id, 'players');

    this.opponent;
    this.beasts = [];
    
    for(let beast of this.data.beasts) {
      this.beasts.push(new Beast(beast, this));
    }
  }
  
  setOpponent(opponent) {
    this.opponent = opponent;
  }
  
  getOpponent() {
    return this.opponent;
  }
  
  getPseudo() {
    return this.data.pseudo;
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Player;