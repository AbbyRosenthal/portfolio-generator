const inquirer = require('inquirer');

inquirer
.prompt([
   {
       type: 'input',
       name: 'name',
       message: 'What is your name?'
   } 
])
.then(answers => console.log(answers));

// //NEED THIS TO RUN MODULES
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);


// //WRITE THE HTML FILE!!!
// fs.writeFile('./index.html', pageHTML, err => {
//     //stops execution of code if an error appears
//     if (err) throw (err);

//     console.log('Portfolio complete!  Check out index.html to see the output!');
// });

















//good tool from what we learned in lesson one but we don't neeed for the project
//holds user command line arguments
// const profileDataArgs = process.argv.slice(2);
//extract arguments and store them into distinct variables
// const [name, github] = profileDataArgs;


// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);