const Db = require('./db');
const Formula = require('./formula');

class Effect {
  constructor(data, caster) {
    this.data = data;
    this.caster = caster;
  }
  
  applyEffect() {
    switch (this.data.id) {
      case 1:                          // Normal attack
        this.applyEffect_1();
        break;
    }
  }
  
  applyEffect_1() {
    let target = this.caster.getPlayer().getOpponent().beast
    let value = this.caster.getAtk() * this.data.pAtk;
    value = Formula.calculDamage(value, this.caster, this.target);
    
    this.target.removeHp(value)
  }
}

module.exports = Effect;