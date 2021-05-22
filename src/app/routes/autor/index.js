// primeira rota do POST
import { Router } from 'express';

import controller from '../../controllers/autor/autorController';

const autor = new Router();
autor.post('/',controller.create)
autor.get('/',controller.list)
autor.get('/:id',controller.listIndex)
autor.delete('/:id',controller.delete)
autor.put('/:id',controller.update)


export default autor;