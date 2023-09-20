const Store = require('./store');


class Timeline {
  constructor(challenge) {
    this.challenge = challenge;
    this.timer = 0;
    
    this.roster = [];
    this.activeBeast;
    
    for(let beastId in challenge.playerA.beasts) {
      this.roster.push(challenge.playerA.beasts[beastId]);
    }
        
    for(let beastId in challenge.playerB.beasts) {
      this.roster.push(challenge.playerB.beasts[beastId]);
    }
    
    this.sort();
  }
  
  reducer(event, payload) {
    switch(event) {
      case `timeline/action`:
        this.next(payload);
        break;
      default:
        console.log('No reducer function found.')
    }
  }
  
  sort() {
    this.roster.sort((beastA, beastB) => {
      return beastA.getSeconds() - beastB.getSeconds();
    });
    
    console.log('Roster ordered list : ', this.roster[0].getSeconds(), this.roster[1].getSeconds());
  }
  
  next() {
    if(this.activeBeast) {
      this.roster.push(this.activeBeast);
      this.sort();
    }
    
    this.activeBeast = this.roster.shift();
    this.timer += this.activeBeast.getSeconds();
    this.activeBeast.resetSeconds();
  }
}

module.exports = Timeline;