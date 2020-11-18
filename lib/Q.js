const q = {
    nie:[name, id, email],
    school:school,
    github:github,
    newPage:newPage,
    check:check,
    manager:manager,
    employeeType:employeeType
}
const manager = {
    type:'confirm',
    name:'manager',
    message:'Are you the manager?'
}
const newPage = {
    type:'confirm',
    name:'newPage',
    message:'Create a new webpage?'
}
const name = {
    type:'input',
    name:'name',
    message:'What is your name? '
}
const id = {
    type:'input',
    name:'id',
    message:'What is your ID? '
}
const email = {
    type:'input',
    name:'email',
    message:'What is your email? '
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