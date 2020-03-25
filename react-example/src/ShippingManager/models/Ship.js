
export class Ship{
    constructor(name, owningCompany){
        this.name=name;
        this.owningCompany=owningCompany;
    }

    getName(); {
        return this.name;
    }

    getCompany() {
        return this.owningCompany;
    }
}