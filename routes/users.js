var express = require('express');
var router = express.Router();
const UsersController = require('../controllers/users-controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', (req, res, next) => {
  return UsersController.new(req, res, next)
})

router.post('/users', (req, res, next) => {
  return UsersController.create(req, res, next)
})

module.exports = router;
