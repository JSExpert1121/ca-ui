import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFoundPage from '../../components/pages/NotFoundPage';
import HomePage from '../home-page/HomePage';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main className="">
          <div className="row"></div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
