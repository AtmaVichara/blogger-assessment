const environment     = process.env.NODE_ENV || 'development';
const configuration   = require('../knexfile')[environment];
const database        = require('knex')(configuration);

class Comment {

  static create(attributes) {
    return database('comments')
      .insert(attributes)
      .returning('*')
      .then((comment) => {
        return comment[0]
      })
      .catch((error) => console.error({error}))
  }
  
}

module.exports = Comment
