const Db = require('./db');
const Formula = require('./formula');

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
    let value = Formula
    target.removeHp(value)
  }
}

module.exports = Effect;