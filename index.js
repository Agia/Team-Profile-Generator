// ** IMPORTS ** //
// Import necessary classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Node packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Other packages
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// ** VARIABLES ** //
// Array to hold team member objects
const team = [];

// Array of questions to be passed to inquirer.prompt at start
const starterQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the team manager\'s name:'
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter the team manager\'s employee ID number:',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter the team manager\'s email address:',
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the team manager\'s office number:'
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
        message: 'Enter this employee\'s name:'
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter this employee\'s employee ID number:',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter this employee\'s email address:',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter this employee\'s GitHub username:'
    },

    {
        type: 'list',
        name: 'employeeRole',
        message: 'Select an option to further add to your team, or to finish:',
        choices: ['Add an engineer', 'Add an intern', 'Finish building your team'],
    },
];

// Array of questions to be passed to inquirer.prompt on selecting 'Add intern'
const questionsIntern = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter this employee\'s name:'
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter this employee\'s employee ID number:',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter this employee\'s email address:',
    },

    {
        type: 'input',
        name: 'school',
        message: 'Enter this employee\'s school:'
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

}