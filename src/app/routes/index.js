import { Router } from 'express';

import user from './user';

import livro from './livro';

import autor from './autor';

import cliente from './cliente';

const routes = new Router();
const BASE_PATH = `/${process.env.APP_VERSION_ROUTES}`;

routes.use(`${BASE_PATH}/users`, user);
routes.use(`${BASE_PATH}/livro`, livro);
routes.use(`${BASE_PATH}/autor`, autor);
routes.use(`${BASE_PATH}/cliente`, cliente);

export default routes;