import ReactDOM from 'react-dom'
import React from 'react'
import { Post } from './Components'
import postData from './data/posts.js'

ReactDOM.render(<Post postId = { postData.postId }
                      votes = { postData.votes }
                      text = { postData.title }
                      commentCount = { postData.comments.length }
                      time = { postData.time }
                      author = { postData.author }
                />, document.getElementById('main'))