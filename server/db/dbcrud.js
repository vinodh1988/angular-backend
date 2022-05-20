const connect = require('./connect');

const db = connect();

const peoplecrud = {
    read: function(callback){
      const sql = "select * from keypeople"
      db.all(sql,[],callback);
    },

    add : function(keypeople,callback){
        const sql = "insert into keypeople(name,designation,place,photo) values(?,?,?,?)";

        db.run(sql,[keypeople.name,keypeople.designation,keypeople.place,keypeople.photo],callback);
    }

    
}

module.exports = peoplecrud