const fs = require('fs');
const Db = require('./db');

class Player {
  constructor(id) {
    const data = Db.getPlayer(id);
    
    console.log(data);
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Player;