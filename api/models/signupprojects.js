const signupProjects = (sequelize, DataTypes) => {
	const SignupProjects = sequelize.define('SignupProjects', {
		Id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		SignupId: {
			type: DataTypes.BIGINT
		},
		ProjectId: {
			type: DataTypes.BIGINT
		},
		Priority: {
			type: DataTypes.BIGINT
		},
		IsApproved: {
			type: DataTypes.BOOLEAN
		}
	});
	SignupProjects.addSignupProject = async signupProject => {
		return await SignupProjects.create(signupProject);
	};
	SignupProjects.addMultipleSignupProjects = async signupProjects => {
		return await SignupProjects.bulkCreate(signupProjects);
	};
	SignupProjects.updateSignupProjects = async signupProjects => {
		return await SignupProjects.update(
			signupProjects, {
				where: {
					SignupId: signupProjects.SignupId
				}
			});
	};
	SignupProjects.deleteSignupProject = async id => {
		return await SignupProjects.destroy({
			where: {
				Id: id
			}
		});
	};
	return SignupProjects;
};
module.exports = signupProjects;