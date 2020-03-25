import React from 'react';
import './App.css';
import { ShippingCompanyCreationForm } from './ShippingManager';
import { ShipCreationForm} from './ShippingManager'
import { ShippingManager } from './ShippingManager/models'
import { ShipDeletionForm} from './ShippingManager'


function App() {
  return (
      <main>
      let manager = new ShippingManager();
      <ShippingCompanyCreationForm/>
      <ShipCreationForm manager={manager} />
      <ShipDeletionForm manager={manager} />
    </main>
  );
}

export default App;
