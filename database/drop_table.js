var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE informacoes";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tabela deledata!"); //como a tabela foi deletada na aula ela não aparece mais, depois criei outra (amizades) para continuar com os comandos 
  });
});