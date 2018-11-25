import React, { Component } from 'react';

export class TextArea extends Component {

  render() {
    return (
      <textarea
        className="form-element__control"
        rows="4"
        {...this.props}
      />
    );
  }
}
