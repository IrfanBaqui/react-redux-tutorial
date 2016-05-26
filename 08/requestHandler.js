import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { PostReducer } from './reducers'
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import PostDetailsContainer from './Containers/PostDetailsContainer'
import PostContainer from './Containers/PostContainer'
import defaultState from './data/posts.js'


function handleRender(req,res){

	const store = createStore(PostReducer, defaultState)

	const html = renderToString(
		<Provider store={store}>
    	  <Router history={browserHistory}>
            <Route path="/" component={AppShell}>
            <IndexRoute component={Home} />
            <Route path="/post/:postId" component={PostDetailsContainer} /></Route>
          </Router>
        </Provider>)

	const initalState = store.getState()
	res.send(renderFullPage(html,initalState))
}

function renderFullPage(html,initalState){

	return '
	<!doctype html>
	<html>
	  <head>
	    <title>Intreddit</title>
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
	  </head>
	  <body>
	   <div id="main">${html}</div>
	   <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
	   <script src="dist/bundle.js"></script>
	  </body>
	</html>
	'
}

module.exports = requestHandler;

