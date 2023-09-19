const Db = require('./db');
const Effect = require('./effect');


class Skill {
  constructor(id) {
    this.data = Db.getElementById(id, 'effects');
    
    this.effects = {};
    
    for(let effectId of this.data.effects) {
      this.effects[effectId] = new Effect(effectId);
    }
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Skill;