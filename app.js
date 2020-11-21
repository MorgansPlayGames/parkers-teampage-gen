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
let webpage;
let employeeType = 'manager'
let employeeList = []
let currentEmployee = {}

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
        console.log(err)
        } 
    });
}

//main question logic function what to do with answers passed in
function theSwitch(answers){
    if(quitCheck != false){
        //what to do with the response of:
        switch(questionIndex){
            case 'newPage':
                if(answers.newPage === true){
                    questionIndex = 'managerCheck';
                    question(q.managerCheck);
                //quit out of loop
                }else onEnd();
                break;
            case 'managerCheck':
                if(answers.manager === true){
                    questionIndex = 'newEmployee';
                    question(q.manager);
                //quit out of loop
                }else onEnd();
                break;
            //runs over the questions for filling out the html
            case 'newEmployee':
                //creates a new class with the new employee info passed in
                if(employeeType === 'manager'){
                    currentEmployee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                }else if(employeeType === 'engineer'){
                    currentEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);
                }else if(employeeType === 'intern'){
                    currentEmployee = new Intern(answers.name, answers.id, answers.email, answers.school);
                }
                employeeList.push(currentEmployee);
                //employee check passed down from newEmployee
                if(answers.newEmployee === true){
                    questionIndex = 'employeeType'
                    question(q.employeeType);
                //quit out of loop
                }else onEnd();
                break;
            case 'employeeType':
                //checks the type and gets the questions of the type
                if(answers.employeeType === 'Engineer'){
                    question(q.engineer);
                    employeeType = 'engineer';
                }else{
                    question(q.intern);
                    employeeType = 'intern';
                }
                questionIndex = 'newEmployee'
                break;
        }      
    //on finish  
    }
}
//start the loop on script start
question(q.newPage);

//test function
function here(){
    console.log('here');
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function onEnd(){
    console.log(employeeList);
}
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
