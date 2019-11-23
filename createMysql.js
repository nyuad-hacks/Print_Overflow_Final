var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  con.query("USE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database mydb selected");
  });

  con.query("DROP TABLE mytable", function (err, result) {
    if (err) throw err;
    console.log("mytable dropped");
  });

  var sql = "CREATE TABLE IF NOT EXISTS mytable (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), netid VARCHAR(30), pages INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  var sql = "INSERT IGNORE INTO mytable (name,netid,pages) VALUES ('Daniel', 'hsj276@nyu.edu','307'),('Yeojin','yj1254@nyu.edu','503'),('Zayd','zm994@nyu.edu','242'),('Adilet','am10044@nyu.edu','787'),('Alejandra','atr313@nyu.edu','111'),('Nhi','npl243@nyu.edu','499'),('Jack','jwb475@nyu.edu','912'),('Pedro','pv850@nyu.edu','999'),('Paulin','pac469@nyu.edu','6'),('Mohammed','mao476@nyu.edu','33'),('Prince','pla252@nyu.edu','19'),('Meskereem','mza232@nyu.edu','25'),('Lemon','ma5081@nyu.edu','13'),('Jun','jl10285@nyu.edu','19'),('Phillip','pw1287@nyu.edu','0')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record inserted");
  });

  // con.query("UPDATE mytable SET netid='hsj276@nyu.edu' WHERE name='Daniel'");
  // con.query("UPDATE mytable SET netid='yj1254@nyu.edu' WHERE name='Yeojin'");
  // con.query("UPDATE mytable SET netid='zm994@nyu.edu' WHERE name='Zayd'");

});

module.exports = con;
