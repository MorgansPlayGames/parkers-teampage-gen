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
}
//start the loop on script start
question(q.newPage);

function onEnd(){
    console.log(employeeList);
    rend = render(employeeList)
    fs.writeFile(outputPath, rend, (err) => {
        if(err) throw err;
        console.log('success')
    })
}
