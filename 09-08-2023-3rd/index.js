let http = require("http");
let r = require("./routes.js")

let server = http.createServer(r);

server.listen(4000);