const Db = require('./db');
const Beast = require('./beast');


class Player {
  constructor(id) {
    this.data = Db.getElementById(id, 'players');

    this.beasts = {};
    
    for(let beastId of this.data.beasts) {
      this.beasts[beastId.id] = new Beast(beastId.id);
    }
    
    console.log('Player : ', this.beasts);
  }
  
  
  getId() {
    return this.data.id;
  }

}

module.exports = Player;