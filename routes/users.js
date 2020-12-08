var express = require('express');
var router = express.Router();
const UserController = require("../controllers/UserController");


router.get ('/', UserController.index);

router.get ('/listar', UserController.listar);

router.get ('/edit', UserController.edit);

router.put ('/:id', UserController.atualizar);

router.get ('/filmes', UserController.filmes)

module.exports = router;
