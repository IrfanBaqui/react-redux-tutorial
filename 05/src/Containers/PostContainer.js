import { connect } from 'react-redux'
import { upVote, downVote } from '../actions'
import { PostList } from '../Components'

function mapStateToProps(state) {
  return {
    posts: state
  }
}

function mapActionsToProps(dispatch) {
  return {
    upVote: (postId) => {
      dispatch(upVote(postId))
    },
    downVote: (postId) => {
      dispatch(downVote(postId))
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(PostList)