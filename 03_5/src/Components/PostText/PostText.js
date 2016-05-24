import React from 'react';

export default class PostText extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    textColor: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { textColor } = this.props
    console.log('textColor', textColor)
      return (
        <div className="postText">
          <div className="mainText">
            <a href="#" className="postLink">
              {this.props.text}
            </a>
          </div>
          <div className="postDetails" style={{color: textColor, marginBottom: '40px'}}>
            {"submitted on " + this.props.time + " ago by " + this.props.author + " to /i/general"}
          </div>
          <div className="commentsText">
            {this.props.commentCount+" comments"}
          </div>
        </div>
      )
   }
}
