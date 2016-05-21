import React, { Component } from 'react'
import styles from './Ctrl.css'
import { Button } from '../../Components'
import { NewPostContainer } from '../../Containers'

export default class Ctrls extends Component {
<<<<<<< HEAD
  constructor (props) {
    super(props)
    this.createNewPost = this.createNewPost.bind(this)
  }
  createNewPost(){
    document.getElementById("modal-createPost").style.display = "block";
  }
=======

  createNewPost(){
      document.getElementById("modal-createPost").style.display = "block";
  }

>>>>>>> 1b8a2d3d142eb39f4cac113ddf71eb8f1bb7aba2
  render() {
    return (
     <div>
        <Button className="createButton" text="create" onClick={this.createNewPost} />
        <NewPostContainer />
     </div>
    )
  }
}
