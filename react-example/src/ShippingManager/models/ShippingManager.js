import { Company } from "./Company";
import { Ship } from "./Ship";


export class ShippingManager{
    constructor(){
        this.companies = [
            new Company("Trans-Atlantic", "1001 101st New York, New York 0000","trans@atlantic.com", "Best Shipping this side of the world"),
            new Company("Fiji Shipping","1 Island Blvd Oceanside Fiji", "contact@FijiShipping.com", "Outwit Outplay Outlast"),
            new Company("Pacific Specifics", "1250 Manhattan Beach Blvd, CA 90266", "pacificspecifics@aol.com", "Best Shipping this side of the world")
        ]

        this.ships=[
            new Ship("SS Enterprise", "Trans-Atlantic"),
            new Ship("SS Discovery", "Trans-Atlantic"),
            new Ship("Boston Rob", "Fiji Shipping"),
            new Ship("Pavarti", "Fiji Shipping"),
            new Ship("Tyson", "Fiji Shipping"),
            new Ship("Probst", "Fiji Shipping"),
            new Ship("Narniphilous", "Pacific Specifics")
        ]
    }

    addCompany(name,address,email,description){
        this.companies.push(new Company(name,address,email,description));
    }

    addShip(name, company){
        this.companies.push(new Ship(name,company));
    }

    
    getCompanies(){
        return this.companies;
    }

    
}