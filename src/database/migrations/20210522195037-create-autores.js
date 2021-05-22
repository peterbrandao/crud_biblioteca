'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('autores', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome_autor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pais_nasc: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('autores');
  },
};