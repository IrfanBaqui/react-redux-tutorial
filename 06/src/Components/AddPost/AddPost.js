import React, { Component } from 'react'
import { FormInput, Button } from '../../Components'
import styles from './AddPost.css'

export default class AddPost extends Component {
  closeModal(event){
      event.target.parentElement.parentElement.style.display = "none";
  }

  render() {
    return (
      <div className="modalWrap" id="modal-createPost">
        <div className="newPostWrapper">
<<<<<<< HEAD
           <i className="fa fa-times fa-lg close-modal" onClick={this.closeModal.bind(this)}>
              </i>
            <h2 className="newPostTitle">{"Create a new Post"}</h2>
            <div className="author-desc">
              {"You will be posting this as anonymous."}
            </div>
            <FormInput type="text" name="Title"/>
            <FormInput type="textarea" name="Details"/>
            <Button text="Submit" onClick={this.props.addPost} />
=======
          <i className="fa fa-times fa-lg close-modal"
             onClick={this.closeModal.bind(this)}>
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
>>>>>>> 1b8a2d3d142eb39f4cac113ddf71eb8f1bb7aba2
        </div>
      </div>
    )
  }
}
