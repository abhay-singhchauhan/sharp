const Sequelize = require("sequelize");

const sequelize = new Sequelize("task-data", "root", "Snjay@66", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
