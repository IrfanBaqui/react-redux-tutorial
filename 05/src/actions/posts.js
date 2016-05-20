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