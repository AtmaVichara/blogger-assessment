const Comment = require('../models/comment')

class CommentsController {

  static async create(req, res, next) {
    let comment = req.body
    let newComment = await Comment.create(comment)
  }

}

module.exports = CommentsController
