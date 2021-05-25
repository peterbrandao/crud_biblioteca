import Sequelize, { Model, Op } from 'sequelize';
import bcrypt from 'bcryptjs';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

class Autores extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_autor: Sequelize.STRING,
        pais_nasc
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
    // incriptando o password bcrypt
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(String(password), this.password_hash);
  }
  //gera o token JWT
  tokenGenerate(type = 'password') {
    switch (type) {
      case 'password':
        return jwt.sign({ id: this.id }, process.env.APP_SECRET, {
          expiresIn: 86400,
        });

      default:
        return '';
    }
  }
}

export default Autores;