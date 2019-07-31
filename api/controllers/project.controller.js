module.exports = (db) => {
	const mapDataToProject = (input)=>{
		return {
			ProjectId: input.ProjectId,
			ProjectName: input.ProjectName,
			ProjectDescription: input.ProjectDescription,
			ProjectRequirements : input.ProjectRequirements.map(r => r.Requirement),
			Tasks : input.Tasks.map(t=>t.Task),
			ProjectSupervisorId: input.Supervisor.value,
			CategoryId: input.Category.value,
			IsDeactivated: false
		};
	};
	var addNewProject = function (req, res) {
		var input = req.body;
		var project = mapDataToProject(input);
		db.Models.Project.addNewProject(project).then(
			(result) => res.status(200).json(result)
		);
	};
	var getAllProjectDetails = function (req, res) {
		db.Models.Project.getAllProjects().then(
			(result) => res.status(200).json(result));
	};
	var getProjectDetails = function (req, res) {
		db.Models.Project.getProject(req.params.id).then(
			(result) => res.status(200).json(result));
	};
	var updateProject = function (req, res) {
		var project = mapDataToProject(req.body);
		db.Models.Project.updateProject(project).then(
			(result) => {
				res.status(200).json(result);
			});
	};
	var deleteProject = function (req, res) {
		db.Models.Project.deleteProject(req.params.id).then(
			(result) => res.status(200).json(result));
	};
	return {
		addNewProject,
		getAllProjectDetails,
		getProjectDetails,
		updateProject,
		deleteProject
	};
};