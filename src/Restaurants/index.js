import React from 'react';

import phone from "../images/phone.png";
import resto1 from "../images/resto1.jpg";
import resto2 from "../images/resto2.jpg";
import resto3 from "../images/resto3.jpg";
import resto4 from "../images/resto4.jpg";
import './index.css';

const Resto = ({ name, address, openingHours, phoneNumber, image, isOpen }) => (
  <div className="resto">
    {!isOpen && <div className="closed">FERMÉ</div>}
    <img src={image} alt="Avatar" />
    <div className={isOpen ? "twoParts" : "twoPartsClosed"}>
      <div className="leftPart">
        <div><b>{name}</b> </div>
        <div>{address}</div>
        <div>{openingHours}</div>
      </div>
      {isOpen && (
        <a href={`tel:${phoneNumber}`} className="rightPart">
          <img src={phone} alt="Appelle nous" />
        </a>
      )}
    </div>
  </div>
)

function Restaurants() {
  const restos = [
    {
      name: "TOKKA SUSHI",
      address: "12 Avenue des Italiens, 69009 Lyon",
      openingHours: "9h - 14h  /  17h30 - 19h",
      phoneNumber: "+33465404140",
      image: resto1,
      isOpen: true
    },
     {
      name: "ICI JAPON",
      address: "5 Rue du Roi de Sicile, 75004 Paris",
      openingHours: "12h - 23h",
      phoneNumber: "+33493405255",
      image: resto2,
      isOpen: true
    },
     {
      name: "SUSHISAMBA",
      address: "121 rue des marchands, 13002 Marseille",
      openingHours: "12h - 14h  /  19h - 21h",
      phoneNumber: "+33123456789",
      image: resto3,
      isOpen: true
    },
     {
      name: "TOA + MOA SUSHI",
      address: "1 Rue de la Paix, 06000 Nice",
      openingHours: "12h - 14h  /  19h - 21h",
      phoneNumber: "+33475847477",
      image: resto4,
      isOpen: false
    }
  ]
  return (
    <div className="restaurants">
      <div className="topInfo">
        <b>4 adresses pres de chez vous</b>
        <div className="toggleButton">
          <div>Livraison</div>
          <div>A emporter</div>
        </div>
      </div>

      <div className="restaurantsList">
        {restos.map(resto =>
          <Resto 
            name={resto.name} 
            address={resto.address} 
            openingHours={resto.openingHours} 
            phoneNumber={resto.phoneNumber} 
            image={resto.image}
            isOpen={resto.isOpen} 
          />  
        )}
      </div>
    </div>
  );
}

export default Restaurants;
