import { connect } from 'react-redux'
import { castVote } from '../actions'
import PostDetails from '../Components/PostDetails'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    isLoading: state.appState.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: (postId) => {
      dispatch(castVote(postId,{'vote':'upVote'}))
    },
    downVote: (postId) => {
      dispatch(castVote(postId,{'vote':'downVote'}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)