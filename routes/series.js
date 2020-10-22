var express = require('express');
var router = express.Router();
var SerieController = require('./../controllers/SerieController');

/* GET users listing. */
router.get('/', SerieController.home)

router.get('/criar', SerieController.criar)

router.post('/', SerieController.guardar)

router.get('/:id', SerieController.edit)

router.put('/:id', SerieController.atualizar)

router.delete('/deletar/:id', SerieController.deletar)

module.exports = router;
