// Constants
export const SAVE_FORM = 'SAVE_FORM';
export const DEL_SAVE_FORM = 'DEL_SAVE_FORM';

// Actions
export function saveForm(form) {
  return {
    type: SAVE_FORM,
    payload: {form}
  }
}

export function delForm(id) {
  return {
    type: DEL_SAVE_FORM,
    payload: {id}
  }
}

//Reducer
const initialState = {
  forms: []
};

export function saved(state = initialState, action) {
  switch (action.type) {

    case SAVE_FORM:
      let newForms = state.forms.slice();
      action.payload.form.isSave = true;
      const index = state.forms.findIndex(form => form._id === action.payload.form._id);
      if (index === -1) {
        newForms.push(action.payload.form);
      } else {
        newForms[index] = action.payload.form
      }
      return {
        ...state,
        forms: newForms
      };

    case DEL_SAVE_FORM:
      newForms = state.forms.slice();
      return {
        ...state,
        forms: newForms.filter((form) => form._id !== action.payload.id)
      };

    default:
      break;
  }

  return state;
}

