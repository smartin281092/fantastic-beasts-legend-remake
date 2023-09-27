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
    console.log(`${this.caster.getName()} from ${this.caster.getPlayer().getPseudo()} casts ${this.data.name}!`);

    for(let effectId of this.data.effects) {
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