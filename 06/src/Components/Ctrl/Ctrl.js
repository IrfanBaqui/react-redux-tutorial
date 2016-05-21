import React, { Component } from 'react'
import styles from './Ctrl.css'
import { Button } from '../../Components'
import { NewPostContainer } from '../../Containers'

export default class Ctrls extends Component {
  constructor (props) {
    super(props)
    this.createNewPost = this.createNewPost.bind(this)
  }
  createNewPost(){
    document.getElementById("modal-createPost").style.display = "block";
  }
  render() {
    return (
     <div>
        <Button className="createButton" text="create" onClick={this.createNewPost} />
        <NewPostContainer />
     </div>
    )
  }
}
