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
    
    Store.subscribe('beast/is_dead', this.reducer.bind(this));
  }
  
  reducer(event, payload) {
    switch(event) {
      case `beast/is_dead`:
        this.removeBeast(payload);
        break;
      default:
        console.log('No reducer function found.')
    }
  }
  
  removeBeast(beast) {
    this.deadBeasts.push(beast);

    for (let i = 0; i < this.aliveBeasts.length; i++) {
      if (this.aliveBeasts[i] === beast) {
        this.aliveBeasts.splice(i, 1);
        break;
      }
    }
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
  
  getBeastWithHighestHealth() {
     if (this.aliveBeasts.length === 0) {
        return null; // Return null if there are no alive beasts
      }

      return this.aliveBeasts.reduce((highestHealthBeast, currentBeast) => {
        // Compare the current beast's health with the highest health found so far
        if (currentBeast.getHp() > highestHealthBeast.getHp()) {
          return currentBeast; // Update the highest health beast if needed
        }
        return highestHealthBeast; // Otherwise, keep the current highest health beast
      }, this.aliveBeasts[0]); // Initialize with the first beast as the starting point
  }
  
  getBeastWithLowestHealth() {
     if (this.aliveBeasts.length === 0) {
      return null;
    }

      return this.aliveBeasts.reduce((lowestHealthBeast, currentBeast) => {
        if (currentBeast.getHp() < lowestHealthBeast.getHp()) {
          return currentBeast;
        }
        return lowestHealthBeast;
      }, this.aliveBeasts[0]);
  }
  
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