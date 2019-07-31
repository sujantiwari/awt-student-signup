module.exports = (db, stringify) => {
	var randtoken = require('rand-token');
	var mapSubmitData = (data) => {
		var students = [];
		var projects = [];
		var student1 = getStudent(data);
		if (student1 != null) {
			students.push(student1);
		}
		if (data.members) {
			data.members.forEach(member => {
				students.push(getStudent(member));
			});
		}
		if (data.FirstProject) {
			projects.push({
				ProjectId: data.FirstProject.value,
				Priority: 1
			});
		}
		if (data.SecondProject) {
			projects.push({
				ProjectId: data.SecondProject.value,
				Priority: 2
			});
		}
		if (data.ThirdProject) {
			projects.push({
				ProjectId: data.ThirdProject.value,
				Priority: 3
			});
		}
		return {
			Students: students,
			Projects: projects
		};
	};
	var getStudent = (data) => {
		return {
			FirstName: data.FirstName,
			MiddleName: data.MiddleName,
			LastName: data.LastName,
			EmailAddress: data.EmailAddress,
			MatriculationNumber: data.MatriculationNumber
		};
	}
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
	
	var deleteRequest = function(req, res){
		var email = req.body.Email;
		var matriculationNumber = req.body.MatriculationNumber;
		db.Models.Student.findOne({
			where: {
				MatriculationNumber: matriculationNumber,
				EmailAddress: email
			}
		}).then(function(student){
			if(student != null){
				db.Models.TokenVerification.addNewToken({
					Token: randtoken.generate(16),
					createdOn: new Date(),
					IsValid: true,
					LastUpdatedOn: null
				}).then((token) => {
					var request = {
						StudentId : student.StudentId,
						TokenId : token.TokenId,
						IsCompleted : false,
						CreatedOn : new Date()
					};
					db.Models.DataDeletionRequest.addNewDataDeletionRequest(request)
					.then((result)=>{
						res.status(200).send({
							success: true,
							message: 'data deletion request has been created'
						});
					});
				});
			}
			else{
				res.status(404).send({
					success: false,
					message: 'Emai/Matricultaion number does not exist'
				});
			}
			});
	};
	var verifyAndDeleteData = function(req, res) {
		var token = req.body.Token;
		db.Models.TokenVerification.findOne({
			where: {
				Token: token
			}
		}).then((tokenInfo)=>{
			if(tokenInfo == null) {
				res.status(404).send({
					success: false,
					message: 'Invalid token'
				});
			}
			else{
				db.Models.DataDeletionRequest.findOne({
					where: {
						TokenId: tokenInfo.TokenId
					}
				}).then((deletionInfo)=>{
					if(deletionInfo == null){
						res.status(404).send({
							success: false,
							message: 'Invalid token'
						});
					}else{
					db.Models.Student.deleteStudent(deletionInfo.StudentId)
					.then((result)=>{
						res.status(200).send({
							success: true,
							message: 'data deletion successful'
						});
					});
				}
				});
			}
		});
	};
	var deleteSignup = function(req, res){
		var id = req.params.id;
		db.Models.SignupProjects.deleteSignupProject(id)
		.then(result=>{
			db.Models.Signup.deleteSignup(id)
			.then(r2=>{
				res.status(200).send({
					success: true,
					message: 'data deletion successful'
				});
			});
		})
	};
	var getSignupReport = function (req, res) {
		db.Models.Signup.getAllSignups().then((signups) => {
			db.Models.Student.getAllStudents().then(students => {
				db.Models.SignupProjects.getAllSignupProjects().then(signupProjects => {
					db.Models.Project.getAllProjects().then(projects => {
						var Data = MapCSVData(signups, students, signupProjects, projects);
						res.json(Data);
					});
				});
			});
		});
	}
	var getSignUpReportFile = function (req, res) {
		db.Models.Signup.getAllSignups().then((signups) => {
			db.Models.Student.getAllStudents().then(students => {
				db.Models.SignupProjects.getAllSignupProjects().then(signupProjects => {
					db.Models.Project.getAllProjects().then(projects => {
						var Data = MapCSVData(signups, students, signupProjects, projects);
						res.setHeader('Content-Type', 'text/csv');
						res.setHeader('Content-Disposition', 'attachment; filename=\"' + 'download-' + Date.now() + '.csv\"');
						stringify(Data, {
							header: true
						}).pipe(res);
					});
				});
			});
		});
	};
	var MapCSVData = function (signups, students, signupProjects, projects) {
		var results = [];
		signups.forEach(signup => {
			var parstudents = students.filter(x => x.GroupId == signup.GroupId);
			parstudents.forEach(student => {
				var result = {}
				result.SignupId = signup.SignupId;
				result.GroupId = signup.GroupId;
				result.GroupName = signup.Group.GroupName;
				var MiddleName = student.MiddleNae ? student.MiddleName : '';
				result.StudentId = student.StudentId;
				result.StudentName = student.FirstName + " " + MiddleName + ' ' + student.LastName;
				result.EmailAddress = student.EmailAddress;
				result.MatriculationNumber = student.MatriculationNumber;
				var firstProjectId = signupProjects.filter(x => x.SignupId == signup.SignupId && x.Priority == '1')[0].ProjectId;
				var secondProjectId = signupProjects.filter(x => x.SignupId == signup.SignupId && x.Priority == '2')[0].ProjectId;
				var thirdProjectId = signupProjects.filter(x => x.SignupId == signup.SignupId && x.Priority == '3')[0].ProjectId;
				result.FirstProject = projects.filter(x => x.ProjectId == firstProjectId)[0].ProjectName;
				result.SecondProject = projects.filter(x => x.ProjectId == secondProjectId)[0].ProjectName;
				result.ThirdProject = projects.filter(x => x.ProjectId == thirdProjectId)[0].ProjectName;
				results.push(result);
			});

		});
		return results;
	};
	return {
		addNewSignup,
		getAllSignUpDetails,
		getSignUpDetails,
		getSignupReport,
		getSignUpReportFile,
		deleteRequest,
		verifyAndDeleteData,
		deleteSignup
	};
}