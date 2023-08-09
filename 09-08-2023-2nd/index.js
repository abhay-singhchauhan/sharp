const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/home"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Welcome to Home</h1>")
        
    }else if(req.url === "/about"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Welcome to About Us page</h1>")
        
    }else if(req.url === "/node"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Welcome to my Node Js project</h1>")
        
    }
    res.end();
})
server.listen(4000);