import React, { Component } from 'react'
import styles from './Post.css'

/* export Post Component as default */
export default class Post extends Component {
  render() {
    return (
      <div
        className="postContainer"
        id={this.props.dataId}>
        <Voting votes={this.props.votes} />
        <PostText
          text={this.props.text}
          author={this.props.author}
          commentCount = {this.props.commentCount}
        />
      </div>
    )
  }
}

class PostText extends Component {
  render() {
    return (
      <div className="postText">
        <div className="mainText">
          <a href="#" className="postLink">
            {this.props.text}
          </a>
        </div>
        <div className="postDetails">
          {"submitted on " + this.props.time + " ago by " + this.props.author + " to /i/general"}
        </div>
        <div className="commentsText">
          {this.props.commentCount+" comments"}
        </div>
      </div>
    )
  }
}

class Voting extends Component {
  render() {
    return (
      <div className="voting">
        <div className="upvote">
          <i className="fa fa-angle-up fa-lg"></i>
        </div>
        <div className="voteCount">
          {this.props.votes}
        </div>
        <div className="downvote">
          <i className="fa fa-angle-down fa-lg"></i>
        </div>
      </div>
    )
  }
}
