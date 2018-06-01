var express = require('express');
var router = express.Router();
const SessionsController = require('../controllers/sessions-controller')

router.get('/', (req, res, next) => {
  return SessionsController.new(req, res, next)
})

router.post('/', (req, res, next) => {
  return SessionsController.create(req, res, next)
})


module.exports = router
