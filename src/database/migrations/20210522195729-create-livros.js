'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('livros', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome_livro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isbn: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ano_publicacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_autor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'autores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('livros');
  },
};