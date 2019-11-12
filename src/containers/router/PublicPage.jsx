import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicLayout from 'containers/layout/PublicLayout';
import NotFoundPage from 'containers/pages/NotFoundPage';
import HomePage from 'containers/pages/HomePage';

const PublicPage = () => {
  return (
    <PublicLayout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </PublicLayout>
  );
};

export default PublicPage;
