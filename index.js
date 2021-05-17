// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: "What is your project's name?",
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usingRepo',
        message: 'What does the user need to know about using the repo?',
        validate: usingRepoInput => {
            if (usingRepoInput) {
                return true;
            } else {
                console.log('Please enter information on how to use repo!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributingRepo',
        message: 'What does the user need to know about contributing to the repo?',
        validate: contributingRepoInput => {
            if (contributingRepoInput) {
                return true;
            } else {
                console.log('Please enter information on how to contribute to the repo!');
                return false;
            }
        }
    }
];



// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./README.md`, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Generating README...'
            });
        });
    });
};


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(generateMarkdown)
    .then(writeToFile)
    .catch(err => {
        console.log(err);
    });
    // .then(generateMarkdown)
    // .then(pageHTML => {
    //     return console.log(pageHTML);
    // })
    // .then((writeToFile, data) => {
    //     return generateMarkdown(writeToFile);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
    ;
