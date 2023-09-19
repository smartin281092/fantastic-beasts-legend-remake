const Db = require('./db');


class Effect {
  constructor(data, caster) {
    this.data = data;
    this.caster = caster;
  }
  
  applyEffect(target) {
    switch (this.data.id) {
      case 1:                          // Normal attack
        this.applyEffect_1(target);
        break;
    }
  }
  
  applyEffect_1(target) {
    let 
    target.removeHp(value)
  }
}

module.exports = Effect;