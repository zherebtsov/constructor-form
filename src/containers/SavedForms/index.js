import React, { Component } from 'react';
import { Panel, ListForms } from 'components';
import { connect } from 'react-redux';
import { createNewForm, loadForm } from 'redux/modules/previewForm';
import { delForm } from 'redux/modules/savedForms';

function mapStateToProps(state) {
  return {
    saved: state.saved
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createNewForm: () => dispatch(createNewForm()),
    loadForm: (form) => dispatch(loadForm(form)),
    delForm: (id) => dispatch(delForm(id))
  };
}

class SavedForms extends Component {

  render() {
    return (
      <Panel className="app-main__form-list">
        <Panel.Title>Сохраненные формы</Panel.Title>
        <Panel.Body>
          <ListForms list={this.props.saved.forms} onEditClick={this.props.loadForm} onDelClick={this.props.delForm}/>
          <p>
            <button
              className="button button--width100"
              onClick={this.props.createNewForm}
            >
              Создать новую форму
            </button>
          </p>
        </Panel.Body>
      </Panel>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedForms)
