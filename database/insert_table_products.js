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
  var sql = "INSERT INTO products (name, id) VALUES ?";
  var values = [
    ['Chocolate Heaven', '154'],
    ['Tasty Lemons', '155'],
    ['Vanilla Dreams', '156']
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Números inseridos: " + result.affectedRows);
  });
});