var express = require('express');
var router = express.Router();

var GeneroController = require('./../controllers/GeneroController');

router.get('/', GeneroController.home)

router.get('/criar', GeneroController.criar)

router.post('/', GeneroController.guardar)

router.get('/:id', GeneroController.edit)

router.put('/:id', GeneroController.atualizar)

router.delete('/deletar/:id', GeneroController.deletar)

module.exports = router;
