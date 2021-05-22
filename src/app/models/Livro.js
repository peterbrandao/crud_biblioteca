import Sequelize, { Model, Op } from 'sequelize';
import 'dotenv/config';

class Livro extends Model {
  static init(sequelize) {
    super.init(
      {
        isbn: Sequelize.STRING,
        titulo: Sequelize.STRING,
        autor: Sequelize.STRING,
        editora: Sequelize.STRING,
        publicao: Sequelize.DATE,
        deleted_at: Sequelize.DATE,
      },
      {
        defaultScope: {
          where: {},
        },
        scopes: {
          deleted: {
            where: {
              deleted_at: { [Op.ne]: null },
            },
          },
          active: {
            where: {
              deleted_at: null,
            },
          },
        },
        sequelize,
        tableName: 'livro',
      }
    );
return this;
  }}
export default Livro;
