const fs = require('fs');
const Db = require('./game/db');
const Challenge = require('./game/challenge');


let challenge = new Challenge('1', '2');
challenge.start();
