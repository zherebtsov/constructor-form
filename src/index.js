import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'redux/create';
import { Provider } from 'react-redux';
import App from 'containers/App';
import ResultForm from 'containers/ResultForm';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const initialState = {};
const store = createStore(initialState);

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/form" component={ResultForm}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
