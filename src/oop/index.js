class Customer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1, 123);
console.log(customer)

class IndividualCustomer extends Customer() {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber)
        this.firstName = firstName;
    }
}
class CorporateCustomer extends Customer() {
    constructor(comnpanyName, id, customerNumber) {
        super(id, customerNumber)
        this.comnpanyName = comnpanyName;
    }

}