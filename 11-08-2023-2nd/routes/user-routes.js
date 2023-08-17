let express = require("express");
let routes = express.Router();
let path = require("path");

routes.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.htm"));
});

module.exports = routes;
