var uuid = require('node-uuid')

export function upVote (postId) {
  return {
    type: 'UPVOTE',
    postId
  }
}

export function downVote (postId) {
  return {
    type: 'DOWNVOTE',
    postId
  }
}

export function addPost (title, details, time, author) {
  var POST_ID = uuid.v4()
  return {
    type: 'ADD_POST',
    post: {
      title,
      details,
      time,
      postId: POST_ID,
      author,
      votes:0,
      comments: []
    }
  }
}