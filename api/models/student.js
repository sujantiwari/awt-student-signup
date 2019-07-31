const Student = (sequelize, DataTypes) => {
	const Student = sequelize.define('StudentInfo', {
		StudentId: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		FirstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		MiddleName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		EmailAddress: {
			type: DataTypes.STRING,
			allowNull: false
		},
		MatriculationNumber: {
			type: DataTypes.STRING,
			allowNull: false
		},
		GroupId: {
		   type: DataTypes.INTEGER,
		   references: {
			  model: 'StudentGroupInfo', 
			  key: 'GroupId',
		   }
		}
	});
	Student.addStudent = async student => {
		return await Student.create(student);
	};
	Student.addMultipleStudents = async students => {
		return await Student.bulkCreate(students);
	};
	Student.getStudent = async id => {
		return await Student.findOne({
			where: {
				StudentId: id
			},
		});
	};
	Student.updateStudent = async student => {
		return await Student.update(
			student, {
				where: {
					StudentId: student.GroupId
				}
			});
	};
	Student.deleteStudent = async id => {
		return await Student.destroy({
			where: {
				StudentId: id
			}
		});
	};
	Student.getAllStudents = async () => {
		return await Student.findAll();

	};
	return Student;
};
module.exports = Student;