import logo from '../../logo.svg';
import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = () => (
  <div className="Header" data-testid="Header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Woo hoooo!
        </p>
      </header>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
