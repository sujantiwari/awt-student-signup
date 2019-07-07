const signup = (sequelize, DataTypes) => {
	const Group = require('./studentgroup')(sequelize, DataTypes);
	const Student = require('./student')(sequelize, DataTypes);
	const Signup = sequelize.define('StudentSignupInfo', {
		SignupId: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		SignupEmailAddress: {
			type: DataTypes.STRING
		},
		SignupDate: {
			type: DataTypes.DATE
		}
	});
	Signup.getAllSignups = async () => {
		return await Signup.findAll({
			include: [{
				model: Group,
				as : 'Group'
			}
			]
		});
	};
	Signup.getSignup = async id => {
		return await Signup.findOne({
			SignupId: id
		});
	};
	Signup.addNewSignup = async signup => {
		return await Signup.create(signup);
	};
	Signup.updateSignup = async signup => {
		return await Signup.update(
			signup, {
				where: {
					SignupId: signup.SignupId
				}
			});
	};
	Signup.deleteSignup = async id => {
		return await Signup.destroy({
			where: {
				SignupId: id
			}
		});
	};
	return Signup;
};
module.exports = signup;