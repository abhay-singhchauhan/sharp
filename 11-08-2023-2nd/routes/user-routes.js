let express = require("express");
let routes = express.Router();

routes.get("/", (req,res)=>{
  res.send("<h1>Welcome to my app</h1>")
});

module.exports = routes;