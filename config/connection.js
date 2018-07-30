var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
  });

  connection.connect((err) => {
      if(err) {
          throw err;
      }
      console.log("MySql Connected")
  });

  module.exports = connection;