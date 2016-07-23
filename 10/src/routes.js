import React from 'react'
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import { Home, AppShell } from './Components'
import { PostDetailsContainer } from './Containers'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AppShell}>
      <IndexRoute component={Home} />
      <Route path="/post/:postId" component={PostDetailsContainer} />
    </Route>
  </Router>
)

export default routes