import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ButtonGroup extends Component {

  static defaultProps = {
    list: [],
    onClick: () => {}
  };

  onClick = (buttonName) => () => {
    this.props.onClick(buttonName);
  };

  renderItems = (list) => {
    return list.map((name, index) => {
      return (
        <li className="button-group__item" key={`${index}_btn-grp`}>
          <button
            className="button-group__button button button--outline"
            onClick={this.onClick(name)}
          >
            {name}
          </button>
        </li>
      );
    })
  };

  render() {
    return (
      <ul className="button-group">
        {this.renderItems(this.props.list)}
      </ul>
    );
  }
}

ButtonGroup.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func
};
