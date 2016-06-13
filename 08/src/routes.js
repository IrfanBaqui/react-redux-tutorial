import React from 'react'
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import Home from './Components/Home'
import AppShell from './Components/AppShell'
import PostDetailsContainer from './Containers/PostDetailsContainer'

const routes = (
	  <Router history={browserHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={Home} />
        <Route path="/post/:postId" component={PostDetailsContainer} />
      </Route>
    </Router>
)

export default routes