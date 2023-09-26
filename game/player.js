const Db = require('./db');
const Store = require('./store');

const Beast = require('./beast');


class Player {
  constructor(id) {
    this.data = Db.getElementById(id, 'players');

    this.opponent;
    this.aliveBeasts = [];
    this.deadBeasts = [];
    
    for(let beast of this.data.beasts) {
      this.aliveBeasts.push(new Beast(beast, this));
    }
    
    Store.subscribe('beast/is_dead', this);
  }
  
  searchBeastType
  
  getTankiestBeast() {
    let beast
    for(let beast of this.data.beasts) {
      this.aliveBeasts.push(new Beast(beast, this));
    }

  }
  
  getBeastWithLowestHealth() {}
  getBeastWithHighestAtk() {}
  
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