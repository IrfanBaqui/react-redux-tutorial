import React, { Component } from 'react'
import styles from './Ctrl.css'
import { Button } from '../../Components'
import { NewPostContainer } from '../../Containers'

export default class Ctrls extends Component {

  createNewPost(){
      document.getElementById("modal-createPost").style.display = "block";
  }

  render() {
    return (
     <div>    
        <Button className="createButton" text="create" onClick={this.createNewPost.bind(this)} />
        <NewPostContainer />
     </div>
    )
  }
}