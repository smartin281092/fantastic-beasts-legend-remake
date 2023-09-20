const Store = require('./store');


class Timeline {
  constructor(challenge) {
    this.challenge = challenge;
    this.timer = 0;
    this.gameover = false;
    
    this.roster = [];
    this.deadList = [];
    this.activeBeast;
        
    for(let beast of challenge.playerA.beasts) {
      this.roster.push(beast);
    }
        
    for(let beast of challenge.playerB.beasts) {
      this.roster.push(beast);
    }
    
    
    this.sort();
    this.next();
    
    Store.subscribe('skill/active_casted', this);
    Store.subscribe('beast/is_dead', this);
  }
  
  reducer(event, payload) {
    switch(event) {
      case `skill/active_casted`:
        this.next(payload);
        break;
      case `beast/is_dead`:
        this.removeBeast(payload);
        break;
      default:
        console.log('No reducer function found.')
    }
  }
  
  sort() {
    this.roster.sort((beastA, beastB) => {
      return beastA.getSeconds() - beastB.getSeconds();
    });
  }
  
  next() {
    if(this.gameover) return;
    
    if(this.activeBeast) {
      this.roster.push(this.activeBeast);
      this.sort();
    }
    
    this.activeBeast = this.roster.shift();
    this.timer += this.activeBeast.getSeconds();
    this.activeBeast.resetSeconds();
    this.activeBeast.play();
  }
  
  removeBeast(beast) {
    this.deadList.push(beast);

    for (let i = 0; i < this.roster.length; i++) {
      if (this.roster[i] === beast) {
        this.roster.splice(i, 1);
        
        if(this.roster.length == 0) {
          this.gameover = true;
          console.log('Battle finish!')
        }

        break;
      }
    }

    if(this.activeBeast == beast) {
      if(this.roster.length > 1) {
        this.activeBeast = null;
        this.next();
      } else {
        this.gameover = true;
        console.log('Battle finish!')
      }
    }
  }
}

module.exports = Timeline;