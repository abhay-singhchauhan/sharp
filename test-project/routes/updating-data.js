const express = require("express");

const controller = require("../controllers/updating-data-control");
const app = express.Router();
app.post("/addingData", controller.addingData);
app.get("/mark/:id", controller.markAsDone);
app.get("/delete/:id", controller.delete);
module.exports = app;
