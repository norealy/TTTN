'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Details_bills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_bill: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Bills',
          key:'id'
        }
      },
      id_product: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'Products',
          key:'id'
        }
      },
      count_product: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Details_bills');
  }
};