#!/usr/bin/env node

const program = require('commander');
const installEslint = require('./src/installEslint');
const createProject = require('./src/createProject');
const installPackages = require('./src/installPackages');
const installDevPackages = require('./src/installDevPackages');
const addPrettierrc = require('./src/addPrettierrc');

program.version('0.0.1').description('React Native project creation system');

program
  .command('init <projectName>')
  .description('Create a React Native project')
  .action(async projectName => {
    createProject(projectName);
    installEslint(projectName);
    installPackages(projectName);
    installDevPackages(projectName);
    addPrettierrc(projectName);
  });

program.parse(process.argv);
