var express = require('express');
var app = express();
var dashboardRoute= require('./dashboard/dashboard.route');

app.get('/home', function(req, res){
   res.send("This is my home page!");
});
var login=require('./login');
app.use('/login',login);
//var logina=require('logina');
//app.use('/login/a',logina);
app.use('/dashboard',dashboardRoute);
app.listen(3000);