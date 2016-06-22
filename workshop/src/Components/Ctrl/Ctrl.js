import React, { Component } from 'react'
// Step 7: Distinguish between client and server side specific code
if (process.env.BROWSER) {
  var styles = require('./Ctrl.css')
}
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