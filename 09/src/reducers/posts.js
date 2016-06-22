import * as _ from 'lodash'

export default function posts (state, action = null) {
  switch (action.type) {
    case 'UPVOTE' : {
      console.log(state)
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
    case 'CREATE_POST' : {
      var result = _.cloneDeep(state)
      //result['isLoading'] = true
      return result
    }
    case 'POST_CREATED' : {
      var result = _.cloneDeep(state)
      result[action.postId] = action.postDetails
      //result['isLoading'] = false
      return result
    }
    default :
      return state
  }
}