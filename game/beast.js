const Db = require('./db');


class Beast {
  constructor(id) {
    const data = Db.getElementById(id, 'beasts');
    
    let skills = {};
    
    
    console.log(data);
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Beast;