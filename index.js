#!/usr/bin/env node

const program = require('commander');
const createProject = require('./src/createProject');
const addSplashscreen = require('./src/splashScreen/addSplashscreen');

program.version('0.0.1').description('React Native project creation system');

program
  .command('init <projectName>')
  .description('Create a React Native project')
  .action(async projectName => {
    createProject(projectName);
  });

program
  .command('add-splashscreen <pathToImage>')
  .description('Add a splashscreen in the current React Native project')
  .action(async pathToImage => {
    addSplashscreen(pathToImage);
  });

program.parse(process.argv);
