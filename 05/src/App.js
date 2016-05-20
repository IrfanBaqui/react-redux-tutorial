import ReactDOM from 'react-dom'
import React from 'react'
import { PostContainer } from './Containers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PostReducer } from './reducers'

const store = createStore(PostReducer)

ReactDOM.render(
  <Provider store={store}>
    <PostContainer />
  </Provider>, document.getElementById('main'))