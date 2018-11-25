import React, { Component } from 'react';

export class Body extends Component {

  render() {
    return (
      <div className="panel__container">{this.props.children}</div>
    );
  }
}
