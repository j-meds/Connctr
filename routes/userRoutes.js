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
	var user = new User(req.body);
	user.setPassword(req.body.password);
	user.save(function(err, result){
		if(err) {
			console.log(err);
			return res.status(500).send('Server error: Could not Add user to Database');
		};
		if(!result) return res.status(400).send('server could not interpret data, data malformed');
		res.send(user);
	})
});
router.post('/login', function(req,res){
	var user = req.body;
	console.log(user);
	
		User.findOne({email: user.email}, function(err, result){
		console.log(result)
			if(err) {
			console.log(err);
			return res.status(500).send('Server error: Could not Get user to Database');
		};
		if(!result) return res.status(400).send('User was not found in the database');
		if(result.checkPassword(user.password)) return res.send({err: "Invalid username and password combination."});
		res.send(result);
		})
	
})

module.exports = router;