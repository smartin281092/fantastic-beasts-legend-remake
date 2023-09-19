const fs = require('fs');

class Db {
  constructor() {}
  
  // On va récupérer les données du joueur dans la table players.json  
  getElementById(id, table) {
    const jsonData = fs.readFileSync(`./${table}.json`, 'utf-8');
    const data = JSON.parse(jsonData);
    const element = {};
    
    for (const i of data[table]) {
      if(i.id === id) {
        element = i;
        continue;
      }
    }

    return element;
  }

}

module.exports = Db;