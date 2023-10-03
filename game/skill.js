const Db = require('./db');
const Store = require('./store');

const Effect = require('./effect');


class Skill {
  constructor(id, caster) {
    this.id = id;
    this.data = Db.getElementById(id, 'skills');
    this.cooldown = 0;
    
    this.caster = caster;
    
    Store.subscribe('timeline/time_elapsed', this.reducer.bind(this));
  }
  
  reducer(event, payload) {
    switch(event) {
      case `timeline/time_elapsed`:
        this.updateSeconds(payload);
        break;
      default:
        console.log('No reducer function found.')
    }
  }
  
  play() {
    this.cooldown += this.data.cd;
    console.log(`${this.caster.getName()} from ${this.caster.getPlayer().getPseudo()} casts ${this.data.name}!`);

    for(let effectId of this.data.effects) {
      let effect = Db.getElementById(effectId, 'effects');
      
      new Effect(effect, this);
    }
    
    if(this.data.active) {
      this.caster.setSeconds(this.calcSeconds);
      Store.dispatch('skill/active_casted', this.caster);
    }
  }
  
  updateSeconds(seconds) {
    this.cooldown += seconds;
    if(this.cooldown < 0) this.cooldown = 0;
  }

  
  calcSeconds() {
    return this.data.seconds * (3000 / (3000 + this.caster.getSpeed()));
  }
  
  getTargetsId() {
    return this.data.targets;
  }
  
  getCD() {
    return this.cooldown;
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Skill;