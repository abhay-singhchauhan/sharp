const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-test",
  password: "Snjay@66",
});

module.exports = pool.promise();
