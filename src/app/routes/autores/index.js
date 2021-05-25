// primeira rota do POST
import { Router } from 'express';

import controller from '../../controllers/autores/AutoresController';

const autores = new Router();
autores.post('/',controller.create)
// autores.get('/',controller.list)
// autores.get('/:id',controller.listIndex)
// autores.delete('/:id',controller.delete)
// autores.put('/:id',controller.update)


export default autores;