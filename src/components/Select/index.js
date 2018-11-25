import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Select extends Component {

  static defaultProps = {
    name: '',
    list: []
  };

  renderOptions = (list) => {
    return list.map((item, index) => {
      return (<option key={`${index}_slc`} value={item}>{item}</option>);
    });
  };

  render() {
    return (
      <select className="form-element__control" name={this.props.name}>
        {this.renderOptions(this.props.list)}
      </select>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array
};
