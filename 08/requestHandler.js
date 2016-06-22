import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { PostReducer } from './src/reducers'
import { match, RouterContext } from 'react-router'
import defaultState from './src/data/posts.js'
import routes from './src/routes'


function handleRender(req,res){
  const store = createStore(PostReducer, defaultState)
  const initialState = store.getState()
  console.log(initialState)
  const routesMap = {
    routes,
    location: req.url
  }

  match(routesMap, function(error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send("Could not fulfill this request. Please try again later.")
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