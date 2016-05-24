import React, { Component } from 'react'
import Ctrl from '../../Components/Ctrl/Ctrl'
import PostContainer from '../../Containers/PostContainer'

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Ctrl />
        <PostContainer />
      </div>
    )
  }
}