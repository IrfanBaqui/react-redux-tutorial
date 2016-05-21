import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PostReducer } from './reducers'
import { browserHistory, Route, Router } from 'react-router'
import { Home } from './Components'
import { PostContainer, PostDetailsContainer } from './Containers'

const store = createStore(PostReducer)

class Post extends Component {
  render() {
    return (
      <div className="User">
        <h1>User id: {this.props.location.query.postId}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    {(
	<Router history={browserHistory}>
	    <Route path="/" component={Home} />
	    <Route path="/post" component={PostDetailsContainer} />
	</Router>
 )}
  </Provider>, document.getElementById('main'))