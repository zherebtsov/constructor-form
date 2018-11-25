import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {

  static Error = ({text, className, children}) => {
    return <p className={`color_red ${className}`}>{text || children}</p>
  };

  static Success = ({text, children}) => {
    return <p className="color_green">{text || children}</p>
  };

  render() {
    if (this.props.text === '') {
      return null;
    }
    return (
      <p className="hint">{this.props.text || this.props.children}</p>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string
};
