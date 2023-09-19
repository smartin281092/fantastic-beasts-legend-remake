const Db = require('./db');
const Skill = require('./skill');


class Beast {
  constructor(id) {
    const data = Db.getElementById(id, 'beasts');
    
    let skills = {};
    
    for(let skillId of data.skills) {
      skills[skillId] = new Skill(skillId);
    }
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Beast;