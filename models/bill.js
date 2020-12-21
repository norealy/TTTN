'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Bill.belongsTo('Details_bill'),
      models.Bill.HasOne('User_Profile')
    }
  };
  Bill.init({
    id_user: DataTypes.INTEGER,
    total_money: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};