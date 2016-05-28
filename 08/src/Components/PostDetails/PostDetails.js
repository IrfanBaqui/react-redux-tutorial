import React, { Component } from 'react'
if (process.env.BROWSER) {
  var styles = require('./PostDetails.css')
}
import Post from '../Post'
import { browserHistory } from 'react-router'

export default class PostDetails extends Component {
 render() {
    var post = this.props.posts[this.props.params.postId]

    return (
       <div className="postDetailsContainer" id="postDetailsContainer">
        {
          <Post key={post.postId}
                postId={post.postId}
                upVote = { this.props.upVote }
                downVote = { this.props.downVote }
                text={post.title}
                time={post.time}
                author={post.author}
                votes={post.votes}
                commentCount={post.comments.length}>
           {post.details}
          </Post>
        }
      </div>
    )
  }
}