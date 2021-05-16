import React from 'react';

import logo from "../images/logo.svg";

import './index.css';

function Header() {
  return (
    <div className="header">

    <div className="logoPanier">
      <img src={logo} alt="Panier" />
    </div>
    </div>
  );
}

export default Header;
