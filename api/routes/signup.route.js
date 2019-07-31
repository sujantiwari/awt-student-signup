module.exports = (db,middleware) => {
	var express = require('express');
	var stringify = require('csv-stringify');
	var router = express.Router();
	var signupController = require('../controllers/signup.controller')(db,stringify);
	router.post('/', signupController.addNewSignup);
	router.delete('/', signupController.deleteRequest);
	router.delete('/verify', signupController.verifyAndDeleteData);
	router.delete('/delete/:id', signupController.deleteSignup);
	router.get('/', signupController.getAllSignUpDetails);
	router.get('/:id', signupController.getSignUpDetails);
	router.get('/all/report',middleware.Verify, signupController.getSignupReport);
	router.get('/all/report/file',middleware.Verify, signupController.getSignUpReportFile);
	return router;
};