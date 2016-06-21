var express = require("express");
var app = express();

app.enable("trust proxy");
app.get("/",
    function(req, res) {
        var ret = {
            "ipaddress": req.ip,
            "language": req.get("Accept-Language").split(",", 1)[0],
            "software": req.get("User-Agent").split(/[()]/, 2)[1]
        };
        
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(ret));
    });

var port = process.env.PORT || 8080;
app.listen(port,
    function() {
        console.log("Node.js listening on port " + port + "...");
    });