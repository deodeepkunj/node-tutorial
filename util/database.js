const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  port: 3306,
  password: "Asdf@24031994",
});

module.exports = pool.promise();
