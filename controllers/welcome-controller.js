class WelcomeController {

  static index(req, res, next) {
    res.render('index', { title: 'Express' });
  }

}

module.exports = WelcomeController
