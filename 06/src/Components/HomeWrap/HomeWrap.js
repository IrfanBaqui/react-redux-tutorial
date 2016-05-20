import React, { Component } from 'react'
import styles from './HomeWrap.css'
import { Ctrl } from '../../Components'
import { PostContainer } from '../../Containers'

export default class HomeWrap extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Ctrl />
        <PostContainer />
      </div>
    )
  }
}