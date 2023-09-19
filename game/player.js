const Db = require('./db');
const Beast = require('./beast');


class Player {
  constructor(id) {
    const data = Db.getElementById(id, 'players');

    let beasts = {};
    
    for(let beastId of data.beasts) {
      beasts[beastId.id] = new Beast(beastId.id);
    }
    
    console.log('Player : ', beasts);
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Player;