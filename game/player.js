const Db = require('./db');
const Beast = require('./beast');


class Player {
  constructor(id) {
    this.data = Db.getElementById(id, 'players');

    this.beasts = {};
    
    for(let beast of this.data.beasts) {
      this.beasts[beast.id] = new Beast(beast, this);
    }
  }
  
  getPseudo() {
    return this.data.pseudo;
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Player;