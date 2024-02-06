const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// QUESTIONS
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "Provide install instructions for your project:"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:"
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "GPLv3", "Apache", "BSD", "None"]
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:"
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:"
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
];

// FUNCTION TO WRITE README FILE
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log(`README.md successfully generated as ${fileName}`);
}

// FUNCTION TO INITIALISE PROGRAM
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile("README.md", readmeContent);
    })
    .catch((error) => console.error("Error:", error));
}

// FUNCTION CALL TO INITIALISE PROGRAM
init();
