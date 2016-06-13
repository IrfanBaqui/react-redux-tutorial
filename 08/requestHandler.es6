import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { PostReducer } from './src/reducers'
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import PostDetailsContainer from './src/Containers/PostDetailsContainer'
import { Home, AppShell } from './src/Components'
import defaultState from './src/data/posts.js'
import { match, RouterContext } from 'react-router'


function handleRender(req,res){
  const store = createStore(PostReducer, defaultState)
  const initialState = store.getState() 
  const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={AppShell}>
        <IndexRoute component={Home} />
        <Route path="/post/:postId" component={PostDetailsContainer} />
      </Route>
    </Router>
    )

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
      </Provider>)
      res.status(200).send(renderFullPage(html,initialState))
    } else {
      res.status(404).send('Not found')
    }
  })
}

function renderFullPage(html,initialState){

  return `<!doctype html>
		<html>
			<head>
			 <title>Intreddit</title>
			 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
			 <link rel="stylesheet" href="/dist/main.css">
			</head>
		<body>
			<div id="main">${html}</div>
			<script>
	     window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
	    </script>
			<script src="/dist/bundle.js"></script>
		</body>
		</html>
    `
}

module.exports = handleRender;