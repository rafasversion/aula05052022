var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado!");
  var sql = "CREATE TABLE amizades (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), endereco VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tabela criada");
  });
});