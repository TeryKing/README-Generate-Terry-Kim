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

const questions = [
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
        choices: ["Apache", "GNU", "MIT", "None"]
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
  ]
  

function writeToFile(fileName, data)
{
    fs.writeFile(fileName,generateMarkdown(data), function(err){
        if(err){
            return console.log(err);
        }
    });
}
function init(){
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("./README/README.md", data);
    });
}

function getLicense(value){
    if (value === "GNU") {
        return "[![License: GNU](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    } else if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else{
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
}

init();