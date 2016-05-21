import React, { Component } from 'react'
import styles from './PostList.css'
import { Post } from '../../Components'

export default class PostList extends Component {
  renderPosts () {
    const posts = this.props.posts.map((post, i) => {
      return (
        <Post postId={post.postId}
              votes={post.votes}
              text={post.title}
              commentCount={post.comments.length}
              time={post.time}
              author={post.author}
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
