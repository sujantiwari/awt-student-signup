module.exports = (db, middleware) => {
	var express = require('express');
	var router = express.Router();
	var categoryController = require('../controllers/category.controller')(db);
	router.get('/:id', categoryController.getCategory);
	router.post('/', middleware.Verify, categoryController.addNewCategory);
	router.put('/', middleware.Verify, categoryController.updateCategory);
	router.delete('/:id', middleware.Verify, categoryController.deleteCategory);
	router.get('/:id/projects', categoryController.getCategoryProjects);
	router.get('/', categoryController.getAllCategories);
	return router;
};