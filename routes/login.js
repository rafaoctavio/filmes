var express = require('express');
const SignInUpController = require('../controllers/SignInUpController');
const CadastroController = require('../controllers/CadastroController')
var router = express.Router();

router.get('/', SignInUpController.index);

router.post('/', SignInUpController.doLogin);
router.post('/cadastro', CadastroController.criar);

module.exports = router;