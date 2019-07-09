module.exports = (db) => {
	var mapSubmitData= (data)=>{
		var students =[];
		var projects =[];
		var student1 = getStudent(data);
		if(student1 != null){
			students.push(student1);
		}
		if(data.members){
			data.members.forEach(member =>{
				students.push(getStudent(member));
			});
		}
		if(data.FirstProject)
		{
			projects.push({ProjectId: data.FirstProject.value, Priority:1});
		}
		if(data.SecondProject)
		{
			projects.push({ProjectId: data.SecondProject.value, Priority:2});
		}
		if(data.ThirdProject)
		{
			projects.push({ProjectId: data.ThirdProject.value, Priority:3});
		}
		return {
			Students: students,
			Projects: projects
		};
	};
	var getStudent = (data)=>{
	return {
		FirstName: data.FirstName,
		MiddleName: data.MiddleName,
		LastName: data.LastName,
		EmailAddress: data.EmailAddress,
		MatriculationNumber : data.MatriculationNumber
	};
	}
	var randtoken = require('rand-token');
	var addNewSignup = function (req, res) {
		var data = mapSubmitData(req.body);
		var students = data.Students;
		var projectproirities = data.Projects;
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
							db.Models.SignupProjects.addMultipleSignupProjects(signupProjectAssociations).then(() => {
								res.status(200).send({
									success: 'true',
									message: 'signup completed successfully'
								});
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