var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var userSchema = mongoose.Schema({
	email: {type: String, lowercase: true, unique: true},
	passwordHash: String,
	name: {type:String, lowercase: true},
	created: Date,
	Inbox: [{type: mongoose.Schema.Types.ObjectId, ref: 'Inbox'}]
})