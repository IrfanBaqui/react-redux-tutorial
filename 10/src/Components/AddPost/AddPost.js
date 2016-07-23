import React, { Component } from 'react'
import Button from '../Button/Button'
import FormInput from '../FormInput/FormInput'

// Step 7: Distinguish between client and server side specific code
if (process.env.BROWSER) {
  var styles = require('./AddPost.css')
}

export default class AddPost extends Component {
 closeModal(event){
      event.target.parentElement.parentElement.style.display = "none";
  }

  render() {
    if (!this.props.isLoading) {
      return (
        <div className="modalWrap" id="modal-createPost">
          <div className="newPostWrapper">
            <i className="fa fa-times fa-lg close-modal" onClick={this.closeModal.bind(this)}>
            </i>
            <h2 className="newPostTitle">{"Create a new Post"}</h2>
            <div className="author-desc">
              {
                "You will be posting this as anonymous."
              }
            </div>
            <FormInput type="text" name="Title"/>
            <FormInput type="textarea" name="Details"/>
            <Button text="Submit" onClick={this.props.addPost} />
          </div>
        </div>
      )
    }
    else {
      return (
        <div id="modal-loader">
          LOADING...
        </div>
      )
    }

  }
}
