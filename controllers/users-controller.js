const User = require('../models/user')

class UsersController {

  static new(req, res, next) {
    res.render('users/new')
  }

  static create(req, res, next) {
    return User.signUp(req, res)
  }

}

module.exports = UsersController
