class Formula {
  constructor(){}
  
  static calculRes(target) {
    let num = 0;
    if(target.getDef() >= 0) {
      num = 100 / (100 + target.getDef());
    } else {
      num = 2 - (100 / (100 - target.getDef()))
    }
    
    return num;
  }
  
  static calculDamage(value, caster, target) {
    let num = Math.ceil(value * this.calculRes(target));
    
    return num;
  }
  
  static summoningSpeed(beast) {
    let num = (100 / (100 + beast.getSpeed())) * 100;
    
    return num;
  }
}

module.exports = Formula;