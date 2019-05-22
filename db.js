const mysql = require('mysql');

const mySqlClient = mysql.createConnection({
  host     : "217.182.66.222",
  user     : "root",
  password : "root",
  database : "decouplaserdb"
});

module.exports.test = function (){
  
  var selectQuery = 'SELECT * FROM test';
  
  var sqlQuery = mySqlClient.query(selectQuery);
  
  sqlQuery.on("result", function(row) {
    console.log('myField1: ' + row.myField1);
    console.log('row: ' + row);
  });
  
  sqlQuery.on("end", function() {
    mySqlClient.end();
  });
  
  sqlQuery.on("error", function(error) {
    console.log(error);
  });
  
}



