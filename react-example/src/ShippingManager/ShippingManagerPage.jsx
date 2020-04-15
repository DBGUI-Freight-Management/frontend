import React from "react"
import { ShippingCompanyCreationForm } from "./ShippingCompanyCreationForm"
import { ShipCreationForm } from "./ShipCreationForm"
import { ShipList } from "./ShipList"
import { ShippingManager, Ship } from "./models"
import { ShipDeletionForm } from "./ShipDeletionForm"
import { CaptainCompanySelection } from "./CaptainCompanySelection"
import { LogCreation } from "./LogCreation"
import { AllLogView } from "./AllLogView"
import { LogMessage } from "./LogMessage"
import { ActiveShipsView } from "./ActiveShipsView"
import { TrackingPage } from "./TrackingPageView"
import { UpdateShipStatus } from "./UpdateShipStatus"
import { NavButton } from './NavButton'

export class ShippingManagerPage extends React.Component {
    state = {
        mode: "",
        manager: new ShippingManager(),
        selectedCaptain: 0,
        selectedMessage: undefined
    }

    addCompany(company) {
        let mgr = this.state.manager;
        mgr.addCompany(company);
        this.setState(({ manager: mgr }));
    }

    addShip(ship) {
        let mgr = this.state.manager;
        mgr.addShip(ship);
        this.setState(({ manager: mgr }));
    }

    removeShip(name, company) {
        let mgr = this.state.manager;
        mgr.removeShip(name, company);
        this.setState(({ manager: mgr }));
    }

    updateShipStatus(name, company, status) {
        let mgr = this.state.manager;
        mgr.updateShipStatus(name, company, status);
        this.setState(({ manager: mgr }));
    }

    changeSelectedCaptain(captainName) {
        let mgr = this.state.manager;
        let newCaptain = mgr.captains.findIndex(cap => cap.name === captainName);
        this.setState({ selectedCaptain: newCaptain });
    }

    changeCaptainCompany(company) {
        let mgr = this.state.manager;
        mgr.changeCaptainCompany(mgr.captains[this.state.selectedCaptain], company);
        this.setState({ manager: mgr });
        console.log(this.state);
    }
    addLogMessage(input) {
        let mgr = this.state.manager;
        console.log(input);
        let message = {
            captain: mgr.captains[this.state.selectedCaptain],
            date: input.date,
            header: input.logHeader,
            message: input.logMessage
        }
        mgr.addLogMessage(message);
        this.setState({ manager: mgr });
    }

    selectMessage(message) {
        this.setState({ selectedMessage: this.state.manager.messages.findIndex(m => m === message) });
    }

    getActiveShips() {
        this.activeships = [
            new Ship("Titanic", "Fiji Shipping", "Active")
        ]

        for (var i = 0; i < this.state.manager.ships.length; i++) {
            if (this.state.manager.ships[i].status === "Active") {
                this.activeships.push(this.state.manager.ships[i]);
            }
        }

        return this.activeships;
    }

    render() {
        return (
            <>
                <div className="container">
                    <h2>Freight Manager View</h2>
                    <ul className="list-group list-group-horizontal border-bottom mb-2">
                        <NavButton mode={this.state.mode} link="Shipping Company Creation" change={()=>this.setState({mode:"Shipping Company Creation"})}/>
                        <NavButton mode={this.state.mode} link="Ship Creation" change={()=>this.setState({mode:"Ship Creation"})}/>
                        <NavButton mode={this.state.mode} link="Ship Deletion" change={()=>this.setState({mode:"Ship Deletion"})}/>
                        <NavButton mode={this.state.mode} link="Log Creation" change={()=>this.setState({mode:"Log Creation"})}/> 
                        <NavButton mode={this.state.mode} link="Tracking Page" change={()=>this.setState({mode:"Tracking Page"})}/>
                        <NavButton mode={this.state.mode} link="Ship List" change={()=>this.setState({mode:"Ship List"})}/>
                        <NavButton mode={this.state.mode} link="Change Selected Captain" change={()=>this.setState({mode:"Change Selected Captain"})}/>
                        <NavButton mode={this.state.mode} link="Captain Company Selection" change={()=>this.setState({mode:"Captain Company Selection"})}/>
                        <NavButton mode={this.state.mode} link="Active Ships" change={()=>this.setState({mode:"Active Ships"})}/>
                        <NavButton mode={this.state.mode} link="Update Ship Status" change={()=>this.setState({mode:"Update Ship Status"})}/>
                    </ul>
                {this.state.mode==="Shipping Company Creation" && (<ShippingCompanyCreationForm addCompany={company => this.addCompany(company)} />)}
                {this.state.mode==="Ship Creation" && (<>
                    <ShipCreationForm companyList={this.state.manager.companies} addship={ship => this.addShip(ship)} />
                    <ShipList ships={this.state.manager.ships} />
                    </>)}
                {this.state.mode==="Ship Deletion" && (<>
                    <ShipDeletionForm companyList={this.state.manager.companies} removeShip={input => this.removeShip(input.name, input.company)} />
                    <ShipList ships={this.state.manager.ships} />
                    </>)}
                {this.state.mode==="Log Creation" && (<>
                    <LogCreation captain={this.state.manager.captains[this.state.selectedCaptain]} submit={input => this.addLogMessage(input)} />
                    <AllLogView captain={this.state.manager.captains[this.state.selectedCaptain]} logs={this.state.manager.messages} selectMessage={message => this.selectMessage(message)} />
                    {this.state.selectedMessage !== undefined && <LogMessage log={this.state.manager.messages[this.state.selectedMessage]} />}
                    </>)}
                {this.state.mode==="Tracking Page" && (<TrackingPage captain={this.state.manager.captains[this.state.selectedCaptain]} ships={this.state.manager.ships} />) }
                {this.state.mode==="Ship List" && (<ShipList ships={this.state.manager.ships} />)}
                {this.state.mode==="Change Selected Captain" && (
                    <div className="container">
                    <div className="form-group">
                        <label htmlFor="selectCaptain">
                            Selected Captain
                                    </label>
                        <select className="form-control"
                            id="selectCaptain"
                            name="selectCaptain"
                            value={this.state.selectedCaptain.name}
                            onChange={e => this.changeSelectedCaptain(e.target.value)}>
                            {this.state.manager.captains.map(cap => (<option>{cap.name}</option>))}
                        </select>
                    </div>
                </div>
                )}
                {this.state.mode==="Captain Company Selection" && (<CaptainCompanySelection captain={this.state.manager.captains[this.state.selectedCaptain].name} currentCompany={this.state.manager.captains[this.state.selectedCaptain].company} companyList={this.state.manager.companies} changeCompany={(c => this.changeCaptainCompany(c))} />)}
                {this.state.mode==="Active Ships" && (<ActiveShipsView activeships={this.getActiveShips()} />)}
                {this.state.mode==="Update Ship Status" && (<UpdateShipStatus companyList={this.state.manager.companies} updateShipStatus={input => this.updateShipStatus(input.name, input.company, input.status)} />)}
                </div> 
            </>
        )
    }
}