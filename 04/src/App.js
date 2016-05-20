import ReactDOM from 'react-dom'
import React from 'react'
import { PostList } from './Components'
import postData from './data/posts.js'

ReactDOM.render(<PostList posts = { postData } />, document.getElementById('main'))