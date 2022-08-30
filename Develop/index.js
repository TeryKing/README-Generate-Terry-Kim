// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
inquirer
  .prompt([
    {
        type : "input",
        name: "title",
        message: "What is the name of your project?",

    },
    {
        type: "input",
        name: "description",
        message:"Briefly describe your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "If you have any installation process, add here."
    },
    {
        type: "list",
        name: "license",
        message: "Pick any appropriate license for this project.",
        choices: ["Apache", "GNU", "MIT"]
    },
    {
        type: "input",
        name: "contributors",
        message: "Add your contributors for this project."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email."
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your username."
    },
  ])

