// primeira rota do POST
import { Router } from 'express';

import controller from '../../controllers/retirada/RetiradaControlles';

const retiradas = new Router();
retiradas.post('/',controller.create)
retiradas.get('/',controller.list)
retiradas.get('/:id',controller.listIndex)
retiradas.delete('/:id',controller.delete)
retiradas.put('/:id',controller.update)


export default retiradas;