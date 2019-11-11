import React, { Component } from 'react';
import './Header.scss';
import creativv_academy_logo from '../../../../assets/images/creativv-academy-logo.png';
import { Button } from '../../common/Button';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img className="logo" src={creativv_academy_logo} alt="test"/>
            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Programs
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    Full-stack Web Development
                  </a>
                  <a className="dropdown-item" href="/">
                    Frontend Web Development
                  </a>
                  <a className="dropdown-item" href="/">
                    Data Science
                  </a>
                  <a className="dropdown-item" href="/">
                    UX Design
                  </a>
                  <a className="dropdown-item" href="/">
                    Data Science
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Students
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Career Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
              <Button styleType="secondary" className="custom-button--blank custom-button--size-variant-sm">Apply &#187;</Button>
                {/* <a className="nav-link" href="/">
                  Apply
                </a> */}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
