const fs = require('fs');
const Db = require('./db');

class Player {
  constructor(id) {
    const data = Db.getElementById(id, 'players');
    
    console.log(data);
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Player;