import React, { Component } from 'react'
import { Ctrl } from '../../Components'
import { PostContainer } from '../../Containers'

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