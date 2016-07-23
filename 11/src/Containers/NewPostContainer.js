import { connect } from 'react-redux'
import { newPost } from '../actions'
import AddPost from '../Components/AddPost'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    isLoading: state.appState.isLoading
  }
}

function mapDispatchToProps(dispatch) {

  function hideModal(id) {
    document.getElementById(id).style.display = "none"
  }

  return {
    addPost: () => {
      var title = document.getElementById("title")
      var details = document.getElementById("details")
      var time = Date()
      dispatch(newPost({ title: title.value, details: details.value, time: time, author: "Irfan Baqui", comments: [], votes:100 }))

      title.value=""
      details.value=""

      hideModal("modal-createPost")
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)