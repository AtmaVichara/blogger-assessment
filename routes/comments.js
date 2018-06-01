var express = require('express');
var router = express.Router();
const CommentsController = require('../controllers/comments-controller')

router.post('/', (req, res, next) => {
  return CommentsController.create(req, res, next)
})

module.exports = router
