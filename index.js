// ** IMPORTS ** //
// Import necessary classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Import function to render HTML
const render = require("./src/page-template.js");

// Node packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// ** VARIABLES ** //
// Variables to hold path to output file
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Array to hold team member objects
const team = [];

// Array of questions to be passed to inquirer.prompt at start
const starterQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the team manager\'s name:',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log ("\nYou must enter a name.");
                return false; 
            }
        },
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter the team manager\'s employee ID number:',
        validate: id => {
            if (!isNaN(id)) {
                return true;
            } else {
                console.log("\nYou need to enter a number.");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter the team manager\'s email address:',
        validate: email => {
            const validFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(validFormat.test(email)) {
                return true;
            } else {
                console.log("\nYou need to enter a valid email.")
                return false; 
            }

        },
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the team manager\'s office number:',
        validate: officeNumber => {
            if (!isNaN(officeNumber)) {
                return true;
            } else {
                console.log("\nYou need to enter a number.");
                return false;
            }
        },
    },

    {
        type: 'list',
        name: 'employeeRole',
        message: 'Select an option to further add to your team, or to finish:',
        choices: ['Add an engineer', 'Add an intern', 'Finish building your team'],
    },
];

// Array of questions to be passed to inquirer.prompt on selecting 'Add engineer'
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter this employee\'s name:',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log ("\nYou must enter a name.");
                return false; 
            }
        },
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter this employee\'s employee ID number:',
        validate: id => {
            if (!isNaN(id)) {
                return true;
            } else {
                console.log("\nYou need to enter a number.");
                return false;
            }
        },
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter this employee\'s email address:',
        validate: email => {
            const validFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(validFormat.test(email)) {
                return true;
            } else {
                console.log("\nYou need to enter a valid email.")
                return false; 
            }

        },
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter this employee\'s GitHub username:',
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log ("\nYou must enter a username.");
                return false; 
            }
        },
    },

    {
        type: 'list',
        name: 'employeeRole',
        message: 'Select an option to further add to your team, or to finish:',
        choices: ['Add an engineer', 'Add an intern', 'Finish building your team'],
    },
];

// Array of questions to be passed to inquirer.prompt on selecting 'Add intern'
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter this employee\'s name:',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log ("\nYou must enter a name.");
                return false; 
            }
        },
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter this employee\'s employee ID number:',
        validate: id => {
            if (!isNaN(id)) {
                return true;
            } else {
                console.log("\nYou need to enter a number.");
                return false;
            }
        },
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter this employee\'s email address:',
        validate: email => {
            const validFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(validFormat.test(email)) {
                return true;
            } else {
                console.log("\nYou need to enter a valid email.")
                return false; 
            }

        },
    },

    {
        type: 'input',
        name: 'school',
        message: 'Enter this employee\'s school:',
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log ("\nYou must enter a school.");
                return false; 
            }
        },
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: 'Select an option to further add to your team, or to finish:',
        choices: ['Add an engineer', 'Add an intern', 'Finish building your team'],
    },
];


// ** FUNCTIONS ** //
// Function to run on program load
async function init() {
    // Save output from inquirer prompt to answers
    const answers = await inquirer
    // Start prompt using array starterQuestions
    .prompt(starterQuestions)
        // Save inputs to a new Manager instance
        const teamManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        // Push new Manager object to 'team' array
        team.push(teamManager);
        // Call function to decide next steps passing input data generated from previous prompt
        optionsPrompt(answers);

}

// Function to determine which action to take after initial, and each subsequent generated employee
function optionsPrompt(answers) {

    if (answers.employeeRole === "Add an engineer") {
        // Call function to generate an Engineer object
        addEngineer();
    } else if (answers.employeeRole === 'Add an intern') {
        // Call function to generate an Intern object
        addIntern();
    } else {
        console.log('All done!\nCheck out index.html to see your team profiles.');
        // Passes data to generate index.html
        generateHTML(team);
    }
}
     
// Handles the creation of new Engineer objects
async function addEngineer() {
    // Saves input to answers
    const answers = await inquirer
    // Presents user with prompts from engineerQuestion array
    .prompt(engineerQuestions)

    // Creates a new instance of Engineer class and pushes it the 'team' array
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineer);

    // Calls the function, passing in the user input from prior prompt
    optionsPrompt(answers);
}

// Handles the creation of new Intern objects
async function addIntern() {
    // Saves input to answers
    const answers = await inquirer
    // Presents user with prompts from internQuestions array
    .prompt(internQuestions)

    // Creates a new instance of Intern class and pushes it the 'team' array
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);

    // Calls the function, passing in the user input from prior prompt
    optionsPrompt(answers);
}

// Generates team.html with user data
function generateHTML(data) {
    fs.writeFile(outputPath, render(data), function(error) {
        if (error) {
            console.log(error);
        }
    });
}

// Call to function to initialize program
init();