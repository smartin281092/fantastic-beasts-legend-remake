const Db = require('./db');
const Effect = require('./effect');


class Beast {
  constructor(id) {
    const data = Db.getElementById(id, 'effects');
    
    let effects = {};
    
    for(let effectId of data.effects) {
      effects[effectId] = new Effect(effectId);
    }
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Beast;