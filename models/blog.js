const environment     = process.env.NODE_ENV || 'development';
const configuration   = require('../knexfile')[environment];
const database        = require('knex')(configuration);

class Blog {

  static allByUserId(userId) {
    return database('blogs')
      .select('*')
      .where('user_id', userId)
      .then((blogs) => {
        return blogs
      })
      .catch((error) => console.error({error}))
  }

  static create(attributes) {
    return database('blogs')
      .insert(attributes)
      .returning('*')
      .then((blog) => {
        return blog
      })
      .catch((error) => console.error({error}))
  }


}

module.exports = Blog
