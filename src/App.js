import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { askForPermissionToReceiveNotifications } from './push-notification';

import Account from './Account';
import Allergens from './Allergens';
import Payment from './Payment';
import Restaurants from './Restaurants';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openPayment: false,
      openRestaurants: true,
      openAccount: false,
      openAllergens: false,
    }
  }

  pleaseOpenAccount = () => {
    this.setState({
      openPayment: false,
      openRestaurants: false,
      openAccount: true,
      openAllergens: false,
    })
  }

  pleaseOpenAllergens = () => {
    this.setState({
      openPayment: false,
      openRestaurants: false,
      openAccount: false,
      openAllergens: true,
    })
  }

  pleaseOpenPayment = () => {
    this.setState({
      openPayment: true,
      openRestaurants: false,
      openAccount: false,
      openAllergens: false,
    })
  }

  pleaseOpenRestaurants = () => {
    this.setState({
      openPayment: false,
      openRestaurants: true,
      openAccount: false,
      openAllergens: false,
    })
  }

  render() {
    const { openPayment, openRestaurants, openAccount, openAllergens } = this.state;
    return (
      <div className="App">
        <Header pleaseOpenPayment={this.pleaseOpenPayment} />
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
          <button onClick={askForPermissionToReceiveNotifications} >
            Click to receive notifications
          </button>

          {openPayment && 
            <Payment />  
          }

          {openRestaurants && 
            <Restaurants />  
          }
          
          {openAccount && 
            <Account />  
          }

          {openAllergens && 
            <Allergens />  
          }

        <Footer 
          pleaseOpenAccount={this.pleaseOpenAccount}
          pleaseOpenAllergens={this.pleaseOpenAllergens}
          pleaseOpenPayment={this.pleaseOpenPayment}
          pleaseOpenRestaurants={this.pleaseOpenRestaurants}
        />
      </div>
    );
  }
}

export default App;
