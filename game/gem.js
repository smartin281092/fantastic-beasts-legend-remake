const Db = require('./db');


class Gem {
  constructor(gemsArray, x, y) {
    this.gemsArray = gemsArray;
    this.x = x;
    this.y = y;
  }
  
  setColor() {}
}

module.exports = Gem;