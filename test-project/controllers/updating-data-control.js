const Task = require("../models/task-data");
const path = require("path");
exports.addingData = async (req, res, next) => {
  console.log(req.body);
  const task = await Task.create({
    name: req.body.todoname,
    description: req.body.tododescription,
    running: false,
  });
  res.redirect("/");
};

exports.markAsDone = (req, res, next) => {
  console.log(req.params);
  Task.update(
    {
      running: true,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.redirect("/");
};

exports.delete = async (req, res, next) => {
  await Task.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/");
};
