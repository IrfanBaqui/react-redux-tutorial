import React from 'react';

export default class Voting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { doVote, increment } = this.props
    return (
     <div className="voting">
       <div className="upvote" onClick={increment}>
         <i className="fa fa-angle-up fa-lg"></i>
       </div>
       <div className="voteCount">
         {this.props.votes}
       </div>
       <div className="downvote">
         <i className="fa fa-angle-down fa-lg"></i>
       </div>
     </div>
    );
  }
}
