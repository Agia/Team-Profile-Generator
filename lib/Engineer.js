// Imports the parent class
const Employee = require("./Employee");

// Creates Engineer class from Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Importing properties from Employee (parent class)
        super(name, id, email);
        this.github = github;
    }

    // Method to return the pass parameter of an instance
    getGithub() {
        return this.github;
    }

    // Returns the stated string
    getRole() {
        return 'Engineer';
    }
}

// Exports class
module.exports = Engineer;