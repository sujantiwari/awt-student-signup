module.exports = (db) => {
	var express = require('express');
	var router = express.Router();
	var categoryController = require('../controllers/category.controller')(db);
	router.get('/:id', categoryController.getCategory);
	router.post('/', categoryController.addNewCategory);
	router.put('/', categoryController.updateCategory);
	router.delete('/:id', categoryController.deleteCategory);
	router.get('/:id/projects', categoryController.getCategoryProjects);
	router.get('/', categoryController.getAllCategories);
	return router;
};