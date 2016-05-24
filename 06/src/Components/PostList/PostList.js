import React, { Component } from 'react'
import styles from './PostList.css'
import Post from '../../Components/Post'

export default class PostList extends Component {
  renderPosts () {
    const posts = Object.keys(this.props.posts).map((index, i) => {
      const post = this.props.posts[index]
      return (
        <Post
          postId={post.postId}
          votes={post.votes}
          text={post.title}
          commentCount={post.comments.length}
          time={post.time}
          author={post.author}
          upVote={this.props.upVote}
          downVote={this.props.downVote}
          key={post.postId}
        />
      )
    })
    return posts
  }
  render() {
    return (
      <div className="postsContainer" id="postsContainer">
        {this.renderPosts()}
      </div>
    )
  }
}
