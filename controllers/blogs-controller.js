const Blog = require('../models/blog')
const Comment = require('../models/blog')

class BlogsController {

  static async index(req, res, next) {
    let userId = req.session.user.id
    let allBlogs = await Blog.allByUserId(userId)
    console.log(allBlogs)
    res.render('blogs/index', {blogs: allBlogs})
  }

  static new(req, res, next) {
    res.render('blogs/new')
  }

  static async create(req, res, next) {
    let userId = req.session.user.id
    let blog = req.body
    delete blog.action
    blog.user_id = userId
    let newBlog = await Blog.create(blog)
    console.log(newBlog)
    res.redirect('/blog')
  }

}

module.exports = BlogsController
