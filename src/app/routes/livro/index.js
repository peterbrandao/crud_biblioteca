// primeira rota do POST
import { Router } from 'express';

import controller from '../../controllers/livro/livroController';

const livro = new Router();
livro.post('/',controller.create)
livro.get('/',controller.list)
livro.get('/:id',controller.listIndex)
livro.delete('/:id',controller.delete)
livro.put('/:id',controller.update)


export default livro;