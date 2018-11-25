import React, { Component } from 'react';
import { FORM_ELEMENT } from 'models/constants/FormElement';

export class Input extends Component {

  addClassName = (type) => {
    return (type === FORM_ELEMENT.RADIO) || (type === FORM_ELEMENT.CHECKBOX) ? '' : 'form-element__control';
  };

  render() {
    return (
      <input
        className={this.addClassName(this.props.type)}
        {...this.props}
      />
    );
  }
}
