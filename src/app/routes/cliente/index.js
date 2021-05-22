// primeira rota do POST
import { Router } from 'express';

import controller from '../../controllers/cliente/clienteController';

const cliente = new Router();
cliente.post('/',controller.create)
cliente.get('/',controller.list)
cliente.get('/:id',controller.listIndex)
cliente.delete('/:id',controller.delete)
cliente.put('/:id',controller.update)


export default cliente;