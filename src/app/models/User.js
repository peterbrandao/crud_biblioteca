import Sequelize, { Model, Op } from 'sequelize';
import bcrypt from 'bcryptjs';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
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
        tableName: 'users',
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

export default User;