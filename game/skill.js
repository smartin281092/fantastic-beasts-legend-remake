const Db = require('./db');
const Store = require('./store');

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
  
  reducer(event, payload) {
    
  }
  
  play(challenge) {
    let target = challenge;
    for(let effect in this.effects) {
      effect.applyEffect(target);
    }
    
    if(this.data.active) {
      this.caster.setSeconds(this.calcSeconds);
      Store.dispatch('skill/active_casted', this.caster);
    }
  }
  
  calcSeconds() {
    return this.data.seconds * (3000 / (3000 + this.caster.getSpeed()));
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Skill;