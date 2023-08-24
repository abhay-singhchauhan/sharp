const Task = require("../models/task-data");
const path = require("path");
exports.currentData = async (req, res, data) => {
  let tasks = await Task.findAll({
    where: {
      running: false,
    },
  });
  res.json(tasks);
};

exports.doneData = async (req, res, data) => {
  let tasks = await Task.findAll({
    where: {
      running: true,
    },
  });
  res.json(tasks);
};

exports.home = (req, res, data) => {
  res.sendFile(path.join(__dirname, "../", "/views", "/index.html"));
};
