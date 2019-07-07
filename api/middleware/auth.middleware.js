var jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
var verify = (req, res, next) => {
	var token = req.headers['x-auth-token'];
	if (token) {
		if (token.startsWith('Bearer ')) {
			token = token.slice(7, token.length);
		}

		jwt.verify(token, config.secret, (err, decoded) => {
			if (err) {
				return res.status(401).json({
					success: false,
					message: 'Token is not valid'
				});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.status(401).json({
			success: false,
			message: 'Auth token is not supplied'
		});
	}
};

module.exports = {
	Verify: verify
};