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
  
  searchBeastByRole(role) {    
    return this.aliveBeasts.find(beast => beast.getRole() === role) || null;
  }
  
  getTankiestBeast() {
    const tankBeast = this.searchBeastByRole('tank');
    if (tankBeast) {
      return tankBeast;
    }

    // If there is no 'tank' role, get the beast with the highest health
    return this.getBeastWithHighestHealth();
  }
  
  getBeastWithHighestHealth() {}
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