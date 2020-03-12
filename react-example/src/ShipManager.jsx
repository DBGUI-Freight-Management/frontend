import React from 'react';


export class ShippingCompanyCreationForm extends React.Component{
    
    

    constructor(props){
        super(props);
        this.state={name:"",description:""};

        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleDescriptionChange=this.handleDescriptionChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleNameChange(event){
        this.setState({ name: event.target.value});
    }
    
    handleDescriptionChange(event){
        this.setState({description: event.target.value});
    }

    handleSubmit(event){
        console.log(this.state.name);
        console.log(this.state.description);
       
    }

    render(){
        return(
            <div className="EntryForm">
                <h1>Create A Shipping Company</h1>
                <form>
                    <label htmlFor="newName">Shipping Company Name</label><br/>
                    <input type="text" id="newName" name="newName" value={this.state.value} onChange={this.handleNameChange}/><br/>
                    <label htmlFor="newDescription">Description</label><br/>
                    <textarea id="newDescription" name="newDescription" value={this.state.value} onChange={this.handleDescriptionChange}/><br/>
            
                    <button type ="button" id="SubmitShippingCompany" value={this.state.value} onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }

};