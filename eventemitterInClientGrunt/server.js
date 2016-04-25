/// <reference path="typings/browser/ambient/express/index.d.ts" />
/// <reference path="typings/browser/ambient/express-serve-static-core/index.d.ts" />
/// <reference path="typings/browser/ambient/serve-static/index.d.ts" />
/// <reference path="typings/browser/ambient/node/index.d.ts" />
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  
  res.sendFile(__dirname+"/index.html");
});

app.get('/bundle.js', function (req, res) {
  
  res.sendFile(__dirname+"/bundle.js");
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});