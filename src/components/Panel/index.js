import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from "./Title";
import { Body } from "./Body";

export class Panel extends Component {

  static Title = Title;
  static Body = Body;

  render() {
    return (
      <section className={`${this.props.className} panel`}>
        {this.props.children}
      </section>
    );
  }
}

Panel.propTypes = {
  className: PropTypes.string
};
