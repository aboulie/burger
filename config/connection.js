var mysql = require("mysql");

try {
  var pass = require("./keys.js");
}
catch (error) {
  console.log("An error occured");
  console.log(error);
}

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_SECRET,
    database: process.env.MYSQL_DB
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;