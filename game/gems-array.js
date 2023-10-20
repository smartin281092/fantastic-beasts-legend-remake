const Db = require('./db');


class GemsArray {
  static width = 6;
  static height = 5;
  static minStreak = 3;
  static gemColors = 6;
  
  constructor() {
    this.gameArray = [];
    this.removeMap = [];
    this.matchedGems = [];
  }
}

module.exports = GemsArray;