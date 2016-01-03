var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

//middleware
var auth = ({
	userProperty: 'payload',
	secret: 'secret'
});

router.post('/register', function(req, res){
	console.log(req.body);
});

module.exports = router ;