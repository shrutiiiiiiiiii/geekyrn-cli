const chalk = require('chalk');
const exec = require('child_process').exec;
const addScreens = require('./addScreens');
const addComponents = require('./addComponents');
const addStyleGuide = require('./addStyleGuide');

const addFolders = projectName => {
  const command =
    'mkdir Components & mkdir Screens & mkdir Utils & mkdir store';
  const path = process.cwd() + '/' + projectName + '/src';

  const child = exec(command, { cwd: path });

  console.log('Making Sub folders for src');

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
      addScreens(projectName);
      addComponents(projectName);
      addStyleGuide(projectName);
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = addFolders;
