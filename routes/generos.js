var express = require('express');
var router = express.Router();

var GeneroController = require('./../controllers/GeneroController');
router.get('/', GeneroController.home)

module.exports = router;
