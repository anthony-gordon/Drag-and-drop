var path = require("path");
var express = require("express");

var server = express();

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.json());

module.exports = server;
