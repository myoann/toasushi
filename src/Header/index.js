import React from 'react';

import {ReactComponent as BasketSVG } from "../images/shopping_basket_48px.svg";

import './index.css';

function Header({pleaseOpenPayment}) {
  return (
    <div className="header">

    <div className="logoPanier">
      <BasketSVG onClick={pleaseOpenPayment} />
    </div>
    </div>
  );
}

export default Header;
