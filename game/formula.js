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
  
  static calculDamage(value, caster, target, canCrit, isDodgeable) {
    let critMultiplier = 1;
    
    if(canCrit) {
      const randomCrit = Math.random();
      
      if(randomCrit <= caster.getCC()) {
        console.log('Critical Hit!')
        critMultiplier = 1.5;
      }
    }

    let num = Math.ceil((value * this.calculRes(target)) * critMultiplier);
    
    return num;
  }
  
  static calculRandomizedBaseDamage(value) {
    // the is between 0.9 and 1.1
    const randomRatio = 0.9 + Math.random() * 0.2;

    // Calculate damage using the random ratio
    return value * randomRatio;
  }
  
  static summoningSpeed(beast) {
    let num = (100 / (100 + beast.getSpeed())) * 100;
    
    return num;
  }
}

module.exports = Formula;