var express = require('express');
var router = express.Router();
const WelcomeController = require('../controllers/welcome-controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  return WelcomeController.index(req, res, next)
});

module.exports = router;
