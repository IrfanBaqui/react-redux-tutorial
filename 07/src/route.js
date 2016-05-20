import React, { Component } from 'react'
import { browserHistory, Route, Router } from 'react-router'
import { HomeWrap } from './Components'
import { PostContainer } from './Containers'

const routes = (
	<Router history={browserHistory}>
	    <Route path="/" component={HomeWrap}>
	      <Route path="post" component={PostContainer}>
	        <Route path="/post/:postId" component={PostContainer}/>
	      </Route>
	    </Route>
	  </Router>
 )

export default routes