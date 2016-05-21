import ReactDOM from 'react-dom'
import React from 'react'
import { Home } from './Components'
import { PostContainer } from './Containers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PostReducer } from './reducers'

const store = createStore(PostReducer)

const App = (
  <Provider store={store}>
<<<<<<< HEAD
    <HomeWrap />
  </Provider>
)

ReactDOM.render(App, document.getElementById('main'))
=======
    <Home />
  </Provider>, document.getElementById('main'))
>>>>>>> 1b8a2d3d142eb39f4cac113ddf71eb8f1bb7aba2
