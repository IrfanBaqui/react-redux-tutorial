import ReactDOM from 'react-dom'
import React from 'react'
import { Home } from './Components'
import { PostContainer } from './Containers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PostReducer } from './reducers'

const store = createStore(PostReducer)

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>, document.getElementById('main'))