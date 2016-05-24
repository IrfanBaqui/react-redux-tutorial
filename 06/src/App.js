import ReactDOM from 'react-dom'
import React from 'react'
import Home from './Components/Home'
import PostContainer from './Containers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PostReducer } from './reducers'

const store = createStore(PostReducer)

const App = (
  <Provider store={store}>
    <Home />
  </Provider>
)

ReactDOM.render(App, document.getElementById('main'))