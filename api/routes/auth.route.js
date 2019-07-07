module.exports = (db, bcrypt) => {
	var express = require('express');
	var router = express.Router();
	var authController = require('../controllers/auth.controller')(db,bcrypt);
	router.post('/', authController.login);
	router.delete('/', authController.logout);
	return router;
};