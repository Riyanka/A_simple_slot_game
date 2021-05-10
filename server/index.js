"use strict";
var handler = require("./serviceHandler");
var express = require("express");
var app = express();
var port = 9000;
//Serves static content from folder "client"
app.use(express.static("client"));
//Called on application load for getting the initial configuration
app.get("/config", handler.getInitialCOnfig);
//Called on button click to get the set of randomised number and the bonus flag
app.get("/result", handler.getResult);
//listening port and message
app.listen(port, function () { return console.log("App listening on port " + port + "!"); });
