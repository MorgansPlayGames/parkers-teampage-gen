const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const q = require("./lib/Q.js")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let questionIndex = 'newPage';
let quitCheck = true;

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function question(ask){
    inquirer
    .prompt(ask)
    .then(answers => {
        // Use user feedback for... whatever!!
        theSwitch(answers);
    })
    .catch(err => {
        if(err) {
        // Prompt couldn't be rendered in the current environment
        } 
    });
}
function theSwitch(answers){
    if(quitCheck != false){
        switch(questionIndex){
            case 'newPage':
                if(answers.newPage = true){
                    questionIndex = 'managerCheck';
                    question(q.managerCheck);
                }else{
                quitCheck = false;
                }
                break;
            case 'managerCheck':
                if(answers.manager === true){
                    questionIndex = 'newEmployee';
                    question(q.manager);
                }else quitCheck = false;
                break;
            case 'newEmployee':
                if(answers.newEmployee === true){
                    questionIndex = 'employeeType'
                    question(q.employeeType);
                }else quitCheck = false;
                break;
            case 'employeeType':
                if(answers.employeeType = 'Engineer'){
                    question(q.engineer);
                }else{
                    question(q.intern);
                }
                questionIndex = 'newEmployee'
                break;
        }        
    }
}

    question(q.newPage);

function here(){
    console.log('here');
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
