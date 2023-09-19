const Db = require('./db');
const Effect = require('./effect');


class Skill {
  constructor(id, caster) {
    this.id = id;
    this.data = Db.getElementById(id, 'skills');
    
    this.caster = caster;
    
    this.effects = {};
    
    for(let effectId of this.data.effects) {
      this.effects[effectId] = new Effect(effectId);
    }
  }
  
  play(challenge) {
    let target = challenge;
    for(let effect in this.effects) {
      effect.applyEffect(target);
    }
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Skill;