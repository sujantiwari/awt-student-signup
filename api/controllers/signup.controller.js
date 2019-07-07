module.exports = (db) => {
	var randtoken = require('rand-token');
	var addNewSignup = function (req, res) {
		var students = req.body.Students;
		var projectproirities = req.body.Projects;
		var groupName = students.map(x => x.LastName).join('-');
		db.Models.StudentGroup.addStudentGroup({
			GroupName: groupName,
			GroupDescription: ''
		}).then((group) => {
			students.forEach(function (student) {
				student.GroupId = parseInt(group.GroupId);
			});
			db.Models.Student.addMultipleStudents(students, {
				returning: true
			}).then(() => {
				db.Models.Student.findOne({
					where: {
						MatriculationNumber: students[0].MatriculationNumber
					}
				}).then((signingstudent) => {
					db.Models.TokenVerification.addNewToken({
						Token: randtoken.generate(16),
						createdOn: new Date(),
						IsValid: true,
						LastUpdatedOn: null
					}).then((token) => {
						db.Models.Signup.addNewSignup({
							SignupEmailAddress: students[0].EmailAddress,
							SignupDate: new Date(),
							VerificationTokenId: token.TokenId,
							GroupId: group.GroupId,
							SignupStudentId: signingstudent.StudentId
						}).then((signup) => {
							var signupProjectAssociations = [];
							projectproirities.forEach((project) => {
								signupProjectAssociations.push({
									SignupId: signup.SignupId,
									ProjectId: project.ProjectId,
									Priority: project.Priority,
									IsApproved: false
								});
							});
							db.Models.SignupProjects.addMultipleSignupProjects(projectproirities).then(() => {
								res.json(signup);
							});
						});
					});
				});
			});
		});
	};
	var getAllSignUpDetails = function (req, res) {
		db.Models.Signup.getAllSignups().then((signups) => {
			res.json(signups);
		});
	};
	var getSignUpDetails = function (req, res) {
		db.Models.Signup.getSignup(req.params.id).then((signup) => {
			res.json(signup);
		});
	};
	var getSignupReport = function (req, res) {
		db.Models.Signup.getAllSignups().then((signups) => {
			res.json(signups);
		});
	};
	return {
		addNewSignup,
		getAllSignUpDetails,
		getSignUpDetails,
		getSignupReport
	};
};