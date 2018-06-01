
$(document).ready(() => {
  $("#newBlog").on("click", () => {
    $("#blogCreationForm").toggle(() => {
      $(this).show('fast', 'swing')
    })
    event.preventDefault()
  })
  $("#createComment").on("click", () => {
    let comment
    let commentTitle = $("#commentTitle").val()
    let commentBody  = $("#commentBody").val()
    comment.title = commentTitle
    comment.body = commentBody
    
  })
})

const postComment = (comment) => {
  fetch('/comments' {
    body: comment
    },
    method: 'POST'
  )
  .then((response) => return response.body)
  .catch((error) => console.error({error}))
}
