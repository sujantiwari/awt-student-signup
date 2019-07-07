const studentGroup = (sequelize, DataTypes) => {
	const StudentGroup = sequelize.define('StudentGroupInfo', {
		GroupId: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		GroupName: {
			type: DataTypes.STRING
		},
		GroupDescription: {
			type: DataTypes.STRING
		}
	});
	StudentGroup.addStudentGroup = async studentGroup => {
		return await StudentGroup.create(studentGroup);
	};
	StudentGroup.getStudentGroup = async id => {
		return await StudentGroup.findOne({
			where: {
				GroupId: id
			},
		});
		
	};
	StudentGroup.updateStudentProject = async studentGroup => {
		return await StudentGroup.update(
			studentGroup, {
				where: {
					GroupId: studentGroup.GroupId
				}
			});
	};
	StudentGroup.deleteStudentGroup = async id => {
		return await StudentGroup.destroy({
			where: {
				GroupId: id
			}
		});
	};
	StudentGroup.getAllStudentGroups = async () => {
		return await StudentGroup.findAll();
		
	};
	return StudentGroup;
};
module.exports = studentGroup;