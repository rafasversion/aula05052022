var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM amizades WHERE endereco = 'Centro'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Foram deletados: " + result.affectedRows);
  });
});