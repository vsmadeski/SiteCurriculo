let express = require("express");
let bodyParser = require("body-parser")
let    app  = express();

app.use(express.static(__dirname + "/public"));

let routes = require("./routes");

app.use(bodyParser.urlencoded({extended: true}));

app.use(routes);

app.listen(6969, function(req, res){
    console.log("Server listening on port 6969....");
});
