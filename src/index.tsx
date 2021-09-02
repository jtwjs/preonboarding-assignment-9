import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import { getTodoRequestAction } from 'store/actions';

import 'styles/main.scss';
import App from 'App';

function loadTodo() {
  store.dispatch(getTodoRequestAction());
}

loadTodo();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
