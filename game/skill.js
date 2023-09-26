const Db = require('./db');
const Store = require('./store');

const Effect = require('./effect');


class Skill {
  constructor(id, caster) {
    this.id = id;
    this.data = Db.getElementById(id, 'skills');
    
    this.caster = caster;
  }
  
  reducer(event, payload) {
    
  }
  
  play() {
    for(let effectId in this.data.effects) {
      new Effect(effectId, this);
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