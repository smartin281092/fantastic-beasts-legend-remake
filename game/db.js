const fs = require('fs');
const path = require('path');


class Db {
  constructor() {}
  
  // On va récupérer les données du joueur dans la table players.json  
  static getElementById(id, table) {
    console.log('db', id, table);
    
    try {
      const jsonPath = path.join(__dirname, `${table}.json`);
      const jsonData = fs.readFileSync(jsonPath, 'utf-8');
      const data = JSON.parse(jsonData);

      let element = {};

      for (const i of data[table]) {
        if(i.id === id) {
          element = i;
          continue;
        }
      }
      
      return element;
    } catch (error) {
      console.log(error);
    }

  }

}

module.exports = Db;