import React, { Component } from 'react'
import styles from './Post.css'    

export default class Post extends Component {
  render() {
    return (
      <div className="postContainer">
        <Voting
          id={ this.props.postId }
          votes={ this.props.votes }
          upVote={ this.props.upVote }
          downVote={ this.props.downVote } />
        <PostText text={this.props.text}
                  author = { this.props.author }
                  commentCount = { this.props.commentCount } />
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
          {this.props.commentCount + " comments"}
        </div>
      </div>
    )
  }
}

class Voting extends Component {

  render() {
    return (
      <div className="voting">
        <div className="upvote" onClick= { () => { this.props.upVote(this.props.id) } }>
          <i className="fa fa-angle-up fa-lg">
          </i>
        </div>
        <div className="voteCount">
          {this.props.votes}
        </div>
        <div className="downvote" onClick= { () => { this.props.downVote(this.props.id) } }>
          <i className="fa fa-angle-down fa-lg">
          </i>
        </div>
      </div>
    )
  }
}
