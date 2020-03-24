import React from 'react';
import './App.css';
import { ShippingCompanyCreationForm } from './ShippingManager';
import { ShipCreationForm} from './ShippingManager'
import {ShippingManager} from './ShippingManager/models'


function App() {
  return (
    <main>
      <ShippingCompanyCreationForm/>
      <ShipCreationForm manager={new ShippingManager()}/>
    </main>
  );
}

export default App;
