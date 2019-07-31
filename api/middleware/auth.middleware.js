var jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
var verify = (req, res, next) => {
	var token = req.headers['x-auth-token'];
	console.log(token);
	if (token) {
		jwt.verify(token, config.secret, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					success: false,
					message: 'Token invalid'
				});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.status(401).json({
			success: false,
			message: 'Auth token not supplied'
		});
	}
};

module.exports = {
	Verify: verify
};