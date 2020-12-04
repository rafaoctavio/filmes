var express = require('express');
const SignInUpController = require('../controllers/SignInUpController');
var router = express.Router();

router.get('/', SignInUpController.index);

router.post('/', SignInUpController.doLogin);

module.exports = router;