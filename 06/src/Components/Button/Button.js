import React, { Component, PropTypes } from 'react'
import styles from './Button.css'

export default class Button extends Component {
  render() {
    return (
      <button className={'button ' + (this.props.classes || '')} id={this.props.id}  onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}
