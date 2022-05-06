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
  var sql = "INSERT INTO informacoes (nome, endereco) VALUES ('Karen', 'Shopping')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Foi inserido o valor!");
  });
});