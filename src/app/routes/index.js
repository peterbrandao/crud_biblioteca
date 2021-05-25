import { Router } from 'express';

import user from './user';

import autores from './autores';

const routes = new Router();
const BASE_PATH = `/${process.env.APP_VERSION_ROUTES}`;

routes.use(`${BASE_PATH}/users`, user);
routes.use(`${BASE_PATH}/autores`, autores);

export default routes;