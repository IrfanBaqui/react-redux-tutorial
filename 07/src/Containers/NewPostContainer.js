import { connect } from 'react-redux'
import { addPost } from '../actions'
import { AddPost } from '../Components'

function mapStateToProps(state) {
  return {
    posts: state
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
      dispatch(addPost(title.value, details.value, time, "Anonymous"))

      title.value=""
      details.value=""

      hideModal("modal-createPost")
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)