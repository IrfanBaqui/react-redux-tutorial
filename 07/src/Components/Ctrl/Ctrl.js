import React, { Component } from 'react'
import styles from './Ctrl.css'
import Button from '../Button'
import NewPostContainer from '../../Containers/NewPostContainer'

export default class Ctrls extends Component {

  createNewPost(){
    document.getElementById("modal-createPost").style.display = "block";
  }

  render() {
    return (
     <div>
        <Button className="createButton"
          text="create"
          onClick={this.createNewPost.bind(this)}
        />
        <NewPostContainer />
     </div>
    )
  }
}