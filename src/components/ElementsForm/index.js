import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, ButtonGroup } from 'components';
import { FORM_ELEMENT } from 'models/constants/FormElement';

export class ElementsForm extends Component {

  static defaultProps = {
    onClick: () => {}
  };

  render() {
    return (
      <Panel className="app-main__elements">
        <Panel.Title>Элементы формы</Panel.Title>
        <ButtonGroup
          list={Object.keys(FORM_ELEMENT).map((item) => FORM_ELEMENT[item])}
          onClick={this.props.onClick}
        />
      </Panel>
    );
  }
}

ElementsForm.propTypes = {
  onClick: PropTypes.func
};
