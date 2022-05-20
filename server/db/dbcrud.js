const connect = require('./connect');

const db = connect();

const peoplecrud = {
    read: function(callback){
      const sql = "select * from keypeople"
      db.all(sql,[],callback);
    },

    
}

module.exports = peoplecrud