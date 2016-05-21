import React, { Component, PropTypes } from 'react'
import styles from './FormInput.css'

export default class FormInput extends Component {
  render() {
    const { name, type } = this.props
    return (
      <div className="inputWrapper">
        <label className="formLabel" htmlFor={name.toLowerCase()}>
          {name}
        </label>
          {
            type == "textarea" ?
              <textarea className="formInput" id={name.toLowerCase().replace(/ /g,"-")} placeholder={name}/>
              :
              <input className="formInput" type={type} id={name.toLowerCase().replace(/ /g,"-")} placeholder={name}/>
          }
      </div>
    )
  }
}
