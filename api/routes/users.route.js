module.exports = (db,middleware, bcrypt) => {
	var express = require('express');
	var router = express.Router();
	var userController = require('../controllers/user.controller')(db, bcrypt);
	router.post('/', userController.addNewUser);
	router.get('/:username', userController.getUserDetails);
	router.get('/', userController.getAllUsers);
	router.delete('/:username', userController.deleteUser);
	router.put('/:username', userController.updateUser);
	return router;
};