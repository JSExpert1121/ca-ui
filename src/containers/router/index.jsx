import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicPage from './PublicPage';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        {/* Private Pages */}
        <Route path="/" component={PublicPage} />
      </Switch>
    );
  }
}
