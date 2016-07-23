import { connect } from 'react-redux'
import { castVote } from '../actions'
import PostList from '../Components/PostList'

function mapStateToProps(state) {
  return {
    posts: state.posts,
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

export default connect(mapStateToProps, mapDispatchToProps)(PostList)