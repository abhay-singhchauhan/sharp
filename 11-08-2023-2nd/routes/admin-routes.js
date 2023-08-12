let express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next)=>{
    res.send(`<form action="/admin/product" method="POST">
    <input name="title" type="text" >
    <input name="size" type="number" >
    <button type="submit">submit</button>
 </form>`)
 
 })

 router.post("/product", (req, res, next)=>{
     console.log(req.body);
     res.redirect("/")
  })

  module.exports = router;