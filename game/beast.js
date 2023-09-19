const Db = require('./db');
const Skill = require('./skill');


class Beast {
  constructor(id, playerData) {
    const data = Db.getElementById(id, 'beasts');
    
    let skills = {};
    
    for(let skillId of data.skills) {
      skills[skillId] = new Skill(skillId);
    }
  }
  
  removeHp(value) {
    if(this.data.hp > 0) this.data.hp -= value;
    console.log(`${this.data.name} lose ${value} HP! HP : ${this.data.hp}`);
  }
  
  getAtk() {
    return this.data.atk;
  }
  
  getDef() {
    return this.data.def;
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Beast;