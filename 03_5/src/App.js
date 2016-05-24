import ReactDOM from 'react-dom'
import React from 'react'
import { Post } from './Components'
import postData from './data/posts.js'

function test () {
  alert('hello')
}

class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      count: postData.votes || 0
    }
    this.incrementVote = this.incrementVote.bind(this)
  }

  incrementVote() {
    this.setState({
      count: this.state.count + 1
    })
    // update local storage too
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 5000);
  }

  render() {
    var count = this.state.count
    let content = null
    if(this.state.loaded) {
      content = (
        <Post
          textColor={"blue"}
          handleVote={test}
          postId={postData.postId}
          votes={this.state.count}
          text={postData.title}
          increment={this.incrementVote}
          commentCount={postData.comments.length}
          time={postData.time}
          author={postData.author}
        />
      )
    } else {
      content = (
        <div>Loading..</div>
      )
    }

    return (
      <span>
        {content}
      </span>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'))
