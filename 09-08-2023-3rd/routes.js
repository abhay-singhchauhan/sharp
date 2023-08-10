let fs = require("fs");

function routes (req, res){
    let u = req.url;
    if(u === "/") {
      res.setHeader('Content-Type', 'text/html')
      let data = fs.readFileSync("data.txt", "utf8");
      res.write("<h3>")
      res.write(data)
      res.write("</h3>")
       res.write("<form action='/message' method='POST'><input type='text' name='message'><button>Submit</button></form>");
      return res.end();
    }
    if(u === "/message" && req.method === "POST"){
       let body = [];
       req.on("data", (chunk)=>{
         body.push(chunk)
       })
      return req.on("end", ()=>{
         const dataPar = Buffer.concat(body).toString();
         let send = dataPar.split("=")[1]
         console.log(dataPar);
         fs.writeFileSync("data.txt", send);
         res.statusCode = 302;
         res.setHeader("Location", "/")
         res.end()
       })
    }
      
      res.end("inside message")
}
module.exports = routes;