// Import parent class
const Employee = require("./Employee");

// Create Intern class from Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Import properties from Employee
        super(name, id, email);
        this.school = school;
    }

    // Method to return the passed parameter of an instance
    getSchool() {
        return this.school;
    }

    // Returns the stated string
    getRole() {
        return 'Intern';
    }
}

// Exports class
module.exports = Intern;