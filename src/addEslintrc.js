const chalk = require('chalk');
const exec = require('child_process').exec;
const copyTemplate = require('./copyTemplate');

const addEslintrc = projectName => {
  console.log('Adding eslintrc.json');

  const from = '.eslintrc.json';
  const to = process.cwd() + '/' + projectName + '/.eslintrc.json';

  copyTemplate(from, to);

  console.log('Deleting eslintrc.js');

  const command = 'rm -rf .eslintrc.js';
  const path = process.cwd() + '/' + projectName;

  const child = exec(command, { cwd: path });

  child.stdout.on('data', function(data) {
    console.log(chalk.green(data));
  });
  child.stderr.on('data', function(data) {
    console.log(chalk.yellow(data));
  });
  child.on('close', function(code) {
    if (code === 0) {
      console.log(chalk.cyan('closing code: ' + code));
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = addEslintrc;
