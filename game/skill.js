const Db = require('./db');
const Effect = require('./effect');


class Skill {
  constructor(id, caster) {
    this.data = Db.getElementById(id, 'effects');
    this.caster = caster;
    
    this.effects = {};
    
    for(let effectId of this.data.effects) {
      this.effects[effectId] = new Effect(effectId);
    }
  }
  
  applyEffects(target) {
    for(let effect in this.effects) {
      effect.applyEffect(target);
    }
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Skill;