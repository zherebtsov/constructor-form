import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Label extends Component {

  static defaultProps = {
    text: '',
    required: false,
    after: false
  };

  setStar = (required) => {
    return required ? '*' : '';
  };

  render() {
    return (
      <label className="form-element__label">
        {this.props.after ? '' : `${this.props.text} ${this.setStar(this.props.required)}`}
        {this.props.children}
        {this.props.after ? `${this.props.text} ${this.setStar(this.props.required)}` : ''}
      </label>
    );
  }
}

Label.propTypes = {
  text: PropTypes.string,
  required: PropTypes.bool,
  after: PropTypes.bool
};
