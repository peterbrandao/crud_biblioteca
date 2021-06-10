import Sequelize, { Model, Op } from 'sequelize';

import 'dotenv/config';

class Clientes extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_cliente: Sequelize.STRING,
        telefone_cliente: Sequelize.STRING,
        deleted_at: Sequelize.DATE
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
        tableName: 'clientes',
      }
    );
    return this;
  }}
export default Clientes;