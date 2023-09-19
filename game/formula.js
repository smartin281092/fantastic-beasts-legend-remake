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
    let num = value * this.calculRes(target);
    
    console.log('calculated damage : ', num);
    return num;
  }
}