import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'containers/router';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
  }
}
