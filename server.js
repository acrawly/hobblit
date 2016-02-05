//BASE SETUP
//================================

//CALL THE PACKAGES --------------

var express = require('express'); //call express
var app = express(); //define our app using express
var bodyParser = require('body-parser'); //get body-parser
var morgan = require('morgan'); //used to see requests
var config = require('./config.js');
var path = require('path');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : config.database_URL,
    user     : config.database_user,
    password : config.database_password,
    database : config.database,
    charset  : config.database_charset
  }
});


//APP CONFIGURATION
//================================
//use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//configure our app to handle CORS requests
app.use(function(req, res, next){
    //TO-DO add in if statement to handle if the request is an options request
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \Authorization');
    next();
});

//log all requests to the console
app.use(morgan('dev'));



//set static files location
//used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

//ROUTES for API
//============================================

//API ROUTES ---------------------------------
//var apiRoutes = require('./app/routes/api.js')(app, express);
//app.use('/api', apiRoutes);


//MAIN CATCHALL ROUTE -----------------
//SEND USERS TO FRONTEND --------------
//has to be registered after API ROUTES
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/app/index.html'));
});

//START THE SERVER
//=================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port);
