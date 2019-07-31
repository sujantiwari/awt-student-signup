module.exports = (db, bcrypt) => {
	var jwt = require('jsonwebtoken');
	var config = require('../config/auth.config');
	var verify = function (req, res) {
		console.log(200);
		res.status(200).send({
			success: 'true',
			message: 'Verification Successful'
		});
	};
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
								Username: user.UserName,
								UserRole: user.UserType
							},
							config.secret, {
								expiresIn: '24h'
							});
						res.status(200).send({
							success: 'true',
							message: 'Authentication Successful',
							token: token
						});
					} else {
						res.status(403).send({
							success: 'false',
							message: 'Incorrect username or password'
						});
					}
				});
			}
		});
	};
	return {
		login,
		verify
	};
};