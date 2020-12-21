'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Details_bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Details_bill.hasMany('Bill'),
      models.Details_bill.hasMany('Product')
    }
  };
  Details_bill.init({
    id_bill: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    count_product: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Details_bill',
  });
  return Details_bill;
};