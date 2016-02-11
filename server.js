// get packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose    = require('mongoose');
var jwt = require('jsonwebtoken');
var config = require('./config');
var apicontroller = require('./app/controller/apicontroller');


var port = process.env.PORT || 12345; 

mongoose.connect('mongodb://quochuan29:quochuan29@apollo.modulusmongo.net:27017/ty7Simuh');
app.set('superSecret', config.secret); 

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));


apicontroller(app);


app.listen(12345);
console.log('Magic happens at http://localhost:' + port);
