const fs = require('fs');
const path = require('path');


class Db {
  constructor() {}
  
  static getElementById(id, table) {    
    try {
      const jsonPath = path.join(__dirname, `./db/${table}.json`);
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