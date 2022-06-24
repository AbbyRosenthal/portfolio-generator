const inquirer = require('inquirer');

const promptUser = () => {
return inquirer.prompt([
   {
       type: 'input',
       name: 'name',
       message: 'What is your name? (Required)',
       validate: nameInput => {
           if (nameInput) {
               return true;
           } else {
               console.log('Please enter your name!');
               return false;
           }
       }
   },
   {
       type: 'input',
       name: 'github',
       message: 'Enter your GitHub Username (Required)',
       validate: githubInput => {
           if (githubInput) {
               return true;
           } else {
               console.log('Please enter your GitHub username!')
           }
       }
   },
   {
       type: 'confirm',
       name: 'confirmAbout',
       message: 'Would you like to enter some information about yourself for an "About" section?',
       default: true
   }
]);
};



const promptProject = portfolioData => {
    console.log(`
        =================
        Add a New Project
        ==================
    `);
     //If there's no 'projects' array property, create one
     if (!portfolioData.projects) {
        portfolioData.projects = [];
        }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter your project name!')
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter your project description!')
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project (Required)',
            validate: githubLink => {
                if (githubLink) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Link!')
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject?',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject (portfolioData);

            } else {
                return portfolioData;
            }
        });
};

promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
});

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