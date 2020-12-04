var express = require('express');
var router = express.Router();
var FilmeController = require('./../controllers/FilmeController');


router.get('/', FilmeController.home)

router.get('/criar', FilmeController.criar)

router.post('/', FilmeController.guardar)

router.get('/:id', FilmeController.edit)

router.put('/:id', FilmeController.atualizar)

router.delete('/deletar/:id', FilmeController.deletar)

module.exports = router;
