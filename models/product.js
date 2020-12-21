'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Product.belongsTo('Details_bill'),
      models.DetProductails_bill.belongsTo('Categories'),
      models.Product.belongsTo('Producer')
    }
  };
  Product.init({
    id_categories: DataTypes.INTEGER,
    id_producer: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    count_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};