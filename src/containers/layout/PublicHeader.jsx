import React, { Component } from 'react';

import Button from 'components/Button';
import logo from '../../assets/images/creativv-academy-logo.png';
import './styles.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute">
          <a className="navbar-brand" href="/">
            <img className="logo" src={logo} alt="academy" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#app-navbar"
            aria-controls="app-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="app-navbar">
            <ul className="navbar-nav ml-auto align-items-center text-uppercase">
              <li className="nav-item dropdown mr-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbar-programs"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Programs
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbar-programs"
                >
                  <a className="dropdown-item font-sm" href="/">
                    Full-stack Web Development
                  </a>
                  <a className="dropdown-item font-sm" href="/">
                    Frontend Web Development
                  </a>
                  <a className="dropdown-item font-sm" href="/">
                    Data Science
                  </a>
                  <a className="dropdown-item font-sm" href="/">
                    UX Design
                  </a>
                  <a className="dropdown-item font-sm" href="/">
                    Data Science
                  </a>
                </div>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link" href="/">
                  Students
                </a>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link" href="/">
                  Career Service
                </a>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link" href="/">
                  FAQs
                </a>
              </li>
              <li className="nav-item mr-4">
                <Button
                  styleType="secondary"
                  className="custom-button custom-button--blank custom-button--size-variant-sm text-uppercase"
                >
                  Apply
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
