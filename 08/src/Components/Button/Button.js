import React, { Component, PropTypes } from 'react'
if (process.env.BROWSER) {
  var styles = require('./Button.css')
}

export default class Button extends Component {
  render() {
    return (
      <button className={'button ' + (this.props.classes || '')} id={this.props.id}  onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}
