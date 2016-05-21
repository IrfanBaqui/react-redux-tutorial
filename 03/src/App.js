import ReactDOM from 'react-dom'
import React from 'react'
import { Post } from './Components'
import postData from './data/posts.js'

const PostComponent = (
  <Post
    postId={postData.postId}
    votes={postData.votes}
    text={postData.title}
    commentCount={postData.comments.length}
    time={postData.time}
    author={postData.author}
  />
)

ReactDOM.render(PostComponent, document.getElementById('main'))
