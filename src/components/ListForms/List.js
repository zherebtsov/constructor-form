import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Utils } from 'utils';
import { Link } from 'react-router-dom';

export class List extends Component {

  onEditClick = (form) => () => {
    this.props.onEditClick(form);
  };

  onDelClick = (id) => () => {
    this.props.onDelClick(id);
  };

  render() {
    if (Utils.isEmptyArray(this.props.list)) {
      return (<p className="hint">Сохраненных форм нет</p>)
    }
    return this.props.list.map((item, index) => {
      return (
        <li key={`${index}_${item._id}_lst-frm`} className="form-list__item">
          <div className="form-list__name">{item.name}</div>
          <div className="form-list__controls">
            <button className="button button--icon" title="Редактировать" onClick={this.onEditClick(item)}>
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor"
                      d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                      className=""></path>
              </svg>
            </button>
            <Link className="button button--icon" title="Открыть" to={`/form?${item._id}`} target="_blank">
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor"
                      d="M576 14.4l-.174 163.2c0 7.953-6.447 14.4-14.4 14.4H528.12c-8.067 0-14.56-6.626-14.397-14.691l2.717-73.627-2.062-2.062-278.863 278.865c-4.686 4.686-12.284 4.686-16.971 0l-23.029-23.029c-4.686-4.686-4.686-12.284 0-16.971L474.379 61.621l-2.062-2.062-73.626 2.717C390.626 62.44 384 55.946 384 47.879V14.574c0-7.953 6.447-14.4 14.4-14.4L561.6 0c7.953 0 14.4 6.447 14.4 14.4zM427.515 233.74l-24 24a12.002 12.002 0 0 0-3.515 8.485V458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h301.976c10.691 0 16.045-12.926 8.485-20.485l-24-24A12.002 12.002 0 0 0 331.976 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V242.225c0-10.691-12.926-16.045-20.485-8.485z"
                      className=""></path>
              </svg>
            </Link>
            <button className="button button--icon" title="Удалить" onClick={this.onDelClick(item._id)}>
              <svg height="20" width="20" viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                      className=""></path>
              </svg>
            </button>
          </div>
        </li>
      )
    });
  }
}

List.propTypes = {
  list: PropTypes.array,
  onEditClick: PropTypes.func,
  onDelClick: PropTypes.func
};

