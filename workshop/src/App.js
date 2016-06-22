import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PostReducer } from './reducers'
import routes from './routes'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import defaultState from './data/posts.js'


const store = createStore(PostReducer, defaultState)

// Step 6: Have client use the initial state defined by the server
//const initialState = window.__INITIAL_STATE__
//const store = createStore(PostReducer, initialState)

// Step 13: Use Thunk middleware
//const initialState = window.__INITIAL_STATE__
//const store = createStore(PostReducer, initialState, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    { routes }
  </Provider>, document.getElementById('main')
)

