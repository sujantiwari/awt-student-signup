module.exports = (db, bcrypt) => {
	var addNewUser = function (req, res) {
		var user = req.body;
		bcrypt.genSalt().then((salt,err ) => {
			bcrypt.hash(user.Password, salt).then((hash,err) => {
				user.Password = hash;
				user.CreatedOn = new Date();
				user.IsDeactivated = false;
				db.Models.User.addNewUser(user).then(() => {
					return res.status(200).send({
						success: 'true',
						message: 'user created successfully'
					});
				});
			});
		});
	};
	var getUserDetails = function (req, res) {
		var name = req.params.username;
		db.Models.User.getByUserName(name).then(
			(result) => res.json(result));
	};
	var updateUser = function (req, res) {
		db.Models.User.updateUser(req.body).then(
			(result) => res.json(result));
	};
	var deleteUser = function (req, res) {
		db.Models.User.deleteUser(req.params.id).then(
			(result) => res.json(result));
	};
	var getAllUsers = function (req, res) {
		db.Models.User.findAll().then(
			(result) => res.json(result));
	};
	return {
		addNewUser,
		getUserDetails,
		getAllUsers,
		updateUser,
		deleteUser
	};
};