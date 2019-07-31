const dataDeletionRequest = (sequelize, DataTypes, Category) => {
	const DataDeletionRequest = sequelize.define('DataDeletionRequestInfo', {
		DataDeletionRequestId: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		StudentId: {
			type: DataTypes.BIGINT
		},
        TokenId:{
            type:DataTypes.BIGINT
        },
		IsCompleted: {
			type: DataTypes.BOOLEAN
        },
        CreatedOn: {
            type: DataTypes.DATE
        },
        CompletedOn: {
            type: DataTypes.DATE
        }
	});
	DataDeletionRequest.addNewDataDeletionRequest = async dataDeletionRequest => {
		return await DataDeletionRequest.create(dataDeletionRequest);
	};
	DataDeletionRequest.getDataDeletionRequest = async id => {
		let dataDeletionRequest = await DataDeletionRequest.findOne({
			where: {
				DataDeletionRequestId: id
			}
		});
		return dataDeletionRequest;
	};
	DataDeletionRequest.updateDataDeletionRequest = async dataDeletionRequest => {
		return await DataDeletionRequest.update(
			dataDeletionRequest, {
				where: {
					DataDeletionRequestId: dataDeletionRequest.DataDeletionRequestId
				}
			});
	};
	return DataDeletionRequest;
};
module.exports = dataDeletionRequest;