import React, { Component, PropTypes } from 'react'
import styles from './Button.css'

export default class Button extends Component {
  render() {
    const className = this.props.classes || ''
    const classes = 'button ' + className
    return (
      <button className={classes} id={this.props.id} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}
