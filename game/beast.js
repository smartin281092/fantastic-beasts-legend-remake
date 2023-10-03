const Db = require('./db');
const Store = require('./store');

const Skill = require('./skill');
const Formula = require('./formula');



class Beast {
  constructor(data, player) {
    this.data = data;
    this.player = player;
    this.beastData = Db.getElementById(this.data.classId, 'beasts');
    this.isAlive = true;
    
    this.atk = this.data.atk + this.beastData.atk;
    this.def = this.data.def + this.beastData.def;
    this.hp = this.data.hp + this.beastData.hp;
    this.speed = this.data.speed + this.beastData.speed;
    this.summoningSpeed = Formula.summoningSpeed(this);
    this.seconds = this.summoningSpeed;
    
    this.skills = [];
    for(let i = 0; i < this.beastData.skills.length; i++) {
      this.skills.push({
        skill: new Skill(this.beastData.skills[i].id, this),
        priority: this.beastData.skills[i].priority
      })
    }
    
    this.skills.sort((a, b) => a.priority - b.priority); 
    
    Store.subscribe('timeline/time_elapsed', this.reducer.bind(this));
  }
  
  reducer(event, payload) {
    switch(event) {
      case `timeline/time_elapsed`:
        this.updateSeconds(payload);
        break;
      default:
        console.log('No reducer function found.')
    }
  }
  
  play() {
    for(let entry of this.skills) {
      if(entry.skill.cooldown <= 0) {
        entry.skill.play();
        break;
      } else {
        console.log(entry.skill.cooldown)
      }
    }
  }
  
  updateSeconds(seconds) {
    this.seconds += seconds;
  }
  
  resetSeconds() {
    this.seconds = 0;
  }
  
  setSeconds(value) {
    this.seconds = value;
  }
  
  removeHp(value) {
    if(this.getHp() > 0) this.hp -= value;
    console.log(`${this.getName()} loses ${value} HP! Remaining HP : ${this.hp}`);
    
    if(this.hp <= 0) {
      this.isDead();
    }
  }
  
  isDead() {
    this.isAlive = false;
    Store.dispatch('beast/is_dead', this);
    console.log(`${this.beastData.name} from ${this.player.getPseudo()} is dead!`)
  }
  
  getHit() {
    return this.data.hit;
  }
  
  getDodge() {
    return this.data.dod;
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
  
  getPlayer() {
    return this.player;
  }
  
  getRole() {
    return this.role;
  }
  
  getName() {
    return this.beastData.name;
  }
  
  getCC() {
    return this.data.cc;
  }
  
  getId() {
    return this.data.id;
  }

}

module.exports = Beast;