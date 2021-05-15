import React from 'react';

import './index.css';

function Account() {
  return (
    <div className="account">
      <span>
        Pour continuer, veuillez vous connecter à Toasushi.
      </span>


      <form>
        <div className="login">
          <input type="email" placeholder="email@exemple.fr" />
          <input type="passwords" placeholder="Mot de passe" />
        </div>

        <div className="rememberMe">
            <input type="checkbox" /> Se souvenir de moi
        </div>

        <button className="simpleLogin">Continuer</button> 
      </form>

      <div className="orDivider">
        <strong className="dividerTitle">OU</strong>
      </div>

      <div className="socialNetworksLogin">
        <button className="facebookLogin">Continuer avec Facebook</button> 
        <button className="appleLogin">Continuer avec Apple</button> 
        <button className="googleLogin">Continuer avec Google</button> 
      </div>

    </div>
  );
}

export default Account;
