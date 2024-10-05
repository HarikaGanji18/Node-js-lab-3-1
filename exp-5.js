var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "12345678",
});
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("CREATE db1", function (err, result) {
if (err) throw err;
console.log("Database created");
});
var sql = "CREATE TABLE emp1 (empid varchar(255),empname varchar(255), designations varchar(255),department varchar(255),salary varchar(255))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table created");
});
var sql = "INSERT INTO emp1 (empid,empname, designations,department,salary) VALUES ('1','XYZ','Sr.Manager','Marketing', 60000)";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("1 record inserted");
});
con.query("SELECT * FROM employee", function (err, result, fields) {
if (err) throw err;
console.log(result);
});
});
