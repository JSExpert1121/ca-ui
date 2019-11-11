import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import NotFoundPage from '../pages/NotFoundPage';
// import logo from '../../../assets/samplebanner.png';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main className="">
          {/* <div className="row">
            <img src={logo} alt="Creativv Academy Logo" />
          </div> */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
