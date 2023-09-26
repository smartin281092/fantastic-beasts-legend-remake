const Db = require('./db');
const Formula = require('./formula');

class Effect {
  constructor(id, caster) {
    this.id = id;
    this.caster = caster;
    
    
    this.applyEffect();
  }
  
  applyEffect() {
    console.log('id effect : ', this.id);
    switch (this.id) {
      case 1:                          // Normal attack
        this.applyEffect_1();
        break;
    }
  }
  
  applyEffect_1() {
    let target = this.caster.getPlayer().getOpponent().getTankiestBeast();
    let value = this.caster.getAtk() * this.data.pAtk;
    value = Formula.calculDamage(value, this.caster, this.target);
    
    this.target.removeHp(value)
  }
}

module.exports = Effect;