let express = require("express");
let    app  = express();
let request = require("request");
let bodyParser = require("body-parser");

setInterval(() => {
    request.get("https://vsmadeski.herokuapp.com/");
},300000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

let routes = require("./routes");

app.use(routes);

app.listen(process.env.PORT, function(req, res){
    console.log("Server listening on port " + process.env.PORT + "...");
});
