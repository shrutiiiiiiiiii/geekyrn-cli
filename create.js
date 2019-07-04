#!/usr/bin/env node

const program = require('commander');
const installEslint = require('./installEslint');
const createProject = require('./createProject');
const installPackages = require('./installPackages');
const addPrettierrc = require('./addPrettierrc');

program.version('0.0.1').description('React Native project creation system');

program
  .command('init <projectName>')
  .description('Create a React Native project')
  .action(async projectName => {
    createProject(projectName);
    installEslint(projectName);
    installPackages(projectName);
    addPrettierrc(projectName);
  });

program.parse(process.argv);
