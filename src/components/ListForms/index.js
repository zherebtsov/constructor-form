import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from './List';

export class ListForms extends Component {

  static defaultProps = {
    list: [],
    onEditClick: () => {},
    onDelClick: () => {}
  };

  render() {
    return (
      <ul className="form-list">
        <List list={this.props.list} onEditClick={this.props.onEditClick} onDelClick={this.props.onDelClick}/>
      </ul>
    );
  }
}

ListForms.propTypes = {
  list: PropTypes.array,
  onEditClick: PropTypes.func,
  onDelClick: PropTypes.func
};

