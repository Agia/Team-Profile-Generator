// Import parent class
const Employee = require("./Employee");

// Creates Manager class from Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Importing properties from Employee
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Method to return the passed parameter of an instance
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    // Returns a string
    getRole() {
        return 'Manager';
    }
}


module.exports = Manager;