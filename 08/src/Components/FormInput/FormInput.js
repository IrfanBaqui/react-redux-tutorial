import React, { Component, PropTypes } from 'react'
import styles from './FormInput.css'

export default class FormInput extends Component {
  render() {
    return (
      <div className="inputWrapper">
        <label className="formLabel" htmlFor={this.props.name.toLowerCase()}>
          {this.props.name}
        </label>
          {
            this.props.type == "textarea"?
              <textarea className="formInput"
                        id={this.props.name.toLowerCase().replace(/ /g,"-")}
                        placeholder={this.props.name}/>
              :
              <input className="formInput"
                     type={this.props.type}
                     id={this.props.name.toLowerCase().replace(/ /g,"-")}
                     placeholder={this.props.name}/>
          }
      </div>
    )
  }
}