// primeira rota do POST
import { Router } from 'express';

import controller from '../../controllers/clientes/ClientesController';

const clientes = new Router();
clientes.post('/',controller.create)
clientes.get('/',controller.list)
clientes.get('/:id',controller.listIndex)
clientes.delete('/:id',controller.delete)
clientes.put('/:id',controller.update)


export default clientes;