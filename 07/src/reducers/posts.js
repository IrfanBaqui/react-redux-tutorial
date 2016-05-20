import postData from '../data/posts.js'
import * as _ from 'lodash'

export default function posts (state = postData, action = null) {
  switch (action.type) {
    case 'UPVOTE' : {
      var result = _.cloneDeep(state)
      var post = result[action.postId]
      var votes = parseInt(post.votes)
      post.votes = votes + 1
      return result
    }
    case 'DOWNVOTE' : {
      var result = _.cloneDeep(state)
      var post = result[action.postId]
      var votes = parseInt(post.votes)
      post.votes = votes - 1
      return result
    }
    case 'ADD_POST' : {
      var result = _.cloneDeep(state)
      result[action.post.postId] = action.post
      return result
    }
    default :
      return state
  }
}