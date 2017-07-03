var express = require('express');
var path 	= require("path")

/*setting up the express server*/

var app = express();

app.use("/",express.static(path.join(__dirname,'../')));
var server = app.listen(4000, function () {
  console.log ('Server started on port: ' + server.address().port);
});//server start up
