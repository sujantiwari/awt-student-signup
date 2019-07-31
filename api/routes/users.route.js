module.exports = (db,middleware, bcrypt) => {
	var express = require('express');
	var router = express.Router();
	var userController = require('../controllers/user.controller')(db, bcrypt);
	router.post('/',middleware.Verify, userController.addNewUser);
	router.get('/:username',middleware.Verify, userController.getUserDetails);
	router.get('/',middleware.Verify, userController.getAllUsers);
	router.delete('/:username',middleware.Verify, userController.deleteUser);
	router.put('/:username',middleware.Verify, userController.updateUser);
	return router;
};