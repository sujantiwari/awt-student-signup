module.exports = (db, middleware) => {
	var express = require('express');
	var router = express.Router();
	var projectController = require('../controllers/project.controller')(db);
	router.post('/',middleware.Verify, projectController.addNewProject);
	router.get('/', projectController.getAllProjectDetails);
	router.get('/:id', projectController.getProjectDetails);
	router.put('/',middleware.Verify, projectController.updateProject);
	router.delete('/:id',middleware.Verify, projectController.deleteProject);
	return router;
};