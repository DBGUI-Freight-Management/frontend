import React from "react"
import { ShippingCompanyCreationForm } from "./ShippingCompanyCreationForm"
import { ShipCreationForm } from "./ShipCreationForm"
import { ShipList } from "./ShipList"
import { ShippingManager} from "./models"

export class ShippingManagerPage extends React.Component{
    state={
        manager: new ShippingManager()
    }

    addCompany(company){
        let mgr = this.state.manager;
        mgr.addCompany(company);
        this.setState(({manager:mgr}));
    }

    addShip(ship){
        let mgr = this.state.manager;
        mgr.addShip(ship);
        this.setState(({manager:mgr}));
    }

    render(){
        return (
            <>
                <ShippingCompanyCreationForm addCompany={company=>this.addCompany(company)}/>
                <ShipCreationForm companyList={this.state.manager.companies} addship={ship=>this.addShip(ship)}/>
                <ShipList ships={this.state.manager.ships}/>
            </>
        )
    }
}