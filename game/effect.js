const Db = require('./db');
const Formula = require('./formula');
const Store = require('./store');


class Effect {
  constructor(data, skill) {
    this.data = data;
    this.skill = skill;
    this.ueid = Store.generateUeid();
    
    this.applyEffect();
  }
  
  applyEffect() {
    switch (this.data.id) {
      case "1":                          // Normal attack
        this.applyEffect_1();
        break;
      case "2":
        this.applyEffect_2();
        break;
    }
  }
  
  applyEffect_1() {
    let target = this.skill.caster.getPlayer().getOpponent().getTankiestBeast();
    
    let value = (this.skill.caster.getAtk() * this.data.pAtk) / 100;
    let dmg = Formula.calculDamage(value, this.skill.caster, target, this.ueid, true, this.data.isDodgeable);
    
    target.removeHp(dmg)
  }
  
  applyEffect_2(notified = false) {
    if(notified) {
      // create new effect id 1 when critical hit notified
    } else {
      Store.subscribe(`skill_${this.ueid}/cc`, this.applyEffect_2.bind(this));
      
      // apply the attack and include the critical hit chance bonus of the spell
    }
  }
}

module.exports = Effect;