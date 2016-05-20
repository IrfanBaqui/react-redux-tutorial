import React, { Component } from 'react'
import styles from './PostList.css'
import { Post } from '../../Components'
import * as _ from 'lodash'

export default class PostList extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="postsContainer" id="postsContainer">
        {
          _.map(this.props.posts, function(postData) {
            return (
              <Post postId = { postData.postId }
                    votes = { postData.votes }
                    text = { postData.title }
                    commentCount = { postData.comments.length }
                    time = { postData.time }
                    author = { postData.author }
                    upVote = { this.props.upVote }
                    downVote = { this.props.downVote }
                    key = { postData.postId }/> )
          }.bind(this))
        }
      </div>
    )
  }
}
