var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = mongoose.Schema({
	email: {type: String, lowercase: true, unique: true},
	passwordHash: String,
	name: {type:String, lowercase: true},
	created: Date,
	Inbox: [{type: mongoose.Schema.Types.ObjectId, ref: 'Inbox'}],
	Uploads: [{type: mongoose.Schema.Types.ObjectId, ref: 'files'}]
});

// UserSchema.methods.generateJWT = function(){
// 	var exp = new Date();
// 	exp.setDate(exp.getDate() + 36500);
// 	return jwt.sign({
// 		id: this._id,
// 		username: this.username,
// 		exp: exp.getTime() / 1000
// 	}, 'secret');
// }

// UserSchema.methods.setPassword = function(password){
// 	this.salt = crypto.randomBytes(64)
// }

mongoose.model('User', UserSchema);