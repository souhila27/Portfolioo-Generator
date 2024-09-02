import inquirer from 'inquirer';
// const fs = require('fs');
// const generatePage = require("./src/page-template.js");
// const pageHTML = generatePage(name, gitHub);

// fs.writeFile('index.html', pageHTML, err =>{
//     if(err) throw err;

//     console.log('Portfolio complete! checkout index.html to see the output!');
// });
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInpute => {
        if(nameInpute){
          return true;
        }
        else{
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput =>{
        if(githubInput){
          return true;
        }else{
          console.log('Please enter your GitHub Username!');
          return false;
        }

      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};



const promptProject = portfolioData => {
  // if there's no projects array property, create one 
  if (!portfolioData.projects){
    portfolioData.projects = [];
  }
  
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (Required)',
      validate: ProjectName =>{
        if(ProjectName){
          return true;
        }else{
          console.log('Please enter your Project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: projectDiscription => {
        if(projectDiscription){
          return true;

        }else{
          console.log('Please enter the Project Description!');
          return false;
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
      message: 'Enter the GitHub link to your project. (Required)',
      validate: githubLinkInput =>{
        if(githubLinkInput){
          return true;
        }else{
          console.log('Please the GitHub link to your project');
          return false
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
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]).then(projectData=>{
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
};

promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData)
});