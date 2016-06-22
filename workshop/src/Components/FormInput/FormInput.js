import React, { Component, PropTypes } from 'react'

// Step 7: Distinguish between client and server side specific code
if (process.env.BROWSER) {
  var styles = require('./FormInput.css')
}

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