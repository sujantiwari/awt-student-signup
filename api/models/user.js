const user = (sequelize, DataTypes) => {
	const User = sequelize.define('UserInfo', {
		UserId: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		UserName: {
			type: DataTypes.STRING
		},
		Password: {
			type: DataTypes.STRING
		},
		UserType: {
			type: DataTypes.STRING
		},
		CreatedOn: {
			type: DataTypes.DATE
		},
		LastUpdatedOn: {
			type: DataTypes.DATE
		},
		IsDeactivated: {
			type: DataTypes.BOOLEAN
		}
	});
	User.addNewUser = async user => {
		return await User.create(user);
	};
	User.getByUserName = async userName =>{
		let user  = await User.findOne({
			where:{
				UserName: userName
			}
		});
		return user;
	};
	User.getUser = async id => {
		let user = await User.findOne({
			where: {
				UserId: id
			},
		});
		return user;
	};
	User.updateUser = async user => {
		return await User.update(
			user, {
				where: {
					UserId: user.UserId
				}
			});
	};
	User.deleteUser = async id => {
		return await User.destroy({
			where: {
				UserId: id
			}
		});
	};
	User.getAllUsers = async () => {
		return await User.findAll();
	};
	return User;
};
module.exports = user;