var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE informacoes SET endereco = 'Loja de celulares' WHERE endereco = 'Shopping'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " alterados");
  });
});