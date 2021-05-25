import Sequelize, { Model, Op } from 'sequelize';

import 'dotenv/config';

class Livros extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_livro: Sequelize.STRING,
        isbn: Sequelize.NUMBER,
        ano_publicacao:Sequelize.INTEGER,
        id_autor:Sequelize.INTEGER
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
        tableName: 'livros',
      }
    );
    return this;
  }}
export default Livros;