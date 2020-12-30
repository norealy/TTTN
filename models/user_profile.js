'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.User_Account.hasOne(User_Profile,{as:'user-account'})
    }
  };
  User_Profile.init({
    id_user: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    avatar: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Profile',
  });
  return User_Profile;
};