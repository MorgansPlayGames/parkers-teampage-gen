const newPage = {
    type:'confirm',
    name:'newPage',
    message:'Create a new webpage?'
}

const managerCheck = {
    type:'confirm',
    name:'manager',
    message:'Are you the manager?'
}

const name = {
    type:'input',
    name:'name',
    message:'Could I get a name? '
}
const id = {
    type:'input',
    name:'id',
    message:'an ID? '
}
const email = {
    type:'input',
    name:'email',
    message:'what is the email? '
}
const officeNumber = {
    type:'input',
    name:'officeNumber',
    message:'Finally, what is your office number? '
}
const check = {
    type:'confirm',
    name:'newEmployee',
    message:'Would you like to add an employee? '
}
const employeeType = {
    type:'list',
    name:'employeeType',
    message:'What type of employee would you like to add? ',
    choices:['Engineer', 'Intern']
}
const school = {
    type:'input',
    name:'school',
    message:'What school does intern attend? '
}
const github = {
    type:'input',
    name:'github',
    message:'What is engineers GitHub username? '
}

const manager = [name, id, email, officeNumber, check];
const engineer = [name, id, email, github, check];
const intern = [name, id, email, school, check];
const q = {
    newPage:newPage,
    managerCheck:managerCheck,
    manager:manager,
    employeeType:employeeType,
    engineer:engineer, 
    intern:intern
}


module.exports = q;

//q list flow:
//Would you like to create a new page? false (bonus:) open old page with name?
//Are you the manager? false quit
//What is your name, id, email, 
//office number?
//would you like to add an employee? false quit
//what type of employe? Engineer, Intern?
//Engineer: What is your name, id, email,
//Engineer: Github?
//Intern: What is your name, id, email,
//Intern: School?