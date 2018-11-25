import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConstructorForm, Message, Panel } from 'components';
import { Utils } from 'utils';

function mapStateToProps(state) {
  return {
    saved: state.saved
  };
}

class ResultForm extends Component {

  getFormFields = () => {
    const id = this.props.location.search.slice(1);
    const form = this.props.saved.forms.find(form => form._id === id);
    return form ? form.fields : [];
  };

  render() {
    const fields = this.getFormFields();
    if (Utils.isEmptyArray(fields)) {
      return (<Message.Error className="text-align_center">Форма не найдена</Message.Error>)
    }
    return (
      <main className="container container--tablet">
        <Panel>
          <Panel.Title>Анкета</Panel.Title>
          <Panel.Body>
            <form action="https://echo.htmlacademy.ru" method="POST">
              <ConstructorForm
                fields={this.getFormFields()}
                hideEdit={true}
              />
              <div className="form-element text-align_center">
                <button className="button" type="submit">Отправить</button>
              </div>
            </form>
          </Panel.Body>
        </Panel>
      </main>
    );
  }
}

export default connect(mapStateToProps)(ResultForm)
