import React from "react"
import Ship from "../Models/Ship"

const props = [
    new Ship("USS Keystone", "Active"),
    new Ship("Titanic", "In Maintenance"),
    new Ship("Your Mom", "Docked")
];

class Ships extends React.Component{
    render(){
        return(
            <>
                <h1>
                    Ships List
                </h1>
                <table>
                    <thead>
                        <th>Ship</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {props.map(ship => (
                            <tr>
                                <td>{ ship.name }</td>
                                <td>{ ship.status }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
};

export default Ships;