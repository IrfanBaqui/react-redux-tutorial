import React, { PropTypes, Component } from 'react'
import Voting from '../Voting'
import PostText from '../PostText'
import styles from './Post.css'

export default class Post extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired
  }
  render() {
    const { textColor, handleVote, increment } = this.props
    return (
      <div
        className="postContainer"
        id={this.props.postId}>
        <Voting votes={this.props.votes} increment={increment} doVote={handleVote} />
        <PostText
          textColor={this.props.textColor}
          text={this.props.text}
          author={this.props.author}
          commentCount={this.props.commentCount}
        />
      </div>
    )
  }
}

