import Sequelize, { Model, Op } from 'sequelize';
import 'dotenv/config';

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        isbn: Sequelize.STRING,
        titulo: Sequelize.STRING,
        autor: Sequelize.STRING,
        editora: Sequelize.STRING,
        publicao:Sequelize.DATE,
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
        tableName: 'cliente',
      }
    );
return this;
  }}
export default Cliente;
