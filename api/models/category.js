
const category = (sequelize, DataTypes) => {
	var Project = require('../models/project')(sequelize, DataTypes);
	const Category = sequelize.define('CategoryInfo', {
		CategoryId: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		CategoryName: {
			type: DataTypes.STRING
		},
		CategoryDescription: {
			type: DataTypes.STRING
		}
	});
	Category.getAllCategories = async () => {
		let categories = await Category.findAll();
		return categories;
	};
	Category.getCategory = async id => {
		let category = await Category.findOne({
			where: {
				CategoryId: id
			}
		});
		return category;
	};
	Category.addNewCategory = async category => {
		console.log(category);
		return await Category.create(category);
	};
	Category.updateCategory = async category => {
		return await Category.update(
			category, {
				where: {
					CategoryId: category.CategoryId
				}
			});
	};
	Category.deleteCategory = async id => {
		return await Category.destroy({
			where: {
				CategoryId: id
			}
		});
	};
	Category.getCategoryProjects = async id => {
		return await Category.findOne({
			include: [{
				model: Project
			}],
			where: {
				CategoryId: id
			}
		});
	};
	return Category;
};
module.exports = category;