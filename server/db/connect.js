const sqlite3 = require('sqlite3')



function connect(){
    db = new sqlite3.Database("database.db", (err) => {
        if (err) {
          console.log('Could not connect to database', err)
          
        } else {
          console.log('Connected to database')
          createTable()
          console.log('synchronized')
        }
      });

      return db;
}

function createTable(){
    const sql = `
    CREATE TABLE IF NOT EXISTS keypeople(
      sno INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      designation TEXT,
      photo TEXT,
      place TEXT
    )`
    return db.run(sql)
}

module.exports = connect;