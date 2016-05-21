import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { PostReducer } from './reducers'
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import { Root, Home } from './Components'
import { PostContainer, PostDetailsContainer } from './Containers'
import defaultState from './data/posts.js'

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
const store = createStore(PostReducer, defaultState, enhancers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="/post/:postId" component={PostDetailsContainer} />
      </Route>
    </Router>
  </Provider>, document.getElementById('main'))