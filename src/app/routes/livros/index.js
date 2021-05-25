// primeira rota do POST
import { Router } from 'express';

import controller from '../../controllers/livros/LivrosController';

const livros = new Router();
livros.post('/',controller.create)
livros.get('/',controller.list)
livros.get('/:id',controller.listIndex)
livros.delete('/:id',controller.delete)
livros.put('/:id',controller.update)


export default livros;