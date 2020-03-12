import React from 'react';

export function ShippingCompanyCreationForm(props){
    return (
    <div className="EntryForm">
        <h1>Create A Shipping Company</h1>
        <form>
            <label for="newName">Shipping Company Name</label><br/>
            <input type="text" id="newName"/><br/>
            <label for="newDescription">Description</label><br/>
            <textarea id="newDescription"/><br/>
            
            <button id="submitNewShippingCompany"> Submit Shipping Company </button>
        </form>
    </div>);
};