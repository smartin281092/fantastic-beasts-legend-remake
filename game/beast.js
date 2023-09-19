const Db = require('./db');
const Skill = require('./skill');


class Beast {
  constructor(data, playerId) {
    this.data = data;
    this.playerId = playerId;
    
    this.beastData = Db.getElementById(this.data.classId, 'beasts');
    
    this.skills = {};
    for(let skillId of this.data.skills) {
      this.skills[skillId] = new Skill(skillId);
    }
  }
  
  removeHp(value) {
    if(this.data.hp > 0) this.data.hp -= value;
    console.log(`${this.data.name} lose ${value} HP! HP : ${this.data.hp}`);
  }
  
  getAtk() {
    return (this.data.atk + this.beastData.atk);
  }
  
  getDef() {
    return (this.data.def + this.beastData.def);
  }
  
  getHp() {
    return (this.data.hp + this.beastData.hp);
  }
    
  getSpeed() {
    return (this.data.speed + this.beastData.speed);
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Beast;