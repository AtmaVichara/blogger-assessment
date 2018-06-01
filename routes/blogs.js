var express = require('express');
var router = express.Router();
const BlogsController = require('../controllers/blogs-controller')

router.get('/', (req, res, next) => {
  return BlogsController.index(req, res, next)
})

router.get('/new', (req, res, next) => {
  return BlogsController.new(req, res, next)
})

router.post("/", (req, res, next) => {
  return BlogsController.create(req, res, next)
})


module.exports = router
