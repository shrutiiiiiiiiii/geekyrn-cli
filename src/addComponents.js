const chalk = require('chalk');
const exec = require('child_process').exec;
const addFiletoText = require('./addFiletoText');
const addFiletoTextInput = require('./addFiletoTextInput');

const addComponents = projectName => {
  const command = 'mkdir Text & mkdir TextInput';
  const path = process.cwd() + '/' + projectName + '/src/Components';

  const child = exec(command, { cwd: path });

  console.log('Adding folders to Components');

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
      addFiletoText(projectName);
      addFiletoTextInput(projectName);
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = addComponents;
