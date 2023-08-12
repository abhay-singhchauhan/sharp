let express = require("express");
const bodyParse = require("body-parser");
const router = require("./routes/admin-routes");
const router2 = require("./routes/user-routes");
const router3 = require("./routes/shop")
let app = express();

app.use(bodyParse.urlencoded({extended: false}));
app.use(router3);
app.use("/admin",router)
app.use(router2)

app.use((req,res)=>{
   res.status(404).send("<h1>Page not found</h1>")
})
app.listen(4000, ()=>{
    console.log('server is running')
})