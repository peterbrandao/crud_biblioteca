import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';

import Livro from '../app/models/Livro';

import Autor from '../app/models/Autor';

import Cliente from '../app/models/Cliente';


const models = [
  User,
  Livro,
  Autor,
  Cliente
 
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