import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { store } from './app/redux/configureStore';
import App from './app/containers/app';

ReactDOM.render(
  //   <Provider store={store}>
  <App />,
  //   </Provider>,
  document.getElementById('react-app'),
);

if (module.hot) {
  module.hot.accept();
}
