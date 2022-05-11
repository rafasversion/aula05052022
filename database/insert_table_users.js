var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (name, favorite_product) VALUES ?";
  var values = [
    ['John', '154'],
    ['Petter', '154'],
    ['Amy', '155'],
    ['Hannah', ''],
    ['Michael', '']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Números inseridos: " + result.affectedRows);
  });
});