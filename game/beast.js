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
      this.skills.push(new Skill(this.beastData.skills[i], this));
    }
  }
  
  play() {
    console.log('Cast skill!');
    this.skills[0].play();
  }
  
  resetSeconds() {
    this.seconds = 0;
  }
  
  setSeconds(value) {
    this.seconds = value;
  }
  
  removeHp(value) {
    if(this.getHp() > 0) this.hp -= value;
    console.log(`${this.data.name} lose ${value} HP! HP : ${this.hp}`);
    
    if(this.hp <= 0) {
      this.isDead();
    }
  }
  
  isDead() {
    this.isAlive = false;
    Store.dispatch('beast/is_dead', this);
    console.log(`${this.beastData.name} from ${this.player.getPseudo()} is dead!`)
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
  
  getId() {
    return this.data.id;
  }

}

module.exports = Beast;