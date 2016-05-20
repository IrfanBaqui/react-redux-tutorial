import { connect } from 'react-redux'
import { addPost } from '../actions'
import { AddPost } from '../Components'

function mapStateToProps(state) {
  return {
    posts: state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: () => {
      var title = document.getElementById("title");
	  var details = document.getElementById("details");
	  var time = Date();
	  dispatch(addPost(title.value,details.value,time,"Anonymous"));
	  
	  title.value="";
	  details.value="";
	  
	  document.getElementById("modal-createPost").style.display = "none";
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)