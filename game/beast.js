const Db = require('./db');
const Skill = require('./skill');
const Formula = require('./formula');


class Beast {
  constructor(data, player) {
    this.data = data;
    this.player = player;
    this.beastData = Db.getElementById(this.data.classId, 'beasts');
    
    this.atk = this.data.atk + this.beastData.atk;
    this.def = this.data.def + this.beastData.def;
    this.hp = this.data.hp + this.beastData.hp;
    this.speed = this.data.speed + this.beastData.speed;
    this.summoningSpeed = Formula.summoningSpeed(this);
    this.seconds = this.summoningSpeed;
    
    this.skills = {};
    for(let skillId of this.beastData.skills) {
      this.skills[skillId] = new Skill(skillId, this);
    }
  }
  
  resetSeconds() {
    this.seconds = 0;
  }
  
  removeHp(value) {
    if(this.getHp() > 0) this.hp -= value;
    console.log(`${this.data.name} lose ${value} HP! HP : ${this.hp}`);
    
    if(this.hp <= 0) {
      console.log(`${this.beastData.name} from ${this.player.getPseudo()} is dead!`)
    }
  }
  
  getAtk() {
    return this.atk;
  }
  
  getDef() {
    return this.def;
  }
  
  getHp() {
    return this.hp;
  }
    
  getSpeed() {
    return this.speed;
  }
  
  getSeconds() {
    return this.seconds;
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Beast;