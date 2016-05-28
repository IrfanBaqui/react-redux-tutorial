import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { PostReducer } from './src/reducers'
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import PostDetailsContainer from './src/Containers/PostDetailsContainer'
import Home from './src/Components/Home'
import defaultState from './src/data/posts.js'


function handleRender(req,res){

	const store = createStore(PostReducer, defaultState)
	const initialState = store.getState() 
	const html = renderToString(
		<Provider store={store}>
    	  <Home />
        </Provider>
        )
    console.log(html)
	res.send(renderFullPage(html,initialState))
}

function renderFullPage(html,initialState){

  return `<!doctype html>
		<html>
			<head>
			    <title>Intreddit</title>
			    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
			    <link rel="stylesheet" href="dist/main.css">
			</head>
		<body>
			<div id="main">${html}</div>
			<script>
	          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
	        </script>
			<script src="dist/bundle.js"></script>
		</body>
		</html>
    `
}

module.exports = handleRender;