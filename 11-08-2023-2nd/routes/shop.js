let express = require("express");
let router = express.Router();
const path = require("path");

router.get("/shop", (req, res) => {
  res.send("<h1>Welcome to the shop</h1>");
});
router.get("/contactus", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.htm"));
});
router.post("/success", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../", "views", "successMess.htm"));
});
module.exports = router;
