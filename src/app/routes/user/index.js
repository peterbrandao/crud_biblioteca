// primeira rota do POST
import { Router } from 'express';

import controller from '../../controllers/users/UserController';

const user = new Router();
user.post('/',controller.create)
user.get('/',controller.list)
user.get('/:id',controller.listIndex)
user.delete('/:id',controller.delete)
user.put('/:id',controller.update)


export default user;