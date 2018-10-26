let express = require("express");
let bodyParser = require("body-parser")
let    app  = express();

app.use(express.static(__dirname + "/public"));

let routes = require("./routes");

app.use(bodyParser.urlencoded({extended: true}));

app.use(routes);

app.listen(process.env.PORT, function(req, res){
    console.log("Server listening on port " + process.env.PORT + "...");
});
