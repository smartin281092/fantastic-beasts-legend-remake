const fs = require('fs');
const Db = require('./db');

class Player {
  constructor(id) {
    console.log(id)
    const data = Db.getElementById(id, 'players');
    
    console.log(data);
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Player;