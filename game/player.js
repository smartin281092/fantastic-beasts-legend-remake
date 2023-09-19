const Db = require('./db');
const Beast = require('./beast');


class Player {
  constructor(id) {
    const data = Db.getElementById(id, 'players');
    console.log('Player : ', data, data.beasts);
    let beasts = {};
    /*
    for(let beastId of data.beasts) {
      beasts[beastId.id] = new Beast(beastId.id);
    }
    
    console.log(beasts);*/
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Player;