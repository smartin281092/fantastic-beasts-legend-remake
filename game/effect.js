const Db = require('./db');
const Formula = require('./formula');

class Effect {
  constructor(data, skill) {
    this.data = data;
    this.skill = skill;
    
    this.applyEffect();
  }
  
  applyEffect() {
    switch (this.data.id) {
      case "1":                          // Normal attack
        this.applyEffect_1();
        break;
    }
  }
  
  applyEffect_1() {
    let target = this.skill.caster.getPlayer().getOpponent().getTankiestBeast();
    let value = this.skill.caster.getAtk() * this.data.pAtk;
    value = Formula.calculDamage(value, this.skill.caster, target);
    
    this.target.removeHp(value)
  }
}

module.exports = Effect;