module.exports = (db, bcrypt) => {
	var jwt = require('jsonwebtoken');
	var config = require('../config/auth.config');
	var login = function (req, res) {
		var userName = req.body.UserName;
		var password = req.body.Password;
		db.Models.User.getByUserName(userName).then((user) => {
			if (user == null) {
				res.status(403).send({
					success: 'false',
					message: 'user, passowrd combination not found'
				});
			} else {
				bcrypt.compare(password, user.Password).then(function (result) {
					if (result == true) {
						var token = jwt.sign({
							username: user.UserName
						},
						config.secret, {
							expiresIn: '24h'
						});
						res.status(200).send({
							success: 'false',
							message: 'Authentication',
							token: token
						});
					}
					res.status(403).send({
						success: 'false',
						message: 'Incorrect username or password'
					});
				});
			}
		});
	};
	var logout = function (req, res) {
		res.send('user logged out successfully!');
	};
	return {
		login,
		logout
	};
};