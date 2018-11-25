import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { RootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import clientMiddleware from 'redux/middleware/clientMiddleware';
import { save, load } from 'redux-localstorage-simple';

export default function (initialState) {

  const middlewares = [
    ReduxThunk,
    clientMiddleware(),
    save({ states: ['saved'], debounce: 800, namespace: 'app-constructor-form' })
  ];

  const composeEnhancer = process.env.REACT_APP_CONFIG === 'dev' ? composeWithDevTools : compose;

  return createStore(
    RootReducer,
    load({ states: ['saved'], disableWarnings: true, namespace: 'app-constructor-form' }),
    composeEnhancer(
      applyMiddleware(...middlewares)
    )
  );
}
