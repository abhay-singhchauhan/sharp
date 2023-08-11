let express = require("express");
let app = express();

app.use((req,res,next)=>{
    console.log("hi")
    next()
})

app.use((req,res,next)=>{
    console.log("second one")
    res.send("<h1>Its Abhay Here</h1>")
})

app.listen(4000)