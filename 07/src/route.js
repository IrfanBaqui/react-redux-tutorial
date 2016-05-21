import React, { Component } from 'react'
import { browserHistory, Route, Router } from 'react-router'
import { Home } from './Components'
import { PostContainer } from './Containers'

const routes = (
	<Router history={browserHistory}>
	    <Route path="/" component={Home}>
				<Route path="/post/:postId" component={PostContainer}/>
	    </Route>
	</Router>
 )

export default routes