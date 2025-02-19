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
  
  getTargets(id) {
    switch (this.skill.getTargetsId()) {
      case "singleEnemyTank":            // Get the tankiest opponent target
        return this.skill.caster.getPlayer().getOpponent().getTankiestBeast();
        break;
    }
  }
  
  
  applyEffect_1() {
    let target = this.skill.caster.getPlayer().getOpponent().getTankiestBeast();
    
    let value = (this.skill.caster.getAtk() * this.data.pAtk) / 100;
    let dmg = Formula.calculDamage(value, this.skill.caster, target, this, true, this.data.isDodgeable);
    
    target.removeHp(dmg)
  }
  
  applyEffect_2(notified = false) {
    if(notified) {
      let effect = Db.getElementById(this.data.comboEffectId, 'effects');
      
      new Effect(effect, this.skill);
    } else {
      Store.subscribe(`skill_${this.ueid}/cc`, this.applyEffect_2.bind(this));
      
      let target = this.skill.caster.getPlayer().getOpponent().getTankiestBeast();
    
      let value = (this.skill.caster.getAtk() * this.data.pAtk) / 100;
      let dmg = Formula.calculDamage(value, this.skill.caster, target, this, true, this.data.isDodgeable);

      target.removeHp(dmg)
    }
  }
}

module.exports = Effect;