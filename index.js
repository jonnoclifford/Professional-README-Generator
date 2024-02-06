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
];
