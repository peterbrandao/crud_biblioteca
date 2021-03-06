import Sequelize, { Model, Op } from 'sequelize';
//import bcrypt from 'bcryptjs';
import 'dotenv/config';
//import jwt from 'jsonwebtoken';

class Autores extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_autor: Sequelize.STRING,
        pais_nasc: Sequelize.STRING,
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
        tableName: 'autores',
      }
    );
    return this;
  }}

export default Autores;