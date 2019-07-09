const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	process.env.DATABASE,
	process.env.DATABASE_USER,
	process.env.DATABASE_PASSWORD, {
		host: process.env.DATABASE_HOST,
		dialect: 'postgres',
		port: process.env.DB_PORT,
		define: {
			freezeTableName: true,
			timestamps: false
		},
	}
);
const connect = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		console.log('Connection to the database has been established successfully.');
	} catch (error) {
		console.error(error.message);
		process.exit(-1);
	}
};

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.sequelize = sequelize;
db.connect = connect;
var Category = require('../models/category')(sequelize, Sequelize);
var Project = require('../models/project')(sequelize, Sequelize,Category);
var Student = require('../models/student')(sequelize, Sequelize);
var User = require('../models/user')(sequelize, Sequelize);
var StudentGroup = require('../models/studentgroup')(sequelize, Sequelize);
var signupprojects = require('../models/signupprojects')(sequelize, Sequelize);
var Signup = require('../models/signup')(sequelize, Sequelize);
var TokenVerification = require('../models/tokenverification')(sequelize, Sequelize);
var Supervisor = require('../models/supervisor')(sequelize, Sequelize);


//Associations
Project.belongsTo(Category, {
	foreignKey: 'CategoryId'
});
Category.hasMany(Project, {
	foreignKey: 'CategoryId'
}, {
	as: 'Projects'
});
StudentGroup.hasMany(Student, {
	foreignKey: 'GroupId'
}, {
	as: 'Students'
});
Student.belongsTo(StudentGroup, {
	foreignKey: 'GroupId'
});
Signup.belongsTo(StudentGroup, {
	foreignKey: 'GroupId',
	as : 'Group'
});
Signup.belongsTo(Student, {
	foreignKey: 'SignupStudentId'
}, {
	as: 'SignupedBy'
});
Signup.belongsTo(TokenVerification, {
	foreignKey: 'VerificationTokenId'
});
db.Models = {
	Student: Student,
	User: User,
	Category: Category,
	Project: Project,
	Signup: Signup,
	StudentGroup: StudentGroup,
	SignupProjects: signupprojects,
	Supervisor: Supervisor,
	TokenVerification: TokenVerification
};
module.exports = db;