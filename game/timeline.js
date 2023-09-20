class Timeline {
  constructor(challenge) {
    this.challenge = challenge;
    this.timer = 0;
    
    this.roster = [];
    
    for(let beastId in challenge.playerA.beasts) {
      this.roster.push(challenge.playerA.beasts[beastId]);
    }
        
    for(let beastId in challenge.playerB.beasts) {
      this.roster.push(challenge.playerB.beasts[beastId]);
    }
    
    this.sort();
  }
  
  sort() {
    this.roster.sort((beastA, beastB) => {
      return beastA.getSecond() - beastB.getSecond();
    })
    console.log('Roster ordered list : ', this.roster[0].getSecond(), this.roster[1].getSecond());
  }
}

module.exports = Timeline;