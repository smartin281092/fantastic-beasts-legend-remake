const Db = require('./db');


class Effect {
  constructor(data, target, caster) {
    this.data = data;
    this.target = target;
    this.caster = caster;
  }
}

module.exports = Effect;