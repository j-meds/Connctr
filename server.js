var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

// models
require('./models/user'); 
//routes
var userRoutes = require('./routes/userRoutes');

// MongoLabs sets the correct URI in the environment
var db = process.env.MONGOLAB_URI || 'mongodb://localhost/connectr' ;

mongoose.connect(db, function(err){
	if(err) console.log(err)
		else console.log('connected to mongoDB : ' + db);
});

app.engine('.html', require('ejs').renderFile);

//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

// passport setup
app.use(passport.initialize());

app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index');
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/user', userRoutes);



http.listen(port, function(){
	console.log('Server is running on port: ' + port);
});

