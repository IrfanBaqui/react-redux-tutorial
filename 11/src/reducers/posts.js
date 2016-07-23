import * as _ from 'lodash'

export default function posts (state, action = null) {
  switch (action.type) {
    case 'UPVOTE' : {
      var result = _.cloneDeep(state)
      var post = result['posts'][action.postId]
      var votes = parseInt(post.votes)
      post.votes = votes + 1
      return result
    }
    case 'DOWNVOTE' : {
      var result = _.cloneDeep(state)
      var post = result['posts'][action.postId]
      var votes = parseInt(post.votes)
      post.votes = votes - 1
      return result
    }
    // Step 12: Defining reducers to change state based on async API calls
    case 'POST_CREATED' : {
      var result = _.cloneDeep(state)
      result['posts'][action.postId] = action.postDetails
      return result
    }
    case 'TOGGLE_LOADING' : {
      var result = _.cloneDeep(state)
      result['appState']['isLoading'] = !result['appState']['isLoading']
      return result
    }
    default :
      return state
  }
}