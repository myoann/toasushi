import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { askForPermissionToReceiveNotifications } from './push-notification';


import Test from './Payment'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
<br/>
<br/>
<br/>
<br/>
<br/>
        <button onClick={askForPermissionToReceiveNotifications} >
          Click to receive notifications
        </button>
      <Test />

      <Footer />
    </div>
  );
}

export default App;
