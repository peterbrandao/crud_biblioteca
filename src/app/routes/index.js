import { Router } from 'express';

import user from './user';

const routes = new Router();
const BASE_PATH = `/${process.env.APP_VERSION_ROUTES}`;

routes.use(`${BASE_PATH}/users`, user);

export default routes;