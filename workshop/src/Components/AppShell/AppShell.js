import React, { Component } from 'react'

/* App shell is dynamic via React Router */
export default class AppShell extends Component {
  render() {
    return (
      <div className="homeContainer">
        {this.props.children}
      </div>
    )
  }
}