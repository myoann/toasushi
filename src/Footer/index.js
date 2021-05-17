import React from 'react';

import { ReactComponent as AccountSVG } from '../images/account_circle_48px.svg';
import { ReactComponent as FeedbackSVG } from '../images/feedback_48px.svg';
import { ReactComponent as RestaurantSVG } from '../images/restaurant_48px.svg';
import { ReactComponent as InfoSVG } from '../images/info_48px.svg';

import './index.css';

class Footer extends React.Component {

  render() {
    const {
      pleaseOpenAccount,
      pleaseOpenAllergens,
      pleaseOpenRestaurants
    } = this.props;

    return (
      <div className="footer">
          <InfoSVG onClick={pleaseOpenRestaurants} />
          <RestaurantSVG onClick={pleaseOpenRestaurants} />
          <AccountSVG onClick={pleaseOpenAccount} />
          <FeedbackSVG onClick={pleaseOpenAllergens} />
      </div>
    );
  }
}

export default Footer;
