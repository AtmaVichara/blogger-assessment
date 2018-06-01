const User = require('../models/user')

class SessionsController {

  static new(req, res, next) {
    res.render('sessions/new')
  }

  static create(req, res, next) {
    return User.logIn(req, res)
  }

}

module.exports = SessionsController
