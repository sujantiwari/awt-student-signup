module.exports = (db) => {
	var addNewSupervisor = function (req, res) {
		db.Models.Supervisor.addNewSupervisor(req.body).then(
			(result) => {
				res.json(result);
			}
		);
	};
	var getAllSupervisorDetails = function (req, res) {
		db.Models.Supervisor.getAllSupervisors().then(
			(result) => res.json(result));
	};
	var getSupervisorDetails = function (req, res) {
		db.Models.Supervisor.getSupervisor(req.params.id).then(
			(result) => res.json(result));
	};
	var updateSupervisor = function (req, res) {
		db.Models.Supervisor.updateSupervisor(req.body).then(
			(result) => res.json(result));
	};
	var deleteSupervisor = function (req, res) {
		db.Models.Supervisor.deleteSupervisor(req.params.id).then(
			(result) => res.json(result));
	};
	return {
		addNewSupervisor,
		getAllSupervisorDetails,
		getSupervisorDetails,
		updateSupervisor,
		deleteSupervisor
	};
};