let express= require("express");
let router = express.Router();

router.get("/shop",(req,res)=>{
    res.send("<h1>Welcome to the shop</h1>")
})

module.exports = router;