const supervisor = (sequelize, DataTypes) => {
	const Supervisor = sequelize.define('SupervisorInfo', {
		SupervisorId: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		SupervisorName: {
			type: DataTypes.STRING
		},
		SupervisorLink: {
			type: DataTypes.STRING
		},
	});
	Supervisor.addNewSupervisor = async supervisor => {
		return await Supervisor.create(supervisor);
	};
	Supervisor.getSupervisor = async id => {
		let supervisor = await Supervisor.findOne({
			where: {
				SupervisorId: id
			},
		});
		return supervisor;
	};
	Supervisor.updateSupervisor = async supervisor => {
		return await Supervisor.update(
			supervisor, {
				where: {
					SupervisorId: supervisor.SupervisorId
				}
			});
	};
	Supervisor.deleteSupervisor = async id => {
		return await Supervisor.destroy({
			where: {
				SupervisorId: id
			}
		});
	};
	Supervisor.getAllSupervisors = async () => {
		let supervisors = await Supervisor.findAll();
		return supervisors;
	};
	return Supervisor;
};
module.exports = supervisor;