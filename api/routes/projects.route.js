module.exports = (db) => {
	var express = require('express');
	var router = express.Router();
	var projectController = require('../controllers/project.controller')(db);
	router.post('/', projectController.addNewProject);
	router.get('/', projectController.getAllProjectDetails);
	router.get('/:id', projectController.getProjectDetails);
	router.put('/', projectController.updateProject);
	router.delete('/:id', projectController.deleteProject);
	return router;
};