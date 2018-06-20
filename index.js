var express = require('express');
var app = express();
var things= require('./things.js');
app.use('/',things);
app.get('/', function(req, res){
    res.send("Hello world");
});
app.listen(3000);