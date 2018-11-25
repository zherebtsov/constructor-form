import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components';

export class RadioGroup extends Component {

  static defaultProps = {
    label: '',
    required: false,
    list: []
  };

  setStar = (required) => {
    return required ? '*' : '';
  };

  renderRadio = (list) => {
    return list.map((item, index) => {
      return (
        <div className="form-element" key={`${index}_rdo-grp`}>
          <Label text={item} after>
            <input type="radio" name={this.props.label} required={this.props.required} defaultChecked={index === 0}/>
          </Label>
        </div>
      );
    });
  };

  render() {
    return (
      <fieldset className="form-element__fieldset">
        <legend className="form-element__label">{`${this.props.label} ${this.setStar(this.props.required)}`}</legend>
        {this.renderRadio(this.props.list)}
      </fieldset>
    );
  }
}

RadioGroup.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  list: PropTypes.array
};
