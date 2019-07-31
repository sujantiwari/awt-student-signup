module.exports = (db, middleware, bcrypt) => {
	var express = require('express');
	var router = express.Router();
	var authController = require('../controllers/auth.controller')(db,bcrypt);
	router.post('/', authController.login);
	router.post('/verify',middleware.Verify, authController.verify);
	return router;
};