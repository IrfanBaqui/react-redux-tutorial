import { connect } from 'react-redux'
import { upVote, downVote } from '../actions'
import { PostDetails } from '../Components'

function mapStateToProps(state) {
  return {
    posts: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: (postId) => {
      dispatch(upVote(postId))
    },
    downVote: (postId) => {
      dispatch(downVote(postId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)