let express = require("express");
const bodyParse = require("body-parser");
let app = express();
 
app.use(bodyParse.urlencoded({extended: false}));


app.use("/add-product", (req, res, next)=>{
   res.send(`<form action="/product" method="POST">
   <input name="title" type="text" >
   <input name="size" type="number" >
   <button type="submit">submit</button>
</form>`)

})
app.post("/product", (req, res, next)=>{
    console.log(req.body);
    res.redirect("/add-product")
 })

 app.listen(4000, ()=>{
    console.log('server is running')
 })