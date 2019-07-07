const tokenVerification = (sequelize, DataTypes) => {
	const TokenVerification = sequelize.define('TokenVerificationInfo', {
		TokenId: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		Token: {
			type: DataTypes.STRING
		},
		CreatedOn: {
			type: DataTypes.DATE
		},
		IsValid: {
			type: DataTypes.BOOLEAN
		},
		LastUpdatedOn: {
			type: DataTypes.DATE
		}
	});
	TokenVerification.addNewToken = async token => {
		return await TokenVerification.create(token);
	};
	TokenVerification.getToken = async id => {
		let Token = await TokenVerification.findOne({
			where: {
				TokenId: id
			},
		});
		return Token;
	};
	TokenVerification.updateToken = async token => {
		return await token.update(
			Token, {
				where: {
					TokenId: token.TokenId
				}
			});
	};
	TokenVerification.deleteToken = async id => {
		return await TokenVerification.destroy({
			where: {
				TokenId: id
			}
		});
	};
	return TokenVerification;
};
module.exports = tokenVerification;