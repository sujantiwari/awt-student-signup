module.exports = (db) => {

	var addNewCategory = function (req, res) {
		db.Models.Category.addNewCategory(req.body).then(
			(result) => {
				res.json(result);
			}
		);
	};
	var getAllCategories = function (req, res) {
		db.Models.Category.getAllCategories().then(
			(result) => res.json(result));
	};
	var updateCategory = function (req, res) {
		db.Models.Category.updateCategory(req.body).then(
			(result) => res.json(result));
	};
	var deleteCategory = function (req, res) {
		db.Models.Category.deleteCategory(req.params.id).then(
			(result) => res.json(result));
	};
	var getCategory = function (req, res) {
		db.Models.Category.getCategory(req.params.id).then(
			(result) => res.json(result));
	};
	var getCategoryProjects = function (req, res) {
		db.Models.Category.getCategoryProjects(req.params.id).then(
			(result) => res.json(result));
	};
	return {
		addNewCategory,
		updateCategory,
		deleteCategory,
		getCategory,
		getCategoryProjects,
		getAllCategories
	};
};