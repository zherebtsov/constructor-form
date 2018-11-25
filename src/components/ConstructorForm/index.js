import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Utils } from 'utils';
import { FormControl, Message } from 'components';

export class ConstructorForm extends Component {

  static defaultProps = {
    fields: [],
    onDelClick: () => {},
    onFieldEdit: () => {},
    onPositionChange: () => {},
    hideEdit: false
  };

  render() {
    if (Utils.isEmptyArray(this.props.fields)) {
      return (<Message>Выберите элементы формы</Message>)
    }
    return this.props.fields.map((field, index) => {
      return (
        <FormControl
          key={`${index}_prev-form`}
          field={field}
          onDelClick={this.props.onDelClick}
          onFieldEdit={this.props.onFieldEdit}
          onPositionChange={this.props.onPositionChange}
          index={index}
          length={this.props.fields.length}
          hideEdit={this.props.hideEdit}
        />
      );
    })
  }
}

ConstructorForm.propTypes = {
  fields: PropTypes.array,
  onDelClick: PropTypes.func,
  onFieldEdit: PropTypes.func,
  onPositionChange: PropTypes.func,
  hideEdit: PropTypes.bool
};
