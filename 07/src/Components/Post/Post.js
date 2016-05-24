import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Post.css'

export default class Post extends Component {
  render() {
    return (
     <div className="postWrap">
      <div className="postContainer">
        <Voting
          id={ this.props.postId }
          votes={ this.props.votes }
          upVote={ this.props.upVote }
          downVote={ this.props.downVote } />
        <PostText
          text={this.props.text}
          id={ this.props.postId }
          author = { this.props.author }
          time = {this.props.time}
          commentCount = { this.props.commentCount }
        >
          {this.props.children}
        </PostText>
      </div>
        {(() => {
          if(this.props.children != false)
            return(
              <PostDetails>
                {this.props.children}
              </PostDetails>
            )
          })()}
      </div>
    )
  }
}

class PostText extends Component {

  render() {
    return (
      <div className="postText">
      <div className="mainText">
       {(() => {
        if(this.props.children != false)
          return(
            <h1 className="postTitle">
              {this.props.text}
            </h1>)
        else
          return(
            <Link to={'/post/' + this.props.id} className="postLink">
              {this.props.text}
            </Link>
          )
      })()}

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

class PostDetails extends Component {
  render() {
    return (
      <div className="postData">
        {this.props.children}
      </div>
    )
  }
}
