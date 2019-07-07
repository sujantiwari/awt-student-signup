module.exports = (db) => {
	var addNewProject = function (req, res) {
		db.Models.Project.addNewProject(req.body).then(
			(result) => {
				res.json(result);
			}
		);
	};
	var getAllProjectDetails = function (req, res) {
		db.Models.Project.getAllProjects().then(
			(result) => res.json(result));
	};
	var getProjectDetails = function (req, res) {
		db.Models.Project.getProject(req.params.id).then(
			(result) => res.json(result));
	};
	var updateProject = function (req, res) {
		db.Models.Project.updateProject(req.body).then(
			(result) => res.json(result));
	};
	var deleteProject = function (req, res) {
		db.Models.Project.deleteProject(req.params.id).then(
			(result) => res.json(result));
	};
	return {
		addNewProject,
		getAllProjectDetails,
		getProjectDetails,
		updateProject,
		deleteProject
	};
};