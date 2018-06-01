const environment     = process.env.NODE_ENV || 'development';
const configuration   = require('../knexfile')[environment];
const database        = require('knex')(configuration);
const bcrypt          = require('bcrypt');

class User {

  static async signUp(req, res) {
    const user = req.body
    let hashedPassword = await this.hashPassword(user.password)
    delete user.password
    delete user.action
    user.password_digest = hashedPassword
    let newUser = await this.create(user)
    if (user === undefined) {
      res.redirect('/')
    } else {
      req.session.user = newUser
      res.redirect('/blog')
    }
  }

  static async logIn(req, res) {
    const userReq = req.body
    let user
    this.findByUsername(userReq.username)
      .then((foundUser) => {
        user = foundUser
        return this.checkPassword(userReq.password, foundUser)
      })
      .then(() => {
        delete user.password_password
        req.session.user = user
        res.redirect('/blog')
      })
      .catch((error) => console.error({error}))
  }

  static hashPassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        err ? reject(err) : resolve(hash)
      })
    })
  }

  static checkPassword(password, foundUser) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, foundUser.password_digest, (err, response) => {
        if (err) {
          reject(err)
        } else if (response) {
          resolve(response)
        } else {
          reject(new Error("password don't match yo..."))
        }
      })
    })
  }

  static create(user) {
    return database('users')
      .insert(user)
      .returning('*')
      .then((user) => {
        return user
      })
      .catch((error) => console.error({error}))
  }

  static findByUsername(username) {
    return database('users')
      .select("*")
      .where("username", username)
      .then((users) => {
        return users[0]
      })
      .catch((error) => console.error({error}))
  }

}

module.exports = User
