import Sequelize, { Model, Op } from 'sequelize';

import 'dotenv/config';

class Retiradas extends Model {
  static init(sequelize) {
    super.init(
      {
        
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
        tableName: 'retirada',
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Livros, {
      foreignKey: 'id_livro',
      as: 'livros',
    });
    this.belongsTo(models.Clientes, {
      foreignKey: 'id_cliente',
      as: 'clientes',
    });
}

}
export default Retiradas;