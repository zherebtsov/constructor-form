import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'components';
import { Link } from 'react-router-dom';

export class SaveForm extends Component {

  static defaultProps = {
    submit: () => {},
    onChange: () => {},
    form: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.form.name !== nextProps.form.name && nextProps.form.name !== this.state.name) {
      this.setState({
        name: nextProps.form.name
      });
    }
    return true;
  }

  onChange = (evt) => {
    this.setState({
      name: evt.target.value
    });
  };

  onBlur = () => {
    if (this.props.name !== this.state.name) {
      this.props.onChange(this.state.name);
    }
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.submit();
  };

  render() {
    return (
      <form className="panel__footer save-form" onSubmit={this.onSubmit}>
        <div className="save-form__container-controls">
          <p className="form-element">
            <Label text="Введите имя формы" required>
              <Input
                value={this.state.name}
                onChange={this.onChange}
                onBlur={this.onBlur}
                placeholder="Например, Анкета"
                required
              />
            </Label>
          </p>
        </div>
        <div className="save-form__container-buttons">
          { this.props.form.isSave ?
            (
              <p className="form-element">
                <Link className="button button--outline" to={`/form?${this.props.form._id}`} target="_blank">
                  Открыть
                </Link>
              </p>
            ) : null
          }
          <p className="form-element">
            <button className="button" type="submit">Сохранить</button>
          </p>
        </div>
      </form>
    );
  }
}

SaveForm.propTypes = {
  submit: PropTypes.func,
  onChange: PropTypes.func,
  form: PropTypes.object
};
