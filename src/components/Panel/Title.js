import React, { Component } from 'react';

export class Title extends Component {

  render() {
    return (
      <h2 className="panel__title">{this.props.children}</h2>
    );
  }
}
