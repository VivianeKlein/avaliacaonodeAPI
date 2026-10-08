import express from 'express'

import ControllerFilmes from '../controller/filmes.js'

const router = express.Router()

router.get('/buscar', ControllerFilmes.Buscar);
router.get('/buscarUm/:id', ControllerFilmes.BuscarUm);
router.post('/cadastrar', ControllerFilmes.Cadastrar);
router.put('/atualizar/:id', ControllerFilmes.Atualizar);
router.delete('/eliminar/:id', ControllerFilmes.Eliminar);

export default router;