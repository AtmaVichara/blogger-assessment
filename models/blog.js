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

    // return database.raw(`
    //   SELECT blogs.*,
    //   (
    //     SELECT json_agg(json_build_object('title', title, 'body', body, 'id', id))
    //     FROM comments
    //     WHERE comments.blog_id = blogs.id
    //   ) AS comments
    //   FROM blogs
    //   INNER JOIN comments ON blogs.id = comments.blog_id
    //   WHERE blogs.user_id = ?
    //   GROUP BY blogs.id
    //   ORDER BY blogs.created_at
    // `, userId)
    // .then((blogs) => {
    //   return blogs.rows
    // })
    // .catch((error) => console.error({error}))
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
