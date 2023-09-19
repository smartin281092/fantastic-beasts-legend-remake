const Db = require('./db');
const Beast = require('./beast');


class Player {
  constructor(id) {
    const data = Db.getElementById(id, 'players');
    
    let beasts = {};
    
    for(let beastId of data.beasts) {
      beasts[beastId] = new Beast(beastId);
    }
    
    console.log(beasts);
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Player;