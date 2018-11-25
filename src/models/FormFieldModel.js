import { Utils } from 'utils';

export class FormFieldModel {
  _id = ''; //readonly
  type = '';
  label = 'Название';
  placeholder = 'Подсказка';
  list = ['Вариант №1', 'Вариант №2'];
  required = false;

  constructor(type) {
    this._initId();
    this.setType(type || 'input');
  }

  _initId = () => {
    this._id = `_${Utils.generateRandomString()}`;
  };

  setType = (type) => {
    this.type = type;
  };
}
