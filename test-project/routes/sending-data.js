const express = require("express");
const app = express.Router();
const controller = require("../controllers/sending-data-control");

app.get("/get-current-data", controller.currentData);
app.get("/get-done-data", controller.doneData);
app.get("/", controller.home);
module.exports = app;
