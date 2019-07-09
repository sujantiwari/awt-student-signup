module.exports = (db) => {
	var express = require('express');
	var router = express.Router();
	var supervisorController = require('../controllers/supervisor.controller')(db);
	router.post('/', supervisorController.addNewSupervisor);
	router.get('/', supervisorController.getAllSupervisorDetails);
	router.get('/:id', supervisorController.getSupervisorDetails);
	router.put('/', supervisorController.updateSupervisor);
	router.delete('/:id', supervisorController.deleteSupervisor);
	return router;
};