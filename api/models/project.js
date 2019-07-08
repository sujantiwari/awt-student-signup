const project = (sequelize, DataTypes) => {
	const Project = sequelize.define('ProjectInfo', {
		ProjectId: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		ProjectName: {
			type: DataTypes.STRING
		},
		ProjectDescription: {
			type: DataTypes.TEXT
		},
		ProjectRequirements: {
			type: DataTypes.ARRAY(DataTypes.TEXT)
		},
		Tasks: {
			type: DataTypes.ARRAY(DataTypes.TEXT)
		},
		ProjectSupervisorId: {
			type: DataTypes.BIGINT
		},
		IsDeactivated: {
			type: DataTypes.BOOLEAN
		},
		CategoryId: {
		   type: DataTypes.INTEGER,
		   references: {
			  model: 'CategoryInfo', 
			  key: 'CategoryId',
		   }
		}
	});
	Project.addNewProject = async project => {
		return await Project.create(project);
	};
	Project.getProject = async id => {
		let project = await Project.findOne({
			where: {
				ProjectId: id
			},
		});
		return project;
	};
	Project.updateProject = async project => {
		return await Project.update(
			project, {
				where: {
					ProjectId: project.ProjectId
				}
			});
	};
	Project.deleteProject = async id => {
		return await Project.destroy({
			where: {
				ProjectId: id
			}
		});
	};
	Project.getAllProjects = async () => {
		let projects = await Project.findAll();
		return projects;
	};
	return Project;
};
module.exports = project;