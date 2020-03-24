import React from 'react';
import './App.css';
import { ShippingCompanyCreationForm } from './ShippingManager';
import { ShipCreationForm} from './ShippingManager'
import { ShippingManager } from './ShippingManager/models';


const manager= new ShippingManager();

function App() {
  return (
    <main>
      <ShippingCompanyCreationForm manager={manager}/>
      <ShipCreationForm manager={manager}/>
    </main>
  );
}

export default App;
