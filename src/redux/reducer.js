import { combineReducers } from 'redux';
import { previewForm } from 'redux/modules/previewForm';
import { saved } from 'redux/modules/savedForms';

export const RootReducer = combineReducers({
  previewForm,
  saved
});
