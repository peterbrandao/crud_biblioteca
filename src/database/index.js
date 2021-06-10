import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Autores from '../app/models/Autores';
import Clientes from '../app/models/Clientes';
import Livros from '../app/models/Livros';
import Retiradas from '../app/models/Retiradas';

const models = [
  User,
  Autores,
  Clientes,
  Livros,
  Retiradas
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();