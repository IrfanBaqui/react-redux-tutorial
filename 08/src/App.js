import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { PostReducer } from './reducers'
import routes from './routes'

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const initialState = window.__INITIAL_STATE__
const store = createStore(PostReducer, initialState, enhancers)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>, document.getElementById('main'))