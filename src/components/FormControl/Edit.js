import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, TextArea } from 'components';
import { FORM_ELEMENT } from 'models/constants/FormElement';

export class Edit extends Component {

  static defaultProps = {
    onChange: () => {},
    value: PropTypes.object,
    isOpen: PropTypes.bool,
    type: PropTypes.string,
    closeEdit: PropTypes.func,
    hide: PropTypes.bool
  };

  onChange = (name) => (evt) => {
    const value = {};
    value[name] = name === 'required' ? evt.target.checked : evt.target.value;
    if (name === 'list') {
      value[name] = evt.target.value.split(/,\s*/);
    }
    this.props.onChange(value);
  };

  toggle = (isOpen) => {
    return isOpen ? '' : 'form-element__edit--close';
  };

  renderExtraFields = (type) => {
    switch (type) {
      case FORM_ELEMENT.INPUT:
      case FORM_ELEMENT.TEXTAREA:
        return (
          <div className="form-element form-element--dark">
            <Label text="Placeholder">
              <Input
                value={this.props.value.placeholder}
                onChange={this.onChange('placeholder')}
              />
            </Label>
          </div>
        );
      case FORM_ELEMENT.RADIO:
      case FORM_ELEMENT.SELECT:
        return (
          <div className="form-element form-element--dark">
            <Label text="List (перечислите элементы формы через запятую)">
            <TextArea
              defaultValue={this.props.value.list.toString()}
              onChange={this.onChange('list')}
            />
            </Label>
          </div>
        );
      case FORM_ELEMENT.CHECKBOX:
      case FORM_ELEMENT.FILE:
      default:
        return null;
    }
  };

  render() {
    if (this.props.hide) {
      return null;
    }
    return (
      <div className={`form-element__edit ${this.toggle(this.props.isOpen)}`}>
        <button className="button button--icon button--white close-button" title="Закрыть" onClick={this.props.closeEdit}>
          <svg height="17" width="17" viewBox="0 0 320 512">
            <path fill="currentColor"
                  d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                  className=""></path>
          </svg>
        </button>
        <div className="form-element form-element--dark">
          <Label text="Label">
            <Input
              value={this.props.value.label}
              onChange={this.onChange('label')}
            />
          </Label>
        </div>
        {this.renderExtraFields(this.props.type)}
        <div className="form-element form-element--dark">
          <Label text="Required" after>
            <input
              type="checkbox"
              checked={this.props.value.required}
              onChange={this.onChange('required')}
            />
          </Label>
        </div>
      </div>
    );
  }
}

Edit.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.object,
  isOpen: PropTypes.bool,
  type: PropTypes.string,
  closeEdit: PropTypes.func,
  hide: PropTypes.bool
};
