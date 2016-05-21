import React, { Component } from 'react'
import { Home } from '../../Containers'

export default class Root extends Component {
  render() {
    return (
      <div className="homeContainer">
        { this.props.children }
      </div>
    )
  }
}