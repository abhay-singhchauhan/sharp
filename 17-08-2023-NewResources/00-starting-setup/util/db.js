const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-test", "root", "Snjay@66", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
