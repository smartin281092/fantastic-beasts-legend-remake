class Timeline {
  constructor(challenge) {
    this.challenge = challenge;
    this.timer = 0;
    
    this.roster = [];
    
    for(let beast in challenge.playerA.beasts) {
      this.roster.push(beast);
    }
        
    for(let beast in challenge.playerB.beasts) {
      this.roster.push(beast);
    }
    
    this.sort();
  }
  
  sort() {
    this.roster((beastA, beastB) => beastB.getSecond() - beastA.getSecond());
    console.log('Roster ordered list : ', this.roster)
  }
}

module.exports = Timeline;