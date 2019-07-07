module.exports = (db,middleware) => {
	var express = require('express');
	var router = express.Router();
	var signupController = require('../controllers/signup.controller')(db);
	router.post('/', signupController.addNewSignup);
	router.get('/', signupController.getAllSignUpDetails);
	router.get('/:id', signupController.getSignUpDetails);
	router.get('/report', signupController.getSignupReport);
	return router;
};