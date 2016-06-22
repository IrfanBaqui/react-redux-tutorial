import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { PostReducer } from './reducers'
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import { Home, AppShell } from './Components'
import { PostDetailsContainer } from './Containers'

const enhancer = () => { return window.devToolsExtension ? window.devToolsExtension() : f => f }


const initialState = window.__INITIAL_STATE__
const store = createStore(PostReducer, initialState, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppShell}>
        <IndexRoute component={Home} />
        <Route path="/post/:postId" component={PostDetailsContainer} />
      </Route>
    </Router>
  </Provider>, document.getElementById('main'))