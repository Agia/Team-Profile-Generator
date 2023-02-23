// Create an Employee class
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Methods to return an instance's passed properties
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    // Returns the string stated
    getRole() {
        return 'Employee';
    }
}


module.exports = Employee;