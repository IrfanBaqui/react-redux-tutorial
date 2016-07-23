import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { PostReducer } from './src/reducers'
import { match, RouterContext } from 'react-router'
import routes from './src/routes'
import { Home } from './src/Components'
var request = require('request')

function handleRender(req,res) {
request
    .get('http://localhost:8081/posts', function(err, response, body) {
      if (err) {
        throw err;
      }
      var defaultState = JSON.parse(body)
		//  Step 1: Create a Redux store
		  const store = createStore(PostReducer, defaultState)

		// Step 2: Get initial state
		  const initialState = store.getState()

		// Step 8: Define routes on the server
		  const routesMap = {
		    routes,
		    location: req.url
		  }


		// Step 8: Define routes on the server
		  match(routesMap, function(error, redirectLocation, routeContext) {
		    if (error) {
		      res.status(500).send("Could not fulfill this request. Please try again later.")
		    } else if (redirectLocation) {
		      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		    } else if (routeContext) {
		      const html = renderToString(
		        <Provider store={store}>
		          <RouterContext {...routeContext} />
		        </Provider>)
		      res.status(200).send(renderFullPage(html,initialState))
		    } else {
		      res.status(404).send('Not found')
		    }
		  })

  })
}

// Step 4: Prepare DOM on server side
function renderFullPage(component,initialState){

  return `<!doctype html>
		<html>
			<head>
			 <title>Intreddit</title>
			 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
			 <link rel="stylesheet" href="/dist/main.css">
			</head>
		<body>
			<div id="main">${component}</div>
			<script>
	     window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
	    </script>
			<script src="/dist/bundle.js"></script>
		</body>
		</html>
    `
}

module.exports = handleRender