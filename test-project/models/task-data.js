const sequelize = require("../util/db");
const Sequelize = require("sequelize");

let Task = sequelize.define("task", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  running: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Task;
