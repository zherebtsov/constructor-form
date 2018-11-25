import { FormFieldModel } from 'models/FormFieldModel';
import { Utils } from 'utils';
import { SAVE_FORM, DEL_SAVE_FORM } from './savedForms';

// Constants
const PREVIEW_ADD_FIELD = 'PREVIEW_ADD_FIELD';
const PREVIEW_DEL_FIELD = 'PREVIEW_DEL_FIELD';
const PREVIEW_UPDATE_FIELD = 'PREVIEW_UPDATE_FIELD';
const PREVIEW_CHANGE_POSITION_FIELD = 'PREVIEW_CHANGE_POSITION_FIELD';
const PREVIEW_CHANGE_NAME_FORM = 'PREVIEW_CHANGE_NAME_FORM';
const PREVIEW_CREATE_NEW_FORM = 'PREVIEW_CREATE_NEW_FORM';
const PREVIEW_LOAD_FORM = 'PREVIEW_LOAD_FORM';

// Actions
export function addField(fieldType) {
  return {
    type: PREVIEW_ADD_FIELD,
    payload: {
      field: new FormFieldModel(fieldType)
    }
  }
}

export function delField(id) {
  return {
    type: PREVIEW_DEL_FIELD,
    payload: {id}
  }
}

export function updateField(field) {
  return {
    type: PREVIEW_UPDATE_FIELD,
    payload: {field}
  }
}

export function changePositionField(id, position) {
  return {
    type: PREVIEW_CHANGE_POSITION_FIELD,
    payload: {id, position}
  }
}

export function changeNameForm(name) {
  return {
    type: PREVIEW_CHANGE_NAME_FORM,
    payload: {name}
  }
}

export function createNewForm() {
  return {
    type: PREVIEW_CREATE_NEW_FORM
  }
}

export function loadForm(form) {
  return {
    type: PREVIEW_LOAD_FORM,
    payload: {form}
  }
}

//Reducer
const initialState = {
  _id: `_${Utils.generateRandomString()}`,
  name: '',
  fields: [],
  isSave: false
};

export function previewForm(state = initialState, action) {
  switch (action.type) {

    case PREVIEW_ADD_FIELD:
      let newFields = state.fields.slice();
      newFields.push(action.payload.field);
      return {
        ...state,
        fields: newFields
      };

    case PREVIEW_DEL_FIELD:
      newFields = state.fields.slice();
      return {
        ...state,
        fields: newFields.filter((field) => field._id !== action.payload.id)
      };

    case PREVIEW_UPDATE_FIELD:
      newFields = state.fields.slice();
      let index = newFields.findIndex(field => field._id === action.payload.field._id);
      newFields[index] = action.payload.field;
      return {
        ...state,
        fields: newFields
      };

    case PREVIEW_CHANGE_POSITION_FIELD:
      index = state.fields.findIndex((field) => field._id === action.payload.id);
      return {
        ...state,
        fields: Utils.correctArray(state.fields, [index, index - action.payload.position])
      };

    case PREVIEW_CHANGE_NAME_FORM:
      return {
        ...state,
        name: action.payload.name
      };

    case PREVIEW_CREATE_NEW_FORM:
      return {
        ...initialState,
        _id: `_${Utils.generateRandomString()}`
      };

    case PREVIEW_LOAD_FORM:
      return action.payload.form;

    case SAVE_FORM:
      return {
        ...state,
        isSave: true
      };

    case DEL_SAVE_FORM:
      return {
        ...state,
        isSave: state._id === action.payload.id ? false : state.isSave
      };

    default:
      break;
  }

  return state;
}

