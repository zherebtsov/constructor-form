import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Tools extends Component {

  render() {
    if (this.props.hide) {
      return null;
    }
    return (
      <div className="form-element__tools">
        <button className="button button--icon" title="Редактировать" onClick={this.props.onEditClick}>
          <svg height="17" width="17" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M493.26 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.25 18.74l-74.49 74.49L256 127.98 12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.79-.05 2.69-.15l114.14-12.61L384.02 256l34.74-34.74 74.49-74.49c25-25 25-65.52.01-90.51zM118.75 453.39l-67.58 7.46 7.53-67.69 231.24-231.24 31.02-31.02 60.14 60.14-31.02 31.02-231.33 231.33zm340.56-340.57l-44.28 44.28-60.13-60.14 44.28-44.28c4.08-4.08 8.84-4.69 11.31-4.69s7.24.61 11.31 4.69l37.51 37.51c6.24 6.25 6.24 16.4 0 22.63z"
                  className=""></path>
          </svg>
        </button>
        {this.props.hideUp ? null : (
          <button className="button button--icon" title="Вверх" onClick={this.props.onUpClick}>
            <svg height="17" width="17" viewBox="0 0 448 512">
              <path fill="currentColor"
                    d="M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z"
                    className=""></path>
            </svg>
          </button>
        )}
        {this.props.hideDown ? null : (
          <button className="button button--icon" title="Вниз" onClick={this.props.onDownClick}>
            <svg height="17" width="17" viewBox="0 0 448 512">
              <path fill="currentColor"
                    d="M441.9 250.1l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L250 385.4V44c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v341.4L42.9 230.3c-4.7-4.7-12.3-4.7-17 0L6.1 250.1c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
                    className=""></path>
            </svg>
          </button>
        )}
        <button className="button button--icon" title="Удалить" onClick={this.props.onDelClick}>
          <svg height="17" width="17" viewBox="0 0 320 512">
            <path fill="currentColor"
                  d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                  className=""></path>
          </svg>
        </button>
      </div>
    );
  }
}

Tools.propTypes = {
  onEditClick: PropTypes.func,
  onUpClick: PropTypes.func,
  onDownClick: PropTypes.func,
  onDelClick: PropTypes.func,
  hideUp: PropTypes.bool,
  hideDown: PropTypes.bool,
  hide: PropTypes.bool
};
