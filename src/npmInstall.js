const chalk = require('chalk');
const exec = require('child_process').exec;
const podInstall = require('./podInstall');

const npmInstall = projectName => {
  const command = 'npm i';
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
      podInstall(projectName);
    } else {
      console.log(chalk.red('closing code: ' + code));
    }
  });
};

module.exports = npmInstall;
