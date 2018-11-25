import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, TextArea, RadioGroup, Select } from 'components';
import { FORM_ELEMENT } from 'models/constants/FormElement';
import { FormFieldModel } from 'models/FormFieldModel';
import { Tools } from "./Tools";
import { Edit } from "./Edit";

export class FormControl extends Component {

  static defaultProps = {
    field: new FormFieldModel(),
    onDelClick: () => {},
    onFieldEdit: () => {},
    onPositionChange: () => {},
    length: 0,
    index: 0,
    hideEdit: false
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpenEdit: false
    };
  }

  static getDerivedStateFromProps(props) {
    return props.field;
  }

  onChange = (value) => {
    this.props.onFieldEdit({...this.props.field, ...value});
  };

  toggleEdit = () => {
    this.setState({
      isOpenEdit: !this.state.isOpenEdit
    });
  };

  closeEdit = () => {
    this.setState({
      isOpenEdit: false
    });
  };

  onDelClick = () => {
    this.props.onDelClick(this.props.field._id);
  };

  onPositionChange = (position) => () => {
    this.props.onPositionChange(this.props.field._id, position);
  };

  renderControl = (type) => {
    switch (type) {
      case FORM_ELEMENT.TEXTAREA:
        return (
          <Label text={this.state.label} required={this.state.required}>
            <TextArea
              name={this.state.label}
              placeholder={this.state.placeholder}
              required={this.state.required}
            />
          </Label>
        );
      case FORM_ELEMENT.CHECKBOX:
        return (
          <Label text={this.state.label} required={this.state.required} after>
            <Input
              type="checkbox"
              name={this.state.label}
              required={this.state.required}
            />
          </Label>
        );
      case FORM_ELEMENT.RADIO:
        return (
          <RadioGroup label={this.state.label} required={this.state.required} list={this.state.list}/>
        );
      case FORM_ELEMENT.SELECT:
        return (
          <Label text={this.state.label} required={this.state.required}>
            <Select list={this.state.list} name={this.state.label}/>
          </Label>
        );
      case FORM_ELEMENT.FILE:
        return (
          <Label text={this.state.label} required={this.state.required}>
            <Input
              type="file"
              name={this.state.label}
              required={this.state.required}
            />
          </Label>
        );
      default:
        return (
          <Label text={this.state.label} required={this.state.required}>
            <Input
              name={this.state.label}
              placeholder={this.state.placeholder}
              required={this.state.required}
            />
          </Label>
        );
    }
  };

  render() {
    return (
      <div className="form-element">
        <div className="form-element__container">
          {this.renderControl(this.state.type)}
          <Tools
            onEditClick={this.toggleEdit}
            onDelClick={this.onDelClick}
            onUpClick={this.onPositionChange(1)}
            onDownClick={this.onPositionChange(-1)}
            hideUp={this.props.index === 0}
            hideDown={this.props.length - 1 === this.props.index}
            hide={this.props.hideEdit}
          />
        </div>
        <Edit
          type={this.state.type}
          value={this.state}
          onChange={this.onChange}
          isOpen={this.state.isOpenEdit}
          closeEdit={this.closeEdit}
          hide={this.props.hideEdit}
        />
      </div>
    );
  }
}

FormControl.propTypes = {
  field: PropTypes.object,
  onDelClick: PropTypes.func,
  onFieldEdit: PropTypes.func,
  onPositionChange: PropTypes.func,
  length: PropTypes.number,
  index: PropTypes.number,
  hideEdit: PropTypes.bool
};
