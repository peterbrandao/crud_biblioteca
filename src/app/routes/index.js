import { Router } from 'express';

import user from './user';
import autores from './autores';
import clientes from './clientes';
import livros from './livros';
import retiradas from './retiradas';

const routes = new Router();
const BASE_PATH = `/${process.env.APP_VERSION_ROUTES}`;

routes.use(`${BASE_PATH}/users`, user);
routes.use(`${BASE_PATH}/autores`, autores);
routes.use(`${BASE_PATH}/clientes`, clientes);
routes.use(`${BASE_PATH}/livros`, livros);
routes.use(`${BASE_PATH}/retiradas`, retiradas);


export default routes;