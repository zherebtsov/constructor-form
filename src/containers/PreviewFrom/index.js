import React, { Component } from 'react';
import { Panel, ConstructorForm, SaveForm, Message } from 'components';
import { connect } from 'react-redux';
import { delField, updateField, changePositionField, changeNameForm } from 'redux/modules/previewForm';
import { saveForm } from 'redux/modules/savedForms';
import { Utils } from 'utils';
import { FORM_ELEMENT } from 'models/constants/FormElement';

function mapStateToProps(state) {
  return {
    previewForm: state.previewForm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delField: id => dispatch(delField(id)),
    updateField: (field) => dispatch(updateField(field)),
    changePositionField: (id, position) => dispatch(changePositionField(id, position)),
    changeNameForm: name => dispatch(changeNameForm(name)),
    saveForm: (form) => dispatch(saveForm(form))
  };
}

class PreviewForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      success: ''
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.previewForm.fields !== nextProps.previewForm.fields) {
      this.setState({
        error: '',
        success: ''
      });
    }
    return true;
  }

  valid = (fields) => {
    const labels = [];
    let error = '';

    if (Utils.isEmptyArray(fields)) {
      return 'Добавьте элементы в форму';
    }

    fields.forEach(field => {
      if (field.label === '') {
        error = 'Заполните название всех полей';
      }
      labels.push(field.label);
      if (field.type === FORM_ELEMENT.SELECT || field.type === FORM_ELEMENT.RADIO) {
        if (field.list.length < 2) {
          error = `В поле "${field.label}(${field.type})" необходимо добавить варианты ответа`;
        } else if (Utils.uniqueArray(field.list).length !== field.list.length) {
          error = `В поле "${field.label}(${field.type})" варианты ответов должны быть уникальными`;
        } else if (Utils.hasEmptyElement(field.list)) {
          error = `В поле "${field.label}(${field.type})" варианты ответов не могут быть пустимы`;
        }
      }
    });

    if (Utils.uniqueArray(labels).length !== labels.length) {
      return `Имена полей должны быть уникальны`;
    }

    return error;
  };

  onFormSave = () => {
    const error = this.valid(this.props.previewForm.fields);
    if (error === '') {
      this.setState({
        error: '',
        success: 'Форма успешно сохранена'
      });
      this.props.saveForm(this.props.previewForm);
    } else {
      this.setState({error});
    }
  };

  onNameFormChange = (name) => {
    this.props.changeNameForm(name);
  };

  render() {
    return (
      <Panel className="app-main__preview">
        <Panel.Title>Предпросмотр</Panel.Title>
        <Panel.Body>
          <ConstructorForm
            fields={this.props.previewForm.fields}
            onDelClick={this.props.delField}
            onFieldEdit={this.props.updateField}
            onPositionChange={this.props.changePositionField}
          />
        </Panel.Body>
        <Message.Error text={this.state.error} />
        <Message.Success text={this.state.success} />
        <SaveForm
          onChange={this.onNameFormChange}
          submit={this.onFormSave}
          form={this.props.previewForm}
        />
      </Panel>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewForm)
